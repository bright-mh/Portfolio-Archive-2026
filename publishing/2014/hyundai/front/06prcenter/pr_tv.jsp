<%@ page language="java" pageEncoding="UTF-8" 
%><%@ page import="com.rbipt.RB" 
%><%@ page import="java.util.ArrayList" 
%><%@ page import="java.util.HashMap" 
%><%@page import="com.rbipt.service.PublicizeService"
%><%
	String grp_cd = "3";
	PublicizeService service = new PublicizeService(application); 
	ArrayList<HashMap<String,Object>> list = service.getList(request, grp_cd);
	String lang = request.getParameter("lang")==null?"kr":request.getParameter("lang");
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
							<li class="on"><a href="/front/06prcenter/pr_tv.jsp?limit=4"><span>TV광고</span></a></li>
							<li><a href="/front/06prcenter/pr_print.jsp?limit=4"><span>인쇄광고</span></a></li>
							<li><a href="/front/06prcenter/pr_video.jsp"><span>홍보영상</span></a></li>
						</ul>
					</div>

					<h2 class="hidden">TV광고</h2>
					<div class="concert">
						<div class="video">
							<iframe width="560" height="315" id="vdo" src="<%=list.get(0).get("URL") %>" frameborder="0" title="TV 광고 동영상" allowfullscreen></iframe>
						</div>

						<div class="hr"></div>
						<dl>
							<dt id="vdottl"><%=list.get(0).get("TITLE") %></dt>
							<dd id="vdocontent"><%=((String)list.get(0).get("CONTENT")).replace("\n","<br />") %></dd>
						</dl>

						<div class="list">
							<ul>
								<% 
								for (int i=0; list != null &&  i<list.size(); i++) { 
									HashMap<String,Object> h = list.get(i);
								%>
								<li <%if (i==0) {out.println ("class='on'");}%> >
								<a href="javascript:setMovie('<%=list.get(i).get("URL")%>','<%=((String)list.get(i).get("TITLE")).replace("\n", "<br />").replace("\"", "").replace("'", "") %>','<%=((String)list.get(i).get("CONTENT")).replace("\n", "<br />").replace("\"", "").replace("'", "") %>')">
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
						int totalCnt = service.getCnt(request, grp_cd);
						%>		
						<jsp:include page="/front/inc/paging.jsp" flush="true" >
							<jsp:param name="pg" value="<%=pg %>" />
							<jsp:param name="limit" value="<%=limit %>" />
							<jsp:param name="totalCnt" value="<%=totalCnt %>" />
							<jsp:param name="link" value='<%="/front/06prcenter/pr_tv.jsp?limit=4&grp_cd="+grp_cd%>' />
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
	function setMovie (url, title, content){
		jQuery("#vdo").attr("src", url);
		jQuery("#vdottl").html(title);
		jQuery("#vdocontent").html(content);
	}
</script>
</body>
</html>