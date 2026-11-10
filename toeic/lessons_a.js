// 강의 A: 입문(intro) 2강 + Part 5 문법·어휘 16강
LESSON_ADD([
  {
    id: 'intro-01', track: 'intro', no: 1,
    title: '토익 시험 구조와 RC 시간 관리', sub: '7개 파트 구성, RC 75분 배분, 점수 체계 한눈에 보기', min: 10,
    blocks: [
      { t: 'p', x: '토익은 **LC(듣기) 100문항 45분 + RC(읽기) 100문항 75분**, 총 200문항을 약 2시간 동안 쉬는 시간 없이 푸는 시험이에요. 점수는 LC 5~495점, RC 5~495점을 더해 **10~990점**으로 나옵니다.\n이번 강의에서는 RC 고득점의 출발점인 **시간 관리**를 먼저 잡고 갑니다. RC는 실력보다 시간 때문에 점수를 잃는 경우가 훨씬 많거든요.' },
      { t: 'table', head: ['파트', '유형', '문항 수', '시간'], rows: [
        ['Part 1', '사진 묘사 (LC)', '6', 'LC 45분'],
        ['Part 2', '질의응답 (LC)', '25', 'LC 45분'],
        ['Part 3', '짧은 대화 (LC)', '39', 'LC 45분'],
        ['Part 4', '짧은 담화 (LC)', '30', 'LC 45분'],
        ['Part 5', '단문 빈칸 채우기 (RC)', '30', '권장 10~11분'],
        ['Part 6', '장문 빈칸 채우기 (RC)', '16 (4지문×4)', '권장 8~9분'],
        ['Part 7', '독해 (RC)', '54 (단일 29 + 복수 25)', '권장 55분']
      ] },
      { t: 'rule', h: 'RC 75분 황금 배분', x: '**Part 5: 문제당 20초 → 약 10분**\n**Part 6: 지문당 2분 → 약 8분**\n**Part 7: 남은 55분 이상 확보**\n→ Part 5·6을 **18~20분 안에** 끝내는 것이 모든 전략의 기본입니다.' },
      { t: 'ex', en: 'All employees must submit their expense reports ------- Friday.', ko: '모든 직원은 금요일까지 경비 보고서를 제출해야 한다.', note: 'Part 5 예시: 빈칸 앞뒤만 보고 by(~까지)를 고르는 데 5초면 충분한 유형' },
      { t: 'ex', en: 'The renovation of the lobby is expected to begin next month. ------- , visitors should use the side entrance.', ko: '로비 보수 공사는 다음 달에 시작될 예정이다. 그동안 방문객은 옆문을 이용해야 한다.', note: 'Part 6 예시: 앞 문장과의 관계를 봐야 In the meantime 같은 연결어를 고를 수 있음' },
      { t: 'ex', en: 'What is the purpose of the e-mail?', ko: '이메일의 목적은 무엇인가?', note: 'Part 7 단골 질문: 첫 단락에서 답이 나오는 경우가 대부분' },
      { t: 'rule', h: 'Part 7 내부 배분', x: '단일 지문(147~175번): 약 25분\n이중 지문(176~185번): 세트당 5~6분 × 2\n삼중 지문(186~200번): 세트당 6~7분 × 3\n→ 복수 지문은 문제 5개가 한 세트라 **한 세트를 붙잡고 늘어지면 뒤가 무너집니다.**' },
      { t: 'ex', en: 'According to the schedule, when will Mr. Ortiz arrive in Singapore?', ko: '일정표에 따르면 오르티스 씨는 언제 싱가포르에 도착하는가?', note: '세부 사항 문제: 질문의 키워드(Mr. Ortiz, Singapore)를 지문에서 스캔' },
      { t: 'table', head: ['점수대', '대략적 수준', 'RC 목표 정답 수(참고)'], rows: [
        ['600점대', '기본 문법·어휘 이해, 취업 지원 최소선', 'RC 약 55~60개'],
        ['750점대', '대부분 기업 우대 기준, 업무 문서 이해 가능', 'RC 약 70~75개'],
        ['850점 이상', '해외 영업·외국계 우대, 복수 지문도 안정적', 'RC 약 85개 이상'],
        ['900점 이상', '상위권, 실수 관리가 관건', 'RC 약 90개 이상']
      ] },
      { t: 'tip', x: '실전 팁: RC를 시작하자마자 **시계를 보고 Part 5 종료 목표 시각을 메모**하세요. 예를 들어 RC 시작이 10:55라면 Part 5는 11:06, Part 6는 11:14까지. 목표 시각을 넘기면 모르는 문제는 찍고 넘어갑니다.' },
      { t: 'tip', x: '마킹은 **한 페이지(또는 한 지문)를 다 풀 때마다** 바로바로 하세요. 마지막에 몰아서 마킹하다가 시간이 부족해 수십 문항을 날리는 사례가 매회 나옵니다.' },
      { t: 'trap', x: '함정: "Part 5부터 완벽하게 풀어야 한다"는 생각. 한 문제에 1분 이상 고민하면 그 1분은 Part 7의 3문제를 잃는 비용이 됩니다. **모르면 찍고 표시한 뒤, 시간이 남으면 돌아오세요.**' }
    ],
    check: [
      { s: 'TOEIC RC 75분 중 Part 7에 확보해야 하는 권장 시간은?', o: ['약 55분', '약 30분', '약 40분', '약 70분'], a: 0, e: 'Part 5(약 10분)와 Part 6(약 8분)을 18~20분 안에 끝내고 Part 7에 55분 이상을 남기는 것이 기본 배분이에요.' },
      { s: 'RC Part 6의 문항 수와 구성으로 옳은 것은?', o: ['30문항, 단문 빈칸', '16문항, 4개 지문 × 4문항', '54문항, 단일·복수 지문', '25문항, 질의응답'], a: 1, e: 'Part 6는 4개 지문에 빈칸 4개씩, 총 16문항이에요. 30문항은 Part 5, 54문항은 Part 7입니다.' },
      { s: 'Part 5를 권장 시간 안에 풀려면 한 문제에 평균 몇 초를 써야 하는가?', o: ['약 60초', '약 45초', '약 20초', '약 5초'], a: 2, e: '30문항을 10분 안에 끝내려면 문제당 평균 20초예요. 품사 문제는 5초, 어휘 문제는 30초처럼 유형별로 강약을 조절합니다.' },
      { s: '토익 총점의 범위로 옳은 것은?', o: ['0~1000점', '100~990점', '0~990점', '10~990점'], a: 3, e: 'LC와 RC가 각각 5~495점이므로 총점은 10~990점이에요.' }
    ]
  },
  {
    id: 'intro-02', track: 'intro', no: 2,
    title: '점수대별 학습 전략', sub: '600 · 750 · 850+ 목표에 따라 공부 순서가 달라진다', min: 10,
    blocks: [
      { t: 'p', x: '같은 RC라도 **목표 점수에 따라 먼저 잡아야 할 영역이 완전히 다릅니다.** 600점이 목표인데 삼중 지문부터 붙잡거나, 850점이 목표인데 품사 문제만 반복하면 시간 대비 효율이 떨어져요.\n이번 강의에서 내 목표에 맞는 로드맵을 정하고 나머지 강의를 그 순서대로 들으세요.' },
      { t: 'rule', h: '600점 목표: 기본기로 확실한 점수 챙기기', x: '**품사 자리·동사 형태·수일치·시제** 같은 Part 5 기본 문법을 먼저 끝내세요.\n토익 빈출 어휘 1,000개를 우선 암기합니다.\nPart 7은 **단일 지문 위주로** 풀고, 복수 지문은 문제를 먼저 읽고 쉬운 세부 사항 문제만 골라 풉니다.' },
      { t: 'ex', en: 'The manager made a ------- decision about the budget.', ko: '매니저는 예산에 관해 신속한 결정을 내렸다.', note: '600점 핵심 유형: 관사와 명사 사이 → 형용사(quick). 해석 없이 자리로 푸는 문제' },
      { t: 'ex', en: 'Each of the applicants ------- required to submit two references.', ko: '지원자 각각은 추천서 두 부를 제출해야 한다.', note: '600점 핵심 유형: Each of + 복수명사 → 단수 동사 is' },
      { t: 'rule', h: '750점 목표: 구문과 시간 관리', x: '**준동사(to부정사·동명사·분사), 관계사, 접속사 vs 전치사**를 완성합니다.\nPart 6 **문장 삽입·연결어** 문제에 익숙해지세요.\nPart 7은 모든 지문을 끝까지 푸는 연습, 즉 **시간 안에 100문항 완주**가 목표입니다.' },
      { t: 'ex', en: '------- the heavy rain, the outdoor festival was held as planned.', ko: '폭우에도 불구하고 야외 축제는 예정대로 열렸다.', note: '750점 핵심 유형: 뒤에 명사구 → 전치사 Despite (Although는 접속사라 탈락)' },
      { t: 'rule', h: '850점 이상 목표: 어휘의 깊이와 실수 제로', x: '**콜로케이션·어법이 비슷한 어휘 문제**(e.g. accommodate vs adapt)에서 갈립니다.\n가정법 도치, 복합관계사 같은 고난도 문법을 정리하세요.\nPart 7 **연계 문제·추론·동의어** 문제의 정답률을 끌어올리고, **10분 이상 남기고 검토**하는 것을 목표로 합니다.' },
      { t: 'ex', en: 'Had the shipment arrived on time, we ------- the order by now.', ko: '선적물이 제때 도착했더라면, 우리는 지금쯤 주문을 처리했을 것이다.', note: '850점 핵심 유형: Had + 주어 + p.p. = If 가정법 과거완료의 도치 → would have completed' },
      { t: 'table', head: ['목표', '핵심 공부', '모의고사 RC 목표 소요 시간', '우선순위 강의'], rows: [
        ['600', '기본 문법 + 빈출 어휘', '75분 안에 90문항 이상 풀기', 'p5-01 ~ p5-07'],
        ['750', '구문 + Part 6·7 전략', '75분 안에 100문항 완주', 'p5-05 ~ p5-11, p6 트랙'],
        ['850+', '고난도 어휘·연계 독해', '65분 완주 + 10분 검토', 'p5-12 ~ p5-16, p7 트랙']
      ] },
      { t: 'tip', x: '실전 팁: 오답 노트는 **틀린 이유를 한 줄로** 적으세요. "몰라서"가 아니라 "Each 뒤 단수 동사를 놓침", "시간 단서 by next month를 못 봄"처럼 적어야 같은 실수가 반복되지 않습니다.' },
      { t: 'trap', x: '함정: 모의고사만 반복해서 푸는 공부. 실력이 쌓이지 않은 상태에서 문제만 풀면 **점수가 정체**됩니다. 모의고사 1회를 풀면 해설 복습과 어휘 정리에 그 두 배의 시간을 쓰세요.' }
    ],
    check: [
      { s: '600점 목표 학습자가 가장 먼저 완성해야 할 영역은?', o: ['삼중 지문 연계 문제', '품사 자리·수일치 같은 Part 5 기본 문법', '가정법 도치 구문', '고난도 콜로케이션 어휘'], a: 1, e: '600점대는 해석 없이 자리와 형태로 풀리는 기본 문법 문제에서 확실히 점수를 챙기는 것이 가장 효율적이에요.' },
      { s: '------- the delay in shipping, the store kept its customers informed.', o: ['Although', 'Because', 'Despite', 'Unless'], a: 2, e: '빈칸 뒤가 the delay라는 명사구이므로 전치사 Despite가 정답이에요. Although·Because·Unless는 모두 절을 이끄는 접속사입니다.' },
      { s: 'Each of the new interns ------- assigned a mentor last week.', o: ['were', 'are', 'have been', 'was'], a: 3, e: 'Each of + 복수명사는 단수 취급하고, last week라는 과거 시점 단서가 있으므로 was가 정답이에요.' },
      { s: '850점 이상을 목표로 할 때 RC 모의고사에서 세워야 할 시간 목표로 가장 알맞은 것은?', o: ['약 65분 안에 완주하고 남은 시간에 검토', '75분 동안 Part 5만 완벽하게', 'Part 7 단일 지문만 풀기', '75분 안에 90문항 풀기'], a: 0, e: '850점 이상은 실수 관리가 핵심이라, 65분 안에 완주한 뒤 약 10분을 검토에 쓰는 것이 이상적이에요.' }
    ]
  }
]);

