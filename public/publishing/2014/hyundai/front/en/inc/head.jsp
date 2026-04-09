<%@ page language="java" pageEncoding="UTF-8" %>
<div id="skipNavi">
	<ul>
		<li><a href="#menu">Go to menu</a></li>
		<li><a href="#content">Go to content</a></li>
	</ul>
</div>

<div id="layoutWrap">

	<div class="header">
		<div class="wrap" id="menu">
			<h1><a href="/front/en/index.jsp"><img src="/front/en/images/main/logo.png" alt="HDC 현대산업개발"></a></h1>
			<ul class="gnb m_hidden">
				<li><a href="/front/en/01company/ceo_01.jsp">COMPANY</a>
					<div class="gnb_sub">
					<ul>
						<li class="first"><a href="/front/en/01company/ceo_01.jsp">CEO Message</a></li>
						<li><a href="/front/en/01company/vision2016_01.jsp">VISION</a></li>
						<li><a href="/front/en/01company/history.jsp?lang=en">HISTORY</a></li>
						<li><a href="/front/en/01company/group.jsp">AFFILIATES</a></li>
					</ul>
					</div>
				</li>
				<li><a href="/front/en/02business/housing_info.jsp">BUSINESS</a>
					<div class="gnb_sub">
					<ul>
						<li class="first02"><a href="/front/en/02business/housing_info.jsp">HOUSING</a></li>
						<li><a href="/front/en/02business/build_info.jsp">ARCHITECTUAL WORKS</a></li>
						<li><a href="/front/en/02business/civil_info.jsp">CIVIL WORKS</a></li>
						<li><a href="/front/en/02business/plant_info.jsp">PLANT</a></li>
						<li><a href="/front/en/02business/abroad_info.jsp">OVERSEAS</a></li>
						<li><a href="/front/en/02business/aptcomplex_info.jsp">DEVELOPMENT</a></li>
					</ul>
					</div>
				</li>
				<li class="li_w2"><a href="/front/en/07rnd/tech_info.jsp">R&amp;D</a>
					<div class="gnb_sub">
					<ul>
						<li class="first03"><a href="/front/en/07rnd/tech_info.jsp">R&amp;D CENTER</a></li>
						<li><a href="/front/en/07rnd/research_01.jsp">FIELD OF RESEARCH</a></li>
						<li><a href="/front/en/07rnd/new_techbuild.jsp">INTELLECTUAL PROPERTY</a></li>
					</ul>
					</div>
				</li>
				<li class="li_w"><a href="/front/en/08sustainability/quality_manage01.jsp">SUSTAINABILITY</a>
					<div class="gnb_sub">
					<ul>
						<li><a href="/front/en/08sustainability/quality_manage01.jsp">ETHICAL MANAGEMENT</a></li>
						<li><a href="/front/en/08sustainability/quality_manage02_01.jsp">ENVIRONMENTAL MANAGEMENT</a></li>
						<li><a href="/front/en/08sustainability/quality_manage03_01.jsp">SAFETY MANAGEMENT</a></li>
						<li><a href="/front/en/08sustainability/quality_manage04.jsp">COEXISTENCE MANAGEMENT</a></li>
						<li><a href="/front/en/08sustainability/contribute_01.jsp">SOCIAL CONTRIBUTION</a></li>
					</ul>
					</div>
				</li>
				<li class="li_w2"><a href="/front/en/03ir/IR_01.jsp">IR</a>
					<div class="gnb_sub">
					<ul>
						<li class="sub_effect02"><a href="/front/en/03ir/IR_01.jsp">FINANCIAL STATEMENT</a></li>
						<li><a href="/front/en/03ir/IR_04.jsp">IR MATERIAL</a></li>
						<li><a href="/front/en/03ir/IR_06.jsp">CREDIT RATING</a></li>
					</ul>
					</div>
				</li>
				<li class="li_w3"><a href="/front/en/04prcenter/ci_info.jsp">PR CENTER</a>
					<div class="gnb_sub">
					<ul>
						<li class="sub_effect01"><a href="/front/en/04prcenter/ci_info.jsp">CI/BI CENTER</a></li>
						<li><a href="/front/en/04prcenter/brochure.jsp">E-BROCHURE</a></li>
						<li><a href="/front/en/04prcenter/pr_video.jsp">PR FILM</a></li>
						<li><a href="/front/en/04prcenter/lobby_concert.jsp?limit=4&lang=en">LOBBY CONCERT</a></li>
					    <li><a href="/front/en/04prcenter/Masterpiece.jsp">MASTERPIECE</a></li>
					</ul>
					</div>
				</li>
				<!--
				<li><a href="/front/en/05customercenter/location.jsp">CUSTOMER SERVICE</a>
                    <div class="gnb_sub">
                    <ul>
                        <li class="sub_effect03"><a href="/front/en/05customercenter/location.jsp">CONTACT US</a></li>
                        <li><a href="/front/en/05customercenter/csCenter.jsp">Q&A</a></li>
                    </ul>
                    </div>
                </li>
				-->
			</ul>
			<select title="언어 선택(choose your language)" class="box_select" onChange="window.open(value,'_self');">
				<option value="/front/en/index.jsp">ENGLISH</option>
				<option value="/front/index.jsp">KOREA</option>
			</select>
		</div>
		<div class="p_hidden t_hidden btn_mgnb">
			<h2><img src="/front/en/images/ico/ico_mgnb.png" alt="모바일메뉴" onClick="mobileMenuClick()"></h2>
		</div>
	</div>

	<div id="mobileMenu" class="p_hidden t_hidden">
		<h2 class="hidden">모바일 메뉴</h2>
		<ul class="gnb">
			<li><a href="#openCompany">COMPANY</a>
				<ul class="sub_gnb">
					<li><a href="/front/en/01company/ceo_01.jsp">CEO Message</a></li>
					<li><a href="/front/en/01company/vision2016_01.jsp">VISION</a></li>
					<li><a href="/front/en/01company/history.jsp?lang=en">HISTORY</a></li>
					<li><a href="/front/en/01company/group.jsp">AFFILIATES</a></li>
				</ul>
			</li>
			<li><a href="#openBusiness">BUSINESS</a>
				<ul class="sub_gnb">
					<li><a href="/front/en/02business/housing_info.jsp">HOUSING</a></li>
					<li><a href="/front/en/02business/build_info.jsp">ARCHITECTUAL WORKS</a></li>
					<li><a href="/front/en/02business/civil_info.jsp">CIVIL WORKS</a></li>
					<li><a href="/front/en/02business/plant_info.jsp">PLANT</a></li>
					<li><a href="/front/en/02business/abroad_info.jsp">OVERSEAS</a></li>
					<li><a href="/front/en/02business/aptcomplex_info.jsp">DEVELOPMENT</a></li>
				</ul>
			</li>
			<li><a href="#openSustainability">SUSTAINABILITY</a>
				<ul class="sub_gnb">
					<li><a href="/front/en/08sustainability/contribute_01.jsp">SOCIAL CONTRIBUTION</a></li>
				</ul>
			</li>
			<li><a href="#openPRCenter">PR CENTER</a>
				<ul class="sub_gnb">
					<li><a href="/front/en/04prcenter/pr_video.jsp">PR FILM</a></li>
					<li><a href="/front/en/04prcenter/lobby_concert.jsp?limit=4&lang=en">LOBBY CONCERT</a></li>
				</ul>
			</li>
		</ul>
		<div class="bg"></div>
	</div>