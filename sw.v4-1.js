const CACHE = "polovyi-modul-v4-1-cache-v2";
const FILES = ["./", "./index.html", "./styles.v4-1.css", "./app.v4-1.js", "./manifest.webmanifest"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});
self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
