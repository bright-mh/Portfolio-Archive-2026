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
							<li><a href="/front/en/02business/aptcomplex_info.jsp"><span>NEW MARINE CITY<br/>DEVELOPMENT</span></a></li>
							<li><a href="/front/en/02business/city_info.jsp"><span>URBAN REHABILITATION</span></a></li>
							<li class="on"><a href="/front/en/02business/complex_info.jsp"><span>RESORT CITY<br/>DEVELOPMENT</span></a></li>
						</ul>
					</div>

					<div class="business">
						<div class="img_box">
							<img src="/front/en/images/02business/img_complex.jpg" alt="Haeundae IPARK CITY" />
						</div>

						<div class="hr"></div>

						<div class="txt_box">
							<p class="dark mb0">A luxurious marine resort city, where residence and leisure go  hand in hand</p>
							<!-- <p class="light mt14">Haeundae I’PARK CITY is a luxurious marine resort city overlooking the Pacific Ocean. It combines the design of the world-renowned architect Daniel Libeskind, inspired by nature and Hyundai Development Company’s spirit of innovation. Haeundae I’PARK CITY is a multi complex including a 72-story mixed-use residential buildings, high-tech office building, luxury good shopping centers, and a high-end hotel with 250 rooms. The marine resort city offers a place not only to live, do business and go shopping but also to enjoy leisure, taking advantage of the beach and yacht stadium nearby. Through Haeundae I’PARK CITY we are creating a new concept in life style.</p>-->
						    <p class="light mt14">Haeundae IPARK CITY is a luxurious marine resort city overlooking the Pacific Ocean. It combines the design of the world-renowned architect Daniel Libeskind, inspired by nature and Hyundai Development Company’s spirit of innovation. Haeundae IPARK CITY is a multi complex including a 72-story mixed-use residential buildings, high-tech office building, luxury good shopping centers, and a high-end hotel with 250 rooms. The marine resort city offers a place not only to live, do business and go shopping but also to enjoy leisure, taking advantage of the beach and yacht stadium nearby. Through Haeundae IPARK CITY we are creating a new concept in life style.</p>
						</div>

						<h3 class="title">Project Overview</h3>
						<div class="table mb0">
							<p class="dark mb10">Period : Jan. 2008 ~ Mar. 2013 (Architectural Design : Daniel Libeskind)</p>
							<!--p class="light2"></p-->
							<div class="tbl_red">
							<table summary="Purpose of Use, Land area(㎡), Floor area(㎡), Size, Note">
							<caption>Jan. 2008 ~ Mar. 2013 Project Overview</caption>
							<colgroup>
							<col style="width:20%">
							<col style="width:20%">
							<col style="width:20%">
							<col style="width:20%">
							<col style="width:20%">
							</colgroup>
							<thead>
							<tr>
								<th scope="col">Purpose of Use</th>
								<th scope="col">Land area(㎡)</th>
								<th scope="col">Floor area(㎡)</th>
								<th scope="col">Size</th>
								<th scope="col">Note</th>
							</tr>
							</thead>
							<tfoot>
							<tr>
								<td>Total</td>
								<td>46,111(100)</td>
								<td>561,024(100)</td>
								<td>&nbsp;</td>
								<td>&nbsp;</td>
							</tr>
							</tfoot>
							<tbody>
							<tr>
								<td>Commercial residential buildings</td>
								<td>36,918(80.1)</td>
								<td>511,806(91.3)</td>
								<td>Floor area ration 899%</td>
								<td>To be completed in Nov. 2011</td>
							</tr>
							<tr>
								<td>(Apartment)</td>
								<td>-</td>
								<td>456,819</td>
								<td>3 Bldgs Tower (66F, 72F, 46F)</td>
								<td>-</td>
							</tr>
							<tr>
								<td>(Commercial facilities)</td>
								<td>-</td>
								<td>54,987</td>
								<td>2 Blads (86-9F, B1-3F)</td>
								<td>-</td>
							</tr>
							<tr>
								<td>Hotel</td>
								<td>4,300(9.3)</td>
								<td>49,218(8.7)</td>
								<td>Floor area ratio (764%, B6~34F, 215Key)</td>
								<td>To be opened in Mar. 2013</td>
							</tr>
							<tr>
								<td>Urban park</td>
								<td>4,893(10.6)</td>
								<td>-</td>
								<td>-</td>
								<td>-</td>
							</tr>
							</tbody>
							</table>
							</div>
							<p class="last">* Marina Resort Center Business Plan : Approx. 10 mil ㎡ (incl. sea area)</p>
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
