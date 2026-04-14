<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
	<jsp:include page="/front/inc/top.jsp"></jsp:include>
</head>
<body class="main">
<jsp:include page="/front/inc/head.jsp"></jsp:include>

	<div class="article alert" id="content">
		<div class="gray">
			<p>PC에 최적화된 페이지 입니다.</p>
		</div>
		<div class="wrap">
			<p class="blind">SUSTAINABILITY MANAGEMENT / 고객의 행복을 위해 사회적 역할과 책임을 다하고 지속가능한 성장을 추구하겠습니다.</p>

			<!-- lnb s -->
			<jsp:include page="/front/inc/lnb_04sustainability.jsp"></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg3">
					<ul>
						<li><a href="/front/index.jsp"><span class="ico">HOME</span></a></li>
						<li class="gt"><a href="#none">지속가능경영</a></li>
						<li class="gt last"><a href="#none">환경경영</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>환경경영</h1>
					<div class="tab tab3">
						<ul>
							<li><a href="/front/04sustainability/quality_manage02_01.jsp"><span>환경경영</span></a></li>
							<li class="w_long"><a href="/front/04sustainability/quality_manage02_02.jsp"><span>PROCESS &amp; ACTIVITIES</span></a></li>
							<li class="on"><a href="/front/04sustainability/quality_manage02_03.jsp"><span>석면</span></a></li>
						</ul>
					</div>

					<div class="manage03">
						<img src="/front/images/04sustainability/img_manage02.jpg" alt="현대산업개발 윤리관" class="img"/>
						<dl class="mg50">
							<dt class="mg0">석면 사전조사</dt>
							<dd>일정규모 이상의 건축물 또는 설비를 철거, 해체 하고자 하려는 자는 지정 석면조사기관을 통해 석면조사를 한 후 그 결과를 기록, 보존 <br/>(※ 석면조사 의무주체는 건축물의 소유주, 관리자, 임차인, 사업시행자, 재개발, 재건축조합 등이 이에 해당)</dd>
						</dl>
						<dl class="mg50">
							<dt class="mg0">석면 해체</dt>
							<dd>노동부에 등록된 전문 해체회사에 의한 해체 작업 실시.</dd>
						</dl>
						<dl class="mg50">
							<dt class="mg0">석면 폐기물 관리</dt>
							<dd>올바로 시스템을 통하여 적법처리.</dd>
						</dl>
						<dl class="mg50">
							<dt class="mg0">석면 농도 기준 준수</dt>
							<dd>석면해체, 제거회사에서 작업이 완료된 후 해당 작업장의 공기 중 석면농도를 기준 (0.01개/㎠) 이하가 되도록 하여야 하며 그 증빙자료를 지체없이 관할 지방노동관서에 제출</dd>
						</dl>
					</div>
				</div>

				<div class="bt_top">
					<a href="#layoutWrap"><img src="/front/images/sub/bt_top.png" alt="상단으로"/></a>
				</div>
			</div>
			<!-- container e -->

		</div>
	</div>

<jsp:include page="/front/inc/footer.jsp"></jsp:include>
</body>
</html>