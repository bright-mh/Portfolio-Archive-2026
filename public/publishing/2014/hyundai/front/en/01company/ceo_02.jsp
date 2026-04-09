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
			<p class="blind">COMPANY INTRODUCTION</p>
			<!-- lnb s -->
			<jsp:include page="/front/en/inc/lnb_01company.jsp"></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg0">
					<ul>
						<li><a href="/front/en/index.jsp"><span class="ico"></span></a></li>
						<li class="gt"><a href="#none">COMPANY</a></li>
						<li class="gt last"><a href="#none">CEO MESSAGE</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>CEO MESSAGE</h1>
					<div class="tab tab2 tab_ceo">
						<ul>
							<li><a href="/front/en/01company/ceo_01.jsp"><span>CHAIRMAN AND CEO’S GREETINGS</span></a></li>
							<li class="on"><a href="/front/en/01company/ceo_02.jsp"><span>PRESIDENT AND CEO’S GREETING</span></a></li>
						</ul>
					</div>

					<div class="img_box ceo">
						<img src="/front/en/images/01company/ceo02.jpg" alt="CEO Chang-Min Park" />
					</div>

					<div class="hr"></div>

					<div class="txt_box">
						<h2>“Global Leading Developer &amp; Creative Industries”</h2>
						<p class="dark">Hyundai Development Company is a global leading developer the aims to enrich our customers’ lives and bring color and efficiency to urban space. With Vision 2016, we continue our efforts to grow into an innovative company that creates customer value.</p>
						<p class="light">At Hyundai Development Company, we always try to stay awake. With a dynamic culture, we never stop pursuing our dreams. Since its inception in 1976, Hyundai Development Company has provided record high of 340,000 houses pioneering residential culture in Korea. As early as 1970s, we became that first company to enter into urban development areas ushering in an era of new urban culture. Not only that, we have successfully cemented our position as a global leading developer and EPC contractor by reaping remarkable results in architecture and SOC projects.</p>
						<p class="light">Based on our history of challenge and growth, Hyundai Development Company announced Vision 2016 of new goals and mid-to long-term development strategy at the beginning of this year. With the newly launched vision, we are poised to write a new chapter of our growth by expanding overseas businesses and pursuing new opportunities in plants including nuclear power plants.</p>
						<!-- 2014-07-04 class="mb0" 추가 -->
						<p class="light mb0">We will strive to create new value for our costomers based on in-depth understanding of their needs.</p>
						<!-- //2014-07-04 class="mb0" 추가 -->
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
