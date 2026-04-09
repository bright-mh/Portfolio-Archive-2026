<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="ko">
<head>
	
<meta http-equiv="content-type" content="text/html;charset=utf-8"/>
<meta http-equiv="Content-Script-Type" content="text/javascript">
<meta http-equiv="Content-Style-Type" content="text/css">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title> 현대산업개발 </title>
<style>
	body, html {width:100%; height:100%;}
	body, div, p, ul, ol, li, h1, h2, h3, h4, h5, h6, dl, dt, dd, header, article, section, footer, img  {margin:0; padding:0; font-size:12px; font-family:Dotum, Gulim,Arial,sans-serif; }
	h1, h2, h3, h4, h5, h6{font-weight:normal;}
	header, article, section, footer{display:block;}
	img, a img{border:none; display:inline-block;}
	ul, li, ol{list-style:none;}
	a{display:inline-block; text-decoration:none; color:#222;}
	a:hover{text-decoration:none;}
	address,em, i{font-style:normal;}
	table{border-collapse:collapse; border-spacing:0;}

	hr, legend, caption, .blind{position:absolute;left:-5000px;top:0;visibility:hidden;overflow:hidden;line-height:0.1%;font-size:0.1%;width:0.1%;height:0.1%}
	caption {position:static;}

	#popWrap{position:relative;width:680px;background:url("/front/images/popup/event20140709/bg.jpg") 0 0 repeat;}
	img{display:block;}
	.qList{padding:24px 0 0 0;height:141px;width:603px;margin:0 auto;}
	.qList li{float:left;width:25%;height:70px;margin-bottom:10px;}
	.qList li label{color:#262626;vertical-align:top;margin-left:5px;}
	.qList li input{margin:0 0 0 0;padding:0 0 0 0;vertical-align:top;}
	.qList li .gName{padding-right:10px;margin-top:10px;font-size:11px;color:#757c7e;}
	textarea{width:578px;height:46px;padding:10px;margin:0 30px 30px;border:1px solid #abb5ba;}
	.poll02 textarea{margin-top:11px;margin-bottom:20px;}
	.poll03{margin:0 30px;padding-top:19px;background:url("/front/images/popup/event20140709/bg_line.jpg") 0 0 repeat-x;}
	.poll03 .title{margin-bottom:9px;}
		.userData{position:relative;padding:15px 30px;background:#b8ced8;}
		.userData label{font-weight:bold;color:#4b7685;margin-right:10px;}
		.userData .name{float:left;margin-right:48px;}
		.userData .phone{}
		.userData .name input{border:1px solid #9aaab2; height:17px;width:130px;font-size:12px; font-family:Dotum, Gulim,Arial,sans-serif;}
		.userData .phone select{border:1px solid #9aaab2;height:21px;width:84px;font-size:12px; font-family:Dotum, Gulim,Arial,sans-serif;}
		.userData .phone input{border:1px solid #9aaab2;width:76px;height:17px;font-size:12px; font-family:Dotum, Gulim,Arial,sans-serif;}
		.userData .data02 input{vertical-align:bottom;height:17px;margin-top:10px;border:1px solid #9aaab2;width:502px;font-size:12px; font-family:Dotum, Gulim,Arial,sans-serif;}
		.provition{width:560px;height:46px;padding:10px 20px;margin:10px 0 10px;border:1px solid #abb5ba;color:#707070;background:#fff;overflow:scroll;overflow-x:hidden;}
		.agree{}
		.agree strong{color:#4a5255;margin-right:10px;}
		.agree input{margin:0 0 0 0;padding:0 0 0 0;vertical-align:middle;margin-right:5px;}
		.agree label{font-weight:bold;color:#4a5255;}
		.zip01 img{vertical-align:top;margin-left:4px;}
		.zip02 input{margin-left:36px;}
	p.btn{text-align:center;padding:45px 0 55px;}
	.toDay{position:relative;display:block;padding:9px 10px 10px;font-size:12px;font-family:Dotum;color:#fff;background:#b7b7b7;clear:both;amargin-bottom:10px;height:20px;}
	.toDay label{margin-left:5px;vertical-align:middle;}
	.toDay input{vertical-align:middle;}
	.closePP{position:absolute;top:10px;right:5px;}
</style>
	
</head>
<body>
    <form name="eventfrm" method="post" >
	<div id="popWrap" style="overflow:hidden;overflow-y:scroll;height:696px;">
		<div class="eveTitle">
			<img src="/front/images/popup/event20140709/event01.jpg" alt="HDC현대산업개발 홈페이지 OPEN EVENT - 일정 2014.07.07~25(오픈일로부터 총 3주간)" />
			<img src="/front/images/popup/event20140709/event02.jpg" alt="" />
			<img src="/front/images/popup/event20140709/event03.jpg" alt="홈페이지 개편 내용 : 모바일에서도 현대산업개발 홈페이지에 접속할 수 있다(반응형웹 구현),회사소식을 한 눈에 확인할 수 있다(Main 변화), 신규 페이지 신설(지속가능경영/기술혁신), 장애에 구애 받지 않고 누구나 이용 가능하다. (웹접근성 반영)" />
			<img src="/front/images/popup/event20140709/event04.jpg" alt="" />
		</div>
		<!-- 
		<div class="poll01">
			<img src="/front/images/popup/event20140709/event05.jpg" alt="이벤트 하나. 관심있는 카테고리를 골라주시고, 이유를 적어주세요. 이벤트에 참여하시는 분들 중 500분께 스타벅스 아메리카노 기프티콘을 드립니다." />
			<ul class="qList">
				<li>
					<input type="radio" id="typea01" name="rtype01" value="회사소개" /><label for="typea01"><strong>회사소개</strong>
					<div class="gName">CEO인사말, 계열사 소개 등<br /> 기업정보를 확인하실 수<br /> 있습니다.</div></label>
				</li>
				<li>
					<input type="radio" id="typeb01" name="rtype01" value="사업분야" /><label for="typeb01"><strong>사업분야</strong>
					<div class="gName">진행사업 및 주요 실적을 <br />한눈에 보실 수 있습니다.</div></label>
				</li>
				<li>
					<input type="radio" id="typec01" name="rtype01" value="기술혁신" /><label for="typec01"><strong>기술혁신</strong>
					<div class="gName">혁신적이고 차별화 된 <br />신기술을 확인하실 수 <br />있습니다.</div></label>
				</li>
				<li>
					<input type="radio" id="typed01" name="rtype01" value="지속가능경영" /><label for="typed01"><strong>지속가능경영</strong>
					<div class="gName">사회공헌, CLEAN5! 등 <br />현대산업 개발의 활동을 <br />보여드립니다.</div></label>
				</li>
				<li>
					<input type="radio" id="typee01" name="rtype01" value="투자정보" /><label for="typee01"><strong>투자정보</strong>
					<div class="gName">투명한 기업경영을 위한 <br />경영정보를 공개합니다</div></label>
				</li>
				<li>
					<input type="radio" id="typef01" name="rtype01" value="홍보센터" /><label for="typef01"><strong>홍보센터</strong>
					<div class="gName">로비콘서트, TV CF 같은 <br />회사소식을 함께 나눕니다.</div></label>
				</li>
				<li>
					<input type="radio" id="typeg01" name="rtype01" value="인재채용" /><label for="typeg01"><strong>인재채용</strong>
					<div class="gName">현대산업개발의 인재상, 인사복지제도를 공유합니다.</div></label>
				</li>
			</ul>
			<textarea name="eventcomment1" rows="" cols=""></textarea>
		</div>
		
		-->
		<input type = "hidden" name = "rtype01" value = ""/>
		<input type = "hidden" name = "eventcomment1" value = ""/>
		
		<div class="poll02">
			<img src="/front/images/popup/event20140709/event06.jpg" alt="이벤트 둘. 새로워진 현대산업개발 홈페이지에 대한 첫 느낌 or 바라는 점을 알려주세요. 이벤트에 참여하시면 추첨하여 푸진한 경품을 드립니다." />
			<textarea name="eventcomment2" rows="" cols="">20자 이상 적어주세요.</textarea>
		</div>
		<div class="poll03">
			<p class="title"><img src="/front/images/popup/event20140709/event_title.jpg" alt="응모자 정보" /></p>
			<div class="userData">
				<div class="data01">
					<div class="name">
						<label for="type01">이름</label><input type="text" id="type01" name="e_name" maxlength="4"/>
					</div>
					<div class="phone">
						<label for="type02">연락처</label>
						<select id="type02" name="phone1">
							<option value="010" selected="selected">010</option>
							<option value="011">011</option>
							<option value="016">016</option>
							<option value="017">017</option>
							<option value="019">019</option>
						</select> - <input type="text" id="type02a" name="phone2" onPropertyChange="onlyNum();" maxlength="4"/> - <input type="text" id="type02b" name="phone3" onPropertyChange="onlyNum();" maxlength="4"/>
					</div>
				</div>
				<div class="data02">
                    <div class="zip01"><label for="type03a">주소</label><input type="text" id="type03a" name="zip1" value="" style="width:84px;" readonly="readonly" /> - <input type="text" id="type03b" name="zip2" value="" style="width:84px;" readonly="readonly" /><a href="#" onclick="findAddress();"><img src="../images/popup/event20140709/btn_zip.jpg" alt="" /></a></div>
                    <div class="zip02"><input type="text" id="type03c" name="address" value=""/></div>
                </div> 
			</div>
			<div class="provition">
				현대산업개발은 고객님의 이벤트 응모를 위한 최소한의 개인정보를 수집하고 있습니다. <br />
				이에 개인정보 수집 및 이용에 관하여 아래와 같이 고지하오니 충분히 읽어보신 후 동의하여 주시기<br /> 바랍니다.<br /> <br /> 
				<strong>1. 수집 이용목적 : 이벤트 경품발송용도 외에는 사용하지 않습니다<br /> 
				2. 개인정보 수집항목 : 이름, 연락처, 주소<br /> 
				3. 보유 및 이용기간 : 동의를 철회하는 때까지</strong><br /> <br /> 
			</div>
			<div class="agree">
				<strong>위 사항에 동의하십니까?</strong><input type="checkbox" id="type04" name="event_agree"  /><label for="type04">동의함</label>
			</div>
		</div>
		<p class="btn"><a href="#" onclick = "javascript:event_entry();"><img src="/front/images/popup/event20140709/event_btn.jpg" alt="이벤트 응모하기" /></a></p>
		<div class="toDay" style="">
			<input type="checkbox" id="eventPop01" name="todayPop02" onClick="closePop();" /><label for="eventPop01">하루 동안 이 창을 열지 않습니다</label>
			<div class="closePP"><a href="javascript:self.close()"><img src="/front/images/popup/event20140709/btn_close.jpg" alt="창닫기" /></a></div>
		</div>
		
	</div>
	
    </form>
	<script type="text/javascript">
		function setCookie(name, value, expiredays) {
			var today = new Date();
			today.setDate(today.getDate() + expiredays);
			document.cookie = name + '=' + escape(value) + '; path=/; expires=' + today.toGMTString() + ';'
		}
		function closePop() {  
			if(document.getElementById('eventPop01').checked){
			//setCookie('eventPop02', 'rangs02', 1);			
			/*var today = new Date();
			today.setDate(today.getDate() + 1);
			document.cookie = 'eventPop02' + '=' + escape('rangs02') + '; path=/; expires=' + today.toGMTString() + ';'
			*/
			//opener.setCookie('eventPop02', 'rangs02', 1);
			//self.close();
			window.location = 'http://www.hyundai-dvp.com/front/popup/cookie_proc.jsp';
			}
		}
	</script>
</body>

<script>

	function event_entry(){
		var frm = document.eventfrm;
		
		
		
		/*
		var radio_num = frm.rtype01.length;
		var chk_i = 0;
		
		for(var i=0; i<radio_num; i++){
			if(frm.rtype01[i].checked == true){
				chk_i++;
				break;
			}
		}
		if(chk_i <= 0){
			alert("카테고리를 선택해주세요.");
			return false;
		}
		
		
		if(frm.eventcomment1.value.length <= 0){
			alert("이벤트 하나의 이유를 적어주세요.");
			frm.eventcomment1.focus();
			return false;
		}
		
		*/
		
		
		if(frm.eventcomment2.value.length <= 0){
			alert("이벤트의 첫인상 or 바라는 점을 적어주세요.");
			frm.eventcomment2.focus();
			return false;
		}
		
		if(frm.eventcomment2.value.length < 20 ){
			alert("20자 이상 적어주세요.");
			frm.eventcomment2.focus();
			return false;
		}
		
		
		if(frm.e_name.value == ""){
			alert("응모자 이름을 입력해주세요.");
			frm.e_name.focus();
			return false;
		}
		
		if(frm.phone2.value == ""){
			alert("연락처를 입력해주세요.");
			frm.phone2.focus();
			return false;
		}
		
		if(frm.phone3.value == ""){
			alert("연락처를 입력해주세요.");
			frm.phone3.focus();
			return false;
		}
		
		if(frm.zip1.value == ""){
            alert("우편번호를 입력해주세요.");
            frm.zip1.focus();
            return false;
        }
		
		
		if(frm.address.value == ""){
			alert("주소를 입력해주세요.");
			frm.address.focus();
			return false;
		}
		
		
		
		if(frm.event_agree.checked == false){
			alert("개인정보 수집 동의에 체크해주세요.");
			return false;
		}
		frm.action = "./event_proc.jsp";
		frm.submit();
		
		
	}

	function onlyNum() {  

		var objEv = event.srcElement;

		var numPattern = /([^0-9])/;

		var numPattern = objEv.value.match(numPattern);

		if (numPattern != null) {

			alert("숫자만 입력하세요");

			objEv.value = "";

			objEv.focus();

			return false;

		}

	}
	
	
	function findAddress(){
	    var findAddress = window.open("./zip_code_popup.jsp", "findAddress", "width=528, height=500");   
	    return false;
	}

	function adressPopupReturnValue(return1, return2, return3){
	    //public function 주소 쓰는 쪽에서 이거로 복붙하삼
	    
	    var frm = document.eventfrm;
	    frm.zip1.value = return2;
	    frm.zip2.value = return3;
	    frm.address.value = return1;
	    
	}

</script>



</html>