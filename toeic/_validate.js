// 사용법: node toeic/_validate.js toeic/p6_a.js [다른 파일...]   (인자 없으면 toeic/ 폴더 전체 검사)
const fs = require('fs'), path = require('path'), vm = require('vm');
const dir = __dirname;
let files = process.argv.slice(2);
if (!files.length) files = fs.readdirSync(dir).filter(f => /\.js$/.test(f) && !f.startsWith('_')).map(f => path.join(dir, f));
const ctx = { window: {} }; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(dir, '_init.js'), 'utf8') + ';this.RC_ADD=RC_ADD;this.LESSON_ADD=LESSON_ADD;', ctx);
const errs = [], warn = [];
for (const f of files) { try { vm.runInContext(fs.readFileSync(f, 'utf8'), ctx, { filename: f }); } catch (e) { errs.push(f + ': 문법 오류 ' + e.message); } }
const RC = ctx.window.TOEIC_RC, L = ctx.window.TOEIC_LESSONS;
const DOM = ['office', 'hr', 'marketing', 'finance', 'production', 'shopping', 'travel', 'dining', 'legal', 'property', 'tech', 'general'];
const ids = new Set(), ansDist = [0, 0, 0, 0];
const isStr = s => typeof s === 'string' && s.trim().length > 0;
function chkQ(where, q, needStem) {
  if (needStem && !isStr(q.s)) errs.push(where + ': 질문(s) 없음');
  if (!Array.isArray(q.o) || q.o.length !== 4 || !q.o.every(isStr)) errs.push(where + ': 보기(o)는 문자열 4개');
  else if (new Set(q.o.map(x => x.trim().toLowerCase())).size !== 4) errs.push(where + ': 보기 중복');
  if (![0, 1, 2, 3].includes(q.a)) errs.push(where + ': 정답(a)은 0~3'); else ansDist[q.a]++;
  if (!isStr(q.e) || q.e.length < 15) errs.push(where + ': 해설(e)이 없거나 너무 짧음');
  if (!isStr(q.k)) errs.push(where + ': 유형(k) 없음');
}
function chkVoca(where, v) {
  if (!Array.isArray(v) || v.length < 3) errs.push(where + ': voca(핵심 어휘) 3개 이상 필요');
  else v.forEach((p, i) => { if (!Array.isArray(p) || p.length !== 2 || !p.every(isStr)) errs.push(where + ': voca[' + i + '] 형식 ["word","뜻"]'); });
}
const wc = s => (s.match(/[A-Za-z']+/g) || []).length;
RC.p6.forEach((s, n) => {
  const w = 'p6 ' + (s.id || '#' + n);
  if (!isStr(s.id) || ids.has(s.id)) errs.push(w + ': id 없음/중복'); ids.add(s.id);
  if (!DOM.includes(s.d)) errs.push(w + ': d(분야) 잘못됨 ' + s.d);
  if (![1, 2, 3].includes(s.lv)) errs.push(w + ': lv는 1~3');
  if (!isStr(s.type) || !isStr(s.title) || !isStr(s.text) || !isStr(s.ko)) errs.push(w + ': type/title/text/ko 필요');
  if (!Array.isArray(s.q) || s.q.length !== 4) errs.push(w + ': 문제 4개 필요');
  else {
    s.q.forEach((q, i) => { chkQ(w + ' Q' + (i + 1), q, false); if (!s.text.includes('{' + (i + 1) + '}')) errs.push(w + ': 지문에 {' + (i + 1) + '} 빈칸 없음'); });
    if (!s.q.some(q => q.k === '문장 삽입')) errs.push(w + ': 문장 삽입 문제 1개 필요');
    const cnt = (s.text.match(/\{\d\}/g) || []).length; if (cnt !== 4) errs.push(w + ': 빈칸 표시 {n}이 정확히 4개여야 함 (' + cnt + ')');
    const n2 = wc(s.text); if (n2 < 70 || n2 > 220) warn.push(w + ': 지문 길이 ' + n2 + '단어');
  }
  chkVoca(w, s.voca);
});
RC.p7.forEach((s, n) => {
  const w = 'p7 ' + (s.id || '#' + n);
  if (!isStr(s.id) || ids.has(s.id)) errs.push(w + ': id 없음/중복'); ids.add(s.id);
  if (!DOM.includes(s.d)) errs.push(w + ': d(분야) 잘못됨 ' + s.d);
  if (![1, 2, 3].includes(s.lv)) errs.push(w + ': lv는 1~3');
  if (!['single', 'double', 'triple'].includes(s.kind)) errs.push(w + ': kind는 single/double/triple');
  const need = { single: 1, double: 2, triple: 3 }[s.kind];
  if (!Array.isArray(s.docs) || s.docs.length !== need) errs.push(w + ': docs 개수가 kind와 다름');
  else s.docs.forEach((d, i) => {
    if (!isStr(d.type) || !isStr(d.text) || !isStr(d.ko)) errs.push(w + ' doc' + (i + 1) + ': type/text/ko 필요');
    if (d.text.includes('|')) d.text.split('\n').filter(l => l.trim().startsWith('|')).forEach(l => { if (!l.trim().endsWith('|')) errs.push(w + ' doc' + (i + 1) + ': 표 행은 |로 끝나야 함'); });
  });
  const qn = s.q && s.q.length;
  if (!Array.isArray(s.q) || qn < 2 || qn > 5) errs.push(w + ': 문제 2~5개');
  else { s.q.forEach((q, i) => chkQ(w + ' Q' + (i + 1), q, true)); if (s.kind !== 'single' && qn !== 5) errs.push(w + ': 복수 지문은 문제 5개'); }
  chkVoca(w, s.voca);
});
const TR = ['intro', 'p5', 'p6', 'p7', 'voca'];
L.forEach((l, n) => {
  const w = 'lesson ' + (l.id || '#' + n);
  if (!isStr(l.id) || ids.has(l.id)) errs.push(w + ': id 없음/중복'); ids.add(l.id);
  if (!TR.includes(l.track)) errs.push(w + ': track은 ' + TR.join('/'));
  if (typeof l.no !== 'number') errs.push(w + ': no(순서 숫자) 필요');
  if (!isStr(l.title) || !isStr(l.sub)) errs.push(w + ': title/sub 필요');
  if (typeof l.min !== 'number') errs.push(w + ': min(예상 분) 필요');
  if (!Array.isArray(l.blocks) || l.blocks.length < 5) errs.push(w + ': blocks 5개 이상');
  else l.blocks.forEach((b, i) => {
    const ww = w + ' block' + i;
    if (!['p', 'rule', 'ex', 'tip', 'trap', 'table'].includes(b.t)) errs.push(ww + ': t 잘못됨 ' + b.t);
    if (['p', 'tip', 'trap'].includes(b.t) && !isStr(b.x)) errs.push(ww + ': x 필요');
    if (b.t === 'rule' && (!isStr(b.h) || !isStr(b.x))) errs.push(ww + ': rule은 h,x 필요');
    if (b.t === 'ex' && (!isStr(b.en) || !isStr(b.ko))) errs.push(ww + ': ex는 en,ko 필요');
    if (b.t === 'table' && (!Array.isArray(b.head) || !Array.isArray(b.rows) || b.rows.some(r => !Array.isArray(r) || r.length !== b.head.length))) errs.push(ww + ': table head/rows 열 수 불일치');
  });
  if (!Array.isArray(l.check) || l.check.length < 3) errs.push(w + ': check(확인 문제) 3개 이상');
  else l.check.forEach((q, i) => { if (!q.k) q.k = '확인'; chkQ(w + ' 확인' + (i + 1), q, true); });
});
console.log('p6 세트 ' + RC.p6.length + ' · p7 세트 ' + RC.p7.length + ' · 강의 ' + L.length + ' · 정답 분포 ' + ansDist.join('/'));
if (warn.length) console.log('경고:\n  ' + warn.join('\n  '));
if (errs.length) { console.log('오류 ' + errs.length + '개:\n  ' + errs.join('\n  ')); process.exit(1); }
console.log('OK');
