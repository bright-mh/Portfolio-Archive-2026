<%@ page language="java" pageEncoding="UTF-8"%>
<%
	String curUrl = request.getRequestURI();
	int menuOnIdx = 0;
	
	if 			(curUrl.indexOf("housing_info")>0
			|| curUrl.indexOf("housing_biz")>0
			) menuOnIdx = 0;
	
	else if 	(curUrl.indexOf("build_info")>0
			|| curUrl.indexOf("vision2016")>0
			|| curUrl.indexOf("build_biz") >0
			) menuOnIdx = 1; 
	
	else if 	(curUrl.indexOf("civil_info")>0
			|| curUrl.indexOf("civil_biz")>0
			) menuOnIdx = 2; 
	
	else if 	(curUrl.indexOf("plant_info")>0
			|| curUrl.indexOf("plant_biz")>0
			) menuOnIdx = 3; 

	else if 	(curUrl.indexOf("abroad_info")>0
			|| curUrl.indexOf("abroad_biz")>0
			) menuOnIdx = 4; 

	else if 	(curUrl.indexOf("city_info")>0
			|| curUrl.indexOf("complex_info")>0
			|| curUrl.indexOf("aptcomplex_info")>0
			) menuOnIdx = 5; 

%>
			<div class="lnb">
				<h1>BUSINESS</h1>
				<!-- <h2>Business</h2> -->
				<ul>
					<li <% if (menuOnIdx == 0) { %>class="on"<%}%>><a href="/front/en/02business/housing_info.jsp">HOUSING</a></li>
					<li <% if (menuOnIdx == 1) { %>class="on"<%}%>><a href="/front/en/02business/build_info.jsp">ARCHITECTUAL WORKS</a></li>
					<li <% if (menuOnIdx == 2) { %>class="on"<%}%>><a href="/front/en/02business/civil_info.jsp">CIVIL WORKS</a></li>
					<li <% if (menuOnIdx == 3) { %>class="on"<%}%>><a href="/front/en/02business/plant_info.jsp">PLANT</a></li>
					<li <% if (menuOnIdx == 4) { %>class="on"<%}%>><a href="/front/en/02business/abroad_info.jsp">OVERSEAS</a></li>
					<li <% if (menuOnIdx == 5) { %>class="on"<%}%>><a href="/front/en/02business/aptcomplex_info.jsp">DEVELOPMENT</a></li>
				</ul>
			</div>