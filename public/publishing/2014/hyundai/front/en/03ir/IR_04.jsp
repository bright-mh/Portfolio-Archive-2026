<%@ page language="java" pageEncoding="UTF-8" 
%><%@ page import="com.rbipt.RB" 
%><%@ page import="java.util.ArrayList" 
%><%@ page import="java.util.HashMap" 
%><%@page import="com.rbipt.service.IRService"
%><%
	String grp_cd = "1";
	IRService service = new IRService(application, grp_cd);
	String lang = "EN";
	ArrayList<HashMap<String,Object>> list = service.getList(request,lang);
	int totalCnt = service.getCnt(request, lang);
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
			<p>PC에 최적화된 페이지 입니다.</p>
		</div>
		<div class="wrap">
			<p class="blind">INVESTOR RELATIONS</p>
			<!-- lnb s -->
			<jsp:include page="/front/en/inc/lnb_03ir.jsp"></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg2">
					<ul>
						<li><a href="/front/en/index.jsp"><span class="ico"></span></a></li>
						<li class="gt"><a href="#none">IR</a></li>
						<li class="gt last"><a href="#none">IR MATERIAL</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>IR MATERIAL</h1>
					
					<div class="tab tab2">
						<ul>
							<li class="on w_02"><a href="/front/en/03ir/IR_04.jsp"><span>IR REPORT</span></a></li>
							<li class="w_02"><a href="/front/en/03ir/IR_05.jsp"><span>EARNING RELEASE</span></a></li>
						</ul>
					</div>

					<div class="irTitle">
						<h2>IR REPORT</h2>
						<span>Total : <%=totalCnt %></span>
					</div>
					
					<div class="ir_manage">
						<div class="tbl_red mt0">
							<table summary="No., Document, Download">
							<caption>IR REPORT LIST</caption>
							<colgroup>
							<col style="width:12%">
							<col style="width:78%">
							<col style="width:20%">
							</colgroup>
							<thead>
							<tr>
								<th scope="col">No.</th>
								<th scope="col">Document</th>
								<th scope="col">Download</th>
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
								<td><%=totalCnt-((pgnum*10)-10+(i))%></th>
								<td class="txtL"><%=h.get("TITLE")%></td>
								<td><a href="/upload/introduction/<%=h.get("DOWNLOAD")%>" class="btn_down_red" title="<%=h.get("TITLE")%>">Down</a></td>
							</tr>
							<% } %>
							
							</tbody>
							</table>
						</div>
					</div>
					
					<%
						String pg = request.getParameter("pg"); 
						String limit = request.getParameter("limit")==null||request.getParameter("limit").equals("null")?"10":request.getParameter("limit");
						%>		
						<jsp:include page="/front/inc/paging.jsp" flush="true" >
							<jsp:param name="pg" value="<%=pg %>" />
							<jsp:param name="limit" value="<%=limit %>" />
							<jsp:param name="totalCnt" value="<%=totalCnt %>" />
							<jsp:param name="lang" value="en" />
							<jsp:param name="link" value='<%="/front/en/03ir/IR_04.jsp?grp_cd="+grp_cd%>' />
						</jsp:include>
					

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
