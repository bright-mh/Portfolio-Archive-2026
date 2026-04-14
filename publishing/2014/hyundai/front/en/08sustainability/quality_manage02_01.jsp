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
			<p class="blind">SUSTAINABILITY MANAGEMENT</p>
			<!-- lnb s -->
			<jsp:include page="/front/en/inc/lnb_08sustainability.jsp"></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg8">
					<ul>
						<li><a href="/front/en/index.jsp"><span class="ico"></span></a></li>
						<li class="gt"><a href="#none">SUSTAINABILITY</a></li>
						<li class="gt last"><a href="#none">ENVIRONMENTAL MANAGEMENT</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>Environmental Management</h1>
					<div class="tab tab2 tab_sustain">
						<ul>
							<li class="on"><a href="/front/en/08sustainability/quality_manage02_01.jsp"><span>Operating System</span></a></li>
							<li><a href="/front/en/08sustainability/quality_manage02_02.jsp"><span>Eco-friendly Construction</span></a></li>
						</ul>
					</div>
					<div class="manageV">
						<div class="box envi">
							<h2>Procedures</h2>
							<p class="explain">Hyundai Development Company cautiously monitors eco-friendly result evaluation in all business sectors in order to ensure the practice of green management.</p>
							<img src="/front/en/images/08sustainability/img_manageE.gif" alt="">
							<div class="blind">
								<p>Environmental Management Process</p>
								<dl>
									<dt>01 Establishment of Environmental Policy and Target</dt>
									<dd>-> P : Establishment of Environmental Policy and Target, Identify Environmental Aspect -></dd>
									<dt>02 Identify Environmental Aspect and Regulations</dt>
									<dd>-> D : Educate and Train, Environmental Management and Document Management -></dd>
									<dt>03 Environmental Management</dt>
									<dd>-> C : Monitoring &amp; Result Evaluation, Internal Inspection NCR -></dd>
									<dt>04 Inspection &amp; Correction</dt>
									<dd>-> A : Executive Review -></dd>
									<dt>05 Executive Review</dt>
									<dd>-> circular -></dd>
								</dl>
							</div>
						</div>	
						<div class="box envi2">
							<h2>Establishment of environmental policy and target</h2>
							<p class="explain mt4">Reflect operational details of management and construction wastes recycling in assessment of cooperating companies to ensure environmental management.</p>
							<img src="/front/en/images/08sustainability/img_manageE02.gif" alt="">
							<div class="blind">
								<dl>
									<dt>Environmental Policy</dt>
									<dd>Minimize environmental pollution beyond regulation</dd>
									<dd>Develop technology and related business for environmental preservation</dd>
									<dd>Minimize pollutants and reduce calorific value of waster</dd>
								</dl>
								<dl>
									<dt>Environmental Target</dt>
									<dd>Recycle waste</dd>
									<dd>Regulate greenhouse gas</dd>
									<dd>Reduce construction waste</dd>
								</dl>
							</div>
						</div>
						<div class="box">
							<h2>Construction Site Management Inspection</h2>
							<p class="explain mt5 mb9">Evaluate and inspect safety environment management status of each construction site every quarter.</p>
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
