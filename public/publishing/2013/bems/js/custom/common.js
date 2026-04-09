var wid = $(window).width();
/** 2013-12-16 누적사용량 ie8 반응형 처리를 위해 추가된 부분 **/
jQuery(document).ready(function () {
  if (wid >= 1600) {
    listResize("l");
  } else {
    listResize("s");
  }
  go_topPos(); /*2014-02-13 서브 상단바로가기 버튼 위치 추가*/
});

/** 2013-12-16 누적사용량 ie8 반응형 처리를 위해 추가된 부분 **/
jQuery(window).resize(function () {
  go_topPos(); /*2014-02-13 서브 상단바로가기 버튼 위치 추가*/
  var cWid = jQuery(window).width();
  if (cWid >= 1600) {
    if (wid < 1600) {
      // 1600 이상에서 처리해주어야 할 일
      listResize("l");
    }
  } else {
    if (wid >= 1600) {
      // 1600 이하에서 처리해 주어야 할 일
      listResize("s");
    }
  }
  wid = cWid;
});

/*2014-02-13 서브 상단바로가기 버튼 위치 추가*/
function go_topPos() {
  var wW = jQuery(window).width();
  if (wW > 1600) {
    jQuery(".sub footer .btn_top").css({ left: "1504px" });
  } else {
    if (wW > 1000) {
      jQuery(".sub footer .btn_top").css({ left: wW - 96 + "px" });
    } else {
      jQuery(".sub footer .btn_top").css({ left: "904px" });
    }
  }
}

/** 2013-12-16 누적사용량 ie8 반응형 처리를 위해 수정된 부분 **/
function listResize(mode) {
  if (mode == "l") {
    // 1600 이상
    for (i = 0; i < $(".accumulate li").length; i++) {
      if (i % 5 == 0) $(".accumulate li").eq(i).css("margin-left", "0");
      else $(".accumulate li").eq(i).css("margin-left", "14px");
    }
  } else if (mode == "s") {
    // 1600 이하
    for (i = 0; i < $(".accumulate li").length; i++) {
      if (i % 3 == 0) {
        $(".accumulate li").eq(i).css("margin-left", "0");
      } else {
        $(".accumulate li").eq(i).css("margin-left", "14px");
      }
    }
  } else {
    $(".accumulate li").eq(0).css("margin-left", "0");
  }
}

