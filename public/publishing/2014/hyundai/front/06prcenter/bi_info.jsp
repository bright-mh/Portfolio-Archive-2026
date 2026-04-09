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
						<li class="gt last"><a href="/front/06prcenter/ci_info.jsp">CI/BI센터</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>CI/BI센터</h1>
					<div class="tab tab2">
						<ul>
							<li><a href="/front/06prcenter/ci_info.jsp"><span>CI</span></a></li>
							<li class="on"><a href="/front/06prcenter/bi_info.jsp"><span>BI</span></a></li>
						</ul>
					</div>

					<h2 class="hidden">BI</h2>
					<div class="ci">
						<h3>Standard Symbol</h3>
						<p>현대산업개발의 대표 브랜드 아이파크의 BI를 소개합니다.</p>
						<div class="bt">
							<ul>
								<li><a href="/front/data_file/BI_jpg.zip">JPG 다운로드</a></li>
								<li><a href="/front/data_file/BI_ai.zip">AI 다운로드</a></li>
							</ul>
						</div>
						<img src="/front/images/06prcenter/bi01.gif" alt=""/>
						<div class="hidden">
							이미지1. IPARK
							이미지2. &lt;좌우조합&gt; : IPARK INNOVATE
							이미지3. &lt;상하조합&gt; : IPARK INNOVATE
							이미지4. HDC RED - PANTONE : 485C / C00 M95 Y100 K00 / R238 G50 B36
							이미지5. HDC GRAY - PANTONE : 425C / C30 M25 Y20 K70 / R76 G81 B84
						</div>

						<h4 class="title">Color Variation</h4>
						<img src="/front/images/06prcenter/bi02.gif" alt=""/>
						<div class="hidden">
							<ul>
								<li>&lt;Full colour&gt; : IPARK</li>
								<li>&lt;Single colour&gt; : IPARK</li>
								<li>&lt;Silver&gt; : IPARK</li>
								<li>&lt;Grayscale&gt; : IPARK</li>
							</ul>
						</div>

						<h4 class="title">Symbol 변천사</h4>
						<img src="/front/images/06prcenter/bi03.gif" alt=""/>
						<div class="hidden">
							<ul>
								<li>&lt;1976&gt; : 現代아파트</li>
								<li>&lt;2000&gt; : 현대I아파트</li>
								<li>&lt;2001&gt; : I'PARK</li>
								<li>&lt;2004&gt; : I'PARK</li>
								<li>&lt;2006&gt; : I'PARK</li>
								<li>&lt;2012&gt; : IPARK</li>
							</ul>
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