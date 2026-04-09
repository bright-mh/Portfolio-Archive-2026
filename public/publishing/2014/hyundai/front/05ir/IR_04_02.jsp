<%@ page language="java" pageEncoding="UTF-8" 
%><%@ page import="com.rbipt.RB" 
%><%@ page import="java.util.ArrayList" 
%><%@ page import="java.util.HashMap" 
%><%@page import="com.rbipt.service.CreditService"
%><%
	CreditService service = new CreditService();
	ArrayList<HashMap<String,Object>> list = service.getList(request, "");
%>
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
						<li class="gt last"><a href="/front/05ir/IR_03.jsp">재무정보</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>재무정보</h1>
					<div class="tab tab2">
						<ul>
							<li><a href="/front/05ir/IR_03.jsp"><span>재무제표</span></a></li>
							<li class="on"><a href="/front/05ir/IR_04.jsp?limit=300"><span>신용등급</span></a></li>
						</ul>
					</div>

					<h2 class="hidden">신용등급</h2>
					<div class="tab_mn2">
						<ul>
							<li><a href="/front/05ir/IR_04.jsp?limit=300">회사채</a></li>
							<li class="on"><a href="/front/05ir/IR_04_02.jsp">기업어음</a></li>
						</ul>
					</div>

					<h3 class="hidden">기업어음</h3>
					<div class="ir_manage">
						<h4 class="h2_tit pt0 pb15">신용등급 기업어음</h4>
						<div class="tbl_red">
							<table summary="기업어음의 평가일자별 신용등급, 평가기관">
								<caption>기업어음 신용등급</caption>
								<colgroup>
									<col style="width:25%" />
									<col style="width:25%" />
									<col style="width:25%" />
									<col style="width:25%" />
								</colgroup>
								<thead>
									<tr>
										<th scope="col">평가유가증권</th>
										<th scope="col">평가일자</th>
										<th scope="col">신용등급</th>
										<th scope="col">평가기관</th>
									</tr>
								</thead>
								<tbody>
									<% for (int i=0; i<list.size(); i++) {  
										HashMap h = list.get(i);
									%>
									<tr>
										<% if (i==0) { %>
										<th scope="rowgroup" rowspan="<%=list.size()%>">기업어음</th>
										<% } %>
										<td><%=h.get("EVALUATION_DATE")%></td>
										<td><%=h.get("CREDIT_LEVEL")%></td>
										<td><%=h.get("EVALUATION_COMPANY")%></td>
									</tr>
									<% } %>
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