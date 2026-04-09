<%@ page language="java" pageEncoding="UTF-8" 
%><%@ page import="com.rbipt.RB" 
%><%@ page import="java.util.ArrayList" 
%><%@ page import="java.util.HashMap" 
%><%@page import="com.rbipt.service.PublicizeService"%>

<%@page import="java.sql.Connection"%>
<%@page import="java.sql.SQLException"%>
<%@page import="com.ckinterdream.common.DBUtil"%>
<%@page import="com.ckinterdream.common.db.DBHandler"%>
<%@page import="com.rbipt.service.PublicizeService"%>
<%@page import="com.rbipt.service.PublicizeService"%>

<%
	String grp_cd = "4";
	PublicizeService service = new PublicizeService(application); 
	/*ArrayList<HashMap<String,Object>> list = service.getList(request, grp_cd); */
	
	String pg = request.getParameter("pg");
	String lang = request.getParameter("lang")==null?"kr":request.getParameter("lang");
	int intPg = 1;
	try {
		intPg = Integer.parseInt(pg);
	}catch (NumberFormatException nfe){
		intPg = 1;
	}
	String limit = request.getParameter("limit");
	int intLimit = 0;
	try {
		intLimit = Integer.parseInt(limit);
	}catch (NumberFormatException nfe){
	}
	/* PublicizeDAO dao = new PublicizeDAO(); */
	String whereSql = "WHERE GRP_CD='"+grp_cd+"'";
	if (lang != null) whereSql += " AND LANG='"+lang+"'";
	String orderSql = "ORDER BY REG_DATE DESC";
	/* ArrayList<HashMap<String, Object>> result = dao.getList(intPg, intLimit, whereSql, orderSql); */
	
	
	String where = whereSql!=null?whereSql:"";
	String tableName = "TBL_PUBLICIZE";
	String items = "IDX,GRP_CD,TITLE,SUB_TITLE,WRITER,REG_DATE,URL,IMAGE1,SIMAGE1,CONTENT,DEL_YN,ALT";
	Connection conn = DBHandler.getConnection();
	String query =  RB.getListQuery(intPg,intLimit,tableName, "IDX", items, whereSql, orderSql);
	ArrayList <HashMap<String,Object>> list = DBUtil.select(conn, query);
	conn.close();
	conn = null;
	
	
	
	lang = request.getParameter("lang")==null?"kr":request.getParameter("lang");
	
%><!DOCTYPE html>
<html lang="ko">
<head>
	<jsp:include page="/front/inc/top.jsp"></jsp:include>
</head>
<body class="main">
<jsp:include page="/front/inc/head.jsp"></jsp:include>

	<div class="article" id="content">
		<div class="wrap">
			<p class="blind">CYBER PR CENTER / 현대산업개발은 창의적이고 혁신적인 기술력과 경험을 바탕으로 가치 창조적인 공간을 건설하고 있습니다.</p>

			<!-- lnb s -->
			<jsp:include page="/front/inc/lnb_06prcenter.jsp"></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg5">
					<ul>
						<li><a href="/front/index.jsp"><span class="ico">HOME</span></a></li>
						<li class="gt"><a href="/front/06prcenter/news_list.jsp">홍보센터</a></li>
						<li class="gt last"><a href="/front/06prcenter/pr_tv.jsp?limit=4">홍보자료</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>홍보자료</h1>
					<div class="tab tab3 mb30">
						<ul>
							<li><a href="/front/06prcenter/pr_tv.jsp?limit=4"><span>TV광고</span></a></li>
							<li class="on"><a href="/front/06prcenter/pr_print.jsp?limit=4"><span>인쇄광고</span></a></li>
							<li><a href="/front/06prcenter/pr_video.jsp"><span>홍보영상</span></a></li>
						</ul>
					</div>

					<h2 class="hidden">인쇄광고</h2>
					<div class="concert">
						<div class="print">
							<div class="left">
								<img id="pimg" src="/uploads/publicize/<%=list.get(0).get("IMAGE1")%>" alt="<%=list.get(0).get("ALT") %>"/>
							</div>
							<div class="right">
								<div class="hr"></div>
								<h3 id="ttl1" class="title_effect"><%=list.get(0).get("TITLE") %></h3>
								<dl>
									<dt id="ttl2"><%=list.get(0).get("SUB_TITLE") %></dt>
									<% String tmp = (String)list.get(0).get("CONTENT"); %>
									<dd id="cont"><%=tmp.replace("\n", "<br />") %></dd>
								</dl>
							</div>
						</div>
						
						<div class="list">
							<ul>
								<% 
								for (int i=0; list != null &&  i<list.size(); i++) { 
									HashMap<String,Object> h = list.get(i);
									String content = (String)h.get("CONTENT");
									content = content==null?"":content.replace("\"", "");
									content = content.replace ("\n", "<br />");
									content = content.replace ("\"", "");
									content = content.replace ("'", "");
								%>
								<li <%if (i==0) {out.println ("class='on'");}%> ><a href="javascript:setMovie('/uploads/publicize/<%=h.get("IMAGE1")%>','<%=list.get(i).get("TITLE")%>','<%=list.get(i).get("SUB_TITLE")%>','<%=content%>')">
									<p class="cover"><img src="/front/images/06prcenter/cover<%if (i==0) {out.println ("_on");}%>.png" alt="<%=h.get("ALT")%>" /></p>
									<img class="thumb" src="/uploads/publicize/<%=h.get("SIMAGE1")%>"  alt="<%=h.get("ALT")%>"/>
									<p class="tx"><%=h.get("TITLE")%></p>
								</a></li> 
								<% } %>
							</ul>
						</div>
						
						<%
						pg = request.getParameter("pg"); 
						limit = request.getParameter("limit");
						int totalCnt = service.getCnt(request, grp_cd);
						%>
						<jsp:include page="/front/inc/paging.jsp" flush="true" >
							<jsp:param name="pg" value="<%=pg %>" />
							<jsp:param name="limit" value="<%=limit %>" />
							<jsp:param name="totalCnt" value="<%=totalCnt %>" />
							<jsp:param name="link" value='<%="/front/06prcenter/pr_print.jsp?limit=4&grp_cd="+grp_cd%>' />
						</jsp:include>
					</div>
				</div>

				<div class="bt_top">
					<a href="#layoutWrap"><img src="/front/images/sub/bt_top.png" alt="상단으로"/></a>
				</div>
			</div>
			<!-- container e -->

		</div>
	</div>

<jsp:include page="/front/inc/footer.jsp"></jsp:include>
<script>
	function setMovie (pimg, title, subtitle, content){
		jQuery("#pimg").attr("src", pimg);
		jQuery("#ttl1").html(title);
		jQuery("#ttl2").html(subtitle);
		jQuery("#cont").html(content);
	}
</script>
</body>
</html>