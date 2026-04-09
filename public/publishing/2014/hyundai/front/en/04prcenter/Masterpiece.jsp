<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="ko">
<head>
	<jsp:include page="/front/en/inc/top.jsp"></jsp:include>
</head>
<body class="main">
	<jsp:include page="/front/en/inc/head.jsp"></jsp:include>
	<div class="article alert" id="content">
		<div class="gray">
			<p>PC에 최적화된 페이지 입니다.</p>
		</div>
		<div class="wrap">
			<p class="blind">CYBER PR CENTER</p>
			<!-- lnb s -->
			<jsp:include page="/front/en/inc/lnb_04prcenter.jsp"></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg3">
					<ul>
						<li><a href="/front/en/index.jsp"><span class="ico"></span></a></li>
						<li class="gt"><a href="#none">PR CENTER</a></li>
						<li class="gt last"><a href="#none">MASTERPIECE</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1 class="pb14">MASTERPIECE</h1>

					<div class="concert">
						<div class="print">
							<h2 class="type01">HDC MASTERPIECE</h2>
							<div class="left">
								<a href="/front/en/data_file/hdc masterpiece_eng.pdf" target="blank" title="새 창 열림"><img src="/front/images/06prcenter/mp.gif" alt="HDC MASTERPIECE"/></a>
								<div class="bt2">
									<ul>
										<li class="mp"><a href="/front/en/data_file/hdc masterpiece_eng.pdf" target="blank" title="새 창 열림">Master piece 2012~2013 Download</a></li>
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
					<a href="#layoutWrap"><img src="/front/en/images/sub/bt_top.png" alt="Top of page"/></a>
				</div>
			</div>
			<!-- container e -->

		</div>
	</div>

<jsp:include page="/front/en/inc/footer.jsp"></jsp:include>
</body>
</html>
