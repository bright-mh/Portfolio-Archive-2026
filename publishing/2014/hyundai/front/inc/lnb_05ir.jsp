<%@ page language="java" pageEncoding="UTF-8"%><%
	String curUrl = request.getRequestURI();
	int menuOnIdx = 0;
	
	if 			(curUrl.indexOf("IR_01")>0
			|| curUrl.indexOf("IR_02")>0
			) menuOnIdx = 0;
	
	else if 	(curUrl.indexOf("IR_03")>0
			|| curUrl.indexOf("IR_04")>0
			) menuOnIdx = 1; 
	
	else if 	(curUrl.indexOf("IR_05")>0
			) menuOnIdx = 2; 
	
	else if 	(curUrl.indexOf("IR_06")>0
			) menuOnIdx = 3; 

	else if 	(curUrl.indexOf("IR_07")>0
			|| curUrl.indexOf("IR_08")>0
			) menuOnIdx = 4; 

%>
			<div class="lnb">
				<h1>투자정보</h1>
				<span class="engTitle">IR</span>
				<ul>
					<li <% if (menuOnIdx == 0) { %>class="on"<%}%>><a href="/front/05ir/IR_01.jsp">경영정보</a></li>
					<li <% if (menuOnIdx == 1) { %>class="on"<%}%>><a href="/front/05ir/IR_03.jsp">재무정보</a></li>
					<li <% if (menuOnIdx == 2) { %>class="on"<%}%>><a href="/front/05ir/IR_05.jsp">주가정보</a></li>
					<li <% if (menuOnIdx == 3) { %>class="on"<%}%>><a href="/front/05ir/IR_06.jsp">공시사항</a></li>
					<li <% if (menuOnIdx == 4) { %>class="on"<%}%>><a href="/front/05ir/IR_07.jsp">IR정보</a></li>
				</ul>
			</div>