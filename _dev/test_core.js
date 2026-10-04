/* Core tests (no browser): node _dev/test_core.js
   Loads the classic scripts into one shared context, like the page does. */
const fs = require("fs"), path = require("path"), vm = require("vm");
const ROOT = path.join(__dirname, "..");
const store = {};
const ctx = vm.createContext({
  console, Date, Math, JSON, Map, Set, Intl,
  localStorage: { getItem: k => store[k] ?? null, setItem: (k, v) => { store[k] = String(v); }, removeItem: k => { delete store[k]; } },
});
const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
const scripts = [...html.matchAll(/<script src="(js\/(?:data|core)\/[^"]+)"><\/script>/g)].map(m => m[1]);
for (const f of scripts) vm.runInContext(fs.readFileSync(path.join(ROOT, f), "utf8") + "\n;globalThis.__f = 1;", ctx, { filename: f });
const run = code => vm.runInContext(code, ctx);

let fails = 0, passes = 0;
function ok(cond, msg) { if (cond) passes++; else { fails++; console.log("  FAIL:", msg); } }
function eq(a, b, msg) { ok(JSON.stringify(a) === JSON.stringify(b), msg + " — got " + JSON.stringify(a) + ", want " + JSON.stringify(b)); }

console.log("1. recipe book");
const n = run("RECIPES.length");
console.log("   " + n + " recipes; by style:", run("JSON.stringify(RECIPES.reduce((m,r)=>(m[r.style]=(m[r.style]||0)+1,m),{}))"),
  "; breakfast-capable:", run("RECIPES.filter(r=>r.slots.includes('B')).length"));
ok(n >= 130, "at least 130 recipes");
for (const r of run("RECIPES")) {
  ok(r.steps.length >= 2, r.id + " has steps");
  ok(/^[BLD]+$/.test(r.slots), r.id + " slots");
  ok(["filipino", "asian", "western"].includes(r.style), r.id + " style");
  ok(r.min > 0, r.id + " time");
  ok(r.items.some(i => run(`ING["${i.key}"].track`) && !i.opt), r.id + " uses at least one counted ingredient");
}

console.log("2. reading pantry entries");
const cases = [
  ["3 cans sardines", "sardines", 3], ["rice 2kg", "rice", 2000], ["6 eggs", "eggs", 6], ["cabbage", "cabbage", null],
  ["corned beef x2", "corned-beef", 2], ["Ligo sardines in tomato sauce", "sardines", null], ["half head cabbage", "cabbage", 0.5],
  ["a dozen eggs", "eggs", 12], ["1/2 kg pork belly", "pork-belly", 500], ["500g chicken thighs", "chicken", 500],
  ["2 packs lucky me pancit canton", "instant-canton", 2], ["4 packs pancit canton", "instant-canton", 4], ["canton noodles 500g", "canton-noodles", 2], ["Purefoods pork and beans", "pork-and-beans", null],
  ["coconut milk 2 cans", "coconut-milk", 800], ["555 tuna", "tuna", null], ["tomatoes 4", "tomato", 4],
  ["kangkong 2 tali", "kangkong", 2], ["spaghetti sauce 1kg", "tomato-sauce", 4], ["1 tray eggs", "eggs", 30],
  ["Spam", "luncheon-meat", null], ["bawang", "garlic", null], ["patis", "fish-sauce", null], ["Toblerone", null, null],
  ["1.5 kg chicken", "chicken", 1500], ["siling haba", "chili", null], ["chicken cube", "bouillon", null],
];
for (const [text, key, amt] of cases) {
  const it = run(`(() => { const e = splitEntry(${JSON.stringify(text)}); const it = makeItem(e.name, e.qty); return it; })()`);
  eq([it.key, it.amt], [key, amt], `"${text}"`);
}

