var isPhone;
$(document).ready(function () {
  /* 로그인 input bg */
  $(".inputArea .input_style input").bind("focus", function () {
    $(this).css("background", "none").css("background", "#fff");
  });
  $(".inputArea .input_style input").bind("blur", function () {
    if ($(this).val() == "") {
      if ($(this).hasClass("input_id")) {
        $(this)
          .css("background", "#fff url(/html/2014/bems/m/images/common/bg_login_input01.gif) no-repeat 10px 0")
          .css("background-size", "contain");
      } else {
        $(this)
          .css("background", "#fff url(/html/2014/bems/m/images/common/bg_login_input02.gif) no-repeat 10px 0")
          .css("background-size", "contain");
      }
    }
  });

  /* 로그인 checkbox 컨트롤 
	2014-02-05 함수 실행 시점을 click 이벤트 발생 시점 에서 checkbox 의 상태 변화 이벤트 발생 시점으로 변화
	*/
  $("input:checkbox[name='loginCheck']").bind("change", function () {
    var _parent = jQuery(this).parent();
    var _target = jQuery("input:checkbox[name='loginCheck']");

    if (_target.is(":checked")) {
      _parent.addClass("on");
    } else {
      _parent.removeClass("on");
    } //E if
  });

  /* dashboard 탭 클릭 이벤트 */
  $(".tapBtn>li").each(function (index) {
    $(this).click(function () {
      var boxNum = index + 1;
      $(this).parent().find("li").removeClass("on");
      $(this).addClass("on");
      $(".chartArea div[class^='chartBox0']").hide();
      $(".chartArea div[class^='chartBox0" + boxNum + "']").show();
    });
  });

  /** 퍼블리싱 원본 **/
  $(".choiceTab02>li").each(function (index) {
    $(this).click(function () {
      var boxNum = index + 1;
      $(this).parent().find("li").removeClass("on");
      $(this).addClass("on");
      $(".chartArea div[class^='chartG0']").hide();
      $(".chartArea div[class^='chartG0" + boxNum + "']").show();
    });
  });
  /** 여기까지 퍼블리싱 원본 **/

  /** 개발 서버에서 변경된 부분 
	$(".choiceTab02>li").each(function(index) {
		$(this).click(function() {
			var boxNum = index + 1;
			$(this).parent().find("li").removeClass("on");
			$(this).addClass("on");
			$("div[class^='chartG0']").hide();
			$("div[class^='chartG0"+ boxNum +"']").show();
		});
	});
/** 여기까지 개발서버에서 변경된 부분 **/

  /* 누적 사용량 list */
  var i = 0;
  $(".accrueList").each(function () {
    var j = 0;
    $(".accrueList")
      .eq(i)
      .find("li")
      .each(function () {
        $(this).addClass("listStyle0" + ((j % 3) + 1));
        j++;
      });
    i++;
  });

  /*
			tooltip
		*/
  $.fn.extend({
    tooltip: function (isPos) {
      var _this = this;
      var tool = jQuery(".tooltipBox");
      _this
        .bind("mouseup", function (e) {
          $(window).unbind("mouseup");
          try {
            tool.hide();
          } catch (e) {}

          jQuery(this).parent().next().show();
          var leftO = jQuery(this).parent().offset().left;
          var topO = jQuery(this).parent().offset().top;

          //tool.css({'left': (e.pageX-leftO) +"px" , 'top' : (e.pageY-topO)+'px'});
          if (isPos == "default") {
            tool.css({ left: "10px", top: "10px" });
          } else if (isPos == "CB") {
            var idx = _this.parent().parent().index(jQuery(this).parent().parent());

            if (idx == 6 || idx == 13) {
              tool.css({ left: "-50px", top: "50px" });
            } else {
              tool.css({ left: "-30px", top: "50px" });
            } //E if
          }
        })
        .bind("mouseout", function () {
          $(window).bind("mouseup", function () {
            tool.hide();
          });
        });
    },
  });

  jQuery(".graphY>span").tooltip("default");
  jQuery(".graphY02>span").tooltip("default");
  jQuery(".iGraph em>span").tooltip("default");
  jQuery(".iGraph.yesterD em>span").tooltip("default");
  jQuery(".vGraph li>em>span").tooltip("CB");

  function browser_chk() {
    var uAgent = navigator.userAgent.toLowerCase();

    var mobilePhones = new Array("iphone", "ipad", "firefox", "android", "chrome");

    for (var i = 0; i < mobilePhones.length; i++) {
      if (uAgent.indexOf(mobilePhones[i]) != -1) {
        isPhone = mobilePhones[i];
      }
    }
  }

  $(window).load(function () {
    browser_chk();

    if (isPhone != "iphone") {
      $(document).on("vmousemove", ".ui-panel-dismiss.ui-panel-dismiss-position-left", function (event) {
        event.preventDefault();
      });
    }
  });

  $(document).on("vmousemove", "#defaultpanel", function (event) {
    event.preventDefault();
  });

  /*2014-02-14 footer top 버튼 수정*/
  $(".top").bind("mousedown", function () {
    jQuery("#wrap").animate({ scrollTop: 0 }, 200);
    jQuery("html, body").animate({ scrollTop: 0 }, 200);
  });
  /*End 2014-02-14 footer top 버튼 수정*/

  /*2014-02-14 footer top BTN visiblity */
  jQuery(".top").fadeOut(0);
  function fBtnVisiblity() {
    jQuery(window).scroll(function () {
      var ns = jQuery(window).scrollTop();
      if (20 < ns) {
        jQuery(".top").fadeIn(10);
      } else {
        jQuery(".top").fadeOut(10);
      }
    });
  }

  fBtnVisiblity();
  /*//End 2014-02-14 footer top BTN visiblity */
});

