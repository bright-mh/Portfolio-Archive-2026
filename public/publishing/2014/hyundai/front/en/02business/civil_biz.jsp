<%@ page language="java" pageEncoding="UTF-8" 
%><%@ page import="com.rbipt.RB" 
%><%@ page import="java.util.ArrayList" 
%><%@ page import="java.util.HashMap" 
%><%@ page import="com.rbipt.service.BusinessService" 
%><%
	BusinessService service = new BusinessService();
	ArrayList<HashMap<String,Object>> list = service.getList(request, "civil");
	String lang = request.getParameter("lang")==null?"kr":request.getParameter("lang");
	String GRP_CD = request.getParameter("grp_cd")==null?"0":request.getParameter("grp_cd");
	int grp_cd = Integer.parseInt(GRP_CD);
%>
<!DOCTYPE html>
<html lang="ko">
<head>
	<jsp:include page="/front/en/inc/top.jsp"></jsp:include>
</head>
<body class="main">
	<jsp:include page="/front/en/inc/head.jsp"></jsp:include>
	<div class="article" id="content">
		<div class="wrap">
			<p class="blind">BUSINESS INFORMATION</p>
			<!-- lnb s -->
			<jsp:include page="/front/en/inc/lnb_02business.jsp"></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg1">
					<ul>
						<li><a href="/front/en/index.jsp"><span class="ico"></span></a></li>
						<li class="gt"><a href="#none">BUSINESS</a></li>
						<li class="gt last"><a href="#none">CIVIL WORKS</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>CIVIL WORKS</h1>
					<div class="tab tab2">
						<ul>
							<li><a href="/front/en/02business/civil_info.jsp"><span>SUMMARY</span></a></li>
							<li class="on"><a href="#none"><span>MAJOR PROJECT</span></a></li>
						</ul>
					</div>

					<div class="business">
						<div class="civil_tab">
							<ul>
								<li class="civil01"><a href="/front/en/02business/civil_biz.jsp?lang=en&grp_cd=1" <% if (grp_cd==1) {%> class="on"<%}%>><i></i><br>TRANSPORTATION<br/>/ BRDG.</a></li>
								<li class="civil02"><a href="/front/en/02business/civil_biz.jsp?lang=en&grp_cd=2" <% if (grp_cd==2) {%> class="on"<%}%>><i></i><br>SUBWAY<br/> / RAIL-ROAD</a></li>
								<li class="civil03"><a href="/front/en/02business/civil_biz.jsp?lang=en&grp_cd=3" <% if (grp_cd==3) {%> class="on"<%}%>><i></i><br>PORT<br/> / MARINE WORKS</a></li>
								<li class="civil04"><a href="/front/en/02business/civil_biz.jsp?lang=en&grp_cd=4" <% if (grp_cd==4) {%> class="on"<%}%>><i></i><br>PLANT / ETC</a></li>
								<li class="civil05"><a href="/front/en/02business/civil_biz.jsp?lang=en&grp_cd=5" <% if (grp_cd==5) {%> class="on"<%}%>><i></i><br>OVERSEAS WORKS</a></li>
							</ul>
						</div>
						
						<div class="newsDetail civill">
							<ul>
							<% for (int i=0; i<list.size(); i++) {  
								HashMap<String,Object> h = list.get(i);
							%>
								<li class="news <% if (i==0) out.println ("on"); %>">
									<a href="#viewDetail">
										<span class="title"><%=h.get("NAME")%></span>
									</a>
									<div class="txt_box">
										<% String image = (String)h.get("IMAGE1");
										if (h.get("IMAGE1")!=null && image.trim().length()>0 ) { %>
										<img src="/uploads/business/<%=h.get("IMAGE1")%>"
											alt="<%=h.get("NAME")%>" />
										<%} %>
										<div class="hr"></div>
										<dl>
											<dt>Project</dt>
											<dd><%=h.get("NAME")%></dd>
										</dl>
										<dl>
											<dt>Location</dt>
											<dd><%=h.get("LOCATION")%></dd>
										</dl>
										<dl>
											<dt>Period</dt>
											<dd><%=h.get("PERIOD")%></dd>
										</dl>
										<dl>
											<dt>Scale</dt>
											<dd><%=h.get("CONTENT")%></dd>
										</dl>
									</div>
								</li>
							<% } %>
							</ul>
						</div>

						<%
						String pg = request.getParameter("pg"); 
						String limit = request.getParameter("limit");
						int totalCnt = service.getCnt(request, "civil");
						%>
						<jsp:include page="/front/inc/paging.jsp" flush="true" >
							<jsp:param name="pg" value="<%=pg %>" />
							<jsp:param name="limit" value="<%=limit %>" />
							<jsp:param name="totalCnt" value="<%=totalCnt %>" />
							<jsp:param name="lang" value="en" />
							<jsp:param name="link" value="/front/en/02business/civil_biz.jsp" />
						</jsp:include>

					</div>
				</div>

				<div class="bt_top">
					<a href="#layoutWrap"><img src="/front/en/images/sub/bt_top.png" alt="Top of page"/></a>
				</div>
			</div>
			<!-- container e -->

		</div>
	</div>

<jsp:include page="/front/en/inc/footer.jsp"></jsp:include>
</body>
</html>
