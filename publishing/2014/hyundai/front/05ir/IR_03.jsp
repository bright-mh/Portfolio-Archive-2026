<%@ page language="java" pageEncoding="UTF-8"
%><%@ page import="com.rbipt.RB" 
%><%@ page import="com.rbipt.URLReader" 
%><%@ page import="java.util.Iterator" 
%><%@ page import="java.util.ArrayList" 
%><%@ page import="org.jsoup.Jsoup" 
%><%@ page import="org.jsoup.nodes.Document" 
%><%@ page import="org.jsoup.select.Elements" 
%><%@ page import="org.jsoup.nodes.Element" 
%><% 

ArrayList list = new ArrayList();

String closingTypeMajfsbsis = request.getParameter("closing_type_majfsbsis")==null?"110":request.getParameter("closing_type_majfsbsis");
String url = "http://asp1.krx.co.kr/IR/basic/012630/user10.jsp?closing_type_majfsbsis="+closingTypeMajfsbsis;
String html = new com.rbipt.URLReader(url).read();
int tableIdx = 3;
int trIdx = 2;

Document doc = Jsoup.parse(html);
Elements tables = doc.getElementsByTag("table");
Element table = tables.get(tableIdx);
Elements trs = table.getElementsByTag("tr");
Iterator<Element> itTrs = trs.iterator();
try {
	for (int i=0; itTrs.hasNext();i++){
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
			list.add(arrTd);
		}
	}
}catch (Exception e){
	
}
%>
<!DOCTYPE html>
<html lang="ko">
<head>
	<jsp:include page="/front/inc/top.jsp"></jsp:include>
	<script>
	function reload (closing_type_majfsbsis) {
		location.href = "/front/05ir/IR_03.jsp?closing_type_majfsbsis="+closing_type_majfsbsis;
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
							<li class="on"><a href="/front/05ir/IR_03.jsp">주요재무제표</a></li>
							<li><a href="/front/05ir/IR_03_02.jsp">대차대조표</a></li>
							<li><a href="/front/05ir/IR_03_03.jsp">손익계산서</a></li>
						</ul>
					</div>

					<h3 class="hidden">주요재무제표</h3>
					<div class="ir_manage">
						<div class="box_clear pb7">
							<div class="fl"><h4 class="h2_tit pt0">결산구분</h4> </div>
							<div class="fl manage_select">
								<select class="box_select" name="closing_type_majfsbsis" onchange="reload(this.value)">
									<option value="110" <%if (closingTypeMajfsbsis.equals("110")){%>selected="selected"<%}%>>결산</option>
									<option value="210" <%if (closingTypeMajfsbsis.equals("210")){%>selected="selected"<%}%>>반기</option>
									<option value="310" <%if (closingTypeMajfsbsis.equals("310")){%>selected="selected"<%}%>>연결</option>
									<option value="510" <%if (closingTypeMajfsbsis.equals("510")){%>selected="selected"<%}%>>1/4 분기</option>
									<option value="610" <%if (closingTypeMajfsbsis.equals("610")){%>selected="selected"<%}%>>3/4 분기</option>
								</select>
							</div>
							<div class="fr font_ltgray mt50">(단위:백만원)</div>
						</div>

						<div class="tbl_red mt0">
							<table summary="2011 ~ 2013년도의 항목에 관한 대차대조표">
								<caption>대차대조표</caption>
								<colgroup>
									<col style="width:28%" />
									<col style="width:18%" />
									<col style="width:18%" />
									<col style="width:18%" />
									<col style="width:18%" />
								</colgroup>
								<thead>
								<tr>
									<th scope="col">결산</th>
									<th scope="col">항목</th>
									<th scope="col">2011년</th>
									<th scope="col">2012년</th>
									<th scope="col">2013년</th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<th scope="row" rowspan="3">대차대조표</th>
									<td class="bdTn">자산총계</td>
									<td class="bdTn"><%=((String[])list.get(0))[2]%></td>
									<td class="bdTn"><%=((String[])list.get(0))[3]%></td>
									<td class="bdTn"><%=((String[])list.get(0))[4]%></td>
								</tr>
								<tr>
									<td>부채총계</td>
									<td><%=((String[])list.get(1))[1]%></td>
									<td><%=((String[])list.get(1))[2]%></td>
									<td><%=((String[])list.get(1))[3]%></td>
								</tr>
								<tr>
									<td>자본총계</td>
									<td><%=((String[])list.get(2))[1]%></td>
									<td><%=((String[])list.get(2))[2]%></td>
									<td><%=((String[])list.get(2))[3]%></td>
								</tr>
								</tbody>
							</table>
						</div>

						<div class="finance_graph mt30">
							<ul class="example">
								<li><em class="bar1">Bar 1</em> 2011.12</li>
								<li><em class="bar2">Bar 2</em> 2012.12</li>
								<li><em class="bar3">Bar 3</em> 2013.12</li>
							</ul>
							<table class="graph" summary="단위별 자산총계, 부채총계, 자본총계">
								<caption>대차대조표 그래프</caption>
								<colgroup>
									<col style="width:78px" />
									<col style="width:217px" />
									<col style="width:217px" />
									<col style="width:217px" />
								</colgroup>
								<tfoot>
									<tr>
										<th scope="col"></th>
										<th scope="col">자산총계</th>
										<th scope="col">부채총계</th>
										<th scope="col">자본총계</th>
									</tr>
								</tfoot>
								<tbody>
									<tr>
										<th scope="row"><em>6,000,000</em></th>
										<td></td>
										<td></td>
										<td></td>
									</tr>
									<tr>
										<th scope="row"><em>4,000,000</em></th>
										<td></td>
										<td></td>
										<td></td>
									</tr>
									<tr>
										<th scope="row"><em>2,000,000</em></th>
										<td>
											<div class="rel">
												<ul class="bar">
													<li class="bar1" style="height:<%=RB.toNum(((String[])list.get(0))[2])*100/6000000>0?153*(RB.toNum(((String[])list.get(0))[2])*100/6000000)/100:0%>px;">Bar 1</li>
													<li class="bar2" style="height:<%=RB.toNum(((String[])list.get(0))[3])*100/6000000>0?153*(RB.toNum(((String[])list.get(0))[3])*100/6000000)/100:0%>px;">Bar 2</li>
													<li class="bar3" style="height:<%=RB.toNum(((String[])list.get(0))[4])*100/6000000>0?153*(RB.toNum(((String[])list.get(0))[4])*100/6000000)/100:0%>px;">Bar 3</li>
												</ul>
											</div>
										</td>
										<td>
											<div class="rel">
												<ul class="bar">
													<li class="bar1" style="height:<%=RB.toNum(((String[])list.get(1))[1])*100/6000000>0?153*(RB.toNum(((String[])list.get(1))[1])*100/6000000)/100:0%>px;">Bar 1</li>
													<li class="bar2" style="height:<%=RB.toNum(((String[])list.get(1))[2])*100/6000000>0?153*(RB.toNum(((String[])list.get(1))[2])*100/6000000)/100:0%>px;">Bar 2</li>
													<li class="bar3" style="height:<%=RB.toNum(((String[])list.get(1))[3])*100/6000000>0?153*(RB.toNum(((String[])list.get(1))[3])*100/6000000)/100:0%>px;">Bar 3</li>
												</ul>
											</div>
										</td>
										<td>
											<div class="rel">
												<ul class="bar">
													<li class="bar1" style="height:<%=RB.toNum(((String[])list.get(2))[1])*100/6000000>0?153*(RB.toNum(((String[])list.get(2))[1])*100/6000000)/100:0%>px;">Bar 1</li>
													<li class="bar2" style="height:<%=RB.toNum(((String[])list.get(2))[2])*100/6000000>0?153*(RB.toNum(((String[])list.get(2))[2])*100/6000000)/100:0%>px;">Bar 2</li>
													<li class="bar3" style="height:<%=RB.toNum(((String[])list.get(2))[3])*100/6000000>0?153*(RB.toNum(((String[])list.get(2))[3])*100/6000000)/100:0%>px;">Bar 3</li>
												</ul>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						<div class="box_clear mt68">
							<div class="fr font_ltgray">(단위:백만원)</div>
						</div>
						<div class="tbl_red">
							<table summary="2011 ~ 2013년도의 항목에 관한 손익계산서 ">
								<caption>손익계산서</caption>
								<colgroup>
									<col style="width:28%" />
									<col style="width:18%" />
									<col style="width:18%" />
									<col style="width:18%" />
									<col style="width:18%" />
								</colgroup>
								<thead>
									<tr>
										<th scope="col">결산</th>
										<th scope="col">항목</th>
										<th scope="col">2011년</th>
										<th scope="col">2012년</th>
										<th scope="col">2013년</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th scope="row" rowspan="3">손익계산서</th>
										<td class="bdTn">매출액</td>
										<td class="bdTn"><%=((String[])list.get(3))[2]%></td>
										<td class="bdTn"><%=((String[])list.get(3))[3]%></td>
										<td class="bdTn"><%=((String[])list.get(3))[4]%></td>
									</tr>
									<tr>
										<td>매출원가</td>
										<td><%=((String[])list.get(4))[1]%></td>
										<td><%=((String[])list.get(4))[2]%></td>
										<td><%=((String[])list.get(4))[3]%></td>
									</tr>
									<tr>
										<td>당기순이익</td>
										<td><%=((String[])list.get(5))[1]%></td>
										<td><%=((String[])list.get(5))[2]%></td>
										<td><%=((String[])list.get(5))[3]%></td>
									</tr>
								</tbody>
							</table>
						</div>

						<div class="finance_graph mt30">
							<ul class="example">
								<li><em class="bar1">Bar 1</em> 2011.12</li>
								<li><em class="bar2">Bar 2</em> 2012.12</li>
								<li><em class="bar3">Bar 3</em> 2013.12</li>
							</ul>
							<table class="graph" summary="단위별 매출액, 매출원가, 당기 순이익">
								<caption>손익계산서 그래프</caption>
								<colgroup>
									<col style="width:78px" />
									<col style="width:217px" />
									<col style="width:217px" />
									<col style="width:217px" />
								</colgroup>
								<tfoot>
									<tr>
										<th scope="col"></th>
										<th scope="col">매출액</th>
										<th scope="col">매출원가</th>
										<th scope="col">당기 순이익</th>
									</tr>
								</tfoot>
								<tbody>
									<tr>
										<th scope="row"><em>6,000,000</em></th>
										<td></td>
										<td></td>
										<td></td>
									</tr>
									<tr>
										<th scope="row"><em>4,000,000</em></th>
										<td></td>
										<td></td>
										<td></td>
									</tr>
									<tr>
										<th scope="row"><em>2,000,000</em></th>
										<td>
											<div class="rel">
												<ul class="bar">
													<li class="bar1" style="height:<%=RB.toNum(((String[])list.get(3))[2])*100/6000000>0?153*(RB.toNum(((String[])list.get(3))[2])*100/6000000)/100:0%>px;">Bar 1</li>
													<li class="bar2" style="height:<%=RB.toNum(((String[])list.get(3))[3])*100/6000000>0?153*(RB.toNum(((String[])list.get(3))[3])*100/6000000)/100:0%>px;">Bar 2</li>
													<li class="bar3" style="height:<%=RB.toNum(((String[])list.get(3))[4])*100/6000000>0?153*(RB.toNum(((String[])list.get(3))[4])*100/6000000)/100:0%>px;">Bar 3</li>
												</ul>
											</div>
										</td>
										<td>
											<div class="rel">
												<ul class="bar">
													<li class="bar1" style="height:<%=RB.toNum(((String[])list.get(4))[1])*100/6000000>0?153*(RB.toNum(((String[])list.get(4))[1])*100/6000000)/100:0%>px;">Bar 1</li>
													<li class="bar2" style="height:<%=RB.toNum(((String[])list.get(4))[2])*100/6000000>0?153*(RB.toNum(((String[])list.get(4))[2])*100/6000000)/100:0%>px;">Bar 2</li>
													<li class="bar3" style="height:<%=RB.toNum(((String[])list.get(4))[3])*100/6000000>0?153*(RB.toNum(((String[])list.get(4))[3])*100/6000000)/100:0%>px;">Bar 3</li>
												</ul>
											</div>
										</td>
										<td>
											<div class="rel">
												<ul class="bar">
													<li class="bar1" style="height:<%=RB.toNum(((String[])list.get(5))[1])*100/6000000>0?153*(RB.toNum(((String[])list.get(5))[1])*100/6000000)/100:0%>px;">Bar 1</li>
													<li class="bar2" style="height:<%=RB.toNum(((String[])list.get(5))[2])*100/6000000>0?153*(RB.toNum(((String[])list.get(5))[2])*100/6000000)/100:0%>px;">Bar 2</li>
													<li class="bar3" style="height:<%=RB.toNum(((String[])list.get(5))[3])*100/6000000>0?153*(RB.toNum(((String[])list.get(5))[3])*100/6000000)/100:0%>px;">Bar 3</li>
												</ul>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						<div class="mt70 txtR">
							<a href="data/20140430.pdf" target="_blank" title="새 창 열림" class="btn_down">재무상태표(2013.12.31 현재)</a>
							<a href="data/20130319.pdf" target="_blank" title="새 창 열림" class="btn_down">재무상태표(2012.12.31 현재)</a>
							<a href="data/20120323.pdf" target="_blank" title="새 창 열림" class="btn_down">재무상태표(2011.12.31 현재)</a>
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