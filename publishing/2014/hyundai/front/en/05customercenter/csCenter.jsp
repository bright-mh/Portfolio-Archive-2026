<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="ko">
<head>
	<jsp:include page="/front/en/inc/top.jsp"></jsp:include>
	<script>
function check() {
	if (!jQuery("#custom_agree")[0].checked) document.forms[0].agree_yn.focus();
	return (jQuery("#custom_agree")[0].checked);
}

function onemailchange(val) {
	jQuery("#custom_Domain").attr("value", val);
	if(val){
		jQuery("#custom_Domain").attr("readonly","true");
	}else{
		jQuery("#custom_Domain").removeAttr("readonly");
		jQuery("#custom_Domain").focus();
	}
}

</script>
</head>
<body class="main">
	<jsp:include page="/front/en/inc/head.jsp"></jsp:include>
	<div class="article alert" id = "content">
		<div class="gray">
			<p>PC에 최적화된 페이지 입니다.</p>
		</div>
		<div class="wrap">
			<p class="blind">CUSTOMER CENTER</p>
			<!-- lnb s -->
			<jsp:include page="/front/en/inc/lnb_05customercenter.jsp"></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg4">
					<ul>
						<li><a href="/front/en/index.jsp"><span class="ico"></span></a></li>
						<li class="gt"><a href="#none">CUSTOMER SERVICE</a></li>
						<li class="gt last"><a href="/front/en/05customercenter/csCenter.jsp">Q &amp; A</a></li>
					</ul>
				</div>

				<div class="contents">
				<form name="eventfrm" action="insert_proc.jsp" method="post" onsubmit="return check()" enctype="multipart/form-data">
				<input type="hidden" name="grp_cd" value="11" />
				<input type="hidden" name="q_type" value="일반문의">
				<input type="hidden" name="mode" value="save">
					<h1 class="pb17">Q &amp; A</h1>
					
					<div class="tbl_customer">
					<table summary="Name, Phone Number, E-mail, Company info">
					<caption>Writer's Info</caption>
					<colgroup>
						<col style="width:140px">
						<col>
					</colgroup>
					<tbody>
					<tr>
						<th scope="row"><label for="custom_writer">Name</label></th>
						<td><span class="input w_03"><input type="text" id="writer" name="writer"></span></td>
					</tr>
					<tr>
						<th scope="row"><label for="cell_num1">Phone Number</label></th>
						<td>
							<span class="input w_02"><input type="text" title="휴대폰 첫 번째 자리를 입력해 주세요." name="mobile1"></span>
							 - <span class="input w_02"><input type="text" title="휴대폰 두 번째 자리를 입력해 주세요." name="mobile2"></span> 
							 - <span class="input w_02"><input type="text" title="휴대폰 세 번째 자리를 입력해 주세요." name="mobile3"></span></td>
					</tr>
					<tr>
						<th scope="row"><label for="custom_email">E-mail</label></th>
						<td><span class="input w_03"><input type="text" id="custom_email" title="이메일 아이디를 입력해 주세요."  name="email"></span> <i class="tx">@</i> 
							<span class="input input_effect"><input type="text" id="custom_Domain" title="도메인을 입력해 주세요." name="email3"></span>
							<span class="select w_07"><!-- Select -->
							<select class="box_select" title="도메인을 선택해 주세요." name="email2"  onchange="onemailchange(this.value)" >
								<option value="">Direct Input</option>
								<option value="naver.com">naver.com</option>
								<option value="hanmail.net">hanmail.net</option>
								<option value="gmail.com">gmail.com</option>
								<option value="nate.com">nate.com</option>
								<option value="paran.com">paran.com</option>
								<option value="hotmail.com">hotmail.com</option>
								<option value="yahoo.com">yahoo.com</option>
								<option value="yahoo.co.kr">yahoo.co.kr</option>
								<option value="empal.com">empal.com</option>
								<option value="lycos.co.kr">lycos.co.kr</option>
								<option value="dreamwiz.com">dreamwiz.com</option>
								<option value="freechal.com">freechal.com</option>
								<option value="netian.com">netian.com</option>
								<option value="kornet.com">kornet.com</option>
								<option value="hananet.net">hananet.net</option>
								<option value="shinbiro.com">shinbiro.com</option>
								<option value="unitel.co.kr">unitel.co.kr</option>
								<option value="msn.com">msn.com</option>
							</select></span> 
						</td>
					</tr>
					<tr>
						<th scope="row"><label for="custom_address">Company info</label></th>
						<td>
							<div class="mt10"><span class="input w_08"><input type="text" title="주소 입력" name="address1"></span> <span class="input input_effect"><input type="text" title="상세 주소 입력" name="address2"></span></div>
						</td>
					</tr>
					</tbody>
					</table>
					</div>
					
					<div class="tbl_customer mt30">
					<table summary="Title, Inquiry, File Attachment">
					<caption>Q &amp; A fill in</caption>
					<colgroup>
						<col style="width:140px">
						<col>
					</colgroup>
					<tbody>
					<tr>
						<th scope="row"><label for="custom_subject">Title</label></th>
						<td>
							<span class="input w_10"><input type="text" id="custom_subject" name="title"></span>
							<span class="span_effect">* Maximum capacity of 500byte (English/Number:1byte)</span>
						</td>
					</tr>
					<tr>
						<th scope="row"><label for="custom_custom">Inquiry</label></th>
						<td>
							<span class="textarea h_01"><textarea id="custom_custom" title="내용을 입력해주세요." cols="90" rows="4" name="content"></textarea></span>
							<span class="span_effect">* Maximum capacity of 3000byte (English/Number:1byte)</span>
						</td>
					</tr>
					<tr>
						<th scope="row"><label for="custom_file">File Attachment</label></th>
						<td>
							<div class="input_file">
								<div class="input w_09"><input type="text" value="" title="첨부파일 파일명"></div>
								<div class="btn_find">
									<a href="#findFile" class="btn_gray">browse</a>
									<input type="file" title="파일찾기" id="custom_file" name="filename">
								</div>
							</div> <span class="ml10">Maximum capacity of 500KB</span>
						</td>
					</tr>
					</tbody>
					</table>
					</div>
					
					<div class="custom_firm">
						To respond to customer complaints and remedy consumer inquiries, we collect a minimal amount of personal information. <br>
						Please read the conditions listed below before agreeing.
						<ol class="list_num">
							<li>Purpose of information collection: to quickly notify you should complaints be received and require processing</li>
							<li>Items of information being collected: name, affiliation, title, phone numbers, email addresses</li>
							<li>Duration of information storage: until you cancel the agreement</li>
						</ol>
						<div class="check"><input type="checkbox" id="custom_agree"> <label for="custom_agree">I agree to the terms above.</label></div>
					</div>
					
					<div class="txtR mt30"><input type="submit" class="btn_gray_submit" value="Send" /></div>
				</form>	
				</div>
				

				<div class="bt_top">
					<a href="#layoutWrap"><img src="/images/sub/bt_top.png" alt="Top of page"></a>
				</div>
			</div>
			<!-- container e -->

		</div>
	</div>

<jsp:include page="/front/en/inc/footer.jsp"></jsp:include>

</body>
</html>
