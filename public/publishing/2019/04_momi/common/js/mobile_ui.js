function hasJqueryObject(elem) {
  return elem.length > 0;
}
var app = {};
var $jq = jQuery.noConflict();
$jq(document).ready(function () {
  init();
});
function init() {
  app.$jqbody = $jq("body");
  if (hasJqueryObject(app.$jqbody.find(".gnb_list"))) gnb();
  if (hasJqueryObject(app.$jqbody.find(".logout"))) logout();
  //if( hasJqueryObject( app.$jqbody.find(".tbl_day_week") ) ) allCheck();
}

/* gnb */
function gnb() {
  $jq(".gnb_list > li > a").on("click", function () {
    $jq(".gnb_list li").removeClass("on");
    $jq(this).parent().addClass("on");
  });
}

/* logout */
function logout() {
  $jq(".wrap").css("padding-bottom", "116px");
}

/* 요일 클릭 시, toggle */
function allCheck() {
  $jq(".tbl_day_week thead th a").on("click", function () {
    $jq(this).toggleClass("on");
  });
}
