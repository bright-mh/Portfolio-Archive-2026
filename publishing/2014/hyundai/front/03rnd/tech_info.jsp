<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
	<jsp:include page="/front/inc/top.jsp"></jsp:include>
</head>
<body class="main">
<jsp:include page="/front/inc/head.jsp"></jsp:include>
	<div class="article alert" id="content">
		<div class="gray">
			<p>PC에 최적화된 페이지 입니다.</p>
		</div>
		<div class="wrap">
			<p class="blind">TECHNOLOGICAL INNOVATION / 현대산업개발은 가치 지향적 경영과 끊임없는 혁신을 기반으로 더 높이 도약합니다.</p>

			<!-- lnb s -->
			<jsp:include page="/front/inc/lnb_03rnd.jsp"></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg2">
					<ul>
						<li><a href="/front/index.jsp"><span class="ico">HOME</span></a></li>
						<li class="gt"><a href="/front/03rnd/tech_info.jsp">기술혁신</a></li>
						<li class="gt last"><a href="/front/03rnd/tech_info.jsp">기술연구소</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>기술연구소</h1>
					<div class="tab tab3">
						<ul>
							<li class="on"><a href="/front/03rnd/tech_info.jsp"><span>소개</span></a></li>
							<li><a href="/front/03rnd/tech_history.jsp"><span>연혁</span></a></li>
							<li><a href="/front/03rnd/tech_organization.jsp"><span>조직도</span></a></li>
						</ul>
					</div>

					<h2 class="hidden">소개</h2>
					<div class="tech_group">
						<img src="/front/images/03rnd/tech01.jpg" alt="HDC 기술연구소 - R&amp;D CENTER. 앞선 기술력과 자부심으로, 혁신적이고 차별화 된 신기술을 만들어 갑니다." class="mt5" />

						<img src="/front/images/03rnd/tech01_02.gif" alt="" class="mt43" />
						<div class="blind">
							<h3>Vision : 사람 / 자연 / 미래를 위한 가치창조 - 전문 인력과 독자적인 기술력을 바탕으로 차별화된 상품과 서비스를 창출하는 21C GLOBAL LEADING DEVELOPER</h3>

							<h3>Mission</h3>
							<ul>
								<li>기술혁신 : 성장지원자(GROWTH SUPRORTER)에서 가치창조자(VALUE CREATOR)로</li>
								<li>사업창출 : R&amp;D에서 R&amp;BD (RESEARCH &amp; BUSINESS DEVELOPMENT)로</li>
								<li>기술융합 : 추격자(FAST FOLLOWER)에서 선도자(FIRST MOVER)로</li>
							</ul>

							<h3>Strategy</h3>
							<ul>
								<li>연구의 선택과 집중
									<ul>
										<li>3대 전략 목표 : 원천기술 확보, 실용화 기술 확보, 미래 핵심기술 선도</li>
										<li>중점 연구 영역 : 친환경, 에너지, 기반 기술</li>
									</ul>
								</li>
								<li>연구자원의 효율적 운영
									<ul>
										<li>연구자원 운영체계 확립 : 우수인력 확보 및 육성, 연구자원 인프라 구축</li>
										<li>연구 역량 강화 : 조직의 선진화, 연구 협력 시스템 구축</li>
										<li>관리 프로세스 개선 : 연구 기획 기능 확대, 연구 관리 및 평가 내실화</li>
									</ul>
								</li>
								<li>연구성과 확산 시스템 구축
									<ul>
										<li>R&amp;D 시스템 구축 : 성과 활용 체계 구축, 기술마케팅 활동기반 마련</li>
										<li>고객 만족 경영 : 대,내외 고객 만족 경영, 연구 윤리강화</li>
									</ul>
								</li>
							</ul>

							<h3>Main Activities</h3>
							<ul>
								<li>기반기술 : 건축 신기술 및 신 공법 개발, 공기단축 기술, 현장 기술지원 및 하자분석, 신재생에너지 융합기술</li>
								<li>미래기술 : 기술 기획, 기술 정보 수집, 정부 정책 대응, 친환경 기술 개발 및 에너지 성능평가, 설계 기술지원</li>
								<li>환경기술 : 건축재료 / 건축구조 / 토목분야 기술지원, 원가절감 기술, 빛 , 열, 음, 물, 공기질 연구</li>
							</ul>

							<h3>Management Policy</h3>
							<ul>
								<li>고객감동 : 고객의 가치 창조를 위한 미래 지향적이고 혁신적인 연구 수행</li>
								<li>회사감동 : 회사의 가치 향상을 위한 실용적이고 차별적인 연구 수행, 소통을 통한 수평적인 조직 문화 형성</li>
								<li>자기감동 : SPECIALIST 로서의 역량 강화</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="bt_top">
					<a href="#layoutWrap"><img src="/front/images/sub/bt_top.png" alt="상단으로"/></a>
				</div>
			</div>
			<!-- container e -->

		</div>
	</div>

<jsp:include page="/front/inc/footer.jsp"></jsp:include>
</body>
</html>