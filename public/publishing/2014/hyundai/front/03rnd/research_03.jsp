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
						<li class="gt last"><a href="/front/03rnd/research_01.jsp">연구분야</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>연구분야</h1>
					<div class="tab tab4">
						<ul>
							<li><a href="/front/03rnd/research_01.jsp"><span>건축 시공</span></a></li>
							<li><a href="/front/03rnd/research_02.jsp"><span>구조/재료</span></a></li>
							<li class="on"><a href="/front/03rnd/research_03.jsp"><span>도시/친환경</span></a></li>
							<li><a href="/front/03rnd/research_04.jsp"><span>토목/기전/방재</span></a></li>
						</ul>
					</div>

					<h2 class="hidden">도시/친환경</h2>
					<div class="tech_group">
						<img src="/front/images/03rnd/research03.jpg" alt="소음, 진동 저감 공법 : 바닥 충격음 현장 성능 평가, 완충재 물성 시험, 경계벽 차음 성능 평가, 바닥 슬래브 진동 평가" class="display_effect" />
						<img src="/front/images/03rnd/research03_02.jpg" alt="실내 공기질 관리 기술 : 실내공기질 분석 및 평가, 친환경자재 평가 및 적용 기술, 환기성능 평가, HCHO(포름알데이드) 측정, TVOCS (휘발성유기화합물) 측정" class="display_effect" />
						<img src="/front/images/03rnd/research03_03.jpg" alt="결로 방지 기술 : 단열재 및 창호 성능 분석 실험, 실내 온열 환경 및 기류 분석, 결로 발생 조건 및 분석, 기밀성능 평가 및 공법 개발" class="display_effect" />
						<img src="/front/images/03rnd/research03_04.jpg" alt="제로에너지 주택 기술 : 타설일체형 외단열 공법 개발, 고단열 PC 공법 개발, 태양열, 태양광, 풍력, 연료전지 현장 적용 기술, Active Sun Lighting" class="display_effect" />
						<img src="/front/images/03rnd/research03_05.jpg" alt="탄소저감도시계획 : 탄소저감 통합 도시계획 시스템 개발, 탄소저감형 공동 주택 단지 구현 요소 기술 개발, 공동주택 단지 LCCO2 평가" class="display_effect" />
						<img src="/front/images/03rnd/research03_06.jpg" alt="Green BIM 기술 : 단지 일조 환경 시뮬레이션, 자연채광 효과 분석, 세대별 조망 시뮬레이션, 단지 내외부 풍환경 시뮬레이션" class="display_effect" />
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