/* select 스크립트 */
function apply(obj, selector) {
  $("#" + selector).html(obj[obj.selectedIndex].text);
  /*** 개발 시 추가된 부분 ***
if (selector == "txtCon01")
	{
		if (obj.value == "v1") db_003_elec_1();
		if (obj.value == "v2") db_003_elec_7();
		if (obj.value == "v3") db_003_elec_30();
	}
	else if (selector == "txtCon02")
	{
		if (obj.value == "v1") db_003_gas_1();
		if (obj.value == "v2") db_003_gas_7();
		if (obj.value == "v3") db_003_gas_30();
	} **/
  /*** 여기까지 개발 시 추가된 부분 ***/
}

/*** 개발시 추가된 부분 (2014-02-06 홍대용 주석) ***
//Loading*************************************************************************************************
function showLoading (onOff, selector, image){
	var divWidth = (jQuery(selector).width());
	var divHeight = (jQuery(selector).height());

	if (onOff == '1')
	{
		jQuery(selector).append ("<div class='divLoading' style='position:absolute; width:"+divWidth+"px; height:"+divHeight+"px; padding:0; margin:0;left:0; top:0; background:#FFF; text-align:center'></div>");
		jQuery(selector).append ("<div class='divLoadingContent' style='position:absolute; padding:0; margin:0;left:0; top:0; text-align:center; line-height:20px;'><img src='"+image+"' style='margin:0 0 8px 0;'/><br>"+"<p style='text-aling:center;'>요청하신 작업을 처리하고 있습니다.<br/> 잠시만 기다리세요."+"</div>");
		jQuery(selector + " .divLoading").fadeTo(0, 0.7);
	}
	else
	{ 
		jQuery(selector + " .divLoading").remove();
		jQuery(selector + " .divLoadingContent").remove();
	}
	var divContentWidth = (jQuery(selector + " .divLoadingContent").width());
	var divContentHeight = (jQuery(selector + " .divLoadingContent").height());
	var posX =  (jQuery(window).width()/2) - (divContentWidth/2);
	var posY = (divHeight/2) - (divContentHeight/2);
	
	
	jQuery(selector + " .divLoadingContent").css("left", posX+"px");
	jQuery(selector + " .divLoadingContent").css("top", posY+"px");
	
}

// Loading***********************************************************************************

function fnReSize(){
	var wWidth = jQuery(window).width() - 40;
	
	jQuery(".chartArea").css("width", wWidth+"px");
	jQuery(".highchart").css({"width":wWidth+"px", "height":"230px"});
	jQuery(".highchartW").css({"width":wWidth+"px"});
}

function flexibleHeight(){
	var cnt = 0;									
	$("#touchSlider6>.slides>li").each(function(){	
		touchArr[cnt] = jQuery(this).find('>.boxLayout').outerHeight();
		
		cnt++;
	});	

	num = $("#pageNum").val();
	
	$("#touchSlider6").css({'height' : touchArr[num]+'px'});
	
	//2014-01-21 slider height값 수정
	jQuery('#wrap').css({'height' : (touchArr[num]+ 113)+'px'});//113은 최상단부터 네비게이션까지의 높이
}
/*** 여기까지 개발시 추가된 부분 ***/
/**
2014-02-05 로그인 화면 정보저장 여부 checkbox 초기화 를 위해 함수 추가 
*/
function initCheckBox(value) {
  var obj = $(".input_check label");
  var objCheckbox = $("input:checkbox[name='loginCheck']");

  if (value == "on") {
    if (!obj.parent().hasClass("on")) {
      obj.parent().addClass("on");
    }
    objCheckbox.attr("checked", true);
  } else {
    if (obj.parent().hasClass("on")) {
      obj.parent().removeClass("on");
    }
    objCheckbox.attr("checked", false);
  }
}
