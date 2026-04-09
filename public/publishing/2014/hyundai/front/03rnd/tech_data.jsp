<%@ page language="java" pageEncoding="UTF-8" 
%><%@ page import="com.rbipt.RB" 
%><%@ page import="java.util.ArrayList" 
%><%@ page import="java.util.HashMap" 
%><%@ page import="com.rbipt.service.ResearchService" 
%><%
	ResearchService service = new ResearchService(application);
	String grp_cd = request.getParameter("grp_cd")==null?"":request.getParameter("grp_cd");
	ArrayList<HashMap<String,Object>> list = service.getList(request);
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
			<p class="blind">TECHNOLOGICAL INNOVATION / 현대산업개발은 가치 지향적 경영과 끊임없는 혁신을 기반으로 더 높이 도약합니다.</p>

			<!-- lnb s -->
			<jsp:include page="/front/inc/lnb_03rnd.jsp"></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg2">
					<ul>
						<li><a href="/front/index.jsp"><span class="ico">HOME</span></a></li>
						<li class="gt"><a href="/front/03rnd/tech_info.jsp">기술혁신</a></li>
						<li class="gt last"><a href="/front/03rnd/tech_data.jsp">논문자료</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1 class="pb20">논문자료</h1>
					
					<div class="box_clear">
						<div class="tech fr">
							<select title="논문자료 구분별(건축, 토목) 검색" class="box_select" onchange="go(this.value)">
								<option value="">전체</option>
								<option value="1" <%if (grp_cd.equals("1")){%>selected="selected" <%}%>>건축</option>
								<option value="2" <%if (grp_cd.equals("2")){%>selected="selected" <%}%>>토목</option>
							</select>
						</div>
					</div>
					<div class="rd table mt10">
						<div class="tbl_red">
							<table summary="건축과 토목의 논문자료 다운로드">
								<caption>논문자료 리스트</caption>
								<colgroup>
									<col style="width:10%">
									<col style="width:">
									<col style="width:10%">
								</colgroup>
								<thead>
									<tr>
										<th scope="col">구분</th>
										<th scope="col">제목</th>
										<th scope="col">내용</th>
									</tr>
								</thead>
								<tbody>
									<% for (int i=0; i<list.size(); i++) { 
										HashMap<String,Object> h = list.get(i);
										String grpCd = ""+h.get("GRP_CD");
									%>
									<tr>
										<td><%=grpCd.equals("1")?"건축":grpCd.equals("2")?"토목":grpCd%></td>
										<td class="txtL"><%=h.get("TITLE") %></td>
										<td><a href="/uploads/research/<%=h.get("FILENAME") %>"><img src="/front/images/ico/ico_rdown.gif" alt="논문자료 다운받기"/></a></td>
									</tr>
									<% } %>
								</tbody>
							</table>
						</div>
					</div>

					<%
					String pg = request.getParameter("pg"); 
					String limit = request.getParameter("limit");
					int totalCnt = service.getCnt(request,grp_cd);
					%>
					<jsp:include page="/front/inc/paging.jsp" flush="true" >
						<jsp:param name="pg" value="<%=pg %>" />
						<jsp:param name="limit" value="<%=limit %>" />
						<jsp:param name="totalCnt" value="<%=totalCnt %>" />
						<jsp:param name="link" value='<%="/front/03rnd/tech_data.jsp?grp_cd="+grp_cd%>' />
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
<script>
	function go(idx) {
		location.href="/front/03rnd/tech_data.jsp?grp_cd="+idx;
	}
</script>
</body>
</html>