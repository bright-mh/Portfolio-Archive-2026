<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="ko">
<head>
	<jsp:include page="/front/inc/top.jsp"></jsp:include>
	<script language="JavaScript">
		function goToLink() {
			opener.location.href = "http://www.hyundai-dvp.com/front/04sustainability/quality_manage04.jsp";
			//closeWindow();
		}
	</script>
</head>
<!-- [D] 팝업사이즈 : 500x277 -->
<body class="popup" style="background:#b7b7b7">
	<article class="grand_open">
		<img src="/front/images/popup/grandopen.jpg" alt="" usemap="#grandOpen" />
		<div class="blind">
			<h1>HDC 현대산업개발 홈페이지를 새롭게 단장합니다!</h1>
			<p>7월 9일 (수) 오전 9시</p>
			<p>더 나은 서비스와 고객님의 편의를 위해 홈페이지를 리뉴얼하였습니다.</p>
			<ul>
				<li>현재는 가오픈 중이므로 개편일까지 홈페이지 접속이 원활하지 않을 수도 있습니다.</li>
				<li>정식 오픈일(7/9)에는 홈페이지 이벤트도 진행하오니 많은 관심 부탁드립니다.</li>
				<li>협력업체 담당자분들은 경로가 변경되었으니 확인하시기 바랍니다. (지속가능 경영 &gt; 상생경영 하단)</li>
			</ul>
		</div>
		<map name="grandOpen">
			<area shape="rect" coords="217, 245, 325, 258" href="javascript:goToLink();" alt="HDC 파트너스 바로가기" />
			<area shape="rect" coords="445, 300, 492, 314" href="javascript:self.close()" alt="창닫기" />
		</map>
	</article>
</body>
</html>
