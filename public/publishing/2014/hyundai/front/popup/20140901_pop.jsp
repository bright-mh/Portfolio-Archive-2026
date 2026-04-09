<!DOCTYPE html>
<html lang="ko">
<head>
	<meta http-equiv="content-type" content="text/html;charset=utf-8"/>
	<meta http-equiv="Content-Script-Type" content="text/javascript">
	<meta http-equiv="Content-Style-Type" content="text/css">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title> 현대산업개발 </title>
	<script language="JavaScript">
		function goToLink() {
			var openNewWindow = window.open("about:blank");
			openNewWindow.location.href = "http://its.hyundai-dvp.com:9080/HDLOGIN/HDRM/login.jsp";
			closeWindow();
		}
		function goToLink2() {
			var openNewWindow = window.open("about:blank");
			openNewWindow.location.href = "http://its.hyundai-dvp.com:9080/HDLOGIN/HDMMRM/login.jsp";
			closeWindow();
		}
		function closeWindow() {
			if(opener) self.close();
		}
	</script>
	<style>
		body, html {width:100%; height:100%;margin:0;padding:0;}
		body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6, dl, dt, dd, header, article, section, footer, img  {margin:0; padding:0; font-size:12px; font-family:Dotum, Gulim,Arial,sans-serif; }
		h1, h2, h3, h4, h5, h6{font-weight:normal;}
		header, article, section, footer{display:block;}
		img, a img{border:none;}
		img{margin:0 0 0 0;padding:0 0 0 0;font-size:0;line-height:0;}
		ul, li, ol{list-style:none;}
		a{text-decoration:none; color:#222;}
		a:hover{text-decoration:none;}
		address,em, i{font-style:normal;}
		table{border-collapse:collapse; border-spacing:0;}

		hr, legend, caption, .blind{position:absolute;left:-5000px;top:0;visibility:hidden;overflow:hidden;line-height:0.1%;font-size:0.1%;width:0.1%;height:0.1%}
		caption {position:static;}

		.imgEffect{margin:0;padding:0;line-height:0;}
		.toDay{position:relative;padding:9px 0 8px 10px;font-size:12px;font-family:'Dotum';color:#fff;background:#b7b7b7;clear:both;height:20px;}
		.toDay label{margin-left:5px;vertical-align:middle;}
		.toDay input{vertical-align:middle;}
		.closePP{position:absolute;top:11px;right:5px;}
	</style>
</head>
<!-- [D]294px*473px -->
<body>
<form>
	<div id="popWrap">
		<p class="imgEffect">
		<img src="/front/images/popup/popup20141031.jpg" usemap="#go" alt="외주 협력회사 팝업" />
			<map name="go" id="go">
				<!--9월1일부터 15일까지 적용-->
				<!--area shape="rect" coords="72,244,179,267" href="javascript:alert('9월 15일 이후부터 접수 가능합니다.')" /-->
				<!--area shape="rect" coords="73,347,178,372" href="javascript:alert('9월 15일 이후부터 접수 가능합니다.')" /-->

				<!--9월15일 이후 적용-->
				<area shape="rect" coords="173,240,271,263" href="javascript:goToLink();" />
				<!--area shape="rect" coords="73,347,178,372" href="javascript:goToLink2();" /-->
			</map>
		</p>
		<div class="toDay">
			<input type="checkbox" id="eventPop02" name="todayPop02" onClick="closePop();" /><label for="eventPop01">하루 동안 이 창을 열지 않습니다.</label>
			<div class="closePP"><a href="javascript:self.close()"><img src="/front/images/popup/btn_close.jpg" alt="창닫기" /></a></div>
		</div>
	</div>
</form>
</body>

<script type="text/javascript">
		function setCookie(name, value, expiredays) {
			var today = new Date();
			today.setDate(today.getDate() + expiredays);
			document.cookie = name + '=' + escape(value) + '; path=/; expires=' + today.toGMTString() + ';'
		}
		function closePop() {        
		if(document.forms[0].todayPop02.checked)                
		setCookie('eventPop02', 'rangs02', 1);
		self.close();
		}
	</script>
</html>