/* Offline support. VERSION + FILES are stamped by _dev/deploy.py; don't edit those two lines by hand.
   Caches are named "pantry-v-…": /workout shares this origin and its worker deletes caches named "v-…". */
const VERSION = "pantry-v-dev";
const FILES = ["./"];

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
