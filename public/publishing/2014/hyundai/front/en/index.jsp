<%@ page language="java" pageEncoding="UTF-8" 
%><%@ page import="com.rbipt.RB" 
%><%@ page import="java.util.ArrayList" 
%><%@ page import="java.util.HashMap" 
%><%@ page import="com.rbipt.service.NewsService" 
%><%@ page import="com.rbipt.service.BusinessService" 
%><%
	String lang = "en";
	BusinessService businessService = new BusinessService();
	ArrayList<HashMap<String,Object>> businessList = businessService.getMainList(request,lang); 
	NewsService newsService = new NewsService(application);
	ArrayList<HashMap<String,Object>> newsList = newsService.getList(request);
	HashMap<String,Object> recentData = newsService.getRecentPost(request);
	int totalCnt = newsService.getCnt(request);
%>
<!DOCTYPE html>
<html lang="ko">
<head>
	<jsp:include page="/front/en/inc/top.jsp"></jsp:include>
</head>
<body class="main">
	<jsp:include page="/front/en/inc/head.jsp"></jsp:include>
	
	<div class="article" id="content">
		<div class="wrap">

			<!-- banner s -->
			<div class="gallery">
				<div class="main_slides">
					<ul class="slides">
						<li>
							<span class="banner_tit">LEADING <strong>DEVELOPER</strong></span>
							<span class="img" style="background-image:url('/front/en/images/main/img_banner1.png');"><img src="/front/en/images/main/main_banner_form.png" alt="Banner1"></span>
							<span class="slides_txt">
								<em>Haeundae IPARK</em>
								Hyundai Development Company has pioneered the development of the Korean housing culture through setting standards of excellence and initiative - constantly improving value and the quality of life for its customers.
							</span>
						</li>
						<li>
							<span class="banner_tit">CONNECT TO THE <strong>WORLD</strong></span>
							<span class="img" style="background-image:url('/front/en/images/main/img_banner2.png');"><img src="/front/en/images/main/main_banner_form.png" alt="Banner2"></span>
							<span class="slides_txt">
								<em>IPARK Tower</em>
								Hyundai Development Company has distingusihed itself through setting the highest standards in architecture. The company is a space builder that rediscovers urban space, and perfoms urban innovation with genuine and truly innovative archtectural aesthetics.
							</span>
						</li>
						<li>
							<span class="banner_tit">BUILD THE <strong>FUTURE</strong></span>
							<span class="img" style="background-image:url('/front/en/images/main/img_banner3.png');"><img src="/front/en/images/main/main_banner_form.png" alt="Banner3"></span>
							<span class="slides_txt">
								<em>Busan Harbor Bridge</em>
								Hyundai Development Company is changing the map of Korea in the 21st century. With its strong values and commitment to excellence, the company find opportunities for new business and continue to enrich people's lives.
							</span>
						</li>
						<li>
							<span class="banner_tit">VALUE <strong>CREATOR</strong></span>
							<span class="img" style="background-image:url('/front/en/images/main/img_banner4.png');"><img src="/front/en/images/main/main_banner_form.png" alt="Banner4"></span>
							<span class="slides_txt">
								<em>Samcheonpo Plant</em>
								Hyundai Development Company has been recognized for its top-notch energy plant construction capacity. To contribute to make a more affluent future society, the Company is committed to building energy plants which enrich life for all.
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
						<h1 class="title"><a href="/front/en/01company/ceo_01.jsp ">COMPANY</a></h1>
						<div class="main_img main_img03">
							<a href="/front/en/01company/ceo_01.jsp "><img src="/front/en/images/main/company.jpg" alt="COMPANY"></a>
						</div>
						<div class="con_txt">
							<!-- <p class="txt ellip_2line">Hyundai Development has made significant contribution in the realization of a better quality of life.</p> -->
							
							<dl class="detail w70 first">
								<dt class="pt5">CEO<br>Message</dt>
								<dd>
									<ul>
										<li><a href="/front/en/01company/ceo_01.jsp">CHAIRMAN</a></li>
										<li><a href="/front/en/01company/ceo_02.jsp">PRESIDENT</a></li>
									</ul>
								</dd>
							</dl>
							<dl class="detail w70">
								<dt>Vision</dt>
								<dd>
									<ul>
										<li><a href="/front/en/01company/vision2016_01.jsp">Vison</a></li>
									</ul>
								</dd>
							</dl>
							<dl class="detail last w70">
								<dt>History</dt>
								<dd>
									<ul>
										<!-- <li><a href="/front/en/01company/history_01.jsp">2010~NOW</a></li>
										<li><a href="/front/en/01company/history_02.jsp">2000~2009</a></li>
										<li class="last p_hidden"><a href="/front/en/01company/history_03.jsp">1976~1999</a></li> -->
										<li><a href="/front/en/01company/history_01.jsp">NOW~2010</a></li>
                                        <li><a href="/front/en/01company/history_02.jsp">2009~2000</a></li>
									</ul>
								</dd>
							</dl>
						</div>
					</div>
				</div>

				<div class="card">
					<div class="con">
						<h1 class="title"><a href="/front/en/02business/housing_biz.jsp?lang=en">BUSINESS</a></h1>
						<div class="main_img main_img03">
							<a href="/front/en/02business/housing_biz.jsp?lang=en"><img src="/front/en/images/main/business.jpg" alt="BUSINESS AREA"></a>
						</div>
						<div class="con_txt con_txt02">
							<% for (int i=0; i<businessList.size() && i < 4; i++) { 
								HashMap h = businessList.get(i);
								String type = (String)h.get("TYPE_CD");
								type=type.trim();
							%>
							
							<dl class="detail w94 <% if(i==0){%>first<%}%>">
								<dt><%=type.equals("house")?"Housing":type.equals("civil")?"Civil Works":type.equals("const")?"Architecture":type.equals("plant")?"Plant":"" %></dt>
								<dd><a href="<%=type.equals("house")?"/front/en/02business/housing_biz.jsp?lang=en":type.equals("civil")?"/front/en/02business/civil_biz.jsp?lang=en&grp_cd="+h.get("GRP_CD"):type.equals("const")?"/front/en/02business/build_biz.jsp?lang=en&grp_cd="+h.get("GRP_CD"):type.equals("plant")?"/front/en/02business/plant_info.jsp?lang=en":"#link" %>"><%=h.get("NAME") %></a></dd>
							</dl>
							<%} %>
						</div>
					</div>
				</div>

				<div class="card m_hidden">
					<div class="con">
						<h1 class="title"><a href="/front/en/03ir/IR_01.jsp">IR</a></h1>
						<div class="main_img main_img03">
							<a href="/front/en/03ir/IR_01.jsp"><img src="/front/en/images/main/ir.jpg" alt="IR"></a>
						</div>
						<div class="con_txt">
							<!-- <p class="txt ellip_2line">To maximize corporate value and shareholders receive from the trust will practice management.</p> -->
							<dl class="detail w97 first">
								<dt class="pt5">Financial<br>Statement</dt>
								<dd>
									<ul>
										<!--li class="mt7"><a href="/front/en/03ir/IR_01.jsp">Balance<br>Sheet</a></li-->
										<li><a href="/front/en/03ir/IR_01.jsp">B/S</a></li>
										<li><a href="/front/en/03ir/IR_02.jsp">I/S</a></li>
										<li><a href="/front/en/03ir/IR_03.jsp">C/F</a></li>
									</ul>
								</dd>
							</dl>
							<dl class="detail w97">
								<dt>IR material</dt>
								<dd>
									<ul>
										<li><a href="/front/en/03ir/IR_04.jsp">IR Report</a></li>
										<li><a href="/front/en/03ir/IR_05.jsp">Earning Release</a></li>
									</ul>
								</dd>
							</dl>
							<dl class="detail last w97">
								<dt class="pt5">Credit<br>Rating</dt>
								<dd>
									<ul>
										<li><a href="/front/en/03ir/IR_06.jsp">Credit Rating</a></li>
										<!--li><a href="#none">Hourly Stock Prices</a></li-->
									</ul>
								</dd>
							</dl>
						</div>
					</div>
				</div>

				<div class="card">
					<div class="con">
						<h1 class="title"><a href="/front/en/04prcenter/pr_video.jsp">PR FILM</a></h1>
						<p class="sub_title t_hidden">INNOVATION</p>
						<!-- 2014-07-04 class="main_img02" 추가 -->
						<div class="main_img main_img02">
						<!-- //2014-07-04 class="main_img02" 추가 -->
							<a href="/front/en/04prcenter/pr_video.jsp" class="bt"><img src="/images/main/bt_play.png" alt="PR FILM"></a>
							<img src="/front/en/images/main/prcenter0.jpg" alt="PR FILM">
						</div>
						<div class="m_hidden p_hidden mov_info">
							<p>
								Where Starting with the Where you going towards? The past time to look back on. The more difficult when I venture investment. Even faced with the realization of the crisis. Changes have led to innovation thinking. So I was able to change the future. Innovation of HDC and other created a different future.
							</p>
							<!--
							<p class="ellip_3line">
								Others, whether the house has already been developed, but the city HDC is the most challenging and innovative spirit to enjoy high quality of life in the city was first developed. The others did not know the apartment HDC is a step ahead and made the apartment, When an ordinary apartment buildings others have built a luxury apartment. Other to do the building, but HDC is the work of art itself is prepares.
							</p>
							-->
						</div>
					</div>
				</div>

				<div class="card">
					<div class="con">
						<h1 class="title"><a href="/front/en/04prcenter/lobby_concert.jsp?limit=4&lang=en">LOBBY CONCERT</a></h1>
						<p class="sub_title">in November, Female duo - Pop concert</p>
						<!-- 2014-07-04 class="main_img02" 추가 -->
						<div class="main_img main_img02">
						<!-- //2014-07-04 class="main_img02" 추가 -->
							<a href="/front/en/04prcenter/lobby_concert.jsp?limit=4&lang=en" class="bt"><img src="/front/en/images/main/bt_play.png" alt="LOBBY CONCERT"></a>
							<img src="/front/en/images/main/prcenter1.jpg" alt="LOBBY CONCERT">
						</div>
					</div>
				</div>

				<div class="card">
					<div class="con">
						<h1 class="title"><a href="/front/en/04prcenter/brochure.jsp">E-BROCHURE</a></h1>
						<p class="sub_title">Company Introduction</p>
						<!-- 2014-07-04 class="main_img02" 추가 -->
						<div class="main_img main_img02">
						<!-- //2014-07-04 class="main_img02" 추가 -->
							<a href="/front/en/04prcenter/brochure.jsp" class="bt"><img src="/front/en/images/main/prcenter2.jpg" alt="Company introduction"></a>
							<img src="/front/en/images/main/prcenter2.jpg" alt="Company introduction">
						</div>
					</div>
				</div>

				<div class="card card_s">
					<div class="con">
						<h1 class="title">CUSTOMER SERVICE</h1>
						<ul class="icon_box">
							<li>
								<a href="/front/en/05customercenter/location.jsp">
									<i class="img"><img src="/front/en/images/ico/ico_info.gif" alt="INFORMATION"></i>
									<span>INFORMATION</span>
								</a>
							</li>
							<li>
								<a href="/front/en/05customercenter/csCenter.jsp">
									<i class="img"><img src="/front/en/images/ico/ico_q.gif" alt="QUESTION"></i>
									<span>QUESTION</span>
								</a>
							</li>
							<!--li>
								<a href="#none">
									<i class="img"><img src="/front/en/images/ico/ico_apply.gif" alt="APPLY"></i>
									<span>APPLY</span>
								</a>
							</li-->
						</ul>
					</div>
				</div>

				<div class="card card_w">
					<div class="con">
						<h1 class="title">QUICK MENU</h1>
						<ul class="icon_box2">
							<li class="w_s1">
								<a href="http://ponychung.org/Eng/default.asp" target="_blank" title="PONYCHUNG FOUNDATION">
									<i class="img"><img src="/front/en/images/ico/ico_foundation.gif" alt="PONYCHUNG FOUNDATION"></i>
									<span>PONYCHUNG <br />FOUNDATION</span>
								</a>
							</li>
							<li class="w_s2">
								<a href="http://www.ponychunghall.com/" target="_blank" title="PONYCHUNG HALL">
									<i class="img"><img src="/front/en/images/ico/ico_hall.gif" alt="PONYCHUNG HALL"></i>
									<span>PONYCHUNG <br />HALL</span>
								</a>
							</li>
							<li>
								<a href="http://www.youtube.com/user/iparkstory" target="_blank" title="YOUTUBE">
									<i class="img"><img src="/front/en/images/ico/ico_youtube.gif" alt="YOUTUBE"></i>
									<span class="style01">YOUTUBE</span>
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
					<li class="fmn_w3"><a href="/front/en/06sitemap/sitemap.jsp">SITE MAP</a></li>
					<li class="fmn_w3"><a href="/front/en/05customercenter/location.jsp">CUSTOMER SERVICE</a></li>
				</ul>
				<!-- <p>COPYRIGHT &copy; HYUNDAI DEVELOPMENT COMPANY. ALL RIGHT RESERVED.</p>
				<p>MAIL TO WEBMASTER FOR MORE INFORMATION</p> -->
				<p>55. Hangang-daero 23-gil, Yongsan-gu, Seoul, 140-780, Korea</p>
                <p>COPYRIGHT &copy; HYUNDAI DEVELOPMENT COMPANY. ALL RIGHT RESERVED</p>
			</div>

			<div class="f_right m_hidden">
				<ul>
					<li class="first"><a href="/front/en/index.jsp"><img src="/front/en/images/main/f_logo0.png" alt="HDC Hyundai Development Company"></a></li>
					<li><a href="https://www.i-park.com/main.jsp" target="_blank" title="새 창 열림"><img src="/front/en/images/main/f_logo1.png" alt="I PARK"></a></li>
				</ul>
				<div class="family_site">
                    <p><a href="#link">Family Site</a></p>
                    <ul>
                        <li><a href="http://www.hyundai-ep.com/english/" target="blank" title="Opens a new window">HYUNDAI EP</a></li>
                        <li><a href="http://www.iparkmall.co.kr/html/language/eng_main.php" target="blank" title="Opens a new window">IPARK MALL</a></li>
                        <li><a href="http://www.hyatt.com/hyatt/index.jsp" target="blank" title="Opens a new window">HOTEL IPARK</a></li>
                        <li><a href="http://busanhaps.com/busan-ipark-soccer" target="blank" title="Opens a new window">IPARK SPORTS</a></li>
                        <li><a href="http://www.hdcasset.com/eng/main.asp" target="blank" title="Opens a new window">ASSET MANAGE..</a></li>
                    </ul>
                </div>
			</div>
		</div>
	</div>

</div>


</body>
</html>
