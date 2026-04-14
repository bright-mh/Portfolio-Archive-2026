<%@ page language="java" pageEncoding="UTF-8"
%><%@ page import="com.rbipt.URLReader" 
%><%@ page import="java.util.Iterator" 
%><%@ page import="java.util.ArrayList" 
%><%@ page import="org.jsoup.Jsoup" 
%><%@ page import="org.jsoup.nodes.Document" 
%><%@ page import="org.jsoup.select.Elements" 
%><%@ page import="org.jsoup.nodes.Element" 
%><% 
ArrayList list = new ArrayList();
String closing_type_incmstmts = request.getParameter("closing_type_incmstmts")==null?"110":request.getParameter("closing_type_incmstmts");
String url = "http://asp1.krx.co.kr/IR/basic/012630/user12.jsp?closing_type_incmstmts="+closing_type_incmstmts;
String html = new com.rbipt.URLReader(url).read();
int tableIdx = 3;
int trIdx = 3;

Document doc = Jsoup.parse(html);
Elements tables = doc.getElementsByTag("table");
Element table = tables.get(tableIdx);
Elements trs = table.getElementsByTag("tr");
Iterator<Element> itTrs = trs.iterator();
for (int i=0; itTrs.hasNext(); i++){
	Element tr = itTrs.next();
	if (i>trIdx){
		Elements tds = tr.getElementsByTag("td");
		Iterator <Element> itTds = tds.iterator();
		int tdCnt = tds.size();
		String [] arrTd = new String [tdCnt];
		for (int j=0; itTds.hasNext(); j++){
			Element td = itTds.next();		
			arrTd[j] = td.text();
		}
		if (arrTd.length > 0 && arrTd[0] != null && !arrTd[0].equals("")) list.add(arrTd);
	}
}
%>
<!DOCTYPE html>
<html lang="ko">
<head>
	<jsp:include page="/front/inc/top.jsp"></jsp:include>
	<script>
	function reload (closing_type_incmstmts) {
		location.href = "/front/05ir/IR_03_03.jsp?closing_type_incmstmts="+closing_type_incmstmts;
	}
	</script>	
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
							<li class="on"><a href="/front/05ir/IR_03.jsp"><span>재무제표</span></a></li>
							<li><a href="/front/05ir/IR_04.jsp?limit=300"><span>신용등급</span></a></li>
						</ul>
					</div>

					<h2 class="hidden">재무제표</h2>
					<div class="tab_mn2">
						<ul>
							<li><a href="/front/05ir/IR_03.jsp">주요재무제표</a></li>
							<li><a href="/front/05ir/IR_03_02.jsp">대차대조표</a></li>
							<li class="on"><a href="/front/05ir/IR_03_03.jsp">손익계산서</a></li>
						</ul>
					</div>

					<h3 class="hidden">손익계산서</h3>
					<div class="ir_manage">
						<div class="box_clear pb7">
							<div class="fl"><h4 class="h2_tit pt0">결산구분</h4></div>
							<div class="fl manage_select">
								<select class="box_select" name="closing_type_blncsheet" onchange="reload(this.value)">
									<option value="110" <%if (closing_type_incmstmts.equals("110")){%>selected="selected"<%}%>>결산</option>
									<option value="210" <%if (closing_type_incmstmts.equals("210")){%>selected="selected"<%}%>>반기</option>
									<option value="310" <%if (closing_type_incmstmts.equals("310")){%>selected="selected"<%}%>>연결</option>
									<option value="510" <%if (closing_type_incmstmts.equals("510")){%>selected="selected"<%}%>>1/4 분기</option>
									<option value="610" <%if (closing_type_incmstmts.equals("610")){%>selected="selected"<%}%>>3/4 분기</option>
								</select>
							</div>
							<div class="fr font_ltgray mt42 mt50">(단위:금액-백만원 | 비ㆍ율-%)</div>
						</div>

						<div class="tbl_red tbl_accounts mt0">
							<table summary="재무 항목별 2011년 12, 2012년 12, 2013년 12 금액, 구성비, 증감률 비교">
								<caption>손익계산서</caption>
								<colgroup>
									<col style="width:20.5%" />
									<col style="width:11.2%" />
									<col style="width:7.5%" />
									<col style="width:7.8%" />
									<col style="width:11.2%" />
									<col style="width:7.5%" />
									<col style="width:7.8%" />
									<col style="width:11.2%" />
									<col style="width:7.5%" />
									<col style="width:7.8%" />
								</colgroup>
								<thead>
									<tr>
										<th scope="col" rowspan="2">재무 항목</th>
										<th scope="colgroup" colspan="3">2011년 12</th>
										<th scope="colgroup" colspan="3">2012년 12</th>
										<th scope="colgroup" colspan="3">2013년 12</th>
									</tr>
									<tr>
										<th scope="col" class="bd">금액</th>
										<th scope="col">구성비</th>
										<th scope="col">증감률</th>
										<th scope="col">금액</th>
										<th scope="col">구성비</th>
										<th scope="col">증감률</th>
										<th scope="col">금액</th>
										<th scope="col">구성비</th>
										<th scope="col">증감률</th>
									</tr>
								</thead>
								<tbody>
								<% for (int i=0; i<list.size(); i++) { %>
									<tr>
									<%
									String[] tmp = (String[]) list.get(i);
									for (int j=0; j<tmp.length; j++) {
										out.println ("<td>" + tmp[j] + "</td>");
									}
									%>
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