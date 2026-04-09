<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
	<jsp:include page="/front/inc/top.jsp"></jsp:include>
</head>
<body class="main">
<jsp:include page="/front/inc/head.jsp"></jsp:include>
	<div class="article" id="content">
		<div class="wrap">
			<p class="blind">BUSINESS INFORMATION / 현대산업개발은 새로운 공간과 문화 제안을 통해 삶의 가치를 높이고 생활을 더욱 풍요롭게 만듭니다.</p>

			<!-- lnb s -->
			<jsp:include page="/front/inc/lnb_02business.jsp"></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg1">
					<ul>
						<li><a href="/front/index.jsp"><span class="ico">HOME</span></a></li>
						<li class="gt"><a href="/front/02business/housing_info.jsp">사업분야</a></li>
						<li class="gt last"><a href="/front/02business/city_info.jsp">개발사업</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>개발사업</h1>
					<div class="tab tab3">
						<ul>
							<li><a href="/front/02business/city_info.jsp"><span>민간도시개발</span></a></li>
							<li><a href="/front/02business/complex_info.jsp"><span>복합용도개발</span></a></li>
							<li class="on"><a href="/front/02business/aptcomplex_info.jsp"><span>대단지개발</span></a></li>
						</ul>
					</div>

					<h2 class="hidden">대단지개발</h2>
					<div class="business">
						<div class="img_box">
							<img src="/front/images/02business/img_aptcomplex.jpg" alt="압구정 현대아파트 단지" />
						</div>

						<div class="hr"></div>

						<div class="txt_box mb41">
							<p class="dark">민간최초 ‘신도시 개발’의 개념을 만들다<br/> <span>국내 아파트를 대표하는 최고의 브랜드이자 아파트의 대명사라는 상징적인 의미를 갖고 있습니다.</span></p>
							<p class="light">압구정 현대아파트 개발 사업은 7~80년대 이뤄진 국내 최초의 민간 도시개발사업으로, 우리나라 주택문화에 새로운 획을 긋는 의미 깊은 프로젝트입니다. 7천여 가구 규모의 아파트를 비롯해 상업시설과 학교까지 조성된 압구정 현대아파트 단지는 현재까지도 최고급 주거단지로 인정받으며, 국내 아파트를 대표하는 최고의 브랜드이자 아파트의 대명사라는 상징적인 의미를 갖고 있습니다. 현대산업개발은 강남 최초의 최고급 신도시 사업인 압구정 현대 아파트 프로젝트를 효시로 5천 가구 이상의 단일 브랜드 타운인 부평 현대아파트 단지와 최근 중부권 최초의 단일 브랜드 신도시인 수원 아이파크 시티까지 자체 민간도시개발사업을 펼쳐오며 독보적인 실적과 노하우를 보유하고 있습니다.</p>
						</div>

						<h3 class="title">사업개요</h3>
						<div class="table mb5">
							<div class="tbl_red">
								<table summary="대지면적(㎡%), 비율(%)에 따른 용지별 합계">
									<caption>대단지개발 사업개요</caption>
									<colgroup>
										<col style="width:33%">
										<col style="width:33%">
										<col style="width:33%">
									</colgroup>
									<thead>
										<tr>
											<th scope="col">구분</th>
											<th scope="col">대지면적 (㎡%)</th>
											<th scope="col">비율 (%)</th>
										</tr>
									</thead>
									<tfoot>
										<tr>
											<td>합계</td>
											<td>494,209</td>
											<td>100</td>
										</tr>
									</tfoot>
									<tbody>
										<tr>
											<td>APT 용지</td>
											<td>257,811</td>
											<td>52.2</td>
										</tr>
										<tr>
											<td>백화점</td>
											<td>24,441</td>
											<td>4.9</td>
										</tr>
										<tr>
											<td>근린상가</td>
											<td>10,667</td>
											<td>3.5</td>
										</tr>
										<tr>
											<td>학교</td>
											<td>46,287</td>
											<td>9.4</td>
										</tr>
										<tr>
											<td>도로</td>
											<td>10,667</td>
											<td>2.2</td>
										</tr>
										<tr>
											<td>공원 및 녹지</td>
											<td>66,277</td>
											<td>13.4</td>
										</tr>
										<tr>
											<td>기타</td>
											<td>28,184</td>
											<td>5.4</td>
										</tr>
									</tbody>
								</table>
							</div>
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