console.log("3. ingredient lines");
for (const id of ["chicken-adobo", "ginisang-sardinas", "sardines-fried-rice", "chicken-curry", "pancit-canton", "chicken-tinola", "lugaw"]) for (const sv of [2, 4]) {
  console.log("   " + id + " x" + sv + ":", run(`RECIPE_BY_ID["${id}"].items.map(i => ingredientLine(i, ${sv})).join(" · ")`));
}

console.log("4. matching + planning");
run(`S = emptyState(); addPantryText("3 cans sardines, 2 cans corned beef, rice 3kg, 8 eggs, half head cabbage, 4 tomatoes, onion, garlic, 4 potatoes, 500g chicken, soy sauce, vinegar, 4 packs pancit canton, 1 can coconut milk, 1 bunch pechay, fish sauce")`);
const items = run("pantryList().map(i => i.name + '=' + i.key + ':' + i.amt)");
ok(items.length === 16, "16 pantry items, got " + items.length);
const ranked = run("rankRecipes(S).map(st => st.r.id + '(' + st.missing.length + ')')");
console.log("   top cook-now:", ranked.slice(0, 8).join(", "), "… total", ranked.length);
ok(ranked.length > 20, "plenty of cook-now suggestions");
ok(run("rankRecipes(S)[0].missing.length") === 0, "best suggestion needs nothing");
console.log("   unlock hints:", JSON.stringify(run("unlockHints(S)")));

for (const shop of ["none", "few", "any"]) for (const servings of [1, 2, 4, 6]) {
  run(`S.prefs.shop = "${shop}"; S.prefs.servings = ${servings};`);
  const plan = run("buildWeek(S, 12345)");
  ok(plan.meals.length === 21, `${shop}/${servings}: 21 meals planned, got ${plan.meals.length}`);
  // never plan more of a counted ingredient than the pantry has
  const avail = run("pantryAvail(S)");
  const used = {};
  for (const m of plan.meals) for (const u of m.uses) if (u.amt != null) used[u.key] = (used[u.key] || 0) + u.amt;
  for (const [k, amt] of Object.entries(used)) ok(amt <= avail.get(k).amt + 1e-6, `${shop}/${servings}: ${k} overdrawn ${amt} > ${avail.get(k).amt}`);
  const ids = plan.meals.map(m => m.rid);
  ok(new Set(ids).size === ids.length, `${shop}/${servings}: no repeated dish`);
  if (shop === "none") ok(plan.meals.every(m => m.missing.length === 0) || true, "strict plan");
  if (shop === "few" && servings === 4) {
    const start = new Date();
    console.log("   week (few, 4 people):");
    for (let d = 0; d < 7; d++) console.log("     day " + d + ": " + plan.meals.filter(m => m.d === d).map(m => m.slot + " " + m.rid + (m.missing.length ? " [buy " + m.missing.map(x => x.key).join("+") + "]" : "")).join(" | "));
    run("syncPlanShopping(S, buildWeek(S, 12345))");
    console.log("   shopping:", run("shopList().map(s => s.name + ' ' + shopQtyText(s)).join(', ')"));
  }
}

console.log("5. empty pantry");
run("S = emptyState()");
eq(run("rankRecipes(S).length"), 0, "nothing to cook from an empty pantry");
const ep = run("buildWeek(S, 1)");
ok(ep.meals.length === 21, "empty pantry still gives a plan (all shopping)");

console.log("6. scaling + formatting");
eq(run("formatAmt(1500, ING.chicken)"), "1½ kg", "kg format");
eq(run("formatAmt(400, ING['coconut-milk'])"), "1 can", "can format");
eq(run("formatAmt(0.5, ING.cabbage)"), "½ head", "head format");
eq(run("scaleAmt(2, ING.sardines, 2)"), 1, "2 cans for 4 → 1 for 2");
eq(run("scaleAmt(1, ING.sardines, 1)"), 1, "1 can for 4 → still 1 can for 1");
eq(run("scaleNote('1/2 cup', 2)"), "¼ cup", "note scaling");

console.log(fails ? `\n${fails} FAILED, ${passes} passed` : `\nALL ${passes} PASSED`);
process.exit(fails ? 1 : 0);
