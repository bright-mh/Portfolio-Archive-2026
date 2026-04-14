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
			<p class="blind">BUSINESS INFORMATION</p>
			<!-- lnb s -->
			<jsp:include page="/front/en/inc/lnb_02business.jsp"></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg1">
					<ul>
						<li><a href="/front/en/index.jsp"><span class="ico"></span></a></li>
						<li class="gt"><a href="#none">BUSINESS</a></li>
						<li class="gt last"><a href="#none">PLANT</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>PLANT</h1>
					<div class="tab tab2">
						<ul>
							<li class="on"><a href="#none"><span>SUMMARY</span></a></li>
							<li><a href="/front/en/02business/plant_biz.jsp?lang=en"><span>MAJOR PROJECT</span></a></li>
						</ul>
					</div>

					<div class="business">
						<h2 class="title pt0">A Key player in energy plants</h2>
						<p class="explain">Hyundai Development Company has been recognized not only in the urban development business but also in the energy plant business for its construction capacity. Demonstrates by Samcheonpo thermal power plant, a desulphurization facility at Hadong thermal power plant, and Icheon cogeneration plant. The company has also successfully made forays into overseas markets of nuclear plants. energy plants. and urban development, emerging as a next-generation leader in global energy plant and urban development.</p>

						<div class="img_box">
							<img src="/front/en/images/02business/img_plant01.jpg" alt="Samcheonpo plant - Korea's first mega bituminous coal-fired power plant" />
						</div>

						<div class="hr"></div>

						<div class="txt_box">
							<p class="dark mb0">Samcheonpo plant - Korea's first mega bituminous coal-fired power plant</p>
							<p class="light mt14">Designed to supply electricity to industrial complexes in Changwon and Yeocheon and located in Goseong. Kyungnam, the first and second unit of Samcheonpo thermal power plant, also required construction of docking. facilities for large vessels that carry imported fuel as well as 40km, long intake pipelines. Hyundai Development Company established a green power plant that eliminates coal particles with low fuel cost. The most advanced dust collectors, and a 200m-high chimney stack, the tallest in Korea, which guides ocean-going vessels into the port. The third to sixth units of the plant are regarded as the most successful plant constructions through adopting the latest construction methods such as Cast-In Place Pile (CIP) and Caisson method.</p>
						</div>

						<div class="img_box">
							<img src="/front/en/images/02business/img_plant02.jpg" alt="Desulphurization facility at Hadong thermal power plant" />
						</div>

						<div class="hr"></div>

						<div class="txt_box">
							<p class="dark mb0">Desulphurization facility at Hadong thermal power plant - The first in Korea</p>
							<p class="light mt14">Desulphurization facility is to minimize sulfur dioxide gas emitted from industrial complexes. With technical agreements with US Bechtel, the globally renowned environmentally friendly construction company, we have completed. Desulphurization facilities at Hadong thermal power plant frome the first to the sixth unit covering design, material supply, and construction in 2001. The turn-key based contract was the first Desulphurization facility construction in Korea and the largest ever in Korea by gas treatment volume. With its continuous focus on a green environment, Hyundai Development Company set a new standard in waste treatment and workplace safety to win the Top Quality Award from the Korean Electric Power Corporation</p>
						</div>

						<div class="img_box">
							<img src="/front/en/images/02business/img_plant03.jpg" alt="Resource recovery facility in Nowon, Seoul - Eco -friendly ewnewable energy plant" />
						</div>

						<div class="hr"></div>

						<div class="txt_box mb0">
							<p class="dark mb0">Resource recovery facility in Nowon, Seoul - Eco -friendly renewable energy plant</p>
							<p class="light mt14 mb0">The resource recovery facility in Nowon, Seoul was completed in January 1997 in order to use soild waste in generating electricity and providing heating to the surrounding areas, The plant with capacity of 800 tons per day is equipped with state-of-the-art facilities such as an electric precipitator, a wet scrubber system and a selective catalytic reduction system (removing dioxin) as well as swimming pool, a fitness center and other community facilities. Power generated at the facility is supplied to distrtict heating corporations and Korea Power Exchange.</p>
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
