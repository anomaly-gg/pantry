/* Installable app: service worker (hosted https only, never on the local dev server), the install button,
   and picking up new versions. */

const IS_HOSTED = location.protocol === "https:" && !/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname);
let installPrompt = null;

window.addEventListener("beforeinstallprompt", e => { e.preventDefault(); installPrompt = e; });
window.addEventListener("appinstalled", () => { installPrompt = null; toast("Installed. Find it on your home screen."); });
const isInstalled = () => matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;

function installSection() {
  if (isInstalled() || !installPrompt) return null;
  return h("div", { class: "pref" }, h("div", { class: "label", text: "Install" }),
    h("p", { class: "hint", text: "Add Pantry Chef to your home screen. It opens like an app and works offline." }),
    h("button", { class: "btn primary", onclick: async () => { installPrompt.prompt(); await installPrompt.userChoice; installPrompt = null; refreshSheets(); } }, "Install app"));
}

if (IS_HOSTED && "serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then(reg => {
    // A new version takes over right away; nothing in this app is mid-way like a workout.
    const take = w => w && w.addEventListener("statechange", () => { if (w.state === "installed" && navigator.serviceWorker.controller) w.postMessage("skipWaiting"); });
    if (reg.waiting && navigator.serviceWorker.controller) reg.waiting.postMessage("skipWaiting");
    reg.addEventListener("updatefound", () => take(reg.installing));
    document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") reg.update().catch(() => {}); });
  }).catch(() => {});
  let reloading = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (reloading || sheetStack.length) return;     // don't yank an open recipe away; the next launch picks it up
    reloading = true; location.reload();
  });
}
