<%@page import="java.util.Date"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@ page language="java" pageEncoding="UTF-8"%>
<% request.setCharacterEncoding("UTF-8"); %>
<%@ page import="com.rbipt.RB" 
%><%@ page import="java.util.ArrayList" 
%><%@ page import="java.util.HashMap" 
%>
<%@ page import="com.rbipt.service.NewsService"%>
<%@ page import="com.rbipt.dao.NewsDAO"%>
<%@ page import="com.rbipt.dao.AffiliatesDAO"%>
<%
	NewsService service = new NewsService(application);
	/* ArrayList<HashMap<String,Object>> list = service.getList(request); */
	
	
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
	NewsDAO dao = new NewsDAO();
	
	String whereSql = "WHERE CONVERT(VARCHAR(8),getdate(),112) >= CONVERT(VARCHAR(8),startdate,112)";
	String search_text2 = "";
 	String search_text = request.getParameter("keyword");
	String search_type = request.getParameter("search_key");
	if(  search_text != null && search_text.length() != 0){
		if( "A".equals(search_type)  ){	// 내용 검색
			whereSql += "AND  (CONTENT1 LIKE '%"+search_text+"%' OR CONTENT2 LIKE '%"+search_text+"%')";
		} else if( "B".equals(search_type)  ){	// 제목 검색
			whereSql += "AND  TITLE LIKE '%"+search_text+"%'";
		} else if( "C".equals(search_type)  ){	// 날짜 검색
			if(search_text.length() == 7 || search_text.length() == 5){
				search_text2 = search_text + "-31"; 
				search_text += "-01";
			}else if(search_text.length() == 4){
				search_text2 = search_text + "-12-31"; 
				search_text += "-01-01";
			}else if(search_text.length() == 6){
				search_text2 = search_text + "31"; 
				search_text += "01";
			}
			whereSql += "AND (CONVERT(VARCHAR, REGDATE, 23) = '"+search_text+"' OR CONVERT(VARCHAR, REGDATE, 112) = '"+search_text+"') OR (REGDATE >='"+search_text+"' AND REGDATE <= '"+search_text2+"')";           
		} else if( "D".equals(search_type)  ){	// 내용+제목 검색
			whereSql += " AND (TITLE LIKE '%"+search_text+"%' OR CONTENT1 LIKE '%"+search_text+"%' or CONTENT2 LIKE '%"+search_text+"%' )";
		}else {
			whereSql += " AND (TITLE LIKE '%"+search_text+"%' OR CONTENT1 LIKE '%"+search_text+"%' or CONTENT2 LIKE '%"+search_text+"%' )";
		}
	}
	String orderSql = "ORDER BY STARTDATE DESC, news_idx DESC";
	
	ArrayList<HashMap<String, Object>> list = dao.getList(intPg, intLimit, whereSql, orderSql);
	
	
	
	HashMap<String,Object> recentData = service.getRecentPost(request);
	/* int totalCnt = service.getCnt(request); */
	
	AffiliatesDAO dao1 = new AffiliatesDAO();
	String tableName = "EX_SALENEWS";
	whereSql = "WHERE CONVERT(VARCHAR(8),getdate(),112) >= CONVERT(VARCHAR(8),startdate,112)";
	
 	search_text = request.getParameter("keyword");
 	
	search_type = request.getParameter("search_key");
	
	if(  search_text != null && search_text.length() != 0){
		if( "A".equals(search_type)  ){	// 내용 검색
			whereSql += "AND (CONTENT1 LIKE '%"+search_text+"%' OR CONTENT2 LIKE '%"+search_text+"%')";
		} else if( "B".equals(search_type)  ){	// 제목 검색
			whereSql += "AND TITLE LIKE '%"+search_text+"%'";
		} else if( "C".equals(search_type)  ){	// 날짜 검색
			if(search_text.length() == 7 || search_text.length() == 5){
				search_text2 = search_text + "-31"; 
				search_text += "-01";
			}else if(search_text.length() == 4){
				search_text2 = search_text + "-12-31"; 
				search_text += "-01-01";
			}else if(search_text.length() == 6){
				search_text2 = search_text + "31"; 
				search_text += "01";
			}
			whereSql += "AND (CONVERT(VARCHAR, REGDATE, 23) = '"+search_text+"' OR CONVERT(VARCHAR, REGDATE, 112) = '"+search_text+"') OR (REGDATE >='"+search_text+"' AND REGDATE <= '"+search_text2+"')";
		} else if( "D".equals(search_type)  ){	// 내용+제목 검색
			whereSql += "AND (TITLE LIKE '%"+search_text+"%' OR CONTENT1 LIKE '%"+search_text+"%' or CONTENT2 LIKE '%"+search_text+"%' )";
		}else {
			whereSql += "AND (TITLE LIKE '%"+search_text+"%' OR CONTENT1 LIKE '%"+search_text+"%' or CONTENT2 LIKE '%"+search_text+"%' )";
		}
	}
	int totalCnt = dao1.getCount(tableName, whereSql);
	
	
	
	int idx = request.getParameter("idx")==null?0:Integer.parseInt(request.getParameter("idx"));
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
			<p class="blind">CYBER PR CENTER / 현대산업개발은 창의적이고 혁신적인 기술력과 경험을 바탕으로 가치 창조적인 공간을 건설하고 있습니다.</p>

			<!-- lnb s -->
			<jsp:include page="/front/inc/lnb_06prcenter.jsp"></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg5">
					<ul>
						<li><a href="/front/index.jsp"><span class="ico">HOME</span></a></li>
						<li class="gt"><a href="/front/06prcenter/news_list.jsp">홍보센터</a></li>
						<li class="gt last"><a href="/front/06prcenter/news_list.jsp">회사소식</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>회사소식</h1>
					<div class="tab tab3 tabM">
						<ul>
							<li class="on"><a href="/front/06prcenter/news_list.jsp"><span>보도자료</span></a></li>
							<li class="m_hidden"><a href="/front/06prcenter/e_sabo.jsp"><span>사보</span></a></li>
							<li><a href="/front/06prcenter/lobby_concert.jsp?limit=4"><span>로비콘서트</span></a></li>
						</ul>
					</div>

					<h2 class="hidden">보도자료</h2>
					<div class="prNews">
						<!--
						<div class="bBox">
							<div class="left">
								<em class="icog">Notice</em>
								<dl>
									<dt class="ellip_2line"><a href="#none"><%=recentData.get("TITLE") %></a></dt>
									<dd class="ellip_4line"><%-- <a href="#none"><%=recentData.get("CONTENT1") %></a> --%></dd>
								</dl>
							</div>
							<div class="right">
								<img src="/front/images/06prcenter/img_news.jpg" alt="무등산 아이파크">
							</div>
						</div>
						-->

						<div class="newsList">
						<form action="/front/06prcenter/news_list.jsp" method="post">
						<%
						String searchKey = request.getParameter("search_key")==null?"":(String)request.getParameter("search_key"); 
						String keyword = request.getParameter("keyword")==null?"":(String)request.getParameter("keyword");
						%>
							<p class="total">Total : <%=totalCnt %></p>
							<div class="search">
								<label for="searchChoice" class="blind">검색방법선택</label>
								<select id="searchChoice" class="box_select02" name="search_key">
									<option value="D">전체</option>
									<option value="A" <%if (searchKey.equals("A")){ out.println (" selected=selected ");} %>>내용</option>
									<option value="B" <%if (searchKey.equals("B")){ out.println (" selected=selected ");} %>>제목</option>
									<option value="C" <%if (searchKey.equals("C")){ out.println (" selected=selected ");} %>>날짜</option>
									<option value="D" <%if (searchKey.equals("D")){ out.println (" selected=selected ");} %>>내용 + 제목</option>
								</select>
								<input type="text" maxlength="20" title="검색어를 입력해 주세요." name="keyword" value="<%=keyword%>">
								<input type="submit" value="검색" title="검색">
							</div>
						</form>
						</div>

						<div class="newsDetail">
							<ul>
							<% 
							int pgnum = request.getParameter("pg")==null?1:Integer.parseInt(request.getParameter("pg"));
							//(pgnum*10)-10 + (i + 1)
							for (int i=0; i<list.size(); i++) { 
								HashMap<String,Object> h = (HashMap<String,Object>)list.get(i);
								String gubun = "";
								if( "news".equals(h.get("STATE")) )	//뉴스
								{
									gubun = "news";
								}
								else if( "salenews".equals(h.get("STATE")) )//분양
								{ 
									gubun = "sale";
								}
								else if( "press".equals(h.get("STATE")) )//공지
								{ 
									gubun = "notice";
								}
								else if( "presshdvp".equals(h.get("STATE")) ) //공지
								{ 
									gubun = "hdnews";
								}
								
								if (gubun.equals("notice") || gubun.equals("hdnews")) 
								{ 
									int id = ((Integer)h.get("NEWS_IDX")).intValue();
								%>
								<li class="news <% if (id == idx) {%>on<%}%>" id="news<%=id%>">
									<a href="#news<%=id%>" title="새 창 열림">
										<span class="num"><%=totalCnt-((pgnum*10)-10+(i))%></span>
										<span class="title"><em class="icog">보도자료</em> <%=h.get("TITLE") %></span>
										<%-- <span class="date"><%=h.get("STARTDATE").toString().substring(0,10) %></span> --%>
										<span class="date"><%=h.get("STARTDATE").toString().substring(0,4)%>-<%=h.get("STARTDATE").toString().substring(4,6)%>-<%=h.get("STARTDATE").toString().substring(6,8)%></span>   
									</a>
									<div class="view">
										<%if (h.get("IMG1")!=null && !h.get("IMG1").equals("")){ 
										%><img src="/upload/news/<%=h.get("IMG1") %>" alt=""><% } %>
										<%=((String)h.get("CONTENT1")).replace("\n", "<br/>") %>
									</div>
								</li>
								<% 
								} 
								else 
								{ 
								%>
								<li class="notice">
									<a href="<%=h.get("URL") %>" target="_blank">
										<span class="num"><%=totalCnt-((pgnum*10)-10+(i))%></span>									
										<span class="title"><em class="icor">News</em> <%=h.get("TITLE") %></span>
										<span class="date"><%=h.get("STARTDATE").toString().substring(0,4)%>-<%=h.get("STARTDATE").toString().substring(4,6)%>-<%=h.get("STARTDATE").toString().substring(6,8)%></span>
									</a>
								</li>
								<% 
								} 
							} 
							%>	
							</ul>
						</div>
					<%
					pg = request.getParameter("pg"); 
					limit = request.getParameter("limit");
					%>
					<jsp:include page="/front/inc/paging.jsp" flush="true" >
						<jsp:param name="pg" value="<%=pg %>" />
						<jsp:param name="limit" value="<%=limit %>" />
						<jsp:param name="totalCnt" value="<%=totalCnt %>" />
						<jsp:param name="search_key" value="<%=searchKey %>" />
						<jsp:param name="keyword" value="<%=RB.encode(keyword)%>" />
						<jsp:param name="link" value="/front/06prcenter/news_list.jsp" />
						<jsp:param name="news" value="news" />
					</jsp:include>
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