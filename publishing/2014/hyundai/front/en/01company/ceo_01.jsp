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
							<li class="on"><a href="/front/en/01company/ceo_01.jsp"><span>CHAIRMAN AND CEO’S GREETINGS</span></a></li>
							<li><a href="/front/en/01company/ceo_02.jsp"><span>PRESIDENT AND CEO’S GREETING</span></a></li>
						</ul>
					</div>

					<div class="img_box ceo">
						<img src="/front/en/images/01company/ceo01.jpg" alt="Chairman Mong-Gyu Chung" />
					</div>

					<div class="hr"></div>

					<div class="txt_box">
						<h2>“Hyundai Development has made significant contribution in the realization of a better quality of life”</h2>
						<p class="dark">Hyundai Development Company has led the housing culture of Korea with a spirit of challenge and creativity. We continue to endeavor to be the best real estate developer in the country.</p>
						<p class="light">Hyundai Development Company has built a solid foundation through value-oriented management solutions and continuous innovation. We make bold investments, even in hard times, to prepare for a better future, and have turned periods of crisis and hardship into great opportunities Based on innovative thinking, Hyundai Development Company has become a leading developer that designs wonderful spaces to reflect people’s changing lifestyles, and pursues a human oriented architectural culture, Based on the tradition, Hyundai Development Company is now becoming an internationally renowned developer with a solid reputation  for excellence in creativity and innovation.</p>
						<!-- 2014-07-04 class="mb0" 추가 -->
						<p class="light mb0">We will continue our efforts to be an innovative leader that enhances quality of life, fulfills the mission of a company to contribute to the society and the nation in which we are engaged–wherever that may be. In accordance with an ever changing trend of global construction, our Company strives to be more environmentally–friendly and human-oriented, The future of the Hyundai Development Company is that of Korea’s architectural culture.</p>
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
