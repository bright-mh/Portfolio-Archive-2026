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
						<li class="gt last"><a href="#none">ARCHITECTUAL WORKS</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>ARCHITECTURAL</h1>
					<div class="tab tab2">
						<ul>
							<li class="on"><a href="#none"><span>SUMMARY</span></a></li>
							<li><a href="/front/en/02business/build_biz.jsp?lang=en&grp_cd=1"><span>MAJOR PROJECT</span></a></li>
						</ul>
					</div>

					<div class="business">
						<div class="img_box change">
							<img src="/front/en/images/02business/img_build.jpg" alt="Space Builder Samsung-dong IPARK" />
						</div>

						<div class="hr"></div>

						<div class="txt_box mb0">
							<p class="dark">The space creator that creates spaces in the city newly</p>
							<p>Hyundai Development Company, Ltd has been leading the new architectural culture as a creator that creates spaces in the city that pursues architecture as an everlasting scenery that unites the surroundings of the city and the nature as well as caring the basic concept of architecture for last 30 years.</p>
							<p class="light mb0">Architecture is also a culture as trace of human can be drawn on time and space. It is a way to interchange between people and a bowl that is holding the life of each one. Further, it is the essence of art and a living existence that transcends times. Hyundai Development Company has aimes at a differentiated architecture That can be clearly distinguished among others.</p>
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
