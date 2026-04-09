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
			<p class="blind">TECHNOLOGICAL INNOVATION / 현대산업개발은 가치 지향적 경영과 끊임없는 혁신을 기반으로 더 높이 도약합니다.</p>

			<!-- lnb s -->
			<jsp:include page="/front/inc/lnb_03rnd.jsp"></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg2">
					<ul>
						<li><a href="/front/index.jsp"><span class="ico">HOME</span></a></li>
						<li class="gt"><a href="/front/03rnd/tech_info.jsp">기술혁신</a></li>
						<li class="gt last"><a href="/front/03rnd/tech_info.jsp">기술연구소</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>기술연구소</h1>
					<div class="tab tab3">
						<ul>
							<li><a href="/front/03rnd/tech_info.jsp"><span>소개</span></a></li>
							<li class="on"><a href="/front/03rnd/tech_history.jsp"><span>연혁</span></a></li>
							<li><a href="/front/03rnd/tech_organization.jsp"><span>조직도</span></a></li>
						</ul>
					</div>

					<h2 class="hidden">연혁</h2>
					<div class="tech_group">
						<h3 class="title">연구소 연혁 및 수상 현황</h3>
						<div class="tbl_red2 mb5">
							<table summary="연도별 연혁 및 수상 현황 내용">
								<caption>연도별 연혁 및 수상 현황</caption>
								<colgroup>
									<col style="width:11%" />
									<col style="width:98%" />
								</colgroup>
								<thead>
									<tr>
										<th scope="col">년도</th>
										<th scope="col">내용</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td class="array">2012.04</td>
										<td>국무총리 표창 (제45회 과학의 날)</td>
									</tr>
									<tr>
										<td class="array">2011.12</td>
										<td>국토해양부 장관상</td>
									</tr>
									<tr>
										<td class="array">2010.11</td>
										<td>한국콘크리트학회 기술상 'Flat Plate Slab 전단보강체 (I-Stud) 개발'</td>
									</tr>
									<tr>
										<td class="array">2009.06</td>
										<td>국토해양부 장관상</td>
									</tr>
									<tr>
										<td class="array">2007.11</td>
										<td>환경부장관상 '2007 건강 주택 대상' 건강주택부문 대상</td>
									</tr>
									<tr>
										<td class="array">2006.08</td>
										<td>건축학회기술상</td>
									</tr>
									<tr>
										<td class="array">2002.12</td>
										<td>기술사회상</td>
									</tr>
									<tr>
										<td class="array">2001.11</td>
										<td><span class="bold">국가공인시험기관인정기관 획득</span>, 과학기술부장관표창</td>
									</tr>
									<tr>
										<td class="array">1998.04</td>
										<td>과학기술부장관표창</td>
									</tr>
									<tr>
										<td class="array">1998.04</td>
										<td>현대기술상(현대그룹) '초고강도 APT 무하자 배관공법'</td>
									</tr>
									<tr>
										<td class="array">1997.08</td>
										<td>IR52장영실상(과학기술처) '초고강도 콘크리트 Bearing Plate 개발'</td>
									</tr>
									<tr>
										<td class="array">1997.04</td>
										<td>현대기술상(현대그룹) '초고강도 콘크리트 PC Bearing Plate 개발'</td>
									</tr>
									<tr>
										<td class="array">1997.02</td>
										<td>건설기술상(대한건설협회)</td>
									</tr>
									<tr>
										<td class="array">1995.02</td>
										<td>건설기술상(대한건설협회)</td>
									</tr>
									<tr>
										<td class="array">1994.03</td>
										<td>한-일 기술교류 협약체결(일본 하세코사)</td>
									</tr>
									<tr>
										<td class="array">1991.05</td>
										<td><span class="bold">기업부설 연구소 인정(과학기술처)</span></td>
									</tr>
									<tr>
										<td class="array">1990.05</td>
										<td><span class="bold">기술연구소 설립</span></td>
									</tr>
									<tr>
										<td class="array">1982.03</td>
										<td><span class="bold">기술개발실 설립</span></td>
									</tr>
								</tbody>
							</table>
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