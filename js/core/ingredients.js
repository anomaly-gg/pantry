/* Recognising ingredients in free text: "Ligo sardines in tomato sauce" → sardines. No DOM. */

const ALIAS_INDEX = (() => {
  const list = [];
  for (const ingr of Object.values(ING)) {
    const names = new Set([norm(ingr.name), norm(ingr.key.replace(/-/g, " ")), ...ingr.alias.map(norm)]);
    for (const a of names) if (a) list.push([a, ingr.key]);
  }
  list.sort((a, b) => b[0].length - a[0].length);   // longest first
  return list;
})();
const EXACT = new Map(ALIAS_INDEX.map(([a, k]) => [a, k]));

function findAlias(text) {
  if (EXACT.has(text)) return EXACT.get(text);
  const padded = " " + text + " ";
  let best = null;
  for (const [a, k] of ALIAS_INDEX) {
    const at = padded.indexOf(" " + a + " ");
    if (at < 0) continue;
    // longest alias wins; equal length → the one that appears first
    if (!best || a.length > best.len || (a.length === best.len && at < best.at)) best = { k, len: a.length, at };
  }
  return best ? best.k : null;
}

/* Text → ingredient key, or null. The part before "in"/"with"/"sa" is the thing itself:
   "sardines in tomato sauce" is sardines, not tomato sauce. */
function matchIngredient(text) {
  const t = norm(text);
  if (!t) return null;
  if (EXACT.has(t)) return EXACT.get(t);
  const head = t.split(/ (?:in|with|sa|na) /)[0];
  if (head !== t) { const k = findAlias(head); if (k) return k; }
  const k = findAlias(t);
  if (k) return k;
  // plural/singular fallback: "tomatoe" "potatos" "egg"
  const loose = t.replace(/(es|s)\b/g, "");
  return loose !== t ? findAlias(loose) : null;
}

/* Ingredients a person can tick as "always in my kitchen" (things you don't count). */
const BASIC_CHOICES = Object.values(ING).filter(i => !i.track).map(i => i.key);
const DEFAULT_BASICS = ["salt", "pepper", "oil", "sugar", "water"];
