// 토익 Part 7 단일 지문 세트 p7-14 ~ p7-26
RC_ADD('p7', [
  {
    id: 'p7-14', d: 'travel', lv: 1, kind: 'single',
    docs: [
      {
        type: '문자 메시지', title: 'Text message chain',
        text: 'Daniel Reyes [2:14 P.M.]: Hi Ms. Okafor. My flight from Chicago just landed, but it was delayed by almost two hours. I\'m afraid I\'ll miss the 3:30 meeting with the Harlow team.\nGrace Okafor [2:16 P.M.]: No problem. I\'ll let them know. Are you heading to the hotel first?\nDaniel Reyes [2:17 P.M.]: I was planning to, but I could go straight to their office if that helps.\nGrace Okafor [2:19 P.M.]: Don\'t worry about it. They\'ve already agreed to move the meeting to tomorrow morning at 9:00.\nDaniel Reyes [2:20 P.M.]: That\'s a relief. I\'ll check in at the Westbrook Hotel and review the proposal tonight.\nGrace Okafor [2:22 P.M.]: Great. I\'ll e-mail you the updated agenda within the hour.',
        ko: 'Daniel Reyes [오후 2:14]: 안녕하세요, Okafor 씨. 시카고발 비행기가 방금 착륙했는데 거의 두 시간이 지연됐어요. 3시 30분 Harlow 팀과의 회의에 못 갈 것 같아요.\nGrace Okafor [오후 2:16]: 괜찮아요. 제가 그쪽에 알릴게요. 호텔로 먼저 가시나요?\nDaniel Reyes [오후 2:17]: 그럴 생각이었는데, 도움이 된다면 그쪽 사무실로 바로 갈 수도 있어요.\nGrace Okafor [오후 2:19]: 그건 걱정 마세요. 그쪽에서 이미 회의를 내일 오전 9시로 옮기기로 했어요.\nDaniel Reyes [오후 2:20]: 다행이네요. Westbrook 호텔에 체크인하고 오늘 밤에 제안서를 검토할게요.\nGrace Okafor [오후 2:22]: 좋아요. 한 시간 안에 수정된 안건을 이메일로 보내 드릴게요.'
      }
    ],
    q: [
      { k: '세부 사항', s: 'Why will Mr. Reyes miss the 3:30 meeting?', o: ['He forgot about the meeting.', 'His flight arrived late.', 'He went to the wrong office.', 'He lost his hotel reservation.'], a: 1, e: '근거: "My flight from Chicago just landed, but it was delayed by almost two hours." 지문의 "delayed by almost two hours"가 보기에서 "arrived late"로 바뀌었어요.' },
      { k: '의도 파악', s: 'At 2:19 P.M., what does Ms. Okafor most likely mean when she writes, "Don\'t worry about it"?', o: ['She will pay for his hotel room.', 'She has already read the proposal.', 'The meeting has been canceled permanently.', 'He does not need to go to the client\'s office today.'], a: 3, e: '근거: 바로 앞에서 Reyes 씨가 "I could go straight to their office"라고 하자 Okafor 씨가 "They\'ve already agreed to move the meeting to tomorrow morning"이라고 답해요. 즉 오늘 사무실로 바로 갈 필요가 없다는 뜻이에요. 회의는 취소가 아니라 연기되었으므로 (C)는 오답이에요.' },
      { k: '세부 사항', s: 'What will Ms. Okafor send to Mr. Reyes?', o: ['An updated agenda', 'A flight schedule', 'A hotel receipt', 'A revised contract'], a: 0, e: '근거: "I\'ll e-mail you the updated agenda within the hour." 지문의 "e-mail you"가 질문의 "send"로, "updated agenda"는 그대로 보기에 쓰였어요.' }
    ],
    voca: [['land', '착륙하다'], ['be delayed', '지연되다'], ['head to', '~로 향하다'], ['relief', '안도, 다행'], ['agenda', '안건, 의제']]
  },
  {
    id: 'p7-15', d: 'dining', lv: 1, kind: 'single',
    docs: [
      {
        type: '공지', title: 'Notice to Our Guests — Bellmont Bistro',
        text: 'Bellmont Bistro will be closed from Monday, January 6, through Sunday, January 12, while we upgrade our kitchen equipment. We apologize for any inconvenience this may cause.\n\nWhen we reopen on Monday, January 13, we will introduce a new weekend brunch menu featuring dishes made with ingredients from local farms. Reservations for January 13 and later can already be made on our Web site.\n\nDuring the closure, catering orders will be handled by our sister restaurant, Bellmont Kitchen on Pine Street. Please call 555-0186 to place an order. All Bellmont Bistro gift cards will remain valid and can also be used at Bellmont Kitchen.\n\nThank you for your understanding. We look forward to serving you again soon!',
        ko: 'Bellmont Bistro는 주방 설비를 개선하는 동안 1월 6일 월요일부터 1월 12일 일요일까지 문을 닫습니다. 불편을 드려 죄송합니다.\n\n1월 13일 월요일에 다시 문을 열면, 지역 농장의 재료로 만든 요리를 선보이는 새로운 주말 브런치 메뉴를 소개할 예정입니다. 1월 13일 이후 예약은 지금 저희 웹사이트에서 하실 수 있습니다.\n\n휴업 기간 동안 출장 요리 주문은 Pine 가에 있는 자매 식당 Bellmont Kitchen에서 처리합니다. 주문하시려면 555-0186으로 전화해 주세요. Bellmont Bistro 상품권은 모두 계속 유효하며 Bellmont Kitchen에서도 사용하실 수 있습니다.\n\n양해해 주셔서 감사합니다. 곧 다시 모시기를 고대합니다!'
      }
    ],
    q: [
      { k: '주제·목적', s: 'What is the purpose of the notice?', o: ['To advertise a cooking class', 'To announce a new restaurant location', 'To inform guests of a temporary closure', 'To request feedback on a menu'], a: 2, e: '근거: "Bellmont Bistro will be closed from Monday, January 6, through Sunday, January 12". 정해진 기간 동안 문을 닫는다는 내용이 보기에서 "temporary closure"로 바뀌었어요. Bellmont Kitchen은 새 지점이 아니라 기존 자매 식당이므로 (B)는 오답이에요.' },
      { k: '세부 사항', s: 'What will the restaurant introduce when it reopens?', o: ['Longer opening hours', 'A delivery service', 'A loyalty program', 'A new brunch menu'], a: 3, e: '근거: "we will introduce a new weekend brunch menu". 지문의 표현이 보기에서 "A new brunch menu"로 간단히 바뀌었어요.' },
      { k: '사실 확인', s: 'What is indicated about catering orders?', o: ['They will be provided by another restaurant.', 'They will be unavailable until January 13.', 'They must be placed online.', 'They are offered only on weekends.'], a: 0, e: '근거: "catering orders will be handled by our sister restaurant, Bellmont Kitchen". 자매 식당이 처리한다는 내용이 "provided by another restaurant"로 바뀌었어요. 주문은 전화로 하므로 (C)는 오답이에요.' }
    ],
    voca: [['upgrade', '개선하다, 업그레이드하다'], ['inconvenience', '불편'], ['feature', '특별히 포함하다, 선보이다'], ['catering', '출장 요리'], ['sister restaurant', '자매 식당'], ['remain valid', '계속 유효하다']]
  },
  {
    id: 'p7-16', d: 'property', lv: 1, kind: 'single',
    docs: [
      {
        type: '후기', title: 'Customer Review — Lakeview Self-Storage — Rating: 4 out of 5 — Posted by Mark Daley',
        text: 'I rented a medium-sized unit at Lakeview Self-Storage last month when I moved from a house into a smaller apartment. The facility is clean and well lit, and I like that I can access my unit at any time of day with my personal gate code.\n\nThe best part was the staff. When I arrived with a truck full of furniture, an employee named Rosa showed me how to use the free moving carts and even helped me unload some heavy boxes.\n\nMy only complaint is that the office closes at 3:00 P.M. on weekends, so it is hard to buy packing supplies or ask questions on Saturdays. I hope the management will consider keeping the office open later on weekends.',
        ko: '지난달 주택에서 더 작은 아파트로 이사하면서 Lakeview Self-Storage의 중간 크기 보관함을 빌렸습니다. 시설은 깨끗하고 조명이 밝으며, 개인 출입 코드로 하루 중 언제든 보관함을 이용할 수 있다는 점이 마음에 듭니다.\n\n가장 좋았던 점은 직원이었습니다. 가구를 가득 실은 트럭을 몰고 도착했을 때, Rosa라는 직원이 무료 운반 카트 사용법을 알려 주었고 무거운 상자 몇 개를 내리는 것까지 도와주었습니다.\n\n유일한 불만은 주말에 사무실이 오후 3시에 문을 닫아서 토요일에 포장 용품을 사거나 문의하기가 어렵다는 점입니다. 관리 측에서 주말에 사무실을 더 늦게까지 여는 것을 고려해 주었으면 합니다.'
      }
    ],
    q: [
      { k: '세부 사항', s: 'Why did Mr. Daley rent a storage unit?', o: ['He was renovating his office.', 'He was storing items for a client.', 'He moved to a smaller home.', 'He started an online business.'], a: 2, e: '근거: "when I moved from a house into a smaller apartment". 지문의 "smaller apartment"가 보기에서 "smaller home"으로 바뀌었어요.' },
      { k: '세부 사항', s: 'What does Mr. Daley praise about Lakeview Self-Storage?', o: ['The low monthly price', 'The helpfulness of an employee', 'The large parking lot', 'The free packing supplies'], a: 1, e: '근거: "The best part was the staff. ... Rosa ... even helped me unload some heavy boxes." 직원이 도와준 일이 "helpfulness of an employee"로 바뀌었어요. 무료인 것은 카트이고 포장 용품은 구매해야 하므로 (D)는 오답이에요.' },
      { k: '추론', s: 'What does Mr. Daley suggest the facility do?', o: ['Lower its rental prices', 'Add more moving carts', 'Install more lights', 'Extend its weekend office hours'], a: 3, e: '근거: "I hope the management will consider keeping the office open later on weekends." 주말에 사무실을 더 늦게까지 여는 것이 보기에서 "Extend its weekend office hours"로 바뀌었어요.' }
    ],
    voca: [['unit', '(보관) 공간, 한 칸'], ['facility', '시설'], ['access', '이용하다, 접근하다'], ['unload', '(짐을) 내리다'], ['packing supplies', '포장 용품'], ['complaint', '불만']]
  },
  {
    id: 'p7-17', d: 'tech', lv: 1, kind: 'single',
    docs: [
      {
        type: '웹페이지', title: 'TaskLine — What\'s New in Version 5.0',
        text: 'TaskLine 5.0 is here! Our most popular project management app now includes the features you have been asking for.\n\n- Offline mode: View and edit your task lists without an Internet connection. Changes will be saved automatically when you reconnect.\n- Calendar sync: Connect TaskLine to your work calendar so that deadlines appear alongside your meetings.\n- Dark mode: Reduce eye strain when working late.\n\nThe update is free for all current subscribers and will be installed automatically over the next two weeks. Please note that version 5.0 cannot be used on devices released before 2019. If you have any questions, click the chat icon at the bottom of this page to speak with a member of our support team.',
        ko: 'TaskLine 5.0이 나왔습니다! 가장 인기 있는 저희 프로젝트 관리 앱에 여러분이 요청해 오신 기능들이 추가되었습니다.\n\n- 오프라인 모드: 인터넷 연결 없이 작업 목록을 보고 편집하세요. 다시 연결되면 변경 사항이 자동으로 저장됩니다.\n- 캘린더 동기화: TaskLine을 업무용 캘린더에 연결하면 마감일이 회의 일정과 함께 표시됩니다.\n- 다크 모드: 늦게까지 일할 때 눈의 피로를 줄여 줍니다.\n\n이번 업데이트는 현재 구독자 모두에게 무료이며 앞으로 2주에 걸쳐 자동으로 설치됩니다. 버전 5.0은 2019년 이전에 출시된 기기에서는 사용할 수 없다는 점에 유의하세요. 궁금한 점이 있으면 이 페이지 하단의 채팅 아이콘을 눌러 지원팀 직원과 대화하세요.'
      }
    ],
    q: [
      { k: '세부 사항', s: 'What is mentioned as a new feature of TaskLine 5.0?', o: ['Working without an Internet connection', 'Sharing files with clients', 'Recording video meetings', 'Printing task reports'], a: 0, e: '근거: "Offline mode: View and edit your task lists without an Internet connection." 오프라인 모드 설명이 보기에서 "Working without an Internet connection"으로 바뀌었어요.' },
      { k: '사실 확인', s: 'What is indicated about the update?', o: ['It must be purchased separately.', 'It will be released next year.', 'It is available at no cost to subscribers.', 'It requires users to create a new account.'], a: 2, e: '근거: "The update is free for all current subscribers". 지문의 "free"가 보기에서 "at no cost"로 바뀌었어요.' },
      { k: '세부 사항', s: 'Who will NOT be able to use version 5.0?', o: ['People who work late at night', 'Users with devices released before 2019', 'Subscribers in certain countries', 'Customers without a work calendar'], a: 1, e: '근거: "version 5.0 cannot be used on devices released before 2019." 2019년 이전 기기 사용자는 새 버전을 쓸 수 없어요.' }
    ],
    voca: [['feature', '기능'], ['sync', '동기화'], ['eye strain', '눈의 피로'], ['subscriber', '구독자'], ['release', '출시하다']]
  },
  {
    id: 'p7-18', d: 'general', lv: 1, kind: 'single',
    docs: [
      {
        type: '공지', title: 'Maple Grove Public Library — Volunteers Needed for Annual Book Sale',
        text: 'The Friends of Maple Grove Library will hold their annual used book sale on Saturday, October 18, from 9:00 A.M. to 4:00 P.M. in the library\'s community room. All money raised will be used to buy new computers for the children\'s section.\n\nWe are looking for volunteers to help sort donated books, set up tables and assist shoppers on the day of the sale. Volunteers can choose a morning or an afternoon shift. No experience is necessary.\n\nIf you would like to help, please sign up at the front desk or e-mail Karen Wells at kwells@maplegrovelib.org by October 10. All volunteers will receive a free tote bag and a coffee voucher from Corner Cafe.',
        ko: 'Maple Grove 도서관 후원회가 10월 18일 토요일 오전 9시부터 오후 4시까지 도서관 커뮤니티룸에서 연례 중고 도서 판매 행사를 엽니다. 모금된 돈은 전액 어린이 코너의 새 컴퓨터를 구입하는 데 쓰입니다.\n\n기증된 책 분류, 테이블 설치, 행사 당일 구매객 응대를 도와주실 자원봉사자를 찾고 있습니다. 자원봉사자는 오전 또는 오후 근무조를 선택할 수 있습니다. 경험은 필요 없습니다.\n\n돕고 싶으시면 10월 10일까지 안내 데스크에서 신청하시거나 Karen Wells(kwells@maplegrovelib.org)에게 이메일을 보내 주세요. 모든 자원봉사자에게 무료 토트백과 Corner Cafe 커피 쿠폰을 드립니다.'
      }
    ],
    q: [
      { k: '주제·목적', s: 'What is the main purpose of the notice?', o: ['To announce new library hours', 'To advertise a used bookstore', 'To thank donors for their gifts', 'To recruit helpers for an event'], a: 3, e: '근거: 제목 "Volunteers Needed"와 "We are looking for volunteers to help ... on the day of the sale." 자원봉사자 모집이 보기에서 "recruit helpers for an event"로 바뀌었어요.' },
      { k: '세부 사항', s: 'How will the money from the sale be used?', o: ['To purchase computers', 'To repair the community room', 'To hire more staff', 'To buy children\'s books'], a: 0, e: '근거: "All money raised will be used to buy new computers for the children\'s section." "buy new computers"가 "purchase computers"로 바뀌었어요. 어린이 코너용이지만 책이 아니라 컴퓨터이므로 (D)는 함정이에요.' },
      { k: '세부 사항', s: 'What will volunteers receive?', o: ['A free book', 'A discount on a computer', 'A bag and a drink voucher', 'A library membership'], a: 2, e: '근거: "All volunteers will receive a free tote bag and a coffee voucher". "tote bag"과 "coffee voucher"가 보기에서 "A bag and a drink voucher"로 바뀌었어요.' }
    ],
    voca: [['annual', '연례의, 매년의'], ['raise money', '돈을 모금하다'], ['sort', '분류하다'], ['donated', '기증된'], ['shift', '근무조, 교대'], ['sign up', '신청하다, 등록하다']]
  },
  {
    id: 'p7-19', d: 'travel', lv: 2, kind: 'single',
    docs: [
      {
        type: '일정표', title: 'Travel Itinerary — Vantage Medical Supplies — Lisbon Trade Fair',
        text: 'Prepared for: Sales team (Ana Ruiz, Tom Becker, Priya Nair)\nPrepared by: Corporate Travel Desk\n\n| Date | Time | Activity | Location |\n| May 14 | 7:40 A.M. | Depart Frankfurt (Flight LX 912) | Frankfurt Airport, Terminal 1 |\n| May 14 | 11:05 A.M. | Arrive in Lisbon; shuttle to hotel | Hotel Miradouro |\n| May 15 | 9:00 A.M. - 5:00 P.M. | Trade fair, Day 1 (booth setup by 8:00 A.M.) | Lisbon Exhibition Center, Hall B |\n| May 16 | 9:00 A.M. - 3:00 P.M. | Trade fair, Day 2 | Lisbon Exhibition Center, Hall B |\n| May 16 | 7:00 P.M. | Dinner with distributor Costa & Filhos | Restaurante Alfama |\n| May 17 | 10:20 A.M. | Depart Lisbon (Flight LX 915) | Lisbon Airport |\n\nNote: Breakfast is included in the hotel rate. Taxi receipts must be submitted within five business days of your return. Contact the Travel Desk at extension 4410 if you need to make any changes.',
        ko: '대상: 영업팀(Ana Ruiz, Tom Becker, Priya Nair)\n작성: 회사 출장 지원 데스크\n\n| 날짜 | 시간 | 일정 | 장소 |\n| 5월 14일 | 오전 7:40 | 프랑크푸르트 출발(LX 912편) | 프랑크푸르트 공항 1터미널 |\n| 5월 14일 | 오전 11:05 | 리스본 도착, 셔틀로 호텔 이동 | Miradouro 호텔 |\n| 5월 15일 | 오전 9:00 - 오후 5:00 | 박람회 1일차(부스 설치는 오전 8시까지) | 리스본 전시 센터 B홀 |\n| 5월 16일 | 오전 9:00 - 오후 3:00 | 박람회 2일차 | 리스본 전시 센터 B홀 |\n| 5월 16일 | 오후 7:00 | 유통업체 Costa & Filhos와 저녁 식사 | Alfama 레스토랑 |\n| 5월 17일 | 오전 10:20 | 리스본 출발(LX 915편) | 리스본 공항 |\n\n참고: 호텔 요금에 조식이 포함되어 있습니다. 택시 영수증은 복귀 후 영업일 기준 5일 이내에 제출해야 합니다. 변경이 필요하면 내선 4410번으로 출장 지원 데스크에 연락하세요.'
      }
    ],
    q: [
      { k: '세부 사항', s: 'By what time must the sales team be at the booth on May 15?', o: ['7:40 A.M.', '8:00 A.M.', '9:00 A.M.', '11:05 A.M.'], a: 1, e: '근거: 표의 5월 15일 행 "Trade fair, Day 1 (booth setup by 8:00 A.M.)". 박람회는 9시에 시작하지만 부스 설치는 8시까지 해야 하므로 8시까지 도착해야 해요.' },
      { k: '추론', s: 'What is suggested about the trade fair?', o: ['It is held in two different halls.', 'It lasts for three days.', 'It is organized by Costa & Filhos.', 'It ends earlier on its second day.'], a: 3, e: '근거: 1일차는 "9:00 A.M. - 5:00 P.M.", 2일차는 "9:00 A.M. - 3:00 P.M.". 두 행을 비교하면 둘째 날이 더 일찍 끝난다는 것을 알 수 있어요. 장소는 둘 다 Hall B이므로 (A)는 오답이에요.' },
      { k: '사실 확인', s: 'What is NOT indicated in the itinerary?', o: ['Breakfast is provided at the hotel.', 'A shuttle will take the team to the hotel.', 'The team will return to Frankfurt by train.', 'Receipts must be submitted by a deadline.'], a: 2, e: '근거: 마지막 행 "Depart Lisbon (Flight LX 915)". 귀국은 기차가 아니라 비행기예요. (A)는 "Breakfast is included", (B)는 "shuttle to hotel", (D)는 "within five business days"로 확인돼요.' }
    ],
    voca: [['itinerary', '여행 일정표'], ['trade fair', '무역 박람회'], ['booth setup', '부스 설치'], ['distributor', '유통업체'], ['business day', '영업일'], ['extension', '내선 번호']]
  },
  {
    id: 'p7-20', d: 'dining', lv: 2, kind: 'single',
    docs: [
      {
        type: '후기', title: 'Review: Saffron & Sage, Main Street — Rating: 4 out of 5 — Posted by K. Lindqvist',
        text: 'I booked Saffron & Sage for a business lunch with four clients last Thursday, and overall it was an excellent choice. [1] The dining room is quiet enough for conversation, and the staff set aside a corner table for us without being asked.\n\nThe seasonal lunch set, priced at $28 per person, includes a soup, a main course and a dessert. [2] My grilled sea bass was perfectly cooked, and one of my clients, who follows a vegan diet, was pleased to find three plant-based options on the menu.\n\nMy only complaint concerns the service at the end of the meal. [3] We waited almost twenty minutes for the bill, which was awkward because two of my guests had a train to catch. When I mentioned this to the manager, she apologized and gave us a voucher for complimentary desserts on our next visit. [4]\n\nI will certainly return, but I would recommend asking for the bill early if you are on a tight schedule.',
        ko: '지난주 목요일 고객 네 명과의 업무 점심 자리로 Saffron & Sage를 예약했는데, 전반적으로 아주 훌륭한 선택이었습니다. [1] 식사 공간은 대화하기에 충분히 조용했고, 직원들은 요청하지 않았는데도 구석 테이블을 따로 마련해 주었습니다.\n\n1인당 28달러인 계절 점심 세트에는 수프, 메인 요리, 디저트가 포함됩니다. [2] 양이 넉넉했고 모든 요리가 아름답게 담겨 나왔습니다. 제 농어구이는 완벽하게 익었고, 비건 식단을 하는 고객 한 분은 메뉴에 식물성 요리가 세 가지나 있어서 기뻐했습니다.\n\n유일한 불만은 식사 마지막의 서비스입니다. [3] 계산서를 거의 20분이나 기다렸는데, 손님 두 분이 기차를 타야 해서 난처했습니다. 매니저에게 이 얘기를 했더니 사과하며 다음 방문 때 쓸 무료 디저트 쿠폰을 주었습니다. [4]\n\n꼭 다시 가겠지만, 일정이 빠듯하다면 계산서를 일찍 요청하라고 권하고 싶습니다.'
      }
    ],
    q: [
      { k: '세부 사항', s: 'Why did the reviewer go to Saffron & Sage?', o: ['To celebrate a colleague\'s promotion', 'To have a meal with clients', 'To interview a job applicant', 'To plan a catering event'], a: 1, e: '근거: "I booked Saffron & Sage for a business lunch with four clients". "business lunch with four clients"가 보기에서 "have a meal with clients"로 바뀌었어요.' },
      { k: '사실 확인', s: 'What is indicated about the seasonal lunch set?', o: ['It consists of three courses.', 'It is available only on Thursdays.', 'It costs less for groups.', 'It does not include vegan dishes.'], a: 0, e: '근거: "includes a soup, a main course and a dessert". 수프·메인·디저트 세 가지가 보기에서 "three courses"로 요약되었어요. 식물성 요리가 세 가지 있다고 했으므로 (D)는 오답이에요.' },
      { k: '세부 사항', s: 'What did the manager do?', o: ['She called a taxi for the guests.', 'She removed a charge from the bill.', 'She offered a voucher for a future visit.', 'She moved the group to a quieter table.'], a: 2, e: '근거: "she apologized and gave us a voucher for complimentary desserts on our next visit." "on our next visit"이 보기에서 "for a future visit"으로 바뀌었어요.' },
      { k: '문장 삽입', s: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n"The portions were generous, and every dish was beautifully presented."', o: ['[1]', '[2]', '[3]', '[4]'], a: 1, e: '근거: [2] 앞은 점심 세트의 구성("a soup, a main course and a dessert"), 뒤는 개별 요리 평가("My grilled sea bass was perfectly cooked")예요. 음식의 양과 모양을 칭찬하는 문장이 세트 소개와 개별 요리 평가를 자연스럽게 이어 줘요.' }
    ],
    voca: [['set aside', '따로 마련하다'], ['seasonal', '계절의'], ['plant-based', '식물성의'], ['awkward', '난처한, 곤란한'], ['complimentary', '무료의'], ['tight schedule', '빠듯한 일정']]
  },
  {
    id: 'p7-21', d: 'legal', lv: 2, kind: 'single',
    docs: [
      {
        type: '편지', title: 'To: Ms. Helen Marsh, Marsh Interiors / From: Robert Chen, Chen & Alvarez LLP / Date: March 3 / Subject: Review of Draft Lease',
        text: 'Dear Ms. Marsh,\n\nThank you for sending us the draft lease for your new showroom at 210 Harbor Avenue. We have completed our review and would like to draw your attention to two clauses before you sign.\n\nFirst, Section 7 states that the tenant is responsible for all repairs to the building\'s heating system. Since the system is more than fifteen years old, we recommend asking the landlord to cover major repairs, or at least to share the cost.\n\nSecond, Section 12 allows the landlord to increase the rent by up to 8 percent each year. This figure is well above the local average, and we believe a cap of 3 percent would be reasonable.\n\nWe would be happy to raise these points with the landlord\'s attorney on your behalf. Please let us know how you would like to proceed by March 10, as the landlord has asked for a signed copy by the end of the month.\n\nSincerely,\nRobert Chen',
        ko: 'Marsh 씨께,\n\nHarbor 가 210번지 새 쇼룸의 임대차 계약서 초안을 보내 주셔서 감사합니다. 검토를 마쳤으며, 서명하시기 전에 두 가지 조항에 주의를 기울여 주셨으면 합니다.\n\n첫째, 7조에는 건물 난방 시스템의 모든 수리를 임차인이 책임진다고 되어 있습니다. 이 시스템은 15년이 넘었으므로, 임대인에게 큰 수리는 부담하거나 최소한 비용을 분담해 달라고 요청하실 것을 권합니다.\n\n둘째, 12조는 임대인이 매년 임대료를 최대 8퍼센트까지 인상할 수 있도록 허용합니다. 이 수치는 지역 평균을 훨씬 웃돌며, 저희는 3퍼센트 상한이 합리적이라고 봅니다.\n\n고객님을 대신해 임대인 측 변호사와 이 사항들을 기꺼이 논의하겠습니다. 임대인이 이달 말까지 서명본을 요청했으니, 3월 10일까지 어떻게 진행하실지 알려 주십시오.\n\nRobert Chen 드림'
      }
    ],
    q: [
      { k: '주제·목적', s: 'Why did Mr. Chen write the letter?', o: ['To advise a client about the terms of a contract', 'To inform a tenant that her rent will rise', 'To request payment for legal services', 'To recommend a different showroom location'], a: 0, e: '근거: "We have completed our review and would like to draw your attention to two clauses before you sign." 계약서 조항에 대해 조언하는 내용이 보기에서 "advise a client about the terms of a contract"로 바뀌었어요.' },
      { k: '동의어', s: 'In the letter, the word "raise" in paragraph 4, line 1, is closest in meaning to', o: ['increase', 'discuss', 'lift', 'collect'], a: 1, e: '근거: "We would be happy to raise these points with the landlord\'s attorney". 여기서 raise는 "(문제·의견을) 제기하다, 거론하다"라는 뜻이라 discuss와 가장 가까워요. 임대료를 올린다는 의미의 increase는 문맥상 맞지 않아요.' },
      { k: '세부 사항', s: 'What is Ms. Marsh asked to do by March 10?', o: ['Sign the lease', 'Pay a security deposit', 'Meet with the landlord', 'Tell the firm how she wants to proceed'], a: 3, e: '근거: "Please let us know how you would like to proceed by March 10". "let us know"가 보기에서 "Tell the firm"으로 바뀌었어요. 서명본은 이달 말까지이므로 (A)는 오답이에요.' }
    ],
    voca: [['lease', '임대차 계약(서)'], ['clause', '조항'], ['tenant', '임차인'], ['landlord', '임대인, 집주인'], ['cap', '상한'], ['on one\'s behalf', '~을 대신하여']]
  },
  {
    id: 'p7-22', d: 'tech', lv: 2, kind: 'single',
    docs: [
      {
        type: '온라인 채팅', title: 'Online chat — IT Support Channel',
        text: 'Leo Kim [9:02 A.M.]: Morning, everyone. Several people in Accounting say they can\'t connect to the shared drive.\nFatima Hassan [9:04 A.M.]: It\'s not just Accounting. Marketing reported the same problem a few minutes ago.\nLeo Kim [9:05 A.M.]: Did anything change overnight?\nOwen Price [9:06 A.M.]: We installed a security update on the file server at 2:00 A.M. It may have reset the access permissions.\nFatima Hassan [9:08 A.M.]: That would explain it. Can we roll it back?\nOwen Price [9:09 A.M.]: I\'d rather not. The update fixes a serious vulnerability.\nJulia Moreno [9:11 A.M.]: Leave it to me. I wrote the permission scripts last year, so I can restore the settings without removing the update.\nLeo Kim [9:12 A.M.]: Great. How long will that take?\nJulia Moreno [9:13 A.M.]: About thirty minutes. In the meantime, staff can download urgent files from the cloud backup.\nFatima Hassan [9:14 A.M.]: I\'ll send a message to all departments so they know.',
        ko: 'Leo Kim [오전 9:02]: 모두 좋은 아침이에요. 회계팀 몇 명이 공유 드라이브에 접속할 수 없다고 해요.\nFatima Hassan [오전 9:04]: 회계팀만이 아니에요. 마케팅팀도 몇 분 전에 같은 문제를 알려 왔어요.\nLeo Kim [오전 9:05]: 밤사이에 뭔가 바뀐 게 있나요?\nOwen Price [오전 9:06]: 새벽 2시에 파일 서버에 보안 업데이트를 설치했어요. 그게 접근 권한을 초기화했을 수도 있어요.\nFatima Hassan [오전 9:08]: 그러면 설명이 되네요. 업데이트를 되돌릴 수 있나요?\nOwen Price [오전 9:09]: 그건 안 하는 게 좋겠어요. 그 업데이트가 심각한 취약점을 고쳐 주거든요.\nJulia Moreno [오전 9:11]: 제게 맡겨 주세요. 작년에 제가 권한 스크립트를 작성했으니 업데이트를 지우지 않고도 설정을 복구할 수 있어요.\nLeo Kim [오전 9:12]: 좋아요. 얼마나 걸릴까요?\nJulia Moreno [오전 9:13]: 30분 정도요. 그동안 직원들은 급한 파일을 클라우드 백업에서 내려받을 수 있어요.\nFatima Hassan [오전 9:14]: 모든 부서에 알 수 있도록 메시지를 보낼게요.'
      }
    ],
    q: [
      { k: '주제·목적', s: 'What problem are the writers discussing?', o: ['A printer is out of order.', 'Employees cannot access a shared drive.', 'A security update failed to install.', 'The cloud backup has been deleted.'], a: 1, e: '근거: "Several people in Accounting say they can\'t connect to the shared drive." 지문의 "can\'t connect to"가 보기에서 "cannot access"로 바뀌었어요. 업데이트는 설치에 성공했으므로 (C)는 오답이에요.' },
      { k: '세부 사항', s: 'Why does Mr. Price not want to roll back the update?', o: ['It took several hours to install.', 'It was requested by the Accounting Department.', 'It addresses an important security issue.', 'It cannot be removed until the next day.'], a: 2, e: '근거: "I\'d rather not. The update fixes a serious vulnerability." "fixes a serious vulnerability"가 보기에서 "addresses an important security issue"로 바뀌었어요.' },
      { k: '의도 파악', s: 'At 9:11 A.M., what does Ms. Moreno most likely mean when she writes, "Leave it to me"?', o: ['She will fix the problem herself.', 'She wants the others to stop working.', 'She disagrees with Mr. Price.', 'She will contact the software vendor.'], a: 0, e: '근거: 바로 뒤에서 "I wrote the permission scripts last year, so I can restore the settings without removing the update."라고 해요. 자신이 직접 설정을 복구하겠다는 뜻이므로 정답은 (A)예요. 업데이트를 유지한다는 점에서 Price 씨와 같은 의견이므로 (C)는 오답이에요.' },
      { k: '세부 사항', s: 'What will Ms. Hassan most likely do next?', o: ['Download files from the cloud backup', 'Rewrite the permission scripts', 'Restart the file server', 'Notify employees about the situation'], a: 3, e: '근거: "I\'ll send a message to all departments so they know." 모든 부서에 메시지를 보내는 것이 보기에서 "Notify employees about the situation"으로 바뀌었어요.' }
    ],
    voca: [['shared drive', '공유 드라이브'], ['access permission', '접근 권한'], ['roll back', '(이전 상태로) 되돌리다'], ['vulnerability', '(보안) 취약점'], ['restore', '복구하다'], ['in the meantime', '그동안']]
  },
  {
    id: 'p7-23', d: 'finance', lv: 2, kind: 'single',
    docs: [
      {
        type: '보도자료', title: 'FOR IMMEDIATE RELEASE — Northgate Credit Union Launches Small Business Loan Program',
        text: 'BRISTOL, September 2 — Northgate Credit Union today announced the launch of GrowthPath, a loan program designed for small businesses with fewer than 25 employees. Starting October 1, qualifying businesses will be able to borrow between $10,000 and $150,000 at a fixed annual interest rate of 5.9 percent.\n\nUnlike many traditional lenders, Northgate will not require applicants to have been in operation for more than one year. Instead, applicants must submit a business plan and twelve months of financial projections. Decisions will be made within ten business days.\n\n"Many promising companies are turned away simply because they are new," said Chief Executive Officer Marcus Fleet. "GrowthPath gives them a fair chance to expand."\n\nIn addition, every borrower will receive three free consultations with Northgate\'s financial advisors during the first year of the loan. Interested business owners can attend an information session at any Northgate branch on September 20 or apply online at www.northgatecu.org/growthpath.',
        ko: '브리스톨, 9월 2일 — Northgate 신용협동조합은 오늘 직원 25명 미만의 소기업을 위한 대출 프로그램 GrowthPath의 출시를 발표했다. 10월 1일부터 자격을 갖춘 기업은 연 5.9퍼센트의 고정 금리로 1만 달러에서 15만 달러까지 빌릴 수 있다.\n\n많은 전통적인 대출 기관과 달리 Northgate는 신청자에게 1년 넘게 영업했을 것을 요구하지 않는다. 대신 신청자는 사업 계획서와 12개월간의 재무 예측 자료를 제출해야 한다. 심사 결과는 영업일 기준 10일 이내에 나온다.\n\nMarcus Fleet 최고경영자는 "유망한 기업들이 단지 신생이라는 이유만으로 거절당하는 경우가 많습니다. GrowthPath는 그들에게 성장할 공정한 기회를 줍니다."라고 말했다.\n\n또한 모든 대출자는 대출 첫해 동안 Northgate 재무 상담사와의 무료 상담을 세 차례 받는다. 관심 있는 사업주는 9월 20일 Northgate 지점 어디서든 설명회에 참석하거나 www.northgatecu.org/growthpath 에서 온라인으로 신청할 수 있다.'
      }
    ],
    q: [
      { k: '주제·목적', s: 'What is the purpose of the press release?', o: ['To report a company\'s annual earnings', 'To introduce a new lending program', 'To announce a change in leadership', 'To promote a new savings account'], a: 1, e: '근거: "Northgate Credit Union today announced the launch of GrowthPath, a loan program designed for small businesses". "launch of ... a loan program"이 보기에서 "introduce a new lending program"으로 바뀌었어요.' },
      { k: '세부 사항', s: 'What must applicants submit?', o: ['Proof of three years in business', 'A list of current employees', 'A reference letter from another bank', 'A plan and projected financial figures'], a: 3, e: '근거: "applicants must submit a business plan and twelve months of financial projections." "financial projections"가 보기에서 "projected financial figures"로 바뀌었어요. 1년 이상 영업 요건이 없으므로 (A)는 오답이에요.' },
      { k: '추론', s: 'For whom is GrowthPath most likely intended?', o: ['Large manufacturing firms', 'Retired private investors', 'Owners of recently established companies', 'Local government officials'], a: 2, e: '근거: "Northgate will not require applicants to have been in operation for more than one year"와 CEO의 말 "Many promising companies are turned away simply because they are new". 영업 기간이 짧은 신생 기업을 겨냥한 프로그램임을 추론할 수 있어요.' },
      { k: '세부 사항', s: 'What will every borrower receive?', o: ['Free sessions with advisors', 'A lower interest rate after one year', 'Membership in a business association', 'An invitation to a networking event'], a: 0, e: '근거: "every borrower will receive three free consultations with Northgate\'s financial advisors". "free consultations"가 보기에서 "Free sessions"로 바뀌었어요. 금리는 고정이므로 (B)는 오답이에요.' }
    ],
    voca: [['credit union', '신용협동조합'], ['qualifying', '자격을 갖춘'], ['fixed interest rate', '고정 금리'], ['lender', '대출 기관'], ['financial projection', '재무 예측'], ['consultation', '상담']]
  },
  {
    id: 'p7-24', d: 'property', lv: 3, kind: 'single',
    docs: [
      {
        type: '기사', title: 'Old Textile Mill to Become Mixed-Use Complex',
        text: 'RIVERTON — After sitting empty for nearly two decades, the former Hadley Textile Mill on Canal Street is set to begin a new chapter. Developer Brightstone Properties confirmed on Monday that it has finalized the purchase of the 1912 building and will convert it into a mixed-use complex with 140 apartments, ground-floor retail space and a public courtyard. [1]\n\nThe project has not been without controversy. When Brightstone first submitted its plans last year, local residents objected to the proposed height of a rooftop addition, arguing that it would block views of the river. [2] The company responded by reducing the addition from three stories to one and agreeing to set aside 20 percent of the units for households earning below the city\'s median income.\n\nPreservation was another concern. Because the mill is listed on the regional historic register, its brick exterior and iron-framed windows must remain intact. [3] Brightstone has hired Calder & Webb, an architecture firm known for restoring industrial buildings, to oversee that part of the work.\n\nConstruction is scheduled to begin in March and should take about two years. [4] City council member Diane Ostrowski, who once opposed the plan, now calls it "a model for how to reuse our historic buildings."',
        ko: '리버턴 — 거의 20년 동안 비어 있던 Canal 가의 옛 Hadley 섬유 공장이 새로운 장을 열 예정이다. 개발업체 Brightstone Properties는 월요일, 1912년에 지어진 이 건물의 매입을 마무리했으며 이를 아파트 140가구, 1층 상가, 공공 안뜰을 갖춘 복합 용도 단지로 전환할 것이라고 확인했다. [1]\n\n이 사업에 논란이 없었던 것은 아니다. 지난해 Brightstone이 처음 계획을 제출했을 때, 지역 주민들은 옥상 증축부의 높이가 강 조망을 가릴 것이라며 반대했다. [2] 회사는 증축부를 3층에서 1층으로 줄이고, 세대의 20퍼센트를 시 중위 소득 이하 가구에 배정하기로 하며 대응했다.\n\n보존도 또 다른 우려 사항이었다. 공장이 지역 문화재 목록에 올라 있기 때문에 벽돌 외벽과 철제 창틀은 그대로 유지되어야 한다. [3] Brightstone은 산업 건물 복원으로 유명한 건축 회사 Calder & Webb을 고용해 그 부분의 작업을 감독하게 했다.\n\n공사는 3월에 시작될 예정이며 약 2년이 걸릴 것으로 보인다. [4] 상가 임대는 아파트가 준비되기 몇 달 전에 시작될 것으로 예상된다. 한때 이 계획에 반대했던 Diane Ostrowski 시의원은 이제 이를 "역사적 건물을 재활용하는 방법의 모범"이라고 부른다.'
      }
    ],
    q: [
      { k: '주제·목적', s: 'What is the article mainly about?', o: ['The closing of a local textile company', 'The redevelopment of a historic building', 'A dispute over the price of a property', 'The election of a city council member'], a: 1, e: '근거: "will convert it into a mixed-use complex"와 "the mill is listed on the regional historic register". 1912년에 지어진 문화재 건물을 복합 단지로 바꾸는 내용이 "redevelopment of a historic building"으로 요약되었어요.' },
      { k: '세부 사항', s: 'What did Brightstone Properties do in response to residents\' objections?', o: ['It moved the project to another site.', 'It added a public courtyard.', 'It reduced the height of a planned addition.', 'It delayed construction by one year.'], a: 2, e: '근거: "The company responded by reducing the addition from three stories to one". 3층에서 1층으로 줄인 것이 보기에서 "reduced the height of a planned addition"으로 바뀌었어요. 안뜰은 원래 계획에 있던 것이므로 (B)는 오답이에요.' },
      { k: '동의어', s: 'In the article, the word "intact" in paragraph 3, line 2, is closest in meaning to', o: ['unchanged', 'visible', 'attached', 'measured'], a: 0, e: '근거: "its brick exterior and iron-framed windows must remain intact". 문화재라서 외벽과 창틀을 "손대지 않은 원래 상태로" 유지해야 한다는 뜻이므로 unchanged가 가장 가까워요.' },
      { k: '문장 삽입', s: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n"Leasing of the retail spaces is expected to begin several months before the apartments are ready."', o: ['[1]', '[2]', '[3]', '[4]'], a: 3, e: '근거: [4] 앞 문장 "Construction is scheduled to begin in March and should take about two years."가 공사 일정을 말하고 있어요. 상가 임대가 아파트 완공 몇 달 전에 시작된다는 일정 정보가 바로 뒤에 이어지는 것이 자연스러워요.' }
    ],
    voca: [['mixed-use complex', '복합 용도 단지'], ['finalize', '마무리하다, 확정하다'], ['controversy', '논란'], ['median income', '중위 소득'], ['historic register', '문화재 목록'], ['oversee', '감독하다']]
  },
  {
    id: 'p7-25', d: 'legal', lv: 3, kind: 'single',
    docs: [
      {
        type: '웹페이지', title: 'CraftHaven — Updates to the Seller Agreement',
        text: 'Effective July 1, several changes to the CraftHaven Seller Agreement will take effect. Sellers who continue to list items after that date will be considered to have accepted the revised terms.\n\nDispute resolution: Disputes between buyers and sellers that cannot be settled through our messaging system will now be reviewed by an independent mediator rather than by CraftHaven staff. Either party may request mediation within 30 days of the order date. The mediator\'s decision will be binding on both parties.\n\nIntellectual property: Sellers must confirm that they own or have licensed every image and design used in their listings. Listings reported for infringement will be suspended immediately while a review is conducted, instead of remaining visible as they do under the current policy.\n\nFees: The transaction fee will remain at 4 percent. However, the monthly fee for premium shop accounts will increase from $12 to $15.\n\nSellers who do not wish to accept the new terms may close their accounts before July 1 without penalty. Any outstanding payments will be transferred within seven business days of closure.',
        ko: '7월 1일부터 CraftHaven 판매자 약관의 여러 변경 사항이 시행됩니다. 이 날짜 이후에도 계속 상품을 등록하는 판매자는 개정된 약관에 동의한 것으로 간주됩니다.\n\n분쟁 해결: 메시지 시스템으로 해결되지 않는 구매자와 판매자 간 분쟁은 이제 CraftHaven 직원이 아닌 독립 조정인이 검토합니다. 어느 쪽이든 주문일로부터 30일 이내에 조정을 신청할 수 있습니다. 조정인의 결정은 양측 모두에게 구속력을 가집니다.\n\n지식 재산: 판매자는 상품 등록에 사용하는 모든 이미지와 디자인을 소유하고 있거나 사용 허가를 받았음을 확인해야 합니다. 침해로 신고된 상품은 현재 정책처럼 계속 노출되는 대신, 검토가 진행되는 동안 즉시 게시가 중지됩니다.\n\n수수료: 거래 수수료는 4퍼센트로 유지됩니다. 다만 프리미엄 상점 계정의 월 이용료는 12달러에서 15달러로 인상됩니다.\n\n새 약관에 동의하지 않는 판매자는 7월 1일 전에 위약금 없이 계정을 해지할 수 있습니다. 미지급 대금은 해지 후 영업일 기준 7일 이내에 송금됩니다.'
      }
    ],
    q: [
      { k: '주제·목적', s: 'What is the main purpose of the Web page?', o: ['To announce the opening of a new online store', 'To recruit independent mediators', 'To explain revisions to an agreement', 'To report the outcome of a legal dispute'], a: 2, e: '근거: "several changes to the CraftHaven Seller Agreement will take effect" 와 "the revised terms". 약관 변경 사항을 설명하는 것이 보기에서 "explain revisions to an agreement"로 바뀌었어요.' },
      { k: '세부 사항', s: 'According to the Web page, what will happen to a listing that is reported for infringement?', o: ['It will be reviewed by an independent mediator.', 'It will remain visible until a decision is made.', 'It will be removed after 30 days.', 'It will be taken down while it is investigated.'], a: 3, e: '근거: "Listings reported for infringement will be suspended immediately while a review is conducted". "suspended ... while a review is conducted"가 보기에서 "taken down while it is investigated"로 바뀌었어요. 계속 노출되는 것은 현재 정책이므로 (B)는 함정이에요.' },
      { k: '사실 확인', s: 'What is indicated about CraftHaven\'s fees?', o: ['Both fees will rise in July.', 'The transaction fee will stay the same.', 'Premium accounts will become free.', 'Fees will be charged on a weekly basis.'], a: 1, e: '근거: "The transaction fee will remain at 4 percent." "remain"이 보기에서 "stay the same"으로 바뀌었어요. 오르는 것은 프리미엄 계정 월 이용료뿐이므로 (A)는 오답이에요.' },
      { k: '추론', s: 'How can a seller avoid being bound by the new terms?', o: ['By closing the account before July 1', 'By requesting mediation within 30 days', 'By upgrading to a premium shop account', 'By removing all images from the listings'], a: 0, e: '근거: "Sellers who do not wish to accept the new terms may close their accounts before July 1 without penalty." 또한 7월 1일 이후 계속 등록하면 동의한 것으로 간주되므로, 새 약관을 피하려면 그 전에 계정을 해지해야 해요.' }
    ],
    voca: [['take effect', '시행되다, 효력이 발생하다'], ['mediator', '조정인'], ['binding', '구속력 있는'], ['infringement', '(권리) 침해'], ['suspend', '일시 중지하다'], ['outstanding payment', '미지급 대금']]
  },
  {
    id: 'p7-26', d: 'general', lv: 3, kind: 'single',
    docs: [
      {
        type: '기사', title: 'Library Lends More Than Books',
        text: 'EASTFIELD — Residents who need a ladder, a pressure washer or even a sewing machine no longer have to buy one. Since March, the Eastfield Public Library has been lending more than 300 tools and household devices to anyone with a library card, and demand has far exceeded expectations.\n\nThe idea came from librarian Samuel Osei, who noticed that patrons frequently asked staff where they could rent equipment for one-time home projects. "People were spending a lot of money on items they used once and then stored in a garage for years," he said. With a $40,000 grant from the Eastfield Community Foundation, the library converted an unused reading room into a storage and checkout area.\n\nItems may be borrowed for up to seven days, and late returns result in a temporary suspension of borrowing privileges rather than a fine. Mr. Osei said that this approach has worked well: fewer than 2 percent of items have been returned late.\n\nThe program has been so popular that waiting lists for some items, such as carpet cleaners, now stretch to three weeks. The library plans to double its inventory next year and has begun accepting donations of gently used tools from the public. Volunteers with repair experience are also being sought to help maintain the collection.',
        ko: '이스트필드 — 사다리나 고압 세척기, 심지어 재봉틀이 필요한 주민들도 이제 직접 살 필요가 없다. 3월부터 Eastfield 공공 도서관은 도서관 카드가 있는 누구에게나 300개가 넘는 공구와 가정용 기기를 대여해 왔으며, 수요는 예상을 훨씬 뛰어넘었다.\n\n이 아이디어는 사서 Samuel Osei에게서 나왔는데, 그는 이용자들이 일회성 집수리 작업에 쓸 장비를 어디서 빌릴 수 있는지 직원들에게 자주 묻는다는 것을 알아챘다. 그는 "사람들은 한 번 쓰고 몇 년씩 차고에 넣어 두는 물건에 많은 돈을 쓰고 있었습니다"라고 말했다. Eastfield 지역 재단의 4만 달러 보조금으로 도서관은 쓰지 않던 열람실을 보관 및 대출 공간으로 개조했다.\n\n물품은 최대 7일간 빌릴 수 있으며, 늦게 반납하면 벌금 대신 대출 권한이 일시 정지된다. Osei 씨는 이 방식이 효과가 좋았다며, 연체 반납된 물품은 2퍼센트도 안 된다고 말했다.\n\n이 프로그램은 인기가 많아 카펫 청소기 같은 일부 물품의 대기 기간은 현재 3주에 이른다. 도서관은 내년에 보유 물품을 두 배로 늘릴 계획이며, 일반인으로부터 상태 좋은 중고 공구 기증을 받기 시작했다. 물품 관리를 도울 수리 경험이 있는 자원봉사자도 모집하고 있다.'
      }
    ],
    q: [
      { k: '주제·목적', s: 'What is the article mainly about?', o: ['A service offered by a public library', 'The opening of a new hardware store', 'A fund-raising campaign for a reading room', 'A workshop on home repair'], a: 0, e: '근거: "the Eastfield Public Library has been lending more than 300 tools and household devices". 도서관의 공구 대여 서비스가 보기에서 "A service offered by a public library"로 요약되었어요.' },
      { k: '세부 사항', s: 'What led to the creation of the program?', o: ['A survey by a community foundation', 'A shortage of reading rooms', 'Questions from library users', 'A request from local hardware stores'], a: 2, e: '근거: "patrons frequently asked staff where they could rent equipment for one-time home projects." 지문의 "patrons"(이용자)가 보기에서 "library users"로 바뀌었어요. 재단은 보조금을 준 곳이지 설문을 한 곳이 아니므로 (A)는 오답이에요.' },
      { k: '사실 확인', s: 'What is indicated about late returns?', o: ['They are charged a daily fine.', 'They have increased since March.', 'They are the main cause of the waiting lists.', 'They lead to a temporary loss of borrowing rights.'], a: 3, e: '근거: "late returns result in a temporary suspension of borrowing privileges rather than a fine." "temporary suspension of borrowing privileges"가 보기에서 "temporary loss of borrowing rights"로 바뀌었어요. 벌금은 없으므로 (A)는 오답이에요.' },
      { k: '사실 확인', s: 'What is NOT mentioned as part of the library\'s plans?', o: ['Increasing the number of items', 'Charging a membership fee', 'Accepting donated tools', 'Recruiting volunteers'], a: 1, e: '근거: 마지막 단락에 "double its inventory"(A), "accepting donations of gently used tools"(C), "Volunteers ... are also being sought"(D)가 나와요. 회비를 받는다는 내용은 없어요.' }
    ],
    voca: [['exceed expectations', '예상을 뛰어넘다'], ['patron', '(도서관 등의) 이용자'], ['grant', '보조금'], ['borrowing privileges', '대출 권한'], ['inventory', '보유 물품, 재고'], ['gently used', '상태 좋은 중고의']]
  }
]);
