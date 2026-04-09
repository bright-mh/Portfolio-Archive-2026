<%@ page language="java" pageEncoding="UTF-8" 
%><%@ page import="com.rbipt.RB" 
%><%@ page import="java.util.ArrayList" 
%><%@ page import="java.util.HashMap" 
%><%@page import="com.rbipt.service.BoardService"
%><%
	String grp_cd = "1";
	BoardService service = new BoardService(application); 
	ArrayList<HashMap<String,Object>> list = service.getList(request, grp_cd);
	String lang = request.getParameter("lang")==null?"kr":request.getParameter("lang");
	
%><!DOCTYPE html>
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
			<p class="blind">CUSTOMER CENTER / 현대산업개발은 항상 고객의 소리에 귀 기울이고 있습니다. 고객님을 위해 신속하고 정확한 답변을 드리겠습니다.</p>

			<!-- lnb s -->
			<jsp:include page="/front/inc/lnb_08customercenter.jsp"></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg7">
					<ul>
						<li><a href="/front/index.jsp"><span class="ico">HOME</span></a></li>
						<li class="gt"><a href="/front/08customercenter/faq.jsp">고객센터</a></li>
						<li class="gt last"><a href="/front/08customercenter/faq.jsp">자주하는 질문</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>자주하는 질문</h1>

					<div class="tbl_red tbl_faq">
						<table summary="자주하는 질문 리스트">
							<caption>자주하는 질문</caption>
							<colgroup>
								<col style="width:100%">
							</colgroup>
							<thead>
								<tr>
									<th scope="col">제목</th>
								</tr>
							</thead>
							<tbody>
								<% for (int i=0; list != null &&  i<list.size(); i++) { 
								HashMap<String,Object> h = list.get(i);
								%>
								<tr>
									<td colspan="2">
										<a href="#viewDetail" class="question">Q. <%=h.get("TITLE")%>.</a>
										<div class="answer">
											<p class="tit"><%=((String)h.get("CONTENT")).replace("\n","<br/>") %>
										</div>
									</td>
								</tr>
								<%}%>
							</tbody>
						</table>
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