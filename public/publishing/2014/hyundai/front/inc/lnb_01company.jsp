<%@ page language="java" pageEncoding="UTF-8"%>
<%
	String curUrl = request.getRequestURI();
	int menuOnIdx = 0;
	if (curUrl.indexOf("ceo_01.jsp")>0) menuOnIdx = 0;
	else if (curUrl.indexOf("vision2016_01.jsp")>0
			|| curUrl.indexOf("vision2016_03.jsp")>0) menuOnIdx = 1; 
	else if (curUrl.indexOf("history.jsp")>0) menuOnIdx = 2; 
	else if (curUrl.indexOf("group.jsp")>0) menuOnIdx = 3; 
%>
			<div class="lnb">
				<h1>회사소개</h1>
				<span class="engTitle">Company</span>
				<ul>
					<li <%if (menuOnIdx == 0) { %>class="on" <%}%> ><a href="/front/01company/ceo_01.jsp">CEO 인사말</a></li>
					<li <%if (menuOnIdx == 1) { %>class="on" <%}%> ><a href="/front/01company/vision2016_01.jsp">VISION</a></li>
					<li <%if (menuOnIdx == 2) { %>class="on" <%}%> ><a href="/front/01company/history.jsp">주요연혁</a></li>
					<li <%if (menuOnIdx == 3) { %>class="on" <%}%> ><a href="/front/01company/group.jsp?idx=10">계열사 소개</a></li>
				</ul>
			</div>