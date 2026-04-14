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
						<li class="gt"><a href="#none">SUSTAINBILITY</a></li>
						<li class="gt last"><a href="#none">ENVIRONMENTAL MANAGEMENT</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>Environmental Management</h1>
					<div class="tab tab2 tab_sustain">
						<ul>
							<li><a href="/front/en/08sustainability/quality_manage02_01.jsp"><span>Operating System</span></a></li>
							<li class="on"><a href="/front/en/08sustainability/quality_manage02_02.jsp"><span>Eco-friendly Construction</span></a></li>
						</ul>
					</div>
					<div class="manageV">
						<div class="box envi">
							<h2>Environmental Management System Certification</h2>
							<p class="explain">Hyundai Development Company continuously trains and educates in order to achieve environmental management policy and target established for continuous development of the company. International Standard of ISO 14001 Certification is acquired in order to manage and maintain systematic environmental management.</p>
							<div>
								<ul>
									<li>
										<img src="/front/en/images/08sustainability/img_auth01.gif" alt="certificate of approval">
										<span><a href="#" onclick="window.open('/front/certification_kor.jsp','certification_kor','resizable=yes scrollbars=yes width=553 height=790')"><img src="/front/images/btn/btn_view.gif" alt="Click to enlarge" title="Opens a new window"></a></span>
									</li>
									<li>
										<img src="/front/en/images/08sustainability/img_auth02.gif" alt="certificate of approval">
										<span><a href="#" onclick="window.open('/front/certification_eng.jsp','certification_eng','resizable=yes scrollbars=yes width=553 height=790')"><img src="/front/images/btn/btn_view.gif" alt="Click to enlarge" title="Opens a new window"></a></span>
									</li>
								</ul>
								<p>&lt;ISO 14001 Certification&gt;</p>
							</div>
						</div>	
						<div class="box envi3">
							<h2>Asbestos Disposal</h2>
							<img src="/front/en/images/08sustainability/img_manageE03.gif" alt="" class="mt22 mb9" />
							<div class="blind">
								<ol>
									<li>01 Pre-investigation on Asbestos : Investigate asbestos through designated asbestos investigation agency and Record and Preserve the result.</li>
									<li>02 Decomposition of Asbestos : Decomposition operation by decomposition company registered on Ministry of Labor</li>
									<li>03 Management of Asbestos Wastes : Legal disposal through ALLBARO system</li>
									<li>04 Standard Compliance on Asbestos Concentration : Relevant work areas’ asbestos concentration in the air should be less than the stand (0.01 unit/CM2), and the documentary evidence must be submitted to local labor office without any delay.</li>
								</ol>
							</div>
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
