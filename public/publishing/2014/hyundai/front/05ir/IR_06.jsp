<%@ page language="java" pageEncoding="UTF-8"%>
<%@ page import="com.rbipt.RB" %>
<%@ page import="com.rbipt.URLReader" %>
<%@ page import="java.util.HashMap" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="java.util.Iterator" %>
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
String pg = request.getParameter("pg")==null?"1":(String) request.getParameter("pg");

String today = RB.today();
String startDate = RB.monthAdd(-3);
String endDate = RB.today2();
startDate=startDate.replace("-","");
endDate=endDate.replace("-","");

String url = "http://asp1.krx.co.kr/anylogic/process//widget/dcg_mngdiscls_01.xml?isu_cd=KR7012630000&fr_trd_dd="+startDate+"&to_trd_dd="+endDate+"&curPage="+pg+"&pageSize=10"; 
String xml = new URLReader(url).read("euc-kr");
xml = xml.trim();

DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
DocumentBuilder db = dbf.newDocumentBuilder();

DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
DocumentBuilder builder = factory.newDocumentBuilder();
InputStream istream = new ByteArrayInputStream(xml.getBytes("utf-8"));

int tot_cnt = 0;

ArrayList<HashMap<String,Object>> list = new ArrayList<HashMap<String,Object>>();
try{
	Document doc = builder.parse(istream);
	Element order = doc.getDocumentElement();
	NodeList nodeList = order.getElementsByTagName("result");
	for (int i = 0; i < nodeList.getLength(); i++){
		HashMap <String,Object> tmp = new HashMap<String,Object>();
		Node node = nodeList.item(i);
		Element ele = (Element)node;
		
		NodeList nlTot = ele.getElementsByTagName("tot_cnt");
		Element eleTot = (Element)nlTot.item(0);
		Node nodeTot = eleTot.getFirstChild();
		tmp.put("tot_cnt", nodeTot.getNodeValue());
		if (i==0) {
			tot_cnt = Integer.parseInt(nodeTot.getNodeValue());
		}

		NodeList nlRn = ele.getElementsByTagName("rn");
		Element eleRn = (Element)nlRn.item(0);
		Node nodeRn = eleRn.getFirstChild();
		tmp.put("rn", nodeRn.getNodeValue());

		NodeList nlDisclsPublDdtm = ele.getElementsByTagName("discls_publ_ddtm");
		Element eleDisclsPublDdtm = (Element)nlDisclsPublDdtm.item(0);
		Node nodeDisclsPublDdtm = eleDisclsPublDdtm.getFirstChild();
		tmp.put("discls_publ_ddtm", nodeDisclsPublDdtm.getNodeValue());

		NodeList nlFormKorNm = ele.getElementsByTagName("form_kor_nm");
		Element eleFormKorNm = (Element)nlFormKorNm.item(0);
		Node nodeFormKorNm = eleFormKorNm.getFirstChild();
		tmp.put("form_kor_nm", nodeFormKorNm.getNodeValue());

		NodeList nlSubmitOblgNm = ele.getElementsByTagName("submit_oblg_nm");
		Element eleSubmitOblgNm = (Element)nlSubmitOblgNm.item(0);
		Node nodeSubmitOblgNm = eleSubmitOblgNm.getFirstChild();
		tmp.put("submit_oblg_nm", nodeSubmitOblgNm.getNodeValue());

		NodeList nlAcptNo = ele.getElementsByTagName("acpt_no");
		Element eleAcptNo = (Element)nlAcptNo.item(0);
		Node nodeAcptNo = eleAcptNo.getFirstChild();
		tmp.put("acpt_no", nodeAcptNo.getNodeValue());
		list.add(tmp);
	}
	/* */
}catch (Exception e){
	out.println (e);
}
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
						<li class="gt last"><a href="/front/05ir/IR_06.jsp">공시사항</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1 class="pb15">공시사항</h1>
					<div class="ir_manage pb0">
						<div class="box_clear pb8">
							<div class="fl"><h2 class="h2_tit mt0 pt0">경영공시 상세내용</h2></div>
							<div class="fr font_red mt25">조회기간 : <%=RB.monthAddkr(-3)%> ~ <%=RB.today2kr() %></div>
						</div>

						<div class="tbl_red mt0">
							<table summary="시간별 공시제목, 제출의무지">
								<caption>경영공시 상세내용</caption>
								<colgroup>
									<col style="width:10%" />
									<col style="width:20%" />
									<col style="width:35%" />
									<col style="width:35%" />
								</colgroup>
								<thead>
									<tr>
										<th scope="col">번호</th>
										<th scope="col">시간</th>
										<th scope="col">공시제목</th>
										<th scope="col">제출의무지</th>
									</tr>
								</thead>
								<tbody>
									<% for (int i=1; i < list.size(); i++){
										HashMap h = list.get(i);
										%>
									<tr>
										<td><%=h.get("rn") %></td>
										<td><%=h.get("discls_publ_ddtm") %></td>
										<td class="txtL"><a href="http://kind.krx.co.kr/common/disclsviewer.do?method=search&acptno=<%=h.get("acpt_no") %>" target="_blank" onclick="event.preventDefault();window.open(this.href,'popup','statusbar=no,menubar=no,scrollbars=yes,resizable=yes, width=900, height=900');"><%=h.get("form_kor_nm") %></a></td>
										<td class="txtL"><%=h.get("submit_oblg_nm") %></td>
									</tr>
									<% } %>
								</tbody>
							</table>
						</div>

						<div class="pagenate">
							<div class="paging">
								<ol>
									<% for (int i=0; i < ((tot_cnt-1)/10)+1; i++) { %>
									<li><a href="/front/05ir/IR_06.jsp?pg=<%=i+1%>" <% if ( Integer.parseInt(pg) == i+1) { %>class="on"<%}%>><%=i+1%></a></li>
									<% } %>
								</ol>
							</div>
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