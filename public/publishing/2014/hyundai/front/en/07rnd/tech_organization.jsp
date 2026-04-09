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
			<p>Pages that are optimized for PC</p>
		</div>
		<div class="wrap">
			<p class="blind">TECHNOLOGICAL INNOVATION</p>
			<!-- lnb s -->
			<jsp:include page="/front/en/inc/lnb_07rnd.jsp"></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg7">
					<ul>
						<li><a href="/front/en/index.jsp"><span class="ico"></span></a></li>
						<li class="gt"><a href="#none">INNOVATION</a></li>
						<li class="gt last"><a href="#none">R&amp;D CENTER</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>R&amp;D Center</h1>
					<div class="tab tab3">
						<ul>
							<li class="w_long"><a href="/front/en/07rnd/tech_info.jsp"><span>Introduction</span></a></li>
							<li class="w_long"><a href="/front/en/07rnd/tech_history.jsp"><span>History</span></a></li>
							<li class="w_long on"><a href="/front/en/07rnd/tech_organization.jsp"><span>Organizational Chart</span></a></li>
						</ul>
					</div>

					<div class="tech_group">
						<!-- <h2 class="title">연구소 조직도</h2> -->
						<img src="/front/en/images/07rnd/tech02.gif" alt="" class="mt5" />
						<div class="blind">
							<p>R&amp;D CENTER</p>
							<ul>
								<li>Strategic Planning Part
									<ul>
										<li>- Planning core products for future and valuable technology</li>
										<li>- Strategic establishment in leading advanced housing culture</li>
									</ul>
								</li>
								<li>Generic Technology Part
									<ul>
										<li>Development of Construction new technology, new materials and new method - Acquirement of the technology for cost reduction and time-shortening for construction schedule</li>
										<li>Technology for structure analysis, noise and vibration</li>
										<li>Smart Grid and Health care technology</li>
										<li>Renewable energy planning and convergence technology</li>
									</ul>
								</li>
								<li>Future Technology Part
									<ul>
										<li>Development for eco-friendly technology and evaluation for energy performance, Acquirement for Low carbon and energy-reduction technology</li>
										<li>Technology to improve indoor air quality and environment</li>
										<li>Counterplans for government policy and regulations</li>
										<li>Technical support for planning and product development</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="bt_top">
					<a href="#layoutWrap"><img src="/images/sub/bt_top.png" alt="Top of page"/></a>
				</div>
			</div>
			<!-- container e -->

		</div>
	</div>

<jsp:include page="/front/en/inc/footer.jsp"></jsp:include>
</body>
</html>
