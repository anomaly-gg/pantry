/* Small shared helpers. No DOM. */

const norm = s => String(s || "").toLowerCase().replace(/[’']/g, "'").replace(/[^a-z0-9' ]/g, " ").replace(/\s+/g, " ").trim();
const cap = s => { s = String(s || "").trim(); return s.charAt(0).toUpperCase() + s.slice(1); };
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
const clone = o => JSON.parse(JSON.stringify(o));
const plural = (n, one, many) => n + " " + (n === 1 ? one : (many || one + "s"));

/* 1.5 → "1½", 0.25 → "¼", 2 → "2", 0.4 → "0.4" */
const FRACTIONS = [[0.25, "¼"], [0.333, "⅓"], [0.5, "½"], [0.667, "⅔"], [0.75, "¾"]];
function prettyNum(x) {
  if (x == null || !isFinite(x)) return "";
  const whole = Math.floor(x + 1e-9);
  const frac = x - whole;
  if (frac < 0.05) return String(whole);
  if (frac > 0.95) return String(whole + 1);
  for (const [v, s] of FRACTIONS) if (Math.abs(frac - v) < 0.05) return (whole ? whole : "") + s;
  return String(Math.round(x * 10) / 10);
}

/* Deterministic random numbers (the week planner's tie-breaker), so the same seed gives the same plan. */
function seededRandom(seed) {
  let s = (seed >>> 0) || 1;
  return () => { s ^= s << 13; s >>>= 0; s ^= s >>> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; };
}

const DAY_MS = 86400000;
const isoDate = d => d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
const fromIso = s => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
const todayIso = () => isoDate(new Date());
