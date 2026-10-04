/* DOM helpers: element builder, icons, toast, clipboard. */

function h(tag, attrs, ...kids) {
  const el = document.createElement(tag);
  if (attrs) for (const [k, v] of Object.entries(attrs)) {
    if (v == null || v === false) continue;
    if (k === "class") el.className = v;
    else if (k === "text") el.textContent = v;
    else if (k.startsWith("on") && typeof v === "function") el.addEventListener(k.slice(2), v);
    else if (k === "value") el.value = v;
    else if (k === "checked") el.checked = !!v;
    else el.setAttribute(k, v === true ? "" : v);
  }
  for (const c of kids.flat(Infinity)) if (c != null && c !== false) el.append(c.nodeType ? c : String(c));
  return el;
}

/* Like el.append, but skips null/false (native append would print "null"). */
function appendAll(el, ...kids) { el.append(...kids.flat().filter(k => k != null && k !== false)); }

const ICONS = {
  check: "M5 12.5l4.5 4.5L19 7.5",
  x: "M6 6l12 12M18 6L6 18",
  plus: "M12 5v14M5 12h14",
  clock: "M12 7v5l3 2M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z",
  users: "M16 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1M9.5 10.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 19v-1a4 4 0 0 0-3-3.9M15.5 4.6a3 3 0 0 1 0 5.8",
  swap: "M7 7h11l-3-3M17 17H6l3 3",
  search: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM20 20l-4-4",
  cart: "M3 4h2l2.4 11h10.2L20 8H6.2M10 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM17 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
  flame: "M12 21c4 0 6-2.7 6-6 0-4-3-5.5-4-9-2 1.5-3 3.5-3 6-1-.5-2-1.5-2-3-1.5 1.5-3 3.5-3 6 0 3.3 2 6 6 6z",
  copy: "M9 9h10v11H9zM5 15V4h10",
  back: "M15 5l-7 7 7 7",
  sparkle: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z",
};
function icon(name, size = 18) {
  const ns = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(ns, "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("width", size); svg.setAttribute("height", size);
  svg.setAttribute("aria-hidden", "true");
  svg.classList.add("ico");
  const p = document.createElementNS(ns, "path");
  p.setAttribute("d", ICONS[name]);
  p.setAttribute("fill", "none"); p.setAttribute("stroke", "currentColor");
  p.setAttribute("stroke-width", "2"); p.setAttribute("stroke-linecap", "round"); p.setAttribute("stroke-linejoin", "round");
  svg.append(p);
  return svg;
}

let toastTimer = null;
/* toast("Removed rice", { label: "Undo", fn }) */
function toast(msg, action) {
  document.querySelector(".toast")?.remove();
  const t = h("div", { class: "toast", role: "status" }, h("span", { text: msg }),
    action ? h("button", { onclick: () => { t.remove(); action.fn(); } }, action.label) : null);
  document.body.append(t);
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.remove(), action ? 5000 : 2600);
}

async function copyText(text) {
  try { await navigator.clipboard.writeText(text); return true; }
  catch {
    const ta = h("textarea", { style: "position:fixed;opacity:0" }, text);
    document.body.append(ta); ta.select();
    let ok = false;
    try { ok = document.execCommand("copy"); } catch {}
    ta.remove();
    return ok;
  }
}

/* A −/+ number control. */
function stepper(value, min, max, onChange, label) {
  const out = h("output", { class: "num", text: value });
  const set = v => { v = Math.max(min, Math.min(max, v)); out.textContent = v; onChange(v); };
  return h("div", { class: "stepper", role: "group", "aria-label": label },
    h("button", { type: "button", "aria-label": "Fewer", onclick: () => set(+out.textContent - 1) }, "−"),
    out,
    h("button", { type: "button", "aria-label": "More", onclick: () => set(+out.textContent + 1) }, "+"));
}

/* Segmented choice: [["few","A few"], …] */
function segmented(name, options, current, onChange) {
  return h("div", { class: "seg", role: "radiogroup" }, options.map(([v, label]) =>
    h("label", null, h("input", { type: "radio", name, value: v, checked: v === current, onchange: () => onChange(v) }), h("span", { text: label }))));
}
