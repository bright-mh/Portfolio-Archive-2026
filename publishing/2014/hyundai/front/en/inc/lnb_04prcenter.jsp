<%@ page language="java" pageEncoding="UTF-8"%><%
	String curUrl = request.getRequestURI();
	int menuOnIdx = 0;
	
	if 			(curUrl.indexOf("news_list.jsp")>0
			|| curUrl.indexOf("bi_info.jsp")>0
			|| curUrl.indexOf("ci_info.jsp")>0
			) menuOnIdx = 0;
	
	else if 	( curUrl.indexOf("brochure.jsp")>0
			) menuOnIdx = 1; 
	
	else if 	(
			curUrl.indexOf("pr_video.jsp")>0
			) menuOnIdx = 2; 
	
	else if 	(curUrl.indexOf("lobby_concert.jsp")>0
			) menuOnIdx = 3; 
	else if    (curUrl.indexOf("Masterpiece.jsp")>0
            ) menuOnIdx = 4; 


%>
			<div class="lnb">
				<h1>PR CENTER</h1>
				<!-- <h2>PR Center</h2> -->
				<ul>
					<li <% if (menuOnIdx == 0) { %>class="on"<%}%>><a href="/front/en/04prcenter/ci_info.jsp">CI / BI CENTER</a></li>
					<li <% if (menuOnIdx == 1) { %>class="on"<%}%>><a href="/front/en/04prcenter/brochure.jsp">E-BROCHURE</a></li>
					<li <% if (menuOnIdx == 2) { %>class="on"<%}%>><a href="/front/en/04prcenter/pr_video.jsp">PR FILM</a></li>
					<li <% if (menuOnIdx == 3) { %>class="on"<%}%>><a href="/front/en/04prcenter/lobby_concert.jsp?limit=4&lang=en">LOBBY CONCERT</a></li>
					<li <% if (menuOnIdx == 4) { %>class="on"<%}%>><a href="/front/en/04prcenter/Masterpiece.jsp">MASTERPIECE</a></li>
				</ul>
			</div>