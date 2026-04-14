<%@ page language="java" pageEncoding="UTF-8"%><%
	String curUrl = request.getRequestURI();
	int menuOnIdx = 0;
	
	if 			(curUrl.indexOf("right_person.jsp")>0
			) menuOnIdx = 0;
	
	else if 	(curUrl.indexOf("affair.jsp")>0
			) menuOnIdx = 1; 
	
%>
			<div class="lnb">
				<h1>인재채용</h1>
				<span class="engTitle">Recruit</span>
				<ul>
					<li <% if (menuOnIdx == 0) { %>class="on"<%}%>><a href="/front/07recruit/right_person.jsp">인재상</a></li>
					<li <% if (menuOnIdx == 1) { %>class="on"<%}%>><a href="/front/07recruit/affair.jsp">인사/복지제도</a></li>
					<li <% if (menuOnIdx == 2) { %>class="on"<%}%>><a href="https://recruit.hyundai-dvp.com/front/common/main.dev" target="_blank" title="새 창 열림">채용정보</a></li>
				</ul>
			</div>