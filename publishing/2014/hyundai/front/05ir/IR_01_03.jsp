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
			<p class="blind">INVESTOR RELATIONS / 고객과 주주, 사회, 협력회사, 구성원 모두의 행복을 추구하며 No.1 Value Creator로 역량을 더욱 강화하겠습니다.</p>

			<!-- lnb s -->
			<jsp:include page="/front/inc/lnb_05ir.jsp"></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg4">
					<ul>
						<li><a href="/front/index.jsp"><span class="ico">HOME</span></a></li>
						<li class="gt"><a href="/front/05ir/IR_01.jsp">투자정보</a></li>
						<li class="gt last"><a href="/front/05ir/IR_01.jsp">경영정보</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>경영정보</h1>
					<div class="tab tab2">
						<ul>
							<li class="on"><a href="/front/05ir/IR_01.jsp"><span>기업지배구조</span></a></li>
							<li><a href="/front/05ir/IR_02.jsp"><span>정관</span></a></li>
						</ul>
					</div>

					<h2 class="hidden">기업지배구조</h2>
					<div class="tab_mn2">
						<ul>
							<li><a href="/front/05ir/IR_01.jsp">회사소개</a></li>
							<li><a href="/front/05ir/IR_01_02.jsp">주주현황</a></li>
							<li class="on"><a href="/front/05ir/IR_01_03.jsp">이사회소개</a></li>
						</ul>
					</div>

					<h3 class="hidden">이사회소개</h3>
					<div class="ir_manage">
						<h4 class="h2_tit pt0">이사회 구성 <span class="font_ltgray">(등기이사)</span></h4>
						<div class="box_clear mt23">
							<div class="fl"><h5 class="h5_tit">현황</h5> <span class="font_ltgray"> (의장성명 : 정몽규  |  이사총수 : 9명)</span></div>
						</div>
						<div class="tbl_red">
							<table summary="사내이사, 사외이사 분류별 직위(상근여부), 성명, 선임일, 임기, 소관업무 내용">
								<caption>이사회(등기이사) 구성</caption>
								<colgroup>
									<col style="width:18%" />
									<col style="width:20%" />
									<col style="width:11%" />
									<col style="width:11%" />
									<col style="width:11%" />
									<col style="width:23%" />
								</colgroup>
								<thead>
								<tr>
									<th scope="col">구분</th>
									<th scope="col">직위(상근여부)</th>
									<th scope="col">성명</th>
									<th scope="col">선임일</th>
									<th scope="col">임기</th>
									<th scope="col">소관업무</th>
								</tr>
								</thead>
								<tbody>
									<tr>
										<th scope="rowgroup" rowspan="4">사내이사</th>
										<td>대표이사회장(상근)</td>
										<td>정몽규</td>
										<td>2012</td>
										<td>3년</td>
										<td class="txtL">회장</td>
									</tr>
									<tr>
										<td>대표이사사장(상근)</td>
										<td>박창민</td>
										<td>2014</td>
										<td>1년</td>
										<td class="txtL">사장</td>
									</tr>
									<tr>
										<td>대표이사부사장(상근)</td>
										<td>김재식</td>
										<td>2013</td>
										<td>3년</td>
										<td class="txtL">CFO 경영기획본부장</td>
									</tr>
									<tr>
										<td>전무</td>
										<td>김종수</td>
										<td>2014</td>
										<td>1년</td>
										<td class="txtL">영업본부장</td>
									</tr>
									<tr>
										<th scope="rowgroup" rowspan="5">사외이사</th>
										<td>교수(비상근)</td>
										<td>이정훈</td>
										<td>2014</td>
										<td>3년</td>
										<td class="txtL">경영자문</td>
									</tr>
									<tr>
										<td>세무고문(비상근)</td>
										<td>최명해</td>
										<td>2013</td>
										<td>3년</td>
										<td class="txtL">세무자문</td>
									</tr>
									<tr>
										<td>변호사(비상근)</td>
										<td>박순성</td>
										<td>2013</td>
										<td>3년</td>
										<td class="txtL">법률자문</td>
									</tr>
									<tr>
										<td>변호사(비상근)</td>
										<td>박용석</td>
										<td>2012</td>
										<td>3년</td>
										<td class="txtL">법률자문</td>
									</tr>
									<tr>
										<td>변호사(비상근)</td>
										<td>김용덕</td>
										<td>2013</td>
										<td>2년</td>
										<td class="txtL">경영자문</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>

				<div class="bt_top">
					<a href="#layoutWrap"><img src="/front/images/sub/bt_top.png" alt="상단으로"></a>
				</div>
			</div>
			<!-- container e -->

		</div>
	</div>
<jsp:include page="/front/inc/footer.jsp"></jsp:include>
</body>
</html>