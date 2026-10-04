/* Amounts: reading what people type ("3 cans", "half head", "1.5 kg"), converting to an ingredient's
   base unit, scaling for servings, and printing amounts back nicely. No DOM. */

const UNIT_WORDS = {
  kg: ["kg", "kgs", "kilo", "kilos", "kilogram", "kilograms"],
  g: ["g", "gr", "grams", "gram", "gms"],
  l: ["l", "liter", "liters", "litre", "litres", "ltr"],
  ml: ["ml", "mls", "milliliter", "milliliters", "cc"],
  cup: ["cup", "cups", "tasa"],
  can: ["can", "cans", "tin", "tins", "lata"],
  pack: ["pack", "packs", "pk", "pks", "pck", "packet", "packets", "sachet", "sachets", "pouch", "pouches", "bag", "bags", "box", "boxes", "bundle", "bundles", "balot"],
  pc: ["pc", "pcs", "piece", "pieces", "pcs.", "bulb", "bulbs", "block", "blocks", "ear", "ears", "fillet", "fillets", "stick", "sticks"],
  head: ["head", "heads", "ulo"],
  bunch: ["bunch", "bunches", "tali", "bundle of"],
  dozen: ["dozen", "doz"],
  tray: ["tray", "trays"],
  loaf: ["loaf", "loaves"],
  slice: ["slice", "slices"],
  whole: ["whole"],
  sack: ["sack", "sacks", "kaban"],
  ganta: ["ganta", "salop"],
  bottle: ["bottle", "bottles", "jar", "jars", "bar", "bars", "tub", "tubs"],
};
const UNIT_OF = {};
for (const [u, words] of Object.entries(UNIT_WORDS)) for (const w of words) UNIT_OF[w] = u;

const NUM_WORDS = { a: 1, an: 1, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, twelve: 12,
  half: 0.5, quarter: 0.25, isa: 1, dalawa: 2, tatlo: 3, apat: 4, lima: 5, kalahati: 0.5 };
const UNICODE_FRAC = { "½": 0.5, "¼": 0.25, "¾": 0.75, "⅓": 1 / 3, "⅔": 2 / 3 };

/* "1 1/2" → 1.5, "½" → 0.5, "1½" → 1.5, "half" → 0.5, "2.5" → 2.5 */
function parseNumber(s) {
  s = String(s).trim().toLowerCase();
  if (s in NUM_WORDS) return NUM_WORDS[s];
  let m = s.match(/^(\d+)?\s*([½¼¾⅓⅔])$/);
  if (m) return (m[1] ? +m[1] : 0) + UNICODE_FRAC[m[2]];
  m = s.match(/^(\d+)\s+(\d+)\/(\d+)$/);
  if (m) return +m[1] + m[2] / m[3];
  m = s.match(/^(\d+)\/(\d+)$/);
  if (m) return m[1] / m[2];
  m = s.match(/^\d+(?:[.,]\d+)?$/);
  if (m) return parseFloat(s.replace(",", "."));
  return null;
}

const NUM_RE = "(?:\\d+\\s+\\d+\\/\\d+|\\d+\\/\\d+|\\d*[½¼¾⅓⅔]|\\d+(?:[.,]\\d+)?|a|an|one|two|three|four|five|six|seven|eight|nine|ten|twelve|half|quarter|kalahati|isa|dalawa|tatlo|apat|lima)";
const UNIT_RE = "(?:" + Object.keys(UNIT_OF).sort((a, b) => b.length - a.length).map(w => w.replace(/[.]/g, "\\.")).join("|") + ")";
const QTY_RE = NUM_RE + "(?:\\s*" + UNIT_RE + "\\b)?";

