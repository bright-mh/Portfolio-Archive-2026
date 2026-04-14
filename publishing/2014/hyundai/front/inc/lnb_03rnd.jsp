<%@ page language="java" pageEncoding="UTF-8"%>
<%
	String curUrl = request.getRequestURI();
	int menuOnIdx = 0;
	
	if 			(curUrl.indexOf("tech_info")>0
			|| curUrl.indexOf("tech_history")>0
			|| curUrl.indexOf("tech_organization")>0
			) menuOnIdx = 0;
	
	else if 	(curUrl.indexOf("research")>0
			|| curUrl.indexOf("experiment")>0
			) menuOnIdx = 1; 
	
	else if 	(curUrl.indexOf("tech_data")>0
			) menuOnIdx = 2; 
	
	else if 	(curUrl.indexOf("new_techbuild")>0
			|| curUrl.indexOf("knowledge_01")>0
			) menuOnIdx = 3; 


%>
			<div class="lnb">
				<h1>기술혁신</h1>
				<span class="engTitle">R&amp;D</span>
				<ul>
					<li <% if (menuOnIdx == 0) { %>class="on"<%}%>><a href="/front/03rnd/tech_info.jsp">기술연구소</a></li>
					<li <% if (menuOnIdx == 1) { %>class="on"<%}%>><a href="/front/03rnd/research_01.jsp">연구분야</a></li>
					<li <% if (menuOnIdx == 2) { %>class="on"<%}%>><a href="/front/03rnd/tech_data.jsp">논문자료</a></li>
					<li <% if (menuOnIdx == 3) { %>class="on"<%}%>><a href="/front/03rnd/new_techbuild.jsp">지적재산권</a></li>
				</ul>
			</div>