import { MUSINSA_WORK } from "./work-musinsa.constant";

export const WORK_TIMELINE = [
  {
    period: "2021 - 2025",
    company: "MUSINSA",
    role: "프론트엔드 개발",
    codingListHref: "https://www.musinsa.com/main/musinsa/recommend?gf=F",
    musinsaGroups: MUSINSA_WORK,
  },
  {
    period: "2020",
    company: "제이니스",
    role: "UI 아키텍처 및 퍼블리싱",
    projects: [
      {
        title: "유연근무제 대응 엔터프라이즈 패키지 구축",
        codingListHref: "/publishing/2019/03_flexibleWork/coding_list.html",
        subtitle: "법정 근로시간 정책 기반의 복잡한 비즈니스 UI 구현",
        action:
          "백엔드 에이전트와 데이터 통신 규약을 협의하여 동적 대시보드 및 복잡한 설정 화면 마크업 설계. 시차출퇴근/선택근무 등 가변적인 정책 데이터를 시각화하는 데이터 그리드 최적화.",
        result:
          "다양한 기업 환경에 즉각 대응 가능한 유연한 UI 구조 확보. 대규모 사용자 트래픽 환경에서도 안정적인 화면 렌더링 성능 유지.",
      },
      {
        title: "차세대 M.office 3.0 리뉴얼 및 UI 표준화",
        codingListHref: "/publishing/2019/02_moffice/html/coding_list.html",
        subtitle: "전사 주력 솔루션의 UI/UX 전면 개편 및 고도화",
        context: "노후화된 레거시 UI 구조로 인한 일관성 결여 및 유지보수 비용 증가.",
        action:
          "UI 에이전트와 긴밀히 협업하여 전사 공통 UI 컴포넌트 가이드라인 수립. 확장성을 고려한 마크업 구조 설계 및 인터랙션 구현.",
        result:
          "주력 상품의 디자인 아이덴티티 통일. 재사용 가능한 컴포넌트 구조화를 통해 후속 프로젝트 UI 개발 속도 30% 이상 향상.",
      },
    ],
  },
  {
    period: "2019",
    company: "제이니스 / 라이트브레인",
    role: "UI 퍼블리싱 및 서비스 운영",
    projects: [
      {
        title: "그린아이넷 맘아이그린 PC관리 리뉴얼 (제이니스)",
        codingListHref: "/publishing/2019/04_momi/coding_list.html",
        subtitle: "모바일 하이브리드 앱 전용 UI 퍼블리싱 및 고도화",
        context: "PC 관리 서비스의 모바일 컨트롤 기능 강화를 위한 하이브리드 앱 기반 리뉴얼.",
        action:
          "웹뷰(WebView) 환경에 최적화된 모바일 전용 UI 마크업 및 인터랙션 구현. 다양한 모바일 기기 해상도 대응을 위한 유연한 레이아웃 설계.",
        result: "모바일 환경에서의 조작 편의성 증대 및 하이브리드 앱 특유의 네이티브한 사용자 경험 제공.",
      },
      {
        title: "이촌회계법인 공식 사이트 운영 및 유지보수 (라이트브레인)",
        codingListHref: "http://e-chon.co.kr/",
        subtitle: "워드프레스 기반 다국어 웹사이트 관리 및 기술 지원",
        action:
          "WordPress 플랫폼을 활용한 다국어(국문/영문 등) 콘텐츠 업데이트 및 레이아웃 유지보수. 글로벌 서비스 안정성을 위한 상시 운영 관리 지원. (기여도 20%)",
        result: "회계법인 특유의 신뢰도 높은 인터페이스 유지 및 다국어 환경에서의 웹 표준 준수 상태 지속 관리.",
      },
    ],
  },
  {
    period: "2018",
    company: "라이트브레인",
    role: "UI 아키텍처 및 퍼블리싱",
    projects: [
      {
        title: "KT 올레TV Mobile 리뉴얼",
        codingListHref: "/publishing/2018/04_ktolleh/index.html",
        subtitle: "미디어 스트리밍 환경에 최적화된 하이브리드 앱 UI 구축",
        context: "모바일 및 패드 기기 전반에 걸친 고도화된 미디어 시청 경험 제공.",
        action:
          "vw(Viewport Width) 단위를 적극 활용하여 iOS 및 안드로이드의 다양한 해상도에 가변적으로 대응하는 인터페이스 구현. 웹뷰 환경에서의 렌더링 최적화.",
        result: "기기별 파편화를 극복하고 일관된 UI 제공. 하이브리드 앱 특유의 유연한 레이아웃 완성.",
      },
      {
        title: "ICON 블록체인 개발자 센터 (ICON Developers)",
        codingListHref: "/publishing/2018/03_icon/index.html",
        subtitle: "글로벌 개발자 생태계를 위한 정보 집약적 웹사이트 구축",
        action:
          "다국어 지원 및 마크다운(Markdown) 문법 렌더링을 고려한 의미론적 마크업 설계. IE10부터 최신 크롬까지 대응하는 크로스브라우징 구현.",
        result: "블록체인 기술 문서의 가독성 확보 및 글로벌 개발자 접근성 향상.",
      },
      {
        title: "LG IDWA CONFIGURATOR",
        codingListHref: "https://www.lg-informationdisplay.com/support/configurator",
        subtitle: "글로벌 B2B 고객을 위한 고도화된 제품 사양 구성 솔루션 반응형 웹 구축",
        action:
          "복잡한 수치와 옵션 선택이 필요한 컨피규레이터 특성을 반영한 반응형 웹 설계. 글로벌 사용자를 위한 다국어 대응 및 IE 호환성 확보.",
        result: "복잡한 제품 구성 과정을 시각화하여 사용자 편의성 증대 및 글로벌 영업 지원 도구로서의 활용도 극대화.",
      },
      {
        title: "뉴발란스(New Balance) 온라인스토어",
        codingListHref: "/publishing/2018/01_newbalance/index.html",
        subtitle: "대규모 트래픽을 대응하는 브랜드 커머스 플랫폼 구축",
        action:
          "IE9을 포함한 광범위한 브라우저 대응(크로스브라우징) 및 모바일 웹 최적화. 브랜드 아이덴티티를 유지하면서 구매 전환을 돕는 UI 퍼블리싱. (기여도 60%)",
        result: "대형 커머스 환경에 필요한 안정적이고 견고한 마크업 구조 구축.",
      },
    ],
  },
  {
    period: "2017",
    company: "라이트브레인",
    role: "UI 아키텍처 및 퍼블리싱",
    projects: [
      {
        title: "신한은행 수퍼플랫폼 UX/UI 컨설팅",
        subtitle: "차세대 금융 플랫폼 '쏠(SOL)'의 UX 기반 구축 및 표준화",
        context: "신한은행의 통합 모바일 뱅킹 플랫폼인 '쏠(SOL)' 출시를 위한 선행 UX/UI 표준 수립.",
        action:
          "금융 서비스에 최적화된 UX Basic 가이드라인에 따른 UI 퍼블리싱 수행. 일관된 사용자 경험을 위한 공통 컴포넌트 마크업 구조 설계.",
        result: "국내 주요 금융 앱의 표준이 된 '쏠(SOL)' 플랫폼의 UI 기틀 마련 및 시각적 일관성 확보.",
      },
      {
        title: "원스토어(One Store) 플랫폼 운영",
        codingListHref: "https://m.onestore.co.kr/",
        subtitle: "국내 대표 앱 마켓의 서비스 안정화 및 고도화 대응",
        context: "대규모 사용자 트래픽이 발생하는 앱 마켓 플랫폼의 상시 운영 및 기술 지원.",
        action:
          "PC 버전 고도화 구축 작업에 따른 신규 UI 반영 및 기존 기능의 유지보수 수행. 잦은 콘텐츠 업데이트에 대응하는 유연한 마크업 관리.",
        result: "서비스 중단 없는 안정적인 플랫폼 운영 및 대규모 개편 작업의 성공적인 안착 지원.",
      },
    ],
  },
  {
    period: "2016",
    company: "라이트브레인",
    role: "플랫폼 운영 및 리뉴얼",
    projects: [
      {
        title: "SK텔레콤 Tlife 프로젝트 - 라이프스타일 플랫폼 서비스 운영 및 대규모 리뉴얼",
        codingListHref: "/publishing/2016/01_Tlife2.0/front/list.html",
        subtitle: "Tlife 1.5 ~ 2.0 통합 구축 및 운영",
        context: "기존 버전(1.5)에서 모바일 중심의 사용자 경험을 강화하기 위한 전면 리뉴얼(2.0) 단행.",
        action:
          "IE8부터 최신 브라우저까지 대응하는 광범위한 크로스브라우징 유지보수 및 상시 운영. PC 버전 리뉴얼 및 모바일 웹/앱 UI 신규 구축 전담. 복잡한 인터랙션 구현 및 웹 표준 준수.",
        result:
          "하위 브라우저(IE8~11) 지원을 통한 사용자 접근성 극대화 및 서비스 연속성 확보. 모바일 환경에 최적화된 인터페이스 구축을 통해 서비스 이용률 및 사용자 만족도 개선.",
      },
    ],
  },
  {
    period: "2015",
    company: "라이트브레인",
    role: "모바일 UI 퍼블리싱 및 서비스 구축",
    projects: [
      {
        title: "GS POP카드(팝카드) 모바일 신규 구축",
        codingListHref: "/publishing/2015/01_gs_popcard/index.html",
        subtitle: "온·오프라인 통합 결제 플랫폼의 모바일 인터페이스 구현",
        context: "GS25, GS super 등을 기반으로 한 통합 멤버십 및 결제 서비스의 모바일 전환 강화.",
        action:
          "모바일 환경에 최적화된 결제 및 포인트 관리 UI 퍼블리싱. 사용자 편의성을 고려한 직관적인 메뉴 구조 및 인터랙션 구현.",
        result: "오프라인 결제와 연동되는 안정적인 모바일 서비스 환경 구축.",
      },
      {
        title: "원스토어(One Store) 이벤트 운영 및 퍼블리싱",
        codingListHref: "https://m.onestore.co.kr/",
        subtitle: "대규모 트래픽 대응을 위한 모바일 최적화 이벤트 페이지 구축",
        context: "국내 주요 통신사 앱 마켓 통합 과정에서의 공격적인 마케팅 및 이벤트 대응.",
        action:
          "하이브리드 앱 환경에 최적화된 이벤트 페이지 신규 구축 및 운영. 매주 진행되는 다양한 형태의 프로모션 UI 제작.",
        result:
          "하이브리드 앱 특유의 제약 사항을 극복한 유연한 이벤트 레이아웃 확보. 신속한 업데이트를 통해 마케팅 효율 극대화.",
      },
    ],
  },
  {
    period: "2014",
    company: "라이트브레인",
    role: "반응형 UI 아키텍처 및 웹 표준 수립",
    projects: [
      {
        title: "HDC 현대산업개발 공식 웹사이트 운영 및 고도화",
        codingListHref: "https://www.hdc-dvp.com/index.do",
        subtitle: "웹 접근성 인증 마크 획득 및 전 기기 대응 반응형 구축",
        context: "기업 신뢰도 제고를 위한 웹 접근성(Web Accessibility) 강화 및 모바일/태블릿 동시 대응.",
        action:
          "PC, 모바일, 태블릿 전체에 대응하는 반응형 UI 최적화. IE8부터 오페라까지 아우르는 크로스브라우징 구현 및 웹 접근성 마크 획득을 위한 최종 마크업 검증 및 보완.",
        result: "장애인 및 노약자 등 모든 사용자의 접근성 보장. 현대산업개발의 디지털 브랜드 아이덴티티 강화.",
      },
      {
        title: "현대라이프 zero몰(Zero Mall) 신규 구축",
        subtitle: "금융 상품 판매를 위한 안정적인 커머스 UI 구축",
        action:
          "복잡한 금융 상품 정보를 직관적으로 전달하는 PC/모바일 신규 UI 퍼블리싱. 하위 브라우저(IE8~11) 환경에서도 동일한 사용자 경험을 제공하는 레이아웃 설계.",
        result: "현대라이프만의 심플한 브랜드 철학을 반영한 디지털 판매 채널 구축 기여.",
      },
      {
        title: "원스토어(One Store) PC 버전 리뉴얼",
        codingListHref: "/publishing/2014/04_tstore4/index.html",
        subtitle: "국내 대표 앱 마켓의 PC 사용자 환경 고도화",
        action:
          "방대한 콘텐츠를 효율적으로 노출하기 위한 PC 메인 및 상세 페이지 리뉴얼. 다양한 브라우저 환경에서의 안정적인 렌더링 최적화.",
        result: "앱 마켓의 시인성 개선 및 PC 환경에서의 콘텐츠 접근성 향상.",
      },
      {
        title: "SK텔레콤 BEMS(Building Energy Management System) 구축",
        subtitle: "글로벌 에너지 관리 솔루션을 위한 다국어/가변형 반응형 UI",
        context: "빌딩 에너지 사용량을 실시간 모니터링하고 제어하는 엔터프라이즈 솔루션 구축.",
        action:
          "국문/영문 다국어 환경 대응 및 1024px/1600px 등 해상도 타입에 따른 가변형 반응형 UI 설계. 대규모 데이터 시각화를 고려한 견고한 마크업 구조 구축.",
        result: "글로벌 비즈니스 환경에 최적화된 B2B 대시보드 인터페이스 완성.",
        news: "https://zdnet.co.kr/view/?no=20140416102305",
      },
    ],
  },
  {
    period: "2013",
    company: "라이트브레인 / 에스프리즘",
    role: "대규모 커머스 및 통신 플랫폼 UI 구축",
    projects: [
      {
        title: "T open (SK텔레콤 오픈마켓) 신규 구축 (라이트브레인)",
        codingListHref: "/publishing/2013/02_t_open_page/admin/web_list.html",
        subtitle: "안드로이드 환경에 최적화된 모바일 및 웹 인터페이스 구현",
        context: "SK텔레콤의 서비스 개방형 플랫폼 구축을 위한 신규 UI 프로젝트.",
        action:
          "안드로이드 OS의 파편화된 해상도에 최적화된 모바일 마크업 설계. IE8부터 오페라까지 아우르는 광범위한 크로스브라우징 구현.",
        result: "기기별 일관된 사용자 경험 제공 및 안정적인 서비스 런칭 기여.",
      },
      {
        title: "현대카드 M포인트몰 리뉴얼 (에스프리즘)",
        codingListHref: "https://mpointmall.hyundaicard.com/main.do",
        subtitle: "프리미엄 커머스 브랜드 아이덴티티를 반영한 PC 웹 고도화",
        context: "현대카드의 핵심 서비스인 M포인트몰의 사용자 편의성 증대 및 디자인 리뉴얼.",
        action:
          "IE7 하위 브라우저 환경에서도 현대카드 특유의 세련된 디자인 레이아웃을 무너짐 없이 구현. 결제 및 포인트 조회 등 복잡한 데이터 연동 화면 퍼블리싱.",
        result: "대규모 사용자 유입에 최적화된 견고한 UI 아키텍처 구축 및 현대카드의 디지털 브랜드 강화.",
      },
      {
        title: "LG U+ Shop(유플러스 샵) 리뉴얼 및 운영 (에스프리즘)",
        codingListHref: "https://www.lguplus.com/mobile?p=1",
        subtitle: "국내 주요 통신사 공식 온라인 직영몰의 통합 구축 및 운영",
        context: "LG유플러스의 주력 판매 채널인 온라인 샵의 대대적인 개편과 실시간 운영 대응.",
        action:
          "PC와 모바일 전반에 걸친 리뉴얼 퍼블리싱 전담. 특히 IE7~9 브라우저 환경에서의 안정적인 렌더링을 보장하는 크로스브라우징 최적화 및 상시 운영 기술 지원.",
        result: "통신사 특유의 방대한 상품 정보를 효율적으로 처리하는 UI 구조 확립.",
      },
    ],
  },
  {
    period: "2012",
    company: "에스프리즘",
    role: "엔터프라이즈 및 모바일 UI 구축",
    projects: [
      {
        title: "삼성 Ci Campus 신규 구축",
        codingListHref: "/publishing/2011/07_CI_Campus/index.html",
        subtitle: "글로벌 기업 교육 플랫폼의 안내 및 콘텐츠 UI 퍼블리싱",
        context: "삼성 임직원 교육 시스템(Ci Campus)의 주요 서비스 안내 및 정보 전달을 위한 웹 페이지 구축.",
        action:
          "삼성의 표준 웹 가이드라인을 준수하여 정보 구조가 명확한 UI 구현. IE7~9 등 하위 브라우저에서도 깨짐 없는 레이아웃을 위한 크로스브라우징 최적화.",
        result:
          "교육 콘텐츠의 시각적 가독성을 확보하고, 다양한 사내 접속 환경에서 동일하게 출력되는 안정적인 마크업 구조 구축.",
      },
      {
        title: "모바일 꿈날개(경기도 온라인평용학습) 신규 구축",
        codingListHref: "/publishing/2012/01_mobile_dream/coding_list.html",
        subtitle: "공공 교육 서비스의 모바일 웹 최적화 및 접근성 강화",
        action:
          "경기도 온라인 평생학습 서비스인 '꿈날개'의 모바일 버전 신규 구축. 당시 급격히 보급되던 아이폰(iOS) 환경에 최적화된 모바일 웹 인터페이스 및 터치 기반 인터랙션 구현.",
        result: "장소에 구애받지 않는 모바일 학습 환경 제공을 통해 서비스 접근성 및 사용자 편의성 증대.",
      },
    ],
  },
  {
    period: "2011",
    company: "에스프리즘",
    role: "웹 표준 및 브라우저 호환성의 기초 확립",
    projects: [
      {
        title: "한양대학교 디자인 대학 공식 웹사이트 구축",
        action: "디자인 대학 특유의 시각적 요소를 살린 UI 구현 및 IE7~9을 포함한 5대 브라우저 크로스브라우징 대응.",
        result: "학내 정보 접근성 향상 및 웹 표준에 기반한 안정적인 콘텐츠 노출.",
      },
      {
        title: "Credu Language(크레듀 언어 교육) 서비스 구축",
        codingListHref: "/publishing/2011/05_credu/credu_codinglist.html",
        action: "온라인 교육 콘텐츠 제공을 위한 웹 인터페이스 퍼블리싱 및 하위 브라우저 호환성 확보.",
        result: "교육 수강생들을 위한 안정적인 학습 환경 UI 제공.",
      },
      {
        title: "GS건설 LCCO2(탄소 배출량) 평가 시스템 구축",
        codingListHref: "/publishing/2011/04_GS_LCCO2/index.html",
        action:
          "건설 현장의 탄소 배출량을 측정·관리하는 전문 시스템의 전체 UI 퍼블리싱 전담. IE6를 포함한 엔터프라이즈 환경 최적화.",
        result: "복잡한 데이터 입력 및 결과 확인이 용이한 정갈한 시스템 인터페이스 구축.",
      },
      {
        title: "LG Diet U 프로모션 페이지 구축",
        codingListHref: "/publishing/2011/03_LG_DietU/index.html",
        action: "캠페인 특성에 맞춘 동적인 레이아웃 및 프로모션 콘텐츠 퍼블리싱.",
        result: "브랜드 이벤트의 시각적 효과 전달 및 사용자 참여를 유도하는 UI 구현.",
      },
      {
        title: "신세계 쿨캣(Coolcat) 여자농구단 웹사이트 구축",
        codingListHref: "/publishing/2011/02_Cool_cat/coding_list.html",
        action: "구단 정보 및 경기 소식을 전달하는 커뮤니티형 웹사이트 신규 구축 참여.",
        result: "팬 서비스 강화를 위한 정보 중심의 UI 구조 확립.",
      },
      {
        title: "경기여성온라인 커리어코칭 시스템 구축",
        codingListHref: "/publishing/2011/01_Carrer_Coaching/01.html",
        action: "온라인 코칭 및 상담 서비스를 위한 웹 페이지 전체 퍼블리싱 전담.",
        result: "공공 교육 서비스 이용자를 위한 표준화된 웹 인터페이스 제공.",
      },
    ],
  },
];
