var bookSelect = false; //북마크 선택 유무
var subHei = 343; //sub layout max
var mTimer = 0,
  mTime = 500; //gnb close interval
var selectMenu = 0;
var gnbSelec = false; //gnb 선택 시
var subSelect = false; //서브 선택

var mOverState = false; //mOver 함수 중복 호출 막음

jQuery(document).ready(function () {
  navRespon(); //nav

  /*상단 GNB 버튼 이벤트*/

  /*oneDepth*/
  jQuery("nav .menu ul li").bind("click mouseover mouseout", function (e) {
    var id = jQuery(this).index(".menu ul li");
    if (e.type == "mouseover") {
      clearTimeout(mTimer);
      /*mOver(id);*/
      gnbSelec = true;
    } else if (e.type == "mouseout") {
      gnbSelec = false;
      closeSub();
    } else if (e.type == "click") {
    } //E if

    return false;
  });

  jQuery(".subCon").bind("click mouseover mouseout", function (e) {
    if (e.type == "mouseover") {
      subSelect = true;
      clearTimeout(mTimer);
      mOver(selectMenu);
    } else if (e.type == "mouseout") {
      subSelect = false;
      closeSub();
    } //E if
  });

  /*twoDepth*/
  jQuery(".subCon .sub_section li.two").bind("click mouseover mouseout", function (e) {
    var id = jQuery(this).parent().index(".subCon .sub_section");
    var uId = jQuery(this).index(".subCon .sub_section:eq(" + id + ") li.two");

    if (e.type == "mouseover") {
      subSelect = true;
      clearTimeout(mTimer);
      mOver(id, uId);
    } else if (e.type == "mouseout") {
      jQuery(this).removeClass("on");
      jQuery(this).addClass("off");
      closeSub();
    } else if (e.type == "click") {
    } //E if
    return false;
  });

  /*threeDepth*/
  jQuery(".subCon .three li").bind("click mouseover mouseout", function (e) {
    if (e.type == "mouseover") {
      subSelect = true;
      clearTimeout(mTimer);
      jQuery(this).removeClass("off");
      jQuery(this).addClass("on");
    } else if (e.type == "mouseout") {
      jQuery(this).removeClass("on");
      jQuery(this).addClass("off");
    } else if (e.type == "click") {
    } //E if
  });

  /*//상단 GNB 버튼 이벤트*/

  /*북마크*/
  jQuery(".bookmark").bind("mouseover mouseout click", function (e) {
    if (e.type == "mouseover") {
      if (bookSelect) {
        //changeImg(jQuery(this), 'on', 'noDirect', '_over', '_select');
      } else {
        changeImg(jQuery(this), "on", "noDirect", "_over", "_default");
      } //E if
    } else if (e.type == "mouseout") {
      if (bookSelect) {
        //changeImg(jQuery(this), 'off', 'noDirect', '_over', '_select');
      } else {
        changeImg(jQuery(this), "off", "noDirect", "_over", "_default");
      } //E if*
    } else if (e.type == "click") {
      e.preventDefault();
      e.stopPropagation();

      if (bookSelect) {
        changeImg(jQuery(this), "off", "noDirect", "_select", "_default");
        jQuery(this).addClass("off");
        jQuery(this).removeClass("on");
        bookSelect = false;
        return false;
      } else {
        changeImg(jQuery(this), "off", "noDirect", "_over", "_select");
        changeImg(jQuery(this), "off", "noDirect", "_default", "_select");

        jQuery(this).removeClass("off");
        jQuery(this).addClass("on");

        bookSelect = true;
        return false;
      } //E if
    } //E if
  });
  /*//E 북마크*/

  /*resizing*/
  jQuery(window).resize(function () {
    navRespon();
  }); //E resize

  jQuery(window).scroll(function () {
    var offset = jQuery(window).scrollTop();

    var head = jQuery("header");
    var sub = jQuery(".subMenuArea");
    var menuArea = jQuery("nav .menuArea");
    var menu = jQuery(".menu");
    var bBox = jQuery(".menu .bBox");
    var responBg = jQuery(".responBg");
    var nav = jQuery("nav");
    var book = jQuery(".bookmark");
    var star = jQuery(".bookmark img");
    var nBg = jQuery(".navBg");
    var dHead = jQuery(".dummyHei");
    var time = 0;
    var subBG = jQuery(".sub #wrap");
    //alert(offset);
    if (offset > 100) {
      TweenMax.to(head, time, { top: -46, ease: Cubic.easeInOut });

      TweenMax.to(dHead, time, { height: 149 }); /*height 49 + scrollTop 100*/

      TweenMax.to(nav, time, { height: 48, ease: Cubic.easeInOut });
      TweenMax.to(sub, time, { top: 48, ease: Cubic.easeInOut });
      subBG.css("background-position", "0 39px");
      TweenMax.to(menuArea, time, { height: 48, ease: Cubic.easeInOut });
      TweenMax.to(menu, time, { height: 47, ease: Cubic.easeInOut });
      TweenMax.to(bBox, time, { height: 32, paddingTop: 15, ease: Cubic.easeInOut });
      TweenMax.to(responBg, time, { height: 46, ease: Cubic.easeInOut });
      TweenMax.to(book, time, { height: 46, ease: Cubic.easeInOut });
      TweenMax.to(star, time, { top: 15, ease: Cubic.easeInOut });
      TweenMax.to(nBg, time, { marginTop: 0, ease: Cubic.easeInOut });
    } else {
      TweenMax.to(head, time, { top: 0, ease: Cubic.easeInOut });
      TweenMax.to(nav, time, { height: 64, ease: Cubic.easeInOut });
      TweenMax.to(dHead, time, { height: 110 });
      TweenMax.to(sub, time, { top: 110, ease: Cubic.easeInOut });
      subBG.css("background-position", "0 0");
      TweenMax.to(menuArea, time, { height: 64, ease: Cubic.easeInOut });
      TweenMax.to(menu, time, { height: 63, ease: Cubic.easeInOut });
      TweenMax.to(bBox, time, { height: 40, paddingTop: 22, ease: Cubic.easeInOut });
      TweenMax.to(responBg, time, { height: 62, ease: Cubic.easeInOut });
      TweenMax.to(book, time, { height: 62, ease: Cubic.easeInOut });
      TweenMax.to(star, time, { top: 22, ease: Cubic.easeInOut });
      TweenMax.to(nBg, time, { marginTop: 0, ease: Cubic.easeInOut });
    } //E if
  });
}); //E document

