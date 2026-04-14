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
	<style>

	</style>
</head>
<!-- [D] 팝업사이즈 : 450x462 -->
<body class="popup" style="background:#b7b7b7;position:relaitve;">
<form>
	<article class="grand_open">
		<img src="/front/images/popup/popup20140709.jpg" alt="" usemap="#grandOpen" />
		<div class="blind">
		</div>
		<map name="grandOpen">
			<area shape="rect" coords="175,299,257,315" href="/front/images/popup/data/data20140625.zip" alt="" />
			<area shape="rect" coords="393,442,446,457" href="javascript:self.close()" alt="창닫기" />
		</map>
	</article>
	<div style="position:absolute;top:443px;left:10px;z-index:10;font-size:12px;font-family:Dotum;color:#fff;">
		<input type="checkbox" id="eventPop01" name="todayPop" onClick="closePop()" /><label for="eventPop01">하루 동안 이 창을 열지 않습니다</label>
	</div>
</form>
	<script type="text/javascript">
		function setCookie(name, value, expiredays) {
			var today = new Date();
			today.setDate(today.getDate() + expiredays);
			document.cookie = name + '=' + escape(value) + '; path=/; expires=' + today.toGMTString() + ';'
		}
		function closePop() {        
		if(document.forms[0].todayPop.checked)                
		setCookie('eventPop', 'rangs', 1);
		self.close();
		}
	</script>
</body>
</html>

