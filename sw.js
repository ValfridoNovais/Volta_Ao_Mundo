const CACHE_NAME = "volta-ao-mundo-india-v1";

const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./sw.js",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./img/india1.png",
  "./img/india2.png",
  "./img/india3.png",
  "./img/india4.png",
  "./img/india5.png",
  "./img/india6.png",
  "./img/india7.png",
  "./img/india1.jpg",
  "./img/india2.jpg",
  "./img/india3.jpg",
  "./img/india4.jpg",
  "./img/india5.jpg",
  "./img/india6.jpg",
  "./img/india7.jpg",
  "./img/icons/p1.png",
  "./img/icons/p2.png",
  "./img/icons/p3.png",
  "./img/icons/p4.png",
  "./img/icons/p5.png",
  "./img/icons/p6.png",
  "./img/icons/p7.png",
  "./img/icons/ship_raw.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;

      return fetch(event.request)
        .then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200) {
            return networkResponse;
          }

          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
          return networkResponse;
        })
        .catch(() => caches.match("./index.html"));
    })
  );
});
