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
							<li><a href="/front/04sustainability/quality_manage02_01.jsp"><span>운영체계</span></a></li>
							<li class="on"><a href="/front/04sustainability/quality_manage02_02.jsp"><span>친환경 시공</span></a></li>
						</ul>
					</div>

					<h2 class="hidden">친환경 시공</h2>
					<div class="manageV">
						<div class="box envi">
							<h3 class="title_style">환경경영시스템 인증</h3>
							<p class="explain">현대산업개발은 지속가능한 개발을 위하여 환경경영에 필요한 방침과 목표를 수립하여 이를 달성하기 위해 교육 및 훈련을 실시하고 있습니다. 보다 조직적으로 환경경영을 하기 위해 국제표준인 ISO 14001 인증을 획득하여 유지, 관리하고 있습니다.</p>
							<div>
								<ul>
									<li>
										<img src="/front/images/04sustainability/img_auth01.gif" alt="환경경영시스템인증서(국문)" />
										<span><a href="#" onclick="window.open('/front/certification_kor.jsp','certification_kor','resizable=yes scrollbars=yes width=553 height=790')" title="새 창 열림"><img src="/front/images/btn/btn_view.gif" alt="확대보기" /></a></span>
									</li>
									<li>
										<img src="/front/images/04sustainability/img_auth02.gif" alt="환경경영시스템인증서(영문)" />
										<span><a href="#" onclick="window.open('/front/certification_eng.jsp','certification_eng','resizable=yes scrollbars=yes width=553 height=790')" title="새 창 열림"><img src="/front/images/btn/btn_view.gif" alt="확대보기" /></a></span>
									</li>
								</ul>
								<p>&lt;ISO 14001 인증서&gt;</p>
							</div>
						</div>	
						<div class="box envi3">
							<h3 class="title_style">석면처리</h3>
							<img src="/front/images/04sustainability/img_manageE03.gif" alt="" class="mt22 mb9" />
							<div class="blind">
								<p>석면처리</p>
								<ol>
									<li>01 석면조사 : 지정석면조사기관을 통해 석면조사를 한 후, 그 결과를 기록/보존</li>
									<li>02 석면해체 : 노동부에 등록된 전문 해체회사에 의한 해체작업</li>
									<li>03 석면폐기물 관리 : ALLBARO 시스템을 통한 적법처리</li>
									<li>04 석면농도 기준준수 : 해당 작업장의 공기 중 석면농도를 기준(0.01개/cm2) 이하가 되도록 하여야 하며, 그 증빙자료를 지체 없이 관할 지방노동관서에 제출</li>
								</ol>
							</div>
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