jQuery(document).ready(function () {
  /* lnb */
  jQuery(".lnb ul li.depth02").each(function () {
    if (jQuery(this).hasClass("on")) {
      jQuery(this)
        .prev("li.depth02")
        .css("background", "url('/html/2014/bems/images/common/bg_lnb_prev_line.gif') repeat-x 0 100%");
      jQuery(this)
        .prev("li.depth03")
        .css("background", "url('/html/2014/bems/images/common/bg_lnb_prev_line.gif') repeat-x 0 100%");
    }
  });
  jQuery(".lnb ul li.depth03").each(function () {
    if (jQuery(this).hasClass("on")) {
      jQuery(this)
        .prev("li.depth02")
        .css("background", "url('/html/2014/bems/images/common/bg_lnb_prev_line.gif') repeat-x 0 100%");
      jQuery(this)
        .prev("li.depth03")
        .css("background", "url('/html/2014/bems/images/common/bg_lnb_prev_line.gif') repeat-x 0 100%");
    }
  });

  /* sub : 누적 사용량 리스트*/
  listResize();

  /* sub : 목표대비 사용량 tooltip */
  $.fn.extend({
    toolTip: function () {
      var posX;
      var posY;
      var termY;
      this.bind("mouseenter", function () {
        termY = $(document).scrollTop();

        $(this).bind("mousemove", function () {
          $(document).bind("mousemove", function (event) {
            posX = event.pageX;
            posY = event.pageY;
          });
          //var de=posY.toString().indexOf('px'); //문자로 반환안함
          var de = posY;

          $(this)
            .parent()
            .next()
            .css("left", posX - 15 + "px");
          $(this)
            .parent()
            .next()
            .css("top", posY - 88 - termY + "px");
          $(this).parent().next().css("display", "block");
        });
      }).bind("mouseleave", function () {
        $(this).parent().next().css("display", "none");
      });
    },

    /*REPORT TOOLTIP*/
    toolTip2: function () {
      var posX;
      var posY;
      var termY;
      this.bind("mouseenter", function () {
        termY = $(document).scrollTop();

        $(this).bind("mousemove", function () {
          $(document).bind("mousemove", function (event) {
            posX = event.pageX;
            posY = event.pageY;
          });
          //var de=posY.toString().indexOf('px'); //문자로 반환안함
          var de = posY;

          if ($(this).hasClass("elec")) {
            $(this).parent().parent().parent().find(".tip_gas").css("display", "none");
            $(this)
              .parent()
              .parent()
              .parent()
              .find(".tip_elec")
              .css("left", posX - 15 + "px");
            $(this)
              .parent()
              .parent()
              .parent()
              .find(".tip_elec")
              .css("top", posY - 88 - termY + "px");
            $(this).parent().parent().parent().find(".tip_elec").css("display", "block");
          } else if ($(this).hasClass("gas")) {
            $(this).parent().parent().parent().find(".tip_elec").css("display", "none");
            $(this)
              .parent()
              .parent()
              .parent()
              .find(".tip_gas")
              .css("left", posX - 15 + "px");
            $(this)
              .parent()
              .parent()
              .parent()
              .find(".tip_gas")
              .css("top", posY - 88 - termY + "px");
            $(this).parent().parent().parent().find(".tip_gas").css("display", "block");
          }
        });
      }).bind("mouseleave", function () {
        $(this).parent().parent().parent().find(".tip_elec").css("display", "none");
        $(this).parent().parent().parent().find(".tip_gas").css("display", "none");
      });
    },

    /*main : 하단 뉴스 배너*/
    newsMove: function () {
      var _this = jQuery(this);
      var btn = _this.find(".rss_btn");
      var bTime = 0;
      var bTimer = 3000;
      var moveHei = 14;
      var len = _this.find("ul").find("li").length - 1;
      var btnState = false;

      if (len == 0) {
        return;
      }
      function moving() {
        var objDiv = "<li>" + _this.find("ul").find("li").eq(0).html() + "</li>";
        jQuery(objDiv).insertAfter(_this.find("ul").find("li").eq(len));

        _this
          .find("ul")
          .stop()
          .animate(
            {
              "margin-top": -1 * moveHei + "px",
            },
            500,
            function () {
              _this.find("ul").find("li").eq(0).remove();
              _this
                .find("ul")
                .stop()
                .animate({ "margin-top": 0 + "px" }, 0);
              btnState = false;
            },
          );
      } //E

      bTime = setInterval(moving, bTimer);

      btn.bind("click mouseleave", function (e) {
        if (e.type == "click") {
          if (!btnState) {
            clearInterval(bTime);
            moving();
            btnState = true;
          } //E if
        } else if (e.type == "mouseleave") {
          bTime = setInterval(moving, bTimer);
        } //e if
        return false;
      });
    },
  });

  jQuery(".graphBox .graphBar").toolTip();
  jQuery(".graphBox .elec").toolTip2(); /* report tooltip */
  jQuery(".graphBox .gas").toolTip2(); /* report tooltip */
  jQuery(".grap .realData").toolTip(); /*main tooltip*/
  jQuery(".rss").newsMove(); /*main rss news*/

  /* sub - 차트 데이터 tooltip */
  $(".tableTooltip a")
    .bind("mouseenter", function () {
      $(this).next().css("display", "block");
    })
    .bind("mouseleave", function () {
      $(this).next().css("display", "none");
    });

  /* sub - 테이블 속성 주기 */
  $(".table_style01_02 tbody tr:odd td").css("background", "#fafafa");
  $(".table_style01_02 tfoot td").css("background", "#fef4f2");

  $(".table_style01_03 tbody tr:nth-child(4n-1) td").css("background", "#fafafa");
  $(".table_style01_03 tbody tr:nth-child(4n) td").css("background", "#fafafa");
  $(".table_style01_03 tfoot td").css("background", "#fef4f2");

  /* 2013-12-02_FAQ - 슬라이드 토글_수정 */
  /* 2013-11-29_FAQ - 슬라이드 토글 */
  $(".faq .cellStyle a").bind("mousedown", function () {
    if ($(this).parent().parent().hasClass("trStyle02")) {
      $(this).parent().parent().removeClass("trStyle02");
      $(this).parent().parent().next(".trStyle").hide();
    } else {
      $(".faq .cellStyle a").each(function () {
        $(this).parent().parent().next(".trStyle").hide();
        if ($(this).parent().parent().hasClass("trStyle02")) {
          $(this).parent().parent().removeClass("trStyle02");
        }
      });
      $(this).parent().parent().next(".trStyle").show();
      $(this).parent().parent().addClass("trStyle02");
    } //E if
  });
  /* //2013-12-02_FAQ - 슬라이드 토글_수정 */

  /* 2013-12-02_고객센터 - focus시, value값 없애기_추가 */
  $(".input_style02.cs")
    .bind("focusin", function () {
      jQuery(this).attr("value", "");
    })
    .bind("focusout", function () {
      var str = jQuery(this).attr("value");

      if (str == "") {
        jQuery(this).attr("value", "제목 및 내용을 입력하세요.");
      } else {
      } //E if
    });
  /* //2013-12-02_고객센터 - focus시, value값 없애기_추가 */

  /* 2013-12-16 버튼 관련 마우스 오버 추가1 */
  $(".inquiry ul li a img")
    .bind("mouseenter", function () {
      $(this).attr("src", "/html/2014/bems/images/common/btn_popup_close02_over.gif");
    })
    .bind("mouseleave", function () {
      $(this).attr("src", "/html/2014/bems/images/common/btn_popup_close02.gif");
    });
  /* //2013-12-16 버튼 관련 마우스 오버 추가1 */

  /* 2013-12-24 에너지 관리_버튼 오버 효과 추가 */
  $(".emWarning .btn_close a img")
    .bind("mouseenter", function () {
      $(this).attr("src", "/html/2014/bems/images/common/btn_close_em_over.gif");
    })
    .bind("mouseleave", function () {
      $(this).attr("src", "/html/2014/bems/images/common/btn_close_em.gif");
    });
  /* //2013-12-24 에너지 관리_버튼 오버 효과 추가 */

  /* 2013-12-24 팝업 닫기_버튼오버 효과 추가 */
  $(".pop_close a img")
    .bind("mouseenter", function () {
      $(this).attr("src", "/html/2014/bems/images/common/btn_popup_close_over.png");
    })
    .bind("mouseleave", function () {
      $(this).attr("src", "/html/2014/bems/images/common/btn_popup_close.png");
    });
  /* //2013-12-24 팝업 닫기_버튼오버 효과 추가 */

  /*select Box z-index 설정*/
  var zLen = 0;
  var zIndex = 100;
  $("select[id^=country_]").each(function () {
    zLen++;
  });

  function selectZindex() {
    for (i = 0; i < zLen; i++) {
      $("select[id^=country_]")
        .eq(i)
        .parent()
        .attr("style", "z-index:" + (zIndex - i) + ";");
    } //E for
  }

  selectZindex();
});

