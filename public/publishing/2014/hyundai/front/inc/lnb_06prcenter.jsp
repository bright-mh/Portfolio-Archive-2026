<%@ page language="java" pageEncoding="UTF-8"%><%
	String curUrl = request.getRequestURI();
	int menuOnIdx = 0;
	
	if 			(curUrl.indexOf("news_list.jsp")>0
			|| curUrl.indexOf("e_sabo.jsp")>0
			|| curUrl.indexOf("lobby_concert.jsp")>0
			) menuOnIdx = 0;
	
	else if 	(curUrl.indexOf("ci_info.jsp")>0
			|| curUrl.indexOf("bi_info.jsp")>0
			) menuOnIdx = 1; 
	
	else if 	(curUrl.indexOf("pr_tv.jsp")>0
			|| curUrl.indexOf("pr_print.jsp")>0
			|| curUrl.indexOf("pr_video.jsp")>0
			) menuOnIdx = 2; 
	
	else if 	(curUrl.indexOf("brochure.jsp")>0
			) menuOnIdx = 3; 

	else if 	(curUrl.indexOf("Masterpiece.jsp")>0
			) menuOnIdx = 4; 

	else if 	(curUrl.indexOf("30years.jsp")>0
			) menuOnIdx = 5; 

%>
			<div class="lnb">
				<h1>홍보센터</h1>
				<span class="engTitle">PR Center</span>
				<ul>
					<li <% if (menuOnIdx == 0) { %>class="on"<%}%>><a href="/front/06prcenter/news_list.jsp">회사소식</a></li>
					<li <% if (menuOnIdx == 1) { %>class="on"<%}%>><a href="/front/06prcenter/ci_info.jsp">CI/BI센터</a></li>
					<li <% if (menuOnIdx == 2) { %>class="on"<%}%>><a href="/front/06prcenter/pr_tv.jsp?limit=4">홍보자료</a></li>
					<li <% if (menuOnIdx == 3) { %>class="on"<%}%>><a href="/front/06prcenter/brochure.jsp">브로슈어</a></li>
					<li <% if (menuOnIdx == 4) { %>class="on"<%}%>><a href="/front/06prcenter/Masterpiece.jsp">마스터피스</a></li>
					<li <% if (menuOnIdx == 5) { %>class="on"<%}%>><a href="/front/06prcenter/30years.jsp">30년사</a></li>
				</ul>
			</div>