/* What can I cook? Compares recipes against the pantry. No DOM.

   Availability ("avail") is a Map key → { amt, some, soon }:
     amt  = known total in the ingredient's base unit
     some = there's at least one item with no amount ("some"), good for SOME_USES more recipes
   The week planner works on a copy of it and spends it meal by meal. */

const SOME_USES = 2;          // an item with no amount covers this many recipes
const ENOUGH = 0.6;           // having 60% of an amount still counts (cook a little smaller)

function pantryAvail(state) {
  const avail = new Map();
  for (const it of Object.values(state.items)) {
    if (!it.key) continue;
    const a = avail.get(it.key) || { amt: 0, some: 0, soon: false };
    if (it.amt != null) a.amt += it.amt; else a.some = SOME_USES;
    a.soon = a.soon || !!it.soon;
    avail.set(it.key, a);
  }
  for (const k of state.prefs.basics) if (!avail.has(k)) avail.set(k, { amt: 0, some: Infinity, soon: false, basic: true });
  return avail;
}
const cloneAvail = avail => new Map([...avail].map(([k, v]) => [k, Object.assign({}, v)]));

/* Everything a recipe needs for `servings`, including rice on the side for ulam. */
function recipeNeeds(r, servings) {
  const needs = r.items.map(i => ({ key: i.key, opt: i.opt, amt: i.amt != null ? scaleAmt(i.amt, ING[i.key], servings) : null }));
  if (r.withRice && !r.items.some(i => i.key === "rice")) needs.push({ key: "rice", opt: false, amt: RICE_PER_SERVING * servings, side: true });
  return needs;
}

/* For one recipe: what's covered, what's missing, which pantry amounts it would use. */
function recipeStatus(r, avail, servings) {
  const have = [], missing = [], uses = [];
  let soon = 0, tracked = 0;
  for (const n of recipeNeeds(r, servings)) {
    const ingr = ING[n.key];
    const a = avail.get(n.key);
    let ok;
    if (!a) ok = false;
    else if (!ingr.track || n.amt == null) ok = a.amt > 0 || a.some > 0;
    else ok = a.some > 0 || a.amt >= n.amt * ENOUGH;
    if (ok) {
      have.push(n);
      if (ingr.track && n.amt != null) {
        tracked++;
        uses.push({ key: n.key, amt: a.some > 0 && a.amt < n.amt ? null : Math.min(n.amt, a.amt) });
        if (a.soon) soon++;
      }
    } else if (!n.opt) {
      const short = a && a.amt > 0 ? n.amt - a.amt : n.amt;
      missing.push({ key: n.key, amt: ingr.track ? short : null, side: !!n.side });
    }
  }
  return { r, have, missing, uses, soon, tracked };
}

/* Spend a recipe's uses from an availability map. */
function spend(avail, uses) {
  for (const u of uses) {
    const a = avail.get(u.key);
    if (!a) continue;
    if (u.amt == null || a.amt < u.amt) { if (a.some > 0 && a.some !== Infinity) a.some--; a.amt = Math.max(0, a.amt - (u.amt || 0)); }
    else a.amt -= u.amt;
  }
}

const MAX_MISSING = { none: 0, few: 2, any: 4 };

/* All recipes ranked for "Cook now": fewest missing first, then the ones that use up "use soon" items
   and the most pantry, then the cooking style you like. */
function rankRecipes(state, filter = {}) {
  const avail = pantryAvail(state);
  const servings = state.prefs.servings;
  const limit = filter.maxMissing ?? 2;
  const out = [];
  for (const r of RECIPES) {
    if (filter.tags && filter.tags.some(t => t === "breakfast" ? !r.slots.includes("B") : !r.tagSet.has(t))) continue;
    if (filter.style && r.style !== filter.style) continue;
    if (filter.q && !matchesQuery(r, filter.q)) continue;
    const st = recipeStatus(r, avail, servings);
    if (st.missing.length > Math.max(limit, filter.q ? 9 : 0)) continue;
    if (!st.tracked && !filter.q) continue;       // must use something you actually have
    st.score = -st.missing.length * 100 + st.soon * 12 + st.tracked * 4
      + (r.style === state.prefs.style ? 3 : 0) - (cookedRecently(r.id, 3) ? 15 : 0);
    out.push(st);
  }
  return out.sort((a, b) => b.score - a.score || a.r.min - b.r.min);
}

function matchesQuery(r, q) {
  const t = norm(q);
  if (!t) return true;
  if (norm(r.name).includes(t)) return true;
  return r.items.some(i => norm(ING[i.key].name).includes(t) || ING[i.key].alias.some(a => a.includes(t)));
}

/* "Buy eggs → unlocks 9 more recipes": the single missing ingredients that would open up the most. */
function unlockHints(state, max = 3) {
  const avail = pantryAvail(state);
  const counts = new Map();
  for (const r of RECIPES) {
    const st = recipeStatus(r, avail, state.prefs.servings);
    if (st.missing.length !== 1 || !st.tracked) continue;
    const k = st.missing[0].key;
    counts.set(k, (counts.get(k) || 0) + 1);
  }
  return [...counts].sort((a, b) => b[1] - a[1]).slice(0, max).filter(([, n]) => n >= 2).map(([key, n]) => ({ key, n }));
}
