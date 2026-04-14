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
			<p class="blind">SUSTAINABILITY MANAGEMENT / 지속 가능한 행복을 추구하는 동시에 새로운 가치와 문화를 창조하는 일에 더욱 매진하겠습니다.</p>

			<!-- lnb s -->
			<jsp:include page="/front/inc/lnb_04sustainability.jsp"></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg3">
					<ul>
						<li><a href="/front/index.jsp"><span class="ico">HOME</span></a></li>
						<li class="gt"><a href="/front/04sustainability/quality_manage01.jsp">지속가능경영</a></li>
						<li class="gt last"><a href="/front/04sustainability/quality_manage02_01.jsp">환경경영</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>환경경영</h1>
					<div class="tab tab2">
						<ul>
							<li class="on"><a href="/front/04sustainability/quality_manage02_01.jsp"><span>운영체계</span></a></li>
							<li><a href="/front/04sustainability/quality_manage02_02.jsp"><span>친환경 시공</span></a></li>
						</ul>
					</div>

					<h2 class="hidden">운영체계</h2>
					<div class="manageV">
						<div class="box envi">
							<h3 class="title_style">절차</h3>
							<p class="explain">현대산업개발은 녹색경영의 실천을 위하여 사업 전 부문에서 친환경 성과측정을 지속적으로 모니터링하고 상시 관리하고 있습니다.</p>
							<img src="/front/images/04sustainability/img_manageE.gif" alt="">
							<div class="blind">
								<p>환경경영 Process</p>
								<p>01 환경방침, 환경목표 수립 &rarr; P : 환경방침, 환경목표 수립, 환경측면 파악 &rarr; 02 환경측면, 환경법규 파악 &rarr; D : 교육, 훈련, 환경관리, 문서관리 &rarr; 03 환경관리 &rarr; C : 모니터링 &amp; 성과관리, 내부검사 NCR &rarr; 04 점검 &amp; 시정조치 &rarr; A : 경영자 검토 &rarr;</p>
							</div>
						</div>
						<div class="box envi2">
							<h3 class="title_style">환경방침 및 환경목표 수립</h3>
							<p class="explain mt4">환경경영의 이행을 위하여 현장폐기물 관리와 분리수거 등 운영사항을 협력회사 평가에 반영</p>
							<img src="/front/images/04sustainability/img_manageE02.gif" alt="">
							<div class="hidden">
								<ul>
									<li>환경방침
										<ul>
											<li>환경오염을 법규이상으로 최소화</li>
											<li>환경보존을 위한 기술개발 및 관련 사업의 개발</li>
											<li>오염물질 배출 최소화 및 폐기물 발열량 감축</li>
										</ul>
									</li>
									<li>환경목표
										<ul>
											<li>폐기물 분리수거</li>
											<li>온실가스 사용규제</li>
											<li>현장 폐기물 감량화</li>
										</ul>
									</li>
								</ul>
							</div>
						</div>
						<div class="box">
							<h3 class="title_style">건설현장 현장관리 점검평가</h3>
							<p class="explain mt5 mb9">건설현장 단위로 분기별 안전환경관리 상태에 대한 점검 및 평가실시</p>
						</div>
					</div>
				</div>
			<!-- container e -->
				<div class="bt_top">
					<a href="#layoutWrap"><img src="/front/images/sub/bt_top.png" alt="상단으로"></a>
				</div>
			</div>
		</div>
	</div>

<jsp:include page="/front/inc/footer.jsp"></jsp:include>
</body>
</html>