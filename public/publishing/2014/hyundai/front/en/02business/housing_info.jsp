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
						<li class="gt last"><a href="#none">HOUSING</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>HOUSING</h1>
					<div class="tab tab2">
						<ul>
							<li class="on"><a href="/front/en/02business/housing_info.jsp"><span>SUMMARY</span></a></li>
							<li><a href="/front/en/02business/housing_biz.jsp?lang=en"><span>MAJOR PROJECT</span></a></li>
						</ul>
					</div>

					<div class="business">
						<div class="img_box change">
							<img src="/front/en/images/02business/img_housing.jpg" alt="Leading developer Samsung-dong IPARK" />
						</div>

						<div class="hr"></div>

						<div class="txt_box mb0">
							<p class="dark">Invite you as the one who deserves the best pride and premiere service</p>
							<p>Hyundai Development Company, Ltd has promoted a new living culture generating a sensation to the domestic housing culture. Through the scientific design, differentiated interior, and the trend creating sense, we upgrade your value as a leading developer in the field of housing </p>
							<p class="light mb0">The word 'house' implies more than a mere meaning of a nest. It is a space for rest and relief. Also, it is a place That charges energy for tomorrow and a field of dream that makes us ready for the future. For last 30 years, Hyundai Development Company has led the development of domestic housing culture and stabilization to people's living providing apartments to about 100 million households. The history of Hyundai Development Company is like the history of Korea housing culture.</p>
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
