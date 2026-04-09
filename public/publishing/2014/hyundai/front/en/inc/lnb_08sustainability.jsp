<%@ page language="java" pageEncoding="UTF-8" %>
<%
    String curUrl = request.getRequestURI();
    int menuOnIdx = 0;
    
    if(curUrl.indexOf("quality_manage01.jsp")>0) menuOnIdx = 0;
    else if(curUrl.indexOf("quality_manage02_01.jsp")>0 || curUrl.indexOf("quality_manage02_02.jsp")>0 ) menuOnIdx = 1; 
    else if(curUrl.indexOf("quality_manage03_01.jsp")>0||curUrl.indexOf("quality_manage03_02.jsp")>0||curUrl.indexOf("quality_manage03_03.jsp")>0) menuOnIdx = 2;
    else if(curUrl.indexOf("quality_manage04.jsp")>0||curUrl.indexOf("knowledge_01.jsp")>0) menuOnIdx = 3;
    else if(curUrl.indexOf("contribute_01.jsp")>0||curUrl.indexOf("contribute_02.jsp")>0||curUrl.indexOf("contribute_03_01.jsp")>0) menuOnIdx = 4;
    else if(curUrl.indexOf("contribute_03_02.jsp")>0||curUrl.indexOf("contribute_03_03.jsp")>0||curUrl.indexOf("contribute_03_04.jsp")>0) menuOnIdx = 4;
    else if(curUrl.indexOf("contribute_03_04.jsp")>0||curUrl.indexOf("contribute_03_05.jsp")>0||curUrl.indexOf("contribute_03_06.jsp")>0) menuOnIdx = 4;
    else if(curUrl.indexOf("contribute_03_07.jsp")>0||curUrl.indexOf("contribute_03_08.jsp")>0||curUrl.indexOf("contribute_03_09.jsp")>0) menuOnIdx = 4;
%>
			
			<div class="lnb">
				<h1>SUSTAIN-<br />ABILITY</h1>
				<ul>
					<li <% if (menuOnIdx == 0) { %>class="on"<%}%>><a href="/front/en/08sustainability/quality_manage01.jsp">ETHICAL MANAGEMENT</a></li>
					<li <% if (menuOnIdx == 1) { %>class="on"<%}%>><a href="/front/en/08sustainability/quality_manage02_01.jsp">ENVIRONMENTAL MANAGEMENT</a></li>
					<li <% if (menuOnIdx == 2) { %>class="on"<%}%>><a href="/front/en/08sustainability/quality_manage03_01.jsp">SAFETY MANAGEMENT</a></li>
					<li <% if (menuOnIdx == 3) { %>class="on"<%}%>><a href="/front/en/08sustainability/quality_manage04.jsp">COEXISTENCE MANAGEMENT</a></li>
					<li <% if (menuOnIdx == 4) { %>class="on"<%}%>><a href="/front/en/08sustainability/contribute_01.jsp">SOCIAL CONTRIBUTION</a></li>
				</ul>
			</div>