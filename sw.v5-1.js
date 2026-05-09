const CACHE = "polovyi-modul-v5-1-runtime-cache-v1";
const FILES = ["./", "./index.html", "./styles.v5-1.css?v=51", "./app.v5-1.js?v=51", "./manifest.webmanifest"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});
self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
