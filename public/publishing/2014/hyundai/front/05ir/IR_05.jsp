<%@ page language="java" pageEncoding="UTF-8"%>
<%@ page import="com.rbipt.RB" %>
<%@ page import="com.rbipt.URLReader" %>
<%@ page import="java.text.DecimalFormat" %>
<%@ page import="java.util.HashMap" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="java.util.StringTokenizer" %>
<%@ page import="java.io.File" %>
<%@ page import="java.io.InputStream" %>
<%@ page import="java.io.ByteArrayInputStream" %>
<%@ page import="javax.xml.parsers.DocumentBuilder" %>
<%@ page import="javax.xml.parsers.DocumentBuilderFactory" %>
<%@ page import="org.w3c.dom.Document" %>
<%@ page import="org.w3c.dom.Element" %>
<%@ page import="org.w3c.dom.Node" %>
<%@ page import="org.w3c.dom.NodeList" %>
<%@ page import="org.w3c.dom.NamedNodeMap" %>
<% 
	DecimalFormat df = new DecimalFormat("#,##0");
	String url = "http://asp1.krx.co.kr/servlet/krx.asp.XMLSiseEng?code=012630"; 
	String xml = new URLReader(url).read();
	xml = xml.trim();
	
	DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
	DocumentBuilder db = dbf.newDocumentBuilder();
	
	DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
	DocumentBuilder builder = factory.newDocumentBuilder();
	InputStream istream = new ByteArrayInputStream(xml.getBytes("utf-8"));
	HashMap<String,Object> mapNode = new HashMap<String,Object>();
	try{
		Document doc = builder.parse(istream);
		Element order = doc.getDocumentElement();
		
		NodeList nodeList = order.getElementsByTagName("TBL_StockInfo");
		Node node = nodeList.item(0);
		NamedNodeMap Attrs = node.getAttributes();
		for (int j = 0; j < Attrs.getLength(); j++){
			Node attr = Attrs.item(j);
			mapNode.put(attr.getNodeName(),attr.getNodeValue());
		}
		
	/* List 로 되어있는 예제
	ArrayList<HashMap<String,Object>> list = new ArrayList<HashMap<String,Object>>();
	for (int i = 0; i < nodeList.getLength(); i++){
		Node node = nodeList.item(i);
		NamedNodeMap Attrs = node.getAttributes();
		HashMap<String,Object> mapNode = new HashMap<String,Object>();
			for (int j = 0; j < Attrs.getLength(); j++){
				Node attr = Attrs.item(j);
				mapNode.put(attr.getNodeName(),attr.getNodeValue());
		}
			if (mapNode.get("time")!=null) list.add(mapNode);
	}
	*/
	}catch (Exception e){
		out.println (e);
	}
	
	int curJuka = RB.toNum((String)mapNode.get("CurJuka"));
	int Debi = RB.toNum((String)mapNode.get("Debi"));
	int PrevJuka = RB.toNum((String)mapNode.get("PrevJuka"));
	int Volume = RB.toNum((String)mapNode.get("Volume"));
	//int Money = RB.toNum((String)mapNode.get("Money"));
	int StartJuka = RB.toNum((String)mapNode.get("StartJuka"));
	int HighJuka = RB.toNum((String)mapNode.get("HighJuka"));
	int LowJuka = RB.toNum((String)mapNode.get("LowJuka"));
	int High52 = RB.toNum((String)mapNode.get("High52"));
	int Low52 = RB.toNum((String)mapNode.get("Low52"));
	int UpJuka = RB.toNum((String)mapNode.get("UpJuka"));
	int DownJuka = RB.toNum((String)mapNode.get("DownJuka"));
	//int Per = RB.toNum((String)mapNode.get("Per"));
	int Amount = RB.toNum((String)mapNode.get("Amount"));
	int FaceJuka = RB.toNum((String)mapNode.get("FaceJuka"));
	
	int min=0;
	int max=0;
	ArrayList arrList = new ArrayList();
	url = "http://asp1.krx.co.kr/widget/basic/stc_bytmznprc_01_data.jsp?isu_cd=KR7012630000";
	String data = new URLReader(url).read();
	data = data.trim();
	StringTokenizer st = new StringTokenizer(data, "\n");
	for (int i=0; st.hasMoreTokens(); i++){
		String token = st.nextToken();
		StringTokenizer st2 = new StringTokenizer(token, "|");
		HashMap hData = new HashMap();
		for (int j=0; st2.hasMoreTokens(); j++){
			String elem = st2.nextToken();
			if (j==0) hData.put("time", elem);
			if (j==1) {
				if (i==0) min=Integer.parseInt(elem);
				if (Integer.parseInt(elem) > max) max = Integer.parseInt(elem);
				if (Integer.parseInt(elem) < min) min = Integer.parseInt(elem);
				hData.put("yesterday", elem);
			}
			if (j==3) {
				if (Integer.parseInt(elem) > max) max = Integer.parseInt(elem);
				if (Integer.parseInt(elem) < min) min = Integer.parseInt(elem);
				hData.put("negoprice", elem);
			}
		}
		arrList.add(hData);
	}
	min -= 50;
	max += 50;
