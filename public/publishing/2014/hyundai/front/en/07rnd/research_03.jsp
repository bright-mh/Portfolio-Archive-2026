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
							<li class="w_05"><a href="/front/en/07rnd/research_02.jsp"><span>Structure/Material</span></a></li>
							<li class="w_05 on"><a href="/front/en/07rnd/research_03.jsp"><span>City/Eco-friendly</span></a></li>
							<li class="w_05"><a href="/front/en/07rnd/research_04.jsp"><span><span>Civil Engineering / Mechanical &amp; Electrical Engineering / Fire Prevention</span></a></li>
						</ul>
					</div>

					<div class="tech_group">
						<img src="/front/en/images/07rnd/research03_01.gif" alt="" class="display_effect" />
						<div class="blind">
							<dl>
								<dt>Noise and vibration reduction method</dt>
								<dd>On-site performance evaluation of floor impact sound</dd>
								<dd>Property test on Sound Insulating material</dd>
								<dd>The evaluation of Sound-insulation performance on party wall</dd>
								<dd>The evaluation of slab vibration</dd>
							</dl>
							<dl>
								<dt>Technology on indoor air quality management</dt>
								<dd>Analysis and evaluation on indoor air quality</dd>
								<dd>Evaluation and application technology on eco-friendly materials</dd>
								<dd>The evaluation of Ventilation performance</dd>
								<dd>Measurement of HCHO(Formaldehyde)</dd>
								<dd>Measurement of TVOCS (Total Volatile Organic Compounds)</dd>
							</dl>
							<dl>
								<dt>Prevention technology on the Dew condensation</dt>
								<dd>Performance analysis and test on doors, windows, and heat insulating materials</dd>
								<dd>Indoor thermal environment and airflow analysis</dd>
								<dd>Analysis on conditions of Dew condensation occurrence</dd>
								<dd>Evaluation and method development of Airtightness</dd>
							</dl>
						</div>

						<img src="/front/en/images/07rnd/research03_02.gif" alt="" />
						<div class="blind">
							<dl>
								<dt>Zero-energy housing technology</dt>
								<dd>Development for Concrete Placing with outside insulation method</dd>
								<dd>Development of High insulation PC-wall System</dd>
								<dd>Field application technology of solar heat, Solar cell, wind power and fuel cell</dd>
								<dd>Active Sun Lighting</dd>
							</dl>
							<dl>
								<dt>Low-carbon Urban Planning</dt>
								<dd>Development for Low-carbon Urban Planning System</dd>
								<dd>for Low-carbon apartment complex implementation technology</dd>
								<dd>LCCO2 evaluation on apartment complex</dd>
							</dl>
							<dl>
								<dt>GREEN BIM Technology</dt>
								<dd>Sunlight environment simulation on the complex</dd>
								<dd>Analysis on natural lighting effect</dd>
								<dd>Simulation of the view from windows</dd>
								<dd>Internal and external wind environment simulation on the complex</dd>
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
