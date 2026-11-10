/* ============================================================
   Mashimaro Financial â€” service worker (offline-first)
   ============================================================ */
const VERSION = 'mashimaro-fin-v4';
const SHELL_CACHE = VERSION + '-shell';
const RUNTIME_CACHE = VERSION + '-runtime';

const SHELL = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png',
  './favicon-32.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE)
      .then((cache) => cache.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((key) => key !== SHELL_CACHE && key !== RUNTIME_CACHE)
          .map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  const sameOrigin = url.origin === self.location.origin;

  /* Navigasi: ambil versi terbaru, fallback ke app shell saat offline
     (termasuk saat proxy/server membalas error 5xx) */
  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      const shell = async () => (await caches.match('./index.html')) || (await caches.match('./'));
      try {
        const response = await fetch(request);
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(SHELL_CACHE).then((cache) => cache.put('./index.html', copy)).catch(() => {});
          return response;
        }
        return (await shell()) || response;
      } catch (err) {
        return (await shell()) || Response.error();
      }
    })());
    return;
  }

  /* Aset aplikasi:
     - script/style/manifest: network-first supaya update langsung terpakai
     - gambar/font: cache-first supaya cepat & hemat data */
  if (sameOrigin) {
    const networkFirst = request.destination === 'script'
      || request.destination === 'style'
      || request.destination === 'manifest'
      || url.pathname.endsWith('.webmanifest');

    if (networkFirst) {
      event.respondWith((async () => {
        try {
          const response = await fetch(request);
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(SHELL_CACHE).then((cache) => cache.put(request, copy)).catch(() => {});
            return response;
          }
          return (await caches.match(request)) || response;
        } catch (err) {
          return (await caches.match(request)) || Response.error();
        }
      })());
      return;
    }

    event.respondWith(
      caches.match(request).then((cached) => {
        const network = fetch(request).then((response) => {
          if (response && (response.ok || response.type === 'opaque')) {
            const copy = response.clone();
            caches.open(SHELL_CACHE).then((cache) => cache.put(request, copy)).catch(() => {});
          }
          return response;
        }).catch(() => cached);
        return cached || network;
      })
    );
    return;
  }

  /* Font & aset eksternal: cache runtime */
  event.respondWith(
    caches.match(request).then((cached) => {
      const network = fetch(request).then((response) => {
        if (response && (response.ok || response.type === 'opaque')) {
          const copy = response.clone();
          caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, copy)).catch(() => {});
        }
        return response;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
