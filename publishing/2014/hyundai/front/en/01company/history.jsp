<%@ page language="java" pageEncoding="UTF-8"
%><%@ page import="java.util.ArrayList" 
%><%@ page import="java.util.HashMap" 
%><%@ page import="com.rbipt.RB" 
%><%@ page import="com.rbipt.service.HistoryService" 
%><%
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

	ArrayList<HashMap<String,Object>> list = service.getFrontList(request, "text", syear, eyear);
	ArrayList<HashMap<String,Object>> imageList = service.getFrontList(request, "image", syear, eyear);

	String lang = "en";
	String SEQ = request.getParameter("seq")==null?"0":request.getParameter("seq");
	int seq = Integer.parseInt(SEQ);
%>
<!DOCTYPE html>
<html lang="ko">
<head>
	<jsp:include page="/front/en/inc/top.jsp"></jsp:include>
</head>
<body class="main">
	<jsp:include page="/front/en/inc/head.jsp"></jsp:include>
	<div class="article">
		<div class="wrap">
			<p class="blind">COMPANY INTRODUCTION</p>
			<!-- lnb s -->
			<jsp:include page="/front/en/inc/lnb_01company.jsp"></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg0">
					<ul>
						<li><a href="/front/en/index.jsp"><span class="ico"></span></a></li>
						<li class="gt"><a href="#none">COMPANY</a></li>
						<li class="gt last"><a href="#none">HISTORY</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>HISTORY</h1>
					<div class="tab tab3">
						<ul>
							<li class="<%if (seq==0) {%>on<%}%> w_04"><a href="/front/en/01company/history.jsp?lang=en&seq=0&s=2010&e=2017"><span>NOW ~ 2010</span></a></li>
							<li class="<%if (seq==1) {%>on<%}%> w_04"><a href="/front/en/01company/history.jsp?lang=en&seq=1&s=2000&e=2009"><span>2009 ~ 2000</span></a></li>
							<li class="<%if (seq==2) {%>on<%}%> w_04"><a href="/front/en/01company/history.jsp?lang=en&seq=2&s=1976&e=1999"><span>1999 ~ 1976</span></a></li>
						</ul>
					</div>

					<div class="history">
						<div class="history_slider">
							<div id="history_slide" class="owl-carousel">
							<% for (int i=0; i<imageList.size(); i++) { 
								HashMap<String, Object> h = (HashMap<String,Object>)imageList.get(i);
							%>
								<div class="item"><img src="/uploads/history/<%=h.get("FILENAME")%>" alt="이미지 <%=h.get("FILENAME")%>" ></div>
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
						<a href="#viewMore" class="btn_history p_hidden t_hidden">more</a>
					</div>
					

				</div>

				<div class="bt_top">
					<a href="#layoutWrap"><img src="/front/en/images/sub/bt_top.png" alt="상단으로"></a>
				</div>
			</div>
			<!-- container e -->

		</div>
	</div>

<jsp:include page="/front/en/inc/footer.jsp"></jsp:include>
</body>
</html>
