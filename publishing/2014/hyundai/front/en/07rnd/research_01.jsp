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
							<li class="w_05 on"><a href="/front/en/07rnd/research_01.jsp"><span>Execution of construction</span></a></li>
							<li class="w_05"><a href="/front/en/07rnd/research_02.jsp"><span>Structure/Material</span></a></li>
							<li class="w_05"><a href="/front/en/07rnd/research_03.jsp"><span>City/Eco-friendly</span></a></li>
							<li class="w_05"><a href="/front/en/07rnd/research_04.jsp"><span><span>Civil Engineering / Mechanical &amp; Electrical Engineering / Fire Prevention</span></a></li>
						</ul>
					</div>

					<div class="tech_group">
						<img src="/front/en/images/07rnd/research01.gif" alt="" />
						<div class="blind">
							<dl>
								<dt>Construction technology for high-rise buildings</dt>
								<dd>Research on method for Stack effect reduction</dd>
								<dd>Development of pre-fabricated rebar method</dd>
								<dd>Placement on concrete on foundation of high-rise buildings</dd>
								<dd>Lifting technology for high-rise buildings</dd>
							</dl>
							<dl>
								<dt>Complex Technology on reduction of construction schedule</dt>
								<dd>System Formwork</dd>
								<dd>Process control and effective site management</dd>
								<dd>Mix of materials for the revelation of early strength</dd>
								<dd>Development on elements of wet process technology</dd>
							</dl>
							<dl>
								<dt>Dry and fabrication method</dt>
								<dd>Long-span research through Pre-tension method</dd>
								<dd>Method using Precast Concrete for a stairway</dd>
								<dd>Envelope method using GFRC</dd>
							</dl>
							<dl>
								<dt>Development of interior and exterior materials for construction</dt>
								<dd>Insulation panel for construction</dd>
								<dd>Flexible light-weight wall</dd>
								<dd>Construction of large complex stones</dd>
								<dd>Development of one-touch ceiling construction method using engineering plastic</dd>
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
