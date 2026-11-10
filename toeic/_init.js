// 토익 RC 실전(Part 6·7) 지문과 강의 데이터 등록
window.TOEIC_RC = window.TOEIC_RC || { p6: [], p7: [] };
window.TOEIC_LESSONS = window.TOEIC_LESSONS || [];
function RC_ADD(part, rows) { rows.forEach(function (r) { r.part = part; window.TOEIC_RC[part].push(r); }); }
function LESSON_ADD(rows) { rows.forEach(function (r) { window.TOEIC_LESSONS.push(r); }); }
