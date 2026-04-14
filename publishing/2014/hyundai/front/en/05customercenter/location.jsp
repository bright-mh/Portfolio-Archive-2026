<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="ko">
<head>
	<jsp:include page="/front/en/inc/top.jsp"></jsp:include>
</head>
<body class="main">
	<jsp:include page="/front/en/inc/head.jsp"></jsp:include>
	<div class="article alert">
		<div class="gray">
			<p>PC에 최적화된 페이지 입니다.</p>
		</div>
		<div class="wrap">
			<p class="blind">CUSTOMER CENTER</p>
			<!-- lnb s -->
			<jsp:include page="/front/en/inc/lnb_05customercenter.jsp"></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg4">
					<ul>
						<li><a href="/front/en/index.jsp"><span class="ico"></span></a></li>
						<li class="gt"><a href="#none">CUSTOMER SERVICE</a></li>
						<li class="gt last"><a href="#none">CONTACT US</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1 class="pb17">CONTACT US</h1>
					
					<div class="custom_map">
						<img src="/front/en/images/05customer/img_map.png" alt="HDC 55, Hangang-daero 23-gil, Yongsan-gu, Seoul, 140-780, Korea">
					</div>
					<div class="custom_tx">
						<h2>WE WANT TO HEAR FROM YOU</h2>
						<p>Please send us your questions or comments reqarding this web site or the service we offer.</p>
					</div>
					<ul class="custom_address">
						<li><em>ADDRESS</em>HDC 55, Hangang-daero 23-gil, Yongsan-gu, Seoul, 140-780, Korea</li>
						<li><em>TEL</em>+82 - 2 - 2008 - 9114</li>
						<li><em>E-MAIL</em>webinfo@hyundai-dvp.com</li>
						<li><em>FAX</em>+82 - 2 - 2008 - 9030</li>
					</ul>
					

				</div>

				

				<div class="bt_top">
					<a href="#layoutWrap"><img src="/images/sub/bt_top.png" alt="Top of page"></a>
				</div>
			</div>
			<!-- container e -->

		</div>
	</div>

<jsp:include page="/front/en/inc/footer.jsp"></jsp:include>
</body>
</html>
