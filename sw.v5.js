const CACHE = "polovyi-modul-v5-data-model-cache-v1";
const FILES = ["./", "./index.html", "./styles.v5.css", "./app.v5.js", "./manifest.webmanifest"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});
self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
