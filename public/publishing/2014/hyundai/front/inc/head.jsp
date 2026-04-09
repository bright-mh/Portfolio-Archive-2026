<%@ page language="java" pageEncoding="UTF-8"%>
<div id="skipNavi">
	<ul>
		<!-- <li><a href="#menu">메뉴바로가기</a></li> -->
		<li><a href="#content">본문 바로가기</a></li>
	</ul>
</div>

<div id="layoutWrap">

	<div class="header">
		<div class="wrap" id="menu">
			<h1><a href="/front/index.jsp"><img src="/front/images/main/logo.png" alt="HDC 현대산업개발"></a></h1>
			<h2 class="hidden">메인 메뉴</h2>
			<ul class="gnb m_hidden">
				<li><a href="/front/01company/ceo_01.jsp">회사소개</a>
					<div class="gnb_sub">
					<ul>
						<li class="first"><a href="/front/01company/ceo_01.jsp">CEO 인사말</a></li>
						<li><a href="/front/01company/vision2016_01.jsp">VISION</a></li>
						<li><a href="/front/01company/history.jsp">주요연혁</a></li>
						<li><a href="/front/01company/group.jsp?idx=10">계열사 소개</a></li>
					</ul>
					</div>
				</li>
				<li><a href="/front/02business/housing_info.jsp">사업분야</a>
					<div class="gnb_sub">
					<ul>
						<li class="first02"><a href="/front/02business/housing_info.jsp">주택사업</a></li>
						<li><a href="/front/02business/build_info.jsp">건축사업</a></li>
						<li><a href="/front/02business/civil_info.jsp">토목사업</a></li>
						<li><a href="/front/02business/plant_info.jsp">플랜트사업</a></li>
						<li><a href="/front/02business/abroad_info.jsp">해외사업</a></li>
						<li><a href="/front/02business/city_info.jsp">개발사업</a></li>
					</ul>
					</div>
				</li>
				<li><a href="/front/03rnd/tech_info.jsp">기술혁신</a>
					<div class="gnb_sub">
					<ul>
						<li class="first03"><a href="/front/03rnd/tech_info.jsp">기술연구소</a></li>
						<li><a href="/front/03rnd/research_01.jsp">연구분야</a></li>
						<li><a href="/front/03rnd/tech_data.jsp">논문자료</a></li>
						<li><a href="/front/03rnd/new_techbuild.jsp">지적재산권</a></li>
					</ul>
					</div>
				</li>
				<li class="li_w"><a href="/front/04sustainability/quality_manage01.jsp">지속가능경영</a>
					<div class="gnb_sub">
					<ul>
						<li class="first"><a href="/front/04sustainability/quality_manage01.jsp">윤리경영</a></li>
						<li><a href="/front/04sustainability/quality_manage02_01.jsp">환경경영</a></li>
						<li><a href="/front/04sustainability/quality_manage03_01.jsp">안전경영</a></li>
						<li><a href="/front/04sustainability/quality_manage04.jsp">상생경영</a></li>
						<li><a href="/front/04sustainability/contribute_01.jsp">사회공헌</a></li>
					</ul>
					</div>
				</li>
				<li><a href="/front/05ir/IR_01.jsp">투자정보</a>
					<div class="gnb_sub">
					<ul>
						<li class="first"><a href="/front/05ir/IR_01.jsp">경영정보</a></li>
						<li><a href="/front/05ir/IR_03.jsp">재무정보</a></li>
						<li><a href="/front/05ir/IR_05.jsp">주가정보</a></li>
						<li><a href="/front/05ir/IR_06.jsp">공시사항</a></li>
						<li><a href="/front/05ir/IR_07.jsp">IR정보</a></li>
					</ul>
					</div>
				</li>
				<li><a href="/front/06prcenter/news_list.jsp">홍보센터</a>
					<div class="gnb_sub">
					<ul>
						<li class="first"><a href="/front/06prcenter/news_list.jsp">회사소식</a></li>
						<li><a href="/front/06prcenter/ci_info.jsp">CI /BI센터</a></li>
						<li><a href="/front/06prcenter/pr_tv.jsp?limit=4">홍보자료</a></li>
						<li><a href="/front/06prcenter/brochure.jsp">브로슈어</a></li>
						<li><a href="/front/06prcenter/Masterpiece.jsp">마스터피스</a></li>
						<li><a href="/front/06prcenter/30years.jsp">30년사</a></li>
					</ul>
					</div>
				</li>
				<li><a href="/front/07recruit/right_person.jsp">인재채용</a>
					<div class="gnb_sub menu_effect">
					<ul>
						<li class="first04"><a href="/front/07recruit/right_person.jsp">인재상</a></li>
						<li><a href="/front/07recruit/affair.jsp">인사 / 복지제도</a></li>
						<li><a href="https://recruit.hyundai-dvp.com/front/common/main.dev" target="_blank" title="새 창 열림">채용정보</a></li>
					</ul>
					</div>
				</li>
			</ul>
			
			<select title="언어 선택(choose your language)" class="box_select" onChange="window.open(value,'_self');">
				<option value="/front/index.jsp">KOREA</option>
				<option value="/front/en/index.jsp">ENGLISH</option>
			</select>
			
		</div>
		<div class="p_hidden t_hidden btn_mgnb">
			<h2><img src="/front/images/ico/ico_mgnb.png" alt="모바일메뉴" onClick="mobileMenuClick()"></h2>
		</div>
	</div>

	<div id="mobileMenu" class="p_hidden t_hidden">
		<h2 class="hidden">모바일 메뉴</h2>
		<ul class="gnb">
			<li><a href="#openCompany">회사소개</a>
				<ul class="sub_gnb">
					<li><a href="/front/01company/ceo_01.jsp">CEO 인사말</a></li>
					<li><a href="/front/01company/vision2016_01.jsp">VISON</a></li>
					<li><a href="/front/01company/history.jsp">주요연혁</a></li>
					<li><a href="/front/01company/group.jsp">계열사 소개</a></li>
				</ul>
			</li>
			<li><a href="#openBusiness">사업분야</a>
				<ul class="sub_gnb">
					<li><a href="/front/02business/housing_info.jsp">주택사업</a></li>
					<li><a href="/front/02business/build_info.jsp">건축사업</a></li>
					<li><a href="/front/02business/civil_info.jsp">토목사업</a></li>
					<li><a href="/front/02business/plant_info.jsp">플랜트사업</a></li>
					<li><a href="/front/02business/abroad_info.jsp">해외사업</a></li>
					<li><a href="/front/02business/city_info.jsp">개발사업</a></li>
				</ul>
			</li>
			<li><a href="#openManagement">지속가능경영</a>
				<ul class="sub_gnb">
					<li><a href="/front/04sustainability/contribute_01.jsp">사회공헌</a></li>
				</ul>
			</li>
			<li><a href="#openPRCenter">홍보센터</a>
				<ul class="sub_gnb">
					<li><a href="/front/06prcenter/news_list.jsp">회사소식</a></li>
					<li><a href="/front/06prcenter/pr_tv.jsp?limit=4">홍보자료</a></li>
				</ul>
			</li>
			<li><a href="#openRecruit">인재채용</a>
				<ul class="sub_gnb">
					<li><a href="/front/07recruit/right_person.jsp">인재상</a></li>
					<li><a href="/front/07recruit/affair.jsp">인사/복지제도</a></li>
				</ul>
			</li>
		</ul>
		<div class="bg"></div>
	</div>