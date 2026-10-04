/* App state + saving to this device. Every record carries `at` (last change) so two devices can merge
   (js/core/sync.js). Deleted pantry/shopping items leave a tombstone so a delete on one device sticks.
   Keys are prefixed pc_ because /workout lives on the same origin. No DOM. */

const LS_STATE = "pc_state_v1";

function defaultPrefs() {
  return { servings: 4, style: "filipino", shop: "few", meals: { B: true, L: true, D: false }, lunchCoversDinner: true, basics: DEFAULT_BASICS.slice() };
}
function emptyState() {
  return { items: {}, itemsDel: {}, shop: {}, shopDel: {}, prefs: defaultPrefs(), prefsAt: 0, plan: null, planAt: 0, cooked: [] };
}
function normalizeState(s) {
  const base = emptyState();
  if (!s || typeof s !== "object") return base;
  for (const k of Object.keys(base)) if (s[k] == null || typeof s[k] !== typeof base[k]) s[k] = base[k];
  // saved before "lunch lasts till dinner" existed (2026-10-04): switch to the household's real routine
  if (s.prefs && s.prefs.lunchCoversDinner === undefined) s.prefs.meals = Object.assign({}, s.prefs.meals, { D: false });
  s.prefs = Object.assign(defaultPrefs(), s.prefs);
  s.prefs.meals = Object.assign({ B: true, L: true, D: false }, s.prefs.meals);
  if (!Array.isArray(s.prefs.basics)) s.prefs.basics = DEFAULT_BASICS.slice();
  if (!Array.isArray(s.cooked)) s.cooked = [];
  return s;
}

function lsLoad(key, fallback) { try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch { return fallback; } }
function lsSave(key, v) { try { localStorage.setItem(key, JSON.stringify(v)); } catch {} }

let S = normalizeState(lsLoad(LS_STATE, null));
let onDataChanged = () => {};     // set by sync
function saveState() { lsSave(LS_STATE, S); onDataChanged(); }

/* ---- pantry items ---- */
const pantryList = () => Object.values(S.items).sort((a, b) => a.name.localeCompare(b.name));

function makeItem(name, qty, key) {
  key = key === undefined ? matchIngredient(name) : key;
  const ingr = key ? ING[key] : null;
  const q = parseQty(qty);
  const amt = ingr && q ? toBase(q, ingr) : null;
  return { id: uid(), name: cap(name), key, amt, qty: amt == null ? (qty || "") : "", soon: false, at: Date.now() };
}

/* "3 cans sardines, rice 2kg, 6 eggs" → adds or updates items. Returns what happened, for the toast. */
function addPantryText(text) {
  const out = { added: [], updated: [] };
  for (const part of String(text).split(/[,;\n]+/)) {
    const e = splitEntry(part);
    if (!e || !e.name) continue;
    const key = matchIngredient(e.name);
    const same = Object.values(S.items).find(i => norm(i.name) === norm(e.name) || (key && i.key === key && norm(i.name) === norm(e.name)));
    if (same) {
      if (e.qty) setItemQty(same, e.qty, false);
      out.updated.push(same);
      continue;
    }
    const it = makeItem(e.name, e.qty, key);
    S.items[it.id] = it;
    out.added.push(it);
  }
  saveState();
  return out;
}

function setItemQty(it, text, save = true) {
  const ingr = it.key ? ING[it.key] : null;
  const q = parseQty(text);
  const amt = ingr && q ? toBase(q, ingr) : null;
  it.amt = amt;
  it.qty = amt == null ? String(text || "").trim() : "";
  it.at = Date.now();
  if (save) saveState();
}
function updateItem(it, patch) { Object.assign(it, patch, { at: Date.now() }); saveState(); }
function removeItem(id, save = true) {
  delete S.items[id];
  S.itemsDel[id] = Date.now();
  if (save) saveState();
}
function clearPantry() { for (const id of Object.keys(S.items)) removeItem(id, false); saveState(); }

/* What the pantry shows for an item's amount: "3 cans", "500 g", or whatever was typed. */
function itemQtyText(it) {
  if (it.amt != null && it.key) return formatAmt(it.amt, ING[it.key]);
  return it.qty || "";
}

/* ---- preferences ---- */
function setPrefs(patch) { Object.assign(S.prefs, patch); S.prefsAt = Date.now(); saveState(); }

/* ---- shopping list ---- */
const shopList = () => Object.values(S.shop).sort((a, b) => (a.got - b.got) || (a.src === b.src ? a.name.localeCompare(b.name) : a.src === "plan" ? -1 : 1));
function addShop(name, opts = {}) {
  const key = opts.key !== undefined ? opts.key : matchIngredient(name);
  const src = opts.src || "me";
  const existing = Object.values(S.shop).find(s => !s.got && s.src === src && ((key && s.key === key) || norm(s.name) === norm(name)));
  if (existing) {
    if (opts.amt != null && existing.amt != null) existing.amt += opts.amt;
    if (opts.forText && !existing.forText.includes(opts.forText)) existing.forText = existing.forText ? existing.forText + ", " + opts.forText : opts.forText;
    existing.at = Date.now();
    return existing;
  }
  const s = { id: uid(), name: cap(name), key, amt: opts.amt ?? null, qty: opts.qty || "", forText: opts.forText || "", src, got: false, at: Date.now() };
  S.shop[s.id] = s;
  return s;
}
function removeShop(id, save = true) { delete S.shop[id]; S.shopDel[id] = Date.now(); if (save) saveState(); }
function shopQtyText(s) { return s.amt != null && s.key ? formatAmt(s.amt, ING[s.key]) : s.qty || ""; }

/* Bought items go into the pantry, adding to what's already there. */
function moveGotToPantry() {
  let n = 0;
  for (const s of Object.values(S.shop)) {
    if (!s.got) continue;
    const have = s.key ? Object.values(S.items).find(i => i.key === s.key) : Object.values(S.items).find(i => norm(i.name) === norm(s.name));
    if (have) {
      if (have.amt != null && s.amt != null) have.amt += s.amt;
      else if (s.amt != null && !have.qty) have.amt = s.amt;
      have.at = Date.now();
    } else {
      const it = makeItem(s.name, "", s.key);
      it.amt = s.amt; it.qty = s.amt == null ? s.qty : "";
      S.items[it.id] = it;
    }
    removeShop(s.id, false);
    n++;
  }
  saveState();
  return n;
}

/* ---- cooking log (keeps suggestions varied) ---- */
function logCooked(rid) {
  S.cooked.push({ rid, at: Date.now() });
  S.cooked = S.cooked.slice(-60);
}
function cookedRecently(rid, days) {
  const since = Date.now() - days * DAY_MS;
  return S.cooked.some(c => c.rid === rid && c.at >= since);
}
