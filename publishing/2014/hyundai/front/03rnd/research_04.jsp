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
							<li><a href="/front/03rnd/research_03.jsp"><span>도시/친환경</span></a></li>
							<li class="on"><a href="/front/03rnd/research_04.jsp"><span>토목/기전/방재</span></a></li>
						</ul>
					</div>

					<h2 class="hidden">토목/기전/방재</h2>
					<div class="tech_group">
						<img src="/front/images/03rnd/research04.jpg" alt="흙막이 및 기초 관련 기술 : 연속 CIP공법을 활용한 지하구조벽체 개발, 가설 센터파일을 이용한 역타공법 개선, 지반 보강체를 활용한 전면 투수 포장 시스템" class="display_effect" />
						<img src="/front/images/03rnd/research04_02.jpg" alt="인공 지반 녹화시스템 : IGREEN 법면녹화, 방수방근 일체화를 통한 성능개선, 벽체 배수판에 식생결합한 입면 녹화개선, 복합 기능성 일체형 옥상녹화시스템" class="display_effect" />
						<img src="/front/images/03rnd/research04_03.jpg" alt="스마트 그리드 및 헬스케어 기술 : 세대 에너지관리(HEMS) 시스템, 빌딩에너지관리시스템(BEMS) 관련 연구, 원격진료 대응방안 연구, Health care 적용방안 연구" class="display_effect" />
						<img src="/front/images/03rnd/research04_04.jpg" alt="지능형 자동화 시스템 개발 : LED조명 시스템, 아이 스마트키 시스템, 소방방송 통합시스템, 아이허브 시스템, 아이파크 애플리케이션" class="display_effect" />
						<img src="/front/images/03rnd/research04_05.jpg" alt="생활 친화형 설비 기술 : 욕실의 층상배관 시스템, 난방온수 분배시스템, 욕실 소음 저감 공법" class="display_effect" />
						<img src="/front/images/03rnd/research04_06.jpg" alt="화재안전 기술 : 내화성 경량 무기질 보드를 이용한 커튼월 시스템, 무선통신 1Line 중계기형 안테나방식 연구, 고성능 누설동축케이블 연구" class="display_effect" />
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