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
				<h1>사업분야</h1>
				<span class="engTitle">Business</span>
				<ul>
					<li <% if (menuOnIdx == 0) { %>class="on"<%}%>><a href="/front/02business/housing_info.jsp">주택사업</a></li>
					<li <% if (menuOnIdx == 1) { %>class="on"<%}%>><a href="/front/02business/build_info.jsp">건축사업</a></li>
					<li <% if (menuOnIdx == 2) { %>class="on"<%}%>><a href="/front/02business/civil_info.jsp">토목사업</a></li>
					<li <% if (menuOnIdx == 3) { %>class="on"<%}%>><a href="/front/02business/plant_info.jsp">플랜트사업</a></li>
					<li <% if (menuOnIdx == 4) { %>class="on"<%}%>><a href="/front/02business/abroad_info.jsp">해외사업</a></li>
					<li <% if (menuOnIdx == 5) { %>class="on"<%}%>><a href="/front/02business/city_info.jsp">개발사업</a></li>
				</ul>
			</div>