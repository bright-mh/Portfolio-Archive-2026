<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="ko">
<head>
	<jsp:include page="/front/en/inc/top.jsp"></jsp:include>
</head>
<body class="main">
	<jsp:include page="/front/en/inc/head.jsp"></jsp:include>
	<div class="article alert" id="content">
		<div class="gray">
			<p>Pages that are optimized for PC</p>
		</div>
		<div class="wrap">
			<p class="blind">TECHNOLOGICAL INNOVATION</p>
			<!-- lnb s -->
			<jsp:include page="/front/en/inc/lnb_07rnd.jsp"></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg2">
					<ul>
						<li><a href="/front/en/index.jsp"><span class="ico"></span></a></li>
						<li class="gt"><a href="#none">기술혁신</a></li>
						<li class="gt last"><a href="#none">논문자료</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1 class="pb20">논문자료</h1>

					<div class="box_clear">
						<div class="tech fr">
							<select title="논문자료(건축, 토목)" class="box_select" onchange="window.open(value,'_blank');">
								<option value="1">전체</option>
								<option value="2">건축</option>
								<option value="3">토목</option>
							</select>
						</div>
					</div>
					<div class="rd table mt10">
						<div class="tbl_red">
						<table summary="구분, 제목, 내용">
						<caption>논문자료 리스트</caption>
						<colgroup>
						<col style="width:10%">
						<col style="width:">
						<col style="width:10%">
						</colgroup>
						<thead>
						<tr>
							<th scope="col">구분</th>
							<th scope="col">제목</th>
							<th scope="col">내용</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td>건축</td>
							<td class="txtL">한중 콘크리트 학회 논문</td>
							<td><a href="#none" target="blank"><img src="/eng/images/ico/ico_rdown.gif" alt="논문자료 다운받기"/></a></td>
						</tr>
						<tr>
							<td>토목</td>
							<td class="txtL">2005 Journal of Coastal Research-Bragg Reflection of Random Waves with the Boussine Boussinesq Equations </td>
							<td><a href="#none" target="blank"><img src="/eng/images/ico/ico_rdown.gif" alt="논문자료 다운받기"/></a></td>
						</tr>
						<tr>
							<td>건축</td>
							<td class="txtL">한중 콘크리트 학회 논문</td>
							<td><a href="#none" target="blank"><img src="/eng/images/ico/ico_rdown.gif" alt="논문자료 다운받기"/></a></td>
						</tr>
						<tr>
							<td>토목</td>
							<td class="txtL">2005 Journal of Coastal Research-Bragg Reflection of Random Waves with the Boussine Boussinesq Equations </td>
							<td><a href="#none" target="blank"><img src="/eng/images/ico/ico_rdown.gif" alt="논문자료 다운받기"/></a></td>
						</tr>
						<tr>
							<td>건축</td>
							<td class="txtL">한중 콘크리트 학회 논문</td>
							<td><a href="#none" target="blank"><img src="/eng/images/ico/ico_rdown.gif" alt="논문자료 다운받기"/></a></td>
						</tr>
						<tr>
							<td>토목</td>
							<td class="txtL">2005 Journal of Coastal Research-Bragg Reflection of Random Waves with the Boussine Boussinesq Equations </td>
							<td><a href="#none" target="blank"><img src="/eng/images/ico/ico_rdown.gif" alt="논문자료 다운받기"/></a></td>
						</tr>
						<tr>
							<td>건축</td>
							<td class="txtL">한중 콘크리트 학회 논문</td>
							<td><a href="#none" target="blank"><img src="/eng/images/ico/ico_rdown.gif" alt="논문자료 다운받기"/></a></td>
						</tr>
						<tr>
							<td>토목</td>
							<td class="txtL">2005 Journal of Coastal Research-Bragg Reflection of Random Waves with the Boussine Boussinesq Equations </td>
							<td><a href="#none" target="blank"><img src="/eng/images/ico/ico_rdown.gif" alt="논문자료 다운받기"/></a></td>
						</tr>
						<tr>
							<td>건축</td>
							<td class="txtL">한중 콘크리트 학회 논문</td>
							<td><a href="#none" target="blank"><img src="/eng/images/ico/ico_rdown.gif" alt="논문자료 다운받기"/></a></td>
						</tr>
						<tr>
							<td>토목</td>
							<td class="txtL">2005 Journal of Coastal Research-Bragg Reflection of Random Waves with the Boussine Boussinesq Equations </td>
							<td><a href="#none" target="blank"><img src="/eng/images/ico/ico_rdown.gif" alt="논문자료 다운받기"/></a></td>
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
					<a href="#layoutWrap"><img src="/images/sub/bt_top.png" alt="Top of page"/></a>
				</div>
			</div>
			<!-- container e -->

		</div>
	</div>

<jsp:include page="/front/en/inc/footer.jsp"></jsp:include>
</body>
</html>
