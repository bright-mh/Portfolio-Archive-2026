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
			<p class="blind">INVESTOR RELATIONS / 기업가치를 극대화하고 주주들로 부터 신뢰를 받기 위한 경영을 실천하겠습니다.</p>

			<!-- lnb s -->
			<jsp:include page="/front/inc/lnb_05ir.jsp"></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg4">
					<ul>
						<li><a href="/front/index.jsp"><span class="ico">HOME</span></a></li>
						<li class="gt"><a href="#none">투자정보</a></li>
						<li class="gt last"><a href="#none">IR정보</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>IR정보</h1>
					
					<div class="tab tab2">
						<ul>
							<li><a href="/front/05ir/IR_07.jsp"><span>IR 자료</span></a></li>
							<li class="on"><a href="/front/05ir/IR_08.jsp"><span>실적 자료</span></a></li>
						</ul>
					</div>
					
					<div class="ir_manage">
						<div class="tit_ir">
							<h2 class="h2_14 mt0">영문 실적자료</h2> <span class="font_ltgray">Total : 12</span>
							<div class="option">
								<span class="radio">
									<span class="radio_new">
										<input type="radio" id="result_kor" name="result_lang">
										<label for="result_kor">국문</label>
									</span>
									<span class="radio_new ml20">
										<input type="radio" id="result_eng" name="result_lang" checked="checked">
										<label for="result_eng" class="checked">ENG</label>
									</span>
								</span>
								
								<div class="w_100 ml20"><!-- Select -->
								<select class="box_select">
									<option>전체 연도</option>
									<option>2013</option>
									<option>2012</option>
									<option>2011</option>
									<option>2010</option>
								</select></div>
							</div>
						</div>
						
					<div class="tbl_red">
					<table summary="번호, 제목, 다운로드">
					<caption>영문 실적자료 다운로드</caption>
					<colgroup>
					<col style="width:12%">
					<col style="width:78%">
					<col style="width:20%">
					</colgroup>
					<thead>
					<tr>
						<th scope="col">번호</th>
						<th scope="col">제목</th>
						<th scope="col">다운로드</th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td>10</th>
						<td class="txtL">2012년 1분기 실적자료 [국문]</td>
						<td><a href="#none" class="btn_down_red" title="2012년 1분기 실적자료 [국문] 다운로드">Down</a></td>
					</tr>
					<tr>
						<td>9</th>
						<td class="txtL">2011년 4분기 실적자료 [국문]</td>
						<td><a href="#none" class="btn_down_red" title="2012년 4분기 실적자료 [국문] 다운로드">Down</a></td>
					</tr>
					<tr>
						<td>8</th>
						<td class="txtL">2011년 3분기 실적자료 [국문]</td>
						<td><a href="#none" class="btn_down_red" title="2011년 3분기 실적자료 [국문] 다운로드">Down</a></td>
					</tr>
					<tr>
						<td>7</th>
						<td class="txtL">2011년 2분기 실적자료 [국문]</td>
						<td><a href="#none" class="btn_down_red" title="2011년 2분기 실적자료 [국문] 다운로드">Down</a></td>
					</tr>
					<tr>
						<td>6</th>
						<td class="txtL">2011년 1분기 실적자료 [국문]</td>
						<td><a href="#none" class="btn_down_red" title="2011년 1분기 실적자료 [국문] 다운로드">Down</a></td>
					</tr>
					<tr>
						<td>5</th>
						<td class="txtL">2010년 4분기 실적자료 [국문]</td>
						<td><a href="#none" class="btn_down_red" title="2010년 4분기 실적자료 [국문] 다운로드">Down</a></td>
					</tr>
					<tr>
						<td>4</th>
						<td class="txtL">2010년 3분기 실적자료 [국문]</td>
						<td><a href="#none" class="btn_down_red" title="2010년 3분기 실적자료 [국문] 다운로드">Down</a></td>
					</tr>
					<tr>
						<td>3</th>
						<td class="txtL">2010년 2분기 실적자료 [국문]</td>
						<td><a href="#none" class="btn_down_red" title="2010년 2분기 실적자료 [국문] 다운로드">Down</a></td>
					</tr>
					<tr>
						<td>2</th>
						<td class="txtL">2010년 1분기 실적자료 [국문]</td>
						<td><a href="#none" class="btn_down_red" title="2010년 1분기 실적자료 [국문] 다운로드">Down</a></td>
					</tr>
					<tr>
						<td>1</th>
						<td class="txtL">2009년 4분기 실적자료 [국문]</td>
						<td><a href="#none" class="btn_down_red" title="2009년 4분기 실적자료 [국문] 다운로드">Down</a></td>
					</tr>
					
					</tbody>
					</table>
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