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
			<p class="blind">CUSTOMER CENTER / 현대산업개발은 항상 고객의 소리에 귀 기울이고 있습니다. 고객님을 위해 신속하고 정확한 답변을 드리겠습니다.</p>

			<!-- lnb s -->
			<jsp:include page="/front/inc/lnb_08customercenter.jsp"></jsp:include>
			<!-- lnb e -->

			<!-- container s -->
			<div class="s_container">
				<div class="location bg7">
					<ul>
						<li><a href="/front/index.jsp"><span class="ico">HOME</span></a></li>
						<li class="gt"><a href="/front/08customercenter/faq.jsp">고객센터</a></li>
						<li class="gt"><a href="/front/08customercenter/csCenter.jsp">고객문의</a></li>
						<li class="gt last"><a href="/front/08customercenter/csCenter_03.jsp">협력사문의</a></li>
					</ul>
				</div>

				<div class="contents">
				<form name="eventfrm" action="insert_proc.jsp" method="post" onsubmit="return check()" enctype="multipart/form-data">
				<input type="hidden" name="grp_cd" value="2" />
				<input type="hidden" name="q_type" value="협력회사문의">
				<input type="hidden" name="mode" value="save">
					<h1 class="pb20">협력사문의</h1>

					<div class="tbl_customer">
						<table summary="작성자, 자택전화, 휴대전화, 이메일, 주소를 입력">
							<caption>작성자 정보 입력폼</caption>
							<colgroup>
								<col style="width:90px" />
								<col style="" />
							</colgroup>
							<tbody>
								<tr>
									<th scope="row"><label for="custom_writer">작성자</label></th>
									<td><span class="input w_01"><input type="text" id="custom_writer" name="writer"></span></td>
								</tr>
								<tr>
									<th scope="row"><label for="phone_num1">자택전화</label></th>
									<td>
										<span class="select w_06">
											<select class="box_select" id="phone_num1" title="지역번호를 선택해 주세요." name="tel1">
												<option>02</option>
												<option>031</option>
												<option>033</option>
												<option>032</option>
												<option>041</option>
												<option>042</option>
												<option>043</option>
												<option>044</option>
												<option>051</option>
												<option>052</option>
												<option>053</option>
												<option>054</option>
												<option>055</option>
												<option>061</option>
												<option>062</option>
												<option>063</option>
												<option>064</option>
												<option>070</option>
											</select>
										</span>
										- <span class="input w_02"><input type="text" title="자택전화 중간자리를 입력해 주세요." name="tel2" maxlength="4"></span>
										- <span class="input w_02"><input type="text" title="자택전화 끝자리를 입력해주세요." name="tel3" maxlength="4"></span>
									</td>
								</tr>
								<tr>
									<th scope="row"><label for="cell_num1">휴대전화</label></th>
									<td>
										<span class="select w_06">
											<select class="box_select" id="cell_num1" title="휴대전화 첫 번째 자리를 선택해 주세요." name="mobile1">
												<option>010</option>
												<option>011</option>
												<option>016</option>
												<option>017</option>
												<option>018</option>
												<option>019</option>
											</select>
										</span>
										- <span class="input w_02"><input type="text" title="휴대전화 중간자리를 입력해 주세요." name="mobile2" maxlength="4"></span>
										- <span class="input w_02"><input type="text" title="휴대전화 끝자리를 입력해 주세요." name="mobile3" maxlength="4"></span>
									</td>
								</tr>
								<tr>
									<th scope="row"><label for="custom_email">이메일</label></th>
									<td>
										<span class="input w_03"><input type="text" id="custom_email" title="이메일 아이디를 입력해 주세요." name="email"></span> <i class="tx">@</i> 
										<span class="input input_style"><input type="text" id="custom_Domain" title="도메인을 입력해 주세요." name="email3"></span>
										<span class="select w_07"><!-- Select -->
											<select class="box_select" title="도메인을 선택해 주세요." name="email2" onchange="onemailchange(this.value)">
												<option value="">직접입력</option>
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
											</select>
										</span>
									</td>
								</tr>
								<tr>
									<th scope="row"><label for="custom_zip1">주소</label></th>
									<td>
										<div>
											<span class="input w_02"><input type="text" id="custom_zip1" title="우편번호 첫 번째" name="zip1" readonly="readonly"></span> - <span class="input w_02 disabled"><input type="text" id="custom_zip2" readonly="readonly" title="우편번호 두 번째" name="zip2"></span> <a href="#" onclick="findAddress();" class="btn_gray verT ml5" title="새 창 열림">우편번호<span class="hidden">찾기</span></a>
										</div>
										<div class="mt10">
											<span class="input w_08"><input type="text" title="주소 입력" name="address1"></span> <span class="input input_style"><input type="text" title="상세 주소 입력" name="address2"></span>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div class="tbl_customer mt30">
						<table summary="협력사문의의 제목, 내용, 첨부파일을 입력 및 등록 ">
							<caption>협력사문의 입력폼</caption>
							<colgroup>
								<col style="width:90px" />
								<col style="" />
							</colgroup>
							<tbody>
								<tr>
									<th scope="row">분야</th>
									<td><strong>협력사문의</strong></td>
								</tr>
								<tr>
									<th scope="row"><label for="custom_subject">제목</label></th>
									<td>
										<span class="input w_09"><input type="text" id="custom_subject" name="title"></span>
										<span class="txt_style">* 제목은 500byte 이내로 작성하십시오. (한글:3byte, 영문/숫자:1byte)</span>
									</td>
								</tr>
								<tr>
									<th scope="row"><label for="custom_custom">내용</label></th>
									<td>
										<span class="textarea h_01"><textarea id="custom_custom" title="내용을 입력해주세요." cols="90" rows="4" name="content"></textarea></span>
										<span class="txt_style">* 내용은 3000byte 이내로 작성하십시오. (한글:3byte, 영문/숫자:1byte)</span>
									</td>
								</tr>
								<tr>
									<th scope="row"><label for="custom_file">첨부파일</label></th>
									<td>
										<div class="input_file">
											<div class="input"><input type="text" value="" title="첨부파일 파일명"></div>
											<div class="btn_find">
												<a href="#findFile" class="btn_gray">파일등록</a>
												<input type="file" title="파일찾기" id="custom_file" name="filename" onchange="jQuery('#ff').attr('value',this.value)">
											</div>
										</div> <span class="ml10">용량은 500KB를 넘길 수 없음</span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div class="custom_firm">
						현대산업개발은 고객님의 문의요청에 정확하고 성실한 답변을 드리기 위해 최소한의 개인정보를 수집하고 있습니다.<br />
						이에 개인정보 수집 및 이용에 관하여 아래와 같이 고지하오니 충분히 읽어보신 후 동의하여 주시기 바랍니다.
						<ol class="list_num">
							<li>수집 이용목적 : 민원처리</li>
							<li>개인정보 수집항목 : 이름, 전화번호, 이메일, 주소</li>
							<li>보유 및 이용기간 : 동의를 철회하는 때까지</li>
						</ol>
						<div class="check"><input type="checkbox" id="custom_agree" name="agree_yn" value="Y"> <label for="custom_agree">동의함</label></div>
					</div>
					
					<div class="txtR mt30"><input type="submit" class="btn_gray_submit" value="등록" /></div>
				</form>
				</div>

				<div class="bt_top">
					<a href="#layoutWrap"><img src="/front/images/sub/bt_top.png" alt="상단으로"></a>
				</div>
			</div>
			<!-- container e -->

		</div>
	</div>

<jsp:include page="/front/inc/footer.jsp"></jsp:include>
<script>
	function check() {
		if (!jQuery("#custom_agree")[0].checked) alert ('개인정보수집에 동의하여 주십시오.');
		document.forms[0].agree_yn.focus();
		return (jQuery("#custom_agree")[0].checked);
	}

	function findAddress(){
        var findAddress = window.open("/front/popup/zip_code_popup.jsp", "findAddress", "width=528, height=500");   
        return false;
    }

    function adressPopupReturnValue(return1, return2, return3){
        //public function 주소 쓰는 쪽에서 이거로 복붙하삼
        
        var frm = document.eventfrm;
        frm.zip1.value = return2;
        frm.zip2.value = return3;
        frm.address1.value = return1;
        
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
</body>
</html>