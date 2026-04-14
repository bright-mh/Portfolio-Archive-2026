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
							<li class="on"><a href="/front/en/07rnd/research_01.jsp"><span>주요연구분야</span></a></li>
							<li><a href="/front/en/07rnd/experiment.jsp"><span>관련실험분야</span></a></li>
						</ul>
					</div>

					<div class="tech_group">
						<img src="/front/en/images/07rnd/tech03.gif" alt=""/>
						<div class="blind">
							<dl>
								<dt>에너지 및 탄소저감 건설분야</dt>
								<dd>친환경 기술개발  및 에너지 성능평가</dd>
								<dd>외단열 PC공법</dd>
								<dd>탄소건설재료 개발</dd>
								<dd>탄소저감도시 요소기술</dd>
								<dd>태양열, 태양광, 풍력, 연료전지, 신재생에너지 분야</dd>
							</dl>
							<dl>
								<dt>건축시공 및 계획분야</dt>
								<dd>초고층 시공기술</dd>
								<dd>공기 단축형 복합기술</dd>
								<dd>건식화 및 조립화 공법</dd>
								<dd>BIM 및 설계지원 프로그램 개발</dd>
								<dd>단지환경 분석기술</dd>
								<dd>건축 내,외장재 개발</dd>
							</dl>
							<dl>
								<dt>건축구조/방재/재료분야</dt>
								<dd>초고층 복합화 시스템</dd>
								<dd>융복합 제진기술 개발</dd>
								<dd>그린리모델링 요소기술</dd>
								<dd>친환경 콘크리트 개발</dd>
								<dd>화재안전 기술</dd>
							</dl>
							<dl>
								<dt>건축환경/기전/토목분야</dt>
								<dd>소음, 진동 방지공법</dd>
								<dd>공기질, 환기 및 설비 관련 기술</dd>
								<dd>스마트그리드 및 헬스케어 기술</dd>
								<dd>지능형 자동화 시스템 개발</dd>
								<dd>흙막이, 기초 및 지반 관련 기술 및 공법개발</dd>
							</dl>
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
