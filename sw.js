// 꿈속 정원 서비스 워커: 오프라인 캐시 + 알림 클릭 처리
var CACHE = 'dream-garden-v2';
var CORE = ["./","./index.html","./app.js","./style.css","./words.js","./manifest.webmanifest","./assets/icon-192.png","./assets/icon-512.png","./assets/dream-field.png","./assets/dream-sky.png","./words/dining.js","./words/extra_a.js","./words/extra_b.js","./words/finance.js","./words/general.js","./words/hr.js","./words/legal.js","./words/marketing.js","./words/office.js","./words/production.js","./words/property.js","./words/shopping.js","./words/tech.js","./words/travel.js","./words/_init.js","./toeic/lessons_a.js","./toeic/lessons_b.js","./toeic/p6_a.js","./toeic/p6_b.js","./toeic/p7_a.js","./toeic/p7_b.js","./toeic/p7_c.js","./toeic/_init.js"];
self.addEventListener('install', function (e) {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(function (c) { return Promise.all(CORE.map(function (u) { return c.add(u).catch(function () { }); })); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) { return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); })); }).then(function () { return self.clients.claim(); }));
});
// 네트워크 우선(업데이트 반영), 실패하면 캐시로 오프라인 동작. 정상 응답만 캐시
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(fetch(e.request).then(function (res) {
    if (res.ok) { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(e.request, copy); }); }
    return res;
  }).catch(function () { return caches.match(e.request, { ignoreSearch: true }).then(function (m) { return m || caches.match('./index.html'); }); }));
});
self.addEventListener('notificationclick', function (e) {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (ws) {
    if (ws.length) return ws[0].focus();
    return self.clients.openWindow('./index.html');
  }));
});
