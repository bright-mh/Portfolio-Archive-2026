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
						<li class="gt last"><a href="#none">SAFETY MANAGEMENT</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>Safety Management</h1>
					<div class="tab tab3">
						<ul>
							<li class="on"><a href="/front/en/08sustainability/quality_manage03_01.jsp"><span>Policy</span></a></li>
							<li><a href="/front/en/08sustainability/quality_manage03_02.jsp"><span>Systems</span></a></li>
							<li><a href="/front/en/08sustainability/quality_manage03_03.jsp"><span>Activities</span></a></li>
						</ul>
					</div>

					<div class="manageV">
						<div class="box envi4">
							<h2>Safety Policy</h2>
							<p class="explain5">All of executives, staffs and CEO of Hyundai Development Company will be fully informed with requirements of safety management manual to conduct safe activities and more effective safety management system.</p>
							<div class="explain6">
								<ul>
									<li class="title">Hyundai Development Company is leading Construction Company of Korea with endless innovation and change for the improvement on the quality of life. In order to fulfill social and national responsibility as a leading firm, our company sets our safety policy as “Settlement of technical safety management and customer respect through emotional communication of corporate culture,” and we will continuously practice following details to establish safety and health management system.</li>
								<ul>
								<ol>
									<li>All executives, staffs and cooperating company of HDC will fulfill and practice hazard evaluation and countermeasure establishment in order to establish safety and health management system followed by KOSHA / OHSAS18001 standard.</li>
									<li>All losses should be minimized through fulfilling regulations and policies, and company’s mission and responsibility must be contributed towards the society and the nation.</li>
									<li>Mutual communication between employees and cooperating companies should be implemented for the identification of potential risk factor and must create pleasant work environment to practice life respect and customer contentment.</li>
								</ol>
							</div>
							<img src="/front/en/images/08sustainability/img_safety.gif" alt="">
							<div class="blind">
								<p>Safety Objective : Hazard rate below 0.10</p>
								<p>Settlement of management for technical safety and customer respect through corporate culture of emotional communication</p>
								<ul>
									<li>Conduct safety activities</li>
									<li>Maintain effective safety management system</li>
								</ul>
							</div>
						</div>	
						<div class="box envi5">
							<h2>Certification of OHSMS (Occupational health and safety management system)</h2>
							<br>
							<div>
								<ul>
									<li>
										<img src="/front/en/images/08sustainability/img_auth03.gif" alt="certificate for KOSHA 18001">
										<span><a href="#" onclick="window.open('/front/safe_kor.jsp', 'kosha_18001_kor','resizable=yes scrollbars=yes width=408 height=576')"><img src="/front/images/btn/btn_view.gif" alt="Click to enlarge" title="Opens a new window"></a></span>
									</li>
									<li>
										<img src="/front/en/images/08sustainability/img_auth04.gif" alt="certificate for KOSHA 18001">
										<span><a href="#" onclick="window.open('/front/safe_eng.jsp', 'kosha_18001_eng','resizable=yes scrollbars=yes width=408 height=576')"><img src="/front/images/btn/btn_view.gif" alt="Click to enlarge" title="Opens a new window"></a></span>
									</li>
									<li class="last">
										<img src="/front/en/images/08sustainability/img_auth05.gif" alt="OHSAS 18001 Certification">
										<span><a href="#" onclick="window.open('/front/safe_ohsas.jsp', 'ohsas_18001','resizable=yes scrollbars=yes width=408 height=576')"><img src="/front/images/btn/btn_view.gif" alt="Click to enlarge" title="Opens a new window"></a></span>
									</li>
								</ul>
								<p class="first">&lt;KOSHA 18001 Certification&gt;</p>
								<p>&lt;OHSAS 18001 Certification&gt;</p>
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
