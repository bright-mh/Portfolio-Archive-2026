function hasJqueryObject(elem) {
  return elem.length > 0;
}
var app = {};
/* window.onload=function(){ init(); }; */
$(document).ready(function () {
  init();
});
function init() {
  app.$body = $("body");
  if (hasJqueryObject(app.$body.find(".tbl_calendar"))) calendar();
  if (hasJqueryObject(app.$body.find(".tbl_week"))) weekChoice();
  if (hasJqueryObject(app.$body.find(".top_area .tab_list"))) tab();
  if (hasJqueryObject(app.$body.find(".layer_popup"))) layerPopup();
  if (hasJqueryObject(app.$body.find(".regist_type_tab"))) regist_type();
  if (hasJqueryObject(app.$body.find(".tip_box2"))) tip();
  if (hasJqueryObject(app.$body.find(".btn_tip02"))) btmTip();
  if (hasJqueryObject(app.$body.find(".search_detail .scroll_area"))) toggleChoice();
}

/* common =============================================================== */
/* 캘린더 날짜 클릭 효과 */
function calendar() {
  $(".tbl_calendar td").on("click", function () {
    $(".tbl_calendar td").removeClass("on");
    $(this).addClass("on");
  });
}

/* 요일 클릭 효과 */
function weekChoice() {
  $(".tbl_week td").on("click", function () {
    if ($(this).hasClass("on")) {
      $(this).removeClass("on");
    } else {
      $(this).addClass("on");
    }
  });
}

/* tab */
function tab() {
  $(".top_area .tab_list li").on("click", function () {
    $(".top_area .tab_list li").removeClass("on");
    $(this).addClass("on");
  });
}

/* 등록 유형 선택 탭 */
function regist_type() {
  $(".regist_type_tab .tab").on("click", function () {
    $(".regist_type_tab .tab").removeClass("on");
    $(this).addClass("on");
    if (!$(this).children("input").prop("checked")) {
      $(this).children("input").prop("checked", true);
    }
  });
  $(".regist_type_tab input").keydown(function (key) {
    if (key.keyCode == 13) {
      $(".regist_type_tab .tab").removeClass("on");
      $(this).parent().addClass("on");
    }
  });
}

/* tip */
function tip() {
  var $list = $(".tip_btm_area .tip_list"),
    listLength = $list.find(">li").length;

  if (listLength == 1) {
    $list.css({ padding: "16px 25px 16px 130px" });
  } else if (listLength == 2) {
    $list.css({ padding: "5px 25px 5px 130px" });
  } else {
    $list.css({ padding: "0 25px 0 130px" });
  }
}

/* tip btm btn */
function btmTip() {
  var tipOffset = $(".tip_btm_area").offset().top;

  $(".btn_tip_box .btn_tip02").click(function () {
    $("html").animate({ scrollTop: tipOffset }, 400);
  });
}

/* layerPopup default */
function layerPopup() {
  $(".btn_layer_pop").on("click", function () {
    $(".layer_bg").show();
    $(".layer_popup").show();
  });
  $(".btn_layer_close").on("click", function () {
    $(".layer_bg").hide();
    $(".layer_popup").hide();
  });
}

/* layerPopup 결재선 지정 toggle & hover */
function toggleChoice() {
  // hover
  $(".autho_person .scroll_area li").on("mouseenter", function () {
    if ($(".refer_person .scroll_area li").hasClass("on")) {
      $(this).children("a").css("cursor", "default");
      $(this).removeClass("hover");
    } else {
      $(this).children("a").css("cursor", "pointer");
      $(this).addClass("hover");
    }
  });

  $(".refer_person .scroll_area li").on("mouseenter", function () {
    if ($(".autho_person .scroll_area li").hasClass("on")) {
      $(this).children("a").css("cursor", "default");
      $(this).removeClass("hover");
    } else {
      $(this).children("a").css("cursor", "pointer");
      $(this).addClass("hover");
    }
  });

  $(".choice_box .scroll_area li").on("mouseleave", function () {
    $(this).removeClass("hover");
  });

  // toggle
  $(".search_detail .scroll_area li a").on("click", function () {
    $(this).parent().toggleClass("on");
  });

  $(".autho_person .scroll_area li a:first-child").on("click", function (e) {
    if ($(".refer_person .scroll_area li").hasClass("on")) {
      e.preventDefault();
    } else {
      $(this).parent().toggleClass("on");
    }
  });

  $(".refer_person .scroll_area li a:first-child").on("click", function (e) {
    if ($(".autho_person .scroll_area li").hasClass("on")) {
      e.preventDefault();
    } else {
      $(this).parent().toggleClass("on");
    }
  });
}
