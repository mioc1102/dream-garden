(function () {
  'use strict';

  var KEY = 'growth-log-v1';
  var TIMER_KEY = 'growth-log-timer';
  var W = [], WMAP = {};
  (window.TOEIC_DATA || []).forEach(function (x) { if (x.w && !WMAP[x.w]) { WMAP[x.w] = x; W.push(x); } });
  (window.TOEIC_WORDS || []).forEach(function (o) { if (!WMAP[o.w]) { var x = { w: o.w, p: o.p, m: o.m, lv: 2, d: 'general', ex: '', exk: '' }; WMAP[x.w] = x; W.push(x); } });
  var POS = { n: '명사', v: '동사', a: '형용사', ad: '부사', ph: '숙어', prep: '전치사', conj: '접속사' };

  // ================= 아이콘 (직접 그린 라인 SVG) =================
  var ICONS = {
    door: '<path d="M6 21V4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21"/><path d="M3.5 21h17"/><circle cx="14.6" cy="12.4" r=".9" class="dotf"/>',
    letters: '<path d="M3.5 18 8 6l4.5 12"/><path d="M5.2 14h5.6"/><path d="M20 10.5V18"/><path d="M20 14.3c0-2.3-1.2-3.8-3-3.8s-3 1.6-3 3.8 1.2 3.7 3 3.7 3-1.5 3-3.7z"/>',
    notebook: '<rect x="5" y="3" width="14" height="18" rx="2.5"/><path d="M9 3v18"/><path d="M12.5 8h3.5M12.5 12h3.5"/>',
    calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="3"/><path d="M3.5 10h17M8 3v4M16 3v4"/><path d="M14.6 16.4a2.3 2.3 0 1 1-1.5-3.6 1.8 1.8 0 0 0 1.5 3.6z"/>',
    chart: '<path d="M4 20h16"/><rect x="5.5" y="11" width="3" height="6.5" rx="1.5"/><rect x="10.5" y="6" width="3" height="11.5" rx="1.5"/><rect x="15.5" y="13" width="3" height="4.5" rx="1.5"/>',
    sliders: '<path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/>',
    dumbbell: '<path d="M6.5 7v10M17.5 7v10M3.5 9.5v5M20.5 9.5v5M6.5 12h11"/>',
    book: '<path d="M12 6.5C10 5 7 4.5 4 5v13c3-.5 6 0 8 1.5 2-1.5 5-2 8-1.5V5c-3-.5-6 0-8 1.5z"/><path d="M12 6.5v13"/>',
    sparkle: '<path d="M12 3c.7 5 3.9 8.2 9 9-5.1.8-8.3 4-9 9-.7-5-3.9-8.2-9-9 5.1-.8 8.3-4 9-9z"/>',
    heart: '<path d="M12 20s-7.5-4.6-7.5-10.2A4.1 4.1 0 0 1 12 7.4a4.1 4.1 0 0 1 7.5 2.4C19.5 15.4 12 20 12 20z"/>',
    moon: '<path d="M19.5 14.5A7.8 7.8 0 1 1 9.5 4.5a6.2 6.2 0 0 0 10 10z"/>',
    cloud: '<path d="M7 18.5h10.2a4 4 0 0 0 .5-7.970A5.5 5.5 0 0 0 7.1 9.4 4.6 4.6 0 0 0 7 18.5z"/>',
    leaf: '<path d="M5 19c0-8 5-13 14-14 0 9-5 14-13 14z"/><path d="M5 19l8-8"/>',
    music: '<path d="M9 18V6l10-2v12"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="16.5" cy="16" r="2.5"/>',
    pen: '<path d="M4 20l1.2-4.2L16 5l3 3L8.2 18.8z"/><path d="M14 7l3 3"/>',
    cup: '<path d="M5 9h11v5a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5z"/><path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16"/><path d="M9 3c-1 1 1 2 0 3M12.5 3c-1 1 1 2 0 3"/>',
    eye: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r=".9" class="dotf"/>',
    flower: '<circle cx="12" cy="5.6" r="2.4"/><circle cx="15.4" cy="9" r="2.4"/><circle cx="12" cy="12.4" r="2.4"/><circle cx="8.6" cy="9" r="2.4"/><circle cx="12" cy="9" r=".8" class="dotf"/><path d="M12 14.8V21M12 18.2c-2 0-3.2-1-4-2.4"/>',
    flame: '<path d="M12 21c4 0 6.5-2.6 6.5-6.2 0-3.3-2.3-5.3-3.6-8.3-.4 2-1.4 3.2-2.6 3.8C12.6 7.5 11 5 8.5 3c.4 3.2-3 5.7-3 10.6C5.5 18.2 8 21 12 21z"/>',
    cards: '<rect x="8.5" y="3.5" width="11" height="15" rx="2.5"/><path d="M5.5 7v11a2.5 2.5 0 0 0 2.5 2.5h7"/><path d="M14 8.2c.3 1.6 1 2.3 2.4 2.6-1.4.3-2.1 1-2.4 2.6-.3-1.6-1-2.3-2.4-2.6 1.4-.3 2.1-1 2.4-2.6z"/>',
    type: '<path d="M5 7.5V5h14v2.5M12 5v14M9 19h6"/>',
    rewind: '<path d="M4 12a8 8 0 1 0 2.4-5.7"/><path d="M4 4v4.5h4.5"/>',
    dice: '<rect x="4" y="4" width="16" height="16" rx="4.5"/><circle cx="9" cy="9" r="1" class="dotf"/><circle cx="15" cy="15" r="1" class="dotf"/><circle cx="15" cy="9" r="1" class="dotf"/><circle cx="9" cy="15" r="1" class="dotf"/><circle cx="12" cy="12" r="1" class="dotf"/>',
    speaker: '<path d="M4 9.5h3.5L12 6v12l-4.5-3.5H4z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/>',
    hourglass: '<path d="M7 3h10M7 21h10"/><path d="M8 3c0 4.5 8 5 8 9s-8 4.5-8 9M16 3c0 4.5-8 5-8 9s8 4.5 8 9"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    left: '<path d="M15 5l-7 7 7 7"/>',
    right: '<path d="M9 5l7 7-7 7"/>',
    play: '<path d="M8 5.5v13l10-6.5z"/>',
    pause: '<path d="M8.5 5.5v13M15.5 5.5v13"/>',
    trash: '<path d="M5 7h14M10 7V4.5h4V7M7 7l1 13h8l1-13"/>',
    download: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
    upload: '<path d="M12 15V4M7 9l5-5 5 5M5 20h14"/>',
    gift: '<rect x="4" y="9" width="16" height="11" rx="2.5"/><path d="M4 13h16M12 9v11"/><path d="M12 9c-2-4-6-3-5 0M12 9c2-4 6-3 5 0"/>',
    star: '<path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.8z"/>',
    tree: '<path d="M12 21v-6"/><path d="M12 15c-4.5 0-7-2.3-7-5.3S8 4 12 3c4 1 7 3.7 7 6.7S16.5 15 12 15z"/>'
  };
  function ic(name, cls) {
    return '<svg class="ic' + (cls ? ' ' + cls : '') + '" viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[name] || ICONS.sparkle).replace(/class="dotf"/g, 'fill="currentColor" stroke="none"') + '</svg>';
  }
  function hydrateIcons(root) {
    (root || document).querySelectorAll('i[data-ic]').forEach(function (el) {
      var t = document.createElement('span'); t.innerHTML = ic(el.dataset.ic, el.className);
      el.replaceWith(t.firstChild);
    });
  }
  var ICON_CHOICES = [
    ['dumbbell', '덤벨'], ['book', '책'], ['letters', '글자'], ['pen', '펜'], ['heart', '하트'], ['sparkle', '반짝'], ['star', '별'],
    ['moon', '달'], ['cloud', '구름'], ['leaf', '잎'], ['flower', '꽃'], ['music', '음악'], ['cup', '컵'], ['eye', '눈'], ['door', '문'], ['flame', '불꽃'], ['tree', '나무']
  ];

  // ================= 유틸 (날짜는 로컬 기준) =================
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function ymd(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function parseYmd(s) { var p = s.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function addDays(s, n) { var d = parseYmd(s); d.setDate(d.getDate() + n); return ymd(d); }
  function today() { return ymd(new Date()); }
  var WD = ['일', '월', '화', '수', '목', '금', '토'];
  function prettyDate(s) { var d = parseYmd(s); return (d.getMonth() + 1) + '월 ' + d.getDate() + '일 (' + WD[d.getDay()] + ')'; }
  function fmtMin(m) {
    m = Math.round(m);
    if (m < 60) return m + '분';
    var h = Math.floor(m / 60), r = m % 60;
    return h + '시간' + (r ? ' ' + r + '분' : '');
  }
  function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function hexToRgba(hex, a) {
    var h = String(hex || '#999').replace('#', ''); if (h.length === 3) h = h.replace(/./g, '$&$&');
    var n = parseInt(h, 16); return 'rgba(' + (n >> 16 & 255) + ',' + (n >> 8 & 255) + ',' + (n & 255) + ',' + a + ')';
  }
  var $ = function (id) { return document.getElementById(id); };

  // ================= 저장소 =================
  function defaultData() {
    return {
      version: 3,
      categories: [
        { id: 'exercise', name: '운동', icon: 'dumbbell', color: '#ffb3d1', dailyGoalMin: 30 },
        { id: 'study', name: '공부', icon: 'book', color: '#a9c8ff', dailyGoalMin: 60 }
      ],
      entries: []
    };
  }
  function valid(d) {
    return d && Array.isArray(d.categories) && Array.isArray(d.entries) &&
      d.categories.every(function (c) { return c && typeof c.id === 'string' && typeof c.name === 'string'; }) &&
      d.entries.every(function (e) { return e && typeof e.id === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(e.date) && typeof e.categoryId === 'string' && typeof e.minutes === 'number'; });
  }
  var EMOJI_TO_ICON = { '💪': 'dumbbell', '📚': 'book', '🔤': 'letters', '📖': 'book', '🎵': 'music', '✏️': 'pen', '❤️': 'heart', '⭐': 'star', '🌙': 'moon', '☕': 'cup', '🌸': 'flower', '🔥': 'flame', '🌳': 'tree', '🍃': 'leaf' };
  var DEFAULT_ICON = { exercise: 'dumbbell', study: 'book', english: 'letters' };
  var DREAM_COLORS = { '#ff9a76': '#ffb3d1', '#7aa8f5': '#a9c8ff', '#4cc3b0': '#9ee3d4' }; // 이전 기본색 → 파스텔
  function normalize(d) {
    d.categories.forEach(function (c) {
      if (!ICONS[c.icon]) c.icon = EMOJI_TO_ICON[c.icon] || DEFAULT_ICON[c.id] || 'sparkle';
      if (!c.color) c.color = '#c7a8ff';
      if (DREAM_COLORS[c.color]) c.color = DREAM_COLORS[c.color];
      if (typeof c.dailyGoalMin !== 'number') c.dailyGoalMin = 0;
    });
    if (!d.englishCatAdded) {
      if (!d.categories.some(function (c) { return c.id === 'english'; }))
        d.categories.push({ id: 'english', name: '영어', icon: 'letters', color: '#9ee3d4', dailyGoalMin: 20 });
      d.englishCatAdded = true;
    }
    d.english = d.english || {};
    d.english.words = d.english.words || {};
    d.english.plans = d.english.plans || {};
    d.english.stars = d.english.stars || {};
    d.english.exams = d.english.exams || [];
    d.english.custom = d.english.custom || [];
    d.routines = d.routines || [];
    d.categories.forEach(function (c) { if (c.id === 'exercise' && c.parts === undefined) c.parts = true; });
    d.game = d.game || {};
    d.game.xpBonus = d.game.xpBonus || 0;
    d.settings = Object.assign({ dailyWords: 20, sound: true, autoLog: true, autoSpeak: false, sparkle: true }, d.settings || {});
    if (!d.settings.course) d.settings.course = { level: 'auto', domains: [] };
    if (d.settings.wordTime === undefined) d.settings.wordTime = '21:00';
    d.version = 3;
    return d;
  }
  function load() {
    try {
      var d = JSON.parse(localStorage.getItem(KEY));
      if (valid(d)) return normalize(d);
    } catch (e) { /* ignore */ }
    return normalize(defaultData());
  }
  var data = load();
  function save() { localStorage.setItem(KEY, JSON.stringify(data)); }
  save();

  function cat(id) { return data.categories.find(function (c) { return c.id === id; }); }
  function catColor(id) { var c = cat(id); return c ? c.color : '#cfc6e8'; }
  function catName(id) { var c = cat(id); return c ? c.name : '(사라진 분야)'; }
  function catIcon(id) { var c = cat(id); return c ? c.icon : 'cloud'; }

  // ================= 집계 =================
  function aggregate() {
    var m = {};
    data.entries.forEach(function (e) {
      (m[e.categoryId] = m[e.categoryId] || {});
      m[e.categoryId][e.date] = (m[e.categoryId][e.date] || 0) + e.minutes;
    });
    return m;
  }
  function allDays() {
    var m = {};
    data.entries.forEach(function (e) { m[e.date] = (m[e.date] || 0) + e.minutes; });
    return m;
  }
  // 연속 기록: 기록이 있는 날이 이어진 일수. 오늘 아직이어도 어제까지 이어졌으면 유지.
  function streaks(days) {
    var t = today(), cur = 0, d = days[t] ? t : addDays(t, -1);
    while (days[d]) { cur++; d = addDays(d, -1); }
    var best = 0, run = 0, prev = null;
    Object.keys(days).sort().forEach(function (k) {
      run = (prev && addDays(prev, 1) === k) ? run + 1 : 1;
      if (run > best) best = run; prev = k;
    });
    return { current: cur, best: best, doneToday: !!days[t] };
  }

  // ================= 게임: XP / 레벨 =================
  var TITLES = ['꿈의 씨앗', '새벽 새싹', '구름 떡잎', '별빛 풀잎', '안개 묘목', '하늘 어린 나무', '솜사탕 나무', '꽃구름 나무', '별열매 나무', '꿈의 수호자'];
  function totalXP() {
    var x = data.game.xpBonus || 0, agg = aggregate();
    data.entries.forEach(function (e) { x += e.minutes; });
    data.categories.forEach(function (c) {
      if (!c.dailyGoalMin) return;
      var d = agg[c.id] || {};
      Object.keys(d).forEach(function (k) { if (d[k] >= c.dailyGoalMin) x += 20; });
    });
    return Math.round(x);
  }
  function levelInfo(xp) {
    var L = 1, need = 100;
    while (xp >= need) { xp -= need; L++; need = 100 + (L - 1) * 30; }
    return { level: L, cur: xp, need: need };
  }
  function titleOf(L) { return TITLES[Math.min(TITLES.length - 1, L - 1)]; }
  function stageOf(L) { return L >= 15 ? 6 : L >= 10 ? 5 : L >= 6 ? 4 : L >= 4 ? 3 : L >= 2 ? 2 : 1; }
  function addXP(n, ev) { data.game.xpBonus += n; floatXP(n, ev); }

  function renderHud() {
    var li = levelInfo(totalXP());
    $('lvNumHud').textContent = li.level;
    $('lvTitle').textContent = titleOf(li.level);
    $('xpFill').style.width = (li.cur / li.need * 100) + '%';
    $('xpTxt').textContent = li.cur + ' / ' + li.need + ' xp';
    $('hudStreak').textContent = streaks(allDays()).current;
    $('hudDate').textContent = prettyDate(today());
    if (currentView === 'english' && (eng.screen === 'study' || eng.screen === 'quiz')) return; // 공부·시험 중엔 레벨업 연출 보류
    if (!data.game.lastLevel || li.level < data.game.lastLevel) { data.game.lastLevel = li.level; save(); }
    else if (li.level > data.game.lastLevel) {
      data.game.lastLevel = li.level; save();
      setTimeout(function () { showLevelUp(li.level); }, 500);
    }
  }
  function showLevelUp(L) {
    $('lvDlgNum').textContent = L;
    var st = stageOf(L), prevSt = stageOf(L - 1);
    $('lvDlgMsg').innerHTML = '이제 <b>' + titleOf(L) + '</b> 단계예요' + (st !== prevSt ? '<br>정원의 나무가 한 뼘 자랐어요 ✧' : '<br>조용히, 하지만 분명히 자라고 있어요 ✦');
    sfx('lvl'); confetti(70);
    if (!$('lvDlg').open) $('lvDlg').showModal();
  }

  // ================= 효과 (소리 / 별가루 / 토스트) =================
  var actx;
  var SFX = { // 오르골 느낌의 부드러운 사인파
    ok: [[880, 0, .25], [1318, .09, .35]], no: [[392, 0, .25], [311, .14, .4]], pop: [[1046, 0, .18]],
    flip: [[784, 0, .12], [1046, .06, .16]], save: [[659, 0, .3], [880, .1, .3], [1318, .2, .5]],
    lvl: [[523, 0, .4], [659, .14, .4], [784, .28, .4], [1046, .42, .8], [1318, .56, .9]], done: [[784, 0, .3], [988, .12, .3], [1318, .24, .6]]
  };
  function sfx(name) {
    if (!data.settings.sound) return;
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      var t0 = actx.currentTime;
      SFX[name].forEach(function (n) {
        var o = actx.createOscillator(), g = actx.createGain();
        o.type = 'sine'; o.frequency.value = n[0];
        g.gain.setValueAtTime(0.0001, t0 + n[1]);
        g.gain.exponentialRampToValueAtTime(0.09, t0 + n[1] + 0.012);
        g.gain.exponentialRampToValueAtTime(0.0001, t0 + n[1] + n[2]);
        o.connect(g); g.connect(actx.destination);
        o.start(t0 + n[1]); o.stop(t0 + n[1] + n[2] + 0.05);
      });
    } catch (e) { /* ignore */ }
  }
  var FX_COLORS = ['#ffc3e4', '#d6c2ff', '#a9dcff', '#fff1b5', '#bff3e0', '#ffffff'];
  var FX_CHARS = ['✦', '✧', '⋆', '✦', '·'];
  function confetti(n) {
    var L = $('fx'), plain = theme() === 'plain';
    if (plain) n = Math.round((n || 40) / 2);
    for (var i = 0; i < (n || 40); i++) {
      var s = document.createElement('span');
      s.textContent = plain ? '●' : FX_CHARS[i % FX_CHARS.length];
      s.style.left = Math.random() * 100 + 'vw';
      s.style.color = plain ? ['#3182f6', '#17b26a', '#ffc342', '#f04452'][i % 4] : FX_COLORS[i % FX_COLORS.length];
      s.style.fontSize = plain ? (6 + Math.random() * 5) + 'px' : (10 + Math.random() * 18) + 'px';
      s.style.animationDuration = (2.2 + Math.random() * 1.8) + 's';
      s.style.animationDelay = (Math.random() * .5) + 's';
      s.style.setProperty('--dx', (Math.random() * 200 - 100) + 'px');
      s.style.setProperty('--rot', (Math.random() * 540 - 270) + 'deg');
      L.appendChild(s);
      setTimeout(function (el) { el.remove(); }.bind(null, s), 4500);
    }
  }
  function floatXP(n, ev) {
    var d = document.createElement('div');
    d.className = 'xp-float'; d.textContent = '+' + n + ' xp';
    var x = ev && ev.clientX ? ev.clientX : window.innerWidth / 2, y = ev && ev.clientY ? ev.clientY : window.innerHeight * .45;
    d.style.left = x + 'px'; d.style.top = y + 'px';
    document.body.appendChild(d);
    setTimeout(function () { d.remove(); }, 1500);
  }
  var toastTimer;
  function toast(msg, html) {
    var t = $('toast');
    if (html) t.innerHTML = msg; else t.textContent = msg;
    t.style.pointerEvents = html ? 'auto' : 'none';
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('show'); t.style.pointerEvents = 'none'; }, html ? 4000 : 2000);
  }
  function renderSparkles() {
    var L = $('sparkles');
    if (!data.settings.sparkle) { L.innerHTML = ''; return; }
    if (L.childElementCount) return;
    var h = '';
    for (var i = 0; i < 22; i++) {
      h += '<span style="left:' + (Math.random() * 100) + 'vw;top:' + (100 + Math.random() * 20) + 'vh;font-size:' + (8 + Math.random() * 12) + 'px;' +
        'animation-duration:' + (18 + Math.random() * 22) + 's,' + (2 + Math.random() * 2) + 's;animation-delay:-' + (Math.random() * 30) + 's,-' + (Math.random() * 3) + 's">' + FX_CHARS[i % 3] + '</span>';
    }
    L.innerHTML = h;
  }

  // ================= 꿈속 정원 장면 (SVG) =================
  var hasFieldImg = false;
  var darkMQ = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  function theme() { var t = data.settings.theme; return t === 'plain' || t === 'dark' || t === 'auto' ? 'plain' : 'dream'; }
  function isDark() { var t = data.settings.theme; return t === 'dark' || (t === 'auto' && !!darkMQ && darkMQ.matches); }
  if (darkMQ && darkMQ.addEventListener) darkMQ.addEventListener('change', function () { if (data.settings.theme === 'auto') { applyTheme(); render(); } });
  function useImg() { return hasFieldImg && theme() === 'dream'; }
  function applyTheme() {
    var plain = theme() === 'plain';
    document.documentElement.classList.toggle('theme-plain', plain);
    document.documentElement.classList.toggle('theme-dark', plain && isDark());
    $('scene').classList.toggle('has-img', useImg());
    var m = document.querySelector('meta[name=theme-color]'); if (m) m.content = plain ? (isDark() ? '#111115' : '#f2f4f6') : '#d9e6ff';
    var sb = document.querySelector('#addForm button[type=submit]'); if (sb) sb.lastChild.textContent = plain ? '기록하기' : '꿈에 기록하기';
    document.title = plain ? '성장 기록 · 꿈속 정원' : '꿈속 정원 ✧ dream garden';
  }
  function skyFor(h) {
    if (h < 5 || h >= 20) return { t: '#4b4a8c', b: '#b49ad8', night: true, name: 'night' };
    if (h < 8) return { t: '#ffd0e6', b: '#fff1dc', name: 'dawn' };
    if (h < 17) return { t: '#9fd3ff', b: '#eadcff', name: 'day' };
    return { t: '#ffb6d2', b: '#ffe3c4', name: 'eve' };
  }
  function flowerSVG(x, y, color, i, isNew) {
    var petals = '';
    for (var k = 0; k < 5; k++) {
      var a = k * Math.PI * 2 / 5 - Math.PI / 2;
      petals += '<circle cx="' + (Math.cos(a) * 3.6).toFixed(1) + '" cy="' + (-11 + Math.sin(a) * 3.6).toFixed(1) + '" r="3.3" fill="' + color + '" opacity=".95"/>';
    }
    return '<g transform="translate(' + x + ',' + y + ')"><g class="flower' + (isNew ? ' grow' : '') + '" style="animation-delay:' + (-(i % 7) * .6) + 's">' +
      '<circle cx="0" cy="-11" r="9" fill="' + color + '" opacity=".25" filter="url(#soft)"/>' +
      '<path d="M0 0 Q1 -6 0 -11" stroke="#8fcfb6" stroke-width="1.5" fill="none"/>' + petals +
      '<circle cx="0" cy="-11" r="2" fill="#fff"/></g></g>';
  }
  // ===== 나무 그래픽 (단계별 · 테마별 팔레트, 색 배열은 [밝음, 중간, 어두움]) =====
  var TREE_PAL = {
    dream: { trunk: ['#f3e9fc', '#cdb6e6', '#a68bca'], la: ['#fff4fa', '#ffd3ea', '#e5a9d0'], lb: ['#f8f3ff', '#e2d4ff', '#b8a2ec'], lc: ['#f2f9ff', '#cfe9ff', '#9ccbef'], soil: ['#f4ecfc', '#d9c6ef', '#b39ad6'], stem: ['#e1f8ef', '#a3dbc5'], seed: ['#ffffff', '#f6e2f3', '#d3aee3'], fruit: ['#fffdf0', '#fff0a8', '#f2c75a'], bloom: '#ffffff', bloomC: '#ffe48a', grass: ['#c9f0e0', '#a6dcc6'], shadow: '#7b6aa8', bird: null },
    plain: { trunk: ['#c9a27f', '#9b7051', '#6b4830'], la: ['#8ce5b5', '#23bb73', '#0b8b50'], lb: ['#a6eec8', '#34c985', '#0f9a5b'], lc: ['#72d8a3', '#19a862', '#087c47'], soil: ['#e2c3a2', '#bb9067', '#8d6646'], stem: ['#9be9bf', '#22b26c'], seed: ['#f0c99e', '#b97f52', '#7b4d2d'], fruit: ['#ffc2c6', '#f5505e', '#c41d2f'], bloom: '#ffd3dd', bloomC: '#ffc93d', grass: ['#7fdcab', '#3cbf7c'], shadow: '#0d3b24', bird: '#3182f6' },
    dark: { trunk: ['#b08b6b', '#7f5c42', '#553a27'], la: ['#74dba6', '#1eaa66', '#0a7442'], lb: ['#90e4b9', '#2bb877', '#0c834c'], lc: ['#5ccb93', '#16975a', '#07683b'], soil: ['#8a6c53', '#634b39', '#41301f'], stem: ['#86ddb0', '#1fa564'], seed: ['#d4a679', '#9a6643', '#5f3c24'], fruit: ['#ffa3ab', '#ef4655', '#b0192a'], bloom: '#f4b8c8', bloomC: '#ffc93d', grass: ['#52c487', '#25945c'], shadow: '#000000', bird: '#4593fc' }
  };
  function f1(n) { return String(Math.round(n * 10) / 10); }
  function E(t, a, inner) {
    var s = '<' + t;
    for (var k in a) s += ' ' + k + '="' + (typeof a[k] === 'number' ? f1(a[k]) : a[k]) + '"';
    return s + (inner == null ? '/>' : '>' + inner + '</' + t + '>');
  }
  function tRad(id, c) {
    return '<radialGradient id="' + id + '" cx=".35" cy=".3" r=".85"><stop offset="0" stop-color="' + c[0] + '"/><stop offset=".55" stop-color="' + c[1] + '"/><stop offset="1" stop-color="' + c[2] + '"/></radialGradient>';
  }
  function tLeaf(x, y, len, wid, ang, fill, vein) {
    var d = 'M0 0 C' + f1(len * .28) + ' ' + f1(-wid) + ' ' + f1(len * .78) + ' ' + f1(-wid * .9) + ' ' + f1(len) + ' 0 C' + f1(len * .78) + ' ' + f1(wid * .9) + ' ' + f1(len * .28) + ' ' + f1(wid) + ' 0 0Z';
    return '<g transform="translate(' + f1(x) + ' ' + f1(y) + ') rotate(' + ang + ')">' + E('path', { d: d, fill: fill }) +
      (vein ? E('path', { d: 'M1 0 Q' + f1(len * .5) + ' ' + f1(-wid * .15) + ' ' + f1(len * .9) + ' 0', stroke: vein, 'stroke-width': .8, fill: 'none', opacity: .5, 'stroke-linecap': 'round' }) : '') + '</g>';
  }
  function tTuft(x, y, h, c) {
    return [[-3.2, -.35, .8], [0, .06, 1.1], [3.2, .4, .88]].map(function (b) {
      var bx = x + b[0];
      return '<path d="M' + f1(bx - 1.3) + ' ' + f1(y) + ' Q' + f1(bx + b[1] * h * .3) + ' ' + f1(y - h * .5) + ' ' + f1(bx + b[1] * h) + ' ' + f1(y - h * b[2]) + ' Q' + f1(bx + b[1] * h * .5) + ' ' + f1(y - h * .45) + ' ' + f1(bx + 1.3) + ' ' + f1(y) + 'Z" fill="' + c + '"/>';
    }).join('');
  }
  function tSpark(x, y, r, c, d) {
    var q = ' ' + f1(x) + ' ' + f1(y) + ' ';
    return '<path class="twinkle" style="animation-delay:' + d + 's" d="M' + f1(x) + ' ' + f1(y - r) + ' Q' + q + f1(x + r) + ' ' + f1(y) + ' Q' + q + f1(x) + ' ' + f1(y + r) + ' Q' + q + f1(x - r) + ' ' + f1(y) + ' Q' + q + f1(x) + ' ' + f1(y - r) + 'Z" fill="' + c + '"/>';
  }
  function tBloom(x, y, r, P) {
    var s = '';
    for (var i = 0; i < 5; i++) { var a = i * 1.2566 - 1.5708; s += E('circle', { cx: x + Math.cos(a) * r * .62, cy: y + Math.sin(a) * r * .62, r: r * .55, fill: P.bloom }); }
    return s + E('circle', { cx: x, cy: y, r: r * .34, fill: P.bloomC });
  }
  function tFruit(x, y, r, P, dream, i) {
    if (dream) return E('circle', { cx: x, cy: y, r: r * 2, fill: P.fruit[1], opacity: .55, filter: 'url(#tgGlow)' }) + E('circle', { cx: x, cy: y, r: r, fill: 'url(#tgFruit)' }) + tSpark(x + r * .9, y - r * 1.1, 3.2, '#fffbe0', i * .35);
    return E('path', { d: 'M' + f1(x) + ' ' + f1(y - r + .5) + ' q.4 -2.4 2.2 -3.4', stroke: P.trunk[2], 'stroke-width': 1.1, fill: 'none', 'stroke-linecap': 'round' }) +
      tLeaf(x + 1.2, y - r - 1.6, 4.5, 1.9, -20, P.la[1], null) +
      E('circle', { cx: x, cy: y, r: r, fill: 'url(#tgFruit)' }) + E('ellipse', { cx: x - r * .38, cy: y - r * .35, rx: r * .3, ry: r * .2, fill: '#fff', opacity: .85 });
  }
  var CANOPY = [[0, 0, 1], [-.6, .25, .66], [.6, .25, .66], [-.38, -.4, .64], [.4, -.38, .62], [0, -.62, .52], [-.86, -.02, .44], [.86, .02, .44], [-.22, .46, .56], [.26, .48, .54]];
  function tCanopy(cx, cy, R, P, dream) {
    var k = R * .62, s = '', i;
    s += CANOPY.map(function (b) { return E('circle', { cx: cx + b[0] * k, cy: cy + b[1] * k + R * .1, r: b[2] * k * 1.05, fill: P.la[2] }); }).join('');
    s += CANOPY.map(function (b, i) { return E('circle', { cx: cx + b[0] * k, cy: cy + b[1] * k, r: b[2] * k, fill: 'url(#tg' + ['LA', 'LB', 'LA', 'LC', 'LB'][i % 5] + ')' }); }).join('');
    for (i = 0; i < 16; i++) { // 잎결
      var a = i * 2.39996, rr = Math.sqrt((i + .5) / 16) * R * .68, px = cx + Math.cos(a) * rr, py = cy + Math.sin(a) * rr * .78 + R * .06;
      s += '<path d="M' + f1(px - 2.6) + ' ' + f1(py) + ' q2.6 -2.6 5.2 0" stroke="' + P.la[2] + '" stroke-width="1.1" fill="none" opacity=".32" stroke-linecap="round"/>';
    }
    s += E('ellipse', { cx: cx - R * .3, cy: cy - R * .4, rx: R * .24, ry: R * .13, fill: '#fff', opacity: dream ? .6 : .3, transform: 'rotate(-28 ' + f1(cx - R * .3) + ' ' + f1(cy - R * .4) + ')' }) +
      E('circle', { cx: cx + R * .02, cy: cy - R * .55, r: R * .055, fill: '#fff', opacity: dream ? .7 : .3 });
    return s;
  }
  function tBird(x, y, c) {
    return '<g class="bird" transform="translate(' + f1(x) + ' ' + f1(y) + ')">' +
      E('path', { d: 'M-5 -6 L-12 -9.5 L-10.5 -4 Z', fill: c }) +
      E('ellipse', { cx: 0, cy: -5.2, rx: 6.8, ry: 5, fill: c }) + E('circle', { cx: 4.4, cy: -10, r: 3.8, fill: c }) +
      E('ellipse', { cx: 1.8, cy: -3.4, rx: 3.8, ry: 2.6, fill: '#fff', opacity: .92 }) +
      E('path', { d: 'M-4.5 -7 Q0 -8.5 2.5 -4.5 Q-2 -3.8 -4.5 -7Z', fill: '#000', opacity: .16 }) +
      E('circle', { cx: 5.4, cy: -10.6, r: .95, fill: '#191f28' }) + E('path', { d: 'M8 -10.6 L11.2 -9.6 L8 -8.6Z', fill: '#ffb020' }) +
      E('path', { d: 'M-1 -.4 v2.2 M2 -.4 v2.2', stroke: '#ffb020', 'stroke-width': 1, 'stroke-linecap': 'round' }) + '</g>';
  }
  function growTree(stage, P, x, g, dream) {
    var s = '', i, top, stem;
    s += '<defs>' + tRad('tgLA', P.la) + tRad('tgLB', P.lb) + tRad('tgLC', P.lc) + tRad('tgSeed', P.seed) + tRad('tgFruit', P.fruit) +
      '<linearGradient id="tgTrunk" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="' + P.trunk[0] + '"/><stop offset=".45" stop-color="' + P.trunk[1] + '"/><stop offset="1" stop-color="' + P.trunk[2] + '"/></linearGradient>' +
      '<linearGradient id="tgSoil" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + P.soil[1] + '"/><stop offset="1" stop-color="' + P.soil[2] + '"/></linearGradient>' +
      '<filter id="tgBlur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="6"/></filter>' +
      '<filter id="tgGlow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="2.2"/></filter></defs>';
    var sc = [1.9, 1.6, 1.35, 1.25, 1.1, 1][stage - 1] || 1;
    s += '<g transform="translate(' + x + ' ' + g + ') scale(' + sc + ') translate(' + (-x) + ' ' + (-g) + ')">';
    var sw = stage === 1 ? 20 : stage <= 3 ? 26 : stage === 4 ? 36 : stage === 5 ? 50 : 66;
    s += E('ellipse', { cx: x, cy: g + 2.5, rx: sw, ry: stage <= 3 ? 4 : 6.5, fill: P.shadow, opacity: dream ? .14 : .1 });
    function mound(w) {
      return E('ellipse', { cx: x, cy: g, rx: w, ry: w * .25, fill: 'url(#tgSoil)' }) +
        E('ellipse', { cx: x - w * .12, cy: g - w * .11, rx: w * .55, ry: w * .08, fill: P.soil[0], opacity: .75 }) +
        E('circle', { cx: x - w * .64, cy: g + 1, r: 1.7, fill: P.soil[2], opacity: .7 }) + E('circle', { cx: x + w * .56, cy: g - .4, r: 1.3, fill: P.soil[2], opacity: .7 }) +
        E('circle', { cx: x + w * .3, cy: g + 3.4, r: 1.1, fill: P.soil[0] }) + E('circle', { cx: x - w * .32, cy: g + 3.6, r: .9, fill: P.soil[0] }) +
        tTuft(x - w - 6, g + 3, 8, P.grass[1]) + tTuft(x + w + 5, g + 3, 6.5, P.grass[0]) + tTuft(x + w * .72, g + 4.5, 5, P.grass[1]);
    }
    if (dream && stage <= 3) s += E('circle', { cx: x, cy: g - 10 - stage * 8, r: 18 + stage * 8, fill: '#fff', opacity: .45, filter: 'url(#tgBlur)' });

    if (stage === 1) { // 씨앗: 흙에 반쯤 묻혀 막 싹이 트려는 중
      s += mound(30) + E('ellipse', { cx: x, cy: g - .5, rx: 13, ry: 3.4, fill: P.soil[2], opacity: .55 });
      var seed = E('path', { d: 'M0 -13 C8 -11 10.5 3 0 12 C-10.5 3 -8 -11 0 -13Z', fill: 'url(#tgSeed)' }) +
        E('path', { d: 'M0 -12 C3.4 -5 3.4 4 0 11', stroke: P.seed[2], 'stroke-width': .9, fill: 'none', opacity: .45 }) +
        E('ellipse', { cx: -3.6, cy: -3.5, rx: 1.9, ry: 4.4, fill: '#fff', opacity: dream ? .9 : .45, transform: 'rotate(16 -3.6 -3.5)' }) +
        E('path', { d: 'M-2.4 -11.6 L-.8 -9.2 L-2 -7.3 L.2 -5.6', stroke: P.seed[2], 'stroke-width': .9, fill: 'none', 'stroke-linejoin': 'round', 'stroke-linecap': 'round' }) +
        E('path', { d: 'M0 -12.4 C-.8 -17.5 2.6 -21 6.2 -20.4 C5 -16.8 2.8 -14.4 0 -12.4Z', fill: P.stem[1] }) +
        E('path', { d: 'M.9 -13.6 C1.4 -16.3 3.1 -18.6 5 -19.3', stroke: P.stem[0], 'stroke-width': .8, fill: 'none', 'stroke-linecap': 'round' });
      s += '<g transform="translate(' + x + ' ' + (g - 8) + ') rotate(-8)"><g class="' + (dream ? 'floaty' : 'seed-wig') + '">' + seed + '</g></g>';
      s += E('path', { d: 'M' + (x - 17) + ' ' + (g - 1) + ' Q' + x + ' ' + (g + 4) + ' ' + (x + 17) + ' ' + (g - 1) + ' Q' + (x + 21) + ' ' + (g + 4.5) + ' ' + x + ' ' + (g + 6.5) + ' Q' + (x - 21) + ' ' + (g + 4.5) + ' ' + (x - 17) + ' ' + (g - 1) + 'Z', fill: P.soil[1] }) +
        E('circle', { cx: x - 8, cy: g + 3, r: 1.2, fill: P.soil[0] }) + E('circle', { cx: x + 6, cy: g + 4, r: 1, fill: P.soil[2] });
      s += tSpark(x + 15, g - 26, 3.4, dream ? '#fff' : P.bloomC, 0) + tSpark(x - 16, g - 18, 2.6, dream ? '#fff6b8' : P.stem[1], .9) + tSpark(x + 22, g - 12, 2.2, dream ? '#fff' : P.bloomC, 1.7);
    } else if (stage === 2) { // 새싹: 떡잎 두 장과 이슬
      s += mound(30);
      s += E('path', { d: 'M' + (x - 14) + ' ' + (g - .5) + ' q2 -7 8.5 -6.2 q-3.2 3 -2.2 7z', fill: 'url(#tgSeed)' }) + E('path', { d: 'M' + (x + 13) + ' ' + (g + .5) + ' q-1.2 -6.4 -7.6 -6.2 q3.2 3 2.2 7z', fill: 'url(#tgSeed)' });
      top = g - 34;
      stem = E('path', { d: 'M' + x + ' ' + g + ' C' + (x - 4) + ' ' + (g - 12) + ' ' + (x + 4) + ' ' + (g - 22) + ' ' + x + ' ' + top, stroke: P.stem[1], 'stroke-width': 3.4, fill: 'none', 'stroke-linecap': 'round' }) +
        E('path', { d: 'M' + (x - .9) + ' ' + (g - 3) + ' C' + (x - 4.6) + ' ' + (g - 13) + ' ' + (x + 3) + ' ' + (g - 22) + ' ' + (x - .9) + ' ' + (top + 2), stroke: P.stem[0], 'stroke-width': 1, fill: 'none', opacity: .75, 'stroke-linecap': 'round' });
      var lv = tLeaf(x, top, 21, 8.5, -158, 'url(#tgLA)', P.la[2]) + tLeaf(x, top, 23, 9, -24, 'url(#tgLB)', P.lb[2]) + tLeaf(x, top - 1, 8, 3.4, -94, 'url(#tgLC)', null);
      var dew = E('circle', { cx: x + 12.5, cy: top - 9.2, r: 2.5, fill: '#fff', opacity: .7 }) + E('circle', { cx: x + 11.8, cy: top - 10, r: .85, fill: '#fff' });
      s += '<g class="sway">' + stem + lv + dew + '</g>';
      s += tSpark(x - 24, top - 6, 2.8, dream ? '#fff' : P.bloomC, .3) + tSpark(x + 27, top + 6, 2.2, dream ? '#fff6b8' : P.stem[1], 1.4);
    } else if (stage === 3) { // 묘목: 지지대에 묶인 어린 나무
      s += mound(32);
      s += E('rect', { x: x - 15, y: g - 50, width: 3.2, height: 52, rx: 1.3, fill: P.trunk[1] }) + E('rect', { x: x - 15, y: g - 50, width: 1.2, height: 52, rx: .6, fill: P.trunk[0], opacity: .7 });
      top = g - 64;
      stem = E('path', { d: 'M' + x + ' ' + g + ' C' + (x - 3) + ' ' + (g - 20) + ' ' + (x + 4) + ' ' + (g - 42) + ' ' + x + ' ' + top, stroke: P.stem[1], 'stroke-width': 4.4, fill: 'none', 'stroke-linecap': 'round' }) +
        E('path', { d: 'M' + (x - 1.2) + ' ' + (g - 3) + ' C' + (x - 4) + ' ' + (g - 21) + ' ' + (x + 3) + ' ' + (g - 42) + ' ' + (x - 1.1) + ' ' + (top + 3), stroke: P.stem[0], 'stroke-width': 1.1, fill: 'none', opacity: .7, 'stroke-linecap': 'round' });
      var lvs = '';
      [[-14, -1, 18, 7], [-22, 1, 20, 7.5], [-31, -1, 21, 8], [-40, 1, 20, 7.5], [-49, -1, 17, 6.5], [-56, 1, 15, 6]].forEach(function (l, i) {
        lvs += tLeaf(x, g + l[0], l[2], l[3], l[1] < 0 ? -150 - i * 2 : -30 + i * 2, 'url(#tg' + ['LA', 'LB', 'LC'][i % 3] + ')', P.la[2]);
      });
      lvs += tLeaf(x, top, 11, 4.2, -104, 'url(#tgLB)', null) + tLeaf(x, top, 10, 3.8, -72, 'url(#tgLA)', null);
      s += '<g class="sway">' + stem + lvs + '</g>';
      s += E('path', { d: 'M' + (x - 13.6) + ' ' + (g - 31) + ' q6.6 -3.4 13.4 -.6 q-6.6 3.6 -13.4 .6', stroke: dream ? '#ffc3e4' : '#f5a524', 'stroke-width': 1.5, fill: 'none' });
      s += tSpark(x + 28, top + 4, 2.8, dream ? '#fff' : P.bloomC, .5);
    } else { // 나무: 4 어린나무 · 5 꽃 피는 나무 · 6 열매 맺는 큰 나무
      var big = stage >= 5, huge = stage >= 6;
      var th = huge ? 62 : big ? 54 : 42, tw = huge ? 18 : big ? 14 : 10, R = huge ? 56 : big ? 46 : 34;
      var cy = g - th - R * .3, b = tw / 2, t = tw * .3, fl = tw * .55, bw = tw * .42;
      s += E('ellipse', { cx: x, cy: g + 1, rx: R * .95, ry: 5.5, fill: P.grass[1], opacity: .45 });
      s += tTuft(x - R * .9, g + 3, 8, P.grass[1]) + tTuft(x - R * .4, g + 5, 6, P.grass[0]) + tTuft(x + R * .55, g + 4, 7.5, P.grass[1]) + tTuft(x + R * 1.05, g + 2, 6, P.grass[0]);
      if (big) s += [[-1, .9], [1, 1], [-.35, .5]].map(function (r) {
        return E('path', { d: 'M' + f1(x + r[0] * b * .5) + ' ' + f1(g - 2) + ' q' + f1(r[0] * tw * .5) + ' 2.4 ' + f1(r[0] * tw * 1.25 * r[1]) + ' 4.6', stroke: P.trunk[1], 'stroke-width': huge ? 3.4 : 2.8, fill: 'none', 'stroke-linecap': 'round' });
      }).join('');
      var tree = '';
      if (dream) tree += E('circle', { cx: x, cy: cy, r: R * 1.3, fill: '#fff', opacity: .28, filter: 'url(#tgBlur)' });
      tree += E('path', { d: 'M' + (x - b - fl) + ' ' + g + ' Q' + (x - b) + ' ' + (g - 2) + ' ' + (x - b * .85) + ' ' + (g - th * .3) + ' L' + (x - t) + ' ' + (g - th - 4) + ' L' + (x + t) + ' ' + (g - th - 4) + ' L' + (x + b * .85) + ' ' + (g - th * .3) + ' Q' + (x + b) + ' ' + (g - 2) + ' ' + (x + b + fl) + ' ' + g + 'Z', fill: 'url(#tgTrunk)' });
      tree += E('path', { d: 'M' + x + ' ' + f1(g - th * .55) + ' Q' + f1(x - R * .25) + ' ' + f1(g - th * .75) + ' ' + f1(x - R * .55) + ' ' + f1(cy + R * .15), stroke: P.trunk[1], 'stroke-width': bw, fill: 'none', 'stroke-linecap': 'round' }) +
        E('path', { d: 'M' + (x + 1) + ' ' + f1(g - th * .75) + ' Q' + f1(x + R * .2) + ' ' + (g - th - 2) + ' ' + f1(x + R * .5) + ' ' + f1(cy + R * .05), stroke: P.trunk[1], 'stroke-width': bw * .85, fill: 'none', 'stroke-linecap': 'round' });
      tree += E('path', { d: 'M' + f1(x - b * .45) + ' ' + (g - 5) + ' q-1 -8 0 -15 M' + f1(x + b * .3) + ' ' + f1(g - th * .38) + ' q1.2 -6 0 -12 M' + f1(x - b * .1) + ' ' + f1(g - th * .72) + ' q-.8 -4 0 -8', stroke: P.trunk[2], 'stroke-width': 1, fill: 'none', opacity: .55, 'stroke-linecap': 'round' });
      if (huge) tree += E('ellipse', { cx: x + b * .15, cy: g - th * .5, rx: 2.4, ry: 3.4, fill: P.trunk[2], opacity: .8 });
      var spots = [[-.45, -.15], [.3, -.42], [.55, .22], [-.18, .3], [-.66, .36], [.08, -.68], [.74, -.12], [-.32, -.55], [.3, .5]];
      if (huge) {
        tree += tCanopy(x - R * .82, cy + R * .3, R * .55, P, dream) + tCanopy(x + R * .82, cy + R * .26, R * .55, P, dream);
        spots = spots.concat([[-1.02, .3], [-.8, .58], [1.0, .2], [.86, .55]]);
      }
      tree += tCanopy(x, cy, R, P, dream);
      if (huge) tree += spots.map(function (p, i) { return tFruit(x + p[0] * R, cy + p[1] * R, dream ? 3.4 : 4.3, P, dream, i); }).join('');
      else if (big) tree += spots.slice(0, 8).map(function (p, i) { return dream ? tSpark(x + p[0] * R, cy + p[1] * R, 4.6, '#fff', i * .4) : tBloom(x + p[0] * R, cy + p[1] * R, 3.6, P); }).join('');
      else tree += [[-.4, -.1], [.38, -.3], [.1, .3]].map(function (p) { return tLeaf(x + p[0] * R, cy + p[1] * R, 6, 2.6, -40, P.la[0], null); }).join('');
      if (huge && P.bird) tree += tBird(x + R * .25, cy - R * .6, P.bird);
      s += '<g class="sway">' + tree + '</g>';
      if (big) s += [[-.5, .48, -18, 0], [.42, .52, 22, -2.6], [.08, .58, -12, -5.1]].map(function (f) {
        var fx = x + f[0] * R, fy = cy + f[1] * R;
        var piece = dream ? E('ellipse', { cx: 0, cy: 0, rx: 3.4, ry: 2, fill: '#ffd3ea' }) : tLeaf(-3, 0, 7, 2.8, 20, P.la[1], null);
        return '<g transform="translate(' + f1(fx) + ' ' + f1(fy) + ')"><g class="leaf-fall" style="--dx:' + f[2] + 'px;--dy:' + f1(g - fy - 1) + 'px;animation-delay:' + f[3] + 's">' + piece + '</g></g>';
      }).join('');
      if (huge && dream) s += tSpark(x - R * 1.2, cy - R * .5, 4, '#fff6b8', .2) + tSpark(x + R * 1.25, cy - R * .6, 3.4, '#fff', 1.1);
    }
    return s + '</g>';
  }
  function treeSVG(stage) { return growTree(stage, TREE_PAL.dream, 180, 174, true); }
  function momoSVG(mood) { // 구름 요정
    var mouth = mood === 'happy' ? '<path d="M-3.5 3 Q0 7 3.5 3" stroke="#8a78b8" stroke-width="1.6" fill="#ffc3dc" stroke-linecap="round"/>'
      : mood === 'sleep' ? '<path d="M-2 4 h4" stroke="#8a78b8" stroke-width="1.5" stroke-linecap="round"/>'
        : '<path d="M-2.5 3 Q0 5.5 2.5 3" stroke="#8a78b8" stroke-width="1.6" fill="none" stroke-linecap="round"/>';
    var eyes = mood === 'sleep' ? '<path d="M-9 -2 q2.5 2 5 0 M4 -2 q2.5 2 5 0" stroke="#7b6aa8" stroke-width="1.6" fill="none" stroke-linecap="round"/>'
      : mood === 'happy' ? '<path d="M-9 -1 q2.5 -4 5 0 M4 -1 q2.5 -4 5 0" stroke="#7b6aa8" stroke-width="1.8" fill="none" stroke-linecap="round"/>'
        : '<ellipse cx="-6.5" cy="-1.5" rx="2.4" ry="3" fill="#7b6aa8"/><ellipse cx="6.5" cy="-1.5" rx="2.4" ry="3" fill="#7b6aa8"/><circle cx="-5.6" cy="-2.8" r="1" fill="#fff"/><circle cx="7.4" cy="-2.8" r="1" fill="#fff"/>';
    return '<g transform="translate(268,166)"><g class="momo" id="momo">' +
      '<ellipse cx="0" cy="10" rx="20" ry="3.5" fill="#7b6aa8" opacity=".12"/>' +
      '<ellipse cx="0" cy="-30" rx="9" ry="2.5" fill="none" stroke="#fff6b8" stroke-width="2" opacity=".9"/>' +
      '<g filter="url(#glow)"><circle cx="-12" cy="-4" r="11" fill="#fff"/><circle cx="12" cy="-4" r="11" fill="#fff"/><circle cx="0" cy="-12" r="14" fill="#fff"/><rect x="-22" y="-6" width="44" height="12" rx="6" fill="#fff"/></g>' +
      '<g transform="translate(0,-5)">' + eyes +
      '<ellipse cx="-12" cy="3.5" rx="3.4" ry="2" fill="#ffc3e4"/><ellipse cx="12" cy="3.5" rx="3.4" ry="2" fill="#ffc3e4"/>' + mouth + '</g>' +
      (mood === 'sleep' ? '<text x="18" y="-26" font-size="10" fill="#fff" font-family="serif" font-style="italic">z z</text>' : '') +
      '</g></g>';
  }
  // 일반/다크 테마 나무
  function plainTreeSVG(stage) { return growTree(stage, isDark() ? TREE_PAL.dark : TREE_PAL.plain, 180, 176, false); }
  function renderPlainGarden(quests, L, stage, fl) {
    var dots = fl.map(function (col, i) {
      var x = 18 + ((i * 97 + 31) % 324), y = 186 + ((i * 53) % 16);
      if (Math.abs(x - 180) < 30) x += x < 180 ? -36 : 36;
      return '<circle cx="' + x + '" cy="' + y + '" r="3.5" fill="' + col + '"/>';
    }).join('');
    $('garden').innerHTML = '<svg viewBox="0 0 360 212" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">' +
      '<defs><linearGradient id="pSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + (isDark() ? '#1b2638' : '#e8f3ff') + '"/><stop offset="1" stop-color="' + (isDark() ? '#1c1c22' : '#ffffff') + '"/></linearGradient></defs><rect width="360" height="212" fill="url(#pSky)"/><ellipse cx="180" cy="200" rx="240" ry="28" fill="' + (isDark() ? '#1d3329' : '#e3f7ec') + '"/>' +
      plainTreeSVG(stage) + dots + '</svg>';
    $('sceneTag').textContent = 'Lv.' + L + ' ' + titleOf(L) + ' · 목표 달성 ' + fl.length + '회 (30일)';
    var done = quests.filter(function (q) { return q.done; }).length;
    if (!bubbleLocked) setBubble(quests.length && done === quests.length ? '오늘 할 일을 모두 끝냈어요' : '오늘 퀘스트 ' + done + ' / ' + quests.length + ' 완료');
  }
  var lastFlowerCount = null;
  function renderGarden(quests) {
    var h = new Date().getHours(), sky = skyFor(h), i;
    var L = levelInfo(totalXP()).level, stage = stageOf(L);
    var agg = aggregate(), t = today(), fl = [];
    for (i = 29; i >= 0; i--) {
      var d = addDays(t, -i);
      data.categories.forEach(function (c) { if (c.dailyGoalMin && (agg[c.id] || {})[d] >= c.dailyGoalMin) fl.push(c.color); });
    }
    fl = fl.slice(-42);
    if (theme() === 'plain') { lastFlowerCount = fl.length; return renderPlainGarden(quests, L, stage, fl); }
    var isNewFlower = lastFlowerCount !== null && fl.length > lastFlowerCount;
    var flowers = fl.map(function (col, i) {
      var x = 14 + ((i * 97 + 31) % 332), y = 184 + ((i * 53) % 20);
      if (Math.abs(x - 180) < 34) x += x < 180 ? -40 : 40;
      if (Math.abs(x - 268) < 26) x += 30;
      return flowerSVG(x, y, col, i, isNewFlower && i === fl.length - 1);
    }).join('');
    lastFlowerCount = fl.length;

    var allDone = quests.length && quests.every(function (q) { return q.done; });
    var mood = sky.night && !data.entries.some(function (e) { return e.date === t; }) ? 'sleep' : allDone || quests.some(function (q) { return q.done; }) ? 'happy' : 'normal';

    var stars = '';
    var nStars = sky.night ? 22 : 8;
    for (i = 0; i < nStars; i++) stars += '<circle class="twinkle" style="animation-delay:' + (i * .37 % 2.6) + 's" cx="' + ((i * 71 + 13) % 360) + '" cy="' + (8 + (i * 29) % 90) + '" r="' + (i % 3 ? 1.1 : 1.7) + '" fill="#fff"/>';
    var cloud = function (cls, x, y, sc) {
      return '<g class="cloud ' + cls + '"><g transform="translate(' + x + ',' + y + ') scale(' + sc + ')" fill="#fff" opacity="' + (sky.night ? .35 : .9) + '" filter="url(#soft2)">' +
        '<ellipse cx="0" cy="0" rx="26" ry="11"/><ellipse cx="15" cy="-7" rx="16" ry="12"/><ellipse cx="-13" cy="-5" rx="13" ry="9"/></g></g>';
    };
    var defs = '<defs><linearGradient id="skyG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + sky.t + '"/><stop offset="1" stop-color="' + sky.b + '"/></linearGradient>' +
      '<linearGradient id="hillG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d4f5e6"/><stop offset="1" stop-color="#b8e6dc"/></linearGradient>' +
      '<radialGradient id="sunG"><stop offset="0" stop-color="#fff"/><stop offset=".4" stop-color="#fff6d8"/><stop offset="1" stop-color="#fff6d8" stop-opacity="0"/></radialGradient>' +
      '<filter id="soft"><feGaussianBlur stdDeviation="4"/></filter><filter id="soft2"><feGaussianBlur stdDeviation="1.2"/></filter>' +
      '<filter id="glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>';
    var bg = '';
    if (!useImg()) {
      bg = '<rect width="360" height="212" fill="url(#skyG)"/>' + stars +
        (sky.night ? '<circle cx="300" cy="42" r="16" fill="#fff8e0" filter="url(#glow)"/><circle cx="307" cy="37" r="14" fill="' + sky.t + '"/>'
          : '<circle cx="300" cy="42" r="40" fill="url(#sunG)"/>') +
        cloud('c1', 40, 44, 1) + cloud('c2', 160, 66, .8) + cloud('c3', 250, 30, .65) +
        '<path d="M0 150 Q60 118 130 142 T260 134 T360 142 V212 H0Z" fill="url(#hillG)" opacity=".85"/>' +
        '<path d="M0 170 Q90 150 180 164 T360 162 V212 H0Z" fill="#c4eedc"/>' +
        '<path d="M0 182 Q120 172 200 180 T360 178 V212 H0Z" fill="#b2e3d3"/>' +
        // 들판 위의 하얀 문 (드림코어 모티프)
        '<g class="floaty" style="animation-delay:-2s"><rect x="40" y="128" width="20" height="38" rx="1.5" fill="#fff" opacity=".95"/><rect x="42.5" y="131" width="15" height="33" fill="none" stroke="#e6dcf5" stroke-width="1"/><circle cx="55" cy="148" r="1.2" fill="#d4c2ec"/><ellipse cx="50" cy="168" rx="14" ry="2.5" fill="#7b6aa8" opacity=".12"/></g>';
    } else if (sky.night) {
      bg = '<rect width="360" height="212" fill="#3a3270" opacity=".35"/>' + stars;
    } else if (sky.name === 'eve') {
      bg = '<rect width="360" height="212" fill="#ffb6a0" opacity=".14"/>';
    }
    var svg = '<svg viewBox="0 0 360 212" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">' + defs + bg +
      treeSVG(stage) + flowers + momoSVG(mood) +
      (sky.night && !useImg() ? '<rect width="360" height="212" fill="#3a3270" opacity=".12"/>' : '') +
      '</svg>';
    $('garden').innerHTML = svg;
    $('sceneTag').textContent = '✧ ' + titleOf(L) + ' · 꽃 ' + fl.length + '송이';
    if (!bubbleLocked) setBubble(bubbleMsg(quests, sky, mood));
  }
  var bubbleLocked = false, bubbleTimer;
  function setBubble(msg) {
    var b = $('bubble'); if (b.textContent === msg) return;
    b.textContent = msg;
    b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop');
  }
  function bubbleMsg(quests, sky, mood) {
    var done = quests.filter(function (q) { return q.done; }).length;
    if (quests.length && done === quests.length) return '오늘의 꿈을 전부 채웠어. 정원이 빛나고 있어 ✧';
    if (mood === 'sleep') return '쉿… 오늘은 아직 아무도 다녀가지 않았어 ☾';
    if (done > 0) return (quests.length - done) + '개만 더 하면 완벽한 꿈이야 ✦';
    if (sky.name === 'dawn') return '천천히 깨어나도 괜찮아 ✧';
    if (sky.name === 'eve') return '노을이 지고 있어. 오늘 한 일을 남겨줄래?';
    return '여긴 안전해. 오늘도 같이 자라자 ✦';
  }
  var CHEERS = ['이 장면, 어디서 본 것 같지 않아?', '넌 생각보다 훨씬 잘하고 있어 ♡', '조금씩, 매일. 그게 제일 강해', '쉬는 것도 자라는 거야 ☾', '어제의 너도 여기 왔었어', '저 문 너머엔 내일의 네가 있어', '단어 몇 개만 같이 볼까? ✧', '숨 한번 크게 쉬어봐 ⋆'];
  document.addEventListener('click', function (ev) {
    if (!ev.target.closest('#momo')) return;
    var m = $('momo'); m.classList.remove('jump'); void m.getBoundingClientRect(); m.classList.add('jump');
    setTimeout(function () { m.classList.remove('jump'); }, 750);
    sfx('pop'); bubbleLocked = true;
    setBubble(CHEERS[Math.floor(Math.random() * CHEERS.length)]);
    clearTimeout(bubbleTimer); bubbleTimer = setTimeout(function () { bubbleLocked = false; }, 6000);
  });

  // ================= 탭 =================
  var currentView = 'home';
  var eng = { screen: 'home' };
  function go(view) {
    currentView = view;
    document.querySelectorAll('.dock button').forEach(function (x) { x.classList.toggle('active', x.dataset.view === view); });
    document.querySelectorAll('.view').forEach(function (v) { v.classList.toggle('active', v.id === 'view-' + view); });
    window.scrollTo(0, 0);
    render();
  }
  $('tabs').addEventListener('click', function (ev) {
    var b = ev.target.closest('button'); if (!b) return;
    sfx('pop');
    if (courseDraft) { data.settings.course = courseDraft; courseDraft = null; }
    if (b.dataset.view === 'english') eng.screen = 'home';
    go(b.dataset.view);
  });

  // ================= 운동 부위 =================
  var PARTS = [['chest', '가슴'], ['back', '등'], ['shoulder', '어깨'], ['legs', '하체'], ['arms', '팔'], ['core', '복근'], ['cardio', '유산소']];
  var PNAME = {}; PARTS.forEach(function (p) { PNAME[p[0]] = p[1]; });
  var PRESETS = {
    chest: ['벤치프레스', '인클라인 프레스', '덤벨 플라이', '푸시업', '딥스'], back: ['데드리프트', '랫풀다운', '바벨 로우', '풀업', '시티드 로우'],
    shoulder: ['오버헤드 프레스', '사이드 레터럴 레이즈', '페이스풀', '리어 델트 플라이'], legs: ['스쿼트', '레그 프레스', '런지', '레그 컬', '카프 레이즈'],
    arms: ['바벨 컬', '해머 컬', '트라이셉스 푸시다운', '덤벨 킥백'], core: ['플랭크', '크런치', '레그 레이즈', '러시안 트위스트'], cardio: ['러닝', '사이클', '걷기', '줄넘기', '수영']
  };
  var selParts = [], editParts = [];
  function hasParts() { return data.categories.some(function (c) { return c.parts; }); }
  function partLast() { var last = {}; data.entries.forEach(function (e) { (e.parts || []).forEach(function (p) { if (!last[p] || e.date > last[p]) last[p] = e.date; }); }); return last; }
  function recommendPart() {
    var last = partLast(), t = today(), best = null, bd = -1;
    PARTS.forEach(function (p) { if (p[0] === 'cardio') return; var d = last[p[0]] ? daysBetween(last[p[0]], t) : 999; if (d > bd) { bd = d; best = p[0]; } });
    return { part: best, days: bd };
  }
  function partChipsHTML(sel, withAgo) {
    var last = partLast(), t = today();
    return PARTS.map(function (p) {
      var d = last[p[0]] ? daysBetween(last[p[0]], t) : null;
      return '<button type="button" class="part-chip' + (sel.indexOf(p[0]) >= 0 ? ' on' : '') + '" data-p="' + p[0] + '">' + p[1] + (withAgo ? '<small>' + (d == null ? '처음' : d === 0 ? '오늘' : d + '일 전') + '</small>' : '') + '</button>';
    }).join('');
  }
  function renderPartBox() {
    var c = cat(selCat), box = $('partBox');
    if (!c || !c.parts) { box.hidden = true; return; }
    box.hidden = false;
    $('partChips').innerHTML = partChipsHTML(selParts, true);
    var pre = []; selParts.forEach(function (p) { pre = pre.concat(PRESETS[p] || []); });
    $('presetChips').innerHTML = pre.map(function (n) { return '<button type="button" class="preset" data-n="' + esc(n) + '">+ ' + esc(n) + '</button>'; }).join('');
    var r = recommendPart();
    $('partHint').innerHTML = r.part ? '✧ 오늘의 추천 부위 <b>' + PNAME[r.part] + '</b> · ' + (r.days >= 999 ? '아직 한 번도 안 했어요' : r.days + '일 쉬었어요') : '';
  }
  $('partChips').addEventListener('click', function (ev) {
    var b = ev.target.closest('[data-p]'); if (!b) return;
    var k = selParts.indexOf(b.dataset.p); if (k >= 0) selParts.splice(k, 1); else selParts.push(b.dataset.p);
    sfx('pop'); renderPartBox();
  });
  $('presetChips').addEventListener('click', function (ev) {
    var b = ev.target.closest('[data-n]'); if (!b) return;
    var n = $('addNote'); n.value = n.value.trim() ? n.value.trim().replace(/,$/, '') + ', ' + b.dataset.n : b.dataset.n; n.focus(); sfx('pop');
  });
  $('editParts').addEventListener('click', function (ev) {
    var b = ev.target.closest('[data-p]'); if (!b) return;
    var k = editParts.indexOf(b.dataset.p); if (k >= 0) editParts.splice(k, 1); else editParts.push(b.dataset.p);
    $('editParts').innerHTML = partChipsHTML(editParts);
  });
  function partTags(e) { return (e.parts || []).map(function (p) { return '<span class="ptag">' + (PNAME[p] || p) + '</span>'; }).join(''); }

  // ================= 루틴 · 알림 =================
  var DAYS = ['일', '월', '화', '수', '목', '금', '토'];
  function hm2min(s) { var p = String(s || '0:0').split(':'); return (+p[0]) * 60 + (+p[1] || 0); }
  function routinesOn(dow) { return (data.routines || []).filter(function (r) { return r.days.indexOf(dow) >= 0; }).sort(function (a, b) { return a.time < b.time ? -1 : 1; }); }
  function routinesToday() { return routinesOn(new Date().getDay()); }
  function routineEntry(r, date) { return data.entries.find(function (e) { return e.routineId === r.id && e.date === (date || today()); }); }
  function renderRoutineToday() {
    var list = routinesToday(), now = new Date(), nowM = now.getHours() * 60 + now.getMinutes();
    var done = list.filter(function (r) { return routineEntry(r); }).length;
    $('routineCount').textContent = list.length ? done + ' / ' + list.length : DAYS[now.getDay()] + '요일';
    $('routineToday').innerHTML = list.length ? list.map(function (r) {
      var e = routineEntry(r), late = !e && hm2min(r.time) < nowM, c = cat(r.categoryId);
      return '<li class="rt' + (e ? ' done' : late ? ' late' : '') + '" style="--c:' + esc(c ? c.color : '#d6c2ff') + '">' +
        '<div class="rt-time">' + esc(r.time) + '</div><div class="q-ic">' + ic(c ? c.icon : 'sparkle') + '</div>' +
        '<div class="q-body"><div class="q-title">' + esc(r.name) + (r.remind ? ' <span class="bell" title="알림">' + ic('moon') + '</span>' : '') + '</div>' +
        '<div class="q-sub">' + esc(catName(r.categoryId)) + ' · ' + fmtMin(r.minutes) + ((r.parts || []).length ? ' · ' + r.parts.map(function (p) { return PNAME[p]; }).join('·') : '') + (r.note ? ' · ' + esc(r.note) : '') + '</div></div>' +
        '<button class="rt-check" data-rt="' + esc(r.id) + '" title="' + (e ? '완료 취소' : '완료하기') + '">' + ic('check') + '</button></li>';
    }).join('') : '<li class="empty">오늘(' + DAYS[now.getDay()] + ') 잡힌 루틴이 없어요. "루틴 관리"에서 요일·시간을 정해봐요 ✧</li>';
  }
  $('routineToday').addEventListener('click', function (ev) {
    var b = ev.target.closest('[data-rt]'); if (!b) return;
    var r = (data.routines || []).find(function (x) { return x.id === b.dataset.rt; }); if (!r) return;
    var e = routineEntry(r);
    if (e) { data.entries = data.entries.filter(function (x) { return x !== e; }); save(); sfx('flip'); toast('루틴 완료를 취소했어요'); }
    else {
      var en = { id: uid(), date: today(), categoryId: r.categoryId, minutes: r.minutes, note: r.note || r.name, createdAt: Date.now(), routineId: r.id };
      if ((r.parts || []).length) en.parts = r.parts.slice();
      data.entries.push(en); save(); sfx('save');
      var rc = b.getBoundingClientRect(); floatXP(r.minutes, { clientX: rc.left + rc.width / 2, clientY: rc.top });
      toast('✦ "' + r.name + '" 루틴 완료');
      if (routinesToday().every(function (x) { return routineEntry(x); })) confetti(50);
    }
    render();
  });

  // ---------- 루틴 관리 ----------
  var rtEdit = null, rtDays = [], rtParts = [];
  function rtFormReset(r) {
    rtEdit = r || null;
    $('rtFormTitle').textContent = r ? '루틴 수정' : '새 루틴 만들기';
    $('rtName').value = r ? r.name : '';
    fillCatSelect($('rtCat')); $('rtCat').value = r ? r.categoryId : (selCat || data.categories[0].id);
    $('rtTime').value = r ? r.time : '07:00';
    $('rtMin').value = r ? r.minutes : 30;
    $('rtNote').value = r ? r.note || '' : '';
    $('rtRemind').checked = r ? !!r.remind : true;
    rtDays = r ? r.days.slice() : [1, 3, 5]; rtParts = r ? (r.parts || []).slice() : [];
    $('rtCancel').hidden = !r;
    drawRtForm();
  }
  function drawRtForm() {
    $('rtDays').innerHTML = DAYS.map(function (d, i) { return '<button type="button" class="day-chip' + (rtDays.indexOf(i) >= 0 ? ' on' : '') + (i === 0 ? ' sun' : i === 6 ? ' sat' : '') + '" data-d="' + i + '">' + d + '</button>'; }).join('') +
      '<button type="button" class="day-chip all" data-d="all">매일</button>';
    var c = cat($('rtCat').value);
    $('rtParts').hidden = !(c && c.parts);
    $('rtParts').innerHTML = partChipsHTML(rtParts);
  }
  function renderRtList() {
    var rs = (data.routines || []).slice().sort(function (a, b) { return a.time < b.time ? -1 : 1; });
    $('rtList').innerHTML = rs.length ? rs.map(function (r) {
      var c = cat(r.categoryId);
      return '<li style="--c:' + esc(c ? c.color : '#d6c2ff') + '"><span class="e-ic">' + ic(c ? c.icon : 'sparkle') + '</span><div class="body"><div class="t">' + esc(r.name) + '</div>' +
        '<div class="note">' + (r.days.length === 7 ? '매일' : r.days.slice().sort().map(function (d) { return DAYS[d]; }).join(' ')) + ' · ' + esc(r.time) + ' · ' + fmtMin(r.minutes) + (r.remind ? ' · 알림' : '') + '</div></div>' +
        '<div class="acts"><button data-rtg="' + esc(r.id) + '" title="Google 캘린더에 추가">' + ic('calendar') + '</button><button data-rte="' + esc(r.id) + '" title="수정">' + ic('pen') + '</button><button class="danger" data-rtd="' + esc(r.id) + '" title="삭제">' + ic('trash') + '</button></div></li>';
    }).join('') : '<li class="empty">아직 루틴이 없어요</li>';
  }
  function openRoutines() { renderRtList(); rtFormReset(); $('routineDlg').showModal(); }
  $('routineManage').addEventListener('click', openRoutines);
  $('rtClose').addEventListener('click', function () { $('routineDlg').close(); });
  $('rtCancel').addEventListener('click', function () { rtFormReset(); });
  $('rtCat').addEventListener('change', drawRtForm);
  $('rtDays').addEventListener('click', function (ev) {
    var b = ev.target.closest('[data-d]'); if (!b) return;
    if (b.dataset.d === 'all') rtDays = rtDays.length === 7 ? [] : [0, 1, 2, 3, 4, 5, 6];
    else { var d = +b.dataset.d, k = rtDays.indexOf(d); if (k >= 0) rtDays.splice(k, 1); else rtDays.push(d); }
    sfx('pop'); drawRtForm();
  });
  $('rtParts').addEventListener('click', function (ev) {
    var b = ev.target.closest('[data-p]'); if (!b) return;
    var k = rtParts.indexOf(b.dataset.p); if (k >= 0) rtParts.splice(k, 1); else rtParts.push(b.dataset.p);
    drawRtForm();
  });
  $('rtList').addEventListener('click', function (ev) {
    var e = ev.target.closest('[data-rte]'), d = ev.target.closest('[data-rtd]');
    if (e) rtFormReset((data.routines || []).find(function (r) { return r.id === e.dataset.rte; }));
    if (d) { data.routines = data.routines.filter(function (r) { return r.id !== d.dataset.rtd; }); save(); renderRtList(); render(); toast('루틴을 지웠어요'); }
  });
  $('rtForm').addEventListener('submit', function (ev) {
    ev.preventDefault();
    if (!rtDays.length) { toast('요일을 하나 이상 골라주세요'); return; }
    var c = cat($('rtCat').value);
    var r = rtEdit || { id: uid() };
    r.name = $('rtName').value.trim() || '루틴'; r.categoryId = $('rtCat').value; r.time = $('rtTime').value || '07:00';
    r.minutes = Math.max(1, parseInt($('rtMin').value, 10) || 30); r.note = $('rtNote').value.trim(); r.remind = $('rtRemind').checked;
    r.days = rtDays.slice().sort(); r.parts = c && c.parts ? rtParts.slice() : [];
    data.routines = data.routines || [];
    if (!rtEdit) data.routines.push(r);
    save(); sfx('save'); toast('✧ 루틴 "' + r.name + '" 저장');
    renderRtList(); rtFormReset(); render();
    if (r.remind && 'Notification' in window && Notification.permission === 'default') setTimeout(askNotify, 400);
  });

  // ---------- 알림 ----------
  var swReg = null;
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) navigator.serviceWorker.register('sw.js').then(function (r) { swReg = r; }).catch(function () { });
  function notiState() {
    if (!('Notification' in window)) return 'unsupported';
    return Notification.permission;
  }
  function askNotify() {
    if (!('Notification' in window)) { toast('이 브라우저는 알림을 지원하지 않아요 — 캘린더 파일을 써주세요'); return; }
    Notification.requestPermission().then(function (p) {
      toast(p === 'granted' ? '✧ 알림이 켜졌어요' : '알림이 꺼져 있어요 — 브라우저 설정에서 허용해 주세요');
      if (currentView === 'settings') renderSettings();
    });
  }
  function notify(title, body, tag) {
    if (notiState() !== 'granted') return false;
    var opt = { body: body, tag: tag, icon: 'assets/icon-192.png', badge: 'assets/icon-192.png', renotify: true };
    try {
      if (swReg && swReg.showNotification) swReg.showNotification(title, opt);
      else new Notification(title, opt);
      return true;
    } catch (e) { return false; }
  }
  function checkReminders() {
    var now = new Date(), nowM = now.getHours() * 60 + now.getMinutes(), t = today();
    var nt = data.notified || {};
    Object.keys(nt).forEach(function (k) { if (k.slice(0, 10) !== t) delete nt[k]; });
    data.notified = nt;
    var fired = false;
    routinesToday().forEach(function (r) {
      var key = t + '|' + r.id, d = nowM - hm2min(r.time);
      if (!r.remind || nt[key] || routineEntry(r) || d < 0 || d > 60) return;
      nt[key] = 1; fired = true;
      var msg = r.time + ' · ' + catName(r.categoryId) + ' ' + fmtMin(r.minutes) + (r.note ? ' · ' + r.note : '');
      notify('✧ ' + r.name + ' 시간이에요', msg, key);
      if (!document.hidden) toast('✧ ' + r.name + ' 시간이에요');
    });
    var wt = data.settings.wordTime;
    if (wt && !nt[t + '|words']) {
      var d2 = nowM - hm2min(wt), p = data.english.plans[t];
      var tot = p ? p.fresh.length + p.review.length : 1, lrn = p ? p.learned.length : 0;
      if (d2 >= 0 && d2 <= 120 && lrn < tot) { nt[t + '|words'] = 1; fired = true; notify('✧ 오늘의 토익 단어', '아직 ' + (tot - lrn) + '개 남았어요. 구름 요정이 기다리고 있어요', t + '|words'); }
    }
    if (fired) save();
  }
  setInterval(checkReminders, 30000);

  // ---------- 캘린더(.ics) 내보내기 ----------
  function icsEsc(s) { return String(s).replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n'); }
  function icsFold(line) {
    var enc = new TextEncoder(), out = [], cur = '', bytes = 0;
    Array.from(line).forEach(function (ch) {
      var b = enc.encode(ch).length;
      if (bytes + b > 73) { out.push(cur); cur = ' '; bytes = 1; }
      cur += ch; bytes += b;
    });
    out.push(cur); return out.join('\r\n');
  }
  function nextDateFor(days) { for (var i = 0; i < 7; i++) { var d = addDays(today(), i); if (days.indexOf(parseYmd(d).getDay()) >= 0) return d; } return today(); }
  function buildICS() {
    var BY = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'], n = new Date();
    var stamp = n.getUTCFullYear() + pad(n.getUTCMonth() + 1) + pad(n.getUTCDate()) + 'T' + pad(n.getUTCHours()) + pad(n.getUTCMinutes()) + '00Z';
    var L = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//dream-garden//routine//KO', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH', 'X-WR-CALNAME:꿈속 정원 루틴'];
    var ev = function (uidv, start, time, mins, rrule, title, desc) {
      L.push('BEGIN:VEVENT', 'UID:' + uidv + '@dream-garden', 'DTSTAMP:' + stamp, 'DTSTART:' + start.replace(/-/g, '') + 'T' + time.replace(':', '') + '00',
        'DURATION:PT' + mins + 'M', 'RRULE:' + rrule, 'SUMMARY:' + icsEsc(title), 'DESCRIPTION:' + icsEsc(desc),
        'BEGIN:VALARM', 'ACTION:DISPLAY', 'DESCRIPTION:' + icsEsc(title), 'TRIGGER:-PT0M', 'END:VALARM', 'END:VEVENT');
    };
    var rs = (data.routines || []).filter(function (r) { return r.remind; });
    rs.forEach(function (r) {
      ev(r.id, nextDateFor(r.days), r.time, r.minutes, 'FREQ=WEEKLY;BYDAY=' + r.days.map(function (d) { return BY[d]; }).join(','),
        '✧ ' + r.name, catName(r.categoryId) + ' ' + fmtMin(r.minutes) + ((r.parts || []).length ? ' · ' + r.parts.map(function (p) { return PNAME[p]; }).join('·') : '') + (r.note ? ' · ' + r.note : '') + ' — 꿈속 정원');
    });
    if (data.settings.wordTime) ev('words', today(), data.settings.wordTime, 15, 'FREQ=DAILY', '✧ 오늘의 토익 단어', '하루 ' + data.settings.dailyWords + '개 단어 공부 — 꿈속 정원');
    L.push('END:VCALENDAR');
    return { text: L.map(icsFold).join('\r\n') + '\r\n', count: rs.length + (data.settings.wordTime ? 1 : 0) };
  }
  $('icsBtn').addEventListener('click', function () {
    var r = buildICS();
    if (!r.count) { toast('알림 켜진 루틴이나 단어 리마인더 시간이 없어요'); return; }
    var a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([r.text], { type: 'text/calendar;charset=utf-8' })); a.download = 'dream-garden-routines.ics';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1500);
    toast('✧ 캘린더 파일 저장 — 휴대폰에서 열어 캘린더에 추가해요 (' + r.count + '개)');
  });
  $('notiBtn').addEventListener('click', askNotify);
  $('notiTest').addEventListener('click', function () {
    if (notiState() !== 'granted') { askNotify(); return; }
    notify('✧ 꿈속 정원', '알림이 잘 도착했어요. 루틴 시간에 이렇게 알려드릴게요', 'test');
  });
  $('setWordTime').addEventListener('change', function () { data.settings.wordTime = this.value; save(); toast(this.value ? '✧ 매일 ' + this.value + '에 단어 리마인더' : '단어 리마인더 끔'); });
  function renderNotiSettings() {
    var s = notiState();
    $('notiState').textContent = s === 'granted' ? '허용됨 ✓ (앱이 열려 있거나 백그라운드일 때 알림)' : s === 'denied' ? '차단됨 — 브라우저 사이트 설정에서 허용해 주세요' : s === 'unsupported' ? '이 브라우저는 알림 미지원' : '아직 허용 안 함';
    $('notiBtn').hidden = s === 'granted';
    $('setWordTime').value = data.settings.wordTime || '';
    var standalone = window.matchMedia && window.matchMedia('(display-mode: standalone)').matches;
    $('pwaInfo').innerHTML = location.protocol === 'file:'
      ? '지금은 PC 파일로 열려 있어요. 휴대폰 앱처럼 쓰려면 웹에 올린 주소를 휴대폰 브라우저로 열고 "홈 화면에 추가"를 하면 돼요. 앱을 꺼둬도 확실히 울리게 하려면 위의 캘린더 파일을 쓰세요.'
      : standalone ? '✓ 홈 화면 앱으로 실행 중이에요' : '휴대폰 브라우저 메뉴에서 "홈 화면에 추가"를 하면 앱처럼 쓸 수 있어요';
  }

  // ================= Google 캘린더 · Claude 가져오기 =================
  var BYDAY = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  function tzName() { try { return Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Seoul'; } catch (e) { return 'Asia/Seoul'; } }
  function gcalDT(date, time, addMin) {
    var d = parseYmd(date), p = time.split(':'); d.setHours(+p[0], +p[1] + (addMin || 0), 0, 0);
    return d.getFullYear() + pad(d.getMonth() + 1) + pad(d.getDate()) + 'T' + pad(d.getHours()) + pad(d.getMinutes()) + '00';
  }
  function gcalUrl(title, date, time, minutes, rrule, details) {
    return 'https://calendar.google.com/calendar/render?action=TEMPLATE' +
      '&text=' + encodeURIComponent(title) + '&dates=' + gcalDT(date, time) + '/' + gcalDT(date, time, minutes) +
      '&ctz=' + encodeURIComponent(tzName()) + (rrule ? '&recur=' + encodeURIComponent('RRULE:' + rrule) : '') +
      '&details=' + encodeURIComponent(details || '');
  }
  function routineGcal(r) {
    var desc = catName(r.categoryId) + ' ' + fmtMin(r.minutes) + ((r.parts || []).length ? ' · ' + r.parts.map(function (p) { return PNAME[p]; }).join('·') : '') + (r.note ? ' · ' + r.note : '') + '\n꿈속 정원: ' + appUrl();
    return gcalUrl('✧ ' + r.name, nextDateFor(r.days), r.time, r.minutes, 'FREQ=WEEKLY;BYDAY=' + r.days.map(function (d) { return BYDAY[d]; }).join(','), desc);
  }
  function appUrl() { return /^https?:$/.test(location.protocol) ? location.origin + location.pathname : 'https://mioc1102.github.io/dream-garden/'; }
  $('rtList').addEventListener('click', function (ev) {
    var g = ev.target.closest('[data-rtg]'); if (!g) return;
    var r = (data.routines || []).find(function (x) { return x.id === g.dataset.rtg; });
    if (r) window.open(routineGcal(r), '_blank', 'noopener');
  });
  $('gcalWordBtn').addEventListener('click', function () {
    var t = data.settings.wordTime || '21:00';
    window.open(gcalUrl('✧ 오늘의 토익 단어', today(), t, 15, 'FREQ=DAILY', '하루 ' + data.settings.dailyWords + '개 단어 공부\n꿈속 정원: ' + appUrl()), '_blank', 'noopener');
  });
  $('gcalAllBtn').addEventListener('click', function () {
    var rs = (data.routines || []);
    if (!rs.length) { toast('먼저 루틴을 만들어 주세요'); return; }
    openRoutines(); toast('루틴 옆 캘린더 아이콘을 누르면 Google 캘린더에 하나씩 들어가요');
  });

  // ---------- Claude가 만든 일정 가져오기 ----------
  var DAY_ALIAS = { '일': 0, '월': 1, '화': 2, '수': 3, '목': 4, '금': 5, '토': 6, sun: 0, mon: 1, tue: 2, wed: 3, thu: 4, fri: 5, sat: 6 };
  var PART_ALIAS = {}; PARTS.forEach(function (p) { PART_ALIAS[p[0]] = p[0]; PART_ALIAS[p[1]] = p[0]; });
  Object.assign(PART_ALIAS, { '하체': 'legs', '다리': 'legs', '복부': 'core', '코어': 'core', '이두': 'arms', '삼두': 'arms', '유산소운동': 'cardio' });
  function b64urlDecode(s) {
    s = s.replace(/-/g, '+').replace(/_/g, '/'); while (s.length % 4) s += '=';
    var bin = atob(s), bytes = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return new TextDecoder().decode(bytes);
  }
  function b64urlEncode(str) {
    var bytes = new TextEncoder().encode(str), bin = '';
    bytes.forEach(function (b) { bin += String.fromCharCode(b); });
    return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }
  function extractPayload(text) {
    text = String(text || '').trim();
    var m = text.match(/#import=([A-Za-z0-9_\-]+)/);
    if (m) return JSON.parse(b64urlDecode(m[1]));
    var code = text.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (code) text = code[1];
    var a = text.indexOf('{'), b = text.lastIndexOf('}');
    if (a < 0 || b < a) throw new Error('JSON을 찾지 못했어요');
    return JSON.parse(text.slice(a, b + 1));
  }
  function resolveCat(v, plan) {
    if (!v) return data.categories[0].id;
    var s = String(v).trim(), low = s.toLowerCase();
    var c = data.categories.find(function (x) { return x.id.toLowerCase() === low || x.name.toLowerCase() === low; });
    if (c) return c.id;
    var p = plan.newCats.find(function (x) { return x.name === s; });
    if (!p) { p = { id: uid(), name: s, icon: 'sparkle', color: '#c7a8ff', dailyGoalMin: 0 }; plan.newCats.push(p); }
    return p.id;
  }
  function parseDays(v) {
    if (v == null) return [0, 1, 2, 3, 4, 5, 6];
    if (typeof v === 'string') { if (/매일|daily|everyday|every day/i.test(v)) return [0, 1, 2, 3, 4, 5, 6]; if (/평일|weekday/i.test(v)) return [1, 2, 3, 4, 5]; if (/주말|weekend/i.test(v)) return [0, 6]; v = v.split(/[\s,/·]+/); }
    var out = [];
    (Array.isArray(v) ? v : [v]).forEach(function (d) {
      var k = typeof d === 'number' ? d : DAY_ALIAS[String(d).trim().toLowerCase().slice(0, 3)] != null ? DAY_ALIAS[String(d).trim().toLowerCase().slice(0, 3)] : DAY_ALIAS[String(d).trim().charAt(0)];
      if (k >= 0 && k <= 6 && out.indexOf(k) < 0) out.push(k);
    });
    return out.sort();
  }
  function parseParts(v) { return (Array.isArray(v) ? v : v ? String(v).split(/[\s,/·]+/) : []).map(function (p) { return PART_ALIAS[String(p).trim()] || PART_ALIAS[String(p).trim().toLowerCase()]; }).filter(Boolean); }
  function normTime(t) { var m = String(t || '07:00').match(/(\d{1,2})[:시.]?\s*(\d{0,2})/); if (!m) return '07:00'; return pad(Math.min(23, +m[1])) + ':' + pad(Math.min(59, +(m[2] || 0))); }
  function buildImportPlan(payload) {
    var plan = { newCats: [], routines: [], entries: [], words: [] };
    (payload.routines || payload.routine || []).forEach(function (r) {
      var days = parseDays(r.days || r.day || r.weekdays);
      if (!days.length) return;
      var cid = resolveCat(r.category || r.categoryId || r.분야, plan);
      plan.routines.push({ id: uid(), name: String(r.name || r.title || '루틴').slice(0, 30), categoryId: cid, days: days, time: normTime(r.time), minutes: Math.max(1, Math.min(600, parseInt(r.minutes || r.duration, 10) || 30)), note: String(r.note || r.memo || '').slice(0, 200), remind: r.remind !== false, parts: parseParts(r.parts) });
    });
    (payload.entries || payload.records || []).forEach(function (e) {
      var date = /^\d{4}-\d{2}-\d{2}$/.test(e.date) ? e.date : today();
      plan.entries.push({ id: uid(), date: date, categoryId: resolveCat(e.category || e.categoryId, plan), minutes: Math.max(1, Math.min(1440, parseInt(e.minutes, 10) || 30)), note: String(e.note || '').slice(0, 200), createdAt: Date.now(), parts: parseParts(e.parts) });
    });
    (payload.words || []).forEach(function (w) { if (w && w.w && w.m) plan.words.push({ w: String(w.w).trim(), p: POS[w.p] ? w.p : 'n', m: String(w.m), ex: w.ex && String(w.ex).indexOf('*') >= 0 ? String(w.ex) : '', exk: String(w.exk || '') }); });
    return plan;
  }
  var pendingImport = null;
  function previewImport(payload) {
    var plan = buildImportPlan(payload), n = plan.routines.length + plan.entries.length + plan.words.length;
    if (!n) { toast('가져올 일정이 없어요'); return; }
    pendingImport = plan;
    var catLabel = function (id) { var c = cat(id) || plan.newCats.find(function (x) { return x.id === id; }); return c ? c.name : '?'; };
    $('impList').innerHTML =
      plan.routines.map(function (r) { return '<li><span class="tag rev">루틴</span> <b>' + esc(r.name) + '</b><div class="note">' + (r.days.length === 7 ? '매일' : r.days.map(function (d) { return DAYS[d]; }).join(' ')) + ' ' + r.time + ' · ' + esc(catLabel(r.categoryId)) + ' ' + fmtMin(r.minutes) + (r.parts.length ? ' · ' + r.parts.map(function (p) { return PNAME[p]; }).join('·') : '') + (r.note ? ' · ' + esc(r.note) : '') + '</div></li>'; }).join('') +
      plan.entries.map(function (e) { return '<li><span class="tag ok">기록</span> <b>' + esc(catLabel(e.categoryId)) + ' ' + fmtMin(e.minutes) + '</b><div class="note">' + prettyDate(e.date) + (e.note ? ' · ' + esc(e.note) : '') + '</div></li>'; }).join('') +
      plan.words.map(function (w) { return '<li><span class="tag new">단어</span> <b>' + esc(w.w) + '</b> ' + esc(w.m) + '</li>'; }).join('') +
      (plan.newCats.length ? '<li class="muted small">새 분야도 만들어요: ' + plan.newCats.map(function (c) { return esc(c.name); }).join(', ') + '</li>' : '');
    $('impDlg').showModal();
  }
  $('impDlg').addEventListener('close', function () {
    if ($('impDlg').returnValue === 'ok' && pendingImport) {
      var p = pendingImport;
      data.categories = data.categories.concat(p.newCats);
      data.routines = (data.routines || []).concat(p.routines);
      p.entries.forEach(function (e) { if (!e.parts.length) delete e.parts; data.entries.push(e); });
      p.words.forEach(function (w) { data.english.custom = (data.english.custom || []).filter(function (c) { return c.w !== w.w; }); data.english.custom.push(w); });
      save(); syncCustomWords(); sfx('save'); confetti(30);
      toast('✧ 가져오기 완료 — 루틴 ' + p.routines.length + ' · 기록 ' + p.entries.length + ' · 단어 ' + p.words.length);
      render();
    }
    pendingImport = null; $('impDlg').returnValue = '';
  });
  function checkHashImport() {
    var m = location.hash.match(/import=([A-Za-z0-9_\-]+)/);
    if (!m) return;
    history.replaceState(null, '', location.pathname + location.search);
    try { previewImport(JSON.parse(b64urlDecode(m[1]))); } catch (e) { toast('가져오기 링크가 올바르지 않아요'); }
  }
  window.addEventListener('hashchange', checkHashImport);
  $('impBtn').addEventListener('click', function () {
    try { previewImport(extractPayload($('impText').value)); $('impText').value = ''; } catch (e) { toast('형식을 읽지 못했어요 — Claude가 준 코드나 링크를 그대로 붙여넣어 주세요'); }
  });
  function claudePrompt() {
    var cats = data.categories.map(function (c) { return c.name; }).join(', ');
    return [
      '너는 내 "꿈속 정원" 자기계발 앱의 일정 도우미야. 내가 말하는 루틴/기록을 아래 JSON 형식으로 만들고,',
      '그 JSON을 UTF-8 → base64url(패딩 = 제거)로 인코딩해서 다음 형태의 링크도 같이 줘:',
      appUrl() + '#import=<base64url>',
      '링크를 만들 수 없으면 JSON 코드블록만 줘도 돼 (앱의 "Claude 가져오기" 칸에 붙여넣을게).',
      '',
      'JSON 형식:',
      '{"routines":[{"name":"아침 가슴 운동","category":"운동","days":["월","수","금"],"time":"07:00","minutes":45,"parts":["가슴","어깨"],"note":"벤치프레스 5x5","remind":true}],',
      ' "entries":[{"date":"YYYY-MM-DD","category":"공부","minutes":60,"note":"수학 문제집"}],',
      ' "words":[{"w":"onboarding","p":"n","m":"신입 적응 교육","ex":"The *onboarding* session starts at nine.","exk":"신입 교육은 9시에 시작한다."}]}',
      '',
      '규칙: category는 내 분야 중 하나(' + cats + ') — 없으면 새 이름 써도 됨. days는 일~토 한 글자 배열 또는 "매일"/"평일"/"주말".',
      'parts(운동 부위)는 가슴/등/어깨/하체/팔/복근/유산소 중에서. time은 24시간 HH:MM. 오늘은 ' + today() + '(' + DAYS[new Date().getDay()] + ')야.',
      '필요 없는 키는 빼도 돼. 이제 내 요청:'
    ].join('\n');
  }
  $('impPromptBtn').addEventListener('click', function () {
    var t = claudePrompt();
    (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(function () { toast('✧ Claude용 안내문을 복사했어요 — Claude에 붙여넣고 원하는 일정을 말해요'); })
      .catch(function () { $('impText').value = t; $('impText').select(); toast('복사가 막혀서 칸에 넣어뒀어요 — 직접 복사해 주세요'); });
  });
  window.__dreamExport = function (obj) { return appUrl() + '#import=' + b64urlEncode(JSON.stringify(obj)); }; // 테스트·디버그용

  // ================= 홈 =================
  var selCat = null;
  function getQuests() {
    var agg = aggregate(), t = today(), q = [];
    data.categories.forEach(function (c) {
      if (!c.dailyGoalMin) return;
      var v = (agg[c.id] || {})[t] || 0;
      q.push({ ic: c.icon, color: c.color, title: c.name + ' ' + fmtMin(c.dailyGoalMin), sub: fmtMin(v) + ' / ' + fmtMin(c.dailyGoalMin), pct: Math.min(1, v / c.dailyGoalMin), done: v >= c.dailyGoalMin, cat: c.id });
    });
    var p = getPlan(t), tot = p.fresh.length + p.review.length;
    if (tot) q.push({ ic: 'cards', color: '#9ee3d4', title: '오늘의 토익 단어 외우기', sub: p.learned.length + ' / ' + tot + '개', pct: p.learned.length / tot, done: p.learned.length >= tot, eng: 'study' });
    var best = bestScore(p);
    ['weekly', 'monthly'].forEach(function (k) { var e = examInfo(k); if (e.due || e.doneToday) q.push({ ic: k === 'weekly' ? 'moon' : 'star', color: '#d6c2ff', title: e.name, sub: e.doneToday ? '응시 완료' : '오늘 열렸어요', pct: e.doneToday ? 1 : 0, done: !!e.doneToday, exam: k }); });
    q.push({ ic: 'pen', color: '#ffc3e4', title: '토익 단어 시험 보기', sub: best == null ? '아직 안 봤어요' : '최고 ' + best + '점', pct: best == null ? 0 : 1, done: best != null, eng: 'quiz' });
    return q;
  }
  function renderHome() {
    var quests = getQuests();
    var done = quests.filter(function (x) { return x.done; }).length;
    $('questCount').textContent = done + ' / ' + quests.length + ' 완료';
    $('quests').innerHTML = quests.map(function (x, i) {
      return '<li class="quest' + (x.done ? ' done' : '') + '" data-qi="' + i + '" style="--c:' + esc(x.color) + '">' +
        '<div class="q-ic">' + ic(x.ic) + '</div><div class="q-body"><div class="q-title">' + esc(x.title) + '</div>' +
        '<div class="q-bar"><i style="width:' + (x.pct * 100) + '%"></i></div><div class="q-sub">' + esc(x.sub) + '</div></div>' +
        ic('sparkle', 'q-stamp fill') + '</li>';
    }).join('');
    $('quests').onclick = function (ev) {
      var li = ev.target.closest('[data-qi]'); if (!li) return;
      var q = quests[+li.dataset.qi];
      if (q.eng === 'study') { eng.screen = 'home'; go('english'); startStudy(); }
      else if (q.eng === 'quiz') { eng.screen = 'home'; go('english'); startQuiz('today', 'mix'); }
      else if (q.exam) { eng.screen = 'home'; go('english'); if (!q.done) startQuiz(q.exam, 'mix'); }
      else if (q.cat) { selCat = q.cat; renderChips(); $('addMin').focus(); $('addForm').scrollIntoView({ behavior: 'smooth', block: 'center' }); }
    };
    renderGarden(quests);
    renderRoutineToday();
    renderChips();
    if (!$('addDate').value) $('addDate').value = today();
    var t = today();
    var list = sortEntries(data.entries.filter(function (e) { return e.date === t; }));
    $('todayTotal').textContent = '총 ' + fmtMin(list.reduce(function (s, e) { return s + e.minutes; }, 0));
    $('todayList').innerHTML = list.length ? list.map(entryLi).join('') : '<li class="empty">아직 오늘의 흔적이 없어요 ✧</li>';
  }
  function renderChips() {
    if (!cat(selCat)) selCat = data.categories[0] && data.categories[0].id;
    $('catChips').innerHTML = data.categories.map(function (c) {
      return '<button type="button" class="cat-chip' + (c.id === selCat ? ' sel' : '') + '" data-c="' + esc(c.id) + '" style="--c:' + esc(c.color) + '"><span class="dot">' + ic(c.icon) + '</span>' + esc(c.name) + '</button>';
    }).join('');
    renderPartBox();
  }
  $('catChips').addEventListener('click', function (ev) {
    var b = ev.target.closest('[data-c]'); if (!b) return;
    selCat = b.dataset.c; sfx('pop'); renderChips();
  });
  document.querySelector('.quick').addEventListener('click', function (ev) {
    var b = ev.target.closest('[data-q]'); if (!b) return;
    $('addMin').value = (parseInt($('addMin').value, 10) || 0) + parseInt(b.dataset.q, 10); sfx('pop');
  });
  $('addForm').addEventListener('submit', function (ev) {
    ev.preventDefault();
    var min = parseInt($('addMin').value, 10);
    if (!(min > 0) || !selCat) return;
    var en = { id: uid(), date: $('addDate').value || today(), categoryId: selCat, minutes: min, note: $('addNote').value.trim(), createdAt: Date.now() };
    if (cat(selCat) && cat(selCat).parts && selParts.length) en.parts = selParts.slice();
    data.entries.push(en); selParts = [];
    save();
    $('addMin').value = ''; $('addNote').value = '';
    resetTimer();
    var sb = ev.submitter, r = sb && sb.getBoundingClientRect();
    sfx('save'); floatXP(min, r ? { clientX: r.left + r.width / 2, clientY: r.top } : null);
    var c = cat(selCat), mins = (aggregate()[selCat] || {})[today()] || 0;
    if (c && c.dailyGoalMin && mins >= c.dailyGoalMin && mins - min < c.dailyGoalMin) { confetti(40); toast('✧ ' + c.name + ' 목표 달성 — 정원에 꽃이 피었어요'); }
    else toast('✦ 꿈에 기록했어요 · +' + min + ' xp');
    render();
  });

  // ---------- 타이머 ----------
  var timer = JSON.parse(localStorage.getItem(TIMER_KEY) || 'null') || { start: null, acc: 0 };
  var tick;
  function elapsed() { return timer.acc + (timer.start ? Date.now() - timer.start : 0); }
  function saveTimer() { localStorage.setItem(TIMER_KEY, JSON.stringify(timer)); }
  function drawTimer() {
    var s = Math.floor(elapsed() / 1000);
    $('timerDisplay').textContent = pad(Math.floor(s / 3600)) + ':' + pad(Math.floor(s / 60) % 60) + ':' + pad(s % 60);
    var label = timer.start ? 'pause|정지' : 'play|' + (timer.acc ? '이어서' : '시작');
    if ($('timerBtn').dataset.l !== label) { $('timerBtn').dataset.l = label; var p = label.split('|'); $('timerBtn').innerHTML = ic(p[0]) + p[1]; }
    $('timerBox').classList.toggle('running', !!timer.start);
  }
  function runTick() { clearInterval(tick); if (timer.start) tick = setInterval(drawTimer, 1000); drawTimer(); }
  function resetTimer() { timer = { start: null, acc: 0 }; saveTimer(); runTick(); }
  $('timerBtn').addEventListener('click', function () {
    if (timer.start) {
      timer.acc = elapsed(); timer.start = null;
      var m = Math.max(1, Math.round(timer.acc / 60000));
      $('addMin').value = m;
      toast('✧ ' + fmtMin(m) + ' 입력됨 — 기록하기를 눌러요');
    } else timer.start = Date.now();
    sfx('pop'); saveTimer(); runTick();
  });
  $('timerReset').addEventListener('click', resetTimer);

  // ---------- 기록 공통 ----------
  function entryLi(e) {
    return '<li data-id="' + esc(e.id) + '" style="--c:' + esc(catColor(e.categoryId)) + '">' +
      '<span class="e-ic">' + ic(catIcon(e.categoryId)) + '</span>' +
      '<div class="body"><div class="t">' + esc(catName(e.categoryId)) + ' · ' + fmtMin(e.minutes) + (e.auto ? '<span class="auto-tag">자동</span>' : '') + partTags(e) + '</div>' +
      (e.note ? '<div class="note">' + esc(e.note) + '</div>' : '') + '</div>' +
      '<div class="acts"><button data-act="edit" title="수정">' + ic('pen') + '</button><button data-act="del" class="danger" title="삭제">' + ic('trash') + '</button></div></li>';
  }
  function sortEntries(arr) {
    return arr.slice().sort(function (a, b) { return a.date < b.date ? 1 : a.date > b.date ? -1 : (b.createdAt || 0) - (a.createdAt || 0); });
  }
  function fillCatSelect(sel, withAll) {
    var v = sel.value;
    sel.innerHTML = (withAll ? '<option value="">✧ 전체 분야</option>' : '') +
      data.categories.map(function (c) { return '<option value="' + esc(c.id) + '">' + esc(c.name) + '</option>'; }).join('');
    if (v && cat(v)) sel.value = v;
  }
  var lastDeleted = null;
  document.addEventListener('click', function (ev) {
    var b = ev.target.closest('.entries button[data-act]'); if (!b) return;
    var id = b.closest('li').dataset.id, e = data.entries.find(function (x) { return x.id === id; });
    if (!e) return;
    if (b.dataset.act === 'del') {
      data.entries = data.entries.filter(function (x) { return x.id !== id; });
      save(); render(); lastDeleted = e;
      toast('기록이 안개 속으로 사라졌어요 <button id="undoBtn">되돌리기</button>', true);
      $('undoBtn').onclick = function () {
        if (lastDeleted) { data.entries.push(lastDeleted); lastDeleted = null; save(); render(); }
        $('toast').classList.remove('show');
      };
    } else openEdit(e);
  });
  var editing = null;
  function openEdit(e) {
    editing = e; fillCatSelect($('editCat'));
    $('editCat').value = e.categoryId; $('editDate').value = e.date; $('editMin').value = e.minutes; $('editNote').value = e.note || '';
    editParts = (e.parts || []).slice(); syncEditParts();
    $('editDlg').returnValue = ''; $('editDlg').showModal();
  }
  function syncEditParts() { var c = cat($('editCat').value); $('editPartsWrap').hidden = !(c && c.parts); $('editParts').innerHTML = partChipsHTML(editParts); }
  $('editCat').addEventListener('change', syncEditParts);
  $('editDlg').addEventListener('close', function () {
    if ($('editDlg').returnValue === 'save' && editing) {
      var m = parseInt($('editMin').value, 10);
      if (m > 0 && $('editDate').value) {
        editing.categoryId = $('editCat').value; editing.date = $('editDate').value; editing.minutes = m; editing.note = $('editNote').value.trim();
        var ec = cat(editing.categoryId); if (ec && ec.parts && editParts.length) editing.parts = editParts.slice(); else delete editing.parts;
        save(); toast('✧ 수정했어요'); render();
      }
    }
    editing = null;
  });

  // ================= 영어 루틴 =================
  var DOMAINS = {
    office: ['사무·회의', 'notebook'], hr: ['인사·채용', 'heart'], marketing: ['마케팅·영업', 'sparkle'], finance: ['재무·회계', 'chart'],
    production: ['생산·물류', 'gift'], shopping: ['쇼핑·고객', 'cup'], travel: ['여행·교통', 'cloud'], dining: ['외식·행사', 'music'],
    legal: ['계약·법률', 'book'], property: ['부동산·시설', 'door'], tech: ['IT·기술', 'eye'], general: ['기본 빈출', 'leaf'], my: ['내 단어', 'pen']
  };
  var DOMAIN_KEYS = Object.keys(DOMAINS);
  var LEVELS = { 1: '기초 · ~600점', 2: '중급 · ~800점', 3: '고급 · 900점+' };
  var LV_SHORT = { 1: '기초', 2: '중급', 3: '고급' };
  function dName(d) { return (DOMAINS[d] || ['기타'])[0]; }
  function dIcon(d) { return (DOMAINS[d] || [0, 'sparkle'])[1]; }
  function lvDots(lv) { return '<span class="lv-dots l' + lv + '" title="' + (LV_SHORT[lv] || '') + '">' + [1, 2, 3].map(function (i) { return '<i class="' + (i <= lv ? 'on' : '') + '"></i>'; }).join('') + '</span>'; }
  function exHTML(ex) { return esc(ex).replace(/\*([^*]+)\*/, '<mark>$1</mark>'); }
  function exBlank(ex) { return esc(ex).replace(/\*([^*]+)\*/, '<span class="blank">_______</span>'); }

  // 사용자 단어를 단어 목록에 합치기
  function syncCustomWords() {
    W = W.filter(function (x) { return x.d !== 'my'; });
    (data.english.custom || []).forEach(function (c) { if (!WMAP[c.w] || WMAP[c.w].d === 'my') { var x = { w: c.w, p: c.p || 'n', m: c.m, lv: 1, d: 'my', ex: c.ex || '', exk: c.exk || '' }; W.push(x); WMAP[c.w] = x; } });
    indexWords();
  }
  var DIDX = {};
  function indexWords() { var cnt = {}; W.forEach(function (x) { cnt[x.d] = (cnt[x.d] || 0) + 1; DIDX[x.w] = cnt[x.d]; }); }

  function wstate(w) { return data.english.words[w] || (data.english.words[w] = { right: 0, wrong: 0, fix: 0 }); }
  function isKnown(s) { return s && s.intro && !s.wrongNote && s.right >= 1; }
  function bestScore(p) {
    var ts = (p.tests || []).filter(function (t) { return t.source === 'today'; });
    return ts.length ? Math.max.apply(null, ts.map(function (t) { return Math.round(t.score / t.total * 100); })) : null;
  }
  function dayNumber(date) {
    var n = 0;
    Object.keys(data.english.plans).forEach(function (k) { var p = data.english.plans[k]; if (k < date && (p.learned.length || p.tests.length)) n++; });
    return n + 1;
  }
  function daysBetween(a, b) { return Math.round((parseYmd(b) - parseYmd(a)) / 86400000); }

  // ---------- 코스 (난이도 · 분야) ----------
  function courseLevel() {
    var c = data.settings.course;
    if (c.level === 'auto') return data.english.diag ? data.english.diag.level : 1;
    return c.level;
  }
  function freshCandidates(exclude) {
    var st = data.english.words, c = data.settings.course, start = courseLevel();
    var doms = c.domains && c.domains.length ? c.domains : null;
    var rank = function (lv) { if (c.level === 'all') return 0; if (c.level === 'auto') return lv >= start ? lv - start : 10 + lv; return lv === c.level ? 0 : 10 + Math.abs(lv - c.level); };
    return W.filter(function (x) {
      return x.d !== 'my' && !(st[x.w] && st[x.w].intro) && (!doms || doms.indexOf(x.d) >= 0) && (!exclude || exclude.indexOf(x.w) < 0);
    }).sort(function (a, b) { return rank(a.lv) - rank(b.lv) || DIDX[a.w] - DIDX[b.w] || DOMAIN_KEYS.indexOf(a.d) - DOMAIN_KEYS.indexOf(b.d); });
  }
  function courseLabel() {
    var c = data.settings.course;
    var lv = c.level === 'auto' ? '추천(' + LV_SHORT[courseLevel()] + '부터)' : c.level === 'all' ? '전체 난이도' : LV_SHORT[c.level];
    var d = c.domains && c.domains.length ? (c.domains.length <= 2 ? c.domains.map(dName).join(', ') : c.domains.length + '개 분야') : '전 분야';
    return lv + ' · ' + d;
  }

  function makePlan(date) {
    var st = data.english.words, n = data.settings.dailyWords;
    var fresh = freshCandidates().slice(0, n).map(function (x) { return x.w; });
    var spaced = [];
    [1, 3, 7, 14, 30].forEach(function (k) {
      var d = addDays(date, -k);
      W.forEach(function (x) { var s = st[x.w]; if (s && s.intro === d && spaced.indexOf(x.w) < 0) spaced.push(x.w); });
    });
    var wrong = W.filter(function (x) { return st[x.w] && st[x.w].wrongNote; })
      .sort(function (a, b) { return st[b.w].wrong - st[a.w].wrong; }).map(function (x) { return x.w; });
    var review = [];
    wrong.concat(spaced).forEach(function (w) { if (review.indexOf(w) < 0 && fresh.indexOf(w) < 0) review.push(w); });
    return { fresh: fresh, review: review.slice(0, 15), learned: [], tests: [] };
  }
  function getPlan(date) {
    var p = data.english.plans[date];
    if (!p) { p = data.english.plans[date] = makePlan(date); save(); }
    p.fresh = p.fresh.filter(function (w) { return WMAP[w]; }); p.review = p.review.filter(function (w) { return WMAP[w]; });
    return p;
  }
  function moreWords() {
    var p = getPlan(today());
    var extra = freshCandidates(p.fresh.concat(p.review)).slice(0, 10).map(function (x) { return x.w; });
    if (!extra.length) { toast('이 코스의 단어를 다 받았어요 ✧'); return; }
    p.fresh = p.fresh.concat(extra); save(); sfx('save'); toast('✦ 새 단어 ' + extra.length + '개가 내려왔어요'); renderEnglish();
  }
  function speak(w) {
    if (!window.speechSynthesis) { toast('이 브라우저는 발음 기능을 지원하지 않아요'); return; }
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(w); u.lang = 'en-US'; u.rate = .9;
    var v = speechSynthesis.getVoices().find(function (x) { return /^en(-|_)US/i.test(x.lang); });
    if (v) u.voice = v;
    speechSynthesis.speak(u);
  }
  function spkBtn(w, cls) { return '<button class="spk' + (cls ? ' ' + cls : '') + '" data-eng="speak" data-w="' + esc(w) + '" title="발음 듣기">' + ic('speaker') + '</button>'; }
  function starBtn(w) { var on = data.english.stars[w]; return '<button class="star-btn' + (on ? ' on' : '') + '" data-eng="star" data-w="' + esc(w) + '" title="북마크">' + ic('star') + '</button>'; }
  function autoLog(start, note) {
    if (!data.settings.autoLog || !cat('english') || !start) return;
    var m = Math.min(120, Math.max(1, Math.round((Date.now() - start) / 60000)));
    data.entries.push({ id: uid(), date: today(), categoryId: 'english', minutes: m, note: note, createdAt: Date.now(), auto: true });
  }
  function meaningChunks(m) { return m.split(',').map(function (t) { return t.replace(/\(.*?\)/g, '').trim(); }); }
  function makeChoices(x) {
    var mine = meaningChunks(x.m);
    var pool = shuffle(W.filter(function (y) { return y.w !== x.w && !meaningChunks(y.m).some(function (c) { return mine.indexOf(c) >= 0; }); }).slice(0, 4000));
    var same = pool.filter(function (y) { return y.p === x.p && y.lv === x.lv; });
    if (same.length < 3) same = pool.filter(function (y) { return y.p === x.p; });
    return shuffle([x].concat((same.length >= 3 ? same : pool).slice(0, 3)));
  }

  // ---------- 실력 분석 (예상 점수 · 분야별) ----------
  function levelStats() {
    var st = data.english.words, r = { 1: { t: 0, k: 0, i: 0 }, 2: { t: 0, k: 0, i: 0 }, 3: { t: 0, k: 0, i: 0 } };
    W.forEach(function (x) { if (x.d === 'my' || !r[x.lv]) return; var s = st[x.w]; r[x.lv].t++; if (s && s.intro) r[x.lv].i++; if (isKnown(s)) r[x.lv].k++; });
    return r;
  }
  function domainStats() {
    var st = data.english.words, r = {};
    W.forEach(function (x) {
      var d = r[x.d] || (r[x.d] = { t: 0, i: 0, k: 0, right: 0, wrong: 0 }); var s = st[x.w];
      d.t++; if (s && s.intro) d.i++; if (isKnown(s)) d.k++; if (s) { d.right += s.right || 0; d.wrong += s.wrong || 0; }
    });
    return r;
  }
  function recentAcc() {
    var ex = (data.english.exams || []).slice(-8);
    var ts = [];
    Object.keys(data.english.plans).sort().slice(-14).forEach(function (k) { ts = ts.concat(data.english.plans[k].tests || []); });
    var all = ex.concat(ts.slice(-10)).filter(function (t) { return t.total; });
    return all.length ? all.reduce(function (s, t) { return s + t.score / t.total; }, 0) / all.length : null;
  }
  function estScore() {
    var ls = levelStats(), dg = data.english.diag, cov = {};
    [1, 2, 3].forEach(function (l) {
      var learned = ls[l].t ? ls[l].k / ls[l].t : 0;
      cov[l] = Math.max(learned, dg ? dg.acc[l] * .85 : 0);
    });
    var vocab = .45 * cov[1] + .35 * cov[2] + .2 * cov[3];
    var acc = recentAcc();
    var anyData = dg || acc != null || W.some(function (x) { var s = data.english.words[x.w]; return s && s.intro; });
    if (!anyData) return null;
    var v = 200 + 790 * (acc == null ? vocab : .7 * vocab + .3 * acc * Math.min(1, .3 + vocab));
    return Math.max(10, Math.min(990, Math.round(v / 5) * 5));
  }
  function weakDomains() {
    var ds = domainStats();
    return Object.keys(ds).filter(function (d) { return d !== 'my'; }).map(function (d) {
      var s = ds[d], att = s.right + s.wrong;
      return { d: d, acc: att >= 5 ? s.right / att : null, mastery: s.t ? s.k / s.t : 0, att: att };
    }).sort(function (a, b) {
      if (a.acc != null && b.acc != null) return a.acc - b.acc;
      if (a.acc != null) return -1; if (b.acc != null) return 1;
      return a.mastery - b.mastery;
    });
  }
  function scoreRing(score, size) {
    var pct = score == null ? 0 : score / 990;
    return '<div class="ring" style="--p:' + (pct * 100) + '%;' + (size ? '--s:' + size + 'px' : '') + '"><div><small>예상</small><b>' + (score == null ? '—' : score) + '</b><small>/ 990</small></div></div>';
  }

  // ---------- 정기고사 ----------
  function firstIntro() { var f = null; Object.keys(data.english.words).forEach(function (w) { var s = data.english.words[w]; if (s.intro && (!f || s.intro < f)) f = s.intro; }); return f; }
  function introducedCount() { var n = 0; Object.keys(data.english.words).forEach(function (w) { if (data.english.words[w].intro && WMAP[w]) n++; }); return n; }
  var EXAMS = { weekly: { name: '주간 정기고사', every: 7, need: 20, n: 30 }, monthly: { name: '월간 실전 모의고사', every: 28, need: 60, n: 50 } };
  function examInfo(type) {
    var E = EXAMS[type], hist = (data.english.exams || []).filter(function (e) { return e.type === type; }), last = hist[hist.length - 1];
    var t = today(), fi = firstIntro(), intro = introducedCount();
    var base = last ? last.date : fi;
    var dueIn = base ? E.every - daysBetween(base, t) : E.every;
    if (!last && fi) dueIn = E.every - 1 - daysBetween(fi, t);
    var locked = intro < E.need;
    return { type: type, name: E.name, last: last, dueIn: Math.max(0, dueIn), due: !locked && dueIn <= 0, locked: locked, need: E.need, intro: intro, doneToday: last && last.date === t };
  }
  function examWords(type) {
    var st = data.english.words, t = today(), E = EXAMS[type];
    var learned = W.filter(function (x) { return st[x.w] && st[x.w].intro; });
    var pick;
    if (type === 'weekly') {
      var recent = learned.filter(function (x) { return daysBetween(st[x.w].intro, t) <= 7; });
      var wrong = learned.filter(function (x) { return st[x.w].wrongNote; });
      pick = shuffle(recent).slice(0, 20).concat(shuffle(wrong).slice(0, 10));
    } else pick = shuffle(learned.filter(function (x) { return st[x.w].wrongNote; })).slice(0, 15);
    var rest = shuffle(learned.filter(function (x) { return pick.indexOf(x) < 0; }));
    pick = pick.concat(rest).slice(0, E.n);
    return pick.map(function (x) { return x.w; });
  }

  // ---------- 화면 라우팅 ----------
  function renderEnglish() {
    var root = $('engRoot');
    var f = { study: renderStudy, quiz: renderQuiz, result: renderResult, book: renderBook, studyDone: renderStudyDone, course: renderCourse, report: renderReport }[eng.screen];
    (f || renderEngHome)(root);
  }
  function renderEngHome(root) {
    var t = today(), p = getPlan(t), st = data.english.words;
    var introduced = introducedCount(), total = W.filter(function (x) { return x.d !== 'my'; }).length;
    var wrongN = W.filter(function (x) { return st[x.w] && st[x.w].wrongNote; }).length;
    var starN = W.filter(function (x) { return data.english.stars[x.w]; }).length;
    var tot = p.fresh.length + p.review.length, learned = p.learned.length, best = bestScore(p);
    var studyDone = tot && learned >= tot, score = estScore();
    var rows = p.fresh.map(function (w) { return [w, 'new']; }).concat(p.review.map(function (w) { return [w, 'rev']; }));
    var exams = ['weekly', 'monthly'].map(examInfo);
    var weak = weakDomains()[0];
    root.innerHTML =
      '<div class="card eng-hero"><div class="eng-top"><div class="eng-day"><small>day</small><b>' + dayNumber(t) + '</b></div>' +
      '<div style="flex:1;min-width:0"><div class="eng-title">토익 단어 루틴</div><div class="whisper">words drift in like clouds</div>' +
      '<div class="muted small">' + introduced + ' / ' + total + '단어 · 오답 ' + wrongN + ' · 북마크 ' + starN + '</div>' +
      '<div class="bar"><i style="width:' + (introduced / Math.max(1, total) * 100) + '%"></i></div>' +
      '<button class="course-pill" data-eng="course">' + ic('sliders') + esc(courseLabel()) + '</button></div>' +
      '<button class="ring-btn" data-eng="report" title="실력 리포트">' + scoreRing(score, 84) + '</button></div>' +
      '<div class="eng-steps">' +
      '<div class="eng-step' + (studyDone ? ' done' : '') + '"><div class="h">I. 단어 외우기 ' + (studyDone ? ic('check') : '') + '</div><div class="v">' + learned + ' / ' + tot + '개</div></div>' +
      '<div class="eng-step' + (best != null ? ' done' : '') + '"><div class="h">II. 오늘 시험 ' + (best != null ? ic('check') : '') + '</div><div class="v">' + (best == null ? '아직 안 봤어요' : '최고 ' + best + '점') + '</div></div>' +
      '</div></div>' +
      // 정기고사
      '<div class="card exam-card"><div class="card-h"><h2>' + ic('calendar') + '정기고사</h2>' +
      (data.english.diag ? '<span class="chip-sm">진단: ' + LV_SHORT[data.english.diag.level] + '</span>' : '<button class="btn tiny pink" data-eng="diag">' + ic('eye') + '실력 진단</button>') + '</div>' +
      exams.map(function (e) {
        var sub = e.locked ? '단어 ' + e.need + '개 학습 후 열려요 (' + e.intro + '/' + e.need + ')'
          : e.doneToday ? '오늘 응시 완료 · ' + Math.round(e.last.score / e.last.total * 100) + '점'
            : e.due ? '지금 응시할 수 있어요 ✦' : 'D-' + e.dueIn + (e.last ? ' · 지난번 ' + Math.round(e.last.score / e.last.total * 100) + '점' : '');
        return '<div class="exam-row' + (e.due ? ' due' : '') + '"><div class="exam-ic">' + ic(e.type === 'weekly' ? 'moon' : 'star') + '</div><div class="q-body"><div class="q-title">' + e.name + ' <span class="muted small">' + EXAMS[e.type].n + '문항 · 혼합</span></div><div class="q-sub">' + sub + '</div></div>' +
          '<button class="btn tiny ' + (e.due ? 'primary' : 'glass') + '" data-eng="exam" data-t="' + e.type + '"' + (e.locked ? ' disabled' : '') + '>' + (e.due ? '응시' : '미리 보기') + '</button></div>';
      }).join('') + '</div>' +
      '<div class="eng-actions">' +
      '<button class="btn sky wide" data-eng="study"' + (tot ? '' : ' disabled') + '>' + ic('cards') + '<span class="txt">오늘 단어 공부하기<span class="sub">새 단어 ' + p.fresh.length + ' · 복습 ' + p.review.length + '</span></span></button>' +
      '<button class="btn pink" data-eng="quiz" data-src="today" data-mode="choice"' + (tot ? '' : ' disabled') + '>' + ic('pen') + '4지선다<span class="sub">뜻 ↔ 단어</span></button>' +
      '<button class="btn lilac" data-eng="quiz" data-src="today" data-mode="blank"' + (tot ? '' : ' disabled') + '>' + ic('notebook') + 'Part 5 빈칸<span class="sub">예문 빈칸 채우기</span></button>' +
      '<button class="btn mint" data-eng="quiz" data-src="today" data-mode="listen"' + (tot ? '' : ' disabled') + '>' + ic('speaker') + '듣기 퀴즈<span class="sub">발음 듣고 뜻 고르기</span></button>' +
      '<button class="btn butter" data-eng="quiz" data-src="today" data-mode="spell"' + (tot ? '' : ' disabled') + '>' + ic('type') + '스펠링<span class="sub">뜻 보고 영어로 쓰기</span></button>' +
      '<button class="btn glass" data-eng="quiz" data-src="wrong" data-mode="mix"' + (wrongN ? '' : ' disabled') + '>' + ic('rewind') + '오답노트<span class="sub">' + (wrongN ? wrongN + '개 다시 도전' : '틀린 단어 없음') + '</span></button>' +
      '<button class="btn glass" data-eng="quiz" data-src="weak" data-mode="mix"' + (weak && (weak.att || introduced) ? '' : ' disabled') + '>' + ic('flame') + '약점 집중<span class="sub">' + (weak ? dName(weak.d) : '-') + '</span></button>' +
      '</div>' +
      '<div class="card"><div class="card-h"><h2>' + ic('sparkle') + '오늘의 단어</h2><button class="btn tiny glass" data-eng="book">' + ic('book') + '단어장</button></div>' +
      (rows.length ? '<ul class="word-list">' + rows.map(function (r) { return wordRow(WMAP[r[0]], r[1], p.learned.indexOf(r[0]) >= 0); }).join('') + '</ul>' : '<p class="muted center">이 코스의 단어를 모두 받았어요 ✧ 코스를 바꾸거나 복습 시험을 봐요.</p>') +
      '<button class="btn small glass block" data-eng="more" style="font-size:14px">' + ic('gift') + '새 단어 +10개 더 받기</button></div>';
  }
  function wordRow(x, tag, ok) {
    if (!x) return '';
    var s = data.english.words[x.w];
    var t = tag === 'new' ? '<span class="tag new">new</span>' : tag === 'rev' ? '<span class="tag rev">복습</span>'
      : s && s.wrongNote ? '<span class="tag wrong">오답 ' + s.wrong + '</span>' : s && s.intro ? '<span class="tag ok">학습함</span>' : '';
    return '<li class="wrow" data-w="' + esc(x.w) + '"><div class="wline"><span class="ww">' + esc(x.w) + '</span>' + lvDots(x.lv) +
      '<span class="wm">' + esc(x.m) + ' <span class="tag">' + POS[x.p] + '</span></span>' + t + (ok ? '<span class="tag ok">✓</span>' : '') + starBtn(x.w) + spkBtn(x.w) + '</div>' +
      '<div class="wex">' + (x.ex ? '<p class="ex-en">' + exHTML(x.ex) + '</p><p class="ex-ko">' + esc(x.exk) + '</p>' : '<p class="muted small">예문이 없어요</p>') +
      '<p class="muted small">' + ic(dIcon(x.d)) + dName(x.d) + ' · ' + (LV_SHORT[x.lv] || '') + (x.d === 'my' ? ' · <button class="link danger" data-eng="delmy" data-w="' + esc(x.w) + '">삭제</button>' : '') + '</p></div></li>';
  }

  // ---------- 코스 설정 ----------
  function renderCourse(root) {
    var c = data.settings.course, st = data.english.words;
    var cnt = {}; W.forEach(function (x) { if (x.d === 'my') return; var k = x.d; cnt[k] = cnt[k] || { t: 0, i: 0 }; cnt[k].t++; if (st[x.w] && st[x.w].intro) cnt[k].i++; });
    var lvOpts = [['auto', '추천', data.english.diag ? '진단 결과 ' + LV_SHORT[data.english.diag.level] + '부터' : '진단 전: 기초부터'], [1, '기초', '~600점'], [2, '중급', '~800점'], [3, '고급', '900점+'], ['all', '섞어서', '전 난이도']];
    root.innerHTML = '<div class="eng-nav"><button class="btn tiny glass icon-only" data-eng="home">' + ic('left') + '</button><h2>' + ic('sliders') + '학습 코스</h2></div>' +
      '<div class="card"><h2>난이도 단계</h2><div class="opt-grid">' + lvOpts.map(function (o) {
        return '<button class="opt' + (String(c.level) === String(o[0]) ? ' on' : '') + '" data-eng="setlv" data-v="' + o[0] + '"><b>' + o[1] + '</b><span>' + o[2] + '</span></button>';
      }).join('') + '</div></div>' +
      '<div class="card"><div class="card-h"><h2>분야</h2><button class="btn tiny glass" data-eng="alldom">전체 선택</button></div><p class="muted small">고른 분야에서만 새 단어가 나와요. 아무것도 안 고르면 전 분야예요.</p><div class="dom-grid">' +
      DOMAIN_KEYS.filter(function (d) { return d !== 'my' && cnt[d]; }).map(function (d) {
        var on = c.domains.indexOf(d) >= 0;
        return '<button class="dom' + (on ? ' on' : '') + '" data-eng="togdom" data-d="' + d + '">' + ic(dIcon(d)) + '<b>' + dName(d) + '</b><span>' + cnt[d].i + ' / ' + cnt[d].t + '</span><i class="mini-bar"><i style="width:' + (cnt[d].i / cnt[d].t * 100) + '%"></i></i></button>';
      }).join('') + '</div></div>' +
      '<button class="btn primary block" data-eng="savecourse">' + ic('check') + '이 코스로 공부하기</button>';
  }
  var courseDraft = null;

  // ---------- 리포트 (산타토익식 분석) ----------
  function renderReport(root) {
    var score = estScore(), ls = levelStats(), ds = domainStats(), weak = weakDomains().slice(0, 3), dg = data.english.diag;
    var exams = (data.english.exams || []).slice(-10);
    root.innerHTML = '<div class="eng-nav"><button class="btn tiny glass icon-only" data-eng="home">' + ic('left') + '</button><h2>' + ic('chart') + '실력 리포트</h2></div>' +
      '<div class="card report-top">' + scoreRing(score, 132) +
      '<div><div class="eng-title">예상 점수 ' + (score == null ? '—' : score + '점') + '</div><p class="muted small">외운 단어 수(난이도별 가중치)와 최근 시험 정답률로 계산한 <b>단어 실력 기준 추정치</b>예요. 실제 토익 점수와는 차이가 있어요.</p>' +
      (dg ? '<p class="small">진단고사 ' + dg.date + ' · 기초 ' + Math.round(dg.acc[1] * 100) + '% · 중급 ' + Math.round(dg.acc[2] * 100) + '% · 고급 ' + Math.round(dg.acc[3] * 100) + '%</p>' : '') +
      '<button class="btn tiny pink" data-eng="diag">' + ic('eye') + (dg ? '다시 진단하기' : '실력 진단고사 (30문항)') + '</button></div></div>' +
      '<div class="card"><h2>' + ic('star') + '난이도별 숙련도</h2>' + [1, 2, 3].map(function (l) {
        var s = ls[l]; return '<div class="lv-row"><span>' + lvDots(l) + ' ' + LEVELS[l] + '</span><div class="bar"><i style="width:' + (s.t ? s.k / s.t * 100 : 0) + '%"></i></div><span class="muted small">' + s.k + ' / ' + s.t + '</span></div>';
      }).join('') + '<p class="muted small">숙련 = 학습 후 1번 이상 맞혔고 오답노트에 없는 단어</p></div>' +
      '<div class="card"><h2>' + ic('flame') + '약점 분야 추천</h2>' + (weak.length ? weak.map(function (w) {
        return '<div class="exam-row"><div class="exam-ic">' + ic(dIcon(w.d)) + '</div><div class="q-body"><div class="q-title">' + dName(w.d) + '</div><div class="q-sub">' + (w.acc == null ? '아직 데이터 부족 · 숙련 ' + Math.round(w.mastery * 100) + '%' : '정답률 ' + Math.round(w.acc * 100) + '% · 숙련 ' + Math.round(w.mastery * 100) + '%') + '</div></div>' +
          '<button class="btn tiny glass" data-eng="quiz" data-src="dom" data-d="' + w.d + '" data-mode="mix">집중 20문제</button></div>';
      }).join('') : '<p class="muted">시험을 몇 번 보면 약점을 찾아드려요</p>') + '</div>' +
      '<div class="card"><h2>' + ic('cloud') + '분야별 진도</h2><div class="dom-list">' + DOMAIN_KEYS.filter(function (d) { return ds[d] && d !== 'my'; }).map(function (d) {
        var s = ds[d], att = s.right + s.wrong;
        return '<div class="lv-row"><span>' + ic(dIcon(d)) + ' ' + dName(d) + '</span><div class="bar"><i style="width:' + (s.k / s.t * 100) + '%"></i></div><span class="muted small">' + s.k + '/' + s.t + (att ? ' · ' + Math.round(s.right / att * 100) + '%' : '') + '</span></div>';
      }).join('') + '</div></div>' +
      '<div class="card"><h2>' + ic('calendar') + '정기고사 기록</h2>' + (exams.length ? '<div class="trend">' + exams.map(function (e) {
        var pc = Math.round(e.score / e.total * 100);
        return '<div class="tcol" title="' + esc(e.date + ' ' + (EXAMS[e.type] ? EXAMS[e.type].name : '진단') + ' ' + pc + '점') + '"><i style="height:' + pc + '%"></i><span>' + e.date.slice(5).replace('-', '/') + '</span></div>';
      }).join('') + '</div><ul class="entries">' + exams.slice().reverse().map(function (e) {
        return '<li><span class="e-ic" style="--c:#d6c2ff">' + ic(e.type === 'monthly' ? 'star' : e.type === 'diag' ? 'eye' : 'moon') + '</span><div class="body"><div class="t">' + (EXAMS[e.type] ? EXAMS[e.type].name : '실력 진단고사') + ' · ' + e.score + '/' + e.total + '</div><div class="note">' + prettyDate(e.date) + (e.est ? ' · 예상 ' + e.est + '점' : '') + '</div></div></li>';
      }).join('') + '</ul>' : '<p class="muted">아직 정기고사 기록이 없어요</p>') + '</div>';
  }

  // ---------- 단어 카드 공부 ----------
  function startStudy() {
    var p = getPlan(today()), all = p.fresh.concat(p.review);
    var left = all.filter(function (w) { return p.learned.indexOf(w) < 0; });
    if (!all.length) return;
    eng.study = { queue: left.length ? left : shuffle(all), total: left.length ? left.length : all.length, done: 0, flipped: false, start: Date.now(), gained: 0, again: {} };
    eng.screen = 'study'; renderEnglish();
  }
  function renderStudy(root) {
    var s = eng.study, w = s.queue[0], x = WMAP[w];
    if (!x) { eng.screen = 'home'; return renderEnglish(); }
    var p = getPlan(today()), isNew = p.fresh.indexOf(w) >= 0;
    root.innerHTML =
      '<div class="eng-nav"><button class="btn tiny glass icon-only" data-eng="home" title="나가기">' + ic('x') + '</button>' +
      '<div class="prog"><div class="bar"><i style="width:' + (s.done / s.total * 100) + '%"></i></div></div><span class="cnt">' + s.done + ' / ' + s.total + '</span></div>' +
      '<div class="flash-wrap"><div class="flash in' + (s.flipped ? ' flip' : '') + '" id="flash" data-eng="flip">' +
      '<div class="face front"><span class="corner">' + (isNew ? '<span class="tag new">new</span>' : '<span class="tag rev">복습</span>') + (s.again[w] ? ' <span class="tag wrong">다시</span>' : '') + ' ' + lvDots(x.lv) + '</span>' +
      '<div class="corner-r">' + starBtn(x.w) + spkBtn(x.w) + '</div>' +
      '<div class="word">' + esc(x.w) + '</div><span class="tag">' + POS[x.p] + ' · ' + dName(x.d) + '</span><div class="hint">tap to remember ✧</div></div>' +
      '<div class="face back"><div class="corner-r">' + starBtn(x.w) + spkBtn(x.w) + '</div><div class="sub-en">' + esc(x.w) + '</div><div class="mean">' + esc(x.m) + '</div>' +
      (x.ex ? '<div class="ex-box"><p class="ex-en">' + exHTML(x.ex) + '</p><p class="ex-ko">' + esc(x.exk) + '</p></div>' : '') + '</div>' +
      '</div></div>' +
      '<div class="study-btns"><button class="btn butter" data-eng="again">' + ic('rewind') + '다시 볼래요</button><button class="btn primary" data-eng="know">' + ic('check') + '외웠어요</button></div>' +
      '<div class="kbd-hint">Space 뒤집기 · ← 다시 · → 외웠어요</div>';
    if (data.settings.autoSpeak && !s.flipped && !s.spoken) { s.spoken = true; speak(x.w); }
  }
  function studyAnswer(know, ev) {
    var s = eng.study, w = s.queue.shift(), p = getPlan(today());
    if (know) {
      s.done++;
      if (p.learned.indexOf(w) < 0) p.learned.push(w);
      var st = wstate(w);
      if (!st.intro) { st.intro = today(); s.gained += 2; }
      sfx('ok');
    } else { s.queue.push(w); s.again[w] = true; sfx('flip'); }
    s.flipped = false; s.spoken = false; save();
    if (!s.queue.length) {
      if (s.gained) addXP(s.gained, ev);
      autoLog(s.start, '토익 단어 공부 Day ' + dayNumber(today()) + ' (' + s.total + '개)');
      save(); sfx('done'); confetti(50);
      eng.screen = 'studyDone';
    }
    renderEnglish(); renderHud();
  }
  function renderStudyDone(root) {
    var s = eng.study;
    root.innerHTML = '<div class="card result">' + ic('sparkle', 'big-ic') + '<p class="whisper">every word is a small star</p><h2 style="font-size:22px">오늘 단어 공부 완료</h2>' +
      '<p class="muted">' + s.total + '개 단어를 모두 기억했어요' + (s.gained ? ' · +' + s.gained + ' xp' : '') + '</p>' +
      '<p>이제 시험으로 확실히 내 것으로 만들어 볼까요?</p>' +
      '<div class="row" style="justify-content:center"><button class="btn pink" data-eng="quiz" data-src="today" data-mode="choice">' + ic('pen') + '4지선다</button>' +
      '<button class="btn lilac" data-eng="quiz" data-src="today" data-mode="blank">' + ic('notebook') + 'Part 5 빈칸</button>' +
      '<button class="btn mint" data-eng="quiz" data-src="today" data-mode="mix">' + ic('dice') + '혼합</button></div>' +
      '<button class="btn glass block" data-eng="home" style="font-size:14px">영어 홈으로</button></div>';
  }

  // ---------- 시험 ----------
  var SRC_NAME = { today: '오늘 단어', wrong: '오답노트', random: '누적 랜덤', retry: '틀린 문제 재도전', weak: '약점 집중', dom: '분야 집중', star: '북마크', list: '단어장', weekly: '주간 정기고사', monthly: '월간 모의고사', diag: '실력 진단고사' };
  var MODE_NAME = { choice: '4지선다', spell: '스펠링', blank: 'Part 5 빈칸', listen: '듣기', mix: '혼합' };
  function pickMode(mode, x) {
    if (mode === 'mix') { var r = Math.random(); mode = r < .35 ? 'choice' : r < .65 ? 'blank' : r < .85 ? 'listen' : 'spell'; }
    if (mode === 'blank' && !x.ex) mode = 'choice';
    if (mode === 'listen' && !window.speechSynthesis) mode = 'choice';
    return mode;
  }
  function startQuiz(src, mode, words, opt) {
    opt = opt || {};
    var p = getPlan(today()), st = data.english.words, list;
    if (words) list = words;
    else if (src === 'today') list = p.fresh.concat(p.review);
    else if (src === 'wrong') list = W.filter(function (x) { return st[x.w] && st[x.w].wrongNote; }).map(function (x) { return x.w; }).slice(0, 30);
    else if (src === 'star') list = W.filter(function (x) { return data.english.stars[x.w]; }).map(function (x) { return x.w; });
    else if (src === 'weak' || src === 'dom') {
      var d = opt.d || (weakDomains()[0] || {}).d;
      var inD = W.filter(function (x) { return x.d === d; });
      var a = inD.filter(function (x) { return st[x.w] && st[x.w].wrongNote; }), b = inD.filter(function (x) { return st[x.w] && st[x.w].intro && !st[x.w].wrongNote; }), c = inD.filter(function (x) { return !(st[x.w] && st[x.w].intro); });
      list = shuffle(a).concat(shuffle(b), c.slice(0, 20)).slice(0, 20).map(function (x) { return x.w; });
      opt.title = dName(d) + ' 집중';
    } else if (src === 'weekly' || src === 'monthly') list = examWords(src);
    else if (src === 'diag') {
      list = [];
      [1, 2, 3].forEach(function (l) { list = list.concat(shuffle(W.filter(function (x) { return x.lv === l && x.d !== 'my'; })).slice(0, 10).map(function (x) { return x.w; })); });
    } else list = shuffle(W.filter(function (x) { return st[x.w] && st[x.w].intro; }).map(function (x) { return x.w; })).slice(0, 20);
    list = shuffle(list.filter(function (w) { return WMAP[w]; }));
    if (opt.n) list = list.slice(0, opt.n);
    if (!list.length) { toast('시험 볼 단어가 없어요'); return; }
    eng.quiz = {
      src: src, mode: mode, title: opt.title || SRC_NAME[src], i: 0, correct: 0, wrongs: [], start: Date.now(), answered: false, noRecord: src === 'diag', byLv: { 1: [0, 0], 2: [0, 0], 3: [0, 0] },
      items: list.map(function (w) {
        var x = WMAP[w], m = src === 'diag' ? 'choice' : pickMode(mode, x);
        return { x: x, mode: m, dir: m === 'choice' ? (src === 'diag' || Math.random() < .7 ? 'en' : 'ko') : 'en', choices: m === 'spell' ? null : makeChoices(x) };
      })
    };
    eng.screen = 'quiz'; renderEnglish();
  }
  function renderQuiz(root) {
    var q = eng.quiz, it = q.items[q.i], x = it.x, n = q.items.length, m = it.mode;
    var head = '<div class="eng-nav"><button class="btn tiny glass icon-only" data-eng="home" title="나가기">' + ic('x') + '</button>' +
      '<div class="prog"><div class="bar"><i style="width:' + (q.i / n * 100) + '%"></i></div></div><span class="cnt">' + (q.i + 1) + ' / ' + n + '</span></div>';
    var label = '<div class="q-label">' + esc(q.title) + ' · ' + MODE_NAME[m] + ' ' + lvDots(x.lv) + '</div>';
    var body;
    if (m === 'spell') {
      var hint = x.w.charAt(0) + ' ' + x.w.slice(1).replace(/[^ ]/g, '_ ').trim();
      body = '<div class="q-card">' + label + '<div class="q-main ko">' + esc(x.m) + '</div><span class="tag">' + POS[x.p] + '</span>' +
        '<div class="spell-hint">' + esc(hint) + '</div><div class="muted small">' + x.w.length + '글자</div></div>' +
        '<form class="spell-form" id="spellForm" autocomplete="off"><input class="field spell-in" id="spellIn" placeholder="type here…" autocapitalize="off" spellcheck="false">' +
        '<div class="study-btns"><button type="button" class="btn glass" data-eng="giveup">모르겠어요</button><button type="submit" class="btn primary">' + ic('check') + '확인</button></div></form>';
    } else {
      var showEn = m === 'blank' || (m === 'choice' && it.dir === 'ko');
      var prompt = m === 'blank' ? '<div class="q-sent">' + exBlank(x.ex) + '</div><div class="muted small">빈칸에 알맞은 단어(기본형)를 고르세요</div>'
        : m === 'listen' ? '<button class="listen-btn" data-eng="speak" data-w="' + esc(x.w) + '">' + ic('speaker') + '</button><div class="muted small">발음을 듣고 뜻을 고르세요 · 다시 들으려면 눌러요</div>'
          : it.dir === 'en' ? spkBtn(x.w) + '<div class="q-main">' + esc(x.w) + '</div><span class="tag">' + POS[x.p] + '</span>'
            : '<div class="q-main ko">' + esc(x.m) + '</div><span class="tag">' + POS[x.p] + '</span>';
      body = '<div class="q-card">' + label + prompt + '</div>' +
        '<div class="choices">' + it.choices.map(function (c, i) {
          return '<button class="choice' + (showEn ? ' en' : '') + '" data-eng="ans" data-i="' + i + '"><span class="n">' + (i + 1) + '</span><span>' + esc(showEn ? c.w : c.m) + '</span></button>';
        }).join('') + '</div><div class="kbd-hint">숫자키 1~4로 선택</div>';
    }
    root.innerHTML = head + body + '<div class="feedback" id="fb"></div><div id="nextWrap"></div>';
    if (m === 'listen') setTimeout(function () { speak(x.w); }, 250);
    if (m === 'spell') {
      var inp = $('spellIn'); setTimeout(function () { inp.focus(); }, 30);
      $('spellForm').onsubmit = function (ev) {
        ev.preventDefault();
        if (q.answered) { nextQuestion(); return; }
        var v = inp.value.trim().toLowerCase(); if (!v) return;
        answer(v === x.w.toLowerCase(), ev);
      };
    }
  }
  function recordAnswer(w, ok) {
    var st = wstate(w);
    if (!st.intro) st.intro = today();
    if (ok) { st.right++; if (st.wrongNote) { st.fix = (st.fix || 0) + 1; if (st.fix >= 2) { st.wrongNote = false; st.fix = 0; } } }
    else { st.wrong++; st.wrongNote = true; st.fix = 0; }
  }
  function answer(ok, ev, choiceIdx) {
    var q = eng.quiz, it = q.items[q.i], x = it.x;
    if (q.answered) return;
    q.answered = true;
    if (!q.noRecord) recordAnswer(x.w, ok);
    if (q.byLv[x.lv]) { q.byLv[x.lv][1]++; if (ok) q.byLv[x.lv][0]++; }
    if (ok) q.correct++; else q.wrongs.push(x.w);
    save();
    var fb = $('fb');
    if (it.mode !== 'spell') {
      document.querySelectorAll('.choice').forEach(function (b, i) {
        b.disabled = true;
        if (it.choices[i].w === x.w) b.classList.add('right');
        else if (i === choiceIdx) b.classList.add('wrong');
      });
    } else { var inp = $('spellIn'); inp.classList.add(ok ? 'right' : 'wrong'); inp.readOnly = true; }
    var exLine = x.ex ? '<div class="ex-box small-ex"><p class="ex-en">' + exHTML(x.ex) + '</p><p class="ex-ko">' + esc(x.exk) + '</p></div>' : '';
    if (ok) {
      sfx('ok'); fb.className = 'feedback ok'; fb.innerHTML = ['정답 ✧', '완벽해요 ✦', '맞았어요 ⋆', '기억하고 있었네요 ✧'][Math.floor(Math.random() * 4)];
      if (it.mode === 'blank' || it.mode === 'listen') { fb.innerHTML += ' <span class="en">' + esc(x.w) + '</span> — ' + esc(x.m) + exLine; $('nextWrap').innerHTML = '<button class="btn sky block" data-eng="next" id="nextBtn">다음 문제 ' + ic('right') + '</button>'; }
      else setTimeout(function () { if (eng.screen === 'quiz' && eng.quiz === q && q.answered) nextQuestion(); }, 800);
    } else {
      sfx('no'); fb.className = 'feedback no';
      fb.innerHTML = '아쉬워요. 정답은 <span class="en">' + esc(x.w) + '</span> — ' + esc(x.m) + exLine;
      $('nextWrap').innerHTML = '<button class="btn sky block" data-eng="next" id="nextBtn">다음 문제 ' + ic('right') + '</button>';
      if (it.mode !== 'listen') speak(x.w);
    }
  }
  function nextQuestion() {
    var q = eng.quiz; q.i++; q.answered = false;
    if (q.i >= q.items.length) return finishQuiz();
    renderEnglish();
  }
  function finishQuiz() {
    var q = eng.quiz, total = q.items.length, pct = Math.round(q.correct / total * 100);
    var gained = q.correct * 2 + (pct === 100 && total >= 5 ? 10 : 0) + (q.src === 'weekly' ? 20 : q.src === 'monthly' ? 40 : 0);
    q.gained = gained; q.pct = pct;
    if (q.src === 'diag') {
      var acc = {}; [1, 2, 3].forEach(function (l) { var b = q.byLv[l]; acc[l] = b[1] ? b[0] / b[1] : 0; });
      var level = acc[1] < .7 ? 1 : acc[2] < .7 ? 2 : 3;
      data.english.diag = { date: today(), acc: acc, level: level };
      q.diag = data.english.diag;
    }
    if (q.src === 'weekly' || q.src === 'monthly' || q.src === 'diag') {
      data.english.exams.push({ type: q.src, date: today(), score: q.correct, total: total, est: estScore() });
    } else {
      getPlan(today()).tests.push({ source: q.src, mode: q.mode, score: q.correct, total: total, at: Date.now() });
    }
    addXP(gained);
    autoLog(q.start, '토익 ' + q.title + ' (' + MODE_NAME[q.mode] + ') · ' + q.correct + '/' + total);
    save();
    sfx('done'); if (pct >= 70) confetti(pct === 100 ? 90 : 45);
    eng.screen = 'result'; renderEnglish(); renderHud();
  }
  function renderResult(root) {
    var q = eng.quiz, total = q.items.length, pct = q.pct;
    var stars = pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= 40 ? 1 : 0;
    var msg = pct === 100 ? '만점. 꿈처럼 완벽해요' : pct >= 90 ? '거의 다 맞췄어요' : pct >= 70 ? '잘했어요, 조금만 더' : pct >= 40 ? '좋은 시작이에요. 틀린 것만 다시 해봐요' : '괜찮아요. 카드로 한 번 더 보고 와요';
    var extra = '';
    if (q.diag) {
      extra = '<div class="card" style="margin:14px 0 0;text-align:left"><h2>' + ic('eye') + '진단 결과</h2>' + [1, 2, 3].map(function (l) {
        return '<div class="lv-row"><span>' + lvDots(l) + ' ' + LV_SHORT[l] + '</span><div class="bar"><i style="width:' + (q.diag.acc[l] * 100) + '%"></i></div><span class="muted small">' + Math.round(q.diag.acc[l] * 100) + '%</span></div>';
      }).join('') + '<p>추천 시작 단계: <b>' + LEVELS[q.diag.level] + '</b><br><span class="muted small">학습 코스가 "추천"이면 이 단계부터 새 단어가 나와요.</span></p></div>';
    }
    var est = estScore();
    root.innerHTML = '<div class="card result"><p class="whisper">' + esc(q.title) + '</p>' +
      '<div class="stars">' + [0, 1, 2].map(function (i) { return ic('sparkle', i < stars ? 'on' : 'off'); }).join('') + '</div>' +
      '<div class="score">' + q.correct + '<small> / ' + total + '</small></div>' +
      '<h2>' + msg + '</h2><p class="muted">' + pct + '점 · +' + q.gained + ' xp' + (est ? ' · 예상 점수 ' + est + '점' : '') + '</p>' + extra +
      (q.wrongs.length ? '<div class="card" style="text-align:left;margin:14px 0 0"><h2>' + ic('rewind') + '틀린 단어' + (q.noRecord ? '' : ' · 오답노트에 저장됨') + '</h2><ul class="word-list">' +
        q.wrongs.map(function (w) { return wordRow(WMAP[w]); }).join('') + '</ul></div>' : '') +
      '<div class="row" style="justify-content:center;margin-top:14px">' +
      (q.wrongs.length ? '<button class="btn butter" data-eng="retry">' + ic('rewind') + '틀린 것만 다시</button>' : '') +
      '<button class="btn sky" data-eng="report">' + ic('chart') + '실력 리포트</button></div>' +
      '<button class="btn glass block" data-eng="home" style="font-size:14px">영어 홈으로</button></div>';
  }

  // ---------- 단어장 ----------
  var book = { f: 'all', d: '', lv: '', q: '', limit: 60, adding: false };
  function bookList() {
    var st = data.english.words, p = getPlan(today()), todayW = p.fresh.concat(p.review);
    return W.filter(function (x) {
      var s = st[x.w];
      if (book.f === 'today' && todayW.indexOf(x.w) < 0) return false;
      if (book.f === 'learned' && !(s && s.intro)) return false;
      if (book.f === 'wrong' && !(s && s.wrongNote)) return false;
      if (book.f === 'unseen' && s && s.intro) return false;
      if (book.f === 'star' && !data.english.stars[x.w]) return false;
      if (book.f === 'my' && x.d !== 'my') return false;
      if (book.d && x.d !== book.d) return false;
      if (book.lv && String(x.lv) !== book.lv) return false;
      if (book.q && (x.w + ' ' + x.m).toLowerCase().indexOf(book.q) < 0) return false;
      return true;
    });
  }
  function renderBook(root) {
    var F = { all: '전체', today: '오늘', star: '★ 북마크', my: '내 단어', learned: '학습함', wrong: '오답', unseen: '미학습' };
    var list = bookList();
    root.innerHTML = '<div class="eng-nav"><button class="btn tiny glass icon-only" data-eng="home">' + ic('left') + '</button><h2>' + ic('book') + '단어장</h2><span class="cnt">' + list.length + '</span></div>' +
      '<div class="card"><div class="seg">' + Object.keys(F).map(function (k) { return '<button data-eng="bf" data-f="' + k + '" class="' + (k === book.f ? 'on' : '') + '">' + F[k] + '</button>'; }).join('') + '</div>' +
      '<div class="filters"><select class="field" id="bookDom"><option value="">✧ 전 분야</option>' + DOMAIN_KEYS.map(function (d) { return '<option value="' + d + '"' + (book.d === d ? ' selected' : '') + '>' + dName(d) + '</option>'; }).join('') + '</select>' +
      '<select class="field" id="bookLv"><option value="">전 난이도</option>' + [1, 2, 3].map(function (l) { return '<option value="' + l + '"' + (book.lv === String(l) ? ' selected' : '') + '>' + LEVELS[l] + '</option>'; }).join('') + '</select>' +
      '<input type="search" id="bookSearch" class="field" placeholder="단어나 뜻 검색" value="' + esc(book.q) + '"></div>' +
      '<div class="row" style="margin:4px 0 8px"><button class="btn tiny glass" data-eng="addmy">' + ic('pen') + '내 단어 추가</button>' +
      '<button class="btn tiny pink" data-eng="booktest"' + (list.length ? '' : ' disabled') + '>' + ic('dice') + '이 목록으로 시험 (20문제)</button>' +
      '<span class="muted small">단어를 누르면 예문이 보여요</span></div>' +
      (book.adding ? '<form class="my-form" id="myForm"><input class="field" id="myW" placeholder="영어 단어" required><select class="field" id="myP">' + Object.keys(POS).map(function (k) { return '<option value="' + k + '">' + POS[k] + '</option>'; }).join('') + '</select>' +
        '<input class="field" id="myM" placeholder="뜻 (예: 제출하다, 내다)" required><input class="field wide" id="myEx" placeholder="예문 (선택) — 단어를 *별표*로 감싸면 빈칸 문제로도 나와요"><input class="field wide" id="myExk" placeholder="예문 해석 (선택)">' +
        '<button class="btn small primary" type="submit">' + ic('check') + '저장</button></form>' : '') +
      '<ul class="word-list" id="bookUl">' + (list.length ? list.slice(0, book.limit).map(function (x) { return wordRow(x); }).join('') : '<li class="empty">해당하는 단어가 없어요</li>') + '</ul>' +
      (list.length > book.limit ? '<button class="btn small glass block" data-eng="bookmore">더 보기 (' + (list.length - book.limit) + '개 남음)</button>' : '') + '</div>';
    $('bookDom').onchange = function () { book.d = this.value; book.limit = 60; renderBook(root); };
    $('bookLv').onchange = function () { book.lv = this.value; book.limit = 60; renderBook(root); };
    var bs = $('bookSearch');
    bs.oninput = function () { book.q = bs.value.trim().toLowerCase(); book.limit = 60; renderBook(root); var n = $('bookSearch'); n.focus(); n.setSelectionRange(n.value.length, n.value.length); };
    if ($('myForm')) $('myForm').onsubmit = function (ev) {
      ev.preventDefault();
      var w = $('myW').value.trim(), m = $('myM').value.trim(); if (!w || !m) return;
      if (WMAP[w] && WMAP[w].d !== 'my') { toast('이미 단어장에 있는 단어예요 — 북마크해 둘게요'); data.english.stars[w] = 1; save(); return renderBook(root); }
      var ex = $('myEx').value.trim();
      if (ex && ex.indexOf('*') < 0) { var re = new RegExp('\\b(' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\w*)', 'i'); ex = re.test(ex) ? ex.replace(re, '*$1*') : ex; }
      data.english.custom = (data.english.custom || []).filter(function (c) { return c.w !== w; });
      data.english.custom.push({ w: w, p: $('myP').value, m: m, ex: ex.indexOf('*') >= 0 ? ex : '', exk: $('myExk').value.trim() });
      save(); syncCustomWords(); sfx('save'); toast('✦ 내 단어에 "' + w + '" 추가'); book.adding = false; book.f = 'my'; renderBook(root);
    };
  }

  // ---------- 영어 이벤트 ----------
  $('engRoot').addEventListener('click', function (ev) {
    var b = ev.target.closest('[data-eng]');
    if (!b) { var row = ev.target.closest('.wrow'); if (row) row.classList.toggle('open'); return; }
    if (b.disabled) return;
    var a = b.dataset.eng, c = data.settings.course;
    if (a === 'speak') { ev.stopPropagation(); speak(b.dataset.w); return; }
    if (a === 'star') { ev.stopPropagation(); var w0 = b.dataset.w; if (data.english.stars[w0]) delete data.english.stars[w0]; else data.english.stars[w0] = 1; save(); sfx('pop'); b.classList.toggle('on', !!data.english.stars[w0]); return; }
    if (a === 'flip') { eng.study.flipped = !eng.study.flipped; $('flash').classList.remove('in'); $('flash').classList.toggle('flip', eng.study.flipped); sfx('flip'); return; }
    if (a === 'know') return studyAnswer(true, ev);
    if (a === 'again') return studyAnswer(false, ev);
    if (a === 'study') return startStudy();
    if (a === 'quiz') return startQuiz(b.dataset.src, b.dataset.mode, null, { d: b.dataset.d });
    if (a === 'exam') return startQuiz(b.dataset.t, 'mix');
    if (a === 'diag') return startQuiz('diag', 'choice');
    if (a === 'ans') { var q = eng.quiz, i = +b.dataset.i; return answer(q.items[q.i].choices[i].w === q.items[q.i].x.w, ev, i); }
    if (a === 'giveup') return answer(false, ev);
    if (a === 'next') return nextQuestion();
    if (a === 'retry') { var qq = eng.quiz; return startQuiz('retry', qq.mode === 'mix' ? 'mix' : qq.mode, qq.wrongs.slice()); }
    if (a === 'more') return moreWords();
    if (a === 'book') { eng.screen = 'book'; return renderEnglish(); }
    if (a === 'bf') { book.f = b.dataset.f; book.limit = 60; return renderEnglish(); }
    if (a === 'bookmore') { book.limit += 100; return renderEnglish(); }
    if (a === 'addmy') { book.adding = !book.adding; return renderEnglish(); }
    if (a === 'booktest') return startQuiz('list', 'mix', shuffle(bookList().map(function (x) { return x.w; })).slice(0, 20));
    if (a === 'delmy') { var dw = b.dataset.w; data.english.custom = (data.english.custom || []).filter(function (x) { return x.w !== dw; }); delete WMAP[dw]; save(); syncCustomWords(); toast('내 단어에서 지웠어요'); return renderEnglish(); }
    if (a === 'course') { courseDraft = JSON.parse(JSON.stringify(c)); eng.screen = 'course'; return renderEnglish(); }
    if (a === 'setlv') { c.level = isNaN(+b.dataset.v) ? b.dataset.v : +b.dataset.v; sfx('pop'); return renderEnglish(); }
    if (a === 'togdom') { var d = b.dataset.d, k = c.domains.indexOf(d); if (k >= 0) c.domains.splice(k, 1); else c.domains.push(d); sfx('pop'); return renderEnglish(); }
    if (a === 'alldom') { c.domains = []; return renderEnglish(); }
    if (a === 'savecourse') {
      var p = getPlan(today());
      if (!p.learned.length && !p.tests.length) { delete data.english.plans[today()]; getPlan(today()); toast('✧ 코스를 바꾸고 오늘 단어를 새로 받았어요'); }
      else toast('✧ 코스 저장 — "새 단어 +10개"와 내일 단어부터 적용돼요');
      courseDraft = null; save(); eng.screen = 'home'; return render();
    }
    if (a === 'report') { eng.screen = 'report'; window.scrollTo(0, 0); return renderEnglish(); }
    if (a === 'home') {
      if (eng.screen === 'course' && courseDraft) { data.settings.course = courseDraft; courseDraft = null; }
      eng.screen = 'home'; sfx('pop'); render();
    }
  });
  document.addEventListener('keydown', function (ev) {
    if (currentView !== 'english' || document.querySelector('dialog[open]')) return;
    if (eng.screen === 'study') {
      if (ev.key === ' ' || ev.key === 'Enter') { ev.preventDefault(); $('flash').click(); }
      else if (ev.key === 'ArrowRight') studyAnswer(true);
      else if (ev.key === 'ArrowLeft') studyAnswer(false);
    } else if (eng.screen === 'quiz' && eng.quiz.items[eng.quiz.i] && eng.quiz.items[eng.quiz.i].mode !== 'spell') {
      var n = parseInt(ev.key, 10);
      if (n >= 1 && n <= 4 && !eng.quiz.answered) { var b = document.querySelectorAll('.choice')[n - 1]; if (b) b.click(); }
      else if ((ev.key === 'Enter' || ev.key === ' ') && eng.quiz.answered && $('nextBtn')) { ev.preventDefault(); nextQuestion(); }
    }
  });

  // ================= 기록 목록 =================
  function renderLog() {
    fillCatSelect($('logCat'), true);
    var lp = $('logPart'), lpv = lp.value; lp.hidden = !hasParts();
    lp.innerHTML = '<option value="">전체 부위</option>' + PARTS.map(function (p) { return '<option value="' + p[0] + '"' + (p[0] === lpv ? ' selected' : '') + '>' + p[1] + '</option>'; }).join('');
    var c = $('logCat').value, mon = $('logMonth').value, q = $('logSearch').value.trim().toLowerCase();
    var list = sortEntries(data.entries.filter(function (e) {
      return (!c || e.categoryId === c) && (!lpv || (e.parts || []).indexOf(lpv) >= 0) && (!mon || e.date.slice(0, 7) === mon) && (!q || (e.note || '').toLowerCase().indexOf(q) >= 0);
    }));
    var total = list.reduce(function (s, e) { return s + e.minutes; }, 0);
    $('logSummary').textContent = list.length + '개 기록 · 총 ' + fmtMin(total);
    var html = '', last = null;
    list.forEach(function (e) {
      if (e.date !== last) { html += '<li class="date-head">' + prettyDate(e.date) + '</li>'; last = e.date; }
      html += entryLi(e);
    });
    $('logList').innerHTML = html || '<li class="empty">아직 남겨진 기록이 없어요</li>';
  }
  ['logCat', 'logPart', 'logMonth', 'logSearch'].forEach(function (id) { $(id).addEventListener('input', renderLog); });

  // ================= 달력 =================
  var calMonth = (function () { var d = new Date(); return new Date(d.getFullYear(), d.getMonth(), 1); })();
  var calSel = null;
  function renderCalendar() {
    fillCatSelect($('calCat'), true);
    var cid = $('calCat').value, agg = aggregate();
    var days = cid ? (agg[cid] || {}) : allDays();
    var color = cid ? catColor(cid) : '#c7a8ff';
    var metDay = function (k) {
      if (cid) { var c = cat(cid); return c && c.dailyGoalMin && (days[k] || 0) >= c.dailyGoalMin; }
      return data.categories.some(function (c) { return c.dailyGoalMin && ((agg[c.id] || {})[k] || 0) >= c.dailyGoalMin; });
    };
    var y = calMonth.getFullYear(), m = calMonth.getMonth();
    $('calTitle').textContent = y + '년 ' + (m + 1) + '월';
    var first = new Date(y, m, 1).getDay(), n = new Date(y, m + 1, 0).getDate(), t = today(), max = 1, i;
    for (i = 1; i <= n; i++) max = Math.max(max, days[ymd(new Date(y, m, i))] || 0);
    var html = '';
    for (i = 0; i < first; i++) html += '<div class="cal-cell blank"></div>';
    for (i = 1; i <= n; i++) {
      var k = ymd(new Date(y, m, i)), v = days[k] || 0, r = v / max;
      var bg = v ? 'radial-gradient(circle at 35% 30%, rgba(255,255,255,.85), transparent 50%), ' + hexToRgba(color, 0.35 + 0.65 * r) : '';
      html += '<div class="cal-cell' + (k === t ? ' today' : '') + (k === calSel ? ' sel' : '') + '" data-d="' + k + '" style="' + (bg ? 'background:' + bg + ';' + (k === t || k === calSel ? '' : 'box-shadow:0 0 ' + Math.round(6 + r * 14) + 'px ' + hexToRgba(color, .7) + ';') : '') + '">' +
        (metDay(k) ? '<span class="ok">✦</span>' : '') + '<span>' + i + '</span>' + (v ? '<span class="m">' + (v >= 60 ? (v / 60).toFixed(1).replace('.0', '') + 'h' : v + 'm') + '</span>' : '') + '</div>';
    }
    $('calGrid').innerHTML = html;
    if (calSel) {
      var list = sortEntries(data.entries.filter(function (e) { return e.date === calSel && (!cid || e.categoryId === cid); }));
      $('calDay').innerHTML = '<h2>' + ic('moon') + prettyDate(calSel) + '</h2><ul class="entries">' + (list.length ? list.map(entryLi).join('') : '<li class="empty">이 날은 조용했어요</li>') + '</ul>';
    } else $('calDay').innerHTML = '';
  }
  $('calGrid').addEventListener('click', function (ev) {
    var c = ev.target.closest('.cal-cell[data-d]'); if (!c) return;
    calSel = calSel === c.dataset.d ? null : c.dataset.d; sfx('pop'); renderCalendar();
  });
  $('calPrev').addEventListener('click', function () { calMonth.setMonth(calMonth.getMonth() - 1); calSel = null; renderCalendar(); });
  $('calNext').addEventListener('click', function () { calMonth.setMonth(calMonth.getMonth() + 1); calSel = null; renderCalendar(); });
  $('calCat').addEventListener('input', renderCalendar);

  // ================= 통계 =================
  function renderStats() {
    var range = parseInt($('statRange').value, 10), t = today(), start = addDays(t, -(range - 1));
    var agg = aggregate(), cats = data.categories, keys = [], i;
    for (i = 0; i < range; i++) keys.push(addDays(start, i));
    var totalAll = 0;
    var cards = cats.map(function (c) {
      var days = agg[c.id] || {}, tot = 0, active = 0, met = 0;
      keys.forEach(function (k) { var v = days[k] || 0; tot += v; if (v) active++; if (c.dailyGoalMin && v >= c.dailyGoalMin) met++; });
      totalAll += tot;
      var s = streaks(days);
      return '<div class="stat" style="--c:' + esc(c.color) + '"><div class="name">' + ic(c.icon) + esc(c.name) + '</div><div class="big">' + fmtMin(tot) + '</div>' +
        '<div class="s">한 날 <b>' + active + '</b>/' + range + '일 · 하루 평균 ' + fmtMin(tot / range) + '</div>' +
        (c.dailyGoalMin ? '<div class="s">✦ 목표 달성 <b>' + met + '</b>일 (' + Math.round(met / range * 100) + '%)</div>' : '') +
        '<div class="s">연속 <b>' + s.current + '</b>일 · 최고 <b>' + s.best + '</b>일</div></div>';
    });
    var xp = totalXP(), li = levelInfo(xp);
    $('statSummary').innerHTML = '<div class="stat" style="--c:#fff1b5"><div class="name">' + ic('sparkle') + '전체</div><div class="big">' + fmtMin(totalAll) + '</div><div class="s">최근 ' + range + '일 합계</div><div class="s">Lv.<b>' + li.level + '</b> ' + titleOf(li.level) + ' · 누적 <b>' + xp + '</b> xp</div></div>' + cards.join('');
    var totals = keys.map(function (k) { return cats.reduce(function (s, c) { return s + ((agg[c.id] || {})[k] || 0); }, 0); });
    var max = Math.max.apply(null, totals.concat([1]));
    $('statChart').innerHTML = keys.map(function (k, idx) {
      return '<div class="col" title="' + prettyDate(k) + ' · ' + fmtMin(totals[idx]) + '">' + cats.map(function (c) {
        var v = (agg[c.id] || {})[k] || 0;
        return v ? '<span style="height:' + (v / max * 100) + '%;background:' + esc(c.color) + ';box-shadow:0 0 10px ' + esc(hexToRgba(c.color, .8)) + '"></span>' : '';
      }).join('') + '</div>';
    }).join('');
    var every = range <= 7 ? 1 : range <= 30 ? 5 : 15;
    $('statX').innerHTML = keys.map(function (k, idx) { var d = parseYmd(k); return '<span>' + ((idx % every === 0 || idx === range - 1) ? (d.getMonth() + 1) + '/' + d.getDate() : '') + '</span>'; }).join('');
    $('statLegend').innerHTML = cats.map(function (c) { return '<span><i style="background:' + esc(c.color) + '"></i>' + esc(c.name) + '</span>'; }).join('');
    $('partCard').hidden = !hasParts();
    if (hasParts()) {
      var pm = {}, pc = {}, last = partLast(), pmax = 1;
      data.entries.forEach(function (e) { if (!e.parts || !e.parts.length || e.date < start) return; e.parts.forEach(function (p) { pm[p] = (pm[p] || 0) + e.minutes / e.parts.length; pc[p] = (pc[p] || 0) + 1; }); });
      PARTS.forEach(function (p) { pmax = Math.max(pmax, pm[p[0]] || 0); });
      var rp = recommendPart();
      $('statParts').innerHTML = PARTS.map(function (p) {
        var k = p[0], d = last[k] ? daysBetween(last[k], t) : null;
        return '<div class="lv-row"><span><b>' + p[1] + '</b></span><div class="bar"><i style="width:' + ((pm[k] || 0) / pmax * 100) + '%"></i></div><span class="muted small">' + fmtMin(pm[k] || 0) + ' · ' + (pc[k] || 0) + '회 · ' + (d == null ? '기록 없음' : d === 0 ? '오늘' : d + '일 전') + '</span></div>';
      }).join('') + (rp.part ? '<p class="small">✧ 다음 추천 부위: <b>' + PNAME[rp.part] + '</b> (' + (rp.days >= 999 ? '아직 안 함' : rp.days + '일 쉼') + ')</p>' : '');
    }
    var ls = levelStats(), sc = estScore(), wrongN = 0, introN = introducedCount();
    W.forEach(function (x) { var s = data.english.words[x.w]; if (s && s.wrongNote) wrongN++; });
    var exN = (data.english.exams || []).length;
    $('statEng').innerHTML =
      '<div class="stat" style="--c:#d6c2ff"><div class="name">' + ic('chart') + '예상 점수</div><div class="big">' + (sc == null ? '—' : sc) + '<small class="muted" style="font-size:15px"> / 990</small></div><div class="s">단어 실력 기준 추정치</div></div>' +
      '<div class="stat" style="--c:#9ee3d4"><div class="name">' + ic('cards') + '학습한 단어</div><div class="big">' + introN + '<small class="muted" style="font-size:15px"> / ' + W.length + '</small></div><div class="s">기초 ' + ls[1].k + ' · 중급 ' + ls[2].k + ' · 고급 ' + ls[3].k + ' 숙련</div></div>' +
      '<div class="stat" style="--c:#ffb3d1"><div class="name">' + ic('rewind') + '오답노트</div><div class="big">' + wrongN + '</div><div class="s">연속 2번 맞히면 졸업</div></div>' +
      '<div class="stat" style="--c:#a9dcff"><div class="name">' + ic('calendar') + '정기고사</div><div class="big">' + exN + '회</div><div class="s">주간 D-' + examInfo('weekly').dueIn + ' · 월간 D-' + examInfo('monthly').dueIn + '</div></div>';
  }
  $('statRange').addEventListener('input', renderStats);

  // ================= 설정 =================
  function iconOptions(sel) { return ICON_CHOICES.map(function (o) { return '<option value="' + o[0] + '"' + (o[0] === sel ? ' selected' : '') + '>' + o[1] + '</option>'; }).join(''); }
  function renderSettings() {
    $('catList').innerHTML = data.categories.map(function (c) {
      var n = data.entries.filter(function (e) { return e.categoryId === c.id; }).length;
      return '<li data-id="' + esc(c.id) + '"><span class="ic-prev" style="--c:' + esc(c.color) + '">' + ic(c.icon) + '</span>' +
        '<select class="field icon-sel" data-f="icon">' + iconOptions(c.icon) + '</select>' +
        '<input type="text" class="field nm" data-f="name" maxlength="20" value="' + esc(c.name) + '">' +
        '<label class="small muted goal-l">목표 <input type="number" class="field" data-f="dailyGoalMin" min="0" max="1440" value="' + (c.dailyGoalMin || 0) + '">분</label>' +
        '<input type="color" data-f="color" value="' + esc(c.color) + '">' +
        '<label class="small muted chk"><input type="checkbox" data-f="parts"' + (c.parts ? ' checked' : '') + '>부위</label>' +
        '<span class="small muted">' + n + '개</span>' +
        '<button class="btn tiny glass icon-only" data-act="delcat" title="삭제" style="color:var(--bad)">' + ic('trash') + '</button></li>';
    }).join('');
    if (!$('catIcon').options.length) $('catIcon').innerHTML = iconOptions('book');
    updateIconPrev();
    $('setDaily').value = String(data.settings.dailyWords);
    $('setAutoLog').checked = !!data.settings.autoLog;
    $('setAutoSpeak').checked = !!data.settings.autoSpeak;
    $('setSound').checked = !!data.settings.sound;
    $('setSparkle').checked = !!data.settings.sparkle;
    document.querySelectorAll('.theme-opt').forEach(function (b) { b.classList.toggle('on', b.dataset.theme === (data.settings.theme || 'dream')); });
    renderNotiSettings();
    $('backupInfo').textContent = '분야 ' + data.categories.length + '개 · 기록 ' + data.entries.length + '개 · 학습 단어 ' + Object.keys(data.english.words).filter(function (w) { return data.english.words[w].intro; }).length + '개';
  }
  function updateIconPrev() { var p = $('catIconPrev'); p.innerHTML = ic($('catIcon').value || 'book'); p.style.setProperty('--c', $('catColor').value); }
  $('catIcon').addEventListener('change', updateIconPrev);
  $('catColor').addEventListener('input', updateIconPrev);
  $('catList').addEventListener('change', function (ev) {
    var f = ev.target.dataset.f; if (!f) return;
    var c = cat(ev.target.closest('li').dataset.id); if (!c) return;
    if (f === 'name') { var v = ev.target.value.trim(); if (!v) { ev.target.value = c.name; return; } c.name = v; }
    else if (f === 'icon') c.icon = ev.target.value;
    else if (f === 'parts') c.parts = ev.target.checked;
    else if (f === 'dailyGoalMin') c.dailyGoalMin = Math.max(0, parseInt(ev.target.value, 10) || 0);
    else c.color = ev.target.value;
    save(); toast('✧ 변경했어요'); renderHud();
    if (f === 'icon' || f === 'color') renderSettings();
  });
  $('catList').addEventListener('click', function (ev) {
    var b = ev.target.closest('[data-act="delcat"]'); if (!b) return;
    var id = b.closest('li').dataset.id, c = cat(id);
    if (data.categories.length <= 1) { toast('분야는 최소 1개 필요해요'); return; }
    var n = data.entries.filter(function (e) { return e.categoryId === id; }).length;
    if (n && !confirm('"' + c.name + '" 분야와 기록 ' + n + '개가 모두 삭제됩니다. 계속할까요?')) return;
    data.categories = data.categories.filter(function (x) { return x.id !== id; });
    data.entries = data.entries.filter(function (e) { return e.categoryId !== id; });
    save(); renderSettings(); renderHud(); toast('분야를 지웠어요');
  });
  $('catForm').addEventListener('submit', function (ev) {
    ev.preventDefault();
    var name = $('catName').value.trim(); if (!name) return;
    data.categories.push({ id: uid(), name: name, icon: $('catIcon').value || 'sparkle', color: $('catColor').value, dailyGoalMin: Math.max(0, parseInt($('catGoal').value, 10) || 0) });
    save(); $('catName').value = ''; renderSettings(); sfx('save'); toast('✦ "' + name + '" 분야가 생겼어요');
  });
  $('setDaily').addEventListener('change', function () { data.settings.dailyWords = parseInt(this.value, 10) || 20; save(); toast('내일부터 하루 ' + data.settings.dailyWords + '개 ✧'); });
  $('setAutoLog').addEventListener('change', function () { data.settings.autoLog = this.checked; save(); });
  $('setAutoSpeak').addEventListener('change', function () { data.settings.autoSpeak = this.checked; save(); });
  $('setSound').addEventListener('change', function () { data.settings.sound = this.checked; save(); sfx('pop'); });
  $('themeGrid').addEventListener('click', function (ev) {
    var b = ev.target.closest('[data-theme]'); if (!b) return;
    data.settings.theme = b.dataset.theme; save(); applyTheme(); sfx('pop');
    toast({ dream: '✧ 드림코어 테마로 바꿨어요', plain: '일반 테마로 바꿨어요', dark: '다크 모드로 바꿨어요', auto: '기기 설정에 맞춰 자동으로 바뀌어요' }[data.settings.theme] || ''); render();
  });
  $('setSparkle').addEventListener('change', function () { data.settings.sparkle = this.checked; save(); renderSparkles(); });

  $('exportBtn').addEventListener('click', function () {
    var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = '꿈속정원-백업-' + today() + '.json';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
    toast('✧ 백업 파일을 저장했어요');
  });
  $('importFile').addEventListener('change', function () {
    var f = this.files[0]; if (!f) return;
    var r = new FileReader();
    r.onload = function () {
      try {
        var d = JSON.parse(r.result);
        if (!valid(d)) throw new Error('형식 오류');
        if (!confirm('현재 데이터(기록 ' + data.entries.length + '개)를 백업 파일(기록 ' + d.entries.length + '개)로 바꿀까요?')) return;
        data = normalize(d); save(); syncCustomWords(); applyTheme(); render(); toast('✧ 불러오기 완료');
      } catch (e) { toast('올바른 백업 파일이 아니에요'); }
    };
    r.readAsText(f);
    this.value = '';
  });

  // ================= 렌더 =================
  function render() {
    renderHud();
    if (currentView === 'home') renderHome();
    else if (currentView === 'english') renderEnglish();
    else if (currentView === 'log') renderLog();
    else if (currentView === 'calendar') renderCalendar();
    else if (currentView === 'stats') renderStats();
    else if (currentView === 'settings') renderSettings();
  }
  window.addEventListener('storage', function (ev) { if (ev.key === KEY) { data = load(); syncCustomWords(); render(); } });
  var lastDay = today();
  setInterval(function () {
    if (today() !== lastDay) { lastDay = today(); $('addDate').value = lastDay; render(); }
    else if (currentView === 'home') renderGarden(getQuests());
  }, 60000);
  if (window.speechSynthesis) speechSynthesis.getVoices();

  syncCustomWords();
  hydrateIcons();
  applyTheme();
  runTick();
  renderSparkles();
  render();
  checkReminders();
  checkHashImport();
  // 생성 이미지가 있으면 정원 배경으로 사용
  (function () { var im = new Image(); im.onload = function () { hasFieldImg = true; applyTheme(); if (currentView === 'home') renderGarden(getQuests()); }; im.src = 'assets/dream-field.png'; })();
})();
