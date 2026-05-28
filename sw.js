const CACHE_NAME = 'taro-nova-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './images/back.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});