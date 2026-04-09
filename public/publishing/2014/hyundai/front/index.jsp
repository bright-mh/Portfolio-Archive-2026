<%@ page language="java" pageEncoding="UTF-8" 
%><%@ page import="com.rbipt.RB" 
%><%@ page import="java.util.ArrayList" 
%><%@ page import="java.util.HashMap" 
%><%@ page import="com.rbipt.service.NewsService" 
%>
<%@ page import="com.rbipt.service.BusinessService"%>


<%@ page import="com.rbipt.dao.NewsDAO"%>

<%
	String lang = request.getParameter("lang")==null?"kr":request.getParameter("lang");
	BusinessService businessService = new BusinessService();
	ArrayList<HashMap<String,Object>> businessList = businessService.getMainList(request); 
	NewsService newsService = new NewsService(application);
	//ArrayList<HashMap<String,Object>> newsList = newsService.getList(request);
	
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
		
	
		String orderSql = "ORDER BY STARTDATE DESC, news_idx DESC";
		
		ArrayList<HashMap<String, Object>> newsList = dao.getList(intPg, intLimit, whereSql, orderSql);
	
	
	
	HashMap<String,Object> recentData = newsService.getRecentPost(request);
	int totalCnt = newsService.getCnt(request);
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

			<!-- banner s -->
			<div class="gallery">
				<div class="main_slides">
					<ul class="slides">
						<li>
							<span class="banner_tit">LEADING <strong>DEVELOPER</strong></span>
							<span class="img" style="background-image:url('/front/images/main/img_banner1.png');"><img src="/front/images/main/main_banner_form.png" alt="해운대 아이파크 전경"></span>
							<span class="slides_txt">
								<em>해운대 아이파크</em>
								국내 주택문화에 새로운 변혁을 일으키며 신 주거문화를 창달해 온 현대산업개발, 과학적인 설계와 차별화된 인테리어, 트랜드를 만들어가는 리딩 디벨로퍼로써, 당신의 가치를 한 단계 업그레이드 시켜드립니다.
							</span>
						</li>
						<li>
							<span class="banner_tit">CONNECT TO THE  <strong>WORLD</strong></span>
							<span class="img" style="background-image:url('/front/images/main/img_banner2.png');"><img src="/front/images/main/main_banner_form.png" alt="아이파크타워 전경"></span>
							<span class="slides_txt">
								<em>아이파크타워</em>
								다른 기업과는 차별화된 건축을 지향해온 현대산업개발, 도시공간을 새롭게 창조하고 진정한 건축미학을 제시하며 도시의 이노베이션을 실현해 나갈 것입니다.
							</span>
						</li>
						<li>
							<span class="banner_tit">BUILD THE <strong>FUTURE</strong></span>
							<span class="img" style="background-image:url('/front/images/main/img_banner3.png');"><img src="/front/images/main/main_banner_form.png" alt="부산항대교 전경"></span>
							<span class="slides_txt">
								<em>부산항대교</em>
								현대산업개발은 효율적인 국토발전과 국민의 편익을 도모하기 위해 인간중심, 친환경 건설을 모토로 다양한 토목사업을 수행해왔습니다. 남다른 시각으로 인간의 삶을 더욱 풍요롭게 만드는데 일조할 것입니다.
							</span>
						</li>
						<li>
							<span class="banner_tit">VALUE <strong>CREATOR</strong></span>
							<span class="img" style="background-image:url('/front/images/main/img_banner4.png');"><img src="/front/images/main/main_banner_form.png" alt="삼천포 화력발전소 전경"></span>
							<span class="slides_txt">
								<em>삼천포 화력발전소</em>
								현대산업개발은 다양한 플랜트 건설을 통해 최고의 에너지 플랜트 시공능력을 가진 기업으로 인정 받고 있습니다. 풍요로운 미래사회를 준비한다는 사명감을 가지고 사람의 삶을 윤택하게 하는 에너지 플랜트를 실현하겠습니다.
							</span>
						</li>
					</ul>
				</div>
			</div>
			<!-- banner e -->

			<!-- container s -->
			<div class="container">
				<div class="card">
					<div class="con">
						<h1 class="title"><a href="/front/06prcenter/news_list.jsp">회사소식</a></h1>
						<div class="main_img">
							<a href="/front/06prcenter/news_list.jsp?idx=1859#news1859" class="link_effect"><img src="/front/images/main/company.jpg" alt="현대산업개발, 초역세권 마곡 아이파크 오피스텔 분양 조감도 사진" /></a>
						</div>
						<div class="con_txt">
							<!-- 2014-07-02 영역 삭제 -->
							<!--
							<p class="txt ellip_2line">현대산업개발은 오는 6월 서울 마포구 아현동 85번지 일대 아현 1-3구역을 재개발하는 아현 아이를 현대산업개발은 오는 6월 서울 마포구 아현동 85번지 일대 아현 1-3구역을 재개발하는 아현 아이를</p>
							-->
							<!-- //2014-07-02 영역 삭제 -->

							<!-- 2014-07-02 내용 추가 -->
							<ul class="board">
								<% 
								for (int i=0; i<newsList.size() && i<4; i++) { 
									HashMap h = newsList.get(i);
									if (h.get("STATE").equals("press") || h.get("STATE").equals("presshdvp")){
								%>
								<li <% if (i==3) { %>class="last"<%} %>><a href="/front/06prcenter/news_list.jsp?idx=<%=h.get("NEWS_IDX")%>"><p><%=h.get("TITLE") %></p><%=h.get("STARTDATE").toString().substring(0,4)%>.<%=h.get("STARTDATE").toString().substring(4,6)%>.<%=h.get("STARTDATE").toString().substring(6,8)%></a></li>
								<% 
									}else { %>
								<li <% if (i==3) { %>class="last"<%} %>><a href="<%=h.get("url")%>" target="_blank" onclick="event.preventDefault(); window.open('<%=h.get("url")%>','_blank','statusbar=no,menubar=no,scrollbars=yes,resizable=yes')"><p><%=h.get("TITLE") %></p><%=h.get("REGDATE").toString().substring(0,10).replace("-",".")%></a></li>	
								<%	} 
								}
								%>
							</ul>
							<!-- //2014-07-02 내용 추가 -->
						</div>
					</div>
				</div>

				<div class="card">
					<div class="con">
						<h1 class="title"><a href="/front/02business/housing_biz.jsp">주요사업</a></h1>
						<div class="main_img">
							<a href="/front/02business/build_biz.jsp?grp_cd=1" class="link_effect"><img src="/front/images/main/business.jpg" alt="MBC신사옥"></a>
						</div>
						<div class="con_txt">
							<!-- 2014-07-02 전체 내용 수정 -->
							<% for (int i=0; i<businessList.size() && i < 4; i++) { 
								HashMap h = businessList.get(i);
								String type = (String)h.get("TYPE_CD");
								type=type.trim();
							%>
							<dl class="txt detail w50 <% if(i==3){%>last<%}%>">
								<dt><%=type.equals("house")?"주택":type.equals("civil")?"토목":type.equals("const")?"건축":type.equals("plant")?"플랜트":"" %></dt>
								<dd><a href="<%=type.equals("house")?"/front/02business/housing_biz.jsp":type.equals("civil")?"/front/02business/civil_biz.jsp?grp_cd="+h.get("GRP_CD"):type.equals("const")?"/front/02business/build_biz.jsp?grp_cd="+h.get("GRP_CD"):type.equals("plant")?"/front/02business/plant_biz.jsp":"#link" %>"><%=h.get("NAME") %></a></dd>
							</dl>
							<% } %>
							<!-- //2014-07-02 전체 내용 수정 -->
						</div>
					</div>
				</div>

				<div class="card m_hidden">
					<div class="con">
						<h1 class="title"><a href="/front/05ir/IR_01.jsp">투자정보</a></h1>
						<div class="main_img">
							<a href="/front/05ir/IR_01.jsp" class="link_effect"><img src="/front/images/main/ir.jpg" alt="투자정보"></a>
						</div>
						<div class="con_txt">
							<!-- 2014-07-02 영역 삭제 -->
							<!-- <p class="txt ellip_2line">고객과 주주, 사회, 협력회사, 구성원 모두의 행복을 추구하며 No.1 Value Creator로서 역량을 더욱 강화하겠습니다.</p> -->
							<!-- //2014-07-02 영역 삭제 -->

							<!-- 2014-07-02 내용 추가 -->
							<dl class="detail w80">
								<dt>경영정보</dt>
								<dd>
									<ul>
										<li class="first"><a href="/front/05ir/IR_01.jsp">기업지배구조</a></li>
										<li><a href="/front/05ir/IR_02.jsp">정관</a></li>
									</ul>
								</dd>
							</dl>
							<!-- //2014-07-02 내용 추가 -->
							<dl class="detail w80">
								<dt>재무정보</dt>
								<dd>
									<ul>
										<li class="first"><a href="/front/05ir/IR_03.jsp">재무제표</a></li>
										<li><a href="/front/05ir/IR_04.jsp?limit=300">신용등급</a></li>
									</ul>
								</dd>
							</dl>
							<dl class="detail w80">
								<dt>IR정보</dt>
								<dd>
									<ul>
										<li class="first"><a href="/front/05ir/IR_08.jsp?grp_cd=2&lang=kr">실적자료</a></li>
										<li><a href="/front/05ir/IR_07.jsp">IR자료</a></li>
									</ul>
								</dd>
							</dl>
							<dl class="detail last w80">
								<dt>주가정보</dt>
								<dd>
									<ul>
										<li class="first"><a href="/front/05ir/IR_05.jsp">현재가 및 시간대별주가</a></li>
										<!--li><a href="#none">시간대별주가</a></li-->
									</ul>
								</dd>
							</dl>
						</div>
					</div>
				</div>

				<div class="card">
					<div class="con">
						<h1 class="title"><a href="/front/06prcenter/pr_video.jsp">홍보영상</a></h1>
						<p class="sub_title t_hidden">INNOVATION</p>
						<!-- 2014-07-02 class="main_img02" 추가 -->
						<div class="main_img main_img02">
						<!-- //2014-07-02 class="main_img02" 추가 -->
							<a href="/front/06prcenter/pr_video.jsp" class="bt"><img src="/front/images/main/bt_play.png" alt="동영상보러가기"></a>
							<img src="/front/images/main/prcenter0.jpg" alt="홍보영상">
						</div>
						<div class="m_hidden p_hidden mov_info">
							<p>
								어디에서 시작하여 어디로 향해 갑니까? 지나온 시간을 
								되돌아봅니다. 어려운때일수록 과감히 투자했습니다. 
								위기와 실현에 직면해도. 혁신적인 사고로 변화를 주도했습니다. 
								그리하여 미래를 바꿀 수 있었습니다. 현대산업개발의 이노베이션은 
								남들과 다른 미래를 만들어 냈습니다.
							</p>
							<p class="ellip_3line">
								남들은 이미 개발된 도시에 집을 지었지만 현대산업개발은 도전과 
								혁신정신으로 가장 수준높은 삶...
							</p>
						</div>
					</div>
				</div>

				<div class="card">
					<div class="con">
						<h1 class="title"><a href="/front/06prcenter/lobby_concert.jsp?limit=4">로비콘서트</a></h1>
						<p class="sub_title">11월, 여성듀오 '황명하 & 디안'</p>
						<!-- 2014-07-02 class="main_img02" 추가 -->
						<div class="main_img main_img02">
						<!-- //2014-07-02 class="main_img02" 추가 -->
							<a href="/front/06prcenter/lobby_concert.jsp?limit=4" class="bt"><img src="/front/images/main/bt_play.png" alt="동영상보러가기"></a>
							<img src="/front/images/main/prcenter1.jpg" alt="로비콘서트">
						</div>
					</div>
				</div>

				<div class="card">
					<div class="con">
						<h1 class="title"><a href="/front/04sustainability/contribute_01.jsp">사회공헌활동</a></h1>
						<p class="sub_title">나눔의 정신으로 세상을 아름답게</p>
						<!-- 2014-07-02 class="main_img02" 추가 -->
						<div class="main_img main_img02">
						<!-- //2014-07-02 class="main_img02" 추가 -->
							<a href="/front/04sustainability/contribute_01.jsp" class="link_effect"><img src="/front/images/main/prcenter2.jpg" alt="사회공헌활동"></a>
						</div>
					</div>
				</div>

				<div class="card card_s">
					<div class="con">
						<h1 class="title">바로가기</h1>
						<ul class="icon_box">
							<li>
								<a href="http://ponychung.org/" target="_blank" title="새 창 열림">
									<i class="img"><img src="/front/images/ico/ico_foundation.gif" alt=""></i>
									<span><strong>포니정 재단</strong><br>
									FOUNDATION</span>
								</a>
							</li>
							<li>
								<a href="http://www.ponychunghall.com/" target="_blank" title="새 창 열림">
									<i class="img"><img src="/front/images/ico/ico_hall.gif" alt=""></i>
									<span><strong>포니정 홀</strong><br>
									HALL</span>
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div class="card card_w">
					<div class="con">
						<h1 class="title">인재채용</h1>
						<ul class="icon_box2">
							<li>
								<a href="https://recruit.hyundai-dvp.com/front/common/main.dev" target="_blank" title="새 창 열림">
									<i class="img"><img src="/front/images/ico/ico_info.gif" alt=""></i>
									<span><strong>채용정보</strong><br>
									<em class="m_hidden">INFORMATION</em></span>
								</a>
							</li>
							<li>
								<a href="https://recruit.hyundai-dvp.com/front/myhdc/faq.dev?brdCd=F" target="_blank" title="새 창 열림">
									<i class="img"><img src="/front/images/ico/ico_q.gif" alt=""></i>
									<span><strong>채용문의</strong><br>
									<em class="m_hidden">QUESTION</em></span>
								</a>
							</li>
							<li>
								<a href="https://recruit.hyundai-dvp.com/front/apply/apply.dev" target="_blank" title="새 창 열림">
									<i class="img"><img src="/front/images/ico/ico_apply.gif" alt=""></i>
									<span><strong>지원하기</strong><br>
									<em class="m_hidden">APPLY</em></span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<!-- container e -->
		</div>
	</div>
