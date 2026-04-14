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
						<li class="gt last"><a href="/front/02business/build_info.jsp">건축사업</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>건축사업</h1>
					<div class="tab tab2">
						<ul>
							<li class="on"><a href="/front/02business/build_info.jsp"><span>개요</span></a></li>
							<li><a href="/front/02business/build_biz.jsp?grp_cd=1"><span>주요실적</span></a></li>
						</ul>
					</div>

					<h2 class="hidden">개요</h2>
					<div class="business">
						<div class="img_box change">
							<img src="/front/images/02business/img_build.jpg" alt="Space Builder 파크하얏트부산" />
						</div>

						<div class="hr"></div>

						<div class="txt_box mb0">
							<p class="dark">도시 공간을 새롭게 창조하는 공간 크리에이터</p>
							<p class="light">현대산업개발은 지난 30년 동안, 건축의 기본 이념과 도시의 환경과 자연이 융합하는 항구한 풍경으로서의 건축을 추구하며 도시공간을 새롭게 창조하는 크리에이터로써의 새로운 건축문화를 선도하고 있습니다.</p>
							<p class="light mb0">건축은 인문(人文)이자 인문(人紋)입니다. 시간과 공간 위에 그려 넣는 인간의 무늬입니다. 사람과 사람 사이의 교류이며, 인간의 삶을 담고 있는 그릇입니다. 종합예술의 결정체이며, 시대를 뛰어넘어 살아있는 생명체입니다. 현대산업개발은 분명 다른 기업과는 차별화된 건축을 지향해 왔습니다. 현대산업개발은 지난 30년 동안 각종 다양한 용도의 건물을 건축하면서 도시와 환경과 자연이 어우러지고, 주변과 융합하는 풍경으로서의 건축을 추구해왔으며, 오늘도 도시공간을 새롭게 창조하는 크리에이터로서 새로운 도시풍경을 만들어나가고 있습니다.</p>
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