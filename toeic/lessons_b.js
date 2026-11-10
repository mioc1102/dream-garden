// 강의 B: Part 6 · Part 7 · 어휘 트랙 (산타토익식 개념 강의)
LESSON_ADD([
  // ───────────────────────── Part 6 ─────────────────────────
  {
    id: 'p6-L1', track: 'p6', no: 1,
    title: 'Part 6 구조와 푸는 순서', sub: '4지문 16문항, 8분 안에 끝내는 풀이 루틴', min: 10,
    blocks: [
      { t: 'p', x: 'Part 6는 **지문 4개 × 빈칸 4개 = 16문항**입니다. 겉보기엔 Part 5처럼 빈칸 채우기지만, 핵심 차이는 **"빈칸 문장만 보고는 답이 안 나오는 문제"**가 섞여 있다는 거예요. 시제, 대명사, 연결어, 문장 삽입은 앞뒤 문장을 봐야만 풀립니다.\n오늘은 Part 6를 **지문당 2분, 총 8분** 안에 끝내는 루틴을 잡아 볼게요.' },
      { t: 'table', head: ['문항 유형', '지문당 개수', '어디를 봐야 하나'], rows: [
        ['어휘', '0~2개', '빈칸 문장 + 앞 문장 흐름'],
        ['문법 (품사·태·수 일치)', '0~2개', '빈칸 문장 안에서 해결되는 경우 많음'],
        ['문법 (시제·대명사)', '0~1개', '반드시 앞뒤 문장, 날짜 표현'],
        ['연결어 (접속부사)', '0~1개', '빈칸 앞 문장과 뒤 문장의 관계'],
        ['문장 삽입', '정확히 1개', '빈칸 바로 앞 문장과 바로 뒤 문장']
      ] },
      { t: 'rule', h: 'Part 6 풀이 순서 (지문 1개 기준)', x: '① 제목·헤더(To/From/Subject) 3초 확인 → 글의 종류와 목적 파악\n② 첫 문장부터 **위에서 아래로** 읽어 내려가다 빈칸을 만나면 바로 푼다\n③ 빈칸 문장만으로 풀리면 즉시 답, 안 풀리면 **표시만 하고 다음 문장**까지 읽는다\n④ 문장 삽입은 지문 흐름을 다 읽은 뒤 마지막에 확정\n⑤ 지문 하나에 2분 넘기면 찍고 넘어간다' },
      { t: 'ex', en: 'Dear Mr. Novak,\nThank you for your *order* of ten office chairs.', ko: '노박 씨께,\n사무용 의자 10개를 주문해 주셔서 감사합니다.', note: '헤더와 첫 문장만으로 "주문 확인/배송 안내 이메일"임을 예측 → 이후 배송·지연·환불 어휘가 나올 확률이 높다' },
      { t: 'ex', en: 'The seminar was a great success. More than 200 people *attended*.', ko: '세미나는 대성공이었다. 200명 이상이 참석했다.', note: '빈칸 문장 자체엔 시간 단서가 없지만, 앞 문장 was로 과거 사건임을 확인 → attended' },
      { t: 'ex', en: 'Our new parking policy takes effect on June 1. *It* applies to all employees and visitors.', ko: '새 주차 정책은 6월 1일부터 시행됩니다. 이는 모든 직원과 방문객에게 적용됩니다.', note: '대명사 It이 가리키는 것 = 앞 문장의 policy (단수). 앞 문장을 안 보면 They와 헷갈린다' },
      { t: 'ex', en: 'The elevator will be out of service on Friday. *Therefore*, please use the east stairway.', ko: '금요일에 엘리베이터 운행이 중단됩니다. 따라서 동쪽 계단을 이용해 주세요.', note: '원인(운행 중단) → 결과(계단 이용): 인과 관계 연결어 Therefore' },
      { t: 'rule', h: '"문장 안" 문제 vs "문맥" 문제 구별법', x: '보기 4개가 **같은 어근의 품사 변형**(decide/decision/decisive/decisively) → 대부분 빈칸 문장 안에서 해결\n보기 4개가 **같은 동사의 시제 변형**(will hold/held/has held/is holding) → 문맥 문제, 앞뒤 문장 필수\n보기 4개가 **접속부사**(However/Therefore...) → 앞 문장과의 관계 문제\n보기 4개가 **완전한 문장** → 문장 삽입' },
      { t: 'tip', x: '실전 팁: 보기부터 훑어 **문제 유형을 먼저 판정**하세요. 품사 문제는 5초 컷, 시제·연결어 문제는 앞뒤 한 문장씩 더 읽기. 이 판정만으로 시간이 30% 이상 줄어듭니다.' },
      { t: 'trap', x: '함정: 빈칸 문장만 보고 "문법적으로 가능한" 시제를 고르는 것. Part 6 시제 문제는 보기 4개가 **모두 문법적으로는 가능**하게 출제됩니다. 정답을 가르는 건 오직 지문 속 날짜·사건 순서예요.' },
      { t: 'tip', x: '시간 배분: Part 5(30문항)를 9~10분, **Part 6를 8분** 안에 끝내야 Part 7에 55분 가까이 쓸 수 있습니다. Part 6에서 막히는 한 문제 때문에 Part 7 지문 하나를 통째로 날리지 마세요.' }
    ],
    check: [
      { s: 'We are pleased to announce that our Westfield branch will reopen on May 3. The branch ------- since March while the lobby is being redesigned.', o: ['has been closed', 'will close', 'closes', 'is closing'], a: 0, e: 'since March(3월 이후 지금까지) + 5월 3일 재개장 예정 → 과거부터 현재까지 계속된 상태이므로 현재완료 has been closed가 정답입니다.' },
      { s: 'Part 6에서 보기 4개가 모두 완전한 영어 문장일 때 가장 효과적인 풀이 방법은?', o: ['보기 문장을 먼저 모두 해석한다', '빈칸 문장의 문법 구조만 본다', '빈칸 바로 앞뒤 문장의 내용과 연결되는지 확인한다', '가장 긴 문장을 고른다'], a: 2, e: '문장 삽입 문제는 빈칸 앞 문장과 뒤 문장 사이에서 자연스럽게 이어지는 문장을 찾는 문제입니다. 앞뒤 문맥 확인이 핵심이에요.' },
      { s: 'Our shuttle service will be suspended during the holiday week. -------, employees are encouraged to carpool or use public transit.', o: ['Nevertheless', 'Accordingly', 'Similarly', 'For instance'], a: 1, e: '셔틀 운행 중단(원인) → 카풀·대중교통 권장(결과)의 인과 관계이므로 Accordingly(따라서)가 정답. Nevertheless는 역접, Similarly는 유사, For instance는 예시입니다.' },
      { s: 'Thank you for attending last week\'s training session. As promised, the slides are now ------- on the company intranet.', o: ['able', 'capable', 'possible', 'available'], a: 3, e: '자료가 인트라넷에서 "이용 가능하다"는 뜻의 available이 정답. able/capable은 사람·주체의 능력, possible은 일의 가능성을 나타내 자료를 주어로 쓰기 어색합니다.' }
    ]
  },
  {
    id: 'p6-L2', track: 'p6', no: 2,
    title: '문맥으로 푸는 시제·대명사', sub: '빈칸 밖에서 단서를 찾는 Part 6 대표 유형', min: 12,
    blocks: [
      { t: 'p', x: 'Part 5의 시제 문제는 yesterday, next week 같은 **시간 부사가 빈칸 문장 안에** 있습니다. 하지만 Part 6에선 그 단서를 일부러 **다른 문장으로 빼 둡니다.** 그래서 "문맥 시제"라고 불러요. 대명사도 마찬가지로, 가리키는 대상이 앞 문장에 있습니다.' },
      { t: 'rule', h: '문맥 시제 단서 3종', x: '① **글의 날짜 vs 사건 날짜**: 이메일 Date가 4월 2일인데 행사가 4월 10일 → 미래\n② **앞뒤 문장의 시제**: "The renovation was completed last month." 다음 문장은 대개 과거·현재완료\n③ **글의 목적**: 초대장·공지 → 미래 / 후기·감사 편지·기사 → 과거' },
      { t: 'table', head: ['글의 종류', '주로 쓰이는 시제', '대표 표현'], rows: [
        ['행사 공지·초대', '미래 (will, be -ing)', 'will be held, is scheduled to'],
        ['감사 편지·후기', '과거', 'Thank you for attending ~ / was'],
        ['정책 변경 안내', '미래 + 현재완료', 'will take effect, has decided'],
        ['기사 (실적·인사)', '과거 + 현재완료', 'announced, has appointed']
      ] },
      { t: 'ex', en: 'Date: March 4\nThe annual charity run *will take place* on March 21.', ko: '날짜: 3월 4일\n연례 자선 달리기 대회가 3월 21일에 열릴 예정입니다.', note: '작성일(3/4)보다 행사일(3/21)이 뒤 → 미래 시제' },
      { t: 'ex', en: 'Thank you for visiting our booth at the trade fair. We *enjoyed* speaking with you.', ko: '박람회에서 저희 부스를 방문해 주셔서 감사합니다. 귀하와 이야기 나눠서 즐거웠습니다.', note: '감사 인사 = 이미 끝난 일 → 과거 enjoyed' },
      { t: 'ex', en: 'Ms. Lin joined the firm in 2015. Since then, she *has managed* over forty projects.', ko: '린 씨는 2015년에 입사했다. 그 이후로 그녀는 40개가 넘는 프로젝트를 관리해 왔다.', note: 'Since then(그때 이후로 지금까지) → 현재완료' },
      { t: 'rule', h: '대명사 문제 푸는 법', x: '① 빈칸이 가리킬 **명사를 앞 문장에서 찾는다**\n② 단수/복수, 사람/사물 확인 (it vs they, he vs she)\n③ 격 확인: 주어 자리 they / 소유격 their / 목적어 them / 소유대명사 theirs\n④ 회사·팀은 단수 취급이 기본 (The company ... its)' },
      { t: 'ex', en: 'We have received several complaints about the new software. Most of *them* concern login errors.', ko: '새 소프트웨어에 대한 불만이 여러 건 접수되었습니다. 그 대부분은 로그인 오류에 관한 것입니다.', note: 'them = 앞 문장의 complaints (복수, 전치사 of 뒤 목적격)' },
      { t: 'ex', en: 'Harbor Bank has opened a new branch downtown. *Its* opening hours are 9 A.M. to 6 P.M.', ko: '하버 은행이 시내에 새 지점을 열었다. 영업시간은 오전 9시부터 오후 6시까지다.', note: 'Its = the branch (단수 사물의 소유격). Their를 고르면 오답' },
      { t: 'tip', x: '실전 팁: 시제 보기가 나오면 **지문 맨 위 Date부터** 다시 보세요. 이메일·편지에는 날짜가 반드시 있고, 출제자는 그 날짜를 단서로 쓰기 위해 넣어 둡니다.' },
      { t: 'trap', x: '함정: 바로 앞 명사에 대명사를 붙이는 실수. "Customers who bought the printer said ___ was easy to use."에서 바로 앞 명사가 printer라 it이 맞지만, 반대로 사람 이야기라면 they가 될 수 있어요. **의미상 누가/무엇이** 그 동작을 하는지 꼭 확인하세요.' }
    ],
    check: [
      { s: 'Date: October 2\nAll staff are invited to the year-end planning workshop. The workshop ------- in Conference Room B on October 15.', o: ['was held', 'will be held', 'has been held', 'had been held'], a: 1, e: '작성일은 10월 2일, 워크숍은 10월 15일 → 아직 일어나지 않은 미래의 일이므로 will be held가 정답입니다.' },
      { s: 'Thank you for participating in last Saturday\'s product demonstration. We ------- your feedback very helpful.', o: ['will find', 'are finding', 'find', 'found'], a: 3, e: '지난 토요일(last Saturday) 행사에 대한 감사 편지 → 이미 받은 피드백을 유용하다고 여겼다는 과거 found가 자연스럽습니다.' },
      { s: 'Several clients have asked about our new delivery options. To answer ------- questions, we have posted a detailed guide online.', o: ['their', 'its', 'his', 'theirs'], a: 0, e: '질문을 한 주체는 앞 문장의 clients(복수 사람) → 명사 questions 앞 소유격 their가 정답. theirs는 소유대명사라 명사 앞에 못 옵니다.' },
      { s: 'Kemper Logistics has expanded rapidly over the past year. Last month, ------- opened two new warehouses in Ohio.', o: ['they', 'them', 'it', 'its'], a: 2, e: '주어는 앞 문장의 Kemper Logistics(회사, 단수) → 주격 it이 정답. 회사는 단수 취급이 기본이고, its는 소유격이라 주어 자리에 못 옵니다.' }
    ]
  },
  {
    id: 'p6-L3', track: 'p6', no: 3,
    title: '접속부사·연결어 총정리', sub: 'however / therefore / in addition / otherwise 한 장 정리', min: 12,
    blocks: [
      { t: 'p', x: 'Part 6에서 거의 매회 1~2문항 나오는 게 **연결어(접속부사)** 문제입니다. 방법은 단 하나, **빈칸 앞 문장과 뒤 문장의 관계**를 한 단어로 정의하는 거예요. "반대인가? 원인-결과인가? 추가인가? 조건인가?"\n관계만 맞히면 보기는 자동으로 정해집니다.' },
      { t: 'table', head: ['관계', '접속부사', '뜻', '신호'], rows: [
        ['역접·대조', 'However / Nevertheless / Nonetheless / On the other hand', '그러나 / 그럼에도 불구하고 / 반면', '앞(+) ↔ 뒤(−) 반대'],
        ['인과·결과', 'Therefore / Thus / As a result / Consequently / Accordingly', '따라서 / 그 결과', '앞 = 원인, 뒤 = 결과'],
        ['추가', 'In addition / Moreover / Furthermore / Also / Besides', '게다가 / 또한', '같은 방향의 정보 하나 더'],
        ['조건(그렇지 않으면)', 'Otherwise', '그렇지 않으면', '앞 = 지시·조건, 뒤 = 안 지킬 때 결과'],
        ['예시', 'For example / For instance', '예를 들어', '앞 = 일반, 뒤 = 구체 사례'],
        ['시간 순서', 'Afterward / Then / Meanwhile / In the meantime', '그 후 / 그동안', '사건의 순서·동시 진행'],
        ['대안·대신', 'Instead / Alternatively', '대신 / 그 대신에', '앞 = 불가·취소, 뒤 = 대안'],
        ['유사', 'Similarly / Likewise', '마찬가지로', '앞과 같은 패턴의 다른 대상']
      ] },
      { t: 'ex', en: 'The new model is lighter than the old one. *However*, its battery life is shorter.', ko: '신형 모델은 구형보다 가볍다. 그러나 배터리 수명은 더 짧다.', note: '장점(가볍다) ↔ 단점(배터리 짧다) → 역접 However' },
      { t: 'ex', en: 'Demand for the product exceeded our forecasts. *As a result*, it is temporarily out of stock.', ko: '그 제품에 대한 수요가 예측치를 넘었다. 그 결과 일시 품절되었다.', note: '수요 초과(원인) → 품절(결과)' },
      { t: 'ex', en: 'Members receive a 10 percent discount. *In addition*, they get free shipping on all orders.', ko: '회원은 10% 할인을 받는다. 게다가 모든 주문에 무료 배송 혜택도 받는다.', note: '혜택 + 혜택 → 추가 In addition' },
      { t: 'ex', en: 'Please submit your receipts by Friday. *Otherwise*, your expenses cannot be reimbursed.', ko: '금요일까지 영수증을 제출해 주세요. 그렇지 않으면 경비를 환급받을 수 없습니다.', note: '지시(제출하라) → 안 지키면 불이익: Otherwise의 전형 패턴' },
      { t: 'ex', en: 'The outdoor concert has been canceled due to rain. *Instead*, a short film will be shown in the main hall.', ko: '우천으로 야외 콘서트가 취소되었다. 대신 본관에서 단편 영화가 상영된다.', note: '취소 → 대안 제시: Instead' },
      { t: 'rule', h: '접속부사 vs 접속사 구별', x: '접속부사(However, Therefore)는 **문장과 문장을 의미로만** 연결 → 보통 문장 맨 앞 + 쉼표\n접속사(although, because, but)는 **두 절을 한 문장으로** 묶음 → "Although S V, S V."\nPart 6 빈칸이 **마침표 다음 문장 맨 앞 + 쉼표** 자리라면 접속부사가 정답일 확률이 압도적입니다.' },
      { t: 'tip', x: '실전 팁: 앞뒤 문장에 **+ / − 기호**를 붙여 보세요. (+)(+)면 추가, (+)(−)면 역접, (원인)(결과)면 인과. 해석이 길어질 때 이 기호 하나로 3초 만에 풀립니다.' },
      { t: 'trap', x: '함정: Otherwise를 "게다가"로, Nevertheless를 "따라서"로 착각하는 것. 특히 **Otherwise는 앞 문장이 명령문·조건(please ~, must ~, be sure to ~)일 때** 나온다는 걸 기억하세요. 또 Therefore 자리에 "Because"를 넣으면 접속사라 문장 앞 단독 사용이 안 됩니다.' }
    ],
    check: [
      { s: 'Our online store will undergo maintenance from midnight to 4 A.M. -------, customers will not be able to place orders during this time.', o: ['However', 'For example', 'Consequently', 'Otherwise'], a: 2, e: '점검(원인) → 주문 불가(결과)의 인과 관계이므로 Consequently(그 결과)가 정답입니다.' },
      { s: 'Please confirm your attendance by May 10. -------, we may not be able to reserve a seat for you.', o: ['Otherwise', 'Moreover', 'Similarly', 'Therefore'], a: 0, e: '앞 문장이 지시(확인해 달라), 뒤 문장이 지키지 않을 때의 불이익 → Otherwise(그렇지 않으면)가 정답입니다.' },
      { s: 'The Halden Hotel offers a free airport shuttle. -------, guests can enjoy complimentary breakfast every morning.', o: ['Instead', 'Nevertheless', 'As a result', 'In addition'], a: 3, e: '무료 셔틀(혜택) + 무료 조식(혜택) → 같은 방향 정보 추가이므로 In addition이 정답입니다.' },
      { s: 'Sales of our winter jackets rose by 15 percent this year. -------, sales of our boots declined slightly.', o: ['Therefore', 'On the other hand', 'Furthermore', 'For instance'], a: 1, e: '재킷 판매 증가(+) ↔ 부츠 판매 감소(−) → 대조 관계이므로 On the other hand(반면)가 정답입니다.' }
    ]
  },
  {
    id: 'p6-L4', track: 'p6', no: 4,
    title: '문장 삽입 문제 공략', sub: '지문마다 1문항, 앞뒤 연결 고리로 확정하기', min: 13,
    blocks: [
      { t: 'p', x: 'Part 6 지문마다 **반드시 1문항** 나오는 문장 삽입. 4개 보기가 모두 문법적으로 완벽한 문장이라 "다 말이 되는 것 같은" 느낌이 들죠. 하지만 정답은 **빈칸 앞 문장과 뒤 문장을 동시에 이어 주는 단 하나**뿐입니다. 오늘은 그 연결 고리를 찾는 4가지 단서를 배웁니다.' },
      { t: 'rule', h: '연결 고리 4대 단서', x: '① **지시어**: this, these, such, the same → 앞에 가리킬 대상이 있어야 한다\n② **대명사**: it, they, she → 앞 문장의 명사와 수·성 일치\n③ **접속부사**: However, In addition, As a result → 앞 문장과 논리 관계 일치\n④ **반복·대체 어휘**: 앞의 "renovation"을 보기에서 "the work"로 받는 식의 재진술' },
      { t: 'table', head: ['보기 속 단서', '확인할 것', '예시'], rows: [
        ['This / These + 명사', '앞 문장에 그 명사(또는 동의어)가 있는가', 'These changes → 앞에 변경 사항 나열'],
        ['They / It', '앞 문장 주어의 수와 일치하는가', 'They → 앞에 복수 명사'],
        ['However, ~', '앞과 반대 내용인가', '장점 다음 단점'],
        ['Also / In addition', '앞과 같은 종류 정보인가', '혜택 다음 혜택'],
        ['고유한 새 정보만 있는 문장', '흐름 전체 주제와 맞는가', '주제와 무관하면 오답']
      ] },
      { t: 'ex', en: 'We will replace all the windows on the third floor next week. *This work is expected to take three days.* During that time, staff will be relocated to the fourth floor.', ko: '다음 주에 3층 창문을 모두 교체할 예정입니다. 이 작업은 3일 정도 걸릴 것으로 예상됩니다. 그동안 직원들은 4층으로 자리를 옮깁니다.', note: 'This work = 창문 교체 / 뒤 문장의 During that time = 3일 → 앞뒤를 모두 이어 줌' },
      { t: 'ex', en: 'Our new app lets you track deliveries in real time. *It also sends a notification when your package arrives.*', ko: '새 앱으로 배송을 실시간으로 추적할 수 있습니다. 소포가 도착하면 알림도 보내 줍니다.', note: 'It = app, also = 기능 추가' },
      { t: 'ex', en: 'The keynote speaker had to cancel at the last minute. *Fortunately, Dr. Reyes agreed to take her place.*', ko: '기조연설자가 막판에 취소해야 했다. 다행히 레예스 박사가 대신 맡기로 했다.', note: '문제 발생 → 해결: Fortunately 다음 대안이 나와 흐름이 자연스러움' },
      { t: 'ex', en: 'Applications must be submitted online. *Paper forms will no longer be accepted.*', ko: '지원서는 온라인으로 제출해야 합니다. 종이 양식은 더 이상 받지 않습니다.', note: '같은 규정을 반대 방향에서 재진술 → 강화' },
      { t: 'rule', h: '풀이 순서', x: '① 빈칸 **앞 문장**과 **뒤 문장**을 먼저 읽는다 (보기보다 먼저!)\n② 두 문장 사이에 "빠진 연결 정보"가 무엇일지 예측\n③ 보기에서 지시어·대명사·접속부사부터 체크 → 앞 문장과 안 맞으면 소거\n④ 남은 보기를 뒤 문장과도 이어지는지 확인' },
      { t: 'tip', x: '실전 팁: 빈칸이 **지문 맨 끝**이면 마무리 문장(연락 요청, 감사 인사, "We look forward to ~")이, **맨 앞**이면 글의 목적을 밝히는 문장이 정답인 경우가 많습니다.' },
      { t: 'trap', x: '함정: 지문에 나온 **단어를 그대로 반복하는 보기**. 친숙해 보여서 고르기 쉽지만, 내용상 앞뒤 흐름을 끊는 경우가 많습니다. 반대로 정답은 앞 내용을 **다른 말로 받는(this process, the change)** 경우가 더 많아요.' }
    ],
    check: [
      { s: 'The company cafeteria will close at 2 P.M. on Friday for a staff training event. -------. We apologize for any inconvenience.', o: ['The cafeteria serves a variety of hot meals.', 'Our chef has worked here for ten years.', 'Lunch prices will rise next quarter.', 'Snacks and drinks will still be available in the lounge.'], a: 3, e: '조기 폐점 안내 → 대안(라운지에서 간식 이용 가능) → 불편에 대한 사과로 이어지는 흐름. 나머지는 폐점 공지와 무관한 정보입니다.' },
      { s: 'We have updated our return policy. -------. For example, opened electronics may now be returned within 14 days.', o: ['Our store opened in 2009.', 'These changes make returns easier for customers.', 'Please visit our new location.', 'However, the policy has not changed.'], a: 1, e: 'These changes가 앞 문장의 updated policy를 받고, 뒤 문장 For example이 그 변경의 구체적 사례를 제시합니다. However 보기는 앞 문장과 모순입니다.' },
      { s: 'Ms. Tanaka will lead the marketing team starting in July. -------. Before joining us, she managed advertising campaigns at Brightway Media.', o: ['She brings more than twelve years of industry experience.', 'The team will relocate to Building C.', 'Marketing budgets are reviewed annually.', 'They hope to hire two more designers.'], a: 0, e: 'She = Ms. Tanaka, 경력 소개 → 뒤 문장의 이전 경력(Before joining us...)으로 자연스럽게 이어집니다. They 보기는 가리킬 복수 명사가 없습니다.' },
      { s: 'Our warehouse will move to a larger facility in Dayton next month. -------. In the meantime, please send all shipments to our current address.', o: ['Dayton is known for its parks.', 'Thank you for your recent order.', 'The new site will open on September 1.', 'Shipping costs vary by region.'], a: 2, e: '이전 안내 → 새 시설 개장일(9월 1일) → In the meantime(그때까지는) 현재 주소로 보내라. In the meantime이 가리킬 "기간"을 만들어 주는 문장이 정답입니다.' }
    ]
  },

  // ───────────────────────── Part 7 ─────────────────────────
  {
    id: 'p7-L1', track: 'p7', no: 1,
    title: 'Part 7 전략: 질문 먼저 읽기와 시간 배분', sub: '54문항을 55분 안에 끝내는 순서와 리듬', min: 12,
    blocks: [
      { t: 'p', x: 'Part 7은 **단일 지문 29문항 + 복수 지문 25문항 = 54문항**, RC의 절반 이상입니다. 고득점자와 중위권의 차이는 독해력보다 **"무엇을 찾으며 읽느냐"**에서 갈려요. 그래서 원칙은 하나, **질문을 먼저 읽고 지문은 찾으러 들어간다**입니다.' },
      { t: 'table', head: ['구간', '문항 수', '권장 시간', '1문항당'], rows: [
        ['단일 지문 (147~175)', '29문항', '약 27분', '약 55초'],
        ['이중 지문 (176~185)', '10문항', '약 11분', '약 65초'],
        ['삼중 지문 (186~200)', '15문항', '약 17분', '약 70초'],
        ['합계', '54문항', '약 55분', '-']
      ] },
      { t: 'rule', h: '질문 먼저 읽기 루틴', x: '① 지문 종류와 제목 확인 (이메일? 광고? 채팅?)\n② **질문만** 빠르게 읽고 핵심 키워드에 동그라미 (보기는 아직 읽지 않음)\n③ 지문을 처음부터 읽으며 키워드 근처에서 멈춰 답을 확정\n④ 그다음 보기를 읽고 패러프레이즈된 것을 고른다' },
      { t: 'ex', en: 'Q: When will the new branch open?\nText: ...The Riverside branch is scheduled to *open its doors on April 8*...', ko: '질문: 새 지점은 언제 문을 여는가?\n지문: ...리버사이드 지점은 4월 8일에 문을 열 예정입니다...', note: '질문 키워드 when + open → 지문에서 날짜만 찾으면 된다' },
      { t: 'ex', en: 'Q: What is indicated about Mr. Hale?\nText: *Mr. Hale, who has led our Seoul office since 2019*, will speak first.', ko: '질문: 헤일 씨에 대해 언급된 것은?\n지문: 2019년부터 서울 지사를 이끌어 온 헤일 씨가 먼저 연설할 것입니다.', note: '"What is indicated about 사람"은 그 이름이 나오는 문장 전부가 후보 → 이름 주변을 정독' },
      { t: 'ex', en: 'Q: What are readers asked to do?\nText: ...*Please register by June 5* to secure your spot...', ko: '질문: 독자들은 무엇을 하라고 요청받는가?\n지문: ...자리를 확보하려면 6월 5일까지 등록해 주세요...', note: '요청 문제의 정답은 Please, be sure to, we ask that 근처, 대개 지문 후반' },
      { t: 'ex', en: 'Q: Why was the email sent?\nText: *I am writing to inform you of a change* to your flight itinerary.', ko: '질문: 이메일은 왜 보내졌는가?\n지문: 귀하의 항공 일정 변경을 알려 드리려고 연락드립니다.', note: '목적 문제는 첫 1~2문장에서 거의 해결' },
      { t: 'tip', x: '실전 팁: 문제 순서 = 지문 순서인 경우가 대부분입니다. 1번 문제 답이 첫 문단, 마지막 문제 답이 마지막 문단에 있는 식이죠. 단, **NOT 문제와 사실 확인 문제**는 지문 전체를 봐야 하니 마지막에 푸세요.' },
      { t: 'tip', x: '시간 관리: 한 문제에 1분 30초 이상 쓰고 있다면 **가장 그럴듯한 보기에 표시하고 넘어가세요.** 마지막 삼중 지문 한 세트(5문항)를 못 푸는 것보다 한 문제를 찍는 게 훨씬 이득입니다.' },
      { t: 'trap', x: '함정: 지문에 나온 **단어가 그대로 들어간 보기**. 토익 Part 7 정답은 대부분 지문 표현을 **다른 말로 바꾼(paraphrase)** 보기이고, 지문 단어를 그대로 복사한 보기는 오답 미끼인 경우가 많습니다.' }
    ],
    check: [
      { s: 'Part 7에서 단일 지문 29문항에 권장되는 총 시간으로 가장 적절한 것은?', o: ['약 15분', '약 20분', '약 27분', '약 40분'], a: 2, e: '단일 지문은 문항당 약 55초, 29문항 기준 약 27분입니다. 그래야 복수 지문 25문항에 28분 정도를 남길 수 있어요.' },
      { s: 'Notice: The fitness center on the second floor will be closed for cleaning on Saturday, May 12. It will reopen at 6 A.M. on Sunday.\n\nWhen will the fitness center reopen?', o: ['On Sunday morning', 'On Saturday morning', 'On Saturday evening', 'On Monday morning'], a: 0, e: '근거: "It will reopen at 6 A.M. on Sunday." 지문의 6 A.M. on Sunday가 보기에서 On Sunday morning으로 바뀌었어요.' },
      { s: 'Dear Ms. Ortiz, I am writing to confirm your reservation for a deluxe room at the Bayview Inn from July 3 to July 6. Please let us know if you require airport pickup.\n\nWhat is the main purpose of the letter?', o: ['To offer a room upgrade', 'To confirm a booking', 'To request a payment', 'To announce a new service'], a: 1, e: '근거: "I am writing to confirm your reservation". 지문의 confirm your reservation이 보기에서 confirm a booking으로 바뀌었어요.' },
      { s: 'Staff who wish to attend the June leadership seminar should submit a request form to their manager by May 20. Space is limited to 30 participants.\n\nWhat are interested staff asked to do?', o: ['Contact the seminar speaker', 'Pay a registration fee', 'Reserve a meeting room', 'Turn in a form to a supervisor'], a: 3, e: '근거: "should submit a request form to their manager". submit → turn in, manager → supervisor로 패러프레이즈되었어요.' }
    ]
  },
  {
    id: 'p7-L2', track: 'p7', no: 2,
    title: '주제·목적 문제', sub: '첫 두 문장과 "I am writing to"에 답이 있다', min: 10,
    blocks: [
      { t: 'p', x: '"What is the purpose of the email?", "What is the article mainly about?" 같은 주제·목적 문제는 Part 7에서 거의 모든 지문의 **첫 번째 문제**로 나옵니다. 정답 위치가 가장 예측 가능한 유형이라 **반드시 맞혀야 하는 점수**예요.' },
      { t: 'table', head: ['질문 형태', '정답 위치', '단서 표현'], rows: [
        ['Why was the email written?', '첫 1~2문장', 'I am writing to ~ / This is to ~'],
        ['What is the purpose of the notice?', '제목 + 첫 문장', 'Please be advised that ~'],
        ['What is the article mainly about?', '제목 + 첫 문단', '기사 첫 문장(리드)'],
        ['What is being advertised?', '제목·상호명', '상품명, 서비스명']
      ] },
      { t: 'rule', h: '목적 시그널 표현', x: 'I am writing to inform/ask/confirm ~\nThis letter is to notify you that ~\nWe are pleased to announce ~\nI would like to request ~\nThank you for ~, but ~ (← but 뒤가 진짜 목적!)' },
      { t: 'ex', en: '*I am writing to request* a copy of the invoice for my March order.', ko: '3월 주문 건의 송장 사본을 요청드리려고 연락드립니다.', note: '목적 = 서류 요청 → 보기 "To ask for a document"' },
      { t: 'ex', en: '*We are pleased to announce* the opening of our second store in Austin.', ko: '오스틴에 2호점을 개점하게 되었음을 알려 드리게 되어 기쁩니다.', note: '목적 = 개점 알림 → "To publicize a new location"' },
      { t: 'ex', en: 'Thank you for your interest in the position. *Unfortunately, it has already been filled.*', ko: '해당 직책에 관심 가져 주셔서 감사합니다. 안타깝게도 이미 채용이 완료되었습니다.', note: '감사 인사 뒤의 Unfortunately가 진짜 목적 → "To reject an application"' },
      { t: 'ex', en: 'Riverside Park Reopens After Year-Long Renovation\nThe city\'s largest park *welcomed visitors again on Saturday*...', ko: '리버사이드 공원, 1년간의 보수 후 재개장\n시에서 가장 큰 공원이 토요일에 다시 방문객을 맞았다...', note: '기사 주제는 헤드라인 + 첫 문장 → "The reopening of a public space"' },
      { t: 'tip', x: '실전 팁: 첫 문장이 인사·감사로 시작하면 **두 번째 문장, 특히 but / however / unfortunately 뒤**를 보세요. 출제자가 일부러 목적을 한 박자 늦게 꺼내는 패턴입니다.' },
      { t: 'trap', x: '함정: 지문 **중간에 길게 설명된 세부 내용**을 목적으로 고르는 것. 예를 들어 행사 안내 이메일에서 주차 안내가 한 문단을 차지해도, 목적은 "행사 안내"입니다. 정답 보기는 보통 **포괄적인 표현**(To provide details about an event)이에요.' }
    ],
    check: [
      { s: 'To: All tenants\nFrom: Building Management\nPlease be advised that the water supply will be shut off on Tuesday from 9 A.M. to noon so that pipes on the fifth floor can be repaired.\n\nWhat is the purpose of the notice?', o: ['To introduce a new manager', 'To request rent payments', 'To announce a temporary service interruption', 'To advertise an apartment'], a: 2, e: '근거: "the water supply will be shut off on Tuesday from 9 A.M. to noon". 일시적 단수가 보기에서 a temporary service interruption으로 바뀌었어요.' },
      { s: 'Dear Mr. Patel,\nThank you for submitting your article to Urban Design Monthly. After careful review, we regret to inform you that we are unable to publish it at this time.\n\nWhy was the letter written?', o: ['To decline a submission', 'To request revisions', 'To offer a subscription', 'To schedule an interview'], a: 0, e: '근거: "we regret to inform you that we are unable to publish it". 게재 불가가 보기에서 decline a submission(투고 거절)으로 바뀌었어요. 첫 문장 감사 인사는 목적이 아닙니다.' },
      { s: 'Lakeside Electronics Expands Into Asia\nLakeside Electronics announced on Monday that it will open regional offices in Singapore and Seoul by the end of the year.\n\nWhat is the article mainly about?', o: ['A drop in sales', 'A new product line', 'A change in leadership', 'A company\'s overseas expansion'], a: 3, e: '근거: 제목 "Expands Into Asia"와 "will open regional offices in Singapore and Seoul". 아시아 지사 개설이 overseas expansion으로 바뀌었어요.' },
      { s: 'Hi Dana,\nI\'m writing to see whether you could cover my shift at the front desk this Thursday. I have a dental appointment that I can\'t reschedule.\n\nWhat is the purpose of the message?', o: ['To cancel an appointment', 'To ask a colleague for a favor', 'To report a scheduling error', 'To recommend a dentist'], a: 1, e: '근거: "whether you could cover my shift". 근무 대신 서 달라는 부탁이 보기에서 ask a colleague for a favor로 바뀌었어요.' }
    ]
  },
  {
    id: 'p7-L3', track: 'p7', no: 3,
    title: '세부 사항과 패러프레이징', sub: '키워드로 위치 찾고, 바뀐 표현으로 정답 고르기', min: 13,
    blocks: [
      { t: 'p', x: '세부 사항 문제(When, Where, How much, What does ~ offer?)는 Part 7에서 **가장 많이 나오는 유형**입니다. 풀이는 두 단계예요. ① 질문 키워드로 **근거 문장 위치 찾기** ② 근거 문장이 **다른 말로 바뀐 보기 고르기**. 두 번째 단계, 즉 패러프레이징을 알아보는 눈이 점수를 결정합니다.' },
      { t: 'rule', h: '패러프레이징 3가지 방식', x: '① **동의어 교체**: purchase → buy, inexpensive → affordable\n② **상위어로 묶기**: laptops, printers, tablets → electronic devices\n③ **구조 바꾸기**: "Delivery is free for orders over $50" → "Some orders qualify for free shipping"' },
      { t: 'table', head: ['지문 표현', '보기 표현', '방식'], rows: [
        ['complimentary', 'free of charge', '동의어'],
        ['reimburse', 'pay back', '동의어'],
        ['chairs, desks, cabinets', 'office furniture', '상위어'],
        ['a 20 percent reduction', 'a discount', '상위어'],
        ['call 555-0192 before Friday', 'contact the office by phone', '구조 변경'],
        ['the event has been postponed', 'the date has changed', '구조 변경']
      ] },
      { t: 'ex', en: 'Text: All attendees will receive a *complimentary* lunch.\nAnswer: Meals will be provided *at no cost*.', ko: '지문: 모든 참석자에게 무료 점심이 제공됩니다.\n정답: 식사가 무료로 제공된다.', note: 'complimentary = at no cost, lunch → meals (상위어)' },
      { t: 'ex', en: 'Text: The museum is *closed on Mondays*.\nAnswer: It is *not open every day* of the week.', ko: '지문: 박물관은 월요일에 휴관한다.\n정답: 일주일 내내 문을 여는 것은 아니다.', note: '구조를 완전히 바꾼 패러프레이즈 — 고득점 함정 유형' },
      { t: 'ex', en: 'Text: Applicants must have *at least five years of experience* in sales.\nAnswer: The position requires *previous sales experience*.', ko: '지문: 지원자는 영업 경력 최소 5년이 있어야 한다.\n정답: 그 직책은 이전 영업 경력을 요구한다.', note: '구체 숫자 → 포괄적 표현' },
      { t: 'ex', en: 'Text: We will *refund the full amount* within 7 days.\nAnswer: Customers will *get their money back*.', ko: '지문: 7일 이내에 전액 환불해 드립니다.\n정답: 고객은 돈을 돌려받을 것이다.', note: 'refund → get money back' },
      { t: 'tip', x: '실전 팁: 질문 키워드 중 **고유명사·숫자·날짜**를 먼저 찾으세요. 이것들은 지문에서 바뀌지 않고 그대로 나오기 때문에 위치 찾기의 가장 확실한 닻이 됩니다.' },
      { t: 'trap', x: '함정: 지문 단어를 그대로 쓰되 **내용을 살짝 비튼 보기**. 지문 "Orders over $50 ship free"에 대해 "All orders ship free"는 단어가 겹치지만 오답이에요. 범위(all/some), 주체(누가), 시점(언제)이 근거 문장과 정확히 일치하는지 확인하세요.' }
    ],
    check: [
      { s: 'Greenway Office Supply is offering complimentary delivery on all orders of $75 or more placed through our Web site until August 31.\n\nWhat is offered to some customers?', o: ['A free catalog', 'A membership card', 'An extended warranty', 'Free shipping'], a: 3, e: '근거: "complimentary delivery on all orders of $75 or more". complimentary delivery가 Free shipping으로, 일정 금액 이상이라는 조건이 some customers로 바뀌었어요.' },
      { s: 'Our technicians will inspect the heating system in every unit next week. Residents do not need to be present, but pets should be kept in a separate room.\n\nWhat are residents asked to do?', o: ['Be at home during the inspection', 'Keep animals away from the work area', 'Schedule a repair appointment', 'Turn off the heat'], a: 1, e: '근거: "pets should be kept in a separate room". pets → animals, separate room → away from the work area로 바뀌었어요. 집에 있을 필요는 없다고 했으니 첫 보기는 오답입니다.' },
      { s: 'The workshop fee of $120 includes all course materials, refreshments, and a certificate of completion. Parking at the venue costs an additional $10 per day.\n\nWhat is NOT included in the workshop fee?', o: ['Parking', 'Printed materials', 'Snacks and beverages', 'A certificate'], a: 0, e: '근거: "Parking at the venue costs an additional $10 per day." 주차는 추가 요금이므로 포함되지 않습니다. course materials → printed materials, refreshments → snacks and beverages로 바뀐 나머지는 포함 항목입니다.' },
      { s: 'Due to high demand, the Lisbon tour on October 9 is fully booked. Customers may join a waiting list or choose the same tour on October 16.\n\nWhat is suggested about the October 9 tour?', o: ['It has been canceled.', 'It is cheaper than other tours.', 'It has no remaining spaces.', 'It was moved to a new city.'], a: 2, e: '근거: "the Lisbon tour on October 9 is fully booked". fully booked가 has no remaining spaces로 바뀌었어요. 취소된 것이 아닙니다.' }
    ]
  },
  {
    id: 'p7-L4', track: 'p7', no: 4,
    title: 'NOT/사실 확인 문제', sub: '보기 4개를 지문과 하나씩 대조하는 소거 전략', min: 12,
    blocks: [
      { t: 'p', x: '"What is NOT mentioned about ~?", "What is true about ~?", "What is indicated about ~?" 이 유형들은 근거가 **지문 여러 곳에 흩어져** 있어 시간이 가장 많이 걸립니다. 그래서 전략은 **보기 4개를 지문과 하나씩 대조하며 소거**하는 것이에요.' },
      { t: 'table', head: ['질문 형태', '정답', '풀이법'], rows: [
        ['What is NOT mentioned/stated?', '지문에 없거나 틀린 1개', '3개를 지문에서 찾아 지우기'],
        ['What is true about ~?', '지문과 일치하는 1개', '틀린 3개를 근거로 지우기'],
        ['What is indicated/stated about ~?', '지문과 일치하는 1개', 'true 문제와 동일'],
        ['What is suggested/implied about ~?', '지문에서 추론 가능한 1개', '추론 문제로 분류 (L5)']
      ] },
      { t: 'rule', h: 'NOT 문제 풀이 순서', x: '① 질문의 대상(about 뒤 명사) 확인\n② 보기 4개를 먼저 읽고 각각 키워드 표시\n③ 지문에서 키워드를 찾을 때마다 해당 보기에 ✓\n④ ✓가 안 붙은 마지막 보기 = 정답\n※ NOT 문제는 보통 **목록·나열**(특징 3가지, 혜택 3가지) 부분에 근거가 몰려 있음' },
      { t: 'ex', en: 'Text: The package includes *round-trip airfare, four nights at a beachfront hotel, and daily breakfast*.', ko: '지문: 패키지에는 왕복 항공권, 해변 호텔 4박, 매일 조식이 포함됩니다.', note: 'NOT 문제 단골 근거: 나열 3개 → 보기 3개는 일치, 남은 1개(예: guided tours)가 정답' },
      { t: 'ex', en: 'Text: Ms. Ruiz, *a graduate of Kenton University*, has worked in hospitality *for nearly two decades*.', ko: '지문: 켄턴 대학교 졸업생인 루이즈 씨는 거의 20년간 서비스업에 종사해 왔다.', note: 'true 문제 정답 예: "She has extensive industry experience." (two decades → extensive)' },
      { t: 'ex', en: 'Text: The library\'s new study rooms *can be reserved online up to one week in advance*.', ko: '지문: 도서관의 새 스터디룸은 최대 일주일 전까지 온라인으로 예약할 수 있다.', note: '오답 함정 예: "Rooms can be reserved by phone." (방법이 다름)' },
      { t: 'ex', en: 'Text: Registration is *open to members and nonmembers*, although members pay a reduced fee.', ko: '지문: 등록은 회원과 비회원 모두 가능하지만, 회원은 할인된 요금을 낸다.', note: 'true: "Members receive a discount." / false: "Only members may register."' },
      { t: 'tip', x: '실전 팁: NOT/사실 확인 문제는 한 세트 안에서 **마지막에 푸세요.** 다른 문제를 풀며 지문을 이미 한 번 읽었기 때문에 보기 대조 속도가 두 배 빨라집니다.' },
      { t: 'trap', x: '함정: **only, all, always, never** 같은 극단적 표현이 들어간 보기. 지문은 "most", "usually"인데 보기가 "all", "always"면 사실 확인 문제의 오답, NOT 문제의 정답 후보입니다. 숫자·요일 하나만 바뀐 보기도 조심하세요.' }
    ],
    check: [
      { s: 'The Brookfield Conference Center features 12 meeting rooms, high-speed wireless Internet, and an on-site restaurant. Free parking is available for up to 300 vehicles.\n\nWhat is NOT mentioned as a feature of the conference center?', o: ['Internet access', 'Parking spaces', 'Overnight accommodations', 'A place to eat'], a: 2, e: '근거: 회의실, 무선 인터넷("wireless Internet"), 식당("on-site restaurant"), 주차("Free parking")는 언급됐지만 숙박 시설은 없습니다. restaurant → a place to eat 패러프레이즈를 지우고 남은 보기가 정답이에요.' },
      { s: 'Rowan Bakery, which opened on Elm Street in 2011, now has three locations. All of its bread is baked fresh each morning, and most locations stay open until 8 P.M.\n\nWhat is true about Rowan Bakery?', o: ['It has more than one store.', 'All locations close at 8 P.M.', 'It opened its first store last year.', 'It bakes bread twice a day.'], a: 0, e: '근거: "now has three locations". three locations가 more than one store로 바뀌었어요. most locations를 All locations로 바꾼 보기는 극단 표현 함정입니다.' },
      { s: 'Volunteers for the city marathon must be at least 16 years old and attend a one-hour orientation on April 2. Each volunteer will receive a T-shirt and a meal voucher.\n\nWhat is NOT stated about the volunteers?', o: ['They must meet an age requirement.', 'They will be given clothing.', 'They must attend a training session.', 'They will be paid an hourly wage.'], a: 3, e: '근거: 나이 조건("at least 16"), 오리엔테이션("one-hour orientation" → training session), 티셔츠("T-shirt" → clothing)는 모두 언급. 시급 지급은 없으므로 정답입니다.' },
      { s: 'The upgraded Pro plan allows up to 20 users, offers 2 terabytes of storage, and includes 24-hour phone support. It costs $45 per month when billed annually.\n\nWhat is indicated about the Pro plan?', o: ['It is free for the first month.', 'Customers can call for help at any time.', 'It is limited to 10 users.', 'It must be paid for monthly.'], a: 1, e: '근거: "includes 24-hour phone support". 24-hour phone support가 can call for help at any time으로 바뀌었어요. 사용자 수는 20명, 결제는 연간 청구입니다.' }
    ]
  },
  {
    id: 'p7-L5', track: 'p7', no: 5,
    title: '추론 문제', sub: 'suggested·implied·most likely, 근거 한 걸음 너머', min: 13,
    blocks: [
      { t: 'p', x: '"What is suggested about ~?", "Who most likely is Ms. Kim?", "Where would the notice most likely be found?" 추론 문제는 지문에 답이 **직접 쓰여 있지 않습니다.** 하지만 토익의 추론은 상상이 아니라 **근거 문장에서 딱 한 걸음만** 나간 결론이에요. 두 걸음 이상 가면 오답입니다.' },
      { t: 'table', head: ['질문 형태', '묻는 것', '단서'], rows: [
        ['Who most likely is ~?', '직업·직책', '업무 내용, 쓰는 용어, 서명란'],
        ['Where does ~ most likely work?', '근무처·업종', '언급되는 상품·서비스'],
        ['For whom is the notice intended?', '대상 독자', 'Dear ~, 공지 대상, 지시 내용'],
        ['What is suggested about ~?', '간접적으로 알 수 있는 사실', '시제, 비교, 조건 표현'],
        ['What will ~ most likely do next?', '다음 행동', '지문 마지막 문장 (I will ~, Please ~)']
      ] },
      { t: 'rule', h: '"한 걸음 추론" 원칙', x: '근거: "This is the third time this year that the printer has broken down."\n✔ 한 걸음: The printer has had problems before. (이전에도 고장 났다)\n✘ 두 걸음: The company will buy a new printer. (지문에 근거 없음)\n✘ 두 걸음: The printer is very old. (가능하지만 근거 없음)' },
      { t: 'ex', en: 'I have attached the *floor plans and the revised budget* for the Lakeview lobby. Let me know if the client wants changes to the lighting.', ko: '레이크뷰 로비의 평면도와 수정된 예산을 첨부했습니다. 고객이 조명 변경을 원하면 알려 주세요.', note: 'Who most likely is the writer? → An interior designer / architect (평면도, 조명, 고객)' },
      { t: 'ex', en: '*Before your first day*, please complete the online safety course and bring a photo ID.', ko: '첫 출근 전에 온라인 안전 교육을 이수하고 사진이 있는 신분증을 지참해 주세요.', note: 'For whom is the email intended? → A newly hired employee' },
      { t: 'ex', en: 'Thanks to the new software, our *processing time has been cut in half*.', ko: '새 소프트웨어 덕분에 처리 시간이 절반으로 줄었다.', note: 'suggested: The software has improved efficiency. (O) / The company hired more staff. (X)' },
      { t: 'ex', en: 'I\'ll *send you the signed contract* as soon as our lawyer reviews it.', ko: '변호사가 검토하는 대로 서명된 계약서를 보내 드리겠습니다.', note: 'What will the writer most likely do next? → Wait for a legal review / send a document' },
      { t: 'tip', x: '실전 팁: "Who most likely is ~?" 문제는 **이메일 서명란(Name, Title, Company)**과 **본인이 하는 업무 묘사**를 먼저 보세요. "I will check our inventory"라고 하면 재고 담당·매장 직원일 확률이 높습니다.' },
      { t: 'trap', x: '함정: 상식적으로 그럴듯한 보기. "새 지점을 연다 → 매출이 증가했을 것이다"는 상식엔 맞지만 지문에 근거가 없으면 오답입니다. 정답 보기는 반드시 **지문의 특정 문장 하나를 가리킬 수 있어야** 해요.' }
    ],
    check: [
      { s: 'Dear Mr. Osei,\nI enjoyed meeting you at the job fair last week. As discussed, I have attached my résumé and three writing samples. I look forward to hearing from you about the editorial position.\n\nWho most likely is Mr. Osei?', o: ['A job applicant', 'A university professor', 'A newspaper subscriber', 'A hiring manager'], a: 3, e: '근거: "I have attached my résumé" + "the editorial position". 이력서를 받고 채용 결과를 알려 줄 사람이므로 채용 담당자로 추론할 수 있어요.' },
      { s: 'Starting next month, the cafeteria will stay open until 7 P.M. on weekdays. This change is in response to requests from employees who work the late shift.\n\nWhat is suggested about some employees?', o: ['They work in the evening.', 'They prefer to eat at home.', 'They want a new menu.', 'They will receive a pay raise.'], a: 0, e: '근거: "requests from employees who work the late shift". late shift가 work in the evening으로 바뀐 한 걸음 추론입니다. 메뉴·급여는 근거가 없어요.' },
      { s: 'Please note that the lobby doors will be locked at 9 P.M. Guests returning after this time should use their room key card to enter through the side entrance.\n\nWhere would this notice most likely be found?', o: ['In a library', 'In a hotel', 'In a restaurant', 'In a train station'], a: 1, e: '근거: "Guests" + "their room key card". 객실 키카드를 쓰는 투숙객이 언급되므로 호텔임을 추론할 수 있어요.' },
      { s: 'Hi Paolo, the client approved the final design this morning. I\'ll forward their comments to you now so you can start preparing the files for the printer.\n\nWhat will the writer most likely do next?', o: ['Meet with the client', 'Revise the design', 'Send some feedback to Paolo', 'Visit a printing company'], a: 2, e: '근거: "I\'ll forward their comments to you now". forward their comments가 Send some feedback으로 바뀌었어요. 인쇄 준비는 Paolo가 할 일입니다.' }
    ]
  },
  {
    id: 'p7-L6', track: 'p7', no: 6,
    title: '동의어 문제', sub: '사전 뜻이 아니라 문맥 속 뜻을 고르는 문제', min: 10,
    blocks: [
      { t: 'p', x: '"the word \'cover\' in paragraph 2, line 3, is closest in meaning to" 동의어 문제는 **가장 빨리 풀 수 있는 유형**이지만 함정도 확실합니다. 출제 단어는 거의 항상 **뜻이 여러 개인 다의어**이고, 보기에는 그 단어의 **다른 뜻**들이 미끼로 깔려 있어요.' },
      { t: 'rule', h: '동의어 문제 3단계', x: '① 해당 문단·줄로 가서 **문장 전체**를 읽는다 (단어만 보지 않기)\n② 그 단어 자리를 **빈칸으로 생각**하고 들어갈 말을 예측\n③ 보기 4개를 하나씩 넣어 보고 **문장 의미가 그대로 유지되는 것** 선택' },
      { t: 'table', head: ['출제 단어', '문맥 A → 동의어', '문맥 B → 동의어'], rows: [
        ['cover', 'cover the cost → pay for', 'cover the topic → discuss'],
        ['address', 'address the issue → deal with', 'address the audience → speak to'],
        ['carry', 'carry a product → stock', 'carry a box → hold'],
        ['run', 'run a business → manage', 'the offer runs until May → continue'],
        ['figure', 'sales figures → numbers', 'a key figure → person'],
        ['reflect', 'reflect recent changes → show', 'reflect on the year → think about'],
        ['meet', 'meet the deadline → satisfy', 'meet a client → see']
      ] },
      { t: 'ex', en: 'The grant will *cover* the cost of new laboratory equipment.', ko: '보조금으로 새 실험 장비 비용을 충당할 것이다.', note: 'cover = pay for (비용을 대다). "hide"는 사전 뜻이지만 오답' },
      { t: 'ex', en: 'Our store now *carries* a full line of organic skin-care products.', ko: '저희 매장은 이제 유기농 스킨케어 제품 전 라인을 취급합니다.', note: 'carries = sells / stocks. "transports"는 미끼' },
      { t: 'ex', en: 'The updated manual *reflects* the recent changes to our safety procedures.', ko: '개정된 매뉴얼에는 최근 안전 절차 변경 사항이 반영되어 있다.', note: 'reflects = shows / includes' },
      { t: 'ex', en: 'Ms. Grant was hired to *address* the decline in customer satisfaction.', ko: '그랜트 씨는 고객 만족도 하락 문제를 해결하기 위해 채용되었다.', note: 'address = deal with / handle. "speak"·"locate"는 미끼' },
      { t: 'tip', x: '실전 팁: 보기 중 **제일 먼저 떠오르는 기본 뜻**의 단어는 일단 의심하세요. 출제자가 동의어 문제를 내는 이유 자체가 "기본 뜻 말고 문맥 뜻을 아느냐"를 보려는 것입니다.' },
      { t: 'trap', x: '함정: 보기 단어를 넣으면 **문법은 맞는데 의미가 바뀌는** 경우. "The offer runs until May"에 operates를 넣으면 문장은 되지만 "기간이 이어진다"는 뜻이 사라집니다. 정답은 lasts / continues예요.' }
    ],
    check: [
      { s: 'Our travel policy has been revised. The company will now cover the cost of checked baggage on all business flights.\n\nIn the memo, the word "cover" in paragraph 1, line 2, is closest in meaning to', o: ['hide', 'report', 'protect', 'pay'], a: 3, e: '근거: "cover the cost of checked baggage". 비용을 "부담하다"라는 뜻이므로 pay가 정답입니다. hide·protect는 cover의 다른 사전 뜻 미끼예요.' },
      { s: 'The spring promotion runs through April 30, so be sure to place your order before then to receive 15 percent off.\n\nIn the advertisement, the word "runs" in paragraph 1, line 1, is closest in meaning to', o: ['continues', 'operates', 'hurries', 'competes'], a: 0, e: '근거: "runs through April 30". 행사가 4월 30일까지 "계속되다"라는 뜻이므로 continues가 정답. operates는 기계·사업 운영의 의미입니다.' },
      { s: 'Before the board meeting, Mr. Sato reviewed the latest sales figures from each region.\n\nIn the email, the word "figures" in paragraph 2, line 1, is closest in meaning to', o: ['shapes', 'numbers', 'people', 'drawings'], a: 1, e: '근거: "the latest sales figures". 매출 "수치"이므로 numbers가 정답. people은 "a key figure(중요 인물)"일 때의 뜻이에요.' },
      { s: 'All suppliers must meet our quality standards before their products can be sold in our stores.\n\nIn the notice, the word "meet" in paragraph 1, line 1, is closest in meaning to', o: ['greet', 'join', 'satisfy', 'gather'], a: 2, e: '근거: "meet our quality standards". 기준을 "충족하다"이므로 satisfy가 정답. greet은 사람을 만날 때의 뜻입니다.' }
    ]
  },
  {
    id: 'p7-L7', track: 'p7', no: 7,
    title: '문자·채팅 의도 파악', sub: '인용문의 "속뜻"은 바로 앞 말에 대한 반응이다', min: 11,
    blocks: [
      { t: 'p', x: '문자 메시지·온라인 채팅 지문에는 거의 항상 **"At 2:15 P.M., what does Ms. Cho most likely mean when she writes, \'...\'?"** 문제가 붙습니다. "Sure thing.", "That\'s a relief.", "I\'m on it." 같은 짧은 구어 표현의 **속뜻**을 묻는 문제예요. 핵심은 하나, **그 말이 무엇에 대한 대답인지**입니다.' },
      { t: 'rule', h: '의도 파악 3단계', x: '① 인용문이 나온 **시간·화자**를 지문에서 찾는다\n② 인용문 **바로 앞 메시지**(상대방의 질문·제안·문제 제기)를 읽는다\n③ 인용문 **바로 뒤 메시지**로 해석이 맞는지 확인한다\n→ 인용문 자체의 사전적 의미보다 **앞뒤 대화에서의 기능**(수락/거절/안심/동의/놀람)을 고른다' },
      { t: 'table', head: ['인용 표현', '자주 나오는 속뜻', '확인 포인트'], rows: [
        ['I\'m on it. / I\'ll take care of it.', '내가 바로 처리하겠다', '앞에 요청·문제 제기'],
        ['That works for me. / Sounds good.', '제안을 수락한다', '앞에 시간·방법 제안'],
        ['That\'s a relief.', '걱정하던 문제가 해결돼 안심', '앞에 좋은 소식'],
        ['You read my mind.', '나도 같은 생각이었다', '앞에 제안'],
        ['I wouldn\'t count on it.', '가능성이 낮다', '앞에 기대·희망'],
        ['Tell me about it.', '정말 그렇다 (강한 동의)', '앞에 불평·감탄']
      ] },
      { t: 'ex', en: 'Kevin Moss [9:12 A.M.]: The projector in Room 4 isn\'t turning on.\nAna Ruiz [9:13 A.M.]: *I\'m on it.*', ko: '케빈 모스 [오전 9:12]: 4번 방 프로젝터가 안 켜져요.\n아나 루이즈 [오전 9:13]: 제가 처리할게요.', note: '속뜻 → She will fix the projector. / She will handle the problem.' },
      { t: 'ex', en: 'Jin Park [3:40 P.M.]: Could we move the call to Thursday at 10?\nLiam Ford [3:41 P.M.]: *That works for me.*', ko: '박진 [오후 3:40]: 통화를 목요일 10시로 옮길 수 있을까요?\n리엄 포드 [오후 3:41]: 저는 괜찮아요.', note: '속뜻 → He agrees to the new time.' },
      { t: 'ex', en: 'Rosa Diaz [11:05 A.M.]: The shipment arrived, and nothing was damaged.\nTom Hale [11:06 A.M.]: *What a relief!*', ko: '로사 디아즈 [오전 11:05]: 배송품이 도착했고 파손된 건 없어요.\n톰 헤일 [오전 11:06]: 정말 다행이네요!', note: '속뜻 → He was worried about the condition of the items.' },
      { t: 'ex', en: 'Mei Chen [1:20 P.M.]: Do you think the printer will be fixed by tomorrow?\nOmar Ali [1:22 P.M.]: *I wouldn\'t count on it.* The part has to be ordered from overseas.', ko: '메이 첸 [오후 1:20]: 프린터가 내일까지 고쳐질까요?\n오마르 알리 [오후 1:22]: 기대 안 하는 게 좋을 거예요. 부품을 해외에서 주문해야 하거든요.', note: '속뜻 → The repair will probably take longer. (뒤 문장이 근거 보강)' },
      { t: 'tip', x: '실전 팁: 인용문의 **시간 표시를 먼저 찾아** 그 위아래 한 줄씩만 읽어도 대부분 풀립니다. 채팅 전체를 다 읽을 필요는 없어요. 다만 3인 이상 채팅이면 **누가 누구에게 답하는지** 이름을 꼭 확인하세요.' },
      { t: 'trap', x: '함정: 인용문의 **글자 그대로의 뜻**을 담은 보기. "I\'m on it"을 "He is standing on something"처럼, "Tell me about it"을 "He wants more information"으로 고르면 오답입니다. 출제자는 직역 보기를 반드시 하나 넣어 둡니다.' }
    ],
    check: [
      { s: 'Nora Kim [2:02 P.M.]: The client just asked for the revised quote by 4 P.M. today.\nEli Grant [2:03 P.M.]: I\'m on it.\nNora Kim [2:04 P.M.]: Thanks. Copy me on the email, please.\n\nAt 2:03 P.M., what does Mr. Grant most likely mean when he writes, "I\'m on it"?', o: ['He is already at the client\'s office.', 'He disagrees with the deadline.', 'He will prepare the updated quote.', 'He has finished the report.'], a: 2, e: '근거: 앞 메시지 "asked for the revised quote by 4 P.M." 수정 견적 요청에 대한 대답이므로 "내가 처리하겠다"는 뜻입니다. 뒤의 "Copy me on the email"도 그가 견적을 보낼 것임을 뒷받침해요.' },
      { s: 'Sara Lopez [10:15 A.M.]: Should we order lunch for the training session tomorrow?\nDev Patel [10:16 A.M.]: You read my mind. I was just about to ask you the same thing.\n\nAt 10:16 A.M., what does Mr. Patel most likely mean when he writes, "You read my mind"?', o: ['He had the same idea.', 'He forgot about the session.', 'He wants Ms. Lopez to choose the menu.', 'He thinks lunch is too expensive.'], a: 0, e: '근거: 바로 뒤 "I was just about to ask you the same thing." 상대의 제안이 자기 생각과 같았다는 뜻이므로 He had the same idea가 정답입니다.' },
      { s: 'Ian Shaw [4:30 P.M.]: Will the new office chairs be delivered before Monday?\nLena Ross [4:32 P.M.]: I wouldn\'t count on it. The supplier said they\'re back-ordered.\n\nAt 4:32 P.M., what does Ms. Ross most likely mean when she writes, "I wouldn\'t count on it"?', o: ['She has counted the chairs.', 'She will contact a new supplier.', 'She thinks Monday is a holiday.', 'The chairs will probably arrive late.'], a: 3, e: '근거: 뒤 문장 "they\'re back-ordered"(재고가 없어 주문이 밀림). 월요일 전 배송 가능성이 낮다는 뜻이므로 늦게 도착할 것이라는 보기가 정답입니다. counted는 직역 함정이에요.' },
      { s: 'Paul Moreno [9:40 A.M.]: The venue confirmed that the projector and microphones are included at no extra charge.\nGina Tran [9:41 A.M.]: That\'s a relief. We didn\'t budget for equipment rental.\n\nAt 9:41 A.M., what does Ms. Tran most likely mean when she writes, "That\'s a relief"?', o: ['She wants to cancel the reservation.', 'She was concerned about additional costs.', 'She needs a larger room.', 'She has already rented a projector.'], a: 1, e: '근거: 앞 "at no extra charge" + 뒤 "We didn\'t budget for equipment rental." 장비 대여 비용을 걱정했는데 무료라 안심했다는 뜻입니다.' }
    ]
  },
  {
    id: 'p7-L8', track: 'p7', no: 8,
    title: '이중·삼중 지문 연계 문제', sub: '두 지문을 잇는 "연결 고리" 찾기', min: 15,
    blocks: [
      { t: 'p', x: '176~200번 복수 지문 25문항 중 세트마다 **1~2문항은 연계 문제**입니다. 한 지문만 읽어서는 절대 답이 안 나오고, **지문 A의 정보 + 지문 B의 정보**를 합쳐야 풀려요. 어렵게 느껴지지만 출제 패턴은 매우 정형화되어 있습니다.' },
      { t: 'table', head: ['연계 패턴', '지문 A', '지문 B'], rows: [
        ['표/목록 ↔ 조건', '가격표·일정표·요금제 표', '"I chose the cheapest option" 같은 조건'],
        ['원래 계획 ↔ 변경', '최초 일정·주문 내역', '변경·취소·지연 이메일'],
        ['공고 ↔ 지원자', '구인 광고의 자격 요건', '지원자 이메일의 경력'],
        ['쿠폰·정책 ↔ 사용', '할인 조건(금액·기간)', '실제 주문서·후기'],
        ['사람 ↔ 역할', '행사 안내의 발표자 목록', '참석 후기 속 "the second speaker"']
      ] },
      { t: 'rule', h: '연계 문제 신호와 풀이', x: '신호: 질문에 **지문 A의 사람·물건이 나오는데, 답은 지문 B의 표·목록 속 정보**인 경우\n예: "How much did Mr. Lee pay?" → 이메일(A)에서 "Deluxe package를 골랐다" → 가격표(B)에서 Deluxe = $250\n풀이: ① 질문 키워드로 첫 근거 찾기 ② 그 근거에서 나온 **연결 고리(상품명·날짜·이름)**를 들고 다른 지문으로 이동 ③ 거기서 최종 답 확정' },
      { t: 'ex', en: 'Doc 1 (Price list): Basic $40 / Standard $65 / Premium $90\nDoc 2 (Email): I\'d like to *upgrade from my current plan to the next level*. I\'m on Basic now.', ko: '지문 1(가격표): 베이직 $40 / 스탠다드 $65 / 프리미엄 $90\n지문 2(이메일): 현재 요금제에서 한 단계 위로 업그레이드하고 싶습니다. 지금은 베이직이에요.', note: 'Q: How much will the customer pay? → Basic의 다음 단계 Standard = $65 (두 지문 결합)' },
      { t: 'ex', en: 'Doc 1 (Schedule): Workshop A — Room 101, 9 A.M. / Workshop B — Room 204, 1 P.M.\nDoc 2 (Email): I can only attend *in the afternoon*.', ko: '지문 1(일정표): 워크숍 A — 101호, 오전 9시 / 워크숍 B — 204호, 오후 1시\n지문 2(이메일): 저는 오후에만 참석할 수 있어요.', note: 'Q: Where will the writer most likely go? → 오후 = Workshop B → Room 204' },
      { t: 'ex', en: 'Doc 1 (Job ad): Applicants *must be fluent in Spanish*.\nDoc 2 (Letter): I lived in Madrid for six years and *worked as a translator*.', ko: '지문 1(구인 광고): 지원자는 스페인어에 능통해야 한다.\n지문 2(편지): 저는 마드리드에서 6년간 살았고 번역가로 일했습니다.', note: 'Q: What qualification does the applicant meet? → language skills' },
      { t: 'ex', en: 'Doc 1 (Coupon): 20% off orders over $100, valid until May 31.\nDoc 2 (Invoice): Order date: *June 3* / Total: $140 / Discount: $0', ko: '지문 1(쿠폰): 100달러 이상 주문 시 20% 할인, 5월 31일까지 유효.\n지문 2(송장): 주문일: 6월 3일 / 합계: $140 / 할인: $0', note: 'Q: Why was no discount applied? → 쿠폰 유효기간(5/31)이 지났다' },
      { t: 'tip', x: '실전 팁: 복수 지문에 **표·일정표·쿠폰**이 있으면 연계 문제가 거기서 나올 확률이 90% 이상입니다. 질문을 읽을 때 "이 정보가 표에 있나?"를 먼저 떠올리세요. 또 5문항 중 첫 문제는 보통 지문 1, 마지막 문제는 마지막 지문에서 단독으로 나옵니다.' },
      { t: 'trap', x: '함정: **한 지문만 보고 바로 고를 수 있게 만든 보기**. 연계 문제에는 지문 1에만 근거한 "그럴듯한 오답"이 꼭 있습니다. 예를 들어 쿠폰 문제에서 "The order was too small"은 쿠폰만 보면 그럴듯하지만, 송장에서 $140를 확인하면 오답이에요.' }
    ],
    check: [
      { s: '[Doc 1] Catering Menu: Sandwich platter $80 / Pasta buffet $150 / Grilled dinner $220\n[Doc 2] Email: For Friday\'s client lunch, let\'s skip the sandwiches this time and go with the option that costs less than $200.\n\nHow much will the writer most likely spend on catering?', o: ['$80', '$150', '$220', '$300'], a: 1, e: '근거: 이메일 "skip the sandwiches" + "costs less than $200" → 메뉴표에서 샌드위치($80) 제외, $200 미만은 파스타 뷔페($150)뿐. 두 지문을 합쳐야 풀리는 연계 문제입니다.' },
      { s: '[Doc 1] Job posting: Sales Associate — Requirements: two years of retail experience; weekend availability; driver\'s license.\n[Doc 2] Cover letter: I have worked at a clothing store for three years and am available every Saturday and Sunday. I do not currently drive.\n\nWhat requirement does the applicant NOT meet?', o: ['Retail experience', 'Weekend availability', 'Customer service training', 'A driver\'s license'], a: 3, e: '근거: 공고 "driver\'s license" vs 편지 "I do not currently drive." 운전면허 요건만 충족하지 못합니다. 경력 3년, 주말 근무는 충족이에요.' },
      { s: '[Doc 1] Conference schedule: 10:00 A.M. — Dr. Ito, "Green Packaging" (Hall A) / 2:00 P.M. — Ms. Bauer, "Retail Trends" (Hall C)\n[Doc 2] Review: The afternoon session was the highlight of my day. The speaker\'s data on online shopping was fascinating.\n\nWho gave the talk the reviewer enjoyed most?', o: ['Ms. Bauer', 'Dr. Ito', 'The conference organizer', 'The reviewer\'s manager'], a: 0, e: '근거: 후기 "The afternoon session was the highlight" + 일정표 "2:00 P.M. — Ms. Bauer". 오후 세션 = Ms. Bauer로 두 지문을 연결해야 합니다.' },
      { s: '[Doc 1] Gym notice: New members who sign up by March 15 receive one free personal training session.\n[Doc 2] Membership form: Name: Alan Brooks / Start date: March 20 / Sign-up date: March 18\n\nWhy is Mr. Brooks most likely not eligible for a free session?', o: ['He chose the wrong plan.', 'He is not a new member.', 'He registered after the deadline.', 'He did not pay the fee.'], a: 2, e: '근거: 공지 "sign up by March 15" vs 양식 "Sign-up date: March 18". 등록 마감일을 넘겨 가입했기 때문입니다. sign up by → registered after the deadline으로 패러프레이즈되었어요.' }
    ]
  },

  // ───────────────────────── 어휘 ─────────────────────────
  {
    id: 'voca-L1', track: 'voca', no: 1,
    title: '토익 빈출 콜로케이션', sub: '단어가 아니라 "짝꿍"으로 외워야 점수가 오른다', min: 12,
    blocks: [
      { t: 'p', x: 'Part 5·6 어휘 문제의 상당수는 뜻이 비슷한 보기 4개 중 **빈칸 앞뒤 단어와 짝이 맞는 것**을 고르는 문제입니다. 이렇게 늘 붙어 다니는 단어 조합을 **콜로케이션(collocation)**이라고 해요. make와 do, high와 tall처럼 뜻만으로는 구별이 안 되는 것들은 **덩어리로 외우는 수밖에 없습니다.**' },
      { t: 'table', head: ['동사', '짝 명사', '뜻'], rows: [
        ['make', 'a decision / a reservation / a payment / an effort', '결정하다 / 예약하다 / 지불하다 / 노력하다'],
        ['meet', 'a deadline / demand / requirements / expectations', '마감을 맞추다 / 수요를 충족하다 / 요건·기대를 충족하다'],
        ['place', 'an order / an advertisement', '주문하다 / 광고를 내다'],
        ['conduct', 'a survey / an inspection / research', '설문·점검·연구를 실시하다'],
        ['submit', 'a proposal / an application / a report', '제안서·지원서·보고서를 제출하다'],
        ['raise', 'funds / awareness / a concern', '기금을 모으다 / 인식을 높이다 / 우려를 제기하다'],
        ['take', 'measures / steps / effect / place', '조치를 취하다 / 시행되다 / 열리다']
      ] },
      { t: 'table', head: ['형용사/부사', '짝 단어', '뜻'], rows: [
        ['highly', 'recommended / qualified / competitive', '적극 추천되는 / 매우 자격 있는 / 경쟁이 치열한'],
        ['widely', 'available / used / known', '널리 이용 가능한 / 널리 쓰이는 / 널리 알려진'],
        ['sharp / significant', 'increase / decline', '급격한·상당한 증가/감소'],
        ['limited', 'time / budget / edition', '한정된 기간 / 제한된 예산 / 한정판'],
        ['prompt', 'response / payment', '신속한 응답 / 즉시 결제']
      ] },
      { t: 'ex', en: 'Please *place your order* by Thursday to receive it before the weekend.', ko: '주말 전에 받으시려면 목요일까지 주문해 주세요.', note: 'place an order (make an order도 쓰이지만 토익 정답은 place가 압도적)' },
      { t: 'ex', en: 'The production team worked overtime to *meet the deadline*.', ko: '생산팀은 마감을 맞추기 위해 초과 근무를 했다.', note: 'meet the deadline — keep/reach/arrive 아님' },
      { t: 'ex', en: 'The restaurant is *highly recommended* by local food critics.', ko: '그 식당은 지역 음식 평론가들에게 적극 추천받는다.', note: 'highly + recommended / qualified. 오답 미끼: greatly, heavily' },
      { t: 'ex', en: 'The city council will *conduct a survey* to gather residents\' opinions.', ko: '시의회는 주민 의견을 모으기 위해 설문 조사를 실시할 것이다.', note: 'conduct a survey / an inspection' },
      { t: 'ex', en: 'The new regulations will *take effect* on January 1.', ko: '새 규정은 1월 1일부터 시행된다.', note: 'take effect = go into effect = 시행되다' },
      { t: 'tip', x: '실전 팁: 어휘 보기 4개의 뜻이 다 그럴듯하면 **빈칸 바로 뒤 명사**를 보세요. "------- an order" → place, "------- a deadline" → meet. 해석보다 짝꿍 확인이 훨씬 빠르고 정확합니다.' },
      { t: 'trap', x: '함정: 우리말로는 자연스러운데 영어로는 틀린 조합. "마감을 지키다"를 keep a deadline, "결정을 하다"를 do a decision으로 고르기 쉽습니다. 토익은 **meet a deadline, make a decision**만 정답으로 인정해요.' }
    ],
    check: [
      { s: 'To ------- growing demand, the factory has added a second production shift.', o: ['meet', 'reach', 'arrive', 'fit'], a: 0, e: 'meet demand = 수요를 충족하다. reach는 목표·합의에, arrive는 자동사라 목적어를 못 받고, fit은 크기·일정이 맞을 때 씁니다.' },
      { s: 'Customers can ------- an order online or by calling our toll-free number.', o: ['do', 'take', 'place', 'raise'], a: 2, e: 'place an order = 주문하다. take an order는 "주문을 받다"(점원 입장)라 고객 주어와 맞지 않습니다.' },
      { s: 'Ms. Hoffman is ------- qualified for the position of regional director.', o: ['greatly', 'highly', 'heavily', 'largely'], a: 1, e: 'highly qualified = 매우 자격을 갖춘. highly는 recommended, qualified, competitive와 짝을 이루는 대표 부사입니다.' },
      { s: 'Safety inspectors will ------- a thorough inspection of the plant next Tuesday.', o: ['submit', 'attend', 'deliver', 'conduct'], a: 3, e: 'conduct an inspection = 점검을 실시하다. submit는 서류 제출, attend는 참석의 의미라 inspection과 어울리지 않습니다.' }
    ]
  },
  {
    id: 'voca-L2', track: 'voca', no: 2,
    title: '헷갈리는 어휘', sub: 'rise/raise, affect/effect, lie/lay 등 혼동 어휘 정리', min: 12,
    blocks: [
      { t: 'p', x: '토익 출제자가 가장 좋아하는 함정 중 하나가 **생긴 건 비슷한데 용법이 다른 단어 쌍**입니다. 특히 **자동사(목적어 X) vs 타동사(목적어 O)**, **명사 vs 동사** 구별이 핵심이에요. 뜻이 아니라 **빈칸 뒤에 목적어가 있는지**를 보면 대부분 풀립니다.' },
      { t: 'table', head: ['단어 쌍', '자동사 (목적어 X)', '타동사 (목적어 O)'], rows: [
        ['rise / raise', 'rise – rose – risen (오르다)', 'raise – raised – raised (~을 올리다)'],
        ['lie / lay', 'lie – lay – lain (놓여 있다, 눕다)', 'lay – laid – laid (~을 놓다)'],
        ['arise / arouse', 'arise (발생하다)', 'arouse (~을 불러일으키다)'],
        ['respond / answer', 'respond to + 명사 (응답하다)', 'answer + 명사 (~에 답하다)'],
        ['object / oppose', 'object to + 명사 (반대하다)', 'oppose + 명사 (~에 반대하다)']
      ] },
      { t: 'table', head: ['단어 쌍', '구별 포인트', '예'], rows: [
        ['affect / effect', 'affect = 동사(영향을 주다), effect = 명사(효과, 영향)', 'affect sales / have an effect on'],
        ['advice / advise', 'advice = 명사(불가산), advise = 동사', 'some advice / advise clients'],
        ['personal / personnel', 'personal = 개인적인, personnel = 직원들, 인사과', 'personal data / personnel department'],
        ['economic / economical', 'economic = 경제의, economical = 알뜰한, 경제적인', 'economic growth / an economical car'],
        ['considerable / considerate', 'considerable = 상당한, considerate = 사려 깊은', 'considerable cost / considerate host']
      ] },
      { t: 'ex', en: 'Fuel prices *rose* sharply last quarter.', ko: '지난 분기에 연료 가격이 급등했다.', note: '뒤에 목적어 없음 → 자동사 rise의 과거 rose' },
      { t: 'ex', en: 'The airline has *raised* its baggage fees.', ko: '그 항공사는 수하물 요금을 인상했다.', note: '목적어 its baggage fees 있음 → 타동사 raise' },
      { t: 'ex', en: 'Bad weather may *affect* the delivery schedule.', ko: '악천후가 배송 일정에 영향을 줄 수 있다.', note: '조동사 may 뒤 동사 자리 → affect' },
      { t: 'ex', en: 'The new policy had a positive *effect* on employee morale.', ko: '새 정책은 직원 사기에 긍정적인 영향을 미쳤다.', note: '관사 a + 형용사 positive 뒤 명사 자리 → effect' },
      { t: 'ex', en: 'Please *lay* the documents on my desk.', ko: '서류를 제 책상 위에 놓아 주세요.', note: '목적어 the documents → 타동사 lay. 자동사 lie는 "The documents lie on the desk."' },
      { t: 'tip', x: '실전 팁: rise/raise, lie/lay 문제는 해석하지 말고 **빈칸 바로 뒤를 보세요.** 명사(목적어)가 있으면 타동사 raise/lay, 부사·전치사·마침표가 오면 자동사 rise/lie입니다. 수동태(be raised)도 타동사에서만 가능해요.' },
      { t: 'trap', x: '함정: **lay가 lie의 과거형**이기도 하다는 점. "The files lay on the table all day."의 lay는 "놓았다"가 아니라 "놓여 있었다"(lie의 과거)예요. 시제와 목적어 유무를 동시에 확인해야 합니다.' }
    ],
    check: [
      { s: 'The number of online orders has ------- steadily since the new Web site was launched.', o: ['raised', 'arisen', 'aroused', 'risen'], a: 3, e: '빈칸 뒤에 목적어 없이 부사 steadily → 자동사 rise의 과거분사 risen. raised는 목적어가 필요한 타동사입니다.' },
      { s: 'The road construction is expected to ------- traffic in the downtown area for several weeks.', o: ['affect', 'effect', 'effective', 'effectively'], a: 0, e: '조동사 to 뒤 동사원형 자리 + 목적어 traffic → "영향을 주다"의 동사 affect. effect는 주로 명사로 쓰입니다.' },
      { s: 'All questions regarding employee benefits should be directed to the ------- department.', o: ['personal', 'personally', 'personnel', 'personality'], a: 2, e: '"인사과"는 personnel department. personal은 "개인적인"이라 부서명으로 쓰지 않습니다.' },
      { s: 'Our financial consultants can ------- you on how to reduce operating costs.', o: ['advice', 'advise', 'advisory', 'adviser'], a: 1, e: '조동사 can 뒤 동사원형 + 목적어 you → 동사 advise. advice는 불가산 명사입니다.' }
    ]
  },
  {
    id: 'voca-L3', track: 'voca', no: 3,
    title: '비즈니스 이메일 필수 표현', sub: 'Part 6·7 이메일에 매번 나오는 정형 표현', min: 11,
    blocks: [
      { t: 'p', x: 'Part 6와 Part 7 지문의 절반 가까이가 **이메일·편지**입니다. 비즈니스 이메일은 **정해진 틀**이 있어서 표현을 알면 목적, 요청 사항, 첨부 파일, 다음 행동 문제가 **읽자마자** 풀려요. 오늘은 이메일을 단계별로 해부해 봅니다.' },
      { t: 'table', head: ['단계', '대표 표현', '관련 문제'], rows: [
        ['목적 밝히기', 'I am writing to ~ / This is to inform you that ~', '주제·목적'],
        ['참조·후속', 'Regarding ~ / As per our conversation / Following up on ~', '이전 연락 추론'],
        ['첨부', 'Please find attached ~ / I have enclosed ~', '무엇이 첨부되었나'],
        ['요청', 'Could you please ~? / I would appreciate it if you could ~', '요청 사항'],
        ['사과', 'We apologize for any inconvenience. / We regret to inform you ~', '문제 상황'],
        ['마무리', 'Please do not hesitate to contact me. / I look forward to hearing from you.', '다음 행동']
      ] },
      { t: 'ex', en: '*Please find attached* the revised contract for your review.', ko: '검토하실 수 있도록 수정된 계약서를 첨부합니다.', note: '"What was sent with the email?" → A revised agreement' },
      { t: 'ex', en: '*I would appreciate it if you could* send the figures by Wednesday.', ko: '수요일까지 수치를 보내 주시면 감사하겠습니다.', note: '공손한 요청 → "What is the recipient asked to do?"' },
      { t: 'ex', en: '*As per our conversation* yesterday, I have rescheduled the meeting to 3 P.M.', ko: '어제 나눈 대화에 따라 회의를 오후 3시로 변경했습니다.', note: 'as per = according to. 이전에 통화·대화했음을 추론' },
      { t: 'ex', en: '*We regret to inform you that* the item you ordered is currently out of stock.', ko: '주문하신 상품이 현재 품절되었음을 알려 드리게 되어 유감입니다.', note: 'regret to inform = 나쁜 소식 예고' },
      { t: 'ex', en: 'If you have any questions, *please do not hesitate to contact* our support team.', ko: '궁금한 점이 있으시면 언제든지 지원팀에 연락해 주세요.', note: '마무리 정형 문구 — Part 6 문장 삽입 정답 단골' },
      { t: 'rule', h: '이메일 헤더 읽기', x: 'To / From: 누가 누구에게 → 관계 추론(고객↔회사, 상사↔직원)\nDate: 시제 문제 단서\nSubject: 목적 문제의 1차 단서\ncc: 참조인 → "Who else received the email?"\nAttachment: 첨부 파일명 → 첨부 문제' },
      { t: 'tip', x: '실전 팁: Part 6 문장 삽입 빈칸이 **이메일 마지막 단락**에 있으면 "Please do not hesitate to contact me", "I look forward to working with you" 같은 마무리 문구가 정답일 확률이 높습니다.' },
      { t: 'trap', x: '함정: **attached와 enclosed의 차이**를 묻는 건 아니지만, "Please find attached"를 "찾아 달라"로 해석하면 요청 문제를 틀립니다. 이건 요청이 아니라 **"첨부했습니다"라는 안내**예요. 마찬가지로 "Thank you for your patience"는 지연·문제 상황이 있었다는 신호입니다.' }
    ],
    check: [
      { s: 'Dear Ms. Wong,\n------- our phone conversation this morning, I am sending you the updated floor plan for the new office.', o: ['Instead of', 'Regardless of', 'In spite of', 'Following'], a: 3, e: 'Following ~ = ~에 이어, ~에 따라. 아침 통화의 후속으로 자료를 보낸다는 흐름입니다. 나머지는 대조·무관의 의미라 맞지 않아요.' },
      { s: 'I would ------- it if you could review the attached budget proposal by Friday.', o: ['thank', 'appreciate', 'welcome', 'please'], a: 1, e: 'I would appreciate it if you could ~ = ~해 주시면 감사하겠습니다. 가목적어 it과 함께 쓰는 정형 표현은 appreciate입니다.' },
      { s: 'We ------- to inform you that the conference has been postponed due to unforeseen circumstances.', o: ['regret', 'apologize', 'sorry', 'excuse'], a: 0, e: 'regret to inform you that ~ = ~을 알려 드리게 되어 유감입니다. apologize는 for와 함께 쓰고, sorry는 형용사라 be동사가 필요합니다.' },
      { s: 'Please find ------- a copy of the signed agreement for your records.', o: ['attaching', 'attach', 'attached', 'attachment'], a: 2, e: 'Please find attached ~ = ~을 첨부합니다. find + 목적어 + 과거분사 구조에서 목적어(a copy)가 뒤로 간 정형 표현이라 attached가 정답입니다.' }
    ]
  },
  {
    id: 'voca-L4', track: 'voca', no: 4,
    title: '숫자·날짜·단위 표현', sub: '가격·기간·증감·마감 표현을 정확히 읽기', min: 11,
    blocks: [
      { t: 'p', x: '송장, 일정표, 가격표, 실적 기사… Part 7에는 숫자가 가득합니다. 숫자 자체는 쉬운데 틀리는 이유는 **숫자를 둘러싼 전치사·표현**을 잘못 읽어서예요. "by Friday"와 "until Friday", "rose by 10%"와 "rose to 10%"는 완전히 다른 정보입니다.' },
      { t: 'table', head: ['표현', '뜻', '예'], rows: [
        ['by + 시점', '~까지 (완료 마감)', 'Submit it by May 5.'],
        ['until + 시점', '~까지 (계속)', 'The sale runs until May 5.'],
        ['within + 기간', '~ 이내에', 'within 30 days of purchase'],
        ['no later than', '늦어도 ~까지', 'no later than noon'],
        ['effective + 날짜', '~부터 시행', 'effective July 1'],
        ['as of + 날짜', '~부로, ~ 기준', 'as of today']
      ] },
      { t: 'table', head: ['증감 표현', '의미', '예'], rows: [
        ['increase by 10%', '10%만큼 증가 (차이)', '$100 → $110'],
        ['increase to $110', '$110로 증가 (결과값)', '$100 → $110'],
        ['double / triple', '두 배 / 세 배가 되다', 'Sales doubled.'],
        ['up to', '최대 ~까지', 'up to 50% off'],
        ['at least / a minimum of', '최소 ~', 'at least three years']
      ] },
      { t: 'ex', en: 'All expense reports must be submitted *no later than* the 25th of each month.', ko: '모든 경비 보고서는 늦어도 매월 25일까지 제출해야 한다.', note: 'no later than = by. 25일이 마지막 기한' },
      { t: 'ex', en: 'Revenue *increased by 12 percent* compared to the previous year.', ko: '매출이 전년 대비 12% 증가했다.', note: 'by = 증가 폭. "rose to 12 percent"는 결과 수치' },
      { t: 'ex', en: 'Items may be returned *within 30 days of* delivery.', ko: '상품은 배송 후 30일 이내에 반품할 수 있다.', note: '40일째 반품 → 불가: 추론·연계 문제 단골' },
      { t: 'ex', en: 'The parking garage can hold *up to* 500 vehicles.', ko: '그 주차장은 최대 500대를 수용할 수 있다.', note: 'up to = 최대. "at least 500"과 반대 의미' },
      { t: 'ex', en: '*Effective* September 1, the office will open at 8:30 A.M.', ko: '9월 1일부터 사무실은 오전 8시 30분에 문을 연다.', note: 'effective + 날짜 = 그날부터 시행' },
      { t: 'tip', x: '실전 팁: 숫자 문제는 계산보다 **조건 확인**입니다. "orders over $50"에 정확히 $50 주문이면? over는 초과라 해당되지 않아요. Part 7 연계 문제는 이런 경계값을 일부러 노립니다. 금액·날짜·수량을 보면 **경계 표현(over, at least, by, within)**에 동그라미!' },
      { t: 'trap', x: '함정: **by와 until**. "Please return the books by Monday."는 월요일까지 반납 완료, "The library is closed until Monday."는 월요일까지 계속 휴관(월요일에 개관). 둘 다 "~까지"로 해석하면 Part 5 전치사 문제와 Part 7 날짜 문제를 동시에 틀립니다.' }
    ],
    check: [
      { s: 'Please return the signed forms to the human resources office ------- Friday, June 7.', o: ['until', 'by', 'during', 'within'], a: 1, e: 'return(반납 완료)이라는 일회성 동작의 마감 → by. until은 상태가 계속될 때(stay open until) 씁니다. within은 뒤에 기간(three days)이 와야 해요.' },
      { s: 'The museum will remain closed ------- the end of the month while the roof is being repaired.', o: ['by', 'within', 'until', 'since'], a: 2, e: 'remain closed(계속 닫혀 있다)라는 지속 상태 → until. by는 완료 마감에 씁니다.' },
      { s: 'Thanks to the new marketing campaign, quarterly sales increased ------- 18 percent.', o: ['by', 'at', 'on', 'for'], a: 0, e: 'increase by + 수치 = ~만큼 증가하다(증가 폭). 결과값을 말할 때는 to를 씁니다.' },
      { s: 'Customers who spend $100 or more will receive a gift card worth ------- $25.', o: ['over than', 'more', 'within', 'up to'], a: 3, e: 'up to $25 = 최대 25달러. over than은 틀린 표현(more than이 맞음)이고, more 단독은 수치 앞에 못 오며, within은 기간·범위에 씁니다.' }
    ]
  }
]);
