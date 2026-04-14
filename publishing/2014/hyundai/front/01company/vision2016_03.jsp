<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
	<jsp:include page="/front/inc/top.jsp"></jsp:include>
</head>
<body class="main">
<jsp:include page="/front/inc/head.jsp"></jsp:include>
	<div class="article" id="content">
		<div class="wrap">
			<p class="blind">COMPANY INTRODUCTION / 환경친화적이고 인간중심의 건축문화에 공헌하는 세계 초일류 기업으로 도약하겠습니다.</p>

			<!-- lnb s -->
			<jsp:include page="/front/inc/lnb_01company.jsp"></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg0">
					<ul>
						<li><a href="/front/index.jsp"><span class="ico">HOME</span></a></li>
						<li class="gt"><a href="#none">회사소개</a></li>
						<li class="gt last"><a href="#none">VISION</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>VISION</h1>
					<div class="tab tab4">
						<ul>
							<li><a href="/front/01company/vision2016_01.jsp" class="mb0"><span>성장비전 추진체계도</span></a></li>
							<li class="on"><a href="/front/01company/vision2016_03.jsp" class="mb0"><span>신규사업전략 &amp; 비전</span></a></li>
						</ul>
					</div>

					<div class="vision">
						<!-- <h2>현대산업개발은</h2> -->
						<!-- 2014-06-25 class="txt01 mb70" 추가 -->
						<p class="txt01 mb70">현대산업개발은 축적된 핵심역량을 바탕으로 사업영역을 확장하여 국내외 도시개발사업 뿐만 아니라 플랜트, 그린에너지, 자원개발 사업 등 Global Leading Developer &amp; EPC Contractor로서 위상을 드높일 것입니다.</p>
						<!-- //2014-06-25 class="txt01 mb70" 추가 -->

						<!-- 2014-06-25 h3태그로 수정, p태그에 class="txt02" 추가 -->
						<h3>VISION</h3>
						<p class="txt02">Global Leading Developer &amp; EPC Contractor</p>
						<!-- //2014-06-25 h3태그로 수정, p태그에 class="txt02" 추가 -->
						<!-- 2014-06-25 class="mt0" 추가 -->
						<img src="/front/images/01company/vision03.gif" alt="" class="mt0" />
						<!-- //2014-06-25 class="mt0" 추가 -->
						<div class="blind">
							<!-- 2014-06-25 h4태그로 수정 -->
							<h4>국내시장 심화 및 확대 &amp; 해외시장 확장</h4>
							<!-- //2014-06-25 h4태그로 수정 -->
							<ul>
								<li>도시개발사업 : 신도시개발, 도심재개발, 도시재생</li>
								<li>플랜트 : 원자력, Oil &amp; Gas, 화학, 화력, 제철, 시멘트</li>
								<li>그린에너지 : 수력, 조력, 풍력, 태양열, 연료전지</li>
								<li>해외자원개발 : 석유, 가스, 식량, 조림</li>
							</ul>
						</div>

						<!-- 2014-06-25 h3태그로 수정, class="mt70" 추가 -->
						<h3 class="mt70">TO BE BIZ-MODEL</h3>
						<!-- //2014-06-25 h3태그로 수정, class="mt70" 추가 -->
						<img src="/front/images/01company/vision04.gif" alt=""/>
						<div class="blind">
							<ul>
								<li>원전 참여(Deputy General Manager)</li>
								<li>에너지 플랜트 수직계열화 구축(Energy Plant Systematization)</li>
								<li>사업구조 다각화 &amp; 엔지니어링 역량 확보(Business Structures Diversification &amp; Engineering Ability Secure)</li>
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