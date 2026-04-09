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
			<jsp:include page="/front/inc/lnb_02business.jsp"></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg1">
					<ul>
						<li><a href="/front/index.jsp"><span class="ico">HOME</span></a></li>
						<li class="gt"><a href="/front/02business/housing_info.jsp">사업분야</a></li>
						<li class="gt last"><a href="/front/02business/housing_info.jsp">주택사업</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>주택사업</h1>
					<div class="tab tab2">
						<ul>
							<li class="on"><a href="/front/02business/housing_info.jsp"><span>개요</span></a></li>
							<li><a href="/front/02business/housing_biz.jsp"><span>주요실적</span></a></li>
						</ul>
					</div>

					<h2 class="hidden">개요</h2>
					<div class="business">
						<div class="img_box change">
							<img src="/front/images/02business/img_housing.jpg" alt="Leading developer 수원아이파크시티" />
						</div>

						<div class="hr"></div>

						<div class="txt_box mb0">
							<p class="dark">당신을 최고의 자부심과 프리미엄의 주인공으로</p>
							<p class="light">국내 주택문화와 새로운 변혁을 일으키며 신주거문화를 창달해 온 현대산업개발, 과학적인 설계와 차별화된 인테리어, 트렌드를 만들어가는 리딩 디벨로퍼로써, 당신의 가치를 한 단계 업그레이드 시켜드립니다.</p>
							<p class="light mb0">주택은 보금자리, 그 이상의 의미를 함축하고 있습니다. 안식과 휴식의 공간이며, 내일을 위한 무한에너지의 충전소이며, 미래를 준비하는 꿈의구장입니다. 30년 동안 33만 가구의 아파트를 공급하며 국민의 주거생활 안정과 국내 주거문화 발전을 선도해온 현대산업개발의 역사는 우리나라 주택문화의 역사 그 자체입니다. 현대산업개발은 보다 안락하고 건강하며 삶의 질을 한 단계 발전시키는 생활공간, 사람과 사람을 이어주는 대화와 소통의 공간, 내일의 꿈이 영글어가는 장소로서의 공간 창조에 더 많은 정성과 노력을 기울이고 있습니다.</p>
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