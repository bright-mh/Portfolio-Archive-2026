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
			<p class="blind">CUSTOMER CENTER / 현대산업개발은 항상 고객의 소리에 귀 기울이고 있습니다. 고객님을 위해 신속하고 정확한 답변을 드리겠습니다.</p>

			<!-- lnb s -->
			<jsp:include page="/front/inc/lnb_08customercenter.jsp"></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg7">
					<ul>
						<li><a href="/front/index.jsp"><span class="ico">HOME</span></a></li>
						<li class="gt"><a href="/front/08customercenter/faq.jsp">고객센터</a></li>
						<li class="gt last"><a href="/front/08customercenter/csCenter.jsp">고객문의</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>고객문의</h1>

					<div class="custom_mn">
						<ul>
							<li class="mn1"><a href="https://www.i-park.com/customer/oneintro.jsp" target="_blank" title="새 창 열림"><i></i><strong>분양문의</strong> 분양, 입주, 현장 관련문의</a></li>
							<li class="mn2"><a href="https://as.i-park.com/cust/" target="_blank" title="새 창 열림"><i></i><strong>하자문의</strong> 아파트 하자보수 관련문의</a></li>
							<li class="mn3"><a href="/front/08customercenter/csCenter_02.jsp"><i></i><strong>일반문의</strong> 홈페이지 및 기타 관련문의</a></li>
							<li class="mn4"><a href="/front/08customercenter/csCenter_03.jsp"><i></i><strong>협력사문의</strong> 협력회사 모집 관련문의</a></li>
						</ul>
					</div>

					<h2 class="h2_tit">문의처</h2>
					<ul class="list_webinfo">
						<li>
							<span class="tit">영업지원팀<br>(분양 및 입주)</span>
							<span class="con"><a href="mailto:jjpark@hyundai-dvp.com">jjpark@hyundai-dvp.com</a></span>
						</li>
						<li class="bl">
							<span class="tit">QCS팀<br>(하자보수)</span>
							<span class="con"><a href="mailto:clarboy@hyundai-dvp.com">clarboy@hyundai-dvp.com</a></span>
						</li>
						<li>
							<span class="tit">HR 혁신팀<br>(채용정보)</span>
							<span class="con"><a href="mailto:swhong@hyundai-dvp.com">swhong@hyundai-dvp.com</a></span>
						</li>
						<li class="bl">
							<span class="tit">재정팀<br>(재무/주식)</span>
							<span class="con"><a href="mailto:shyoon@hyundai-dvp.com">shyoon@hyundai-dvp.com</a></span>
						</li>
						<li>
							<span class="tit">건축사업팀<br>(공사현장)</span>
							<span class="con"><a href="mailto:ibyang@hyundai-dvp.com">ibyang@hyundai-dvp.com </a></span>
						</li>
						<li class="bl">
							<span class="tit">토목지원팀<br>(공사현장)</span>
							<span class="con"><a href="mailto:jysong@hyundai-dvp.com">jysong@hyundai-dvp.com</a></span>
						</li>
						<li>
							<span class="tit">홍보마케팅팀<br>(광고/홍보)</span>
							<span class="con"><a href="mailto:hspr@hyundai-dvp.com">hspr@hyundai-dvp.com</a></span>
						</li>
						<li class="bl">
							<span class="tit">홍보마케팅팀<br>(홈페이지)</span>
							<span class="con"><a href="mailto:webinfo@hyundai-dvp.com">webinfo@hyundai-dvp.com</a></span>
						</li>
					</ul>
					

				</div>

				

				<div class="bt_top">
					<a href="#layoutWrap"><img src="/front/images/sub/bt_top.png" alt="상단으로"></a>
				</div>
			</div>
			<!-- container e -->

		</div>
	</div>

<jsp:include page="/front/inc/footer.jsp"></jsp:include>
</body>
</html>