<%@ page language="java" pageEncoding="UTF-8"%>
<%
	String curUrl = request.getRequestURI();
	int menuOnIdx = 0;
	
	if 			(curUrl.indexOf("quality_manage01.jsp")>0
			|| curUrl.indexOf("housing_biz.jsp")>0
			) menuOnIdx = 0;
	
	else if 	(curUrl.indexOf("quality_manage02_01.jsp")>0
			|| curUrl.indexOf("quality_manage02_02")>0
			) menuOnIdx = 1; 
	
	else if 	(curUrl.indexOf("quality_manage03_01.jsp")>0
			|| curUrl.indexOf("quality_manage03_02.jsp")>0
			|| curUrl.indexOf("quality_manage03_03.jsp")>0
			) menuOnIdx = 2; 
	
	else if 	(curUrl.indexOf("quality_manage04.jsp")>0
			|| curUrl.indexOf("plant_biz.jsp")>0
			) menuOnIdx = 3; 

	else if 	(curUrl.indexOf("contribute_01.jsp")>0
			|| curUrl.indexOf("contribute_02.jsp")>0
			|| curUrl.indexOf("contribute_02.jsp")>0
			|| curUrl.indexOf("contribute_03_")>0
			) menuOnIdx = 4; 

%>
			<div class="lnb">
				<h1>지속가능경영</h1>
				<span class="engTitle">Sustainability</span>
				<ul>
					<li <% if (menuOnIdx == 0) { %>class="on"<%}%>><a href="/front/04sustainability/quality_manage01.jsp">윤리경영</a></li>
					<li <% if (menuOnIdx == 1) { %>class="on"<%}%>><a href="/front/04sustainability/quality_manage02_01.jsp">환경경영</a></li>
					<li <% if (menuOnIdx == 2) { %>class="on"<%}%>><a href="/front/04sustainability/quality_manage03_01.jsp">안전경영</a></li>
					<li <% if (menuOnIdx == 3) { %>class="on"<%}%>><a href="/front/04sustainability/quality_manage04.jsp">상생경영</a></li>
					<li <% if (menuOnIdx == 4) { %>class="on"<%}%>><a href="/front/04sustainability/contribute_01.jsp">사회공헌</a></li>
				</ul>
			</div>