<div class="footer">
		<div class="wrap">
			<div class="f_left">
				<ul>
					<li class="fmn_w1"><a href='#openPrivacyFirm' onclick="window.open('/front/privacy.jsp', 'pop_privacy', 
'resizable=yes scrollbars=yes width=528 height=378')" title="새 창 열림">개인정보취급방침</a></li>
					<li class="fmn_w2"><a href='#openEmailFirm' onclick="window.open('/front/email.jsp', 'pop_privacy', 
'resizable=yes scrollbars=yes width=528 height=378')" title="새 창 열림">이메일무단수집거부</a></li>
					<li class="fmn_w3"><a href="/front/09sitemap/sitemap.jsp">사이트맵</a></li>
					<li class="m_hidden"><a href="/front/08customercenter/faq.jsp">고객센터</a></li>
				</ul>
				<address class="m_hidden">
					<ul>
						<li class="first">140-780 서울특별시 용산구 한강대로 23길 55</li>
						<li>02-2008-9114</li>
					</ul>
				</address>
				<p>COPYRIGHT &copy; HYUNDAI DEVELOPMENT COMPANY. ALL RIGHT RESERVED.</p>
			</div>

			<div class="f_right m_hidden">
				<ul>
					<li class="first"><a href="/front/index.jsp"><img src="/front/images/main/f_logo0.png" alt="HDC 현대산업개발"></a></li>
					<li><a href="https://www.i-park.com/main.jsp" target="_blank" title="새 창 열림"><img src="/front/images/main/f_logo1.png" alt="I PARK"></a></li>
				</ul>
				<div class="family_site">
					<p><a href="#link">Family Site</a></p>
					<ul>
						<li><a href="http://www.i-service.co.kr" target="blank" title="새 창 열림">아이서비스</a></li>
						<li><a href="http://www.incons.co.kr" target="blank" title="새 창 열림">아이앤콘스</a></li>
						<li><a href="http://www.icontrols.co.kr/safari/index.asp" target="blank" title="새 창 열림">아이콘트롤스</a></li>
						<li><a href="http://www.ycpiano.co.kr/" target="blank" title="새 창 열림">영창뮤직</a></li>
						<li><a href="http://www.hyundai-ep.com/" target="blank" title="새 창 열림">현대EP</a></li>
						<li><a href="http://www.iparkmall.co.kr/" target="blank" title="새 창 열림">현대아이파크몰</a></li>
						<li><a href="http://www.parkhyattseoul.co.kr/" target="blank" title="새 창 열림">호텔아이파크</a></li>
						<li><a href="http://www.busanipark.com/" target="blank" title="새 창 열림">아이파크스포츠</a></li>
						<li><a href="http://www.hdcasset.com/" target="blank" title="새 창 열림">HDC 자산운용</a></li>
						<li><a href="http://www.i-cius.com/" target="blank" title="새 창 열림">아이시어스</a></li>
						<li><a href="http://www.i-parkcondo.co.kr/" target="blank" title="새 창 열림">아이파크콘도미니엄</a></li>
						<li><a href="http://its.hyundai-dvp.com:9080/HDLOGIN/login.jsp" target="blank" title="새 창 열림">HDC Partners</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
