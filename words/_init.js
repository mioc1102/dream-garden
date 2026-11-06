// 단어 데이터 로더: 각 분야 파일이 TOEIC_ADD(분야, [[단어, 품사, 뜻, 난이도, 예문, 예문해석], ...]) 를 호출합니다.
window.TOEIC_DATA = [];
window.TOEIC_ADD = function (domain, rows) {
  rows.forEach(function (a) {
    if (!a || !a[0]) return;
    window.TOEIC_DATA.push({ w: String(a[0]).trim(), p: a[1] || 'n', m: a[2] || '', lv: +a[3] || 2, d: domain, ex: a[4] || '', exk: a[5] || '' });
  });
};