%>

<!DOCTYPE html>
<html lang="ko">
<head>
	<jsp:include page="/front/inc/top.jsp"></jsp:include>
<script src="/front/js/highcharts.js"></script>	
<script>	
$(function () {
        $('#chart').highcharts({
            chart: {
                type: 'area'
            },
            title: {
                text: ' '
            },
            yAxis: {
            	min: <%=min%>,
            	max: <%=max%>,
            	title: {
					rotation: -90,					
                    text: '',
                    style: {
                       
					}
                }            	
            },
            xAxis: {
	           	tickWidth: 0,
				type: 'datetime',
				dateTimeLabelFormats: {hour: '%H:%M'}
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false
            }, 
            plotOptions: {
                line: {
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    marker: {
                        enabled: false
                    }
                }
            },            
            series: 
                [{
                    name: '현재가',
                    color: '#f8ada7',
                    type: 'line',
                    data: [
                           <% for (int i=0; i<arrList.size(); i++) {
                        	   Object objNum = ((HashMap<String,Object>)arrList.get(i)).get("negoprice");
                        	   Object objTime = ((HashMap<String,Object>)arrList.get(i)).get("time");
                        	   String num = (String)objNum;
                        	   String strTime = (String)objTime;
                        	   String strYear = strTime.substring(0,4);
                        	   String strMonth = strTime.substring(4,6);
                        	   String strDay = strTime.substring(6,8);
                        	   String strHour = strTime.substring(8,10);
                        	   String strMinute = strTime.substring(10,12);
                        	   
                        	   int intNum = RB.toNum(num==null?"0":num);
                           		out.println ("[Date.UTC("+strYear+","+strMonth+","+strDay+","+strHour+","+strMinute+"),"+intNum+" ],");
                           } %>
                           ]
               	},
                {
                    name: '전일종가',
                    type: 'line',
                    color: '#888888',
                    data: [
                           <% for (int i=0; i<arrList.size(); i++) {
                        	   Object objNum = ((HashMap<String,Object>)arrList.get(i)).get("yesterday");
                        	   Object objTime = ((HashMap<String,Object>)arrList.get(i)).get("time");
                        	   String num = (String)objNum;
                        	   String strTime = (String)objTime;
                        	   String strYear = strTime.substring(0,4);
                        	   String strMonth = strTime.substring(4,6);
                        	   String strDay = strTime.substring(6,8);
                        	   String strHour = strTime.substring(8,10);
                        	   String strMinute = strTime.substring(10,12);
                        	   
                        	   int intNum = RB.toNum(num==null?"0":num);
                           		out.println ("[Date.UTC("+strYear+","+strMonth+","+strDay+","+strHour+","+strMinute+"),"+intNum+" ],");
                           } %>
                           ]
               	}]
        });
    });
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
						<li class="gt last"><a href="/front/05ir/IR_05.jsp">주가정보</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1 class="pb15">주가정보</h1>
					<div class="ir_manage pb0">
						<h2 class="h2_tit mt0 pt0">주식 현재가</h2> <span class="font_ltgray ml10">종목코드 [012630]</span>

						<div class="stock_price">
							<div class="price"><%=df.format(curJuka) %></div>
							<ul class="diff">
								<li>전일대비 <span class="<%=(curJuka-PrevJuka>0)?"up":"down" %>"><i><%=(curJuka-PrevJuka>0)?"UP":"DOWN" %></i> <%=curJuka-PrevJuka%></span></li>
								<li>등락율 <span class="<%=(curJuka-PrevJuka>0)?"up":"down" %>"><i><%=(curJuka-PrevJuka>0)?"UP":"DOWN" %></i> <% float udr = (float)((((float)curJuka-(float)PrevJuka) * 100.0 )/ (float)PrevJuka) ; String sudr = String.format("%.2f",udr);  out.println (sudr);%></span></li>
							</ul>
						</div>

						<div class="tbl_red">
							<table summary="시가(원), 고가(원), 저가(원), 거래량(주)">
								<caption>주식 현재가</caption>
								<colgroup>
									<col style="width:25%" />
									<col style="width:25%" />
									<col style="width:25%" />
									<col style="width:25%" />
								</colgroup>
								<thead>
									<tr>
										<th scope="col">시가(원)</th>
										<th scope="col">고가(원)</th>
										<th scope="col">저가(원)</th>
										<th scope="col">거래량(주)</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td><%=df.format(StartJuka)%></td>
										<td><%=df.format(HighJuka)%></td>
										<td><%=df.format(LowJuka)%></td>
										<td><%=df.format(Volume)%></td>
									</tr>
								</tbody>
							</table>
						</div>
						
						<h2 class="h2_tit">시간대 별</h2>
						<div class="box_clear mt20">
							<div class="fr font_ltgray">전일 종가 (<%=df.format(PrevJuka)%>)</div>
						</div>
						<p id="chart" style="width:100%;"></p>
						<!-- <p><img src="/front/images/temp/temp_stock_graph.gif" alt="시간대별 주식 그래프"></p> -->
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