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

  if (listLength == 1) {
    $jqlist.css({ padding: "16px 75px 16px 130px" });
  } else if (listLength == 2) {
    $jqlist.css({ padding: "5px 75px 5px 130px" });
  } else {
    $jqlist.css({ padding: "0 75px 0 130px" });
  }

  $jqtipBtn.on("click", function () {
    if (!$jq(this).hasClass("on")) {
      $jq(this).addClass("on");
      $jq(".tip_box").slideDown(200);
      $jqbtmLine.css("border-color", "#7ebddd");
    } else {
      $jq(this).removeClass("on");
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
