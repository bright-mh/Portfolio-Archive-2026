<%@ page language="java" pageEncoding="UTF-8"
%><%@ page import="java.util.ArrayList" 
%><%@ page import="java.util.HashMap" 
%><%@ page import="com.rbipt.RB" 
%>
<%@ page import="com.rbipt.service.HistoryService"%>
<%@ page import="com.rbipt.dao.HistoryDAO"%>

<%
	HistoryService service = new HistoryService();	
	int syear = 2010;
	int eyear = 2017;
	try {
		if (request.getParameter("s")!=null){
			syear = Integer.parseInt(request.getParameter("s"));
		}
		if (request.getParameter("e")!=null){
			eyear = Integer.parseInt(request.getParameter("e"));
		}
	}catch (NumberFormatException nfe){
	}

	/* ArrayList<HashMap<String,Object>> list = service.getFrontList(request, "text", syear, eyear); */
	
	HistoryDAO dao = new HistoryDAO();
	String lang = request.getParameter("lang") != null ? request.getParameter("lang") : "kr";
	String tableName = "TBL_HISTORY";
	String items = "IDX,LANG,YEAR,MONTH,CONTENT,FILENAME,TYPE,ALT";
	String whereSql = "WHERE LANG='" + lang + "' AND TYPE='text' AND YEAR >= " + syear + " AND YEAR <= '" + eyear + "'";
	String orderSql = "  ORDER BY YEAR DESC, MONTH DESC";

	ArrayList<HashMap<String, Object>> list = dao.getListAll(tableName, items, whereSql, orderSql);
	
	lang = request.getParameter("lang") != null ? request.getParameter("lang") : "kr";
	tableName = "TBL_HISTORY";
	items = "IDX,LANG,YEAR,MONTH,CONTENT,FILENAME,TYPE,ALT";
	whereSql = "WHERE LANG='" + lang + "' AND TYPE='image' AND YEAR >= " + syear + " AND YEAR <= '" + eyear + "'";
	orderSql = "  ORDER BY YEAR DESC, MONTH DESC";
	
	/* ArrayList<HashMap<String,Object>> imageList = service.getFrontList(request, "image", syear, eyear); */
	ArrayList<HashMap<String, Object>> imageList = dao.getListAll(tableName, items, whereSql, orderSql);	

	lang = "kr";
	String SEQ = request.getParameter("seq")==null?"0":request.getParameter("seq");
	int seq = Integer.parseInt(SEQ);
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
						<li class="gt last"><a href="/front/01company/history.jsp">주요연혁</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>주요연혁</h1>
					<div class="tab tab3">
						<ul>
							<li <%if (seq==0) {%>class="on"<%}%>><a href="/front/01company/history.jsp?seq=0&s=2010&e=2017"><span>현재 ~ 2010년</span></a></li>
							<li <%if (seq==1) {%>class="on"<%}%>><a href="/front/01company/history.jsp?seq=1&s=2000&e=2009"><span>2009년 ~ 2000년</span></a></li>
							<li <%if (seq==2) {%>class="on"<%}%>><a href="/front/01company/history.jsp?seq=2&s=1976&e=1999"><span>1999년 ~ 1976년</span></a></li>
						</ul>
					</div>

					<!-- [D] 각 탭이 선택될 때, h2태그가 각 탭 이름으로 보이게 해주세요! -->
					<%if (seq==0) {%><h2 class="hidden">현재 ~ 2010년</h2><%}%>
					<%if (seq==1) {%><h2 class="hidden">2009년 ~ 2000년</h2><%}%>
					<%if (seq==2) {%><h2 class="hidden">1999년 ~ 1976년</h2><%}%>

					<div class="history">
						<div class="history_slider">
							<div id="history_slide" class="owl-carousel">
							<% for (int i=0; i<imageList.size(); i++) { 
								HashMap<String, Object> h = (HashMap<String,Object>)imageList.get(i);
							%>
								<div class="item"><img src="/uploads/history/<%=h.get("FILENAME")%>" alt="<%=h.get("ALT")%>" style="width:199px; height:134px;"/></div>
							<% } %>
							</div>
						</div>
						<ul class="list_history">
						<%
						String year = "";
						for (int i=0; i<list.size(); i++) { 
							HashMap<String,Object> record = (HashMap<String,Object>)list.get(i);
							String cyear = ""+record.get("YEAR");
							String cmonth = Integer.parseInt(record.get("MONTH").toString())>=10?""+record.get("MONTH"):"0"+record.get("MONTH");
							String content = (String)record.get("CONTENT");
							if (!year.equals(cyear)) { 
								year = cyear;
								if (i>0) {
							%>
									</dl>
								</li>
								<li>
									<dl>
									<dt><%=cyear%></dt>
							<%
								}else{ %>
								<li>
									<dl>
									<dt><%=cyear%></dt>
							<% 
								} 
							} 
							%>
									<dd><em><%=cmonth%></em><%=content %></dd>
						<% } %>
								</dl>
							</li>
						</ul>
						<a href="#viewMore" class="btn_history p_hidden t_hidden">더보기</a>
					</div>
					

				</div>

				<div class="bt_top">
					<a href="#layoutWrap"><img src="/front/images/sub/bt_top.png" alt="상단으로"></a>
				</div>
			</div>
			<!-- container e -->

		</div>
	</div>
<jsp:include page="/front/inc/footer.jsp"></jsp:include>
</body>
</html>