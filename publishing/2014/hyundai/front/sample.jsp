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
String url = "http://asp1.krx.co.kr/IR/basic/012630/user11.jsp?closing_type_majfsbsis=110";
int tableIdx = 3;
int trIdx = 3;

Document doc = Jsoup.connect(url).get();
Elements tables = doc.getElementsByTag("table");
Element table = tables.get(tableIdx);
Elements trs = table.getElementsByTag("tr");
Iterator<Element> itTrs = trs.iterator();
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
		if (arrTd.length > 0 && arrTd[0] != null && !arrTd[0].equals("")) list.add(arrTd);
	}
}
%>
<table>
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
</table>