/*gnb over 시 action*/
function mOver(num01, num02) {
  var len = jQuery("nav .menu ul li").length;
  selectMenu = num01;
  /*gnb와 sub 사이 경계 회색 bg*/
  sublinekBg();

  for (i = 0; i < len; i++) {
    if (i == num01) {
      jQuery("nav .menu ul li:eq(" + i + ") .bBox").removeClass("off");
      jQuery("nav .menu ul li:eq(" + i + ") .bBox").addClass("on");
      changeImg(jQuery("nav .menu ul li:eq(" + i + ") .bBox"), "on", "noDirect", "_over", "_out");

      if (num02 != undefined) {
        for (j = 0; j < jQuery(".subCon .sub_section:eq(" + i + ") li.two").length; j++) {
          if (j == num02) {
            jQuery(".subCon .sub_section:eq(" + i + ") li.two:eq(" + j + ")").removeClass("off");
            jQuery(".subCon .sub_section:eq(" + i + ") li.two:eq(" + j + ")").addClass("on");
          } else {
            jQuery(".subCon .sub_section:eq(" + i + ") li.two:eq(" + j + ")").removeClass("on");
            jQuery(".subCon .sub_section:eq(" + i + ") li.two:eq(" + j + ")").addClass("off");
          } //E if
        } //E for
      } //E if
    } else {
      jQuery("nav .menu ul li:eq(" + i + ") .bBox").removeClass("on");
      jQuery("nav .menu ul li:eq(" + i + ") .bBox").addClass("off");
      changeImg(jQuery("nav .menu ul li:eq(" + i + ") .bBox"), "off", "noDirect", "_over", "_out");

      for (j = 0; j < jQuery(".subCon .sub_section:eq(" + i + ") li.two").length; j++) {
        jQuery(".subCon .sub_section:eq(" + i + ") li.two:eq(" + j + ")").removeClass("on");
        jQuery(".subCon .sub_section:eq(" + i + ") li.two:eq(" + j + ")").addClass("off");
      } //E for
    } //E if
  } //E for

  if (mOverState == true) {
    return;
  }

  /*over*/
  subExtends("over");

  mOverState = true;
} //E fun

function closeSub() {
  if (!gnbSelec && !subSelect) {
    mTimer = setTimeout(function () {
      subExtends("out");
    }, mTime);
  } //E if
}

