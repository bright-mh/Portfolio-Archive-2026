<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
	<jsp:include page="/front/inc/top.jsp"></jsp:include>
</head>
<body class="main">
<jsp:include page="/front/inc/head.jsp"></jsp:include>	<div class="article alert" id="content">
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
							<li class="on"><a href="/front/03rnd/research_01.jsp"><span>건축 시공</span></a></li>
							<li><a href="/front/03rnd/research_02.jsp"><span>구조/재료</span></a></li>
							<li><a href="/front/03rnd/research_03.jsp"><span>도시/친환경</span></a></li>
							<li><a href="/front/03rnd/research_04.jsp"><span>토목/기전/방재</span></a></li>
						</ul>
					</div>

					<h2 class="hidden">건축 시공</h2>
					<div class="tech_group">
						<img src="/front/images/03rnd/research01.jpg" alt="초고층 시공 기술 : 연돌효과 저감 방안 연구, 철근 선조립 공법 개발, 초고층 구조물 기초 콘크리트 타설, 초고층 양중 기술" />
						<img src="/front/images/03rnd/research01_02.jpg" alt="공기 단축형 복합 기술 : 시스템 거푸집, 공정관리 및 효과적인현장관리, 조기강도 발현을 위한 재료 배합, 습식공정 요소 기술 개발" />
						<img src="/front/images/03rnd/research01_03.jpg" alt="건식 및 조립화 공법 : Pre-tension 공법을 통한 장스팬연구, 계단 PC 공법, GFRC를 이용한 외피 공법" />
						<img src="/front/images/03rnd/research01_04.jpg" alt="건축 내, 외장재 개발 : 건축용 단열판넬, 가변형 경량 벽체, 대형 복합 석재 시공, 엔지니어링 플라스틱을 이용한 원터치 천정시공법 개발" />
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