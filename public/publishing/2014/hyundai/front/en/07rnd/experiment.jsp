<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="ko">
<head>
	<jsp:include page="/front/en/inc/top.jsp"></jsp:include>
</head>
<body class="main">
	<jsp:include page="/front/en/inc/head.jsp"></jsp:include>
	<div class="article alert" id="content">
		<div class="gray">
			<p>Pages that are optimized for PC</p>
		</div>
		<div class="wrap">
			<p class="blind">TECHNOLOGICAL INNOVATION</p>
			<!-- lnb s -->
			<jsp:include page="/front/en/inc/lnb_07rnd.jsp"></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg2">
					<ul>
						<li><a href="/front/en/index.jsp"><span class="ico"></span></a></li>
						<li class="gt"><a href="#none">기술혁신</a></li>
						<li class="gt last"><a href="#none">연구분야</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>연구분야</h1>
					<div class="tab tab2">
						<ul>
							<li><a href="/front/en/07rnd/research.jsp"><span>주요연구분야</span></a></li>
							<li class="on"><a href="/front/en/07rnd/experiment.jsp"><span>관련실험분야</span></a></li>
						</ul>
					</div>

					<div class="tech_group">
						<img src="/front/en/images/07rnd/tech04.gif" alt=""/>
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
					<a href="#layoutWrap"><img src="/images/sub/bt_top.png" alt="Top of page"/></a>
				</div>
			</div>
			<!-- container e -->

		</div>
	</div>

<jsp:include page="/front/en/inc/footer.jsp"></jsp:include>
</body>
</html>
