<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="ko">
<head>
	<jsp:include page="/front/en/inc/top.jsp"></jsp:include>
</head>
<body class="main">
	<jsp:include page="/front/en/inc/head.jsp"></jsp:include>
	<div class="article alert" id="content">
		<div class="wrap">
			<p class="blind">SUSTAINABILITY MANAGEMENT</p>
			<!-- lnb s -->
			<jsp:include page="/front/en/inc/lnb_08sustainability.jsp"></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg8">
					<ul>
						<li><a href="/front/en/index.jsp"><span class="ico"></span></a></li>
						<li class="gt"><a href="#none">SUSTAINBILITY</a></li>
						<li class="gt last"><a href="#none">SOCIAL CONTRIBUTION</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>Social Contribution</h1>
					<div class="tab tab3">
						<ul>
							<li><a href="/front/en/08sustainability/contribute_01.jsp"><span>Introduction</span></a></li>
							<li><a href="/front/en/08sustainability/contribute_02.jsp"><span>Field of Activity</span></a></li>
							<li class="on"><a href="/front/en/08sustainability/contribute_03_01.jsp"><span>Major Activities</span></a></li>
						</ul>
					</div>

					<div class="manage02">
						<!-- 2014-07-02 영역 삭제 -->
						<!--
						<h2>나눔의 정신으로 세상을 아름답게</h2>
						<p class="light">현대산업개발은 IPARK 사회봉사단을 통해 나눔의 정신을 전문 분야인 건설을 중심으로 모든 분야에서 실천하고 있습니다.</p>
						-->

						<div class="year">
							<ul>
								<li><a href="/front/en/08sustainability/contribute_03_01.jsp">2014</a></li>
								<li><a href="/front/en/08sustainability/contribute_03_02.jsp">2013</a></li>
								<li><a href="/front/en/08sustainability/contribute_03_03.jsp">2012</a></li>
								<li><a href="/front/en/08sustainability/contribute_03_04.jsp">2011</a></li>
								<li><a href="/front/en/08sustainability/contribute_03_05.jsp">2008</a></li>
								<li><a href="/front/en/08sustainability/contribute_03_06.jsp">2007</a></li>
								<li class="on"><a href="/front/en/08sustainability/contribute_03_07.jsp">2006</a></li>
								<li><a href="/front/en/08sustainability/contribute_03_08.jsp">2005</a></li>
								<li><a href="/front/en/08sustainability/contribute_03_09.jsp">2004</a></li>
							</ul>
						</div>

						<div class="serve2">
							<img src="/front/en/images/08sustainability/wserve05.jpg" alt="Blood Donation of Love Campaign"/>
							<div class="hr"></div>
							<dl>
								<dt>Blood Donation of Love Campaign</dt>
								<dd>Hyundai Development Company concluded blood donation agreement with Ministry of Health and Welfare and Korea National Red Cross, and 600 executives and staffs of Head office have started ‘Blood donation of love campaign.’ Our campaign will continue with our affiliated company and every work places by registering to blood donation membership. Furthermore, we have agreed to actively participate in supporting building facilities for blood donation throughout universities and public institutions.</dd>
							</dl>
						</div>

						<!-- 2014-07-02 class="mb0" 추가 -->
						<div class="serve2 mb0">
						<!-- //2014-07-02 class="mb0" 추가 -->
							<img src="/front/en/images/08sustainability/wserve06.jpg" alt="Moving I’CAMP"/>
							<div class="hr"></div>
							<dl>
								<dt>Moving I’CAMP</dt>
								<dd>‘Moving ICAMP’ is Korea’s first mobile library with field study facilities donated by IPARK Corporate Citizenship. The ‘Moving ICAMP’ is converted from RV and is fully capable of handling bed and foods in ONE-STOP. Underfed children will receive counseling from reading instructor and social worker and they will experience outdoor activates including observatory class for stars, cultural relics exploration class, agricultural experience and pottery class with professional volunteer.</dd>
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