/* 2013-11-28 hjl 에너지관리 peak001*/
function peakTextSet() {
  var wid = jQuery(window).width();

  var txt = $("div.energy_use div.target_energy div.text");
  var input = $("div.energy_use div.target_energy div.targetEn_input");

  /* 2014-01-06 목표 피크 관리:데이터 수치 7자리 영역 확보를 위한_수정 */
  if (wid > 1599) {
    txt.width(256);
    txt.css("padding", "14px 9px 14px 106px");
    //txt.css('background-position-x', 'left');
    txt.css("backgroundPosition", "0 0");

    input.width(285);
    input.children("form input:text").attr("size", 278);
  } else {
    txt.width(303);
    txt.css("padding", "14px 9px");
    txt.css("backgroundPosition", "-207px 0");

    input.width(217);
    input.children("form input:text").attr("size", 181);
  }
  /* //2014-01-06 목표 피크 관리:데이터 수치 7자리 영역 확보를 위한_수정 */
}

/** 2014-02-05 Print mode 를 위한 스크립트. 기존 setLayout 함수를 수정, 
printMode 변수 추가, 
setPrintMode(onOff) 함수 추가
*/
function setLayout() {
  if (!printMode) {
    try {
      var winWidth = jQuery(window).width();
      var docWidth = jQuery(document).width();
      var lnbWidth = 200;
      var contentMargin = 0;
      var contentWidth = winWidth - lnbWidth - contentMargin;
      jQuery("#container").css("width", docWidth);

      // 전체 페이지에서 차트부분 반응형 JS
      if (winWidth <= 1000) {
        contentWidth = 800;
      } else if (winWidth <= 1600) {
        // contentWidth = winWidth-lnbWidth-contentMargin;
      } else {
        contentWidth = 1600 - lnbWidth - contentMargin;
      }
      jQuery("#container").css({ width: contentWidth + lnbWidth + contentMargin + "px" });
      jQuery("#contents").css({ width: contentWidth + "px" });

      // 레포트 페이지에서 반응형 JS
      var rpFixedlayerWidth = jQuery(".fixed_layout").width();

      if (rpFixedlayerWidth <= 1290) {
        rpFixedlayerWidth = 1290;
        jQuery(".fixed_layout").css({ width: rpFixedlayerWidth + "px", overflow: "hidden" });
      }
    } catch (e) {
      alert(e);
    }
  }
}

