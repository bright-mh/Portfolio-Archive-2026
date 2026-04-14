function hasJqueryObject(elem) {
  return elem.length > 0;
}
var app = {};
window.onload = function () {
  init();
  ios();
};
$(window).bind({
  scroll: function () {
    //headStkicy();
    if (hasJqueryObject($("body").find(".path_area"))) headerSetting();
    if (hasJqueryObject($("body").find(".main"))) mainScript();
  },
  resize: function () {},
});
function init() {
  app.$body = $("body");
  if (hasJqueryObject(app.$body.find(".input"))) inputCheck();
  if (hasJqueryObject(app.$body.find(".path_area"))) headerSetting();
  if (hasJqueryObject(app.$body.find(".main"))) mainScript();

  /*common*/
  popupClose();
  layerWrite();
  navControl();
  footScript();
}

$(document).ready(function () {
  // code Highlight
  if (hasJqueryObject($("body").find(".markdown pre"))) hljs.initHighlightingOnLoad();
  if (hasJqueryObject($("body").find(".editor_box pre"))) hljs.initHighlightingOnLoad();
});

// ios check
function ios() {
  var userAgent = navigator.userAgent;
  if (userAgent.match(/iPhone/) || userAgent.match(/iPad/)) {
    $("body").addClass("ios");
  }
}

// popupOpen
function popupOpen(popid) {
  $(popid).css("display", "block");
  $("body").addClass("layer_on");

  if ($(popid).hasClass("layer_pop")) {
    $("body").append('<div class="dimm_pop over"></div>');
  } else {
    $("body").append('<div class="dimm_pop"></div>');
    layerWrite();
  }
}
// popupClose
function popupClose() {
  $(".layer_pop")
    .find(".close")
    .on("click", function () {
      $(this).closest(".layer_pop").css("display", "none");
      $("body").removeClass("layer_on");
      $(".dimm_pop.over").remove();
    });
  $(".layer_write")
    .find(".close")
    .on("click", function () {
      $(this).closest(".layer_write").css("display", "none");
      $("body").removeClass("layer_on");
      $(".dimm_pop").remove();
    });
}

// layer_write edit area height control

function layerWrite() {
  var browserW = $(window).width(),
    browserH = $(window).height(),
    layer = $(".layer_write"),
    HeaderH = $(".layer_write .pop_inner .header").outerHeight(),
    contTopH = $(".layer_write .pop_inner .content .top_area").outerHeight(),
    formTitH = $(".layer_write .pop_inner .content .form_area legend").outerHeight(),
    //attachH = $('.layer_write .attach').outerHeight(),
    attachH = 55,
    footH = $(".layer_write .pop_inner .content .foot").outerHeight();
  var editH;
  var minusValue = HeaderH + contTopH + formTitH + attachH + footH + 50;

  browserH > browserW ? (editH = browserH - minusValue) : (editH = browserW - minusValue);

  layer.find(".content .form_area .editor").css("height", editH);
  layer.find(".content .form_area .editor .cke_contents").css("height", editH - 56);
}

/* input 체크  =============================================================== */
function inputCheck() {
  var focusInput = $(".input.error input, .input.error textarea");
  focusInput.keyup(function () {
    $(this).parents(".input.error").removeClass("error");
  });
  var focusInput2 = $(".contact_us .input input, .contact_us .input textarea");
  focusInput2.focus(function () {
    $(this).parent(".input").addClass("focus");
  });
  focusInput2.focusout(function () {
    $(this).parent(".input").removeClass("focus");
  });
}

/* input file 디자인  =============================================================== */
function file_design() {
  var uploadFile = $(".file_box .btn_upload");
  uploadFile.on("change", function () {
    if (window.FileReader) {
      var filename = $(this)[0].files[0].name;
    } else {
      var filename = $(this).val().split("/").pop().split("\\").pop();
    }
    $(this).siblings(".file_name").val(filename);
  });
}

/* header sticky styling =============================================================== */
function headerSetting() {
  var header = $(".head_bar"),
    pageTit = $(".page_tit"),
    path = $(".path_area"),
    btnTop = $("#container .btn_top"),
    intScrollTop = $(window).scrollTop();
  if (intScrollTop > 34) {
    header.find(".logo").addClass("hide");
    path.addClass("hide");
    pageTit.addClass("on");
    btnTop.addClass("on");
  } else if (intScrollTop < 34) {
    header.find(".logo").removeClass("hide");
    path.removeClass("hide");
    pageTit.removeClass("on");
    btnTop.removeClass("on");
  }
  btnTop.on("click", function () {
    $("body,html").scrollTop(0);
  });
}

/* mainScript  =============================================================== */
function mainScript() {
  //header
  var header = $(".head_bar"),
    btnTop = $("#container .btn_top"),
    intScrollTop = $(window).scrollTop();

  if (intScrollTop > 333) {
    header.removeClass("top");
    btnTop.addClass("on");
  } else if (intScrollTop < 333) {
    header.addClass("top");
    btnTop.removeClass("on");
  }
  btnTop.on("click", function () {
    $("body,html").scrollTop(0);
  });

  //tab
  $(".main_academy .link_box .box .menu").on("click", function () {
    $(".main_academy .link_box .box").removeClass("on");
    $(this).parents(".box").addClass("on");
  });
}

/* navigation =============================================================== */
function navControl() {
  var navWrap = $("#header .nav_wrap");
  var categoryBox = $(".nav_wrap .nav .category_box");

  categoryBox.prev("a").addClass("arrow");

  // navigation 클릭 시 (열기)
  $(".head_bar .btn_nav").on("click", function () {
    event.preventDefault();
    navWrap.addClass("on");
    $("#container").addClass("hide");
    $("body").addClass("layer_on");
  });

  // navigation 닫기
  navWrap.find(".close").on("click", function () {
    navWrap.removeClass("on");
    $("body").removeClass("layer_on");
    $("#container").removeClass("hide");
    navWrap.animate({ scrollTop: 0 }, 0);
  });

  // navigation 메뉴
  navWrap.find("a").on("click", function (e) {
    if ($(this).next().hasClass("category_box")) {
      e.preventDefault();
      $(this).next(".category_box").addClass("on");
      navWrap.append('<div class="dimm_gnb"></div>');
    } else if ($(this).hasClass("back")) {
      e.preventDefault();
      $(this).closest(".category_box").removeClass("on");
      $(".dimm_gnb").remove();
    }
  });
}

/* footScript  =============================================================== */
function footScript() {
  //contact_us
  $("#footer .contact_us .info .tit").on("click", function () {
    $(this).closest(".contact_us").toggleClass("on");
  });

  //language
  $("#footer .footer_btm .lang .select").on("click", function () {
    $(this).parents(".lang").toggleClass("on");
  });
  $("#footer .footer_btm .lang ul a").on("click", function () {
    $(this).closest("ul").find("li").removeClass("selected");
    $(this).parent().addClass("selected");
    $(this).closest(".lang").removeClass("on");
    $(this).hasClass("ko")
      ? $(this).closest(".lang").find(".select").removeClass("en").addClass("ko")
      : $(this).closest(".lang").find(".select").removeClass("ko").addClass("en");
  });
}
