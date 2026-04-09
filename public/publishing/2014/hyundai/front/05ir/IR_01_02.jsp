<%@ page language="java" pageEncoding="UTF-8"%>
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
			<p class="blind">INVESTOR RELATIONS / 고객과 주주, 사회, 협력회사, 구성원 모두의 행복을 추구하며 No.1 Value Creator로 역량을 더욱 강화하겠습니다.</p>

			<!-- lnb s -->
			<jsp:include page="/front/inc/lnb_05ir.jsp"></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg4">
					<ul>
						<li><a href="/front/index.jsp"><span class="ico">HOME</span></a></li>
						<li class="gt"><a href="/front/05ir/IR_01.jsp">투자정보</a></li>
						<li class="gt last"><a href="/front/05ir/IR_01.jsp">경영정보</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>경영정보</h1>
					<div class="tab tab2">
						<ul>
							<li class="on"><a href="/front/05ir/IR_01.jsp"><span>기업지배구조</span></a></li>
							<li><a href="/front/05ir/IR_02.jsp"><span>정관</span></a></li>
						</ul>
					</div>

					<h2 class="hidden">기업지배구조</h2>
					<div class="tab_mn2">
						<ul>
							<li><a href="/front/05ir/IR_01.jsp">회사소개</a></li>
							<li class="on"><a href="/front/05ir/IR_01_02.jsp">주주현황</a></li>
							<li><a href="/front/05ir/IR_01_03.jsp">이사회소개</a></li>
						</ul>
					</div>

					<h3 class="hidden">주주현황</h3>
					<div class="ir_manage">
						<h4 class="h2_tit pt0">주식</h4>
						<div class="box_clear mt23">
							<div class="fl"><h5 class="h5_tit">주식발행 내역</h5> <span class="font_ltgray">(1주의 액면금액 : 5,000원)</span></div>
							<div class="fr font_ltgray">(단위:주, 백만원)</div>
						</div>
						<div class="tbl_red">
							<table summary="주식의 종류별 발행주식총수, 액면총액의 합계 및 비고">
								<caption>주식발행 내역</caption>
								<colgroup>
									<col style="width:25%" />
									<col style="width:25%" />
									<col style="width:25%" />
									<col style="width:25%" />
								</colgroup>
								<thead>
									<tr>
										<th scope="col">주식의 종류</th>
										<th scope="col">발행주식총수</th>
										<th scope="col">액면총액</th>
										<th scope="col">비고</th>
									</tr>
								</thead>
								<tfoot>
									<tr>
										<th scope="col">합계</th>
										<td class="td_effect" scope="col">75,384,180</td>
										<td class="td_effect" scope="col">376,921</td>
										<td class="td_effect" scope="col">&nbsp;</td>
									</tr>
								</tfoot>
								<tbody>
									<tr>
										<td>보통주</td>
										<td>75,384,180</td>
										<td>376,921</td>
										<td>-</td>
									</tr>
									<tr>
										<td>우선주</td>
										<td>-</td>
										<td>-</td>
										<td>-</td>
									</tr>
								</tbody>
							</table>
						</div>

						<div class="box_clear mt23">
							<div class="fl"><h5 class="h5_tit">자기주식 보유현황 </h5> <span class="font_ltgray">(2013.12.31)</span></div>
						</div>
						<div class="tbl_red">
							<table summary="주식의 종류별 발행주식총수의 합계 및 비고">
								<caption>자기주식 보유현황</caption>
								<colgroup>
									<col style="width:33%" />
									<col style="width:34%" />
									<col style="width:33%" />
								</colgroup>
								<thead>
									<tr>
										<th scope="col">주식의 종류</th>
										<th scope="col">발행주식총수</th>
										<th scope="col">비고</th>
									</tr>
								</thead>
								<tfoot>
									<tr>
										<th scope="col">합계</th>
										<td class="td_effect" scope="col">1,800,000</td>
										<td class="td_effect" scope="col"></td>
									</tr>
								</tfoot>
								<tbody>
									<tr>
										<td>보통주</td>
										<td>1,800,000</td>
										<td>-</td>
									</tr>
									<tr>
										<td>우선주</td>
										<td>-</td>
										<td>-</td>
									</tr>
								</tbody>
							</table>
						</div>

						<h4 class="h2_tit">집중투표제 및 서면투표제 도입</h4>
						<div class="tbl_red">
							<table summary="각 투표제별 도입일자 및 비고">
								<caption>집중투표제 및 서면투표제 도입</caption>
								<colgroup>
									<col style="width:33%" />
									<col style="width:34%" />
									<col style="width:33%" />
								</colgroup>
								<thead>
									<tr>
										<th scope="col">구분</th>
										<th scope="col">도입일자</th>
										<th scope="col">비고</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>집중투표제</td>
										<td>-</td>
										<td>정관상 배제 (당사 정관 §29 ④)</td>
									</tr>
									<tr>
										<td>서면투표제</td>
										<td>-</td>
										<td>미 도입</td>
									</tr>
								</tbody>
							</table>
						</div>
						
						<div class="rel">
							<h4 class="h2_tit">배당에 관한 사항 <span class="font_ltgray">(최근 3사업연도)</span></h4>
							<div class="box_clear mt23">
								<div class="fl"><h5 class="h5_tit">현금</h5></div>
								<div class="fr font_ltgray">(단위:주, 백만원)</div>
							</div>
						</div>
						<div class="tbl_red tbl_dividend">
							<table summary="2012 ~ 2014년도의 구분별 배당금액">
								<caption>배당에 관한 사항 (현금)</caption>
								<colgroup>
									<col style="width:30%" />
									<col style="width:16%" />
									<col style="width:18%" />
									<col style="width:18%" />
									<col style="width:18%" />
								</colgroup>
								<thead>
									<tr>
										<th scope="colgroup" colspan="2">구분</th>
										<th scope="col">2014</th>
										<th scope="col">2013</th>
										<th scope="col">2012</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td colspan="2">주당액면가액(원)</td>
										<td>5,000</td>
										<td>5,000</td>
										<td>5,000</td>
									</tr>
									<tr>
										<td colspan="2">당기순이익(백만원)</td>
										<td>3,249</td>
										<td>-210,732</td>
										<td>9,496</td>
									</tr>
									<tr>
										<td colspan="2">주당순이익(원)</td>
										<td>44</td>
										<td>-2,864</td>
										<td>129</td>
									</tr>
									<tr>
										<td colspan="2">현금배당금총액(백만원)</td>
										<td>-</td>
										<td>3,679</td>
										<td>14,716</td>
									</tr>
									<tr>
										<td colspan="2">주식배당금총액(백만원)</td>
										<td>-</td>
										<td>-</td>
										<td>-</td>
									</tr>
									<tr>
										<td colspan="2">현금배당성향(%)</td>
										<td>-</td>
										<td>-</td>
										<td>115.0</td>
									</tr>
									<tr>
										<td>현금배당수익률(%)</td>
										<td>보통주</td>
										<td>-</td>
										<td>0.2</td>
										<td>0.9</td>
									</tr>
									<tr>
										<td>주식현금배당금(원)</td>
										<td>보통주</td>
										<td>-</td>
										<td>50</td>
										<td>200</td>
									</tr>
								</tbody>
							</table>
						</div>
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