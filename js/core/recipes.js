/* Turns the recipe book's compact "key amount | note" lines into structured ingredients, once at load.
   No DOM. */

const PROTEIN_KEYS = new Set(Object.values(ING).filter(i => i.track && (i.cat === "meat" || (i.cat === "canned" && !["coconut-milk", "evap-milk", "tomato-sauce", "corn-can", "mushroom-can", "cream-of-mushroom", "chickpeas"].includes(i.key)))).map(i => i.key).concat(["eggs"]));
const RICE_PER_SERVING = 70;
const WHOLE_KEYS = new Set(["bay-leaf", "chili", "calamansi", "bouillon", "cocoa"]);   // counted, never "1½"   // grams of uncooked rice per person when a dish is served with rice

function parseIngLine(line, rid) {
  const [left, note] = line.split("|").map(s => s.trim());
  const m = left.match(/^([a-z0-9-]+)(?:\s+([\d.\/]+)\s*([a-z]+)?)?(\?)?$/);
  if (!m) throw new Error(rid + ": can't read ingredient \"" + line + "\"");
  const key = m[1];
  const ingr = ING[key];
  if (!ingr) throw new Error(rid + ": unknown ingredient \"" + key + "\"");
  let amt = null;
  if (m[2]) {
    // in the recipe book a bare number is already in the ingredient's base unit
    amt = m[3] ? toBase({ n: parseNumber(m[2]), unit: UNIT_OF[m[3]] || m[3] }, ingr) : parseNumber(m[2]);
    if (amt == null) throw new Error(rid + ": can't convert \"" + left + "\"");
  }
  if (ingr.track && amt == null && !m[4]) throw new Error(rid + ": \"" + key + "\" needs an amount");
  return { key, amt, opt: !!m[4], note: note || "" };
}

const RECIPE_BY_ID = {};
for (const r of RECIPES) {
  if (RECIPE_BY_ID[r.id]) throw new Error("duplicate recipe id " + r.id);
  r.items = r.ing.map(l => parseIngLine(l, r.id));
  r.tagSet = new Set(r.tags.split(/\s+/).filter(Boolean));
  if (r.min <= 20) r.tagSet.add("quick");
  r.withRice = r.tagSet.has("ulam");
  const prot = r.items.find(i => !i.opt && PROTEIN_KEYS.has(i.key));
  r.main = prot ? prot.key : (r.items.find(i => !i.opt && ING[i.key].track) || {}).key || "veg";
  RECIPE_BY_ID[r.id] = r;
}

/* Ingredient name for display, singular when there's one: "tomato", "eggs" */
function ingName(ingr, n) {
  let s = ingr.name.replace(/\s*\(.*?\)/, "").toLowerCase();
  if (n != null && n <= 1) s = s.replace(/oes$/, "o").replace(/ies$/, "i").replace(/([^s])s$/, "$1");
  return s;
}

/* How the ingredient reads in a list for `servings`: "1 kg chicken, cut into serving pieces" */
function ingredientLine(item, servings) {
  const ingr = ING[item.key];
  if (/^\d/.test(item.note)) {
    const [first, ...rest] = scaleNote(item.note, servings, WHOLE_KEYS.has(item.key)).split(",");
    const bare = /^[\d\s\/½¼¾⅓⅔.]+$/.test(first.trim());
    const nm = ingName(ingr, bare ? parseNumber(first.trim()) : null);
    const named = !bare && first.toLowerCase().includes(nm.split(" ")[0]);
    return first + (named ? "" : " " + nm) + (rest.length ? "," + rest.join(",") : "");
  }
  if (item.amt != null) {
    const a = scaleAmt(item.amt, ingr, servings);
    const amtText = ingr.unit === "pc" ? prettyNum(a) : formatAmt(a, ingr);
    return amtText + " " + ingName(ingr, ingr.unit === "pc" ? a : 2) + (item.note ? ", " + item.note : "");
  }
  return cap(ingName(ingr)) + (item.note ? ", " + item.note : "");
}
