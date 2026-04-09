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
			<p class="blind">TECHNOLOGICAL INNOVATION / 선진 건설기술 자립을 위해 축적된 시공경험과 기술력을 바탕으로 차별화된 신기술을 연구개발하고 있습니다.</p>

			<!-- lnb s -->
			<jsp:include page="/front/inc/lnb_03rnd.jsp"></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg2">
					<ul>
						<li><a href="/front/index.jsp"><span class="ico">HOME</span></a></li>
						<li class="gt"><a href="#none">기술혁신</a></li>
						<li class="gt last"><a href="#none">연구분야</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>연구분야</h1>
					<div class="tab tab2">
						<ul>
							<li><a href="/front/03rnd/research_01.jsp"><span>주요연구분야</span></a></li>
							<li class="on"><a href="/front/03rnd/experiment.jsp"><span>관련실험분야</span></a></li>
						</ul>
					</div>

					<div class="tech_group">
						<img src="/front/images/03rnd/tech04.gif" alt=""/>
						<div class="blind">
							<h2>관련실험분야</h2>
							<ul>
								<li>구조 및 재료 분야 역학 실험</li>
								<li>신재생 에너지 연구</li>
								<li>인공 지반녹화 연구</li>
								<li>실내 공기질 환경 분석</li>
								<li>사후 환경 영향 평가 </li>
								<li>소음진동 영향 분석</li>
								<li>건축 자재 내구성 분석</li>
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