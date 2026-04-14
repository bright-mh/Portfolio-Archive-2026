<%@ page language="java" pageEncoding="UTF-8"%><%
	String curUrl = request.getRequestURI();
	int menuOnIdx = 0;
	
	if 			(curUrl.indexOf("IR_01")>0
			|| curUrl.indexOf("IR_02")>0
			|| curUrl.indexOf("IR_03")>0
			) menuOnIdx = 0;
	
	else if 	(
			 curUrl.indexOf("IR_04")>0
			) menuOnIdx = 1; 
	
	else if 	(curUrl.indexOf("IR_05")>0
			) menuOnIdx = 1; 
	
	else if 	(curUrl.indexOf("IR_06")>0
			) menuOnIdx = 2; 

	else if 	(curUrl.indexOf("IR_07")>0
			|| curUrl.indexOf("IR_08")>0
			) menuOnIdx = 2; 

%>
			<div class="lnb">
				<h1>IR</h1>
				<!-- <h2>IR</h2> -->
				<ul>
					<li <% if (menuOnIdx == 0) { %>class="on"<%}%>><a href="/front/en/03ir/IR_01.jsp">FINANCIAL STATEMENT</a></li>
					<li <% if (menuOnIdx == 1) { %>class="on"<%}%>><a href="/front/en/03ir/IR_04.jsp">IR MATERIAL</a></li>
					<li <% if (menuOnIdx == 2) { %>class="on"<%}%>><a href="/front/en/03ir/IR_06.jsp">CREDIT RATING</a></li>
				</ul>
			</div>