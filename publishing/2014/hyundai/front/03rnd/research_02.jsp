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
							<li class="on"><a href="/front/03rnd/research_02.jsp"><span>구조/재료</span></a></li>
							<li><a href="/front/03rnd/research_03.jsp"><span>도시/친환경</span></a></li>
							<li><a href="/front/03rnd/research_04.jsp"><span>토목/기전/방재</span></a></li>
						</ul>
					</div>

					<h2 class="hidden">구조/재료</h2>
					<div class="tech_group">
						<img src="/front/images/03rnd/research02.jpg" alt="초고층 복합화 시스템 : 기둥축소량 측정 및 해석, Flat Plate Slab 전단보강체 개발, 전단벽과 Steel 링크보 접합부 상세 개발, 건물의 연성거동을 위한 SRC 링크보 개발" />
						<img src="/front/images/03rnd/research02_02.jpg" alt="그린리모델링 요소기술 : 층고확보를 위한 바닥 시스템 개발, 층간소음 저감 공법, SAP(Screw Anchor Pile) 공법" />
						<img src="/front/images/03rnd/research02_03.jpg" alt="고강도 내화 콘크리트 개발 : 고강도 내화 콘크리트 배합설계, 고강도 내화 콘크리트 물성 평가, 폭렬방지 및 내화 성능 향상 기술" />
						<img src="/front/images/03rnd/research02_04.jpg" alt="친환경 콘크리트 개발 : 탄소 저감형 혼화재 다량 치환 친환경 콘크리트 개발, 수화열 저감을 위한 저발열 콘크리트 배합 설계 지원, 저발열 콘크리트 현장 품질관리 지원" />
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