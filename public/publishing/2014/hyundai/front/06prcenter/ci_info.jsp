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
			<p class="blind">CYBER PR CENTER / 현대산업개발은 창의적이고 혁신적인 기술력과 경험을 바탕으로 가치 창조적인 공간을 건설하고 있습니다.</p>

			<!-- lnb s -->
			<jsp:include page="/front/inc/lnb_06prcenter.jsp"></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg5">
					<ul>
						<li><a href="/front/index.jsp"><span class="ico">HOME</span></a></li>
						<li class="gt"><a href="/front/06prcenter/news_list.jsp">홍보센터</a></li>
						<li class="gt last"><a href="/front/06prcenter/ci_info.jsp">CI/BI센터</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>CI/BI센터</h1>
					<div class="tab tab2">
						<ul>
							<li class="on"><a href="/front/06prcenter/ci_info.jsp"><span>CI</span></a></li>
							<li><a href="/front/06prcenter/bi_info.jsp"><span>BI</span></a></li>
						</ul>
					</div>

					<h2 class="hidden">CI</h2>
					<div class="ci">
						<h3>현대산업개발 CI</h3>
						<p>현대산업개발의 아이덴티티는 기하학적인 뼈대를 바탕으로 직선과 곡선, 비움과 채움, 부드러움과 긴장감의 조화를 고려하여 제작하였습니다. 크고 작은 모든 요소들이 만드는 각각의 각도들이 현대산업개발만의 아이덴티티를 이루어냅니다. 현대산업개발 아이덴티티는 가치지향 경영, 뿌리깊은 기업 역사와 혁신 이노베이션 등의 세계적인 시각적 이미지 구축을 추구합니다. 현대산업개발 고유의 아이덴티티 구축을 위해 다양한 상황 및 아이템 생산 환경에서 일관성있는 색상 적용이 필요하여 이와 같이 팬톤컬러 규정을 참고합니다. (2010년) 현대산업개발 브랜드 팔레트는 브랜드 가치를 시각적으로 구현할 수 있는 HDC 레드와 백색, 흑색, 따뜻한 회색의 네가지 주요 색상을 바탕으로 합니다.</p>
						<div class="bt">
							<ul>
								<li><a href="/front/data_file/CI_jpg.zip">JPG 다운로드</a></li>
								<li><a href="/front/data_file/CI_ai.zip">AI 다운로드</a></li>
							</ul>
						</div>
						<img src="/front/images/06prcenter/ci01.gif" alt=""/>
						<div class="hidden">
							이미지1. HDC
							이미지2. HDC RED - PANTONE : 485C / C00 M95 Y100 K00 / R238 G50 B36
							이미지3. HDC GRAY - PANTONE : 425C / C30 M25 Y20 K70 / R76 G81 B84
						</div>

						<h4>Logo type</h4>
						<p>로고타입은 절대로 임의로 타이핑하여 사용, 색상 임의 조절, 로고 일부만 사용하는 등의 변형을 할 수 없습니다. 변형, 수정되지 않은 디지털 파일 그대로를 사용하여 현대산업개발의 아이덴티티가 잘 관리 되도록 합니다.</p>
						<img src="/front/images/06prcenter/ci02.gif" alt=""/>
						<div class="hidden">
							이미지1. &lt;Englist&gt; : HDC Hyundai Development Company
							이미지2. &lt;Korean&gt; : HDC 현대산업개발 
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