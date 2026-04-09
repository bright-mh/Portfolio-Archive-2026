function hasJqueryObject(elem) {
  return elem.length > 0;
}
var app = {};
var $jq = jQuery.noConflict();
//window.onload=function(){ init(); };
$jq(document).ready(function () {
  init();
});
function init() {
  app.$jqbody = $jq("body");
  if (hasJqueryObject(app.$jqbody.find(".lnb_list"))) lnb();
  if (hasJqueryObject(app.$jqbody.find(".tip_area"))) tip();
  if (hasJqueryObject(app.$jqbody.find(".btn_top"))) btnTop();
  if (hasJqueryObject(app.$jqbody.find("footer"))) footer();
  if (hasJqueryObject(app.$jqbody.find(".line_emphasis"))) lineHover();

  popupClose();
}

/* common =============================================================== */
/* lnb : toggle */
function lnb() {
  $jq(".lnb_list > li.on ul").show();
  $jq(".lnb_list > li > a").on("click", function () {
    $jq(".lnb_list ul").slideUp(300);
    if ($jq(this).next().css("display") == "none") {
      $jq(".lnb_list > li").removeClass("on");
      $jq(this).next().slideDown(300);
      $jq(this).parent().addClass("on");
    } else {
      $jq(this).next().slideUp(300);
      $jq(this).parent().removeClass("on");
    }
  });
}

/* tip */
function tip() {
  var $jqtipBtn = $jq(".sub .btn_tip"),
    $jqbtmLine = $jq("header h1"),
    $jqlist = $jq(".tip_box .tip_list"),
    listLength = $jqlist.find(">li").length;

  if ($jq(".tip_box").css("display") == "block") {
    $jqtipBtn.removeClass("off").addClass("on");
  } else {
    $jqtipBtn.removeClass("on").addClass("off");
  }

  if (listLength == 1) {
    $jqlist.css({ "padding-top": "16px", "padding-bottom": "16px" });
  } else if (listLength == 2) {
    $jqlist.css({ "padding-top": "5px", "padding-bottom": "5px" });
  } else {
    $jqlist.css({ "padding-top": "0", "padding-bottom": "0" });
  }

  $jqtipBtn.on("click", function () {
    if (!$jq(this).hasClass("on")) {
      $jq(this).removeClass("off").addClass("on");
      $jq(".tip_box").slideDown(200);
      $jqbtmLine.css("border-color", "#7ebddd");
    } else {
      $jq(this).removeClass("on").addClass("off");
      $jq(".tip_box").slideUp(200);
      $jqbtmLine.css("border-color", "#ccc");
    }
  });
}

/* top btn */
function btnTop() {
  $jq(".btn_top").click(function () {
    $jq("html").animate({ scrollTop: 0 }, 400);
  });
}

/* layerpopup */
function popupOpen(popid) {
  $jq(".layer_bg").css("display", "block");
  $jq(popid).css("display", "block");
}
function popupClose() {
  $jq(".layer_popup")
    .find(".close")
    .on("click", function () {
      $jq(".layer_bg").css("display", "none");
      $jq(this).closest(".layer_popup").css("display", "none");
    });
}

/* footer */
function footer() {
  var scHeight = $jq("body").prop("scrollHeight");
  $jq("body").css("height", scHeight);
  $jq(".main .container .contents").css("padding-bottom", "68px");
  $jq(".sub .container .contents").css("padding-bottom", "68px");
  $jq(".btn_top").css("bottom", "0");
  $jq("footer").css({ position: "absolute", bottom: "0" });
}

/* table two line hover */
function lineHover() {
  $jq(".line_emphasis tbody tr").on("mouseenter", function () {
    if ($jq(this).hasClass("line_group")) {
      $jq(this).next().addClass("hover");
    } else {
      $jq(this).prev().addClass("hover");
    }
  });
  $jq(".line_emphasis tbody tr").on("mouseleave", function () {
    if ($jq(this).hasClass("line_group")) {
      $jq(this).next().removeClass("hover");
    } else {
      $jq(this).prev().removeClass("hover");
    }
  });
}
