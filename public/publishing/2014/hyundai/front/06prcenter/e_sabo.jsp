<%@ page language="java" pageEncoding="UTF-8" 
%><%@ page import="com.rbipt.RB" 
%><%@ page import="java.util.ArrayList" 
%><%@ page import="java.util.HashMap" 
%><%@page import="com.rbipt.service.PublicizeService"
%><%
	String grp_cd = request.getParameter("grp_cd")==null?"1":request.getParameter("grp_cd");
	PublicizeService service = new PublicizeService(application); 
	ArrayList<HashMap<String,Object>> list = service.getList(request, grp_cd);
	String lang = request.getParameter("lang")==null?"kr":request.getParameter("lang");
	int totalCnt = service.getCnt(request, grp_cd);
	HashMap<String,Object> rh = service.getRecentRow("1", lang);
	String pg = request.getParameter("pg")==null?"1":""+request.getParameter("pg"); 
	int pgnum = Integer.parseInt(pg);
%>
<!DOCTYPE html>
<html lang="ko">
<head>
	<jsp:include page="/front/inc/top.jsp"></jsp:include>
</head>
<body class="main">
<jsp:include page="/front/inc/head.jsp"></jsp:include>
	<div class="article alert" id="content">
		<div class="gray">
			<p>PC에 최적화된 페이지 입니다.</p>
		</div>
		<div class="wrap">
			<p class="blind">CYBER PR CENTER / 현대산업개발은 창의적이고 혁신적인 기술력과 경험을 바탕으로 가치 창조적인 공간을 건설하고 있습니다.</p>
			<jsp:include page="/front/inc/lnb_06prcenter.jsp"></jsp:include>
			<!-- container s -->
			<div class="s_container">
				<div class="location bg5">
					<ul>
						<li><a href="/front/index.jsp"><span class="ico">HOME</span></a></li>
						<li class="gt"><a href="/front/06prcenter/news_list.jsp">홍보센터</a></li>
						<li class="gt last"><a href="/front/06prcenter/news_list.jsp">회사소식</a></li>
					</ul>
				</div>
				<div class="contents">
					<h1>회사소식</h1>
					<div class="tab tab3 mb30">
						<ul>
							<li><a href="/front/06prcenter/news_list.jsp"><span>보도자료</span></a></li>
							<li class="on"><a href="/front/06prcenter/e_sabo.jsp"><span>사보</span></a></li>
							<li><a href="/front/06prcenter/lobby_concert.jsp?limit=4"><span>로비콘서트</span></a></li>
						</ul>
					</div>

					<h2 class="hidden">사보</h2>
					<%
					if (rh != null) {
					HashMap<String,Object> h1 = rh;
					%>
					<div class="prNews">
						<div class="sabo">
							<img src="/uploads/publicize/<%=h1.get("IMAGE1") %>" alt="<%=h1.get("TITLE")%>"/>
							<div class="bt"><a href="<%=h1.get("URL")%>" target="_blank">사보보기</a></div>
						</div>
						<div class="saboList">
							<ul>
							<% for (int i=pgnum==1?1:0; i<list.size(); i++) { 
								HashMap<String,Object> h = (HashMap<String,Object>)list.get(i);
							%>
								<li><span><%=totalCnt-((pgnum*10)-10+(i))%></span><p><a href="<%=h.get("URL")%>" target="_blank"><%=h.get("TITLE") %></a></p></li>
							<% } %>
							</ul>
						</div>
						<%
						String limit = request.getParameter("limit");
						%>		
						<jsp:include page="/front/inc/paging.jsp" flush="true" >
							<jsp:param name="pg" value="<%=pg %>" />
							<jsp:param name="limit" value="<%=limit %>" />
							<jsp:param name="totalCnt" value="<%=totalCnt %>" />
							<jsp:param name="link" value='<%="/front/06prcenter/e_sabo.jsp?grp_cd="+grp_cd%>' />
						</jsp:include>	
						<% } %>
					</div>
				<div class="bt_top">
					<a href="#layoutWrap"><img src="/front/images/sub/bt_top.png" alt="상단으로"/></a>
				</div>
			</div>
			<!-- container e -->
		</div>
	</div>
<!-- 2014-08-07 누락태그 추가 -->
</div>
<!-- //2014-08-07 누락태그 추가 -->
<jsp:include page="/front/inc/footer.jsp"></jsp:include>
</body>
</html>