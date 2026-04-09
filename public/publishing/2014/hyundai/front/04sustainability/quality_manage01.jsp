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
						<li class="gt last"><a href="/front/04sustainability/quality_manage01.jsp">윤리경영</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1 class="pb15">윤리경영</h1>

					<div class="manageV">
						<div class="box">
							<h2>미래를 여는 윤리경영</h2>
							<p class="explain">현대산업개발은 공정하고 투명한 기업문화로 윤리경영을 실천하는 “CLEAN COMPANY”를 지향합니다. 모든 임직원은 올바른 윤리 가치관을 공유하고 실천하여 깨끗하고 공정하게 기업활동을 수행할 것입니다.</p>
							<a href="http://iethics.credu.com" target="_blank" title="새 창 열림">윤리관 바로가기</a>
							<a href="http://www.hyundai-dvp.com/clean/index.jsp" target="_blank" title="새 창 열림">신문고 바로가기</a>
						</div>
						<div class="box">
							<h2>윤리경영 추진방향</h2>
							<p class="explain">현대산업개발은 회사경영 및 기업활동에 있어 ‘기업윤리’를 최우선 가치로 생각합니다.</p>
							<img src="/front/images/04sustainability/img_manageV.gif" alt="" />
							<div class="blind">
								<dl>
									<dt>기업윤리</dt>
									<dd>내부 : 임직원의 윤리적 가치판단과 의사결정 &rarr; 성장을 위한 기반을 마련</dd>
									<dd>외부 : 고객과 이해관계자들의 신뢰 &rarr; 기업의 가치 향상 지속적인 성장 추구</dd>
								</dl>
							</div>
						</div>
						<div class="box last">
							<h2>윤리경영활동</h2>
							<p class="explain mb5">투명하고 공정하며 합리적인 업무활동</p>
							<ul class="mb8">
								<li>윤리강령제정 (2003년)</li>
								<li>임직원 및 협력회사에 대한 윤리교육</li>
								<li>임직원의 실천서약서 작성 의무화</li>
							</ul>
						</div>
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