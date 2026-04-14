<%@ page language="java" pageEncoding="UTF-8" 
%><%@ page import="com.rbipt.RB" 
%><%@ page import="java.util.ArrayList" 
%><%@ page import="java.util.HashMap" 
%>
<%@ page import="com.rbipt.service.AffiliatesService"%>

<%@ page import="com.rbipt.dao.AffiliatesDAO"%>

<%@ page import="com.ckinterdream.common.DBUtil"%>
<%@ page import="com.ckinterdream.common.db.DBHandler"%>
<%@ page import="java.sql.Connection"%>
<%@ page import="java.sql.SQLException"%>

<%
	/* AffiliatesService service = new AffiliatesService();
	ArrayList<HashMap<String,Object>> list = service.getList(request); */
	
	
	String pg = request.getParameter("pg");
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
	AffiliatesDAO dao = new AffiliatesDAO();
	String whereSql = "WHERE LANG2 = 'kr' ";
	String orderSql = " ORDER BY DP_SEQ ASC";
	ArrayList<HashMap<String, Object>> list = dao.getList(intPg, intLimit, whereSql, orderSql);
	
	String IDX = request.getParameter("idx")==null?"1":request.getParameter("idx");
	IDX = IDX.trim();
	int idx = Integer.parseInt(IDX);
	
	String tableName = "TBL_AFFILIATES"; 
	String items = "IDX,NAME, WRITER_NAME, REG_DATE, DP_SEQ, TITLE, CONTENT, EMAIL, FILENAME, MAIN_BUSINESS, INCORPORATION_DATE, CEO, CAPITAL, ADDRESS, TELEPHONE, FAX, HOMEPAGE,ALT";
	Connection conn = DBHandler.getConnection();
	String query = "SELECT "+items+" FROM "+tableName+" WHERE IDX="+idx ;
	HashMap<String,Object> h = DBUtil.selectOne(conn, query);
	conn.close();
	conn = null;
	
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
			<p class="blind">COMPANY INTRODUCTION / 환경친화적이고 인간중심의 건축문화에 공헌하는 세계 초일류 기업으로 도약하겠습니다.</p>

			<!-- lnb s -->
			<jsp:include page="/front/inc/lnb_01company.jsp"></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg0">
					<ul>
						<li><a href="/front/index.jsp"><span class="ico">HOME</span></a></li>
						<li class="gt"><a href="/front/01company/ceo_01.jsp">회사소개</a></li>
						<li class="gt last"><a href="/front/01company/group.jsp">계열사 소개</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>계열사 소개</h1>
					<div class="tab tab5">
						<ul>
							<% 
							ArrayList<HashMap<String,Object>> acList = new ArrayList<HashMap<String,Object>>();
							for (int i=0; i<list.size(); i++) {
								HashMap<String,Object> tmp = (HashMap<String,Object>)list.get(i);
								String IDX2 = tmp!=null?""+tmp.get("IDX"):null;
							%>
							<li <% if (IDX.equals(IDX2)) { out.println("class='on'"); } %> ><a href="/front/01company/group.jsp?idx=<%=IDX2%>"><span>
							
							<%=tmp.get("NAME")%></span></a></li>
							<% } %>
						</ul>
					</div>
					<%if (h!=null){ %>
					<div class="group">
						<h2 class="title">
						
						<!-- <img src="/front/images/01company/tit_group01.png" alt="아이서비스㈜"/> -->
						
						<% if (idx == 10) {%>
						<img src="/front/images/01company/tit_group01.png" alt="HDC 아이서비스"/>
						<% } else if (idx == 9) {%>
						<img src="/front/images/01company/tit_group02.png" alt="HDC 아이앤콘스"/>
						<% } else if (idx == 8) {%>
						<img src="/front/images/01company/tit_group03.png" alt="HDC 아이콘트롤스"/>
						<% } else if (idx == 7) {%>
						<img src="/front/images/01company/tit_group04.png" alt="HDC 영창뮤직"/>
						<% } else if (idx == 6) {%>
						<img src="/front/images/01company/tit_group05.png" alt="HDC 현대EP"/>
						<% } else if (idx == 5) {%>
						<img src="/front/images/01company/tit_group06.png" alt="HDC 현대아이파크몰"/>
						<% } else if (idx == 4) {%>
						<img src="/front/images/01company/tit_group07.png" alt="HDC 호텔아이파크"/>
						<% } else if (idx == 3) {%>
						<img src="/front/images/01company/tit_group08.png" alt="HDC 아이파크스포츠"/>
						<% } else if (idx == 2) {%>
						<img src="/front/images/01company/tit_group09.png" alt="HDC 자산운용"/>
						<% } else if (idx == 1) {%>
						<img src="/front/images/01company/tit_group10.png" alt="HDC 아이시어스"/>
						<% } %>
						
						</h2>
						<div class="img_box">
							<img src="/uploads/affiliates/<%=h.get("FILENAME")%>" alt="<%=h.get("ALT") %>" />
						</div>

						<div class="hr"></div>

						<div class="txt_box">
							<p class="dark"><%=h.get("TITLE")%></p>
							<p class="light"><%=h.get("CONTENT")%></p>
						</div>
					</div>
										
					<ul class="list_subsidiary">
						<li><span class="tit">주업종</span><span class="con"><%=RB.nl2nbsp(h.get("MAIN_BUSINESS"))%></span></li> 
						<li class="bl"><span class="tit">설립일자</span><span class="con"><%=RB.nl2nbsp(h.get("INCORPORATION_DATE"))%></span></li>
						<li><span class="tit">대표이사</span><span class="con"><%=RB.nl2nbsp(h.get("CEO"))%></span></li>
						<li class="bl"><span class="tit">자본금</span><span class="con"><%=RB.nl2nbsp(h.get("CAPITAL"))%></span></li>
						<li class="long"><span class="tit">회사주소</span><span class="con"><%=RB.nl2nbsp(h.get("ADDRESS"))%></span></li>
						<li><span class="tit">전화번호</span><span class="con"><%=RB.nl2nbsp(h.get("TELEPHONE"))%></span></li>
						<li class="bl"><span class="tit">팩스번호</span><span class="con"><%=RB.nl2nbsp(h.get("FAX"))%></span></li>
						<li><span class="tit">홈페이지</span><span class="con"><a href="<%=RB.nl2nbsp(h.get("HOMEPAGE"))%>" class="under" target="_blank" title="새 창 열림"><%=RB.nl2nbsp(h.get("HOMEPAGE"))%></a></span></li>
						<li class="bl"><span class="tit">이메일</span><span class="con"><a href="mailto:<%=RB.nl2nbsp(h.get("EMAIL"))%>" class="under"><%=RB.nl2nbsp(h.get("EMAIL"))%></a></span></li>
					</ul>
					<%} %>
				</div>

				<div class="bt_top">
					<a href="#layoutWrap"><img src="/front/images/sub/bt_top.png" alt="상단으로"/></a>
				</div>
			</div>
			<!-- container e -->

		</div>
	</div>
<jsp:include page="/front/inc/footer.jsp"></jsp:include>
</body>
</html>