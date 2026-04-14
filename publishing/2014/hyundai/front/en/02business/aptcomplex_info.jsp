<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="ko">
<head>
	<jsp:include page="/front/en/inc/top.jsp"></jsp:include>
</head>
<body class="main">
	<jsp:include page="/front/en/inc/head.jsp"></jsp:include>
	<div class="article" id="content">
		<div class="wrap">
			<p class="blind">BUSINESS INFORMATION</p>
			<!-- lnb s -->
			<jsp:include page="/front/en/inc/lnb_02business.jsp"></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg1">
					<ul>
						<li><a href="/front/en/index.jsp"><span class="ico"></span></a></li>
						<li class="gt"><a href="#none">BUSINESS</a></li>
						<li class="gt last"><a href="#none">DEVELOPMENT</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>DEVELOPMENT</h1>
					<div class="tab tab3 mb30">
						<ul>
							<li class="on"><a href="/front/en/02business/aptcomplex_info.jsp"><span>NEW MARINE CITY<br/>DEVELOPMENT</span></a></li>
							<li><a href="/front/en/02business/city_info.jsp"><span>URBAN REHABILITATION</span></a></li>
							<li><a href="/front/en/02business/complex_info.jsp"><span>RESORT CITY<br/>DEVELOPMENT</span></a></li>
						</ul>
					</div>

					<div class="business">
						<div class="img_box">
							<img src="/front/en/images/02business/img_aptcomplex.jpg" alt="Masan Marine CITY" />
						</div>

						<div class="hr"></div>

						<div class="txt_box mb0">
							<p class="dark mb0">A Waterfront City in Harmony with Nature</p>
							<!-- <p class="light mt14 mb0">The Masan Marine City Development Project is a massive project, which entails developing a new marine city and harbor interland with a 9,300-unit residential district as well as commercial, business and education facilities, Through the successful execution of this project, transforming the map of Masan Bay, Hyundai Development Company has implemented a new development business model. In particular, the marine city and hinterland with green nature parks and waterfront parks on 37.2% of the area is being developed into a place free from the threat of natural disasters due to the island-type city and flood-proof design. Hyundai  Development Company has provided the Masan Marine city project with a total solution encompassing planning, financing, design, construction and management. The company has taken the lead in making Masan into a dreamed-of harbor city along with the success of Masan Harbor development and Masanman I’PARK Apartment Complex in Masan Bay.</p>-->
							<p class="light mt14 mb0">The Masan Marine City Development Project is a massive project, which entails developing a new marine city and harbor interland with a 9,300-unit residential district as well as commercial, business and education facilities, Through the successful execution of this project, transforming the map of Masan Bay, Hyundai Development Company has implemented a new development business model. In particular, the marine city and hinterland with green nature parks and waterfront parks on 37.2% of the area is being developed into a place free from the threat of natural disasters due to the island-type city and flood-proof design. Hyundai  Development Company has provided the Masan Marine city project with a total solution encompassing planning, financing, design, construction and management. The company has taken the lead in making Masan into a dreamed-of harbor city along with the success of Masan Harbor development and Masanman IPARK Apartment Complex in Masan Bay.</p>
						</div>

					</div>
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
