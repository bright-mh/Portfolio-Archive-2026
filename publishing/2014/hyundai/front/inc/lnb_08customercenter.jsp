<%@ page language="java" pageEncoding="UTF-8"%><%
	String curUrl = request.getRequestURI();
	int menuOnIdx = 0;
	
	if 			(curUrl.indexOf("faq.jsp")>0
			) menuOnIdx = 0;
	
	else if 	(curUrl.indexOf("csCenter.jsp")>0
			|| curUrl.indexOf("csCenter_02.jsp")>0
			|| curUrl.indexOf("csCenter_03.jsp")>0
			) menuOnIdx = 1; 
	
	else if 	(curUrl.indexOf("location.jsp")>0
			) menuOnIdx = 2; 
	
%>
			<div class="lnb">
				<h1>고객센터</h1>
				<span class="engTitle">Center</span>
				<ul>
					<li <% if (menuOnIdx == 0) { %>class="on"<%}%>><a href="/front/08customercenter/faq.jsp">자주하는 질문</a></li>
					<li <% if (menuOnIdx == 1) { %>class="on"<%}%>><a href="/front/08customercenter/csCenter.jsp">고객문의</a></li>
					<li <% if (menuOnIdx == 2) { %>class="on"<%}%>><a href="/front/08customercenter/location.jsp">찾아오시는 길</a></li>
				</ul>
			</div>