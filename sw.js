// Service Worker for PWA - オフラインキャッシュ
const CACHE_NAME = 'flag-quiz-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/icon-192.png',
  '/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // キャッシュヒット
        if (response) return response;
        // ネットワークからフェッチ
        return fetch(event.request).then((response) => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          // キャッシュに追加
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then((cache) => cache.put(event.request, responseToCache));
          return response;
        });
      })
  );
});