LESSON_ADD([
  {
    id: 'p5-01', track: 'p5', no: 1,
    title: '품사 자리 찾기', sub: '명사·형용사·부사가 들어갈 자리를 5초 만에', min: 10,
    blocks: [
      { t: 'p', x: 'Part 5 30문항 중 **매회 7~9문항이 품사 문제**예요. 보기가 같은 어근(succeed, success, successful, successfully)으로 되어 있으면 **해석하지 말고 빈칸 앞뒤만 보세요.** 자리만 알면 5초 안에 풀리는, 가장 확실한 점수 창고입니다.' },
      { t: 'rule', h: '명사 자리', x: '관사(a/an/the)·소유격(his, the company\'s)·형용사 뒤 → **명사**\n주어·목적어·보어 자리 → **명사**\n전치사 뒤 → **명사(또는 동명사)**' },
      { t: 'ex', en: 'We carefully reviewed the *proposal* before the meeting.', ko: '우리는 회의 전에 그 제안서를 꼼꼼히 검토했다.', note: '관사 the 뒤, 동사의 목적어 → 명사 proposal' },
      { t: 'ex', en: 'Ms. Lee expressed her *appreciation* for the team\'s hard work.', ko: '이 씨는 팀의 노고에 감사를 표했다.', note: '소유격 her 뒤 → 명사 appreciation' },
      { t: 'rule', h: '형용사 자리', x: '관사와 명사 사이: a ___ plan → **형용사**\nbe동사·become·remain·seem 뒤(보어) → **형용사**\n5형식 목적격 보어: make/keep/find + 목적어 + ___ → **형용사**' },
      { t: 'ex', en: 'The new software is *compatible* with most operating systems.', ko: '새 소프트웨어는 대부분의 운영 체제와 호환된다.', note: 'be동사 is 뒤 보어 자리 → 형용사 compatible' },
      { t: 'ex', en: 'Please keep the storage room *accessible* at all times.', ko: '창고는 항상 접근 가능한 상태로 유지해 주세요.', note: 'keep + 목적어 + 형용사(목적격 보어)' },
      { t: 'rule', h: '부사 자리', x: '동사 앞뒤, be동사와 p.p./-ing 사이 → **부사**\n형용사·다른 부사 앞 → **부사**\n완전한 문장 앞이나 뒤 → **부사** (빼도 문장이 성립)' },
      { t: 'ex', en: 'The shipment was *promptly* delivered to the warehouse.', ko: '선적물은 신속하게 창고로 배송되었다.', note: 'be동사 was와 p.p. delivered 사이 → 부사 promptly' },
      { t: 'table', head: ['자리', '정답 품사', '단서'], rows: [
        ['관사/소유격 ___', '명사', 'the ___, our ___'],
        ['관사 ___ 명사', '형용사', 'a ___ plan'],
        ['be동사 ___', '형용사(또는 p.p./-ing)', 'is ___'],
        ['be ___ p.p.', '부사', 'was ___ approved'],
        ['___ 형용사', '부사', '___ efficient'],
        ['전치사 ___', '명사·동명사', 'for ___']
      ] },
      { t: 'tip', x: '실전 팁: 보기 4개의 **어미**만 보고 품사를 바로 분류하세요. -tion/-ment/-ness/-ance = 명사, -ive/-ous/-able/-al = 형용사, -ly = 부사. 그다음 빈칸 앞 한 단어, 뒤 한 단어만 확인하면 끝입니다.' },
      { t: 'trap', x: '함정: -ly로 끝나지만 **형용사**인 단어들 → friendly, costly, timely, orderly, likely, lively. "a timely response"처럼 명사를 꾸밀 수 있어요. 또 -al로 끝나도 명사인 단어(proposal, approval, arrival, rental)도 자주 나옵니다.' }
    ],
    check: [
      { s: 'Ms. Kato gave a ------- presentation on the new budget.', o: ['clarify', 'clearly', 'clear', 'clarity'], a: 2, e: '관사 a와 명사 presentation 사이 → 형용사 clear. clearly는 부사, clarity는 명사, clarify는 동사예요.' },
      { s: 'The board will make a final ------- on the merger next week.', o: ['decide', 'decisive', 'decisively', 'decision'], a: 3, e: '형용사 final 뒤, make의 목적어 자리 → 명사 decision이에요.' },
      { s: 'The marketing team responded ------- to the customer complaints.', o: ['quickly', 'quick', 'quickness', 'quicken'], a: 0, e: 'respond는 자동사라 완전한 문장(The team responded) 뒤 → 동사를 꾸미는 부사 quickly가 정답이에요.' },
      { s: 'Our customer service staff are always ------- and patient.', o: ['friendliness', 'friendly', 'friend', 'befriend'], a: 1, e: 'be동사 are 뒤 보어 자리이고 and 뒤에 형용사 patient가 있으므로 형용사 friendly가 정답이에요. -ly로 끝나도 형용사입니다.' }
    ]
  },
  {
    id: 'p5-02', track: 'p5', no: 2,
    title: '동사의 형태와 수일치', sub: '빈칸에 동사가 필요한가, 주어는 단수인가 복수인가', min: 10,
    blocks: [
      { t: 'p', x: '보기에 동사의 여러 형태(submit, submits, submitting, to submit)가 나오면 두 단계로 푸세요.\n**① 문장에 동사가 있는가?** 없다면 빈칸은 동사 자리 → -ing·to부정사는 탈락.\n**② 주어가 단수인가, 복수인가?** → 수일치로 최종 결정.' },
      { t: 'rule', h: '1단계: 동사 자리 판별', x: '한 문장(절)에는 **동사가 꼭 하나** 있어야 합니다.\n문장에 다른 동사가 없으면 빈칸은 **본동사** → 보기 중 -ing, to부정사, 「being + p.p.」는 정답이 될 수 없어요.\n접속사·관계사가 있으면 절이 2개 → 동사도 2개.' },
      { t: 'ex', en: 'The new policy *requires* all visitors to sign in at the front desk.', ko: '새 정책은 모든 방문객이 안내 데스크에서 서명하도록 요구한다.', note: '문장에 다른 동사가 없음 → 본동사 requires (requiring, to require 탈락)' },
      { t: 'rule', h: '2단계: 수일치', x: '주어가 단수 → 단수 동사(-s, is, was, has)\n주어가 복수 → 복수 동사(원형, are, were, have)\n**수식어(전치사구·관계절·분사구)는 지우고** 진짜 주어만 보세요.' },
      { t: 'ex', en: 'The list of approved vendors *is* posted on the intranet.', ko: '승인된 공급업체 목록이 사내 인트라넷에 게시되어 있다.', note: 'of approved vendors는 수식어 → 진짜 주어 The list(단수) → is' },
      { t: 'ex', en: 'Employees who work overtime *receive* additional compensation.', ko: '초과 근무를 하는 직원들은 추가 보상을 받는다.', note: '관계절 who work overtime 제거 → 주어 Employees(복수) → receive' },
      { t: 'ex', en: 'Each department *has* its own budget for training.', ko: '각 부서는 교육을 위한 자체 예산을 가지고 있다.', note: 'Each + 단수명사 → 단수 동사 has' },
      { t: 'table', head: ['주어 형태', '동사', '예'], rows: [
        ['Each / Every + 단수명사', '단수', 'Every employee is ...'],
        ['Each of + 복수명사', '단수', 'Each of the rooms has ...'],
        ['A number of + 복수명사', '복수', 'A number of clients have ...'],
        ['The number of + 복수명사', '단수', 'The number of orders has ...'],
        ['동명사·to부정사·명사절 주어', '단수', 'Reducing costs is ...'],
        ['주격 관계대명사 that/who', '선행사에 일치', 'a manager who oversees ...']
      ] },
      { t: 'tip', x: '실전 팁: 수일치 문제는 주어와 동사 사이가 길게 벌어지도록 출제됩니다. 빈칸을 보면 **문장 맨 앞으로 돌아가 첫 명사를 확인**하는 습관을 들이세요. 전치사 of, in, for 뒤 명사는 주어가 아니에요.' },
      { t: 'trap', x: '함정: **명령문과 요청 동사**. Please ------- the form. 에서는 주어가 없지만 동사원형(complete)이 정답이에요. 또 require/request/recommend/suggest that 뒤에는 주어의 수와 관계없이 **동사원형**이 옵니다. (The manager requested that he submit the report.)' }
    ],
    check: [
      { s: 'The results of the customer survey ------- that most users prefer the new design.', o: ['indicates', 'indicating', 'to indicate', 'indicate'], a: 3, e: '문장에 다른 동사가 없으므로 본동사 자리이고, of the customer survey를 지우면 주어는 The results(복수) → indicate예요.' },
      { s: 'A number of applicants ------- already been invited to the second interview.', o: ['have', 'has', 'having', 'is'], a: 0, e: 'A number of + 복수명사는 "많은 ~"로 복수 취급 → have. already been이 뒤에 있어 현재완료 have been이 됩니다.' },
      { s: 'Ms. Diaz recommended that every team member ------- the safety training by June 30.', o: ['completes', 'complete', 'completed', 'completing'], a: 1, e: 'recommend that 뒤 절에서는 주어의 수와 상관없이 동사원형(should 생략)을 써요. → complete' },
      { s: 'Reducing operating costs ------- the main goal of the new director this year.', o: ['are', 'were', 'is', 'being'], a: 2, e: '동명사구 주어(Reducing operating costs)는 단수 취급하고, this year는 현재 → is예요.' }
    ]
  },
  {
    id: 'p5-03', track: 'p5', no: 3,
    title: '시제', sub: '시간 단서 표현으로 시제를 고정하라', min: 12,
    blocks: [
      { t: 'p', x: '시제 문제는 **문장 속 시간 표현(단서)**이 답을 정해 줍니다. 해석은 거의 필요 없어요. 보기에 같은 동사의 여러 시제가 나오면 먼저 **yesterday, since, by next month** 같은 단서를 찾아 동그라미 치세요.' },
      { t: 'rule', h: '과거 vs 현재완료', x: '**과거**: yesterday, last week, ago, in 2023, when + 과거 → 끝난 시점\n**현재완료(have p.p.)**: since + 과거 시점, for/over the past + 기간, recently, so far, already, yet → 과거부터 지금까지' },
      { t: 'ex', en: 'The company *launched* its mobile app two years ago.', ko: '그 회사는 2년 전에 모바일 앱을 출시했다.', note: 'ago → 단순 과거' },
      { t: 'ex', en: 'Sales *have increased* steadily over the past three quarters.', ko: '지난 3분기 동안 매출이 꾸준히 증가해 왔다.', note: 'over the past + 기간 → 현재완료' },
      { t: 'rule', h: '미래와 미래완료', x: '**미래**: tomorrow, next week, soon, upcoming, as of + 미래 날짜\n**미래완료(will have p.p.)**: by the time + 현재시제절, by + 미래 시점 → 그때까지 완료될 일\n**과거완료(had p.p.)**: by the time + 과거시제절, before + 과거 → 과거보다 더 이전' },
      { t: 'ex', en: 'By the end of this month, we *will have hired* five new engineers.', ko: '이달 말까지 우리는 다섯 명의 신입 엔지니어를 채용하게 될 것이다.', note: 'By + 미래 시점 → 미래완료' },
      { t: 'ex', en: 'The meeting *had* already *started* when Mr. Hall arrived.', ko: '홀 씨가 도착했을 때 회의는 이미 시작된 상태였다.', note: '과거 arrived보다 먼저 일어난 일 → 과거완료' },
      { t: 'rule', h: '시간·조건 부사절의 현재시제', x: 'when, before, after, as soon as, once, until, if, unless가 이끄는 부사절은 **미래 일이라도 현재시제**(또는 현재완료)를 씁니다.\nWe will call you **as soon as** the parts **arrive**. (will arrive ×)' },
      { t: 'ex', en: 'Please contact the help desk if the problem *continues*.', ko: '문제가 계속되면 헬프데스크에 연락하세요.', note: '조건 부사절 if → 미래 의미라도 현재시제' },
      { t: 'table', head: ['단서 표현', '시제', '형태'], rows: [
        ['yesterday / ago / last ~ / in + 과거 연도', '과거', 'worked'],
        ['since + 과거 / for the past ~ / recently', '현재완료', 'has worked'],
        ['next ~ / tomorrow / upcoming / soon', '미래', 'will work'],
        ['by + 미래 시점 / by the time + 현재', '미래완료', 'will have worked'],
        ['by the time + 과거 / before + 과거', '과거완료', 'had worked'],
        ['every ~ / usually / regularly', '현재', 'works']
      ] },
      { t: 'tip', x: '실전 팁: 단서가 문장 **맨 끝**에 숨어 있는 경우가 많아요. 빈칸 주변에 단서가 없으면 문장 끝의 next quarter, since January부터 확인하세요.' },
      { t: 'trap', x: '함정: **since가 "~ 때문에"** 뜻일 때도 있어요. Since the office is closed, ... 는 이유의 접속사라 현재완료 단서가 아닙니다. 또 for + 기간은 과거 시제에도 쓸 수 있으니(He worked there for ten years.) 다른 단서와 함께 판단하세요.' }
    ],
    check: [
      { s: 'Mr. Patel ------- as the regional sales manager since 2019.', o: ['has served', 'serves', 'served', 'will serve'], a: 0, e: 'since + 과거 시점(2019)은 과거부터 지금까지 이어지는 일 → 현재완료 has served예요.' },
      { s: 'The renovated conference room ------- available for bookings starting next Monday.', o: ['was', 'will be', 'has been', 'had been'], a: 1, e: 'starting next Monday는 미래 시점 단서 → will be가 정답이에요.' },
      { s: 'By the time the new manager arrives, the team ------- the quarterly report.', o: ['finished', 'has finished', 'will have finished', 'had finished'], a: 2, e: 'by the time + 현재시제(arrives)는 미래 시점을 나타내므로, 그때까지 완료될 일 → 미래완료 will have finished예요.' },
      { s: 'We will send you a confirmation e-mail as soon as your payment -------.', o: ['will process', 'will be processed', 'processing', 'is processed'], a: 3, e: 'as soon as가 이끄는 시간 부사절은 미래 의미라도 현재시제를 쓰고, payment는 처리되는 대상이므로 수동태 is processed예요.' }
    ]
  },
  {
    id: 'p5-04', track: 'p5', no: 4,
    title: '능동태와 수동태', sub: '빈칸 뒤 목적어가 있는가로 결정한다', min: 10,
    blocks: [
      { t: 'p', x: '보기에 approve / approved / is approving / is approved처럼 능동·수동이 섞여 있다면, 해석보다 먼저 **빈칸 뒤에 목적어(명사)가 있는지** 보세요. 목적어가 있으면 능동, 없으면 수동일 확률이 매우 높습니다.' },
      { t: 'rule', h: '능동 vs 수동 판별 공식', x: '타동사 + **목적어 있음** → 능동태\n타동사 + **목적어 없음**(바로 전치사구·부사·마침표) → 수동태(be + p.p.)\n주어가 행위를 **당하는 대상**(사물, 문서, 제품)이면 수동태를 의심하세요.' },
      { t: 'ex', en: 'The committee *approved* the new budget yesterday.', ko: '위원회는 어제 새 예산을 승인했다.', note: '빈칸 뒤 목적어 the new budget → 능동' },
      { t: 'ex', en: 'The new budget *was approved* by the committee yesterday.', ko: '새 예산은 어제 위원회에 의해 승인되었다.', note: '빈칸 뒤 목적어 없이 by ~ → 수동' },
      { t: 'rule', h: '시제와 결합한 수동태', x: '현재완료 수동: **have been p.p.**\n진행 수동: **be being p.p.**\n조동사 수동: **will/must/should be p.p.**\n→ be와 p.p. 사이 형태로 시제를, 끝의 p.p.로 수동을 표시합니다.' },
      { t: 'ex', en: 'All applications *must be submitted* online by May 1.', ko: '모든 지원서는 5월 1일까지 온라인으로 제출되어야 한다.', note: '조동사 + be + p.p.' },
      { t: 'ex', en: 'The parking lot *is being repaved* this week.', ko: '주차장은 이번 주에 재포장 공사 중이다.', note: '진행 수동 is being p.p.' },
      { t: 'rule', h: '4·5형식 동사의 수동태', x: '4형식(give, offer, send, award): 수동태가 되어도 **목적어가 하나 남습니다**.\nMs. Kim **was offered** a promotion. (뒤에 명사가 있어도 수동!)\n5형식(consider, keep, elect): be considered + 형용사/명사' },
      { t: 'table', head: ['자주 나오는 수동 표현', '뜻'], rows: [
        ['be required to do', '~해야 한다'],
        ['be expected to do', '~할 것으로 예상된다'],
        ['be scheduled to do / for', '~할 예정이다'],
        ['be entitled to + 명사', '~를 받을 자격이 있다'],
        ['be located in / at', '~에 위치하다'],
        ['be committed to + 명사/-ing', '~에 전념하다']
      ] },
      { t: 'tip', x: '실전 팁: **자동사는 수동태가 없습니다.** occur, happen, arrive, rise, remain, expire, appear 등은 보기에 be p.p.가 있으면 바로 지우세요. (The contract expires next month. / is expired ×)' },
      { t: 'trap', x: '함정: 4형식 수동태. Employees ------- a bonus. 에서 뒤에 a bonus(명사)가 있다고 능동 give를 고르면 틀립니다. 직원은 보너스를 "받는" 쪽 → **were given** a bonus가 정답이에요.' }
    ],
    check: [
      { s: 'The quarterly sales figures ------- at tomorrow\'s board meeting.', o: ['presented', 'will be presented', 'will present', 'presenting'], a: 1, e: '빈칸 뒤에 목적어가 없고 수치는 발표되는 대상 → 수동태. tomorrow가 있으니 미래 수동 will be presented예요.' },
      { s: 'Ms. Romero ------- the Employee of the Year award at the annual banquet.', o: ['gave', 'giving', 'was given', 'has given'], a: 2, e: '4형식 동사 give의 수동태는 뒤에 목적어가 하나 남아요. 로메로 씨는 상을 받은 사람 → was given이 정답입니다.' },
      { s: 'The technician ------- the malfunctioning printer before the staff arrived.', o: ['was repaired', 'is repaired', 'being repaired', 'had repaired'], a: 3, e: '빈칸 뒤에 목적어 the malfunctioning printer가 있으므로 능동태, 과거(arrived)보다 앞선 일 → had repaired예요.' },
      { s: 'A significant increase in online orders ------- during the holiday season.', o: ['occurred', 'was occurred', 'was occurring by', 'has been occurred'], a: 0, e: 'occur는 자동사라 수동태가 불가능해요. 따라서 능동 과거 occurred가 정답입니다.' }
    ]
  }
]);

