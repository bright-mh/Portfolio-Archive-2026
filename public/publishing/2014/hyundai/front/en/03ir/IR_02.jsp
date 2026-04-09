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
			<p>PC에 최적화된 페이지 입니다.</p>
		</div>
		<div class="wrap">
			<p class="blind">INVESTOR RELATIONS</p>
			<!-- lnb s -->
			<jsp:include page="/front/en/inc/lnb_03ir.jsp"></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg2">
					<ul>
						<li><a href="/front/en/index.jsp"><span class="ico"></span></a></li>
						<li class="gt"><a href="#none">IR</a></li>
						<li class="gt last"><a href="#none">FINANCIAL STATEMENT</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>FINANCIAL STATEMENT</h1>
					<div class="tab tab3">
						<ul>
							<li><a href="/front/en/03ir/IR_01.jsp"><span>BALANCE SHEET</span></a></li>
							<li class="on"><a href="/front/en/03ir/IR_02.jsp"><span>INCOME STATEMENTS</span></a></li>
							<li><a href="/front/en/03ir/IR_03.jsp"><span>STATEMENTS CASH FLOW</span></a></li>
						</ul>
					</div>

					<div class="irTitle">
						<h2>INCOME STATEMENTS</h2>
						<span>(Unit : Bn Won)</span>
					</div>
					
						<div class="tbl_red">
						<table summary="2012 3Q, 2011, 2010">
						<caption>INCOME STATEMENTS</caption>
						<colgroup>
						<col style="width:%">
						<col style="width:15%">
						<col style="width:10%">
						<col style="width:10%">
						</colgroup>
						<thead>
						<tr>
							<th scope="col"><span class="blind">Title</span></th>
							<th scope="col">2012 3Q</th>
							<th scope="col">2011</th>
							<th scope="col">2010</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td class="txtL fwB">Sales </td>
							<td class="txtR">1,574</td>
							<td class="txtR">3,102</td>
							<td class="txtR">2,709</td>
						</tr>
						<tr>
							<td class="txtL">Cost of Sales </td>
							<td class="txtR">1,438</td>
							<td class="txtR">2,488</td>
							<td class="txtR">2,245</td>
						</tr>
						<tr>
							<td class="txtL fwB">Gross Income </td>
							<td class="txtR">136</td>
							<td class="txtR">613</td>
							<td class="txtR">465</td>
						</tr>
						<tr>
							<td class="txtL">SG&A </td>
							<td class="txtR">127</td>
							<td class="txtR">256</td>
							<td class="txtR">235</td>
						</tr>
						<tr>
							<td class="txtL">Other Operating Income </td>
							<td class="txtR">80</td>
							<td class="txtR">18</td>
							<td class="txtR">20</td>
						</tr>
						<tr>
							<td class="txtL">Other Operating Expenses </td>
							<td class="txtR">2</td>
							<td class="txtR">14</td>
							<td class="txtR">17</td>
						</tr>
						<tr>
							<td class="txtL fwB">Operating Income </td>
							<td class="txtR">88</td>
							<td class="txtR">362</td>
							<td class="txtR">232</td>
						</tr>
						<tr>
							<td class="txtL">Financial Income </td>
							<td class="txtR">31</td>
							<td class="txtR">31</td>
							<td class="txtR">41</td>
						</tr>
						<tr>
							<td class="txtL">Financial Expenses </td>
							<td class="txtR">55</td>
							<td class="txtR">106</td>
							<td class="txtR">101</td>
						</tr>
						<tr>
							<td class="txtL fwB">Income Before Taxes </td>
							<td class="txtR">65</td>
							<td class="txtR">287</td>
							<td class="txtR">171</td>
						</tr>
						<tr>
							<td class="txtL fwB">Net Income </td>
							<td class="txtR">46</td>
							<td class="txtR">226</td>
							<td class="txtR">116</td>
						</tr>
						</tbody>
						</table>
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
