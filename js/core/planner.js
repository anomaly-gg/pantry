/* The week planner. Plain rules, no AI:
   - walk the 7 days meal by meal, scoring every recipe that fits the slot
   - spend pantry amounts as meals are planned, so 3 cans of sardines are never planned into 5 meals
   - fresh meat, fish, leafy greens and "use soon" items score high early in the week, canned goods later
   - avoid repeating a dish, and the same main ingredient back to back
   - whatever a chosen meal still needs goes on the shopping list
   No DOM. */

const SLOT_NAMES = { B: "Breakfast", L: "Lunch", D: "Dinner" };
const SLOT_ORDER = ["B", "L", "D"];

function planSlots(prefs) { return SLOT_ORDER.filter(s => prefs.meals[s]); }

function fitsSlot(r, slot) { return r.slots.includes(slot) && !r.tagSet.has("side"); }

function scoreMeal(st, ctx) {
  const { d, slot, prefs, mainsToday, yesterdayMain, mainCount } = ctx;
  const r = st.r;
  let s = st.tracked * 5;
  for (const u of st.uses) {
    const ingr = ING[u.key];
    const a = ctx.avail.get(u.key);
    if (a && a.soon) s += 14 * (1 - d / 3);
    if (ingr.perish === 2) s += 10 * (1 - d / 4);
    else if (ingr.perish === 1) s += 5 * (1 - d / 6);
    else s += d / 6;
  }
  // buying something already on this week's list is cheaper than buying something new
  for (const m of st.missing) s -= ctx.buying && ctx.buying.has(m.key) ? 6 : m.side ? 8 : 18;
  if (!st.tracked) s -= 15;
  if (mainsToday.includes(r.main)) s -= 8;
  if (r.main === yesterdayMain) s -= 5;
  const times = mainCount.get(r.main) || 0;
  if (times >= 2) s -= 7 * (times - 1);   // the same main ingredient 3+ times a week gets boring
  if (prefs.style !== "mix" && r.style === prefs.style) s += 4;
  if (slot === "B" && r.min <= 20) s += 3;
  if (slot === "L" && r.min <= 40) s += 2;
  if (cookedRecently(r.id, 4)) s -= 12;
  return s;
}

function pickMeal(ctx, exclude) {
  const { slot, prefs, rand } = ctx;
  const limit = MAX_MISSING[prefs.shop] ?? 2;
  const scored = [];
  for (const r of RECIPES) {
    if (!fitsSlot(r, slot) || exclude.has(r.id)) continue;
    const st = recipeStatus(r, ctx.avail, prefs.servings);
    st.score = scoreMeal(st, ctx) + rand() * 6;
    scored.push(st);
  }
  if (!scored.length) return null;
  const allowed = scored.filter(st => st.missing.filter(m => !m.side).length <= limit && (prefs.shop !== "none" || !st.missing.length));
  const pool = allowed.length ? allowed : scored.filter(st => st.missing.length === Math.min(...scored.map(x => x.missing.length)));
  return pool.sort((a, b) => b.score - a.score)[0];
}

/* Build a 7-day plan starting today. */
function buildWeek(state, seed) {
  const prefs = state.prefs;
  const slots = planSlots(prefs);
  const avail = pantryAvail(state);
  const rand = seededRandom(seed);
  const meals = [];
  const usedDay = new Map();
  const mainCount = new Map();
  const mainsByDay = [];
  const buying = new Set();
  for (let d = 0; d < 7; d++) {
    mainsByDay[d] = [];
    for (const slot of slots) {
      // a dish isn't repeated in the same week, unless the book runs out for this slot
      const exclude = new Set([...usedDay.keys()]);
      const ctx = { d, slot, prefs, avail, rand, mainsToday: mainsByDay[d], yesterdayMain: d ? mainsByDay[d - 1][slots.indexOf(slot)] : null, mainCount, buying };
      let st = pickMeal(ctx, exclude);
      if (!st) st = pickMeal(ctx, new Set([...usedDay].filter(([, day]) => d - day < 3).map(([id]) => id)));
      if (!st) continue;
      spend(avail, st.uses);
      for (const m of st.missing) buying.add(m.key);
      usedDay.set(st.r.id, d);
      mainsByDay[d].push(st.r.main);
      mainCount.set(st.r.main, (mainCount.get(st.r.main) || 0) + 1);
      meals.push(mealFrom(st, d, slot));
    }
  }
  return { start: todayIso(), seed, at: Date.now(), servings: prefs.servings, meals };
}

function mealFrom(st, d, slot) {
  return { id: uid(), d, slot, rid: st.r.id, uses: st.uses, missing: st.missing.map(m => ({ key: m.key, amt: m.amt })), done: false };
}

/* Pantry left after every planned meal except `skip` (meals already cooked have left the pantry already). */
function availExcept(state, plan, skip) {
  const avail = pantryAvail(state);
  for (const m of plan.meals) if (m !== skip && !m.done) spend(avail, m.uses);
  return avail;
}

/* Alternatives for one meal, best first. */
function swapOptions(state, plan, meal, n = 6) {
  const avail = availExcept(state, plan, meal);
  const inPlan = new Set(plan.meals.map(m => m.rid));
  const sameDay = plan.meals.filter(m => m.d === meal.d && m !== meal).map(m => RECIPE_BY_ID[m.rid]?.main);
  const ctx = { d: meal.d, slot: meal.slot, prefs: state.prefs, avail, rand: () => 0, mainsToday: sameDay, yesterdayMain: null, mainCount: new Map() };
  const out = [];
  for (const r of RECIPES) {
    if (!fitsSlot(r, meal.slot) || inPlan.has(r.id)) continue;
    const st = recipeStatus(r, avail, state.prefs.servings);
    if (!st.tracked) continue;
    st.score = scoreMeal(st, ctx) - st.missing.length * 20;
    out.push(st);
  }
  return out.sort((a, b) => b.score - a.score).slice(0, n);
}
function swapMeal(state, plan, meal, rid) {
  const avail = availExcept(state, plan, meal);
  const st = recipeStatus(RECIPE_BY_ID[rid], avail, state.prefs.servings);
  Object.assign(meal, mealFrom(st, meal.d, meal.slot), { id: meal.id });
}

/* Put everything the plan still needs on the shopping list (replacing the plan's earlier unticked items). */
function syncPlanShopping(state, plan) {
  for (const s of Object.values(state.shop)) if (s.src === "plan" && !s.got) removeShop(s.id, false);
  if (!plan) return;
  const start = fromIso(plan.start);
  for (const m of plan.meals) {
    if (m.done) continue;
    const when = addDays(start, m.d).toLocaleDateString("en-US", { weekday: "short" }) + " " + SLOT_NAMES[m.slot].toLowerCase();
    for (const miss of m.missing) {
      addShop(ING[miss.key].name, { key: miss.key, amt: ING[miss.key].track ? miss.amt : null, forText: when, src: "plan" });
    }
  }
}

/* Which day of the plan is today (0-6), or -1 when the plan is over / not started. */
function planDayIndex(plan) {
  if (!plan) return -1;
  const d = Math.round((fromIso(todayIso()) - fromIso(plan.start)) / DAY_MS);
  return d >= 0 && d < 7 ? d : -1;
}