LESSON_ADD([
  {
    id: 'p5-05', track: 'p5', no: 5,
    title: 'to부정사와 동명사', sub: '동사·명사·형용사가 무엇을 데려오는지 외워라', min: 12,
    blocks: [
      { t: 'p', x: 'to부정사와 동명사 문제는 대부분 **앞에 있는 단어가 무엇을 목적어로 취하는가**로 결정됩니다. decide는 to부정사, consider는 동명사처럼 짝이 정해져 있어요. 원리보다 **짝꿍 암기**가 점수로 직결되는 단원입니다.' },
      { t: 'rule', h: 'to부정사를 목적어로 취하는 동사', x: '**미래·의도**의 느낌: want, plan, decide, hope, expect, agree, offer, refuse, fail, aim, intend, strive, afford\n→ 아직 일어나지 않은 일을 하려고 함' },
      { t: 'ex', en: 'The company plans *to expand* its operations into Asia.', ko: '그 회사는 아시아로 사업을 확장할 계획이다.', note: 'plan + to부정사' },
      { t: 'rule', h: '동명사를 목적어로 취하는 동사', x: '**이미 하고 있거나 회피·중단**의 느낌: consider, suggest, recommend, avoid, finish, postpone, delay, mind, enjoy, include, discontinue\n→ "consider / avoid / finish -ing"는 시험에 매회 등장' },
      { t: 'ex', en: 'Management is considering *relocating* the headquarters.', ko: '경영진은 본사 이전을 고려하고 있다.', note: 'consider + 동명사' },
      { t: 'rule', h: '목적격 보어로 to부정사를 쓰는 동사', x: 'ask, allow, enable, encourage, require, invite, remind, advise, permit + **목적어 + to do**\n수동태가 되면 **be asked/allowed/required to do**' },
      { t: 'ex', en: 'The new system enables staff *to track* orders in real time.', ko: '새 시스템은 직원들이 실시간으로 주문을 추적할 수 있게 해 준다.', note: 'enable + 목적어 + to부정사' },
      { t: 'rule', h: '전치사 to + 동명사', x: '여기서 to는 전치사라 뒤에 **-ing**가 옵니다.\nlook forward to -ing, be committed to -ing, be dedicated to -ing, be devoted to -ing, contribute to -ing, object to -ing, be used to -ing(~에 익숙하다)' },
      { t: 'ex', en: 'We look forward to *working* with you on this project.', ko: '이 프로젝트에서 함께 일하게 되기를 고대합니다.', note: 'look forward to + 동명사' },
      { t: 'table', head: ['to부정사', '동명사', '형용사/명사 + to부정사'], rows: [
        ['decide to', 'consider -ing', 'be able to'],
        ['agree to', 'avoid -ing', 'be eager to'],
        ['fail to', 'finish -ing', 'be likely to'],
        ['strive to', 'postpone -ing', 'the ability to'],
        ['afford to', 'recommend -ing', 'the effort to']
      ] },
      { t: 'tip', x: '실전 팁: "in order to + 동사원형"(~하기 위해)은 문장 맨 앞이나 완전한 문장 뒤에 자주 나와요. 빈칸 뒤에 동사원형이 있고 앞 문장이 완전하면 **in order to / so as to**를 먼저 넣어 보세요.' },
      { t: 'trap', x: '함정: **be committed to, look forward to의 to는 전치사**입니다. 보기에 work와 working이 함께 있으면 "to 뒤니까 원형"이라고 반사적으로 고르지 말고, 앞 표현이 전치사 to를 쓰는지 꼭 확인하세요.' }
    ],
    check: [
      { s: 'Due to budget constraints, the firm decided ------- the product launch until spring.', o: ['postponing', 'postponed', 'to postpone', 'postpones'], a: 2, e: 'decide는 to부정사를 목적어로 취해요. → decided to postpone' },
      { s: 'Visitors are kindly asked to avoid ------- personal belongings in the lobby.', o: ['to leave', 'leave', 'left', 'leaving'], a: 3, e: 'avoid는 동명사를 목적어로 취하는 대표 동사예요. → avoid leaving' },
      { s: 'Riverside Bank is committed to ------- secure and convenient services.', o: ['providing', 'provide', 'provided', 'provides'], a: 0, e: 'be committed to의 to는 전치사라 뒤에 동명사 providing이 와요.' },
      { s: 'All employees are required ------- their ID badges while on the premises.', o: ['wearing', 'to wear', 'wear', 'worn'], a: 1, e: 'require + 목적어 + to부정사의 수동형 be required to do → are required to wear예요.' }
    ]
  },
  {
    id: 'p5-06', track: 'p5', no: 6,
    title: '분사', sub: '현재분사 vs 과거분사, 감정동사의 분사', min: 12,
    blocks: [
      { t: 'p', x: '보기에 -ing와 -ed(p.p.)가 같이 있으면 분사 문제예요. 핵심 질문은 하나입니다. **꾸밈을 받는 명사가 그 동작을 "하는" 쪽인가, "당하는" 쪽인가?**\n하면 **현재분사(-ing)**, 당하면 **과거분사(p.p.)**.' },
      { t: 'rule', h: '명사 앞 분사', x: '능동·진행: a **growing** company (성장하는 회사), **existing** customers (기존 고객)\n수동·완료: a **revised** schedule (수정된 일정), **qualified** applicants (자격을 갖춘 지원자)\n→ 토익 빈출 p.p. 형용사: attached, enclosed, detailed, experienced, limited, preferred' },
      { t: 'ex', en: 'Please review the *attached* document before the meeting.', ko: '회의 전에 첨부된 문서를 검토해 주세요.', note: '문서는 첨부되는 대상 → 과거분사 attached' },
      { t: 'ex', en: 'The *rising* cost of materials has affected our prices.', ko: '원자재 비용 상승이 우리 가격에 영향을 미쳤다.', note: '비용이 스스로 오르는 중 → 현재분사 rising (rise는 자동사라 p.p. 수식 불가)' },
      { t: 'rule', h: '명사 뒤 분사(후치 수식)', x: '분사 뒤에 **목적어가 있으면 -ing**, 없고 by/전치사구가 오면 **p.p.**\nCustomers **purchasing** two items ... (목적어 two items)\nProducts **manufactured** in Korea ... (목적어 없음)' },
      { t: 'ex', en: 'Applicants *wishing* to apply should submit a résumé by Friday.', ko: '지원을 희망하는 사람은 금요일까지 이력서를 제출해야 한다.', note: '뒤에 to apply(목적어) → 현재분사 wishing' },
      { t: 'ex', en: 'The report *prepared* by the finance team was very thorough.', ko: '재무팀이 작성한 보고서는 매우 꼼꼼했다.', note: '뒤에 목적어 없이 by → 과거분사 prepared' },
      { t: 'rule', h: '감정동사의 분사', x: 'interest, satisfy, impress, disappoint, excite, surprise, confuse, please는 "~하게 만들다"라는 뜻이에요.\n**사물이 감정을 유발 → -ing**: an **impressive**/an **exciting** result\n**사람이 감정을 느낌 → p.p.**: **satisfied** customers, **interested** parties' },
      { t: 'ex', en: 'We were *impressed* with the quality of your work.', ko: '우리는 귀하의 작업 품질에 깊은 인상을 받았다.', note: '사람(We)이 감정을 느낌 → impressed' },
      { t: 'table', head: ['동사', '사물이 유발 (-ing)', '사람이 느낌 (p.p.)'], rows: [
        ['interest', 'interesting proposal', 'interested buyers'],
        ['satisfy', 'satisfying result', 'satisfied customers'],
        ['disappoint', 'disappointing sales', 'disappointed investors'],
        ['confuse', 'confusing instructions', 'confused users'],
        ['excite', 'exciting news', 'excited staff']
      ] },
      { t: 'tip', x: '실전 팁: **분사구문**도 같은 원리예요. 콤마 앞뒤로 주어가 생략된 구가 있으면 문장 주어를 보세요. (**Located** near the station, the hotel is popular. → 호텔은 위치되는 것 → p.p.)' },
      { t: 'trap', x: '함정: 사람이 주어여도 **사람이 감정을 유발**하면 -ing입니다. The speaker was very **inspiring**. (연사가 영감을 줌) 또 자동사(rise, remain, last, exist)는 p.p.로 명사를 꾸밀 수 없어요: remaining seats(○), remained seats(×).' }
    ],
    check: [
      { s: 'The hotel offers free shuttle service to guests ------- at the airport.', o: ['arrived', 'arrives', 'to arrival', 'arriving'], a: 3, e: 'arrive는 자동사이고 손님이 도착하는 주체 → 현재분사 arriving이 명사 guests를 뒤에서 꾸며요.' },
      { s: 'Only ------- candidates will be contacted for an interview.', o: ['qualified', 'qualifying', 'qualify', 'qualification'], a: 0, e: '지원자는 자격을 "부여받은" 상태 → 과거분사 qualified. qualified candidates는 토익 단골 표현이에요.' },
      { s: 'The investors were ------- with the company\'s third-quarter earnings.', o: ['disappointing', 'disappointed', 'disappoint', 'disappointment'], a: 1, e: '사람(investors)이 실망을 느낀 것 → 과거분사 disappointed예요.' },
      { s: 'Please fill out the form ------- in the welcome packet and return it to Human Resources.', o: ['enclosing', 'encloses', 'enclosed', 'to enclose'], a: 2, e: '양식은 동봉되는 대상이고 뒤에 목적어가 없으므로 과거분사 enclosed가 form을 뒤에서 꾸며요.' }
    ]
  },
  {
    id: 'p5-07', track: 'p5', no: 7,
    title: '대명사', sub: '인칭·소유·재귀대명사의 격과 자리', min: 10,
    blocks: [
      { t: 'p', x: '보기에 he / him / his / himself처럼 **같은 사람의 여러 격**이 있으면 대명사 문제예요. 품사 문제처럼 **자리**로 풉니다. 주어 자리는 주격, 명사 앞은 소유격, 동사·전치사 뒤는 목적격, 그리고 "자기 자신"이면 재귀대명사.' },
      { t: 'table', head: ['격', 'I', 'you', 'he', 'she', 'it', 'we', 'they'], rows: [
        ['주격', 'I', 'you', 'he', 'she', 'it', 'we', 'they'],
        ['소유격', 'my', 'your', 'his', 'her', 'its', 'our', 'their'],
        ['목적격', 'me', 'you', 'him', 'her', 'it', 'us', 'them'],
        ['소유대명사', 'mine', 'yours', 'his', 'hers', '-', 'ours', 'theirs'],
        ['재귀대명사', 'myself', 'yourself', 'himself', 'herself', 'itself', 'ourselves', 'themselves']
      ] },
      { t: 'rule', h: '소유격: 토익 최다 출제', x: '빈칸 뒤에 **명사**가 있으면 소유격.\n「소유격 + own + 명사」: their **own** office\n**its**(그것의) vs it\'s(it is) 구별 필수' },
      { t: 'ex', en: 'Ms. Chen presented *her* findings to the board.', ko: '첸 씨는 이사회에 자신의 조사 결과를 발표했다.', note: '명사 findings 앞 → 소유격 her' },
      { t: 'ex', en: 'The company celebrated *its* 50th anniversary last month.', ko: '그 회사는 지난달 창립 50주년을 기념했다.', note: '단수 사물 company를 받는 소유격 its' },
      { t: 'rule', h: '재귀대명사의 두 용법', x: '**재귀 용법**: 주어 = 목적어일 때 목적어 자리 → 생략 불가\nMr. Ito introduced **himself** to the clients.\n**강조 용법**: 완전한 문장 뒤나 주어 뒤에서 "직접" → 생략 가능\nThe CEO **herself** answered the question.\n**by oneself** = 혼자서, 스스로' },
      { t: 'ex', en: 'Mr. Garcia reviewed the contract *himself* before signing it.', ko: '가르시아 씨는 서명하기 전에 직접 계약서를 검토했다.', note: '완전한 문장 뒤 강조 → himself' },
      { t: 'ex', en: 'New employees should familiarize *themselves* with the safety rules.', ko: '신입 사원은 안전 규정을 숙지해야 한다.', note: 'familiarize oneself with: 주어 = 목적어 → themselves' },
      { t: 'rule', h: '소유대명사와 지시대명사', x: '**소유대명사**(mine, yours, theirs) = 소유격 + 명사. 뒤에 명사가 **없을 때**.\nHer proposal was better than **ours**(= our proposal).\n**those who** ~ = ~하는 사람들 / **that of, those of** = 앞 명사의 반복 대신' },
      { t: 'tip', x: '실전 팁: 대명사가 가리키는 명사의 **단·복수**를 꼭 확인하세요. The committee ... its decision(단수), The employees ... their benefits(복수). 단수 기관명(company, team, board)은 it/its로 받습니다.' },
      { t: 'trap', x: '함정: **주어와 목적어가 같은 사람이 아니면 재귀대명사가 아닙니다.** Ms. Park asked ------- to send the file. 에서 부탁받은 사람이 다른 사람이라면 him/her(목적격)가 정답이에요. 또 those who는 사람, that of는 사물을 받는 데 주로 쓰여요.' }
    ],
    check: [
      { s: 'Employees must submit ------- timesheets to the department supervisor by Friday.', o: ['their', 'them', 'they', 'themselves'], a: 0, e: '명사 timesheets 앞 → 소유격 their예요.' },
      { s: 'Since the assistant was on leave, Mr. Lopez organized the event by -------.', o: ['him', 'himself', 'his', 'he'], a: 1, e: 'by oneself는 "혼자서"라는 뜻의 관용 표현 → by himself예요.' },
      { s: 'Our prices are competitive, but the quality of our products is higher than that of -------.', o: ['they', 'their', 'theirs', 'themselves'], a: 2, e: '전치사 of 뒤에 명사가 없으므로 "their products"를 대신하는 소유대명사 theirs가 정답이에요.' },
      { s: 'The marketing director ------- will announce the results of the campaign.', o: ['her', 'hers', 'she', 'herself'], a: 3, e: '주어(The marketing director) 바로 뒤에서 "직접"을 강조하는 재귀대명사 herself예요. 빼도 문장이 완전합니다.' }
    ]
  },
  {
    id: 'p5-08', track: 'p5', no: 8,
    title: '관계대명사와 관계부사', sub: '선행사와 빈칸 뒤 문장 구조로 결정', min: 12,
    blocks: [
      { t: 'p', x: '관계사 문제는 두 가지만 보면 됩니다.\n**① 선행사**가 사람인가, 사물인가? 장소·시간·이유인가?\n**② 빈칸 뒤 문장**이 불완전한가(주어·목적어 빠짐), 완전한가?\n불완전하면 관계대명사, 완전하면 관계부사(또는 소유격 whose).' },
      { t: 'table', head: ['선행사', '주격', '목적격', '소유격'], rows: [
        ['사람', 'who / that', 'whom / who / that', 'whose'],
        ['사물·동물', 'which / that', 'which / that', 'whose (of which)'],
        ['선행사 포함', 'what', 'what', '-']
      ] },
      { t: 'rule', h: '주격 vs 목적격', x: '빈칸 뒤에 **동사가 바로** 오면 주격(who/which)\n빈칸 뒤에 **주어 + 타동사**가 오고 목적어가 빠졌으면 목적격(whom/which)\n주격 관계대명사 뒤 동사는 **선행사에 수일치**' },
      { t: 'ex', en: 'Ms. Ahmed is the consultant *who* designed our training program.', ko: '아메드 씨는 우리 교육 프로그램을 설계한 컨설턴트이다.', note: '선행사 사람 + 뒤에 동사 designed → 주격 who' },
      { t: 'ex', en: 'The laptop *which* I ordered last week has not arrived yet.', ko: '내가 지난주에 주문한 노트북이 아직 도착하지 않았다.', note: 'ordered의 목적어가 빠짐 → 목적격 which' },
      { t: 'rule', h: '소유격 whose', x: '빈칸 뒤에 **관사 없는 명사 + 동사**가 오고 문장이 완전하면 whose\nWe hired a designer **whose** work has won several awards.\n→ 선행사가 사람이든 사물이든 whose 가능' },
      { t: 'ex', en: 'Customers *whose* orders were delayed will receive a discount.', ko: '주문이 지연된 고객들은 할인을 받게 된다.', note: '빈칸 뒤 orders(명사) + were delayed → 소유격 whose' },
      { t: 'rule', h: '관계부사', x: '선행사가 **장소 → where**, **시간 → when**, **이유(the reason) → why**, 방법 → how(the way와 함께 못 씀)\n관계부사 뒤는 **완전한 문장**\n= 전치사 + which (in which, at which)' },
      { t: 'ex', en: 'This is the hotel *where* the annual conference will be held.', ko: '이곳이 연례 회의가 열릴 호텔이다.', note: '장소 선행사 + 뒤 문장 완전(수동태) → where' },
      { t: 'tip', x: '실전 팁: 콤마 뒤(계속적 용법)와 전치사 뒤에는 **that을 쓸 수 없어요.** ", that"이나 "in that(관계대명사)"이 보기에 있으면 지우세요. 전치사 뒤에는 whom / which만 옵니다.' },
      { t: 'trap', x: '함정: **장소 명사라고 무조건 where가 아닙니다.** This is the hotel ------- offers free breakfast. 에서 빈칸 뒤에 주어가 없고 동사 offers가 바로 오므로 주격 **which/that**이 정답이에요. 선행사보다 **뒤 문장의 완전성**이 우선입니다.' }
    ],
    check: [
      { s: 'The training session is open to all staff members ------- joined the company this year.', o: ['which', 'who', 'whose', 'whom'], a: 1, e: '선행사가 사람(staff members)이고 빈칸 뒤에 동사 joined가 바로 오므로 주격 who예요.' },
      { s: 'We are looking for a supplier ------- products meet international safety standards.', o: ['who', 'which', 'whose', 'what'], a: 2, e: '빈칸 뒤 products(관사 없는 명사) + meet ~로 완전한 절 → 소유격 whose예요.' },
      { s: 'The museum will close the east wing, ------- the ancient pottery is displayed, for repairs.', o: ['which', 'what', 'that', 'where'], a: 3, e: '장소 선행사(the east wing) 뒤 문장이 수동태로 완전하므로 관계부사 where예요. 콤마 뒤라 that은 불가능합니다.' },
      { s: 'The contract ------- Mr. Wilson signed yesterday includes a confidentiality clause.', o: ['that', 'who', 'where', 'whose'], a: 0, e: '선행사가 사물이고 signed의 목적어가 빠진 불완전한 절 → 목적격 that(= which)이에요.' }
    ]
  }
]);

