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
						<li class="gt last"><a href="/front/04sustainability/quality_manage03_01.jsp">안전경영</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>안전경영</h1>
					<div class="tab tab3">
						<ul>
							<li class="on"><a href="/front/04sustainability/quality_manage03_01.jsp"><span>방침</span></a></li>
							<li><a href="/front/04sustainability/quality_manage03_02.jsp"><span>운영체계</span></a></li>
							<li><a href="/front/04sustainability/quality_manage03_03.jsp"><span>활동</span></a></li>
						</ul>
					</div>

					<h2 class="hidden">방침</h2>
					<div class="manageV">
						<div class="box envi4">
							<h3 class="title_style">안전방침</h3>
							<p class="explain5">최고경영자를 포함한 현대산업개발(주) 전 임직원들은 본 안전경영메뉴얼의 요구사항을 숙지하여 안전활동을 수행하고, 보다 효과적인 안전경영시스템을 유지하도록 한층 더 노력할 것입니다.</p>
							<div class="explain6">
								<p class="txt">현대산업개발(주)은 대한민국 종합건설회사를 선도하는 기업으로서 끊임없이 변화를 주도하며 변화와 혁신을 통해 초일류 기업으로서 삶의 질을 높이고, 나아가 사회와 국가에 기여하는 기업의 사명과 책임을 다하기 위하여 “정서적 소통의 기업문화로 고객존중과 기술안전 관리 정착” 으로 안전방침을 정하며, 안전보건경영시스템 구축을 위한 세부사항을 다음과 같이 정하여 지속적으로 실천한다.</p>
								<ol>
									<li>현대산업개발(주) 모든 사업장은 KOSHA / OHSAS18001 규격에 의한 안전보건 경영시스템을 정착하기 위하여 전 임직원 및 협력회사는 위험성평가, 대책수립 및 이행을 생활화 한다.</li>
									<li>법규 및 규정을 준수하여 손실을 최소화하며, 사회와 국가에 기여하는 기업의 사명과 책임을 다한다.</li>
									<li>근로자 및 협력회사와 상호의사소통을 통해 잠재 위험요인발굴 및 안전하고 쾌적한 작업환경을 조성하여 생명존중과 고객감동을 실천한다.</li>
								</ol>
							</div>
							<img src="/front/images/04sustainability/img_safety.gif" alt="" />
							<div class="blind">
								<p>안전목표 : 재해율 0.10 이하</p>
								<p>정서적 소통의 기업문화로 고객존중과 기술안전 관리 정착</p>
								<p>안전활동 수행</p>
								<p>효과적 안전경영 시스템 유지</p>
							</div>
						</div>	
						<div class="box envi5">
							<h3 class="title_style">안전보건경영시스템 인증</h3>
							<br>
							<div>
								<ul>
									<li>
										<img src="/front/images/04sustainability/img_auth03.gif" alt="안전보건경영시스템 인증서(국문 KOSHA 18001 인증서)" />
										<span><a href="#" onclick="window.open('/front/safe_kor.jsp', 'kosha_18001_kor','resizable=yes scrollbars=yes width=408 height=576')" title="새 창 열림"><img src="/front/images/btn/btn_view.gif" alt="확대보기" /></a></span>
									</li>
									<li>
										<img src="/front/images/04sustainability/img_auth04.gif" alt="안전보건경영시스템 인증서(영문 KOSHA 18001 인증서)" />
										<span><a href="#" onclick="window.open('/front/safe_eng.jsp', 'kosha_18001_eng','resizable=yes scrollbars=yes width=408 height=576')" title="새 창 열림"><img src="/front/images/btn/btn_view.gif" alt="확대보기" /></a></span>
									</li>
									<li class="last">
										<img src="/front/images/04sustainability/img_auth05.gif" alt="영문 OHSAS 18001 인증서" />
										<span><a href="#" onclick="window.open('/front/safe_ohsas.jsp', 'ohsas_18001','resizable=yes scrollbars=yes width=408 height=576')" title="새 창 열림"><img src="/front/images/btn/btn_view.gif" alt="확대보기" /></a></span>
									</li>
								</ul>
								<p class="first">&lt;KOSHA 18001 인증서&gt;</p>
								<p>&lt;OHSAS 18001 인증서&gt;</p>
							</div>
						</div>
					</div>
				</div>			
				<!-- container e -->
				<div class="bt_top">
					<a href="#layoutWrap"><img src="/front/images/sub/bt_top.png" alt="상단으로"/></a>
				</div>
			</div>
		</div>
	</div>
<jsp:include page="/front/inc/footer.jsp"></jsp:include>
</body>
</html>