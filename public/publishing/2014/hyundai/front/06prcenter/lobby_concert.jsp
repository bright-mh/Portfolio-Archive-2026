<%@ page language="java" pageEncoding="UTF-8" 
%><%@ page import="com.rbipt.RB" 
%><%@ page import="java.util.ArrayList" 
%><%@ page import="java.util.HashMap" 
%><%@page import="com.rbipt.service.PublicizeService"
%><%@page import="com.rbipt.dao.PublicizeDAO"
%><%
	String grp_cd = "2";
	PublicizeService service = new PublicizeService(application); 
	//ArrayList<HashMap<String,Object>> list = service.getList(request, grp_cd);
	//String lang = request.getParameter("lang")==null?"kr":request.getParameter("lang");
	
	String pg1 = request.getParameter("pg");
    String lang = request.getParameter("lang")==null?"kr":request.getParameter("lang");
    int intPg = 1;
    try {
        intPg = Integer.parseInt(pg1);
    }catch (NumberFormatException nfe){
        intPg = 1;
    }
    String limit1 = request.getParameter("limit");
    int intLimit = 0;
    try {
        intLimit = Integer.parseInt(limit1);
    }catch (NumberFormatException nfe){
    }
    PublicizeDAO dao = new PublicizeDAO();
    String whereSql = "WHERE GRP_CD='"+grp_cd+"'";
    if (lang != null) whereSql += " AND LANG='"+lang+"'";
    String orderSql = "ORDER BY REG_DATE DESC, IDX DESC";
    ArrayList<HashMap<String, Object>> list = dao.getList(intPg, intLimit, whereSql, orderSql);
	
%>
<!DOCTYPE html>
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
						<li class="gt last"><a href="/front/06prcenter/news_list.jsp">회사소식</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>회사소식</h1>
					<div class="tab tab3 tabM">
						<ul>
							<li><a href="/front/06prcenter/news_list.jsp"><span>보도자료</span></a></li>
							<li class="m_hidden"><a href="/front/06prcenter/e_sabo.jsp"><span>사보</span></a></li>
							<li class="on"><a href="/front/06prcenter/lobby_concert.jsp?limit=4"><span>로비콘서트</span></a></li>
						</ul>
					</div>

					<h2 class="hidden">로비콘서트</h2>
					<div class="concert">
						<div class="video">
							<iframe width="560" height="315" id="vdo" src="<%=list.get(0).get("URL") %>" frameborder="0" title="로비콘서트 동영상" allowfullscreen></iframe>
						</div>
						<div class="hr"></div>
						<dl>
							<dt id="vdottl"><%=list.get(0).get("TITLE") %></dt>
							<dd id="vdocontent"><%=list.get(0).get("SUB_TITLE") %></dd>
						</dl>

						<!-- 동영상 자막 제공 영역 -->
						<!-- //동영상 자막 제공 영역 -->

						<div class="list">
							<ul>
								<% 
								for (int i=0; list != null &&  i<list.size(); i++) { 
									HashMap<String,Object> h = list.get(i);
									String title = (String)h.get("TITLE");
									title = title==null?"":title.replace("\"", "");
									title = title.replace ("\n", "<br />");
									title = title.replace ("\"", "");
									title = title.replace ("'", "");

									String content = (String)h.get("SUB_TITLE");
									content = content==null?"":content.replace("\"", "");
									content = content.replace ("\n", "<br />");
									content = content.replace ("\"", "");
									content = content.replace ("'", "");
								%>							
								<li <%if (i==0) {out.println ("class='on'");}%> ><a href="javascript:setMovie('<%=list.get(i).get("URL")%>','<%=title%>','<%=content%>')">
									<p class="cover"><img src="/front/images/06prcenter/cover<%if (i==0) {out.println ("_on");}%>.png" alt="" /></p>
									<img class="thumb" src="/uploads/publicize/<%=h.get("SIMAGE1")%>"  alt="<%=list.get(i).get("TITLE")%>"/>
									<p class="tx"><%=h.get("TITLE")%></p>
								</a></li>
								<% } %>
							</ul>
						</div>
						
						<%
						String pg = request.getParameter("pg"); 
						String limit = request.getParameter("limit");
						//int totalCnt = service.getCnt(request, grp_cd);
						
				        String tableName = "TBL_PUBLICIZE";
				        String whereSql1 = "WHERE GRP_CD='"+grp_cd+"'";
				        if (lang != null) whereSql1 += " AND LANG='"+lang+"'";
				        int totalCnt = dao.getCount(tableName, whereSql1);
						
						%>		
						<jsp:include page="/front/inc/paging.jsp" flush="true" >
							<jsp:param name="pg" value="<%=pg %>" />
							<jsp:param name="limit" value="<%=limit %>" />
							<jsp:param name="totalCnt" value="<%=totalCnt %>" />
							<jsp:param name="link" value='<%="/front/06prcenter/lobby_concert.jsp?limit=4&grp_cd="+grp_cd%>' />
						</jsp:include>		
						<!--  // 여기까지 내용  -->	
                        
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
	function setMovie (url, title, content){
		jQuery("#vdo").attr("src", url);
		jQuery("#vdottl").html(title);
		jQuery("#vdocontent").html(content);
	}
</script>
</body>
</html>