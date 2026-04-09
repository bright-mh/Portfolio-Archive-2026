<%@ page language="java" pageEncoding="UTF-8"%>
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
						<li class="gt last"><a href="/front/06prcenter/pr_tv.jsp?limit=4">홍보자료</a></li>
					</ul>
				</div>

				<div class="contents">
					<h1>홍보자료</h1>
					<div class="tab tab3 mb30">
						<ul>
							<li><a href="/front/06prcenter/pr_tv.jsp?limit=4"><span>TV광고</span></a></li>
							<li><a href="/front/06prcenter/pr_print.jsp?limit=4"><span>인쇄광고</span></a></li>
							<li class="on"><a href="/front/06prcenter/pr_video.jsp"><span>홍보영상</span></a></li>
						</ul>
					</div>

					<h2 class="hidden">홍보영상</h2>
					<div class="concert">
						<div class="bt">
							<ul>
								<li><a href="/front/data_file/ipark_innovation_kor.zip">홍보영상 다운로드</a></li>
							</ul>
						</div>
						<div class="video">
							<iframe width="420" height="315" src="//www.youtube.com/embed/qVZgyJYFSwQ" frameborder="0" title="HDC 홍보 동영상" allowfullscreen></iframe>
						</div>
						<div class="hr"></div>
						<dl>
							<dt>INNOVATION</dt>
							<dd class="mgt10">
								<p>어디에서 시작하여 어디로 향해 갑니까? 지나온 시간을 되돌아봅니다. 어려운때일수록 과감히 투자했습니다. 위기와 실현에 직면해도. 혁신적인 사고로 변화를 주도했습니다. 그리하여 미래를 바꿀 수 있었습니다. 현대산업개발의 이노베이션은 남들과 다른 미래를 만들어냈습니다.</p>
								<p>남들은 이미 개발된 도시에 집을 지었지만 현대산업개발은 도전과 혁신정신으로 가장 수준높은 삶을 누릴 수 있는 도시를 먼저 개발했습니다. 남들이 아파트를 몰랐을때 현대산업개발은 한발 앞서 아파트를 만들었고, 남들이 평범한 아파트를 지을때 명품 아파트를 지었습니다. 남들은 건물을 지었지만 현대산업개발은 그자체가 예술이되는 작품을 지었습니다. 남들은 단지 세상의 길을 건설했지만 현대산업개발은 세상의 길을 기획하고 디자인했습니다. 남들은 에너지를 쓰는것으로만 알았지만 현대산업개발은 그 애너지를 새롭게 창조했습니다. 나라안에서 쌓은 원전플랜트 SOC. 그리고 도시개발능력을 나라밖에서도 인정 받았습니다.현대산업개발에게 단순한 공간은 아무런 의미가 없습니다. 현대산업개발은 현대산업개발 만에 창의적인 스타일로 더 나은 삶 어울림에 건축미학을 제시했고 세상의 지도를 다시 그려나갔습니다.</p>
								<p>하지만 현대산업개발에 이노베이션은 만족하지 않습니다. 또 다른 미래 더 새로운 미래를 만들어야 하기 때문입니다. 2000명의 현대산업개발 이노베이터들. 오늘 그들이 창조해나가는 이노베이션에 미래는 무엇일까요? 그렇습니다. 현대산업개발에 이노베인션은 자신에 분야에 연연하지않은 폭넓은 생각에서 시작합니다. 세상 모든 창의적이고 혁신적인것들과 경쟁합니다. 더 넓은 상상력으로 더 깊은 관찰력으로 그들과 경쟁하며 고객에게 더 큰 가치를 선사합니다.미래지향적인 생각과 상상에서 시작되는 현대산업개발에 이노베이션 변화와 혁신을 통해 새로운 도약과 성장을 추구합니다.</p>
								<p class="mb0">세상이 현대산업개발에 묻습니다. 지금까지 만든 작품들 가운데에서 가장 자랑스러운것은 무엇입니까? 현대산업개발이 답합니다. 가장 자랑스러운 작품은 미래입니다. 현대산업개발에 미래는 열려있습니다. 그리고 오늘도 그 길을 이어갑니다. 현대산업개발.</p>
							</dd>
						</dl>
					</div>
				</div>

				<div class="bt_top">
					<a href="#layoutWrap"><img src="/front/images/sub/bt_top.png" alt="상단으로"/></a>
				</div>
			</div>
			<!-- container e -->

		</div>
	</div>

<jsp:include page="/front/inc/footer.jsp"></jsp:include>
</body>
</html>