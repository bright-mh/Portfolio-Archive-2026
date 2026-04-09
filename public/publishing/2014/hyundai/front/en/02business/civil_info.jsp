<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="ko">
<head>
	<jsp:include page="/front/en/inc/top.jsp"></jsp:include>
</head>
<body class="main">
	<jsp:include page="/front/en/inc/head.jsp"></jsp:include>
	<div class="article" id="content">
		<div class="wrap">
			<p class="blind">BUSINESS INFORMATION</p>
			<!-- lnb s -->
			<jsp:include page="/front/en/inc/lnb_02business.jsp"></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg1">
					<ul>
						<li><a href="/front/en/index.jsp"><span class="ico"></span></a></li>
						<li class="gt"><a href="#none">BUSINESS</a></li>
						<li class="gt last"><a href="#none">CIVIL WORKS</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>CIVIL WORKS</h1>
					<div class="tab tab2">
						<ul>
							<li class="on"><a href="/front/en/02business/civil_info.jsp"><span>SUMMARY</span></a></li>
							<li><a href="/front/en/02business/civil_biz.jsp?lang=en&grp_cd=1"><span>MAJOR PROJECT</span></a></li>
						</ul>
					</div>

					<div class="business">
						<div class="img_box change">
							<img src="/front/en/images/02business/img_civil.jpg" alt="Project Designer / The New Expressway from Daegu-Busan" />
						</div>

						<div class="hr"></div>

						<div class="txt_box mb0">
							<p class="dark">The innovator in the field of construction that is drawing the map of Korea newly</p>
							<p>The Hyundai Development Company, Inc. has performed various constructions to promote effective land development and convenience as well as better lives of people. Being the 'Blue Ocean' in the field of construction, we do out best to enrich the life quality of human making barren soil fertile.</p>
							<p class="light mb0">Construction is making a new space in the nature, so to speak, creating something from nothing. Also, it is a way to seek the answer for human and the nature to live together. Hyundai Development Company. Inc has renewed it self from the leader in the field of housing to a total construction enterprise. It has performed various constructions to promote effective land development and convenience as well as better lives of people and made an effort to realize the human-oriented and nature-friendly construction. Especially through our great achievement in SOC area, we have developed and planned a business considering beyond a mere concept of construction. In addition with an excellent performance of the project designers who are in charge of the overall management as well as the care after the construction. we are leading the field of construction being the 'Blue Ocean' that keeps creating a new value for the growth of the company.</p>
						</div>
					</div>
				</div>

				<div class="bt_top">
					<a href="#layoutWrap"><img src="/front/en/images/sub/bt_top.png" alt="Top of page"/></a>
				</div>
			</div>
			<!-- container e -->

		</div>
	</div>

<jsp:include page="/front/en/inc/footer.jsp"></jsp:include>
</body>
</html>
