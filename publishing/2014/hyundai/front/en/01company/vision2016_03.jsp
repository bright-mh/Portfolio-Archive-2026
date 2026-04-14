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
						<li class="gt last"><a href="#none">VISION</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>VISION</h1>
					<div class="tab tab4">
						<ul>
							<li><a href="/front/en/01company/vision2016_01.jsp"><span>Growth VISION</span></a></li>
							<li class="on"><a href="/front/en/01company/vision2016_03.jsp"><span>Strategy and VISION for new Business</span></a></li>
						</ul>
					</div>

					<div class="vision">
						<!-- 2014-07-04 class="title" 추가 -->
						<h2 class="title">Hyundai Development Company is</h2>
						<!-- //2014-07-04 class="title" 추가 -->
						<p>Committed to expanding business areas to enhance its status as a Global Leading Developer &amp; EPC Contractor not only in urban development but also plants, green energy, and resource development at home and abroad</p>

						<!-- 2014-07-04 h2태그에서 h3태그로 교체 -->
						<h3 class="title">VISION</h3>
						<!-- //2014-07-04 h2태그에서 h3태그로 교체 -->
						<p>Global Leading Developer &amp; EPC Contractor</p>
						<img src="/front/en/images/01company/vision03.gif" alt="Global Leading Developer &amp; EPC Contractor"/>
						<div class="blind">
							<p>Sophistication and expansion of domestic market &amp; Exploration and expansion of overseas market</p>
							<ol>
								<li>Urban Development : New City Development, Urban Redevelopment , Urban Rehabilitation</li>
								<li>Plant : Nuclear power Oil &amp; Gas, Chemical, Thermal power, Steel, and Cement</li>
								<li>Green Energy : Hydro, Tidal wave and Wind power Solar power, Fuel cell</li>
								<li>Overseas resource Development : Oil, Gas Food, Tree planting</li>
							</ol>
						</div>

						<h2>TO BE BIZ-MODEL</h2>
						<img src="/front/en/images/01company/vision04.gif" alt="TO BE BIZ-MODEL"/>
						<div class="blind">
							<ul>
								<li>Nuclear power plant Business</li>
								<li>Vertical integration Of  energy plant construction</li>
								<li>Business structure diversification and engineering capacity</li>
							</ul>
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
