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
						<li class="gt last"><a href="/front/06prcenter/Masterpiece.jsp">마스터피스</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1 class="pb14">마스터피스</h1>

					<div class="concert">
						<div class="print">
							<h2>HDC MASTERPIECE</h2>
							<p class="explain02">국내에서 처음 선보이는 포트폴리오북 형태의 준공 프로젝트 소개서입니다.</p>
							<div class="left">
								<a href="https://www.hyundai-dvp.com/kr/cy/data/2012_13_hdc_masterpiece.pdf" target="blank" title="새 창 열림"><img src="/front/images/06prcenter/mp.gif" alt="HDC MASTERPIECE"/></a>
								<div class="bt2">
									<ul>
										<li class="mp"><a href="/front/data_file/2012_13_hdc_masterpiece.pdf" target="blank" title="새 창 열림">Master piece 2012~2013 Download</a></li>
									</ul>
								</div>
							</div>
							<div class="right effect">
								<div class="hr"></div>
								<h2>2012~2013</h2>
								<ol>
									<li>p.02~08 Consistent Value of HDC</li>
									<li>p.12~54 2012-2013 Portfolio</li>
									<li>p.56~66 Sustainable Practice of HDC</li>
								</ol>
								<img src="/front/images/06prcenter/qr.gif" alt="qr코드" class="qr"/>
								<span>&lt;Ipad App&gt;</span>
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