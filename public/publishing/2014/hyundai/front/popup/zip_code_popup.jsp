<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <jsp:include page="/front/inc/top.jsp"></jsp:include>
<meta http-equiv="content-type" content="text/html;charset=utf-8"/>
<meta http-equiv="Content-Script-Type" content="text/javascript">
<meta http-equiv="Content-Style-Type" content="text/css">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title> 현대산업개발 </title>

</head>
<body>
  
    <section class="zip_group">
        <h1>우편번호찾기</h1>
        <p class="txt01"><label for="search_zip">동(읍/면/리/가)을 입력해 주세요. (예: 삼성동, 을지로3가)</label></p>
        <div class="input_style">
            <form name="zipFrm" method="post" onsubmit="return false;">
            <p><input type="text" id="search_zip" name="search_zip" onKeyPress="chkEnter(event);" /></p>
            </form>
            <a href="#" onclick="javascript:go_search();">검색</a>
        </div>

        <!-- 검색결과 영역 -->
        <article class="zip_result">
            <!-- [D] 검색 전, ul 태그 영역만 주석 처리 -->
            <!--  
            <ul>
                <li>
                    <a href="#link">
                        <span class="zip_address">서울특별시 강서구 염창동</span>
                        <span class="zip_num">157-040</span>
                    </a>
                </li>
                <li>
                    <a href="#link">
                        <span class="zip_address">서울특별시 강서구 염창동 삼성한마음아파트</span>
                        <span class="zip_num">157-717</span>
                    </a>
                </li>
                <li>
                    <a href="#link">
                        <span class="zip_address">서울특별시 강서구 염창동 신동아아파트(101~103동)</span>
                        <span class="zip_num">157-717</span>
                    </a>
                </li>
                <li>
                    <a href="#link">
                        <span class="zip_address">서울특별시 강서구 염창동 한화꿈에그린아파트(101~107동)</span>
                        <span class="zip_num">157-719</span>
                    </a>
                </li>
                <li>
                    <a href="#link">
                        <span class="zip_address">서울특별시 강서구 염창동</span>
                        <span class="zip_num">157-040</span>
                    </a>
                </li>
                <li>
                    <a href="#link">
                        <span class="zip_address">서울특별시 강서구 염창동 삼성한마음아파트</span>
                        <span class="zip_num">157-717</span>
                    </a>
                </li>
                <li>
                    <a href="#link">
                        <span class="zip_address">서울특별시 강서구 염창동 신동아아파트(101~103동)</span>
                        <span class="zip_num">157-717</span>
                    </a>
                </li>
                <li>
                    <a href="#link">
                        <span class="zip_address">서울특별시 강서구 염창동 한화꿈에그린아파트(101~107동)</span>
                        <span class="zip_num">157-719</span>
                    </a>
                </li>
            </ul>
            
            -->
            
        </article>
        <!-- //검색결과 영역 -->
    </section>
</body>


<script>

function chkEnter(event){
	if(event.keyCode == 13){
		go_search();
		return false;
	};
}



function selectAddress(obj1,obj2){
	var arr = obj2.split('-');
	
	opener.$('#type03a').val(arr[0]);
	opener.$('#type03b').val(arr[1]);
	opener.$('#type03c').val(obj1);
    return false;
}

function go_search(){
	var d = $('#search_zip').attr("value");
	var url = './zip_code_proc.jsp';
	var param = 'dong=' + encodeURIComponent(d);
	
	$.ajax({
        url: url,
        //context: document.body,
        data:param,
        async:false,
        success: function(msg){
            //showZipCodeResponse(msg);
            //alert(msg);
            $('.zip_result').empty().append(msg);
            clickEventCall();
                //showResponse(html);
        }
    }
    );
}

function clickEventCall(){
	$('.zip_result li').on('click' , function(){
        var obj1 = $(this).find('.zip_address').text();
        var obj2 = $(this).find('.zip_num').text();
        var arr = obj2.split('-');
   
        window.opener.adressPopupReturnValue(obj1, arr[0], arr[1]);
        self.close();
        
    }); 
}
$(document).ready(function(){
	clickEventCall();
});

</script>






</html>