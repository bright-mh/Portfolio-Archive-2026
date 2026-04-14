<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
	<jsp:include page="/front/inc/top.jsp"></jsp:include>
</head>
<body class="main">
<jsp:include page="/front/inc/head.jsp"></jsp:include>

	<div class="article" id="content">
		<div class="wrap">
			<p class="blind">BUSINESS INFORMATION / 현대산업개발은 새로운 공간과 문화 제안을 통해 삶의 가치를 높이고 생활을 더욱 풍요롭게 만듭니다.</p>

			<!-- lnb s -->
			<jsp:include page="/front/inc/lnb_02business.jsp" ></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg1">
					<ul>
						<li><a href="/front/index.jsp"><span class="ico">HOME</span></a></li>
						<li class="gt"><a href="/front/02business/housing_info.jsp">사업분야</a></li>
						<li class="gt last"><a href="/front/02business/civil_info.jsp">토목사업</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>토목사업</h1>
					<div class="tab tab2">
						<ul>
							<li class="on"><a href="/front/02business/civil_info.jsp"><span>개요</span></a></li>
							<li><a href="/front/02business/civil_biz.jsp?grp_cd=1"><span>주요실적</span></a></li>
						</ul>
					</div>

					<h2 class="hidden">개요</h2>
					<div class="business">
						<div class="img_box change">
							<img src="/front/images/02business/img_civil.jpg" alt="Project Designer 서울-춘천간 고속도로 민간투자사업" />
						</div>

						<div class="hr"></div>

						<div class="txt_box mb0">
							<p class="dark">대한민국의 지도를 새롭게 그려나가는 이노베이터</p>
							<p class="light">현대산업개발은 효율적인 국토발전과 국민의 편익을 도모하기 위해 다양한 토목사업을 수행하였으며 토목분야의 블루오션이 되어 척박한 땅을 옥토로 바꾸어 인간의 삶을 더욱 풍요롭게 하고 있습니다.</p>
							<p class="light mb0">토목은 자연을 상대로 새로운 공간을 만들어내는, 그야말로 무에서 유를 창조하는 일입니다. 또한 인간과 자연이 함께 살아가는 방법을 모색하는 길입니다. 주택의 최강자에서 종합건설업체로 거듭난 현대산업개발은 효율적인 국토발전과 국민의 편익을 도모하기 위해 다양한 토목사업을 수행하여 왔으며 인간중심, 친환경 건설을 실현하고자 노력하여 왔습니다. 특히 SOC부문에서 선전하며 단순 시공에서 벗어나 개발과 기획, 시공 후 관리와 운영까지 전담하는 프로젝트 디자이너의 역량을 십분 발휘, 새로운 가치를 창출해내는 토목분야의 블루오션이 되어 기업의 미래성장을 견인하고 있습니다.</p>
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