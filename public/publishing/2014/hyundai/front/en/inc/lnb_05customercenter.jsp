<%@ page language="java" pageEncoding="UTF-8" %>
<%
    String curUrl = request.getRequestURI();
    int menuOnIdx = 0;
    
    if(curUrl.indexOf("location.jsp")>0) menuOnIdx = 0;
    else if(curUrl.indexOf("csCenter.jsp")>0) menuOnIdx = 1; 

%>
			<div class="lnb">
				<h1>CUSTOMER<br/>SERVICE</h1>
				<!-- <h2>Center</h2> -->
				<ul>
					<li <% if (menuOnIdx == 0) { %>class="on"<%}%>><a href="/front/en/05customercenter/location.jsp">CONTACT US</a></li>
					<li <% if (menuOnIdx == 1) { %>class="on"<%}%>><a href="/front/en/05customercenter/csCenter.jsp">Q &amp; A</a></li>
				</ul>
			</div>