/* Split "3 cans sardines" / "sardines - 3 cans" / "sardines x3" / "half head cabbage" into {name, qty}. */
function splitEntry(raw) {
  const s = String(raw || "").trim().replace(/\s+/g, " ");
  if (!s) return null;
  // a bare number of 100+ with no unit is a brand ("555 sardines"), not an amount
  const plausible = q => { const p = parseQty(q); return p && !(p.unit == null && p.n >= 100); };
  let m = s.match(new RegExp("^(" + QTY_RE + ")\\.?\\s+(?:of\\s+)?(.+)$", "i"));
  if (m && plausible(m[1])) return { name: m[2].trim(), qty: m[1].trim() };
  m = s.match(new RegExp("^(.+?)(?:\\s*[-–:(,x×]\\s*|\\s+)(" + QTY_RE + ")\\)?$", "i"));
  if (m && m[1].trim() && plausible(m[2])) return { name: m[1].replace(/[-–:(,]+$/, "").trim(), qty: m[2].trim() };
  return { name: s, qty: "" };
}

/* "3 cans" → {n: 3, unit: "can"}; "1.5kg" → {n: 1.5, unit: "kg"}; "6" → {n: 6, unit: null}; "" → null */
function parseQty(text) {
  const s = String(text || "").trim().toLowerCase();
  if (!s) return null;
  const m = s.match(new RegExp("^(" + NUM_RE + ")\\s*(" + UNIT_RE + ")?\\.?$", "i"));
  if (!m) return null;
  const n = parseNumber(m[1]);
  if (n == null) return null;
  return { n, unit: m[2] ? UNIT_OF[m[2].toLowerCase()] : null };
}

/* A parsed quantity → amount in the ingredient's base unit, or null when it can't be converted. */
function toBase(q, ingr) {
  if (!q || !ingr) return null;
  const { n } = q;
  let u = q.unit;
  if (u === "dozen") return ingr.unit === "pc" ? n * 12 : null;
  if (!u) {
    if (["pc", "can", "pack", "head", "bunch"].includes(ingr.unit)) return n;
    return ingr.conv.pc ? n * ingr.conv.pc : null;     // "chicken 4" = 4 pieces
  }
  if (u === ingr.unit) return n;
  if (ingr.conv[u] != null) return n * ingr.conv[u];
  if (u === "kg" && ingr.unit === "g") return n * 1000;
  if (u === "g" && ingr.unit === "g") return n;
  if (u === "l" && ingr.unit === "ml") return n * 1000;
  if (u === "slice" && ingr.unit === "pc") return n;
  if (u === "pc" && ["head", "bunch", "can", "pack"].includes(ingr.unit)) return n;
  return null;
}

/* Amount for `servings`, from a recipe amount written for 4. Countable things round to whole/halves. */
function scaleAmt(amt, ingr, servings) {
  const x = amt * servings / 4;
  if (["pc", "can", "pack"].includes(ingr.unit)) return Math.max(amt < 1 ? 0.5 : 1, Math.round(x * 2) / 2 >= 1 ? Math.round(x) : Math.round(x * 2) / 2);
  if (["head", "bunch"].includes(ingr.unit)) return Math.max(0.25, Math.round(x * 4) / 4);
  return Math.max(10, Math.round(x / 10) * 10);
}

/* Base amount → "1.5 kg", "3 cans", "½ head", "400 ml (1 can)" */
const UNIT_LABEL = { pc: ["pc", "pcs"], can: ["can", "cans"], pack: ["pack", "packs"], head: ["head", "heads"], bunch: ["bunch", "bunches"] };
function formatAmt(amt, ingr) {
  if (amt == null) return "";
  if (!ingr) return prettyNum(amt);
  const u = ingr.unit;
  if (u === "g") return amt >= 1000 ? prettyNum(amt / 1000) + " kg" : Math.round(amt) + " g";
  if (u === "ml") {
    const can = ingr.conv.can;
    if (can) { const c = amt / can; if (Math.abs(c * 2 - Math.round(c * 2)) < 0.12 && c >= 0.5) return prettyNum(Math.round(c * 2) / 2) + (c > 1.2 ? " cans" : " can"); }
    return amt >= 1000 ? prettyNum(amt / 1000) + " L" : Math.round(amt) + " ml";
  }
  const [one, many] = UNIT_LABEL[u] || [u, u + "s"];
  return prettyNum(amt) + " " + (amt > 1 ? many : one);
}

/* Scale the amounts in a recipe note: "1/2 cup" for 4 → "¼ cup" for 2. Only the part before the first
   comma is an amount ("1 can (400 ml), drained"). Counted things (cloves, leaves) stay whole numbers;
   measures round to kitchen fractions. */
const WHOLE_WORDS = /^(cloves?|leaves|pcs?|pieces?|slices?|eggs?|chilies|tablea|stalks?|sprigs?|bundles?)$/i;
function niceNum(x, whole) {
  if (whole) return String(Math.max(1, Math.round(x)));
  if (x >= 20) return String(Math.round(x / 5) * 5);
  const w = Math.floor(x), f = x - w;
  let best = 0;
  for (const o of [0, 0.25, 1 / 3, 0.5, 2 / 3, 0.75, 1]) if (Math.abs(f - o) < Math.abs(f - best)) best = o;
  return prettyNum(Math.max(0.25, w + best));
}
const SINGULAR = { cups: "cup", cans: "can", packs: "pack", heads: "head", bunches: "bunch", thumbs: "thumb", cloves: "clove",
  leaves: "leaf", slices: "slice", pieces: "piece", bundles: "bundle", stalks: "stalk", sprigs: "sprig" };
const PLURAL = Object.fromEntries(Object.entries(SINGULAR).map(([p, s]) => [s, p]));
function scaleNote(note, servings, whole) {
  if (!note) return note;
  const [first, ...rest] = note.split(",");
  const scaled = first.replace(/(\d+\s+\d+\/\d+|\d+\/\d+|\d+(?:\.\d+)?)(?![\d\/.-])(\s*)([a-z]*)/gi, (all, num, sp, word) => {
    const n = parseNumber(num);
    if (n == null) return all;
    const text = niceNum(n * servings / 4, whole || WHOLE_WORDS.test(word));
    const v = parseNumber(text);
    const w = word.toLowerCase();
    if (v <= 1 && SINGULAR[w]) word = SINGULAR[w];
    else if (v > 1 && PLURAL[w]) word = PLURAL[w];
    return text + sp + word;
  });
  return [scaled, ...rest].join(",");
}
