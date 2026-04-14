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
							<li><a href="/front/03rnd/tech_info.jsp"><span>소개</span></a></li>
							<li><a href="/front/03rnd/tech_history.jsp"><span>연혁</span></a></li>
							<li class="on"><a href="/front/03rnd/tech_organization.jsp"><span>조직도</span></a></li>
						</ul>
					</div>

					<h2 class="hidden">조직도</h2>
					<div class="tech_group">
						<h3 class="title">연구소 조직도</h3>
						<img src="/front/images/03rnd/tech02.gif" alt=""/>
						<div class="blind">
							<p>기술연구소 (R&amp;D CENTER)</p>
							<ul>
								<li>전략기획파트
									<ul>
										<li>- 미래형 핵심상품 및 가치기술 기획</li>
										<li>- 최첨단 주거문화선도 전략수립</li>
									</ul>
								</li>
								<li>기반기술파트
									<ul>
										<li>건설신기술 및 신자재, 신공법 개발 - 원가절감 및 공기단축 기술 확보</li>
										<li>구조해석, 소음 및 진동기술</li>
										<li>스마트그리드 및 헬스케어 기술</li>
										<li>신재생 에너지 설계 및 융합기술</li>
									</ul>
								</li>
								<li>미래기술파트
									<ul>
										<li>친환경 기술 개발 및 에너지 성능 평가 - 저탄소 및 에너지 절감 기술 확보</li>
										<li>실내공기질 및 주택 환경 향상기술</li>
										<li>정부 정책 및 법규 대응</li>
										<li>설계 및 상품 개발 기술 지원</li>
									</ul>
								</li>
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