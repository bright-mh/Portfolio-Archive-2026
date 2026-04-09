<%@ page language="java" pageEncoding="UTF-8" 
%><%@ page import="com.rbipt.RB" 
%><%@ page import="java.util.ArrayList" 
%><%@ page import="java.util.HashMap" 
%><%@ page import="com.rbipt.service.PatentService" 
%>
<%@ page import="com.rbipt.dao.PatentDAO"%>
<%
PatentService service = new PatentService(application);
/* ArrayList<HashMap<String,Object>> list = service.getList(request, "civil"); */


String lang = request.getParameter("lang")==null?"kr":request.getParameter("lang");
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
PatentDAO dao = new PatentDAO();
String grpCd = request.getParameter("grp_cd")!=null?request.getParameter("grp_cd"):"1";
String whereSql = "WHERE GRP_CD='"+grpCd+"' AND LANG = 'kr'";
String orderSql = "ORDER BY APPLICATION_DATE DESC, IDX DESC";
ArrayList<HashMap<String, Object>> list = dao.getList(intPg, intLimit, whereSql, orderSql);


String grp_cd = request.getParameter("grp_cd")==null?"1":request.getParameter("grp_cd");
	
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
			<p class="blind">TECHNOLOGICAL INNOVATION / 선진 건설기술 자립을 위해 축적된 시공경험과 기술력을 바탕으로 차별화된 신기술을 연구개발하고 있습니다.</p>

			<!-- lnb s -->
			<jsp:include page="/front/inc/lnb_03rnd.jsp"></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg2">
					<ul>
						<li><a href="/front/index.jsp"><span class="ico">HOME</span></a></li>
						<li class="gt"><a href="#none">기술혁신</a></li>
						<li class="gt last"><a href="#none">지적재산권</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>지적재산권</h1>
					<div class="tab tab3">
						<ul>
							<li><a href="/front/03rnd/new_techbuild.jsp"><span>신기술</span></a></li>
							<li class="on"><a href="/front/03rnd/knowledge_01.jsp"><span>특허</span></a></li>
						</ul>
					</div>

					<div class="rd table">
						<div class="tbl_red">
						<table summary="명칭, 등록일, 등록번호, 출원일, 권리자 및 비고">
						<caption>특허등록현황</caption>
						<colgroup>
						<col style="width:%">
						<col style="width:15%">
						<col style="width:15%">
						<col style="width:15%">
						</colgroup>
						<thead>
						<tr>
							<th scope="col">명칭</th>
							<th scope="col">등록일</th>
							<th scope="col">등록번호</th>
							<th scope="col">출원일</th>
							<!--권리자 및 비고 담당자 요청으로 인해 삭제 6월30일-->
							<!--th scope="col">권리자 및 비고</th-->
						</tr>
						</thead>
						<tbody>
						<% for (int i=0; i<list.size(); i++ ) {
							HashMap <String,Object> h = (HashMap<String,Object>)list.get(i);
							%>						
						<tr>
							<td class="txtL"><%=h.get("TITLE")%></td>
							<td><%=h.get("APPLICATION_DATE")%></td>
							<td><%=h.get("REG_NO")%></td>
							<td><%=h.get("PERIOD")%></td>
							<!--권리자 및 비고 담당자 요청으로 인해 삭제 6월30일-->
							<!--td class="txtL"><%=h.get("OWNER_BIGO")%></td-->
						</tr>
						<% } %>
						</tbody>
						</table>
						</div>
					</div>

					<%
					pg = request.getParameter("pg"); 
					limit = request.getParameter("limit");
					
					String tableName = "TBL_PATENT";
					grpCd = request.getParameter("grp_cd")!=null?request.getParameter("grp_cd"):"1";
					whereSql ="WHERE GRP_CD='"+grpCd+"' AND LANG = 'kr'";
					int totalCnt = dao.getCount(tableName, whereSql);
					
					%>
					<jsp:include page="/front/inc/paging.jsp" flush="true" >
						<jsp:param name="pg" value="<%=pg %>" />
						<jsp:param name="limit" value="<%=limit %>" />
						<jsp:param name="totalCnt" value="<%=totalCnt %>" />
						<jsp:param name="lang" value="kr" />
						<jsp:param name="link" value='<%="/front/03rnd/knowledge_01.jsp?grp_cd="+grp_cd%>' />
					</jsp:include>	
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