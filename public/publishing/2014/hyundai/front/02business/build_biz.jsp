<%@ page language="java" pageEncoding="UTF-8" 
%><%@ page import="com.rbipt.RB" 
%><%@ page import="java.util.ArrayList" 
%><%@ page import="java.util.HashMap" 
%><%@ page import="com.rbipt.service.BusinessService" 
%><%
	BusinessService service = new BusinessService();
	ArrayList<HashMap<String,Object>> list = service.getList(request, "const");
	String lang = request.getParameter("lang")==null?"kr":request.getParameter("lang");
	String GRP_CD = request.getParameter("grp_cd")==null?"0":request.getParameter("grp_cd");
	int grp_cd = Integer.parseInt(GRP_CD);
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
		<p class="blind">BUSINESS INFORMATION / 현대산업개발은 새로운 공간과 문화 제안을 통해 삶의 가치를 높이고 생활을 더욱 풍요롭게 만듭니다.</p>

		<!-- lnb s -->
		<jsp:include page="/front/inc/lnb_02business.jsp"></jsp:include>
		<!-- lnb e -->

		<!-- container s -->
		<div class="s_container">
			<div class="location bg1">
				<ul>
					<li><a href="/front/index.jsp"><span class="ico">HOME</span></a></li>
					<li class="gt"><a href="/front/02business/housing_info.jsp">사업분야</a></li>
					<li class="gt last"><a href="/front/02business/build_info.jsp">건축사업</a></li>
				</ul>
			</div>

			<div class="contents">
				<h1>건축사업</h1>
				<div class="tab tab2">
					<ul>
						<li><a href="/front/02business/build_info.jsp"><span>개요</span></a></li>
						<li class="on"><a href="/front/02business/build_biz.jsp"><span>주요실적</span></a></li>
					</ul>
				</div>

				<h2 class="hidden">주요실적</h2>
				<div class="business">
					<div class="civil_tab">
						<ul>
							<li class="build01"><a
								href="/front/02business/build_biz.jsp?grp_cd=1" <% if (grp_cd==1) {%> class="on"<%}%>><i></i><br>병원</a></li>
							<li class="build02"><a
								href="/front/02business/build_biz.jsp?grp_cd=2" <% if (grp_cd==2) {%> class="on"<%}%>><i></i><br>상업/오피스</a></li>
							<li class="build03"><a
								href="/front/02business/build_biz.jsp?grp_cd=3" <% if (grp_cd==3) {%> class="on"<%}%>><i></i><br>호텔</a></li>
							<li class="build04"><a
								href="/front/02business/build_biz.jsp?grp_cd=4" <% if (grp_cd==4) {%> class="on"<%}%>><i></i><br>교육/문화/체육시설</a></li>
							<li class="build05"><a
								href="/front/02business/build_biz.jsp?grp_cd=5" <% if (grp_cd==5) {%> class="on"<%}%>><i></i><br>오피스텔</a></li>
						</ul>
					</div>

					<!-- [D] 각 탭이 선택될 때, h3태그가 각 탭 이름으로 보이게 해주세요! -->
					<% if (grp_cd==1) {%><h3 class="hidden">병원</h3><%}%>
					<% if (grp_cd==2) {%><h3 class="hidden">상업/오피스</h3><%}%>
					<% if (grp_cd==3) {%><h3 class="hidden">호텔</h3><%}%>
					<% if (grp_cd==4) {%><h3 class="hidden">교육/문화/체육시럭</h3><%}%>
					<% if (grp_cd==5) {%><h3 class="hidden">오피스텔</h3><%}%>

					<div class="newsDetail civill">
						<ul>
						<% for (int i=0; i<list.size(); i++) {  
							HashMap<String,Object> h = list.get(i);
						%>						
						
							<li class="news <% if (i==0) out.println ("on"); %>""><a href="#none"> <span class="title"><%=h.get("NAME")%></span>
							</a>
								<div class="txt_box">
									<% String image = (String)h.get("IMAGE1");
									if (h.get("IMAGE1")!=null && image.trim().length()>0 ) { %>
									<img src="/uploads/business/<%=h.get("IMAGE1")%>"
										alt="<%=h.get("NAME")%>" />
									<% } %>
									<div class="hr"></div>
									<dl>
										<dt>공사위치</dt>
										<dd><%=h.get("LOCATION")%></dd>
									</dl>
									<dl>
										<dt>공사기간</dt>
										<dd><%=h.get("PERIOD")%></dd>
									</dl>
									<dl>
										<dt>공사내용</dt>
										<dd><%=h.get("CONTENT")%></dd>
									</dl>
									
								</div></li>
						<% } %>
						</ul>
					</div>

					<%
					String pg = request.getParameter("pg"); 
					String limit = request.getParameter("limit");
					int totalCnt = service.getCnt(request, "const");
					%>
					<jsp:include page="/front/inc/paging.jsp" flush="true" >
						<jsp:param name="pg" value="<%=pg %>" />
						<jsp:param name="limit" value="<%=limit %>" />
						<jsp:param name="totalCnt" value="<%=totalCnt %>" />
						<jsp:param name="link" value="/front/02business/build_biz.jsp" />
					</jsp:include>

				</div>
			</div>

			<div class="bt_top">
				<a href="#layoutWrap"><img src="/front/images/sub/bt_top.png"
					alt="상단으로" /></a>
			</div>
		</div>
		<!-- container e -->

	</div>
</div>
<jsp:include page="/front/inc/footer.jsp"></jsp:include>
</body>
</html>