LESSON_ADD([
  {
    id: 'p5-09', track: 'p5', no: 9,
    title: '전치사 vs 접속사', sub: 'despite / although, because of / because 구별하기', min: 12,
    blocks: [
      { t: 'p', x: '뜻이 같은데 품사가 다른 단어들이 보기에 함께 나오면, **해석이 아니라 빈칸 뒤 구조**로 고르세요.\n빈칸 뒤에 **명사(구)**만 있으면 → **전치사**\n빈칸 뒤에 **주어 + 동사(절)**가 있으면 → **접속사**\n이 한 가지 원칙으로 매회 1~2문제를 맞힐 수 있습니다.' },
      { t: 'table', head: ['의미', '전치사 (+ 명사)', '접속사 (+ 주어 + 동사)'], rows: [
        ['~에도 불구하고', 'despite, in spite of, notwithstanding', 'although, though, even though'],
        ['~ 때문에', 'because of, due to, owing to', 'because, since, as, now that'],
        ['~ 동안', 'during, for', 'while'],
        ['~까지', 'by, until', 'by the time, until'],
        ['~하는 경우에', 'in case of, in the event of', 'in case, if, provided that'],
        ['~ 외에도 / ~ 없이', 'in addition to, besides, without', 'unless(~하지 않으면)']
      ] },
      { t: 'ex', en: '*Despite* the bad weather, the shipment arrived on schedule.', ko: '악천후에도 불구하고 선적물은 일정대로 도착했다.', note: '뒤에 명사구 the bad weather → 전치사 Despite' },
      { t: 'ex', en: '*Although* the weather was bad, the shipment arrived on schedule.', ko: '날씨가 나빴지만 선적물은 일정대로 도착했다.', note: '뒤에 절 the weather was bad → 접속사 Although' },
      { t: 'rule', h: '시간·이유 전치사 vs 접속사', x: '**during** + 기간 명사(during the meeting) / **while** + 절 또는 -ing(while you are away, while working)\n**due to** + 명사(due to high demand) / **because** + 절(because demand is high)' },
      { t: 'ex', en: 'The flight was canceled *due to* a mechanical problem.', ko: '그 항공편은 기계 결함으로 인해 취소되었다.', note: '명사구 a mechanical problem → 전치사구 due to' },
      { t: 'ex', en: 'Please do not use your phone *while* the presentation is in progress.', ko: '발표가 진행되는 동안에는 휴대폰을 사용하지 마세요.', note: '뒤에 절 → 접속사 while (during ×)' },
      { t: 'rule', h: '접속부사는 접속사가 아니다', x: 'however, therefore, moreover, otherwise, nevertheless는 **부사**라서 두 절을 연결하지 못해요.\n절, **however** 절 (×) → 절; **however**, 절 (○) / 절. **However**, 절 (○)\nPart 5에서 콤마로 두 절을 이으라는 빈칸이면 **접속사**만 정답!' },
      { t: 'tip', x: '실전 팁: 보기 4개를 **전치사 2개 + 접속사 2개**로 먼저 나누세요. 빈칸 뒤 구조로 2개를 지우고, 남은 2개 중에서만 의미(양보 vs 이유)를 판단하면 시간이 반으로 줄어요.' },
      { t: 'trap', x: '함정: **-ing 형태**에 속지 마세요. Despite **being** late, ... 의 being은 동명사(명사 취급)라 전치사가 맞아요. 반대로 while/when/before/after는 접속사지만 분사구문으로 **while reviewing**처럼 -ing가 올 수 있습니다. 또 before, after, until, since는 **전치사와 접속사 둘 다** 가능해요.' }
    ],
    check: [
      { s: '------- the high cost of the equipment, the hospital decided to purchase it.', o: ['Although', 'Even though', 'Despite', 'Whereas'], a: 2, e: '빈칸 뒤가 the high cost of the equipment라는 명사구이므로 전치사 Despite예요. 나머지는 모두 절을 이끄는 접속사입니다.' },
      { s: 'The museum will be closed to visitors ------- the renovation work is completed.', o: ['during', 'because of', 'despite', 'until'], a: 3, e: '빈칸 뒤에 주어(the renovation work) + 동사(is completed)가 있으므로 접속사가 필요하고, 의미상 "완료될 때까지" → until이에요.' },
      { s: 'Ms. Brown checked her e-mail ------- she was waiting for her connecting flight.', o: ['while', 'during', 'due to', 'in spite of'], a: 0, e: '빈칸 뒤에 절(she was waiting ...)이 있으므로 접속사 while이에요. during은 전치사라 명사만 받습니다.' },
      { s: 'Several employees worked late ------- the tight project deadline.', o: ['since', 'because of', 'so that', 'although'], a: 1, e: '빈칸 뒤가 명사구(the tight project deadline)이고 의미상 이유이므로 전치사 because of예요. since·so that·although는 절을 이끌어요.' }
    ]
  },
  {
    id: 'p5-10', track: 'p5', no: 10,
    title: '등위접속사와 상관접속사', sub: 'and / but / or / so, both A and B 짝 맞추기', min: 10,
    blocks: [
      { t: 'p', x: '상관접속사는 **짝꿍 단어**만 보면 1초 만에 풀리는 문제예요. 문장에 both가 보이면 and, either가 보이면 or, neither가 보이면 nor. 등위접속사는 **앞뒤 문장의 논리 관계**(추가·대조·선택·결과)를 판단합니다.' },
      { t: 'rule', h: '등위접속사 FANBOYS', x: '**and**(그리고, 추가) / **but, yet**(그러나, 대조) / **or**(또는, 선택) / **so**(그래서, 결과) / **for**(왜냐하면) / **nor**(~도 아니다)\n등위접속사는 **같은 품사·같은 형태**를 연결합니다(병렬 구조).' },
      { t: 'ex', en: 'The new printer is fast *and* reliable.', ko: '새 프린터는 빠르고 믿을 만하다.', note: '형용사 fast와 reliable을 병렬 연결' },
      { t: 'ex', en: 'The store was crowded, *so* we decided to come back later.', ko: '가게가 붐벼서 우리는 나중에 다시 오기로 했다.', note: '앞이 원인, 뒤가 결과 → so' },
      { t: 'rule', h: '상관접속사 짝', x: '**both A and B**: A와 B 둘 다\n**either A or B**: A 또는 B 둘 중 하나\n**neither A nor B**: A도 B도 아닌\n**not only A but (also) B** = B as well as A: A뿐만 아니라 B도\n**not A but B**: A가 아니라 B\n**whether A or B**: A이든 B이든' },
      { t: 'ex', en: 'Applicants must have *both* a degree in engineering *and* three years of experience.', ko: '지원자는 공학 학위와 3년 경력을 모두 갖추어야 한다.', note: 'both A and B' },
      { t: 'ex', en: 'You can pay *either* by credit card *or* by bank transfer.', ko: '신용카드나 계좌 이체 중 하나로 결제할 수 있다.', note: 'either A or B, A와 B 모두 「by + 명사」로 병렬' },
      { t: 'ex', en: 'The seminar was *not only* informative *but also* entertaining.', ko: '그 세미나는 유익했을 뿐 아니라 재미있기도 했다.', note: 'not only A but also B' },
      { t: 'table', head: ['상관접속사', '주어로 쓸 때 수일치'], rows: [
        ['both A and B', '항상 복수'],
        ['either A or B', 'B에 일치'],
        ['neither A nor B', 'B에 일치'],
        ['not only A but also B', 'B에 일치'],
        ['B as well as A', 'B에 일치']
      ] },
      { t: 'tip', x: '실전 팁: 빈칸이 문장 중간에 있으면 **문장 앞쪽에 both / either / neither / not only가 숨어 있는지** 먼저 스캔하세요. 짝 단어를 찾으면 해석 없이 바로 정답입니다.' },
      { t: 'trap', x: '함정: **both A and B의 or 오답, either A or B의 and 오답**이 꼭 보기에 들어 있어요. 또 between A and B(전치사)와 both A and B를 헷갈리지 마세요. "A와 B 사이"는 between, "A와 B 둘 다"는 both입니다.' }
    ],
    check: [
      { s: 'The manual is available ------- in print and as a downloadable file.', o: ['either', 'neither', 'whether', 'both'], a: 3, e: '뒤에 and가 있고 "인쇄본과 파일 둘 다"라는 의미 → both A and B예요.' },
      { s: 'Neither the director ------- her assistant was able to attend the workshop.', o: ['nor', 'or', 'and', 'but'], a: 0, e: 'Neither와 짝을 이루는 것은 nor예요. → neither A nor B' },
      { s: 'The hotel is located close to the airport, ------- many business travelers stay there.', o: ['but', 'so', 'or', 'nor'], a: 1, e: '공항과 가깝다(원인) → 출장객이 많이 묵는다(결과)이므로 so가 정답이에요.' },
      { s: 'Not only the sales team ------- the marketing staff will attend the product launch.', o: ['and', 'or', 'but also', 'as well'], a: 2, e: 'Not only와 짝을 이루는 것은 but also예요. → not only A but also B' }
    ]
  },
  {
    id: 'p5-11', track: 'p5', no: 11,
    title: '명사절 접속사', sub: 'that / whether / what / if — 완전한 절 vs 불완전한 절', min: 12,
    blocks: [
      { t: 'p', x: '명사절은 문장 안에서 **주어·목적어·보어** 역할을 하는 절이에요. 빈칸이 동사의 목적어 자리나 문장 맨 앞 주어 자리에 있고 뒤에 절이 이어지면 명사절 접속사 문제입니다. 핵심은 **빈칸 뒤 절이 완전한가 불완전한가**.' },
      { t: 'rule', h: 'that vs what', x: '**that** + **완전한 절**: "~라는 것" (확정된 사실)\n**what** + **불완전한 절**(주어나 목적어가 빠짐): "~하는 것" = the thing which\n→ what은 선행사를 포함하므로 **앞에 명사가 없어야** 합니다.' },
      { t: 'ex', en: 'The survey shows *that* most customers prefer online shopping.', ko: '설문 조사는 대부분의 고객이 온라인 쇼핑을 선호한다는 것을 보여 준다.', note: 'shows의 목적어 + 뒤 절이 완전 → that' },
      { t: 'ex', en: '*What* the client requested was a detailed cost estimate.', ko: '고객이 요청한 것은 상세한 비용 견적이었다.', note: 'requested의 목적어가 빠진 불완전한 절 + 주어 자리 → What' },
      { t: 'rule', h: 'whether / if', x: '**whether** + 완전한 절: "~인지 아닌지" (불확실한 내용)\nask, decide, determine, know, wonder, confirm 같은 동사 뒤에 자주 와요.\n**whether or not**, **whether A or B**, **whether + to부정사** 가능\n**if**는 동사의 목적어 자리에서만 "~인지" 뜻 → 주어 자리·전치사 뒤에는 **whether만**' },
      { t: 'ex', en: 'We have not decided *whether* we will renew the lease.', ko: '우리는 임대 계약을 갱신할지 아직 결정하지 않았다.', note: '결정되지 않은 내용 + 완전한 절 → whether' },
      { t: 'ex', en: 'The decision depends on *whether* the budget is approved.', ko: '그 결정은 예산이 승인되는지에 달려 있다.', note: '전치사 on 뒤 → if 불가, whether만 가능' },
      { t: 'rule', h: '의문사 명사절', x: 'who, which, when, where, why, how도 명사절을 이끌어요.\nwho/what/which + **불완전한 절**, when/where/why/how + **완전한 절**\nPlease let us know **when** you will arrive.' },
      { t: 'table', head: ['접속사', '뒤 절', '뜻', '주의'], rows: [
        ['that', '완전', '~라는 것', '전치사 뒤 불가'],
        ['what', '불완전', '~하는 것', '앞에 선행사 없음'],
        ['whether', '완전', '~인지 아닌지', '주어·전치사 뒤 가능'],
        ['if', '완전', '~인지 아닌지', '목적어 자리만'],
        ['how / when / where', '완전', '어떻게/언제/어디서 ~하는지', '의문사 + to부정사 가능']
      ] },
      { t: 'tip', x: '실전 팁: 빈칸 뒤 절에서 **동사의 목적어가 있는지**만 빠르게 확인하세요. 목적어가 있으면 that/whether, 없으면 what. 그다음 내용이 확정된 사실이면 that, 불확실하면 whether입니다.' },
      { t: 'trap', x: '함정: **that은 전치사 바로 뒤에 올 수 없어요.** We talked about ------- we should hire more staff. → that(×), whether(○). 또 관계대명사 which와 명사절 what을 헷갈리지 마세요. 앞에 명사(선행사)가 있으면 which/that, 없으면 what입니다.' }
    ],
    check: [
      { s: 'The manager announced ------- the office will be closed on Friday for maintenance.', o: ['that', 'what', 'whether', 'which'], a: 0, e: 'announced의 목적어 자리이고 뒤 절(the office will be closed ...)이 완전하며 확정된 사실 → that이에요.' },
      { s: 'Please confirm ------- you will attend the reception or not.', o: ['what', 'whether', 'that', 'which'], a: 1, e: '"참석할지 아닐지"라는 불확실한 내용이고 뒤에 or not이 있으므로 whether가 정답이에요.' },
      { s: 'The customer was not satisfied with ------- the technician had suggested.', o: ['that', 'whether', 'what', 'if'], a: 2, e: '전치사 with 뒤 명사절이고 suggested의 목적어가 빠진 불완전한 절 → what이에요.' },
      { s: 'The committee has not yet determined ------- to hold the event indoors or outdoors.', o: ['that', 'what', 'if', 'whether'], a: 3, e: '뒤에 to부정사와 A or B 구조가 있으므로 whether to do가 정답이에요. if와 that은 to부정사를 이끌 수 없습니다.' }
    ]
  },
  {
    id: 'p5-12', track: 'p5', no: 12,
    title: '비교급과 최상급', sub: 'than, the, of/in 단서와 비교급 강조 부사', min: 10,
    blocks: [
      { t: 'p', x: '비교 문제도 **단서 단어**가 답을 알려 줍니다. 빈칸 뒤에 than이 있으면 비교급, 앞에 the가 있고 뒤에 of/in/ever가 있으면 최상급, as ___ as는 원급. 단서를 먼저 찾고 나서 형태를 고르세요.' },
      { t: 'rule', h: '원급 · 비교급 · 최상급 단서', x: '**원급**: as + 형용사/부사 원급 + as\n**비교급**: -er / more ~ + **than**\n**최상급**: **the** -est / the most ~ + **of/in/among** 범위, 또는 **ever**(현재완료와 함께)' },
      { t: 'ex', en: 'The new model is *as reliable as* the previous one.', ko: '새 모델은 이전 모델만큼 믿을 만하다.', note: 'as ~ as 사이 → 원급 reliable' },
      { t: 'ex', en: 'This year\'s profits were *higher* than expected.', ko: '올해 이익은 예상보다 높았다.', note: 'than → 비교급 higher' },
      { t: 'ex', en: 'Ms. Ford is *the most experienced* engineer in our department.', ko: '포드 씨는 우리 부서에서 가장 경험이 많은 엔지니어다.', note: 'the + in our department(범위) → 최상급' },
      { t: 'rule', h: '비교급 강조 부사', x: '비교급 앞: **much, even, still, far, a lot, significantly, considerably**(훨씬)\nvery는 비교급을 강조할 수 **없어요**.\n최상급 앞: **by far, the very, easily** (단연코)' },
      { t: 'ex', en: 'The second quarter was *considerably* more profitable than the first.', ko: '2분기는 1분기보다 훨씬 더 수익성이 높았다.', note: '비교급 more profitable 강조 → considerably' },
      { t: 'rule', h: '꼭 알아야 할 비교 구문', x: '**the 비교급, the 비교급**: ~할수록 더 ~하다\n**비교급 than any other + 단수명사**: 다른 어떤 ~보다 더 (= 최상급 의미)\n**one of the 최상급 + 복수명사**: 가장 ~한 것 중 하나\n**twice / three times as ~ as**: ~의 두 배/세 배만큼' },
      { t: 'ex', en: '*The earlier* you register, *the lower* the fee will be.', ko: '일찍 등록할수록 비용은 더 낮아진다.', note: 'the 비교급, the 비교급' },
      { t: 'table', head: ['단서', '정답 형태', '예'], rows: [
        ['as ___ as', '원급', 'as quickly as possible'],
        ['___ than', '비교급', 'more efficient than'],
        ['the ___ of/in/among', '최상급', 'the largest in the region'],
        ['the ___ ever + 현재완료', '최상급', 'the best we have ever had'],
        ['much/even/far ___', '비교급', 'much faster'],
        ['one of the ___ + 복수명사', '최상급', 'one of the most popular items']
      ] },
      { t: 'tip', x: '실전 팁: 보기에 high / higher / highest / highly가 함께 나오면 일단 **빈칸 뒤의 than과 빈칸 앞의 the**를 확인하세요. 단서가 없다면 일반 품사 문제(형용사 vs 부사)일 가능성이 큽니다.' },
      { t: 'trap', x: '함정: **비교급 앞의 very**. "very more expensive"는 틀린 표현이에요. 또 than이 문장 뒤쪽 멀리 떨어져 있거나, **than 이하가 생략**된 경우도 있으니(Our new office is larger.) 문맥에 비교 대상이 있는지 확인하세요.' }
    ],
    check: [
      { s: 'The new delivery service is ------- than the one we used last year.', o: ['reliable', 'more reliable', 'most reliable', 'reliably'], a: 1, e: '빈칸 뒤에 than이 있으므로 비교급 more reliable이에요.' },
      { s: 'Harbor View Inn is one of the ------- hotels in the city.', o: ['popular', 'more popular', 'most popular', 'popularity'], a: 2, e: 'one of the + 최상급 + 복수명사 구문 → most popular예요.' },
      { s: 'The upgraded software runs ------- faster than the previous version.', o: ['very', 'most', 'many', 'much'], a: 3, e: '비교급 faster를 강조하는 부사는 much예요. very는 비교급을 강조할 수 없습니다.' },
      { s: 'Please return the signed contract as ------- as possible.', o: ['soon', 'sooner', 'soonest', 'more soon'], a: 0, e: 'as ~ as possible 사이 → 원급 soon이에요.' }
    ]
  }
]);

