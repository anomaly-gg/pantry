/* Start-up and tab switching. */

const VIEWS = { pantry: renderPantry, cook: renderCook, week: renderWeek, list: renderList };
let tab = lsLoad("pc_tab", "pantry");
if (!VIEWS[tab]) tab = "pantry";

function render() {
  VIEWS[tab]();
  updateBadges();
  refreshSheets();
}

function setTab(t) {
  if (!VIEWS[t]) return;
  tab = t;
  lsSave("pc_tab", t);
  for (const b of document.querySelectorAll(".tabbar button")) {
    if (b.dataset.tab === t) b.setAttribute("aria-current", "page"); else b.removeAttribute("aria-current");
  }
  for (const v of document.querySelectorAll(".view")) v.hidden = v.dataset.tab !== t;
  VIEWS[t]();
  updateBadges();
  window.scrollTo({ top: 0 });
  if (t === "week" && planDayIndex(S.plan) > 0) document.getElementById("today")?.scrollIntoView({ block: "start" });
}

function updateBadges() {
  const soon = Object.values(S.items).filter(i => i.soon).length;
  const toBuy = Object.values(S.shop).filter(s => !s.got).length;
  const bp = document.getElementById("badge-pantry"), bl = document.getElementById("badge-list");
  bp.hidden = !soon; bp.textContent = soon;
  bl.hidden = !toBuy; bl.textContent = toBuy;
}

for (const b of document.querySelectorAll(".tabbar button")) b.addEventListener("click", () => setTab(b.dataset.tab));
document.getElementById("prefsBtn").addEventListener("click", openPrefs);

onSyncApplied = render;
setTab(tab);
syncNow();
document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") syncNow(); });
window.addEventListener("online", () => syncNow());
