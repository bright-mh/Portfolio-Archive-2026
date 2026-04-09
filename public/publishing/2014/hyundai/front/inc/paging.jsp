<%@ page language="java" pageEncoding="UTF-8" 
%><%@ page import="com.rbipt.RB" 
%><%
	String pg = request.getParameter("pg")==null?"1":request.getParameter("pg");
	String limit = (request.getParameter("limit")==null||request.getParameter("limit").equals("null"))?"10":request.getParameter("limit");
	String link  = request.getParameter("link");
	String searchKey = request.getParameter("search_key"); 
	String keyword = request.getParameter("keyword");
	String lang = request.getParameter("lang");
	String grpCd = request.getParameter("grp_cd");
	String news = request.getParameter("news");

	keyword =  keyword == null? "" : RB.decode(keyword);
	String queryString = "";
	if (limit != null && !limit.equals("")) queryString += "&limit="+limit;
	if (searchKey!=null && !searchKey.equals("")) queryString += "&search_key="+searchKey;
	if (keyword != null && !keyword.equals("")) queryString += "&keyword="+keyword;
	if (lang !=null && !lang.equals("")) queryString += "&lang="+lang;
	if (grpCd != null && !grpCd.equals("")) queryString += "&grp_cd="+grpCd;
	int pgNum = 1;
	int plimit = 10;
	if(news !=null && news.equals("news")){
		plimit = 5;
	}
	int pgLimit = 10; 
	int totalCnt = 0;
	try {
		totalCnt = Integer.parseInt(request.getParameter("totalCnt"));
		pgLimit = Integer.parseInt(limit);
		pgNum = Integer.parseInt(pg);
	}catch (Exception e){
	}
	int totalPage = totalCnt / pgLimit;
	if (totalCnt % pgLimit > 0){
		totalPage ++;
	}
	int sPgNum = (plimit*(((pgNum-1)/plimit)))+1; 
	String pDel = "?";
	if (link.indexOf("?")>0) pDel = "&amp;";
%>		<div class="pagenate">
			<div class="paging">
				<% if (sPgNum > plimit) { %>
				<a href="<%=link%>?pg=1<%=queryString%>" class="first">첫 페이지</a>
				<% } %>
				<% if (pgNum > plimit) { %>
				<a href="<%=link%>?pg=<%=(sPgNum-plimit)%><%=queryString%>" class="prev">이전 페이지</a>
				<% } %>
				<ol>
					<%for (int i=sPgNum; i<sPgNum+plimit && totalPage >= i; i++) { %>
					<li><a href="<%=link%><%=pDel %>pg=<%=i%><%=queryString%>" <% if (pgNum == i) { %>class="on" <% } %>><%=i%></a></li>
					<% } %>
				</ol>
				<%
				if ( (sPgNum+plimit) <= totalPage) { %>
				<a href="<%=link%>?pg=<%=(sPgNum+plimit)%><%=queryString%>" class="next">다음 페이지</a>
				<% } %>
				<%
				if ( (sPgNum+plimit) <= totalPage) { %>
				<a href="<%=link%>?pg=<%=(totalPage)%><%=queryString%>" class="end">끝 페이지</a>
				<% } %>
			</div>
		</div>