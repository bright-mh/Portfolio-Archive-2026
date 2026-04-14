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
						<li class="gt last"><a href="#none">FIELD OF RESEARCH</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>Field of Research</h1>
					<div class="tab tab4">
						<ul>
							<li class="w_05"><a href="/front/en/07rnd/research_01.jsp"><span>Execution of construction</span></a></li>
							<li class="w_05 on"><a href="/front/en/07rnd/research_02.jsp"><span>Structure/Material</span></a></li>
							<li class="w_05"><a href="/front/en/07rnd/research_03.jsp"><span>City/Eco-friendly</span></a></li>
							<li class="w_05"><a href="/front/en/07rnd/research_04.jsp"><span><span>Civil Engineering / Mechanical &amp; Electrical Engineering / Fire Prevention</span></a></li>
						</ul>
					</div>

					<div class="tech_group">
						<img src="/front/en/images/07rnd/research02.gif" alt="" />
						<div class="blind">
							<dl>
								<dt>The complex system for high-rise buildings</dt>
								<dd>Measurement and analysis of column-shortening for high-rise buildings</dd>
								<dd>Development of Flat Plate Slab for Shear Reinforcement</dd>
								<dd>Detailed development on Shear wall and steel link beam connection</dd>
								<dd>Development on SRC link beam for ductile behavior of building</dd>
							</dl>
							<dl>
								<dt>Technology on green remodeling elements</dt>
								<dd>Development of floor system for acquisition of floor level</dd>
								<dd>Noise reduction method between floors</dd>
								<dd>SAP (Screw Anchor Pile) Method</dd>
							</dl>
							<dl>
								<dt>Development of High Strength fire resistance concrete</dt>
								<dd>Mix design of high strength fire resistance concrete</dd>
								<dd>Property evaluation on high strength fire resistance concrete</dd>
								<dd>Improvement technology on explosion prevention and fire resistance performance</dd>
							</dl>
							<dl>
								<dt>Development of eco-friendly concrete</dt>
								<dd>Concrete of carbon reduction using the mass of cementitious materials</dd>
								<dd>Support in mix design of low heat concrete for reduction of hydrated heat</dd>
								<dd>Support in site quality management of low heat concrete</dd>
							</dl>
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
