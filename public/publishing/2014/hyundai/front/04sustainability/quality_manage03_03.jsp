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
			<p class="blind">SUSTAINABILITY MANAGEMENT / 지속 가능한 행복을 추구하는 동시에 새로운 가치와 문화를 창조하는 일에 더욱 매진하겠습니다.</p>

			<!-- lnb s -->
			<jsp:include page="/front/inc/lnb_04sustainability.jsp"></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg3">
					<ul>
						<li><a href="/front/index.jsp"><span class="ico">HOME</span></a></li>
						<li class="gt"><a href="/front/04sustainability/quality_manage01.jsp">지속가능경영</a></li>
						<li class="gt last"><a href="/front/04sustainability/quality_manage03_01.jsp">안전경영</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>안전경영</h1>
					<div class="tab tab3">
						<ul>
							<li><a href="/front/04sustainability/quality_manage03_01.jsp"><span>방침</span></a></li>
							<li><a href="/front/04sustainability/quality_manage03_02.jsp"><span>운영체계</span></a></li>
							<li class="on"><a href="/front/04sustainability/quality_manage03_03.jsp"><span>활동</span></a></li>
						</ul>
					</div>

					<h2 class="hidden">활동</h2>
					<div class="manageV">
						<div class="box mb9">
							<h3 class="title_style">실천! CLEAN 5</h3>
							<p class="explain">현대산업개발은 협력(Cooperator)을 의미하는 이니셜인 C가 맨 앞에 놓이는 안전품질 특별캠페인인 <span>'실천! CLEAN 5'</span> 운동을 진행하고 있습니다.</p>
							<img src="/front/images/04sustainability/img_manage06.gif" alt="">
							<div class="blind">
								<p>모든 재해는 예방할 수 있다.</p>
								<dl>
									<dt>C : Cooperator</dt>
									<dd>협력회사 참여 : 안전보건경영시스템 효율적 운영</dd>
									<dt>L : Law</dt>
									<dd>안전규정 준수 : 근로자 관리기준 강화</dd>
									<dt>E : Equipment</dt>
									<dd>장비관리 철저 : 장비작업 절차, 기준 강화</dd>
									<dt>A : Arrangement</dt>
									<dd>현장 정리정돈 : 월2회 정리정돈의 날 지정 운영</dd>
									<dt>N : No-risk</dt>
									<dd>위험요소 제거 : 아차 사고사례 공유 활성화</dd>
								</dl>
							</div>
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