LESSON_ADD([
  {
    id: 'p5-13', track: 'p5', no: 13,
    title: '가정법과 도치', sub: 'If 절 시제 공식과 If 생략 도치(Had / Should / Were)', min: 12,
    blocks: [
      { t: 'p', x: '가정법은 매회 나오지는 않지만, 나오면 **공식 그대로** 출제되는 고득점 단골 문법이에요. 특히 **If가 생략되고 Had / Should / Were가 문장 맨 앞으로 나오는 도치**를 알아보는 것이 850점의 벽을 넘는 열쇠입니다.' },
      { t: 'table', head: ['종류', 'If절', '주절', '의미'], rows: [
        ['가정법 과거', 'If + 주어 + 과거동사(were)', 'would/could + 동사원형', '현재 사실의 반대'],
        ['가정법 과거완료', 'If + 주어 + had p.p.', 'would/could + have p.p.', '과거 사실의 반대'],
        ['가정법 미래', 'If + 주어 + should + 동사원형', '명령문 / will + 동사원형', '혹시라도 ~하면'],
        ['혼합 가정법', 'If + 주어 + had p.p.', 'would + 동사원형 (now)', '과거 일이 현재에 영향']
      ] },
      { t: 'ex', en: 'If we *had* more staff, we *could* process orders faster.', ko: '직원이 더 많다면 주문을 더 빨리 처리할 수 있을 텐데.', note: '가정법 과거: 현재 직원이 부족하다는 사실의 반대' },
      { t: 'ex', en: 'If the client *had signed* the contract, we *would have started* the project.', ko: '고객이 계약서에 서명했더라면 우리는 프로젝트를 시작했을 것이다.', note: '가정법 과거완료: 과거에 서명하지 않은 사실의 반대' },
      { t: 'rule', h: 'If 생략 도치', x: 'If가 빠지면 **조동사/be동사가 주어 앞으로** 나옵니다.\nIf I were → **Were I** ...\nIf he had known → **Had he known** ...\nIf you should need → **Should you need** ...\n→ 문장 맨 앞 빈칸에 Had/Should/Were가 보기로 있으면 도치를 의심하세요.' },
      { t: 'ex', en: '*Should* you have any questions, please contact our support team.', ko: '혹시 질문이 있으시면 지원팀에 연락해 주세요.', note: 'If you should have ... 의 도치. 비즈니스 이메일 단골 문장' },
      { t: 'ex', en: '*Had* we known about the delay, we would have informed our customers.', ko: '지연에 대해 알았더라면 고객들에게 알렸을 것이다.', note: 'If we had known ... 의 도치' },
      { t: 'rule', h: '부정어 도치와 only 도치', x: '**Never, Rarely, Seldom, Hardly, Not only, Only + 부사구**가 문장 맨 앞에 오면 조동사 + 주어 어순\n**Not only did** the company increase sales, but it also ...\n**Only after** the inspection **will** the factory reopen.\n보어 도치: **Attached/Enclosed is** the invoice.' },
      { t: 'ex', en: '*Enclosed* is a copy of the revised agreement.', ko: '수정된 계약서 사본이 동봉되어 있습니다.', note: '보어 Enclosed가 앞으로 나간 도치. 주어는 a copy(단수) → is' },
      { t: 'tip', x: '실전 팁: 주절에 **would have p.p.**가 보이면 If절은 무조건 **had p.p.**, 주절에 **would + 동사원형**이면 If절은 **과거동사**입니다. 한쪽만 보고 다른 쪽을 공식으로 채우세요.' },
      { t: 'trap', x: '함정: 문장 맨 앞 빈칸에 **If와 Should가 둘 다** 보기로 나올 수 있어요. 빈칸 뒤에 「주어 + 동사원형」이 오면 Should(도치), 「주어 + 현재동사」가 오면 If가 정답입니다. (Should you need help, ... / If you need help, ...)' }
    ],
    check: [
      { s: 'If the store ------- open on Sundays, it would attract more customers.', o: ['is', 'has been', 'were', 'will be'], a: 2, e: '주절이 would + 동사원형이므로 가정법 과거 → If절은 과거동사, be동사는 were예요.' },
      { s: '------- Ms. Park require further assistance, please direct her to the help desk.', o: ['If', 'Unless', 'Whether', 'Should'], a: 3, e: '주어가 3인칭 단수 Ms. Park인데 동사가 원형 require예요. If/Unless라면 requires가 되어야 하므로, If Ms. Park should require의 도치 → Should가 정답입니다.' },
      { s: '------- the engineers tested the system earlier, they would have found the error.', o: ['Had', 'If', 'Were', 'Should'], a: 0, e: '주절이 would have found(가정법 과거완료)이므로 If절은 had p.p.여야 해요. 빈칸 뒤 tested는 p.p.이므로 If the engineers had tested의 도치 → Had가 정답입니다.' },
      { s: 'If Mr. Kim had accepted the job offer, he ------- in Tokyo now.', o: ['will live', 'would be living', 'had lived', 'lives'], a: 1, e: 'If절은 과거완료(had accepted)지만 주절에 now가 있으므로 혼합 가정법 → would + 동사원형 형태인 would be living이에요.' }
    ]
  },
  {
    id: 'p5-14', track: 'p5', no: 14,
    title: '자주 나오는 전치사 표현', sub: '시간·장소 전치사와 덩어리로 외우는 전치사 숙어', min: 12,
    blocks: [
      { t: 'p', x: '전치사 문제는 보기가 모두 전치사(in, on, at, by, for, within...)로 나와요. 문법이 아니라 **함께 쓰이는 명사·동사**로 결정되기 때문에 **덩어리(chunk)로 외운 사람이 이깁니다.** 이번 강의에서 매회 나오는 핵심만 추려 드릴게요.' },
      { t: 'rule', h: '시간 전치사', x: '**at** + 시각(at 3 P.M.) / **on** + 날짜·요일(on May 5, on Monday) / **in** + 월·연도·계절(in July, in 2025)\n**by**(~까지 완료) vs **until**(~까지 계속)\n**within** + 기간(~ 이내에) / **for** + 기간(~ 동안) / **during** + 사건·기간 명사' },
      { t: 'ex', en: 'Please submit the report *by* Friday.', ko: '금요일까지 보고서를 제출해 주세요.', note: '제출은 한 번에 완료되는 동작 → by' },
      { t: 'ex', en: 'The store will remain open *until* 9 P.M. during the holidays.', ko: '그 가게는 연휴 기간 동안 오후 9시까지 영업한다.', note: '영업 상태가 계속 → until' },
      { t: 'ex', en: 'Refunds will be issued *within* five business days.', ko: '환불은 영업일 기준 5일 이내에 처리됩니다.', note: 'within + 기간: ~ 이내에' },
      { t: 'rule', h: '위치·방향 전치사', x: '**across**(가로질러, 전역에) across the country / **throughout**(~ 내내, 곳곳에) throughout the year\n**along**(~을 따라) / **among**(셋 이상 사이) / **between**(둘 사이)\n**beyond**(~을 넘어서) beyond expectations / **past**(~을 지나)' },
      { t: 'ex', en: 'The company has opened branches *throughout* Southeast Asia.', ko: '그 회사는 동남아시아 전역에 지점을 열었다.', note: 'throughout + 지역: ~ 전역에' },
      { t: 'table', head: ['덩어리 표현', '뜻'], rows: [
        ['in charge of', '~을 담당하는'],
        ['on behalf of', '~을 대신하여, ~을 대표하여'],
        ['in accordance with', '~에 따라'],
        ['in compliance with', '~을 준수하여'],
        ['prior to', '~ 이전에'],
        ['regardless of', '~와 관계없이'],
        ['in response to', '~에 응하여'],
        ['on account of', '~ 때문에'],
        ['ahead of schedule', '예정보다 앞서'],
        ['at no extra cost / free of charge', '추가 비용 없이 / 무료로']
      ] },
      { t: 'tip', x: '실전 팁: 빈칸 **뒤 명사와 앞 동사**를 같이 읽으세요. "comply ___ the rules"는 with, "be responsible ___"는 for, "be eligible ___"은 for, "depend ___"은 on. 동사·형용사와 짝을 이루는 전치사가 정답의 절반입니다.' },
      { t: 'trap', x: '함정: **by vs until**. "The report must be submitted until Friday."는 틀린 문장이에요. 제출·완료·도착처럼 **한 번에 끝나는 동작은 by**, 영업·대기·유지처럼 **계속되는 상태는 until**. 둘 다 "~까지"로 해석되어 매회 함정으로 나옵니다.' }
    ],
    check: [
      { s: 'The renovation of the lobby was completed two weeks ------- schedule.', o: ['ahead of', 'in front', 'prior', 'before of'], a: 0, e: 'ahead of schedule은 "예정보다 앞서"라는 고정 표현이에요. prior는 to와 함께 써야 하고, in front와 before of는 틀린 형태입니다.' },
      { s: 'All employees must use the parking garage ------- the construction period.', o: ['while', 'during', 'among', 'unless'], a: 1, e: '빈칸 뒤가 명사구 the construction period(사건·기간)이므로 전치사 during이에요. while은 접속사라 명사만 받을 수 없어요.' },
      { s: 'Ms. Song will speak at the conference ------- the entire research team.', o: ['in charge', 'in accordance', 'on behalf of', 'regardless'], a: 2, e: '"연구팀 전체를 대표하여" 발표한다는 의미 → on behalf of예요.' },
      { s: 'All factory equipment is inspected monthly ------- government safety regulations.', o: ['on account of', 'prior to', 'in response', 'in compliance with'], a: 3, e: '"정부 안전 규정을 준수하여" 점검한다는 의미 → in compliance with예요.' }
    ]
  },
  {
    id: 'p5-15', track: 'p5', no: 15,
    title: '어휘 문제 푸는 법', sub: '콜로케이션과 어법으로 해석 전에 거른다', min: 12,
    blocks: [
      { t: 'p', x: 'Part 5 30문항 중 **10~12문항이 어휘 문제**예요. 보기가 품사는 같고 뜻만 다르게(reserve, deserve, preserve, observe) 나옵니다. 고득점자는 문장 전체를 해석하기 전에 **① 빈칸 앞뒤의 짝꿍 단어(콜로케이션)**, **② 어법(자동사·타동사, 뒤에 오는 전치사)**으로 먼저 거릅니다.' },
      { t: 'rule', h: '1단계: 콜로케이션', x: '영어 단어는 **늘 같이 다니는 짝**이 있어요.\n**meet** the deadline / the demand / the requirements\n**place** an order / **make** a reservation / **conduct** a survey\n**raise** awareness / **address** a concern / **implement** a policy' },
      { t: 'ex', en: 'We need to hire more staff to *meet* the growing demand.', ko: '늘어나는 수요를 충족하기 위해 직원을 더 채용해야 한다.', note: 'meet the demand: 수요를 충족하다' },
      { t: 'ex', en: 'The research team will *conduct* a survey of local residents.', ko: '연구팀은 지역 주민들을 대상으로 설문 조사를 실시할 것이다.', note: 'conduct a survey: 조사를 실시하다' },
      { t: 'rule', h: '2단계: 어법으로 거르기', x: '뜻이 비슷해도 **문장 구조**가 다르면 정답이 될 수 없어요.\n**respond to** / **reply to** (자동사 + to) vs **answer** (타동사, 목적어 바로)\n**inform** 사람 **of** 내용 / **notify** 사람 **of** 내용 vs **explain** 내용 **to** 사람\n**participate in** = **attend** (타동사)' },
      { t: 'ex', en: 'Please *notify* the front desk of any changes to your reservation.', ko: '예약 변경 사항이 있으면 안내 데스크에 알려 주세요.', note: 'notify + 사람 + of 내용 (explain은 사람을 목적어로 쓸 수 없음)' },
      { t: 'ex', en: 'More than 200 companies *participated* in the trade fair.', ko: '200개 이상의 기업이 무역 박람회에 참가했다.', note: '전치사 in이 뒤에 있으므로 attend(타동사)가 아니라 participate' },
      { t: 'table', head: ['혼동 어휘', '구별 포인트', '예'], rows: [
        ['reserve / deserve', '예약하다 / ~을 받을 만하다', 'reserve a table / deserve recognition'],
        ['raise / rise', '타동사(올리다) / 자동사(오르다)', 'raise prices / prices rise'],
        ['accept / except', '받아들이다 / ~을 제외하고', 'accept an offer / except Sundays'],
        ['affordable / available', '가격이 적당한 / 이용 가능한', 'affordable prices / available rooms'],
        ['considerable / considerate', '상당한 / 사려 깊은', 'considerable effort / considerate staff']
      ] },
      { t: 'tip', x: '실전 팁: 어휘 문제는 **30초 이상 쓰지 마세요.** 콜로케이션·어법으로 2개를 지우고, 남은 2개만 해석해서 고르세요. 그래도 모르면 찍고 표시한 뒤 넘어가는 것이 전체 점수에 유리합니다.' },
      { t: 'trap', x: '함정: **한국어 해석으로는 둘 다 말이 되는** 보기가 꼭 하나 있어요. "기한을 맞추다"를 보고 match the deadline을 고르면 틀립니다. 영어에서는 **meet** the deadline만 자연스러워요. 해석이 아니라 **영어 짝꿍**으로 판단하세요.' }
    ],
    check: [
      { s: 'Customers who ------- an order before noon will receive their items the same day.', o: ['place', 'make up', 'take', 'put on'], a: 0, e: 'place an order(주문하다)는 대표적인 콜로케이션이에요.' },
      { s: 'The company plans to ------- the prices of its premium products next quarter.', o: ['rise', 'raise', 'arise', 'grow up'], a: 1, e: '빈칸 뒤에 목적어 the prices가 있으므로 타동사 raise(올리다)예요. rise와 arise는 자동사라 목적어를 가질 수 없어요.' },
      { s: 'Please ------- the project manager of any delays as soon as possible.', o: ['explain', 'tell to', 'inform', 'report'], a: 2, e: '「사람 + of + 내용」 구조를 취하는 동사는 inform이에요. explain과 report는 사람을 바로 목적어로 쓰지 않습니다.' },
      { s: 'The new manager has made ------- efforts to improve communication between departments.', o: ['considerate', 'consideration', 'considering', 'considerable'], a: 3, e: '"상당한 노력"이라는 의미로 efforts를 꾸미는 형용사 considerable이 정답이에요. considerate는 "사려 깊은"으로 사람의 성품에 씁니다.' }
    ]
  },
  {
    id: 'p5-16', track: 'p5', no: 16,
    title: 'Part 5 실전 시간 단축 전략', sub: '30문항 10분 완주를 위한 유형 판별과 풀이 순서', min: 10,
    blocks: [
      { t: 'p', x: '지금까지 배운 문법을 실전에서 쓰려면 **보기를 보는 순간 유형을 판별**해야 해요. 고득점자는 문장을 처음부터 읽지 않습니다. **보기 → 빈칸 앞뒤 → (필요할 때만) 해석** 순서로 풀어요. 이 순서만 지켜도 Part 5 시간이 3~4분 줄어듭니다.' },
      { t: 'rule', h: '3초 유형 판별법', x: '**보기 어근이 같다** → 품사 문제: 빈칸 앞뒤만 (5초)\n**보기가 같은 동사의 여러 형태** → 동사 문제: 수일치·태·시제 단서 (10초)\n**보기가 접속사·전치사·관계사 혼합** → 구조 문제: 빈칸 뒤 절/구 확인 (10~15초)\n**보기 품사가 같고 뜻만 다르다** → 어휘 문제: 콜로케이션 → 해석 (20~30초)' },
      { t: 'ex', en: 'The director gave a ------- speech at the opening ceremony. (A) memory (B) memorable (C) memorably (D) memorize', ko: '이사는 개막식에서 기억에 남을 연설을 했다.', note: '어근이 같은 보기 → 품사 문제. a ___ speech → 형용사 memorable. 해석 불필요' },
      { t: 'ex', en: 'The new regulations ------- into effect next month. (A) come (B) came (C) will come (D) have come', ko: '새 규정은 다음 달에 시행된다.', note: '동사 형태 문제 → 단서 next month만 보면 will come' },
      { t: 'ex', en: '------- the store is popular, it rarely has long lines. (A) Despite (B) Although (C) Because of (D) However', ko: '그 가게는 인기가 많지만 줄이 긴 경우는 드물다.', note: '구조 문제 → 뒤에 절 + 콤마 뒤 절 → 접속사 Although' },
      { t: 'ex', en: 'Our staff will ------- your concerns promptly. (A) address (B) speak (C) reply (D) talk', ko: '저희 직원이 귀하의 우려 사항을 신속히 처리하겠습니다.', note: '어휘 문제 → 목적어를 바로 받는 타동사 + address a concern 콜로케이션' },
      { t: 'table', head: ['유형', '출제 비중(매회 약)', '목표 시간', '보는 곳'], rows: [
        ['품사', '7~9문항', '5초', '빈칸 앞뒤 한 단어'],
        ['동사(수일치·태·시제)', '4~6문항', '10초', '주어, 목적어 유무, 시간 단서'],
        ['접속사·전치사·관계사', '5~7문항', '10~15초', '빈칸 뒤 절인지 구인지'],
        ['대명사·비교 등 기타 문법', '2~4문항', '10초', '격·단서 단어'],
        ['어휘', '10~12문항', '20~30초', '콜로케이션 → 해석']
      ] },
      { t: 'rule', h: '시간 관리 루틴', x: '1. 품사·동사 문제는 **해석 없이 즉답** → 여기서 번 시간을 어휘 문제에 씁니다.\n2. 20초 안에 2개로 못 좁히면 **가장 그럴듯한 답을 찍고 문제 번호에 표시**.\n3. Part 5 종료 시각을 넘기면 **남은 문제는 빠르게 찍고 Part 6로** 이동.\n4. Part 7까지 다 끝내고 시간이 남으면 표시한 문제로 돌아옵니다.' },
      { t: 'tip', x: '실전 팁: 연습할 때부터 **10문제 단위로 스톱워치**를 재세요. 10문제 3분 30초 이내가 안정권입니다. 실전에서 갑자기 빨라지는 사람은 없어요. 평소 연습 속도가 곧 실전 속도입니다.' },
      { t: 'trap', x: '함정: **쉬운 문제에서 너무 빨리 고르다가** 생기는 실수. 품사 문제에서 빈칸 앞만 보고 형용사를 골랐는데, 뒤에 명사가 없어 부사가 정답인 경우가 대표적이에요. **빈칸 앞과 뒤를 반드시 둘 다** 보세요. 1초를 아끼려다 1문제를 잃습니다.' }
    ],
    check: [
      { s: '보기가 (A) responsible (B) responsibly (C) responsibility (D) respond 로 구성되어 있다. 가장 먼저 해야 할 일은?', o: ['문장 전체를 해석한다', '빈칸 앞뒤의 단어를 확인해 품사 자리를 판단한다', '시간 단서를 찾는다', '콜로케이션을 떠올린다'], a: 1, e: '어근이 같은 보기는 품사 문제예요. 해석 없이 빈칸 앞뒤만 보고 자리로 판단하는 것이 가장 빠릅니다.' },
      { s: 'The quarterly meeting has been postponed ------- the director is away on business.', o: ['due to', 'despite', 'because', 'however'], a: 2, e: '빈칸 뒤에 절(the director is away)이 있으므로 접속사가 필요하고, 의미상 이유 → because예요. due to·despite는 전치사, however는 접속부사입니다.' },
      { s: 'Mr. Chung handled the customer\'s complaint ------- and professionally.', o: ['efficient', 'efficiency', 'more efficient', 'efficiently'], a: 3, e: 'and 뒤의 부사 professionally와 병렬이고, 완전한 문장 뒤에서 동사를 꾸미는 자리 → 부사 efficiently예요.' },
      { s: 'Part 5에서 20초 안에 보기를 2개로 좁히지 못했을 때 가장 좋은 전략은?', o: ['가장 그럴듯한 답을 고르고 번호에 표시한 뒤 넘어간다', '정답이 나올 때까지 계속 해석한다', 'Part 6를 먼저 풀고 돌아온다', '답을 비워 두고 시험 끝에 한꺼번에 마킹한다'], a: 0, e: '한 문제에 오래 머물면 Part 7 시간이 줄어요. 일단 찍고 표시한 뒤, 시간이 남으면 돌아와 검토하는 것이 점수에 가장 유리합니다.' }
    ]
  }
]);
