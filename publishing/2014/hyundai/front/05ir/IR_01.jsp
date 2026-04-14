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
							<li class="on"><a href="/front/05ir/IR_01.jsp">회사소개</a></li>
							<li><a href="/front/05ir/IR_01_02.jsp">주주현황</a></li>
							<li><a href="/front/05ir/IR_01_03.jsp">이사회소개</a></li>
						</ul>
					</div>

					<h3 class="hidden">회사소개</h3>
					<h4 class="h2_tit">회사개요</h4>
					<div class="tbl_black tbl_ir pb6">
						<table summary="회사 정보 안내">
							<caption>회사개요</caption>
							<colgroup>
								<col style="width:12%" />
								<col style="width:38%" />
								<col style="width:12%" />
								<col style="width:38%" />
							</colgroup>
							<tbody>
								<tr>
									<th scope="row">회사명</th>
									<td>현대산업개발(주)</td>
									<th scope="row" class="bl">자본금</th>
									<td>376,921백만원</td>
								</tr>
								<tr>
									<th scope="row">설립일</th>
									<td>1976.11.29</td>
									<th scope="row" class="bl">결산기</th>
									<td>12월</td>
								</tr>
								<tr>
									<th scope="row">상장일</th>
									<td>1996.10.16</td>
									<th scope="row" class="bl">자산총계</th>
									<td>5,923,369백만원</td>
								</tr>
								<tr>
									<th scope="row">대표이사</th>
									<td>정몽규, 박창민, 김재식</td>
									<th scope="row" class="bl">본점주소</th>
									<td>서울시 용산구 한강대로 23길 55</td>
								</tr>
								<tr>
									<th scope="row">대표업종</th>
									<td>종합건설업</td>
									<th scope="row" class="bl">대표전화</th>
									<td>02-2008-9114</td>
								</tr>
							</tbody>
						</table>
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