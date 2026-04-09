<%@ page language="java" pageEncoding="UTF-8" 
%><%@ page import="com.rbipt.RB" 
%><%@ page import="java.util.ArrayList" 
%><%@ page import="java.util.HashMap" 
%><%@ page import="com.rbipt.service.IRService"%>
<%@ page import="com.rbipt.dao.IRDAO" %>

<%@ page import="java.sql.SQLException" %>
<%@ page import="java.util.ArrayList" %>
<%
	String grp_cd = "1";
	IRService service = new IRService(application, grp_cd);
	String lang = "";
	//ArrayList<HashMap<String,Object>> list = service.getList(request);
	
	String tableName = "IR_DATA2";

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
	IRDAO dao = new IRDAO(tableName);
	String whereSql = lang==null?"":" WHERE TITLE LIKE '%"+lang+"%'";
	String orderSql = "ORDER BY IDX DESC";
	ArrayList<HashMap<String, Object>> list = dao.getList(intPg, intLimit, whereSql, orderSql);
	System.out.println (":::" + whereSql);
		//return result;
	
	lang = "kr";
	int totalCnt = service.getCnt(request);
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
			<p class="blind">INVESTOR RELATIONS / 고객과 주주, 사회, 협력회사, 구성원 모두의 행복을 추구하며 No.1 Value Creator로 역량을 더욱 강화하겠습니다.</p>

			<!-- lnb s -->
			<jsp:include page="/front/inc/lnb_05ir.jsp"></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg4">
					<ul>
						<li><a href="/front/index.jsp"><span class="ico">HOME</span></a></li>
						<li class="gt"><a href="/front/05ir/IR_01.jsp">투자정보</a></li>
						<li class="gt last"><a href="/front/05ir/IR_07.jsp">IR정보</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>IR정보</h1>
					<div class="tab tab2">
						<ul>
							<li class="on"><a href="/front/05ir/IR_07.jsp?grp_cd=1&lang=kr"><span>IR 자료</span></a></li>
							<li><a href="/front/05ir/IR_08.jsp?grp_cd=2&lang=kr"><span>실적 자료</span></a></li>
						</ul>
					</div>

					<div class="ir_manage pb0">
						<div class="box_clear pb8">
							<div class="fl"><h2 class="h2_tit mt0 pt0">IR자료</h2></div>
							<div class="fr font_ltgray mt25">Total : <%=totalCnt %></div>
						</div>

						<div class="tbl_red mt0">
							<table summary="제목별 IR자료 다운로드">
								<caption>IR자료 다운로드</caption>
								<colgroup>
									<col style="width:12%" />
									<col style="width:78%" />
									<col style="width:20%" />
								</colgroup>
								<thead>
									<tr>
										<th scope="col">번호</th>
										<th scope="col">제목</th>
										<th scope="col">다운로드</th>
									</tr>
								</thead>
								<tbody>
									<% 
									int pgnum = request.getParameter("pg")==null?1:Integer.parseInt(request.getParameter("pg"));
									//totalCnt-((pgnum*10)-10+(i))
									for (int i=0; list != null &&  i<list.size(); i++) { 
										HashMap<String,Object> h = list.get(i);
									%>
									<tr>
										<td><%=totalCnt-((pgnum*10)-10+(i))%></td>
										<td class="txtL"><%=h.get("TITLE")%></td>
										<!-- <td><a href="/upload/introduction/<%=h.get("DOWNLOAD")%>" class="btn_down_red" title="<%=h.get("TITLE")%>" target="_blank">Down</a></td> -->
										<td><a href="/upload/introduction/<%=h.get("DOWNLOAD")%>" class="btn_down_red" title="새 창 열림" target="_blank">Down</a></td>
									</tr>
									<% } %>
								</tbody>
							</table>
						</div>

						<%
						pg = request.getParameter("pg"); 
						limit = request.getParameter("limit")==null||request.getParameter("limit").equals("null")?"10":request.getParameter("limit");
						%>		
						<jsp:include page="/front/inc/paging.jsp" flush="true" >
							<jsp:param name="pg" value="<%=pg %>" />
							<jsp:param name="limit" value="<%=limit %>" />
							<jsp:param name="totalCnt" value="<%=totalCnt %>" />
							<jsp:param name="link" value='<%="/front/05ir/IR_07.jsp?grp_cd="+grp_cd%>' />
						</jsp:include>
					</div><!-- //ir_manage -->
				</div><!-- //contents -->

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