/*sub 메뉴 확장*/
function subExtends(isState) {
  var wrap = jQuery(".subMenuArea");
  var target = jQuery(".subWrap");
  if (isState == "over") {
    TweenMax.to(wrap, 0.2, {
      height: subHei,
      ease: Cubic.easeInOut,
      onComplete: function () {
        mOverState = false;
      },
    });
    TweenMax.to(target, 0.2, { top: 0, ease: Cubic.easeInOut });
  } else if (isState == "out") {
    TweenMax.to(wrap, 0.1, { height: 0, ease: Cubic.easeInOut });
    TweenMax.to(target, 0.1, { top: -subHei, ease: Cubic.easeInOut });
    jQuery("nav .menu ul li").each(function () {
      jQuery(this).find(".bBox").removeClass("on");
      jQuery(this).find(".bBox").addClass("off");
      changeImg(jQuery(this).find(".bBox"), "off", "noDirect", "_over", "_out");
    }); //E each
  } //E if
} //E fun

/*네비게이션 과 북마크 사이에 있는 bg 크기*/
function navRespon() {
  var wW = $(window).width();

  /*bg 영역*/
  if (wW >= 1002 && wW < 1600) {
    $(".responBg").show();
    $(".subResponBG").show();

    var wid = wW - ($(".menu").width() + $(".bookmark").width());

    $(".responBg").css("width", wid - 4);
    $(".subResponBG").css("width", wid - 4);
    sublinekBg();
  } else if (wW < 1002) {
    $(".responBg").hide();
    $(".subResponBG").hide();
  } else if (wW >= 1600) {
    $(".responBg").show();
    $(".subResponBG").show();

    wid = 1600 - ($(".menu").width() + $(".bookmark").width());

    $(".responBg").css("width", wid - 4);
    $(".subResponBG").css("width", wid - 4);

    sublinekBg();
  } //E if

  /*//bg 영역*/

  /*nav respon*/

  if (wW >= 1600) {
    jQuery("header .head_top .hArea .utilArea").css({ float: "right", "margin-right": "40px" });
    jQuery(".menu").css({ width: "1200px" });
    jQuery(".menu .bBox").css({ width: "198px" });
    jQuery(".menu li:first-child .bBox").css({ width: "198px" });
    jQuery(".menu ul li .icon").css({ "margin-left": "30px" });
    jQuery(".subMenuArea .subWrap .subCon ul.sub_section").css({ width: "168px", "padding-left": "30px" });
    jQuery(".subMenuArea .subWrap .subCon ul.sub_section:first-child").css({ width: "168px", "padding-left": "30px" });
    TweenMax.to(jQuery(".subMenuArea .subWrap .subCon ul.sub_section:first-child"), 0, {
      width: 168,
      paddingLeft: 30,
      onComplete: function () {
        $(".responBg").show();
        $(".subResponBG").show();

        wid = 1600 - ($(".menu").width() + $(".bookmark").width());

        $(".responBg").css("width", wid - 4);
        $(".subResponBG").css("width", wid - 4);
      },
    });
  } else {
    jQuery("header .head_top .hArea .utilArea").css({ float: "left", "margin-right": "0px" });
    jQuery(".menu").css({ width: "937px" });
    jQuery(".menu .bBox").css({ width: "154px" });
    jQuery(".menu li:first-child .bBox").css({ width: "155px" });
    jQuery(".menu ul li .icon").css({ "margin-left": "20px" });
    jQuery(".subMenuArea .subWrap .subCon ul.sub_section").css({ width: "134px", "padding-left": "20px" });
    jQuery(".subMenuArea .subWrap .subCon ul.sub_section:first-child").css({ width: "135px", "padding-left": "20px" });
  } //E if

  /*///nav respon*/
}
/*oneDepth와 twoDepth 경계 div*/
function sublinekBg() {
  var markTarget = jQuery("nav .menu ul li:eq(" + selectMenu + ") .bBox");
  TweenMax.to(jQuery(".overLinkBg"), 0, {
    width: markTarget.width(),
    left: markTarget.position().left,
    ease: Cubic.easeInOut,
  });
}

// img replace
function changeImg(_target, isString, direct, overImg, outImg) {
  var rpc = null;

  if (direct != "direct") {
    rpc = _target.find("img").attr("src");

    if (isString == "on") {
      rpc = rpc.replace(outImg, overImg);
    } else if (isString == "off") {
      rpc = rpc.replace(overImg, outImg);
    } //E if

    _target.find("img").attr("src", rpc);
  } else {
    rpc = _target.attr("src");

    if (isString == "on") {
      rpc = rpc.replace(outImg, overImg);
    } else if (isString == "off") {
      rpc = rpc.replace(overImg, outImg);
    } //E if
    _target.attr("src", rpc);
    1;
  } //E if
} //E fun
