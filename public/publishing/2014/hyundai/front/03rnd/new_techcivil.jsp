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
			<p class="blind">TECHNOLOGICAL INNOVATION / 선진 건설기술 자립을 위해 축적된 시공경험과 기술력을 바탕으로 차별화된 신기술을 연구개발하고 있습니다.</p>

			<!-- lnb s -->
			<jsp:include page="/front/inc/lnb_03rnd.jsp"></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg2">
					<ul>
						<li><a href="/front/index.jsp"><span class="ico">HOME</span></a></li>
						<li class="gt"><a href="#none">기술혁신</a></li>
						<li class="gt last"><a href="#none">지적재산권</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>지적재산권</h1>
					<div class="tab tab2">
						<ul>
							<li class="on"><a href="/front/03r&amp;d/new_techbuild.jsp"><span>신기술</span></a></li>
							<li><a href="/front/03r&amp;d/knowledge_01.jsp"><span>특허</span></a></li>
						</ul>
					</div>
					
					<div class="tab_mn2">
						<ul>
							<li><a href="/front/03r&d/new_techbuild.jsp">건축신기술</a></li>
							<li class="on"><a href="/front/03r&d/new_techcivil.jsp">토목신기술</a></li>
						</ul>
					</div>

					<div class="rd">
						<div class="hr"></div>

						<div class="txt_box">
							<h2>압력식 쏘일 네일링 공법</h2>
							<p class="explain">천공홀에 네일과 케이싱 단부에 부착되고 반복사용이 가능한 고무튜브형 또는 에어튜브형 팩커를 동시 삽입한 후 천공홈 주입부를 밀폐하고, 부대장치 (유량 및 압력기록계, 월류관이 부착된 주입펌프)를 이용하여 주입재를 저압력 (0.5~0.7 MPA 이하)으로 그라우팅하여 네일체의 유효경을 증가시키고 맥상그라우팅 효과를 유도하여 지반의 안정성을 개선하는 압력식 쏘일 네일링 공법</p>
							<ul>
								<li>네일과 팩커의 사전조립 및 즉시 가압 그라우팅 가능 → 공정의 단순화, 공기 단축 가능</li>
								<li>팩커의 재사용 및 유량/유압 기록장치를 이용한 정량/정압/반복주입 가능 → 경제성 향상</li>
								<li>가압 그라우팅으로 네일의 마찰력과 전단력 증가 → 안정성 증대, 품질 향상</li>
							</ul>
						</div>
						
						<div class="bt">
							<a href="#none" title="상세자료 다운받기">상세자료 다운받기</a>
						</div>
					</div>

					<div class="rd">
						<div class="hr"></div>

						<div class="txt_box">
							<h2>PPE옹벽 신기술</h2>
							<p class="explain">PS강붕에 프리스트레스를 도입한 단면력 저감형 조립식 PC옹벽공법</p>
							<ul>
								<li>기존의 현장타설 옹벽 대신 공장에서 부재를 제작하여 현장운반 후, PC 강붕을 이용하여 조립하는 옹벽</li>
								<li>기존 캔틸레버 옹벽은 설계단면적 측면에서 매우 불리한 구조로 옹벽 높이가 증가함에 따라 부재 단면 두께 및 사용 철근량이 급격히 증가함</li>
								<li>벽체 및 기초판에 PC강붕으로 프리스트레스를 도입하여 탄성지점을 형성함으로 휨모멘트를 1/15로 획기적으로 감소</li>
							</ul>
						</div>
						
						<div class="bt">
							<a href="#none" title="상세자료 다운받기">상세자료 다운받기</a>
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