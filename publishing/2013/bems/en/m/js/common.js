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
          .css("background", "#fff url(/html/2014/bems/en/m/images/common/bg_login_input01.gif) no-repeat 10px 0")
          .css("background-size", "contain");
      } else {
        $(this)
          .css("background", "#fff url(/html/2014/bems/en/m/images/common/bg_login_input02.gif) no-repeat 10px 0")
          .css("background-size", "contain");
      }
    }
  });

  /* 로그인 checkbox 컨트롤 */
  $(".input_check label").bind("click", function () {
    var _parent = jQuery(this).parent();
    var _target = jQuery("input:checkbox[name='loginCheck']");
    //alert(_target.is(":checked"));
    if (_target.is(":checked")) {
      _parent.removeClass("on");
    } else {
      _parent.addClass("on");
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

  $(".choiceTab02>li").each(function (index) {
    $(this).click(function () {
      var boxNum = index + 1;
      $(this).parent().find("li").removeClass("on");
      $(this).addClass("on");
      $("div[class^='chartG0']").hide();
      $("div[class^='chartG0" + boxNum + "']").show();
    });
  });

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

  $(".footBtn.top").bind("mousedown", function () {
    jQuery("#wrap").stop().animate({ scrollTop: 0 }, 200);
  });
});

/* select 스크립트 */
function apply(obj, selector) {
  $("#" + selector).html(obj[obj.selectedIndex].text);
  if (selector == "txtCon01") {
    if (obj.value == "v1") db_003_elec_1();
    if (obj.value == "v2") db_003_elec_7();
    if (obj.value == "v3") db_003_elec_30();
  } else if (selector == "txtCon02") {
    if (obj.value == "v1") db_003_gas_1();
    if (obj.value == "v2") db_003_gas_7();
    if (obj.value == "v3") db_003_gas_30();
  }
}
