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
							<li><a href="/front/en/03ir/IR_02.jsp"><span>INCOME STATEMENTS</span></a></li>
							<li class="on"><a href="/front/en/03ir/IR_03.jsp"><span>STATEMENTS CASH FLOW</span></a></li>
						</ul>
					</div>

					<div class="irTitle">
						<h2>STATEMENTS CASH FLOW</h2>
						<span>(Unit : Bn Won)</span>
					</div>
					
						<div class="tbl_red">
						<table summary="2012 3Q, 2011, 2010">
						<caption>STATEMENTS CASH FLOW</caption>
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
							<td class="txtL fwB">I. Net Cash Flows from Operating Activities </td>
							<td class="txtR">18</td>
							<td class="txtR">-78</td>
							<td class="txtR">-154</td>
						</tr>
						<tr>
							<td class="txtL fwB">II. Cash Flows from Investing Activities </td>
							<td class="txtR">-122</td>
							<td class="txtR">118</td>
							<td class="txtR">-167</td>
						</tr>
						<tr>
							<td class="txtL effect">Cash Inflows from Financing Activities </td>
							<td class="txtR">45</td>
							<td class="txtR">204</td>
							<td class="txtR">97</td>
						</tr>
						<tr>
							<td class="txtL effect">Cash Outflows from Financing Activities</td>
							<td class="txtR">-167</td>
							<td class="txtR">86</td>
							<td class="txtR">-263</td>
						</tr>
						<tr>
							<td class="txtL fwB">III. Cash Flows from Financing Activities</td>
							<td class="txtR">-154</td>
							<td class="txtR">5</td>
							<td class="txtR">77</td>
						</tr>
						<tr>
							<td class="txtL effect">Cash Inflows from Investing Activities</td>
							<td class="txtR">437</td>
							<td class="txtR">1,093</td>
							<td class="txtR">657</td>
						</tr>
						<tr>
							<td class="txtL effect">Cash Outflows from Investing Activities </td>
							<td class="txtR">-591</td>
							<td class="txtR">-1,088</td>
							<td class="txtR">-579</td>
						</tr>
						<tr>
							<td class="txtL fwB">IV. Net Increase(Decrease) in cash and cash equivalents </td>
							<td class="txtR">-258</td>
							<td class="txtR">44</td>
							<td class="txtR">-244</td>
						</tr>
						<tr>
							<td class="txtL fwB">V. Cash and cash equivalents</td>
							<td class="txtR">-</td>
							<td class="txtR">-</td>
							<td class="txtR">-</td>
						</tr>
						<tr>
							<td class="txtL fwB">VI. Beginning of Year</td>
							<td class="txtR">456</td>
							<td class="txtR">412</td>
							<td class="txtR">655</td>
						</tr>
						<tr>
							<td class="txtL fwB">VII. End of Year</td>
							<td class="txtR">198</td>
							<td class="txtR">456</td>
							<td class="txtR">412</td>
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
