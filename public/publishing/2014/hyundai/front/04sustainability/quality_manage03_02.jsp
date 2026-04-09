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
							<li><a href="/front/04sustainability/quality_manage03_01.jsp"><span>방침</span></a></li>
							<li class="on"><a href="/front/04sustainability/quality_manage03_02.jsp"><span>운영체계</span></a></li>
							<li><a href="/front/04sustainability/quality_manage03_03.jsp"><span>활동</span></a></li>
						</ul>
					</div>

					<h2 class="hidden">운영체계</h2>
					<div class="manageV">
						<div class="box envi4">
							<h3 class="title_style">절차</h3>
							<p class="explain4">현대산업개발은 전 조직 구성원의 참여로 안전보건경영시스템을 실천해 가고 있습니다.</p>
							<img src="/front/images/04sustainability/img_manageP01.gif" alt="">
							<div class="blind">
								<p>자율 SYSTEM</p>
								<ol>
									<li>안전보건  경영방침 : 최고경영자의 안전의지 표명</li>
									<li>계획 : 위험성평가, 법규 등 검토, 안전목표, 안전보건활동</li>
									<li>실행 : 협의체회의, 교육, 안전보건 활동</li>
									<li>점검 : 현장, 본사, 외부기관 점검</li>
									<li>평가 및 개선 : 성과측정 및 모니터링 내부심사, 경영자 검토</li>
								</ol>
							</div>
						</div>

						<div class="box envi4 mb9">
							<h3 class="title_style">목표</h3>
							<p class="explain4">현대산업개발은 전 임직원들이 안전경영메뉴얼의 요구사항을 숙지하여 무재해 사업장 구현을 위해 최선을 다하고 있습니다.</p>
							<img src="/front/images/04sustainability/img_manageP02.gif" alt="">
							<div class="blind">
								<p>무재해 사업장 구현(the achievement of non-disaster)</p>
								<dl>
									<dt>1. 안전관리 시스템 조기구축 및 실행력 제고</dt>
									<dd>
										<ul>
											<li>Safety Kick Off Meeting 실시</li>
											<li>KOSHA18001 운영수준 상향 평준화</li>
											<li>10대 위험 공종 HOLD POINT 실행력 강화</li>
											<li>신규채용 근로자 특별관리</li>
										</ul>
									</dd>
									<dt>2. 점검수준 상향 조정</dt>
									<dd>
										<ul>
											<li>전면 PATROL 점검 시행</li>
											<li>전수점검 실시</li>
										</ul>
									</dd>
									<dt>3. 취약시기 위험공종 집중관리</dt>
									<dd>
										<ul>
											<li>대형·돌관현장/흙막이 가시설공사/터널공사 등</li>
										</ul>
									</dd>
								</dl>
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