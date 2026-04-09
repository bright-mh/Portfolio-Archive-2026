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
						<li class="gt last"><a href="/front/08customercenter/location.jsp">찾아오시는 길</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>찾아오시는 길</h1>

					<div class="custom_map">
						<img src="/front/images/08customer/img_map.png" alt="1호선 용산역과 연결된 HDC 아이파크몰 8,9층, 또는 4호선 신용산역에서 하차(3번 출구에서 직진 70m, 우회전 후 직진 160m)">
					</div>
					<ul class="custom_address">
						<li><em>주소</em>서울특별시 용산구 한강대로 23길 55 현대아이파크몰 8, 9층</li>
						<li><em>전화번호</em>02 - 2008 - 9114</li>
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