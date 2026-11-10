// Part 6 장문 빈칸 세트 p6-01 ~ p6-12 (office/hr/marketing/finance/production/shopping 각 2세트)
RC_ADD('p6', [
  {
    id: 'p6-01', d: 'office', lv: 1, type: '이메일',
    title: 'To: All staff / From: Karen Liu, Office Manager / Subject: Printer replacement',
    text: 'Dear colleagues,\n\nThis is to let you know that the old printers on the second floor will be {1} this Friday. New machines will be installed by the supplier on the same day, so printing will not be available from 1 P.M. to 4 P.M. The old machines will be taken away for recycling.\n\nThe new printers are faster and can send scanned documents {2} to your e-mail account. To use them, you will need your employee ID card. {3}\n\n{4}, please print any urgent documents before Friday afternoon. If you have any questions, contact me at extension 214.\n\nThank you for your patience.\n\nKaren Liu\nOffice Manager',
    q: [
      { k: '어휘', o: ['reviewed', 'replaced', 'required', 'reminded'], a: 1, e: '해설: 제목이 Printer replacement이고 바로 뒤에 "New machines will be installed"가 이어지므로 낡은 프린터가 "교체된다(replaced)"가 자연스러워요. reviewed(검토되다), required(요구되다), reminded(상기되다)는 문맥에 맞지 않아요.' },
      { k: '문법', o: ['direct', 'directive', 'direction', 'directly'], a: 3, e: '해설: 동사 send와 목적어 scanned documents 뒤에서 동사를 꾸미는 자리이므로 부사 directly(곧바로)가 정답이에요. direct는 형용사·동사, directive와 direction은 명사라 이 자리에 올 수 없어요.' },
      { k: '문장 삽입', o: ['Simply tap the card on the reader next to each machine.', 'The supplier has offered a discount on printing paper.', 'The second-floor kitchen will also be closed on Friday.', 'Please return your card to the HR office by Friday.'], a: 0, e: '해설: 앞 문장이 "사용하려면 사원증이 필요하다"이므로, 사원증을 어떻게 쓰는지 알려 주는 "각 기기 옆 리더기에 카드를 대기만 하면 된다"가 이어져야 해요. 카드를 반납하라는 D는 앞 내용과 모순되고, B와 C는 흐름과 무관해요.' },
      { k: '연결어', o: ['However', 'Instead', 'Therefore', 'Otherwise'], a: 2, e: '해설: 첫 단락에서 금요일 오후 1~4시에 인쇄가 불가능하다고 했으므로, 그 결과로 "따라서(Therefore) 급한 문서는 금요일 오후 전에 인쇄하라"는 흐름이에요. 지문 전체 맥락을 봐야 풀 수 있는 문제예요. However(그러나), Instead(대신), Otherwise(그렇지 않으면)는 인과 관계를 나타내지 못해요.' }
    ],
    ko: '동료 여러분께,\n\n이번 금요일에 2층의 낡은 프린터가 교체된다는 점을 알려 드립니다. 같은 날 공급업체가 새 기기를 설치할 예정이어서 오후 1시부터 4시까지는 인쇄를 할 수 없습니다. 기존 기기는 재활용을 위해 수거될 예정입니다.\n\n새 프린터는 속도가 더 빠르고, 스캔한 문서를 여러분의 이메일 계정으로 곧바로 보낼 수 있습니다. 이용하려면 사원증이 필요합니다. 각 기기 옆에 있는 리더기에 카드를 대기만 하면 됩니다.\n\n따라서 급한 문서는 금요일 오후 전에 인쇄해 주시기 바랍니다. 문의 사항이 있으면 내선 214번으로 제게 연락 주세요.\n\n양해해 주셔서 감사합니다.\n\n카렌 리우\n사무실 관리자',
    voca: [['replace', '교체하다'], ['install', '설치하다'], ['supplier', '공급업체'], ['urgent', '긴급한'], ['extension', '내선 번호'], ['patience', '인내, 양해']]
  },
  {
    id: 'p6-02', d: 'office', lv: 2, type: '회람',
    title: 'MEMO — To: All department heads / From: Facilities Team / Date: March 3 / Subject: New meeting room booking system',
    text: 'Beginning on March 17, all meeting rooms at headquarters must be reserved through the new online booking system. The paper sign-up sheets currently posted outside each room {1} after March 14.\n\nThe new system allows employees to see which rooms are available in real time and to book them up to 30 days in advance. {2}, it sends an automatic reminder to the organizer one hour before each meeting.\n\nTo help staff get used to the system, the Facilities Team will hold short training sessions on March 10 and 12. {3}\n\nWe ask that department heads share this information with their teams. Please note that rooms which are booked but remain empty for more than 15 minutes will be released so that {4} colleagues can use them.',
    q: [
      { k: '문법', o: ['were removed', 'have removed', 'will be removed', 'are removing'], a: 2, e: '해설: 회람 날짜는 3월 3일이고 "3월 14일 이후"는 미래 시점이에요. 또 종이 신청서는 스스로 치우는 것이 아니라 "치워지는" 대상이므로 미래 수동태 will be removed가 정답이에요. were removed는 과거, have removed와 are removing은 능동형이라 틀려요.' },
      { k: '연결어', o: ['In addition', 'Nevertheless', 'Instead', 'For example'], a: 0, e: '해설: 앞 문장은 새 시스템의 장점(실시간 확인, 30일 전 예약)이고 뒤 문장도 또 다른 장점(자동 알림)이에요. 장점을 덧붙이므로 In addition(게다가)이 알맞아요. Nevertheless(그럼에도)는 역접, Instead(대신)는 대체, For example(예를 들어)은 예시라 맞지 않아요.' },
      { k: '문장 삽입', o: ['The rooms on the fifth floor were recently repainted.', 'Paper sign-up sheets have worked well for many years.', 'Several department heads have already retired.', 'Each session will last about 30 minutes and take place in Room 204.'], a: 3, e: '해설: 바로 앞에서 3월 10일과 12일에 짧은 교육을 연다고 했으므로, 그 교육의 시간과 장소를 알려 주는 D가 자연스러워요. B는 새 시스템 도입 취지와 어긋나고, A와 C는 관련 없는 내용이에요.' },
      { k: '문법', o: ['others', 'other', 'another', 'each other'], a: 1, e: '해설: 빈칸 뒤에 복수 명사 colleagues가 있으므로 복수 명사를 꾸밀 수 있는 형용사 other가 정답이에요. others와 each other는 대명사라 명사 앞에 올 수 없고, another는 단수 명사와만 쓰여요.' }
    ],
    ko: '3월 17일부터 본사의 모든 회의실은 새 온라인 예약 시스템을 통해 예약해야 합니다. 현재 각 회의실 밖에 붙어 있는 종이 신청서는 3월 14일 이후 철거될 예정입니다.\n\n새 시스템을 이용하면 직원들이 어느 회의실이 비어 있는지 실시간으로 확인하고, 최대 30일 전에 미리 예약할 수 있습니다. 게다가 각 회의 1시간 전에 주최자에게 자동 알림을 보내 줍니다.\n\n직원들이 시스템에 익숙해지도록 시설팀은 3월 10일과 12일에 짧은 교육을 진행할 예정입니다. 각 교육은 약 30분간 204호에서 열립니다.\n\n부서장 여러분께서는 이 내용을 팀원들과 공유해 주시기 바랍니다. 예약 후 15분 이상 비어 있는 회의실은 다른 동료들이 사용할 수 있도록 예약이 해제된다는 점에 유의해 주십시오.',
    voca: [['headquarters', '본사'], ['sign-up sheet', '신청서, 명단'], ['in real time', '실시간으로'], ['in advance', '미리'], ['get used to', '~에 익숙해지다'], ['release', '(예약 등을) 풀다, 해제하다']]
  },
  {
    id: 'p6-03', d: 'hr', lv: 1, type: '공지',
    title: 'NOTICE: Annual Health Checkups for Employees',
    text: 'All full-time employees of Brightway Logistics are invited to take part in this year\'s free health checkup program. The checkups {1} by doctors from Westside Medical Center in the training room on the first floor.\n\nThe program runs from May 6 to May 10. To choose a time, please sign up on the HR page of the company intranet by April 30. Employees {2} cannot attend during these dates may visit Westside Medical Center directly by the end of June.\n\n{3} For example, please do not eat anything after 9 P.M. on the evening before your appointment. Your results will be {4} to you by e-mail within two weeks.\n\nFor more information, contact Julie Moreno in Human Resources.',
    q: [
      { k: '문법', o: ['were conducted', 'had conducted', 'conducting', 'will be conducted'], a: 3, e: '해설: 검진 프로그램은 5월 6~10일에 열리고 4월 30일까지 신청하라고 했으므로 아직 일어나지 않은 미래의 일이에요. 또 검진은 의사에 의해 "실시되는" 것이므로 미래 수동태 will be conducted가 정답이에요. conducting은 동사 자리에 올 수 없어요.' },
      { k: '문법', o: ['what', 'whose', 'who', 'whom'], a: 2, e: '해설: 선행사 Employees(사람)를 받고, 뒤에 주어 없이 cannot attend가 이어지므로 주격 관계대명사 who가 정답이에요. whom은 목적격, whose는 소유격이라 뒤에 명사가 필요하고, what은 선행사를 포함해 앞에 명사가 올 수 없어요.' },
      { k: '문장 삽입', o: ['The training room is also used for staff meetings.', 'Some tests require you to prepare in advance.', 'Westside Medical Center opened in 1995.', 'The intranet will be closed for maintenance.'], a: 1, e: '해설: 빈칸 뒤 문장이 For example로 시작하며 "예약 전날 밤 9시 이후 금식"이라는 준비 사항을 예로 들어요. 따라서 "일부 검사는 미리 준비가 필요하다"는 B가 와야 예시와 연결돼요. 나머지는 For example 문장과 이어지지 않아요.' },
      { k: '어휘', o: ['sent', 'spent', 'taken', 'paid'], a: 0, e: '해설: 검진 결과가 2주 안에 이메일로 "보내진다(sent)"가 자연스러워요. spent(소비되다), taken(가져가지다), paid(지불되다)는 결과(results)와 by e-mail에 어울리지 않아요.' }
    ],
    ko: '브라이트웨이 로지스틱스의 모든 정규직 직원은 올해 무료 건강 검진 프로그램에 참여하실 수 있습니다. 검진은 웨스트사이드 메디컬 센터 소속 의사들이 1층 교육실에서 실시할 예정입니다.\n\n프로그램은 5월 6일부터 5월 10일까지 진행됩니다. 시간을 선택하려면 4월 30일까지 회사 인트라넷의 인사팀 페이지에서 신청해 주세요. 이 기간에 참석할 수 없는 직원은 6월 말까지 웨스트사이드 메디컬 센터를 직접 방문해도 됩니다.\n\n일부 검사는 사전 준비가 필요합니다. 예를 들어, 예약 전날 저녁 9시 이후에는 아무것도 드시지 마세요. 결과는 2주 이내에 이메일로 보내 드립니다.\n\n자세한 내용은 인사팀의 줄리 모레노에게 문의하십시오.',
    voca: [['take part in', '~에 참여하다'], ['checkup', '건강 검진'], ['conduct', '실시하다'], ['sign up', '신청하다, 등록하다'], ['appointment', '예약, 약속'], ['in advance', '미리']]
  },
  {
    id: 'p6-04', d: 'hr', lv: 3, type: '편지',
    title: 'To: Mr. Daniel Okafor / From: Sophia Brandt, Director of Human Resources, Kessler Engineering / Date: September 2 / Subject: Offer of employment',
    text: 'Dear Mr. Okafor,\n\nOn behalf of Kessler Engineering, I am pleased to offer you the position of senior project coordinator. The interview panel was particularly impressed by your experience {1} large infrastructure projects across several countries.\n\nAs discussed, your starting salary will be $78,000 per year, and you will be eligible for a performance bonus after six months. {2}, the company will cover reasonable relocation expenses of up to $5,000, provided that you submit receipts within 60 days of your start date.\n\n{3} Should you accept, we would like you to begin on October 1, when our new team is scheduled to launch its first project.\n\nPlease confirm your decision by signing the enclosed contract and returning it no later than September 16. We look forward to {4} you to the team.\n\nSincerely,\nSophia Brandt',
    q: [
      { k: '어휘', o: ['overseeing', 'overlooking', 'overtaking', 'overcoming'], a: 0, e: '해설: 면접단이 감명받은 것은 여러 나라의 대규모 인프라 프로젝트를 "감독·관리한(overseeing)" 경험이에요. 프로젝트 코디네이터 직책과도 어울려요. overlooking(간과하다, 내려다보다), overtaking(추월하다), overcoming(극복하다)은 projects와 의미상 맞지 않아요.' },
      { k: '연결어', o: ['Otherwise', 'Furthermore', 'Consequently', 'Nonetheless'], a: 1, e: '해설: 앞 문장은 연봉과 성과급, 뒤 문장은 이사 비용 지원으로, 혜택을 추가로 나열하고 있어요. 따라서 Furthermore(게다가)가 정답이에요. Otherwise(그렇지 않으면), Consequently(결과적으로), Nonetheless(그럼에도 불구하고)는 첨가의 의미가 아니에요.' },
      { k: '문장 삽입', o: ['Unfortunately, the position has already been filled.', 'We have received your application and will review it shortly.', 'Enclosed you will find a detailed description of the benefits package.', 'Our office will be closed on September 16.'], a: 2, e: '해설: 앞 단락이 급여·성과급·이사 비용 등 처우를 설명하고, 뒤 단락에서 동봉한 계약서(enclosed contract)를 언급하므로 "복리후생 상세 설명을 동봉한다"는 C가 자연스러워요. A는 채용 제안과 모순되고, B는 이미 합격한 상황과 맞지 않으며, D는 회신 기한 날짜와 충돌해요.' },
      { k: '문법', o: ['welcome', 'be welcomed', 'have welcomed', 'welcoming'], a: 3, e: '해설: look forward to의 to는 전치사이므로 뒤에 동명사가 와야 해요. 따라서 welcoming이 정답이에요. to부정사로 착각해 동사원형 welcome을 고르기 쉬운 함정 문제예요.' }
    ],
    ko: '오카포 씨께,\n\n케슬러 엔지니어링을 대표하여 귀하께 선임 프로젝트 코디네이터 직책을 제안하게 되어 기쁩니다. 면접단은 여러 나라에서 대규모 인프라 프로젝트를 관리하신 귀하의 경험에 특히 깊은 인상을 받았습니다.\n\n논의한 대로 초봉은 연 7만 8천 달러이며, 6개월 후에는 성과급을 받을 자격이 생깁니다. 게다가 근무 시작일로부터 60일 이내에 영수증을 제출하시면 회사가 최대 5천 달러까지 합리적인 이사 비용을 부담합니다.\n\n복리후생 제도에 대한 상세한 설명을 동봉합니다. 제안을 수락하신다면 저희 새 팀이 첫 프로젝트를 시작할 예정인 10월 1일부터 근무를 시작해 주셨으면 합니다.\n\n동봉된 계약서에 서명하여 늦어도 9월 16일까지 회신해 주시면서 결정을 확정해 주십시오. 귀하를 팀에 맞이하기를 고대합니다.\n\n소피아 브란트 드림',
    voca: [['on behalf of', '~을 대표하여'], ['be eligible for', '~할 자격이 있다'], ['relocation expenses', '이전(이사) 비용'], ['provided that', '~라면, ~라는 조건으로'], ['enclosed', '동봉된'], ['no later than', '늦어도 ~까지']]
  },
  {
    id: 'p6-05', d: 'marketing', lv: 2, type: '광고',
    title: 'Pixelpoint Studio — Grow Your Brand Online',
    text: 'Is your small business struggling to stand out on social media? Pixelpoint Studio can help. For more than ten years, we {1} local companies create eye-catching content that attracts new customers.\n\nOur team of designers, writers, and photographers will work closely with you to develop a strategy that suits your budget. {2} you need a single promotional video or a full six-month campaign, we have a package for you.\n\nThis month only, new clients will receive a free analysis of their current online presence. {3}\n\nTo take advantage of this offer, book a consultation at www.pixelpointstudio.com before June 30. Spaces are limited, so we {4} encourage you to reserve early.',
    q: [
      { k: '문법', o: ['help', 'have helped', 'will help', 'are helping'], a: 1, e: '해설: "For more than ten years(10년 넘게)"는 과거부터 지금까지 이어지는 기간을 나타내므로 현재완료 have helped가 정답이에요. 현재·미래·현재진행 시제는 기간 표현 for와 어울리지 않아요.' },
      { k: '연결어', o: ['Whether', 'Unless', 'Because', 'Although'], a: 0, e: '해설: 빈칸 뒤에 "A or B" 구조(a single promotional video or a full six-month campaign)가 있으므로 "A든 B든"을 뜻하는 Whether가 정답이에요. Unless(~하지 않는 한), Because(~ 때문에), Although(비록 ~지만)는 or와 짝을 이루지 않아요.' },
      { k: '문장 삽입', o: ['Our office is located next to the city library.', 'We are currently hiring experienced photographers.', 'Social media was first used by businesses in the 2000s.', 'This report will show you exactly where your brand can improve.'], a: 3, e: '해설: 앞 문장이 신규 고객에게 온라인 현황 "무료 분석"을 제공한다는 내용이므로, 그 분석 보고서(This report)가 무엇을 알려 주는지 설명하는 D가 자연스러워요. A, B, C는 이벤트 혜택과 관련이 없어요.' },
      { k: '문법', o: ['strong', 'strength', 'strongly', 'stronger'], a: 2, e: '해설: 주어 we와 동사 encourage 사이에서 동사를 꾸미는 자리이므로 부사 strongly가 정답이에요. strong·stronger는 형용사, strength는 명사라 이 자리에 올 수 없어요. "strongly encourage(강력히 권하다)"는 자주 쓰이는 표현이에요.' }
    ],
    ko: '귀사의 소규모 사업체가 소셜 미디어에서 눈에 띄는 데 어려움을 겪고 있나요? 픽셀포인트 스튜디오가 도와드립니다. 저희는 10년 넘게 지역 기업들이 새로운 고객을 끌어들이는 눈길 끄는 콘텐츠를 만들도록 도와 왔습니다.\n\n디자이너, 작가, 사진작가로 구성된 저희 팀이 고객님과 긴밀히 협력하여 예산에 맞는 전략을 개발해 드립니다. 홍보 영상 한 편이 필요하든 6개월짜리 전체 캠페인이 필요하든, 고객님께 맞는 패키지가 있습니다.\n\n이번 달에 한해 신규 고객은 현재 온라인 현황에 대한 무료 분석을 받으실 수 있습니다. 이 보고서는 고객님의 브랜드가 정확히 어디를 개선할 수 있는지 보여 드릴 것입니다.\n\n이 혜택을 이용하시려면 6월 30일 전에 www.pixelpointstudio.com에서 상담을 예약하세요. 자리가 한정되어 있으니 일찍 예약하실 것을 강력히 권해 드립니다.',
    voca: [['stand out', '눈에 띄다'], ['eye-catching', '눈길을 끄는'], ['suit', '~에 맞다'], ['online presence', '온라인 존재감(노출 현황)'], ['take advantage of', '~을 이용하다'], ['consultation', '상담']]
  },
  {
    id: 'p6-06', d: 'marketing', lv: 3, type: '기사',
    title: 'Local Coffee Chain Turns to Customers for New Flavors',
    text: 'PORTLAND — Harbor Bean Coffee, which operates 14 cafés across the region, has found an unusual way to develop new products: it lets its customers design them. Last spring, the company invited regular customers to submit ideas for seasonal drinks through its mobile app. More than 3,000 suggestions {1} in the first month alone.\n\n"We were surprised by how creative people were," said marketing director Elena Ruiz. "{2}, many of the ideas were more practical than we expected." The three most popular drinks were added to the menu in October, and sales rose by 18 percent compared with the same period last year.\n\n{3} The company now plans to expand the program to include snacks and pastries. Ruiz believes the approach builds {4} among customers. "When people see their idea on the menu, they feel the brand belongs to them," she explained.',
    q: [
      { k: '문법', o: ['submitted', 'have submitted', 'were received', 'will receive'], a: 2, e: '해설: 지난봄(Last spring)의 일이므로 과거 시제여야 하고, 제안(suggestions)은 회사에 "접수되는" 대상이므로 과거 수동태 were received가 정답이에요. submitted를 능동으로 보면 제안이 무언가를 제출했다는 뜻이 되어 어색하고, have submitted와 will receive는 시제가 맞지 않아요.' },
      { k: '연결어', o: ['Instead', 'Otherwise', 'As a result', 'What is more'], a: 3, e: '해설: "사람들이 얼마나 창의적인지 놀랐다"에 이어 "아이디어가 예상보다 실용적이었다"는 또 하나의 긍정적 놀라움을 덧붙이므로 What is more(게다가)가 알맞아요. 앞 문장이 원인이 아니므로 As a result는 틀리고, Instead와 Otherwise도 의미가 맞지 않아요.' },
      { k: '문장 삽입', o: ['The success has encouraged Harbor Bean to try the idea again.', 'Harbor Bean was founded by two brothers in 1998.', 'Customers complained that the app was difficult to use.', 'The drinks were removed from the menu after a week.'], a: 0, e: '해설: 앞 단락에서 매출이 18% 올랐다는 성과를 말하고, 뒤 문장은 프로그램을 간식과 페이스트리로 확대할 계획이라고 해요. "이 성공으로 회사가 그 아이디어를 다시 시도하게 되었다"는 A가 두 내용을 이어 줘요. C와 D는 성공 흐름과 모순되고, B는 무관해요.' },
      { k: '어휘', o: ['facility', 'loyalty', 'royalty', 'priority'], a: 1, e: '해설: 뒤에서 "메뉴에서 자기 아이디어를 보면 브랜드가 자기 것이라고 느낀다"고 설명하므로, 고객들 사이에 "충성도(loyalty)"를 쌓는다는 뜻이 자연스러워요. 철자가 비슷한 royalty(저작권 사용료)는 함정이고, facility(시설), priority(우선순위)도 맞지 않아요.' }
    ],
    ko: '포틀랜드 — 지역 전역에서 14개 카페를 운영하는 하버 빈 커피가 신제품을 개발하는 색다른 방법을 찾아냈다. 바로 고객에게 직접 제품을 디자인하게 하는 것이다. 지난봄 이 회사는 단골 고객들에게 모바일 앱을 통해 계절 음료 아이디어를 제출해 달라고 요청했다. 첫 달에만 3천 건이 넘는 제안이 접수되었다.\n\n"사람들이 얼마나 창의적인지 보고 놀랐습니다." 마케팅 이사 엘레나 루이즈가 말했다. "게다가 많은 아이디어가 저희 예상보다 실용적이었습니다." 가장 인기 있었던 음료 세 가지가 10월에 메뉴에 추가되었고, 매출은 작년 같은 기간보다 18% 증가했다.\n\n이 성공에 힘입어 하버 빈은 이 아이디어를 다시 시도하기로 했다. 회사는 이제 이 프로그램을 간식과 페이스트리까지 확대할 계획이다. 루이즈는 이 방식이 고객들 사이에 충성도를 쌓는다고 믿는다. "자기 아이디어가 메뉴에 오른 것을 보면 사람들은 브랜드가 자기 것이라고 느낍니다." 그녀가 설명했다.',
    voca: [['operate', '운영하다'], ['submit', '제출하다'], ['seasonal', '계절의, 계절 한정의'], ['practical', '실용적인'], ['compared with', '~와 비교하여'], ['loyalty', '충성도']]
  },
  {
    id: 'p6-07', d: 'finance', lv: 1, type: '회람',
    title: 'MEMO — To: All staff / From: Accounting Department / Subject: New expense report deadline',
    text: 'Please note that the deadline for submitting expense reports has changed. Starting this month, all reports must be submitted by the fifth business day of the following month. {1}, reports for July must be received by August 7.\n\nReports should be submitted through the online expense system. Be sure to attach a {2} for every item over $25. Reports without the necessary documents will be returned to the employee.\n\n{3} However, this change will allow the Accounting Department to close the monthly books more quickly. Employees who submit their reports on time will be repaid within ten days.\n\nIf you have any questions about the new policy, please {4} Mark Hensley at extension 330.',
    q: [
      { k: '연결어', o: ['For example', 'However', 'In contrast', 'Nevertheless'], a: 0, e: '해설: 앞 문장은 "다음 달 다섯 번째 영업일까지 제출"이라는 규칙이고, 뒤 문장은 "7월 보고서는 8월 7일까지"라는 구체적인 사례예요. 따라서 For example(예를 들어)이 정답이에요. However, In contrast, Nevertheless는 모두 대조·역접이라 맞지 않아요.' },
      { k: '어휘', o: ['recipe', 'reception', 'receipt', 'recipient'], a: 2, e: '해설: 경비 보고서에 25달러가 넘는 항목마다 첨부해야 하는 것은 "영수증(receipt)"이에요. 뒤 문장의 necessary documents(필요 서류)도 단서예요. recipe(조리법), reception(접수처, 환영회), recipient(수령인)는 철자가 비슷한 함정이에요.' },
      { k: '문장 삽입', o: ['The online system will be replaced next year.', 'Mark Hensley joined the company last week.', 'Travel expenses will no longer be repaid.', 'We understand that this deadline is earlier than the previous one.'], a: 3, e: '해설: 빈칸 뒤 문장이 However로 시작해 "하지만 이 변경으로 결산을 더 빨리 할 수 있다"는 장점을 말해요. 그 앞에는 변경의 단점을 인정하는 문장이 와야 하므로 "이전보다 마감이 빨라진 것을 이해한다"는 D가 정답이에요. C는 바로 뒤의 "제때 제출하면 10일 안에 환급"과 모순돼요.' },
      { k: '문법', o: ['contacting', 'contact', 'contacted', 'to contact'], a: 1, e: '해설: please 뒤에는 명령문이 오므로 동사원형 contact가 정답이에요. contacting, contacted, to contact는 명령문의 동사 자리에 올 수 없어요.' }
    ],
    ko: '경비 보고서 제출 마감일이 변경되었음을 알려 드립니다. 이번 달부터 모든 보고서는 다음 달 다섯 번째 영업일까지 제출해야 합니다. 예를 들어 7월 보고서는 8월 7일까지 접수되어야 합니다.\n\n보고서는 온라인 경비 시스템을 통해 제출해 주세요. 25달러가 넘는 모든 항목에는 반드시 영수증을 첨부하십시오. 필요한 서류가 없는 보고서는 직원에게 반려됩니다.\n\n이번 마감일이 이전보다 빨라졌다는 점은 저희도 잘 알고 있습니다. 하지만 이번 변경으로 회계부는 월말 결산을 더 빨리 마감할 수 있습니다. 보고서를 기한 내에 제출한 직원은 10일 이내에 환급받게 됩니다.\n\n새 정책에 관해 문의 사항이 있으면 내선 330번으로 마크 헨슬리에게 연락하십시오.',
    voca: [['expense report', '경비 보고서'], ['business day', '영업일'], ['attach', '첨부하다'], ['receipt', '영수증'], ['close the books', '장부를 마감하다, 결산하다'], ['repay', '상환하다, 환급하다']]
  },
  {
    id: 'p6-08', d: 'finance', lv: 2, type: '이메일',
    title: 'To: Ryan Choi / From: Natalie Ford, Westbrook Bank / Date: November 4 / Subject: Your business loan application',
    text: 'Dear Mr. Choi,\n\nThank you for applying for a business loan with Westbrook Bank. We have reviewed the documents you submitted on October 28, and your application is {1} complete.\n\nBefore we can make a final decision, however, we need one more item: your company\'s financial statements for the most recent quarter. {2} you send these by November 15, we should be able to complete the review by the end of the month.\n\n{3} Simply log in to your account and click "Upload Documents." Files must be in PDF format and no larger than 10 MB.\n\nOnce the loan is approved, the funds will be transferred to your business account within three business days. Please let me know if I can {4} you with anything else.\n\nBest regards,\nNatalie Ford\nLoan Officer',
    q: [
      { k: '어휘', o: ['highly', 'closely', 'widely', 'nearly'], a: 3, e: '해설: 다음 단락에서 "최종 결정 전에 서류가 하나 더 필요하다"고 하므로 신청서는 "거의(nearly)" 완료된 상태예요. highly(매우), closely(면밀히), widely(널리)는 complete와 이런 의미로 어울리지 않아요. 뒤 문맥까지 봐야 풀리는 문제예요.' },
      { k: '연결어', o: ['Unless', 'If', 'Although', 'Whereas'], a: 1, e: '해설: "11월 15일까지 보내 주시면 월말까지 심사를 마칠 수 있다"는 조건 관계이므로 If가 정답이에요. Unless(~하지 않으면)는 의미가 반대가 되고, Although(비록 ~지만)와 Whereas(반면에)는 양보·대조라 맞지 않아요.' },
      { k: '문장 삽입', o: ['You can submit the statements through our secure online portal.', 'Our branch will be closed on November 15.', 'The loan has already been transferred to your account.', 'We are pleased to announce a new savings account.'], a: 0, e: '해설: 빈칸 뒤에 "계정에 로그인해 Upload Documents를 클릭하라"는 제출 방법이 이어지므로, "보안 온라인 포털로 재무제표를 제출할 수 있다"는 A가 자연스러워요. C는 아직 승인 전이라는 내용과 모순되고, B와 D는 흐름과 무관해요.' },
      { k: '문법', o: ['helps', 'helping', 'help', 'helped'], a: 2, e: '해설: 조동사 can 뒤에는 동사원형이 와야 하므로 help가 정답이에요. "help A with B(A가 B하는 것을 돕다)" 구조도 함께 알아 두세요.' }
    ],
    ko: '최 선생님께,\n\n웨스트브룩 은행에 사업자 대출을 신청해 주셔서 감사합니다. 10월 28일에 제출하신 서류를 검토했으며, 신청서는 거의 완료되었습니다.\n\n하지만 최종 결정을 내리기 전에 한 가지 서류가 더 필요합니다. 바로 귀사의 최근 분기 재무제표입니다. 11월 15일까지 보내 주시면 이달 말까지 심사를 마칠 수 있을 것입니다.\n\n재무제표는 저희 보안 온라인 포털을 통해 제출하실 수 있습니다. 계정에 로그인하신 후 "Upload Documents"를 클릭하시기만 하면 됩니다. 파일은 PDF 형식이어야 하며 10MB를 넘으면 안 됩니다.\n\n대출이 승인되면 자금은 영업일 기준 3일 이내에 귀사의 사업자 계좌로 이체됩니다. 그 밖에 도와드릴 일이 있으면 알려 주십시오.\n\n나탈리 포드 드림\n대출 담당자',
    voca: [['apply for', '~을 신청하다'], ['financial statement', '재무제표'], ['quarter', '분기'], ['secure', '안전한, 보안이 된'], ['approve', '승인하다'], ['transfer', '이체하다']]
  },
  {
    id: 'p6-09', d: 'production', lv: 2, type: '안내문',
    title: 'Visitor Guidelines — Norland Packaging Plant Tours',
    text: 'Thank you for your interest in touring the Norland Packaging plant. To ensure the safety of all visitors, please read the following guidelines carefully.\n\nAll tours begin at the main reception desk, where visitors must sign in and receive a visitor badge. Badges must be worn {1} at all times while inside the facility.\n\nSafety glasses and ear protection will be provided at the entrance to the production floor. {2}, visitors must wear closed-toe shoes; those wearing sandals will not be permitted to enter.\n\nPhotography is not allowed in production areas because some of our equipment uses {3} technology. {4}\n\nTours last approximately 90 minutes. Groups of more than ten people should contact our community relations office at least two weeks in advance.',
    q: [
      { k: '문법', o: ['visible', 'visibility', 'visibly', 'vision'], a: 2, e: '해설: "Badges must be worn" 뒤에서 동사 worn을 꾸미는 자리이므로 부사 visibly(눈에 잘 띄게)가 정답이에요. visible은 형용사, visibility와 vision은 명사라 수동태 동사 뒤 수식어 자리에 맞지 않아요.' },
      { k: '연결어', o: ['In addition', 'Instead', 'As a result', 'For instance'], a: 0, e: '해설: 앞 문장은 보안경과 귀마개를 제공한다는 안전 수칙이고, 뒤 문장은 앞이 막힌 신발을 신어야 한다는 또 다른 수칙이에요. 수칙을 덧붙이므로 In addition(또한)이 정답이에요. 신발 규정은 앞 문장의 예시나 결과가 아니므로 For instance, As a result는 틀려요.' },
      { k: '어휘', o: ['proprietor', 'proprietary', 'property', 'proper'], a: 1, e: '해설: 사진 촬영을 금지하는 이유는 일부 장비가 "독점적인(proprietary)" 기술, 즉 회사 고유 기술을 쓰기 때문이에요. 명사 technology를 꾸미는 형용사 자리이기도 해요. proprietor(소유주)와 property(재산)는 명사이고, proper(적절한)는 의미가 맞지 않아요.' },
      { k: '문장 삽입', o: ['The plant was built in 1987.', 'Badges can be picked up at the cafeteria.', 'Sandals are available for purchase in our gift shop.', 'However, pictures may be taken in the lobby and visitor center.'], a: 3, e: '해설: 앞 문장이 "생산 구역에서는 사진 촬영 금지"이므로, However로 예외를 알려 주는 "로비와 방문자 센터에서는 촬영 가능"이 자연스럽게 이어져요. B는 배지를 안내 데스크에서 받는다는 내용과 모순되고, C는 샌들 착용 금지 규정과 어색하며, A는 무관해요.' }
    ],
    ko: '노랜드 패키징 공장 견학에 관심을 가져 주셔서 감사합니다. 모든 방문객의 안전을 위해 다음 안내 사항을 주의 깊게 읽어 주십시오.\n\n모든 견학은 중앙 안내 데스크에서 시작되며, 방문객은 이곳에서 방문 등록을 하고 방문자 배지를 받아야 합니다. 시설 내부에 있는 동안에는 항상 배지를 눈에 잘 띄게 착용해야 합니다.\n\n보안경과 귀마개는 생산 현장 입구에서 제공됩니다. 또한 방문객은 앞이 막힌 신발을 신어야 하며, 샌들을 신은 분은 입장이 허용되지 않습니다.\n\n일부 장비에 당사 고유 기술이 사용되기 때문에 생산 구역에서는 사진 촬영이 금지됩니다. 하지만 로비와 방문자 센터에서는 사진을 찍으셔도 됩니다.\n\n견학은 약 90분 동안 진행됩니다. 10명이 넘는 단체는 최소 2주 전에 지역 홍보실로 연락해 주십시오.',
    voca: [['ensure', '보장하다'], ['sign in', '방문 등록하다'], ['at all times', '항상'], ['be permitted to', '~하도록 허용되다'], ['proprietary', '독점적인, 고유의'], ['approximately', '대략']]
  },
  {
    id: 'p6-10', d: 'production', lv: 3, type: '기사',
    title: 'Automaker Expands Battery Production in Ohio',
    text: 'COLUMBUS — Veltra Motors announced on Tuesday that it will invest $450 million to expand its battery plant outside Columbus. The project is expected to double the facility\'s output and create about 600 new jobs over the next three years.\n\nThe announcement comes as demand for electric vehicles continues to rise. Veltra\'s current plant has been operating at full capacity since early last year, {1} delays in deliveries to several dealerships.\n\n"Adding production lines here will allow us to respond to orders much more {2}," said Veltra\'s chief operating officer, Marcus Hale. Construction is scheduled to begin in March. {3}, the company will continue to rely on overseas suppliers for some components until the expansion is complete.\n\n{4} Local officials welcomed the news, noting that the region has lost several manufacturing employers over the past decade.',
    q: [
      { k: '문법', o: ['causes', 'causing', 'caused', 'to have caused'], a: 1, e: '해설: 콤마 앞에 이미 완전한 문장(The plant has been operating ...)이 있으므로 빈칸에는 동사가 아니라 결과를 나타내는 분사구문이 와야 해요. 뒤에 목적어 delays가 있으므로 능동의 현재분사 causing이 정답이에요. causes는 접속사 없이 동사가 두 번 오게 되고, 과거분사 caused는 목적어를 취할 수 없어요.' },
      { k: '어휘', o: ['rarely', 'briefly', 'loosely', 'efficiently'], a: 3, e: '해설: 앞 단락에서 공장이 풀가동 중이라 납품이 지연되었다고 했으므로, 생산 라인을 늘리면 주문에 "더 효율적으로(efficiently)" 대응할 수 있다는 흐름이에요. rarely(거의 ~않게), briefly(짧게), loosely(느슨하게)는 맥락에 맞지 않아요.' },
      { k: '연결어', o: ['Similarly', 'Because of this', 'In the meantime', 'On the contrary'], a: 2, e: '해설: 공사가 3월에 시작되고 확장이 끝날 "때까지" 해외 공급업체에 계속 의존한다는 내용이므로, "그동안(In the meantime)"이 정답이에요. Similarly(마찬가지로), Because of this(이 때문에), On the contrary(반대로)는 시간적 흐름을 나타내지 못해요.' },
      { k: '문장 삽입', o: ['The company also plans to partner with a nearby college to train new workers.', 'Veltra closed its Columbus plant last year.', 'Electric vehicles remain unpopular in the region.', 'Mr. Hale will retire at the end of the month.'], a: 0, e: '해설: 뒤 문장에서 지역 관계자들이 "제조업 고용주가 줄어든 지역"이라며 소식을 반겼으므로, 신규 인력 양성 계획을 덧붙이는 A가 자연스러워요. B는 공장이 현재 풀가동 중이라는 내용과, C는 전기차 수요 증가와 모순되고, D는 무관해요.' }
    ],
    ko: '콜럼버스 — 벨트라 모터스는 화요일, 콜럼버스 외곽의 배터리 공장을 확장하기 위해 4억 5천만 달러를 투자하겠다고 발표했다. 이 사업으로 공장의 생산량이 두 배로 늘고 향후 3년간 약 600개의 새 일자리가 생길 것으로 예상된다.\n\n이번 발표는 전기차 수요가 계속 증가하는 가운데 나왔다. 벨트라의 현재 공장은 작년 초부터 최대 가동률로 운영되어 왔으며, 이로 인해 여러 대리점에 대한 납품이 지연되었다.\n\n"이곳에 생산 라인을 추가하면 훨씬 더 효율적으로 주문에 대응할 수 있을 것입니다." 벨트라의 최고운영책임자 마커스 헤일이 말했다. 공사는 3월에 시작될 예정이다. 그동안 회사는 확장이 완료될 때까지 일부 부품을 계속 해외 공급업체에 의존할 것이다.\n\n회사는 또한 신규 인력을 양성하기 위해 인근 대학과 협력할 계획이다. 지역 관계자들은 지난 10년간 이 지역에서 여러 제조업체가 떠났다는 점을 언급하며 이 소식을 반겼다.',
    voca: [['invest', '투자하다'], ['output', '생산량'], ['at full capacity', '최대 가동률로, 풀가동으로'], ['dealership', '대리점'], ['rely on', '~에 의존하다'], ['component', '부품']]
  },
  {
    id: 'p6-11', d: 'shopping', lv: 1, type: '광고',
    title: 'Grand Opening — FreshCart Market on Elm Street',
    text: 'FreshCart Market is opening its newest store at 210 Elm Street on Saturday, April 5! Come and see our wide selection of fresh fruit, vegetables, and baked goods, all at {1} prices.\n\nTo celebrate, the first 100 shoppers on opening day will receive a free reusable shopping bag. {2}, all customers who spend $50 or more will get a $10 gift card for their next visit.\n\n{3} Simply download the FreshCart app and sign up for our rewards program. Members earn points on every purchase and receive special weekly offers.\n\nThe store is open every day from 7 A.M. to 10 P.M. Free parking is {4} behind the building. We look forward to seeing you!',
    q: [
      { k: '어휘', o: ['affordable', 'capable', 'eligible', 'responsible'], a: 0, e: '해설: 명사 prices(가격)를 꾸며 "저렴한 가격"이라는 뜻이 되는 affordable이 정답이에요. capable(능력 있는), eligible(자격이 있는), responsible(책임 있는)은 사람을 묘사하는 말이라 prices와 어울리지 않아요.' },
      { k: '연결어', o: ['Instead', 'However', 'In addition', 'Otherwise'], a: 2, e: '해설: 앞 문장은 선착순 100명에게 장바구니 증정, 뒤 문장은 50달러 이상 구매 시 상품권 증정으로 개업 혜택을 하나 더 소개해요. 따라서 In addition(또한)이 정답이에요. Instead, However, Otherwise는 첨가의 의미가 없어요.' },
      { k: '문장 삽입', o: ['Our Elm Street store will close next month.', 'Saving money at FreshCart is easy.', 'Parking is not available on opening day.', 'We are looking for experienced cashiers.'], a: 1, e: '해설: 빈칸 뒤에 "앱을 내려받고 리워드 프로그램에 가입하기만 하면 된다"는 절약 방법이 이어지므로 "프레시카트에서는 돈을 아끼기 쉽다"는 B가 알맞아요. A는 개업 광고와 모순되고, C는 무료 주차 안내와 충돌하며, D는 무관해요.' },
      { k: '문법', o: ['avail', 'availably', 'availability', 'available'], a: 3, e: '해설: be동사 is 뒤의 보어 자리이므로 형용사 available(이용 가능한)이 정답이에요. avail은 동사·명사, availability는 명사, availably는 일반적으로 쓰지 않는 부사라 맞지 않아요.' }
    ],
    ko: '프레시카트 마켓이 4월 5일 토요일, 엘름가 210번지에 최신 매장을 엽니다! 신선한 과일, 채소, 제과류를 모두 저렴한 가격에 다양하게 만나 보세요.\n\n개업을 기념하여 개업일 선착순 100명의 고객에게 재사용 가능한 장바구니를 무료로 드립니다. 또한 50달러 이상 구매하시는 모든 고객께 다음 방문 시 사용할 수 있는 10달러 상품권을 드립니다.\n\n프레시카트에서는 돈을 아끼기가 쉽습니다. 프레시카트 앱을 내려받고 리워드 프로그램에 가입하기만 하면 됩니다. 회원은 구매할 때마다 포인트를 적립하고 매주 특별 할인 혜택을 받습니다.\n\n매장은 매일 오전 7시부터 오후 10시까지 영업합니다. 건물 뒤편에 무료 주차장이 있습니다. 여러분을 만나 뵙기를 기대합니다!',
    voca: [['wide selection', '다양한 상품 구색'], ['affordable', '(가격이) 저렴한'], ['reusable', '재사용 가능한'], ['gift card', '상품권'], ['rewards program', '포인트 적립 프로그램'], ['available', '이용 가능한']]
  },
  {
    id: 'p6-12', d: 'shopping', lv: 2, type: '편지',
    title: 'To: Ms. Laura Bennett / From: Alan Park, Homestyle Appliances / Date: February 12 / Subject: Your recent order',
    text: 'Dear Ms. Bennett,\n\nThank you for contacting us about the coffee maker you ordered on February 3. We are sorry to hear that it arrived with a cracked water tank, and we sincerely apologize for the {1}.\n\nWe have already shipped a replacement unit to your address at no additional cost. It {2} arrive within three to five business days. {3} A courier will pick up the damaged item when the new one is delivered, so there is no need to package it yourself.\n\n{4}, we have added a $20 credit to your Homestyle account, which you can use on your next purchase. This credit is valid until the end of the year.\n\nIf there is anything else we can do, please call us at 1-800-555-0192.\n\nSincerely,\nAlan Park\nCustomer Service Manager',
    q: [
      { k: '어휘', o: ['inspection', 'installation', 'instruction', 'inconvenience'], a: 3, e: '해설: 파손된 제품이 배송된 데 대해 사과하는 문장이므로 "불편(inconvenience)"을 끼쳐 사과한다는 뜻이 자연스러워요. "apologize for the inconvenience"는 고객 응대 편지의 대표 표현이에요. inspection(검사), installation(설치), instruction(지시)은 맞지 않아요.' },
      { k: '문법', o: ['has', 'should', 'is', 'had'], a: 1, e: '해설: 빈칸 뒤에 동사원형 arrive가 있으므로 조동사 should(~할 것이다)가 정답이에요. has, had 뒤에는 과거분사, is 뒤에는 -ing나 과거분사가 와야 하므로 동사원형 arrive와 쓸 수 없어요.' },
      { k: '문장 삽입', o: ['Your coffee maker has been repaired at our service center.', 'Please mail the damaged unit back to us as soon as possible.', 'You do not need to return the damaged coffee maker in advance.', 'Our store will be closed for inventory next week.'], a: 2, e: '해설: 뒤 문장에서 "새 제품이 배달될 때 택배 기사가 파손품을 수거하니 직접 포장할 필요가 없다"고 하므로 "파손된 제품을 미리 반품할 필요가 없다"는 C가 자연스러워요. B는 직접 우편 반송을 요구해 뒤 내용과 모순되고, A는 교체품을 보냈다는 내용과 맞지 않아요.' },
      { k: '연결어', o: ['In addition', 'Even so', 'Otherwise', 'For instance'], a: 0, e: '해설: 교체품을 무료로 보낸 데 이어 20달러 적립금이라는 보상을 하나 더 제공하므로 In addition(또한)이 정답이에요. Even so(그렇다 하더라도), Otherwise(그렇지 않으면), For instance(예를 들어)는 추가 보상을 덧붙이는 흐름과 맞지 않아요.' }
    ],
    ko: '베넷 고객님께,\n\n2월 3일에 주문하신 커피 메이커와 관련하여 연락해 주셔서 감사합니다. 제품이 물탱크에 금이 간 채 도착했다니 유감이며, 불편을 끼쳐 드린 점 진심으로 사과드립니다.\n\n저희는 이미 추가 비용 없이 고객님의 주소로 교체품을 발송했습니다. 영업일 기준 3~5일 이내에 도착할 것입니다. 파손된 커피 메이커를 미리 반품하실 필요는 없습니다. 새 제품이 배달될 때 택배 기사가 파손된 제품을 수거하므로 직접 포장하실 필요가 없습니다.\n\n또한 고객님의 홈스타일 계정에 20달러의 적립금을 추가해 드렸으며, 다음 구매 시 사용하실 수 있습니다. 이 적립금은 올해 말까지 유효합니다.\n\n저희가 더 도와드릴 일이 있으면 1-800-555-0192로 전화해 주십시오.\n\n앨런 박 드림\n고객 서비스 관리자',
    voca: [['cracked', '금이 간'], ['replacement', '교체품'], ['at no additional cost', '추가 비용 없이'], ['courier', '택배 기사, 배송업체'], ['credit', '적립금'], ['valid', '유효한']]
  }
]);