var printMode = 0;
function setPrintMode(onOff) {
  if (onOff == 1) {
    var hideElem = [".conPosDiv", "header", ".lnb", ".titleArea", ".clear", "footer"];
    jQuery("#wrap").attr("id", "wrap1");
    for (i = 0; i < hideElem.length; i++) {
      jQuery(hideElem[i]).css("display", "none");
    }
    jQuery("#container").css("width", "800px");
    jQuery("#contents").css("width", "800px");
    jQuery(".BoxArea").css("margin", "20px 0 0 0");
    printMode = 1;
  } else {
    var hideElem = [".conPosDiv", "header", ".lnb", ".titleArea", ".clear", "footer"];
    jQuery("#wrap").attr("id", "wrap1");
    for (i = 0; i < hideElem.length; i++) {
      jQuery(hideElem[i]).css("display", "");
    }
    jQuery("#container").css("width", "");
    jQuery("#contents").css("width", "");
    jQuery(".BoxArea").css("margin", "20px 30px 0 30px");
    printMode = 0;
  }
}
/** 2014-02-05 여기까지 Print mode 를 위한 함수 */

jQuery(document).ready(function () {
  setLayout();
  peakTextSet();
  jQuery(window).resize(function () {
    setLayout();
    peakTextSet();
  });

  /*2013-11-29 jhy footer topBtn*/
  jQuery("footer .btn_top").bind("mousedown", function () {
    jQuery("html, body").stop().animate({ scrollTop: 0 }, 200);
    return false;
  });
});

jQuery("document").ready(function () {
  jQuery(".input_style03").attr("placeholder", "입력");

  jQuery(".input_style03").bind("focus", function () {
    jQuery(this).attr("placeholder", "");
  });
  jQuery(".input_style03").bind("blur", function () {
    jQuery(this).attr("placeholder", "입력");
  });
});
