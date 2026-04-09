<%@ page language="java" pageEncoding="UTF-8" %>
<%
    String curUrl = request.getRequestURI();
    int menuOnIdx = 0;
    
    if(curUrl.indexOf("tech_info.jsp")>0) menuOnIdx = 0;
    else if(curUrl.indexOf("research_01.jsp")>0 || curUrl.indexOf("research_02.jsp")>0 ||curUrl.indexOf("research_03.jsp")>0||curUrl.indexOf("research_04.jsp")>0) menuOnIdx = 1; 
    else if(curUrl.indexOf("new_techbuild.jsp")>0||curUrl.indexOf("knowledge_01.jsp")>0) menuOnIdx = 2;
%>

			<div class="lnb">
				<h1>R&amp;D</h1>
				<ul>
					<li <% if (menuOnIdx == 0) { %>class="on"<%}%>><a href="/front/en/07rnd/tech_info.jsp">R&amp;D CENTER</a></li>
					<li <% if (menuOnIdx == 1) { %>class="on"<%}%>><a href="/front/en/07rnd/research_01.jsp">FIELD OF RESEARCH</a></li>
					<li <% if (menuOnIdx == 2) { %>class="on"<%}%>><a href="/front/en/07rnd/new_techbuild.jsp">INTELLECTUAL PROPERTY</a></li>
				</ul>
			</div>