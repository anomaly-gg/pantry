/* Offline support. VERSION + FILES are stamped by _dev/deploy.py; don't edit those two lines by hand.
   Caches are named "pantry-v-…": /workout shares this origin and its worker deletes caches named "v-…". */
const VERSION = "pantry-v-421cdf8188dc";
const FILES = ["./", "css/base.css", "css/cook.css", "css/list.css", "css/pantry.css", "css/prefs.css", "css/sheet.css", "css/tokens.css", "css/week.css", "fonts/archivo.woff2", "fonts/figtree.woff2", "icons/apple-touch-icon.png", "icons/favicon-64.png", "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-512.png", "index.html", "js/app.js", "js/core/ingredients.js", "js/core/match.js", "js/core/planner.js", "js/core/prompt.js", "js/core/recipes.js", "js/core/store.js", "js/core/sync.js", "js/core/units.js", "js/core/util.js", "js/data/examples.js", "js/data/ingredients.js", "js/data/recipes-canned.js", "js/data/recipes-filipino.js", "js/data/recipes-noodles-rice.js", "js/data/recipes-world.js", "js/ui/cook.js", "js/ui/cooked-sheet.js", "js/ui/dom.js", "js/ui/item-sheet.js", "js/ui/list.js", "js/ui/pantry.js", "js/ui/prefs.js", "js/ui/pwa.js", "js/ui/recipe-card.js", "js/ui/recipe-sheet.js", "js/ui/sheets.js", "js/ui/swap-sheet.js", "js/ui/sync.js", "js/ui/week.js", "manifest.webmanifest"];

self.addEventListener("install", e => {
  // cache: "reload" skips the browser's HTTP cache (Pages sends max-age=600) so a new version never mixes in old files
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES.map(f => new Request(f, { cache: "reload" })))));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith("pantry-v-") && k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", e => { if (e.data === "skipWaiting") self.skipWaiting(); });

self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return;   // sync server goes straight to the network
  e.respondWith(
    caches.open(VERSION)
      .then(c => c.match(e.request, { ignoreSearch: true }))
      .then(hit => hit || fetch(e.request))
  );
});
