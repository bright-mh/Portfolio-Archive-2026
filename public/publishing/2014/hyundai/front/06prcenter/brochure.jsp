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
			<p class="blind">CYBER PR CENTER / 현대산업개발은 창의적이고 혁신적인 기술력과 경험을 바탕으로 가치 창조적인 공간을 건설하고 있습니다.</p>

			<!-- lnb s -->
			<jsp:include page="/front/inc/lnb_06prcenter.jsp"></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg5">
					<ul>
						<li><a href="/front/index.jsp"><span class="ico">HOME</span></a></li>
						<li class="gt"><a href="/front/06prcenter/news_list.jsp">홍보센터</a></li>
						<li class="gt last"><a href="/front/06prcenter/brochure.jsp">브로슈어</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1 class="pb20">브로슈어</h1>

					<div class="concert">
						<div class="print">
							<div class="left">
								<img src="/front/images/06prcenter/brochure.jpg" alt="LEADING DEVELOPER"/>
								<div class="bt2">
									<ul>
										<li><a href="http://www.hyundai-dvp.com/kr/cy/ko_brochure.pdf" target="blank" title="새 창 열림">국문 다운받기</a></li>
										<li><a href="http://www.hyundai-dvp.com/kr/cy/en_brochure.pdf" target="blank" title="새 창 열림">영문 다운받기</a></li>
									</ul>
								</div>
							</div>
							<div class="right">
								<div class="hr"></div>
								<h2>HDC Brochure Contents</h2>
								<ol>
									<li>01 INTRO</li>
									<li>02 CEO MESSAGE</li>
									<li>04 VISION 2016</li>
									<li>08 GLOBAL LEADING DEVELOPER</li>
									<li>16 HISTORY</li>
									<li>18 HOUSING &amp; DEVELOPER</li>
									<li>26 ARCHITECTURE</li>
									<li>34 CIVIL WORKS</li>
									<li>42 ENERGY PLANT &amp; OVERSEAS PROJECT</li>
									<li>50 ORGANIZED GROWTH</li>
									<li>52 PONY CHUNG FOUNDATION</li>
									<li>54 SOCIAL CONTRIBUTION</li>
									<li>56 AFFILIATED COMPANY</li>
								</ol>
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