<!-- 2014-08-07 누락태그 추가 -->
</div>
<!-- //2014-08-07 누락태그 추가 -->
<script>    
	function setCookie(name, value, expiredays) {
	    var today = new Date();
	    today.setDate(today.getDate() + expiredays);
	    document.cookie = name + '=' + escape(value) + '; path=/; expires=' + today.toGMTString() + ';'
	}
	function getCookie(name){
		var wcname = name + '=';
		var wcstart, wcend, end;
		var i = 0;   
		while(i <= document.cookie.length) {            
			wcstart = i;  
			wcend   = (i + wcname.length);            
			if(document.cookie.substring(wcstart, wcend) == wcname) {                    
				if((end = document.cookie.indexOf(';', wcend)) == -1)                           
					end = document.cookie.length;                    
					return document.cookie.substring(wcend, end);            
				}           
				i = document.cookie.indexOf('', i) + 1;            
				if(i == 0)                  
				break;    
			}    
			return '';
		}

//	if(getCookie('eventPop') != 'rangs') {       
//		window.open ('/front/popup/popup20140709.jsp', '_blank', 'width=451, height=458, scrollbars=no, top=10, left=10');
//	}
//	if(getCookie('eventPop03') != 'rangs03') {    
//		window.open ('/front/popup/popup20140801.jsp', '_blank', 'width=697, height=690, scrollbars=yes, top=10, left=10');
//	}
// 2014년 9월 1일에 협력회사팝업오픈예정!!
//	if(getCookie('eventPop02') != 'rangs02') {       
//		window.open ('/front/popup/20140901_pop.jsp', '_blank', 'width=564, height=465, scrollbars=no, top=10, left=10');
//	}
//	try{
//		window.open ('/front/popup/popup20140709.jsp', '_blank', 'width=451, height=464, scrollbars=no, top=10, left=708');
//		window.open ('/front/popup/event.jsp', '_blank', 'width=676, height=680, scrollbars=no, top=10, left=10');
//	}catch (e){
//		alert (e);
//	}
</script>
</body>
</html>
