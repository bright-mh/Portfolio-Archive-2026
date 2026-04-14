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
							<li class="on"><a href="/front/en/03ir/IR_01.jsp"><span>BALANCE SHEET</span></a></li>
							<li><a href="/front/en/03ir/IR_02.jsp"><span>INCOME STATEMENTS</span></a></li>
							<li><a href="/front/en/03ir/IR_03.jsp"><span>STATEMENTS CASH FLOW</span></a></li>
						</ul>
					</div>

					<div class="irTitle">
						<h2>BALANCE SHEET</h2>
						<span>(Unit : Bn Won)</span>
					</div>
					
						<div class="tbl_red">
						<table summary="2012 3Q, 2011, 2010">
						<caption>BALANCE SHEET</caption>
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
							<td class="txtL fwB">Assets </td>
							<td class="txtR">5,501</td>
							<td class="txtR">5,923</td>
							<td class="txtR">5,472</td>
						</tr>
						<tr>
							<td class="txtL">Current Asset </td>
							<td class="txtR">3,996</td>
							<td class="txtR">4,497</td>
							<td class="txtR">4,185</td>
						</tr>
						<tr>
							<td class="txtL">(Cash and Equivalants) </td>
							<td class="txtR">198</td>
							<td class="txtR">456</td>
							<td class="txtR">412</td>
						</tr>
						<tr>
							<td class="txtL">Non-Current Asset </td>
							<td class="txtR">1,505</td>
							<td class="txtR">1,426</td>
							<td class="txtR">1,286</td>
						</tr>
						<tr>
							<td class="txtL fwB">Liabilities </td>
							<td class="txtR">2,948</td>
							<td class="txtR">3,368</td>
							<td class="txtR">3,087</td>
						</tr>
						<tr>
							<td class="txtL">Current Liability </td>
							<td class="txtR">1,859</td>
							<td class="txtR">2,009</td>
							<td class="txtR">2,227</td>
						</tr>
						<tr>
							<td class="txtL">Non-Current Liability </td>
							<td class="txtR">1,089</td>
							<td class="txtR">1,359</td>
							<td class="txtR">860</td>
						</tr>
						<tr>
							<td class="txtL fwB">Equity </td>
							<td class="txtR">2,553</td>
							<td class="txtR">2,555</td>
							<td class="txtR">2,385</td>
						</tr>
						<tr>
							<td class="txtL">Paid-in Capital</td>
							<td class="txtR">377</td>
							<td class="txtR">377</td>
							<td class="txtR">377</td>
						</tr>
						<tr>
							<td class="txtL">Others</td>
							<td class="txtR">2,176</td>
							<td class="txtR">2,178</td>
							<td class="txtR">2,008</td>
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
