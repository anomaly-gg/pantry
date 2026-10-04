/* Phone ↔ PC (or whole household) sync through the workout-sync Worker, which is a plain versioned
   document store (source: workout-app/worker/). Each device merges locally, so nothing is lost:
   - pantry and shopping items: per item, the newest change wins; deletes leave tombstones
   - preferences, week plan: the newest change wins
   - cooking log: union
   Same sync codes format as the workout app, but a separate space. No DOM. */

const SYNC_URL = "https://workout-sync.xpropics.workers.dev";
const LS_SYNC = "pc_sync_v1";
let sync = Object.assign({ id: null, last: 0, error: null }, lsLoad(LS_SYNC, {}));
const saveSync = () => lsSave(LS_SYNC, sync);

function mergeById(a, b, delA, delB) {
  const del = Object.assign({}, delA);
  for (const [id, t] of Object.entries(delB || {})) del[id] = Math.max(del[id] || 0, t);
  const out = {};
  for (const src of [a || {}, b || {}]) for (const [id, it] of Object.entries(src)) {
    if (del[id] && del[id] >= (it.at || 0)) continue;
    if (!out[id] || (it.at || 0) > (out[id].at || 0)) out[id] = it;
  }
  // tombstones older than 60 days can go
  const cutoff = Date.now() - 60 * DAY_MS;
  for (const id of Object.keys(del)) if (del[id] < cutoff) delete del[id];
  return [out, del];
}

function mergeStates(a, b) {
  a = normalizeState(clone(a || {})); b = normalizeState(clone(b || {}));
  const [items, itemsDel] = mergeById(a.items, b.items, a.itemsDel, b.itemsDel);
  const [shop, shopDel] = mergeById(a.shop, b.shop, a.shopDel, b.shopDel);
  const seen = new Set(), cooked = [];
  for (const c of [...a.cooked, ...b.cooked].sort((x, y) => x.at - y.at)) { const k = c.rid + c.at; if (!seen.has(k)) { seen.add(k); cooked.push(c); } }
  return {
    items, itemsDel, shop, shopDel,
    prefs: a.prefsAt >= b.prefsAt ? a.prefs : b.prefs, prefsAt: Math.max(a.prefsAt, b.prefsAt),
    plan: a.planAt >= b.planAt ? a.plan : b.plan, planAt: Math.max(a.planAt, b.planAt),
    cooked: cooked.slice(-60),
  };
}

let syncRunning = null, syncAgain = false, syncTimer = null;
let onSyncApplied = () => {};

async function syncApi(path, opts = {}) {
  const r = await fetch(SYNC_URL + path, { cache: "no-store", ...opts, headers: { "Content-Type": "application/json" } });
  return { status: r.status, body: await r.json().catch(() => ({})) };
}

/* Pull, merge, push; retries when another device wrote in between. Resolves true if this device changed. */
function syncNow() {
  if (!sync.id) return Promise.resolve(false);
  if (syncRunning) { syncAgain = true; return syncRunning; }
  syncRunning = (async () => {
    let changed = false;
    try {
      for (let attempt = 0; attempt < 4; attempt++) {
        const got = await syncApi("/v1/spaces/" + sync.id);
        if (got.status === 404) throw new Error("This sync code no longer exists.");
        if (got.status !== 200) throw new Error("Sync server error (" + got.status + ").");
        const remote = mergeStates(got.body.doc, got.body.doc);
        const merged = mergeStates(S, remote);
        if (JSON.stringify(merged) !== JSON.stringify(mergeStates(S, S))) { S = merged; lsSave(LS_STATE, S); changed = true; }
        if (JSON.stringify(merged) === JSON.stringify(remote)) break;
        const put = await syncApi("/v1/spaces/" + sync.id, { method: "PUT", body: JSON.stringify({ doc: merged, ver: got.body.ver }) });
        if (put.status === 200) break;
        if (put.status !== 409) throw new Error("Sync server error (" + put.status + ").");
      }
      sync.last = Date.now(); sync.error = null;
    } catch (e) {
      sync.error = navigator.onLine === false ? "Offline. It will sync when you're back online." : e.message || "Couldn't reach the sync server.";
    }
    saveSync();
    syncRunning = null;
    if (changed) onSyncApplied();
    if (syncAgain) { syncAgain = false; return syncNow().then(c => c || changed); }
    return changed;
  })();
  return syncRunning;
}

function scheduleSync() { if (!sync.id) return; clearTimeout(syncTimer); syncTimer = setTimeout(syncNow, 1500); }
onDataChanged = scheduleSync;

const normalizeCode = s => String(s || "").toUpperCase().replace(/[^0-9A-Z]/g, "").replace(/O/g, "0").replace(/[IL]/g, "1");
const formatCode = id => (id || "").replace(/(.{4})(?=.)/g, "$1-");

async function createSyncSpace() {
  const r = await syncApi("/v1/spaces", { method: "POST" });
  if (r.status !== 201) throw new Error("Couldn't create a sync code (" + r.status + ").");
  sync.id = r.body.id; saveSync();
  await syncNow();
}
async function joinSyncSpace(code) {
  const id = normalizeCode(code);
  if (id.length !== 20) throw new Error("A sync code has 20 letters and numbers.");
  const r = await syncApi("/v1/spaces/" + id);
  if (r.status === 404) throw new Error("No pantry found for that code.");
  if (r.status !== 200) throw new Error("Sync server error (" + r.status + ").");
  sync.id = id; saveSync();
  await syncNow();
}
function leaveSync() { sync = { id: null, last: 0, error: null }; saveSync(); }
