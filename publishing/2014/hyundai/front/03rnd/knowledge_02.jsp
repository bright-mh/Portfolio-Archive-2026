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
					<div class="tab tab3">
						<ul>
							<li><a href="/front/03r&amp;d/new_techbuild.jsp"><span>신기술</span></a></li>
							<li class="on"><a href="/front/03r&amp;d/knowledge_01.jsp"><span>특허</span></a></li>
						</ul>
					</div>
					
					<div class="tab_mn2">
						<ul>
							<li><a href="/front/03r&amp;d/knowledge_01.jsp">특허등록현황</a></li>
							<li class="on"><a href="/front/03r&amp;d/knowledge_02.jsp">실용실안등록현황</a></li>
							<li><a href="/front/03r&amp;d/knowledge_03.jsp">의장등록현황</a></li>
						</ul>
					</div>
					
					<div class="rd table">
						<div class="tbl_red">
						<table summary="명칭, 등록일, 등록번호, 존속기간, 권리자 및 비고">
						<caption>실용실안등록현황</caption>
						<colgroup>
						<col style="width:%">
						<col style="width:10%">
						<col style="width:10%">
						<col style="width:10%">
						<col style="width:20%">
						</colgroup>
						<thead>
						<tr>
							<th scope="col">명칭</th>
							<th scope="col">등록일</th>
							<th scope="col">등록번호</th>
							<th scope="col">존속기간</th>
							<th scope="col">권리자 및 비고</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td class="txtL">옥내 배선용 복합 접속함</td>
							<td>91.07.16</td>
							<td>81018</td>
							<td>-</td>
							<td class="txtL">공동</td>
						</tr>
						<tr>
							<td class="txtL">옥상 방수 장치</td>
							<td>91.10.18</td>
							<td>79636</td>
							<td>15년</td>
							<td class="txtL">공동(써니텍)</td>
						</tr>
						<tr>
							<td class="txtL">욕조 보양판</td>
							<td>94.03.07</td>
							<td>103358</td>
							<td>15년</td>
							<td class="txtL">공동(신호산업)</td>
						</tr>
						<tr>
							<td class="txtL">자동배기장치</td>
							<td>95.11.08</td>
							<td>133919</td>
							<td>15년</td>
							<td class="txtL">공동(써니텍)</td>
						</tr>
						<tr>
							<td class="txtL">가설방음 벽체 패널</td>
							<td>97.12.22</td>
							<td>169364</td>
							<td>-</td>
							<td class="txtL">단독</td>
						</tr>
						<tr>
							<td class="txtL">오니준설선의 오니펌프</td>
							<td>98.12.29</td>
							<td>141052</td>
							<td>-</td>
							<td class="txtL">단독</td>
						</tr>
						<tr>
							<td class="txtL">이원화 온돌 난방배관구조</td>
							<td>00.02.23</td>
							<td>190742</td>
							<td>15년</td>
							<td class="txtL">단독</td>
						</tr>
						<tr>
							<td class="txtL">패널보강구조</td>
							<td>00.06.21</td>
							<td>203239</td>
							<td>-</td>
							<td class="txtL">공동(일호)</td>
						</tr>
						<tr>
							<td class="txtL">단열기능을 갖는 발코니</td>
							<td>04.08.04</td>
							<td>358963</td>
							<td>10년</td>
							<td class="txtL">공동(대건케미칼)</td>
						</tr>
						<tr>
							<td class="txtL">건축물 외벽용 결로수, 침투수 처리용 보호판재</td>
							<td>04.08.04</td>
							<td>358963</td>
							<td>10년</td>
							<td class="txtL">공동(대건케미칼)</td>
						</tr>
						</tbody>
						</table>
						</div>
					</div>

					<div class="pagenate">
						<div class="paging">
							<a href="#FirstPage" class="first">첫 페이지</a>
							<a href="#PreviousPage" class="prev">이전 페이지</a>
							<ol>
								<li><a href="#none" class="on">1</a></li>
								<li><a href="#none">2</a></li>
								<li><a href="#none">3</a></li>
								<li><a href="#none">4</a></li>
								<li><a href="#none">5</a></li>
								<li><a href="#none">6</a></li>
								<li><a href="#none">7</a></li>
								<li><a href="#none">8</a></li>
								<li><a href="#none">9</a></li>
							</ol>
							<a href="#NextPage" class="next">다음 페이지</a>
							<a href="#EndPage" class="end">끝 페이지</a>
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