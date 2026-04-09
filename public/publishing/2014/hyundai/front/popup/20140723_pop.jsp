<!DOCTYPE html>
<html lang="ko">
<head>
	<meta http-equiv="content-type" content="text/html;charset=utf-8"/>
	<meta http-equiv="Content-Script-Type" content="text/javascript">
	<meta http-equiv="Content-Style-Type" content="text/css">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title> 현대산업개발 </title>
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
<!-- [D] 팝업 사이즈 : 294px*473px -->
<body>
<form>
	<div id="popWrap">
		<p class="imgEffect"><img src="/front/images/popup/20140723_bg.gif" alt="7월 27일은 6.25전쟁정전협정 및 유엔군 참전의 날. 6.25전쟁정전협정 및 유엔군 참전의 날.(1953~2014. 7.27) 함께 지켜온 대한민국 함께 나아갈 통일한국. 국가 보훈처" /></p>
		<div class="toDay">
			<input type="checkbox" id="eventPop01" name="todayPop02" onClick="closePop();" /><label for="eventPop01">하루 동안 이 창을 열지 않습니다.</label>
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
		setCookie('eventPop03', 'rangs03', 1);
		self.close();
		}
	</script>
</html>