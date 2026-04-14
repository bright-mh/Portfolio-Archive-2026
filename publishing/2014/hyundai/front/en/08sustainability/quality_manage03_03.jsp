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
							<li><a href="/front/en/08sustainability/quality_manage03_01.jsp"><span>Policy</span></a></li>
							<li><a href="/front/en/08sustainability/quality_manage03_02.jsp"><span>Systems</span></a></li>
							<li class="on"><a href="/front/en/08sustainability/quality_manage03_03.jsp"><span>Activities</span></a></li>
						</ul>
					</div>
					<div class="manageV">
						<div class="box mb9">
							<h2>Practice! CLEAN 5</h2>
							<p class="explain">Hyundai Development Company is practicing special safety quality campaign of <span>'Practice! CLEAN 5'</span> starting with initial C representing the meaning of Cooperator.</p>
							<img src="/front/en/images/08sustainability/img_manage06.gif" alt="">
							<div class="blind">
								<p>All hazard can be prevented</p>
								<dl>
									<dt>C : Cooperator</dt>
									<dd>Participation of cooperating companies : Occupational health and safety management system, Effective management</dd>
									<dt>L : Law</dt>
									<dd>Compliance of safety procedures : Reinforcement of management criteria for workers</dd>
									<dt>E : Equipment</dt>
									<dd>Prepare equipment management thoroughly : Reinforcement of equipment operation procedures and standards</dd>
									<dt>A : Arrangement</dt>
									<dd>Arrangement of work place : Designate and operate the day of arrangement for twice a month</dd>
									<dt>N : No-risk</dt>
									<dd>Eliminate risk element : Vitalization of sharing accident incident from mistake</dd>
								</dl>
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
