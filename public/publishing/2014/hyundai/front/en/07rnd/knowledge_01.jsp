<%@ page language="java" pageEncoding="UTF-8" %>
<%@ page import="com.rbipt.RB" 
%><%@ page import="java.util.ArrayList" 
%><%@ page import="java.util.HashMap" 
%>
<%@ page import="com.rbipt.service.PatentService"%>
<%@ page import="com.rbipt.dao.PatentDAO"%>
<%
	PatentService service = new PatentService(application);
	/* ArrayList<HashMap<String,Object>> list = service.getList(request, "civil"); */
	
	
	String lang = request.getParameter("lang")==null?"en":request.getParameter("lang");
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
	String whereSql = "WHERE GRP_CD='"+grpCd+"' AND LANG = 'en'";
	String orderSql = "ORDER BY APPLICATION_DATE DESC, IDX DESC";
	ArrayList<HashMap<String, Object>> list = dao.getList(intPg, intLimit, whereSql, orderSql);
	
	
	String grp_cd = request.getParameter("grp_cd")==null?"1":request.getParameter("grp_cd");
	
%>
<!DOCTYPE html>
<html lang="ko">
<head>
	<jsp:include page="/front/en/inc/top.jsp"></jsp:include>
</head>
<body class="main">
	<jsp:include page="/front/en/inc/head.jsp"></jsp:include>
	<div class="article alert" id="content">
		<div class="gray">
			<p>Pages that are optimized for PC</p>
		</div>
		<div class="wrap">
			<p class="blind">TECHNOLOGICAL INNOVATION</p>
			<!-- lnb s -->
			<jsp:include page="/front/en/inc/lnb_07rnd.jsp"></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg7">
					<ul>
						<li><a href="/front/en/index.jsp"><span class="ico"></span></a></li>
						<li class="gt"><a href="#none">INNOVATION</a></li>
						<li class="gt last"><a href="#none">INTELLECTUAL PROPERTY</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>Intellectual Property</h1>
					<div class="tab tab3">
						<ul>
							<li><a href="/front/en/07rnd/new_techbuild.jsp"><span>New Technology</span></a></li>
							<li class="on"><a href="/front/en/07rnd/knowledge_01.jsp"><span>Patent</span></a></li>
						</ul>
					</div>

					<div class="rd table">
						<div class="tbl_red">
						<table summary="Title, Registration Date, Registration Number, Application Date">
						<caption>Patent</caption>
						<colgroup>
						<col style="width:%">
						<col style="width:18%">
						<col style="width:18%">
						<col style="width:18%">
						</colgroup>
						<thead>
						<tr>
							<th scope="col">Title</th>
							<th scope="col">Registration<br/> Date</th>
							<th scope="col">Registration<br/> Number</th>
							<th scope="col">Application<br/> Date</th>
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
					whereSql ="WHERE GRP_CD='"+grpCd+"' AND LANG = 'en'";
					int totalCnt = dao.getCount(tableName, whereSql);
					
					%>
					<jsp:include page="/front/inc/paging.jsp" flush="true" >
						<jsp:param name="pg" value="<%=pg %>" />
						<jsp:param name="limit" value="<%=limit %>" />
						<jsp:param name="totalCnt" value="<%=totalCnt %>" />
						<jsp:param name="lang" value="en" />
						<jsp:param name="link" value='<%="/front/en/07rnd/knowledge_01.jsp?grp_cd="+grp_cd%>' />
					</jsp:include>	


				</div>

				<div class="bt_top">
					<a href="#layoutWrap"><img src="/images/sub/bt_top.png" alt="Top of page"/></a>
				</div>
			</div>
			<!-- container e -->

		</div>
	</div>

<jsp:include page="/front/en/inc/footer.jsp"></jsp:include>
</body>
</html>
