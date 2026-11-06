// 꿈속 정원 서비스 워커: 오프라인 캐시 + 알림 클릭 처리
var CACHE = 'dream-garden-v1';
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
// 네트워크 우선(업데이트 반영), 실패하면 캐시로 오프라인 동작
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request).then(function (res) {
    var copy = res.clone();
    caches.open(CACHE).then(function (c) { c.put(e.request, copy); });
    return res;
  }).catch(function () { return caches.match(e.request); }));
});
self.addEventListener('notificationclick', function (e) {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (ws) {
    if (ws.length) return ws[0].focus();
    return self.clients.openWindow('./index.html');
  }));
});
