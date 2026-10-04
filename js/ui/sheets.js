/* Bottom sheets (recipe, swap, preferences…). Each open sheet adds a browser history entry so the phone's
   Back button closes the sheet instead of leaving the app. Entries are only pushed from taps, which Chrome
   requires for Back to stop on them. */

const sheetStack = [];
let ignorePops = 0;

function openSheet({ title, build, wide, onClose }) {
  const body = h("div", { class: "sheet-body" });
  const panel = h("div", { class: "sheet" + (wide ? " wide" : ""), role: "dialog", "aria-modal": "true", "aria-label": title || "Details" },
    h("div", { class: "sheet-head" },
      h("div", { class: "grab", "aria-hidden": "true" }),
      title ? h("h2", { class: "sheet-title", text: title }) : h("span"),
      h("button", { class: "icon-btn", "aria-label": "Close", onclick: () => closeSheet() }, icon("x", 22))),
    body);
  const wrap = h("div", { class: "sheet-wrap", onclick: e => { if (e.target === wrap) closeSheet(); } }, panel);
  document.getElementById("sheets").append(wrap);
  document.body.classList.add("sheet-open");
  const entry = { wrap, body, build, onClose, refresh: () => { const y = body.scrollTop; body.replaceChildren(); build(body, entry); body.scrollTop = y; } };
  sheetStack.push(entry);
  build(body, entry);
  history.pushState({ sheet: sheetStack.length }, "");
  requestAnimationFrame(() => wrap.classList.add("in"));
  panel.querySelector(".sheet-head .icon-btn").focus({ preventScroll: true });
  return entry;
}

function closeSheet(fromPop) {
  const top = sheetStack.pop();
  if (!top) return;
  top.wrap.remove();
  if (!sheetStack.length) document.body.classList.remove("sheet-open");
  if (!fromPop) { ignorePops++; history.back(); }
  top.onClose && top.onClose();
}
function closeAllSheets() { while (sheetStack.length) closeSheet(); }

window.addEventListener("popstate", () => {
  if (ignorePops) { ignorePops--; return; }
  if (sheetStack.length) closeSheet(true);
});
document.addEventListener("keydown", e => { if (e.key === "Escape" && sheetStack.length) closeSheet(); });

/* After data changes, redraw open sheets so they never show stale amounts. */
function refreshSheets() { for (const s of sheetStack) s.refresh(); }
