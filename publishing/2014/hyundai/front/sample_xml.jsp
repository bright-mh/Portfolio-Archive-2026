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

String url = "http://asp1.krx.co.kr/anylogic/process//widget/dcg_mngdiscls_01.xml?isu_cd=KR7012630000&fr_trd_dd=20140330&to_trd_dd=20140701&curPage=1&pageSize=10"; 
String xml = new URLReader(url).read("euc-kr");
xml = xml.trim();

DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
DocumentBuilder db = dbf.newDocumentBuilder();

DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
DocumentBuilder builder = factory.newDocumentBuilder();
InputStream istream = new ByteArrayInputStream(xml.getBytes("utf-8"));

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
<table>
<% 
for ( int i=0; i<list.size(); i++) { 
%>
	<tr>
	<%
	HashMap data = (HashMap)list.get(i);
	Iterator it = data.keySet().iterator();
	while (it.hasNext()) {
		out.println ("<td>" + data.get((String)it.next()) + "</td>");
	}
	%>
	</tr>
<% } %>
</table>