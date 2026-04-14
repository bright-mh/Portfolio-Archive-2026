try {
  var gnbChange = isUser;
} catch (e) {
  //alert('GNB에 isUer 변수를 설정해 주세요');
  gnbChange = "user"; //admin 과 user
}

try {
  var gnbAlert = isAlert;
} catch (e) {
  //alert('GNB에 isAlert 변수를 설정해 주세요');
  gnbAlert = false; //default false
}

try {
  var gnbAlertAll = isAlertAll;
} catch (e) {
  //alert('GNB에 isAlertAll 변수를 설정해 주세요');
  gnbAlertAll = false; //default false
}

jQuery(document).ready(function () {
  //jQuery('.menuBox').css({'border' : '1px solid #f0f' })
  if (gnbChange == "user") {
    jQuery(".menuBox ul.admin").hide();
  }

  jQuery(".currentP_sub").hide();
  jQuery(".userSub").hide();
  jQuery(".bookMark .bookBox").hide();

  /*cP ==> currentPosition*/
  var cP = {
    onImg: "/images/common/h_select_icon_off.gif",
    outImg: "/images/common/h_select_icon.gif",
  };
  jQuery(".gnbSubMenu").show();

  var gnb = {
    len: jQuery(".menuBox ul.user>li").length,
    aLen: jQuery(".menuBox ul.admin>li").length,
    sub: {
      subHei: jQuery(".gnbSubMenu .gSubArea").height(),
      aSubHei: 0,
    },

    wid: 0,
    parentWid: 0,
    uSubExtend: false,
    aSubExtend: false,
    userDropDown: 41,
    userDefaultHei: 62,
  };

  var gnbChangeHei = {
    user: 109,
    userDown: 0,
    admmin: 123,
    alertHei: 50,
  };

  if (gnbAlert) {
    jQuery("header").css({ top: gnbChangeHei.alertHei + "px" });
    jQuery(".headAlert").show();
  }

  if (gnbAlertAll) {
    jQuery("header").css({ top: gnbChangeHei.alertHei * 2 + "px" });
    jQuery(".headAlert").show();
    jQuery(".headAlert2").show();
  }

  var admin = {
    parentHei: 76,
    userNavHei: 36,
    admNavHei: 36,
    navPaddingTop: 10,
    userSubPos: 84,
    adminSubPos: 122,
  };
  if (gnbAlert) {
    /*131224 mouseover 효과 추가*/
    jQuery(".headAlert .closeBtn01").live("mousedown mouseover mouseout", function (e) {
      var rpc;
      if (e.type == "mousedown") {
        if (jQuery(".headAlert2").css("display") == "none") {
          gnbAlert = false;
        } else if (jQuery(".headAlert2").css("display") == "block") {
          gnbAlertAll = false;
          jQuery(".headAlert2").css({ top: "0px" });
        } //E if

        jQuery(".headAlert").hide();
        upDownPos();
      } else if (e.type == "mouseover") {
        rpc = $(this).find(">a>img").attr("src").replace("_close", "_close_over");
        $(this).find(">a>img").attr("src", rpc);
      } else if (e.type == "mouseout") {
        rpc = $(this).find(">a>img").attr("src").replace("_close_over", "_close");
        $(this).find(">a>img").attr("src", rpc);
      }
    });
  }
  if (gnbAlertAll) {
    jQuery(".headAlert2 .closeBtn01").live("mousedown mouseover mouseout", function (e) {
      if (e.type == "mousedown") {
        if (jQuery(".headAlert").css("display") == "none") {
          gnbAlert = false;
        } else if (jQuery(".headAlert").css("display") == "block") {
          gnbAlertAll = false;
        }
        jQuery(".headAlert2").hide();
        upDownPos();
      } else if (e.type == "mouseover") {
        rpc = $(this).find(">a>img").attr("src").replace("_close", "_close_over");
        $(this).find(">a>img").attr("src", rpc);
      } else if (e.type == "mouseout") {
        rpc = $(this).find(">a>img").attr("src").replace("_close_over", "_close");
        $(this).find(">a>img").attr("src", rpc);
      }
    });
  }
  /*user 정보에서 로그아웃 이미지 오버 아웃 효과*/
  jQuery("header .utill .rightArea .userSub .ractionBox .log").bind("mouseover mouseout", function (e) {
    var rpc;

    if (e.type == "mouseover") {
      rpc = $(this).find(">a>img").attr("src").replace("_logOut", "_logOut_over");
      $(this).find(">a>img").attr("src", rpc);
    } else if (e.type == "mouseout") {
      rpc = $(this).find(">a>img").attr("src").replace("_logOut_over", "_logOut");
      $(this).find(">a>img").attr("src", rpc);
    } //E if
  });

  /*// End 131224 mouseover 효과 추가*/
  /*////////////////////////////////Admin//////////////////////////////////////////////*/
  if (gnbChange == "admin") {
    jQuery(".gnbSubMenu2").show();
    jQuery(".menuBox").css({ height: admin.parentHei + "px" });
    jQuery("header nav").css({ height: admin.parentHei + "px" });
    jQuery(".menuBox ul.user>li").css({ height: admin.userNavHei + "px" });
    jQuery(".menuBox ul.admin>li").css({ height: admin.userNavHei + "px" });
    jQuery(".menuBox ul li .bBox").css({ "padding-top": admin.navPaddingTop + "px" });
    jQuery("nav .bookMark").css({ height: admin.parentHei + "px" });
    jQuery("nav .bookMark>.bBox>img").css({ top: "28px" });
  }
  /*////////////////////////////////Admin//////////////////////////////////////////////*/
  /*Normal User*/

  jQuery(window).scroll(function () {
    upDownPos();
  });

  var isState = "up";
  var _conPos = jQuery(".conPosDiv");
  function upDownPos() {
    var offset = jQuery(window).scrollTop();

    if (offset > 46) {
      isState = "up";
    } else {
      isState = "down";
    } //E if

    var userSub = jQuery(".gnbSubMenu");
    var adminSub = jQuery(".gnbSubMenu2");
    var hiddenTop = 46;
    var header = jQuery("header");
    var bookSub = jQuery(".bookBox");

    if (isState == "down") {
      //최상단일때

      if (gnbChange == "user") {
        //사용자
        jQuery(".menuBox").css({ height: gnb.userDefaultHei + 1 + "px" });
        jQuery("header nav").css({ height: gnb.userDefaultHei + 1 + "px" });
        jQuery(".menuBox ul.user>li").css({ height: gnb.userDefaultHei + "px" });
        jQuery(".menuBox ul li .bBox").css({ "padding-top": "23px" });
        jQuery("nav .bookMark").css({ height: gnb.userDefaultHei + 1 + "px" });
        jQuery("nav .bookMark>.bBox>img").css({ top: "22px" });
        if (gnbAlert) {
          //상단에 얼럿이 있을 때

          header.css({ top: gnbChangeHei.alertHei + "px" });
          userSub.css({ top: gnbChangeHei.user + gnbChangeHei.alertHei + "px" });
          _conPos.css({ height: gnbChangeHei.user + gnbChangeHei.alertHei + "px" });
          //alert((gnbChangeHei.user + gnbChangeHei.alertHei));
          bookSub.css({ top: "63px" });
          jQuery(".sub #wrap").css({ backgroundPosition: "0 49px" });
        } else {
          //상단에 얼럿이 없을 때
          header.css({ top: "0px" });
          userSub.css({ top: gnbChangeHei.user + "px" });
          _conPos.css({ height: gnbChangeHei.user + "px" });
          bookSub.css({ top: "63px" });
          //alert('사용자 얼럿 없을때 고정')
          jQuery(".sub #wrap").css({ backgroundPosition: "0 -1px" });
        } //E if

        if (gnbAlertAll) {
          header.css({ top: gnbChangeHei.alertHei * 2 + "px" });
          userSub.css({ top: gnbChangeHei.user + gnbChangeHei.alertHei + gnbChangeHei.alertHei + "px" });
          _conPos.css({ height: gnbChangeHei.user + gnbChangeHei.alertHei + gnbChangeHei.alertHei + "px" });
          //alert((gnbChangeHei.user + gnbChangeHei.alertHei)+gnbChangeHei.alertHei);
          //alert((gnbChangeHei.user + gnbChangeHei.alertHei));
          bookSub.css({ top: "63px" });
          jQuery(".sub #wrap").css({ backgroundPosition: "0 99px" });
        }
      } else if (gnbChange == "admin") {
        if (gnbAlert) {
          header.css({ top: gnbChangeHei.alertHei + "px" });
          userSub.css({ top: admin.userSubPos + gnbChangeHei.alertHei + "px" });
          _conPos.css({ height: admin.adminSubPos + gnbChangeHei.alertHei + "px" });
          bookSub.css({ top: admin.parentHei + "px" });
          //alert(admin.parentHei)
          adminSub.css({ top: admin.adminSubPos + gnbChangeHei.alertHei + "px" });
          jQuery(".sub #wrap").css({ backgroundPosition: "0 62px" });
        } else {
          header.css({ top: "0px" });
          userSub.css({ top: admin.userSubPos + "px" });
          bookSub.css({ top: admin.parentHei - 1 + "px" });
          adminSub.css({ top: admin.adminSubPos + "px" });
          _conPos.css({ height: admin.adminSubPos + "px" });
          jQuery(".sub #wrap").css({ backgroundPosition: "0 12px" });
        } //E if

        if (gnbAlertAll) {
          header.css({ top: gnbChangeHei.alertHei * 2 + "px" });
          userSub.css({ top: admin.userSubPos + gnbChangeHei.alertHei + gnbChangeHei.alertHei + "px" });
          _conPos.css({ height: admin.adminSubPos + gnbChangeHei.alertHei + gnbChangeHei.alertHei + "px" });
          bookSub.css({ top: admin.parentHei + "px" });
          adminSub.css({ top: admin.adminSubPos + gnbChangeHei.alertHei + gnbChangeHei.alertHei + "px" });
          jQuery(".sub #wrap").css({ backgroundPosition: "0 112px" });
        }
      }
    } else if (isState == "up") {
      if (gnbChange == "user") {
        jQuery(".menuBox").css({ height: gnb.userDropDown + 1 + "px" });
        jQuery("header nav").css({ height: gnb.userDropDown + 1 + "px" });
        jQuery(".menuBox ul.user>li").css({ height: gnb.userDropDown + "px" });
        jQuery(".menuBox ul li .bBox").css({ "padding-top": "10px" });
        jQuery("nav .bookMark").css({ height: gnb.userDropDown + 1 + "px" });
        jQuery("nav .bookMark>.bBox>img").css({ top: "9px" });
        if (gnbAlert) {
          header.css({ top: gnbChangeHei.alertHei - hiddenTop + "px" });

          userSub.css({ top: gnbChangeHei.user + gnbChangeHei.alertHei - hiddenTop - 21 + "px" });
          _conPos.css({ height: gnbChangeHei.user + gnbChangeHei.alertHei - hiddenTop - 21 + "px" });
          bookSub.css({ top: 42 + gnbChangeHei.alertHei + "px" });
          jQuery(".sub #wrap").css({ backgroundPosition: "0 -18px" });
        } else {
          header.css({ top: -hiddenTop + "px" });

          userSub.css({ top: gnbChangeHei.user - hiddenTop - 21 + "px" });
          _conPos.css({ height: gnbChangeHei.user - hiddenTop - 21 + "px" });
          bookSub.css({ top: gnbChangeHei.user - hiddenTop - 21 + "px" });
          jQuery(".sub #wrap").css({ backgroundPosition: "0 -68px" });
        } //E if
        if (gnbAlertAll) {
          header.css({ top: gnbChangeHei.alertHei - hiddenTop + gnbChangeHei.alertHei + "px" });

          userSub.css({
            top: gnbChangeHei.user + gnbChangeHei.alertHei - hiddenTop - 21 + gnbChangeHei.alertHei + "px",
          });
          _conPos.css({
            height: gnbChangeHei.user + gnbChangeHei.alertHei - hiddenTop - 21 + gnbChangeHei.alertHei + "px",
          });
          bookSub.css({ top: 42 + "px" });
          jQuery(".sub #wrap").css({ backgroundPosition: "0 32px" });
        }
      } else if (gnbChange == "admin") {
        if (gnbAlert) {
          header.css({ top: gnbChangeHei.alertHei - hiddenTop + "px" });
          userSub.css({ top: admin.userSubPos + gnbChangeHei.alertHei - hiddenTop + "px" });
          bookSub.css({ top: admin.parentHei + "px" });
          //alert(admin.parentHei)
          adminSub.css({ top: admin.adminSubPos + gnbChangeHei.alertHei - hiddenTop + "px" });
          _conPos.css({ height: admin.adminSubPos + gnbChangeHei.alertHei - hiddenTop + "px" });
          jQuery(".sub #wrap").css({ backgroundPosition: "0 16px" });
        } else {
          header.css({ top: -hiddenTop + "px" });
          userSub.css({ top: admin.userSubPos - hiddenTop + "px" });
          bookSub.css({ top: admin.parentHei + "px" });
          adminSub.css({ top: admin.adminSubPos - hiddenTop + "px" });
          _conPos.css({ height: admin.adminSubPos - hiddenTop + "px" });
          jQuery(".sub #wrap").css({ backgroundPosition: "0 -34px" });
        } //E if

        if (gnbAlertAll) {
          header.css({ top: gnbChangeHei.alertHei - hiddenTop + gnbChangeHei.alertHei + "px" });
          userSub.css({ top: admin.userSubPos + gnbChangeHei.alertHei - hiddenTop + gnbChangeHei.alertHei + "px" });
          bookSub.css({ top: admin.parentHei + "px" });
          //alert(admin.parentHei)
          adminSub.css({ top: admin.adminSubPos + gnbChangeHei.alertHei - hiddenTop + gnbChangeHei.alertHei + "px" });
          _conPos.css({ height: admin.adminSubPos + gnbChangeHei.alertHei - hiddenTop + gnbChangeHei.alertHei + "px" });
          jQuery(".sub #wrap").css({ backgroundPosition: "0 66px" });
        }
      }
    } //E if
    jQuery(".gnbbgBox").css({ height: jQuery(".menuBox").height() - 1 + "px" });
  }

  jQuery(window).resize(function () {
    resizeFun();
  });

  var gPW = 0;
  var menuWid = 0;

  function resizeFun() {
    var wW = jQuery(window).width();
    var wH = jQuery(window).height();

    /*width*/
    if (wW < 1600) {
      gPW = 937;
      menuWid = 1000;
      /*131224 장소 선택 가로값 변경*/
      jQuery("header .currentP").css({ width: "116px" });
      jQuery("header .currentP .currentP_sub").css({ "min-width": "116px" });
      /*//End 131224 장소 선택 가로값 변경*/
      jQuery("header .leftArea").css({ width: "284px" });
      if (wW >= 1002) {
        jQuery(".gnbbgBox").show();
        jQuery(".gnbbgBox").css({
          width: wW - gPW - jQuery(".bookMark").width() - 4 + "px",
          height: jQuery(".menuBox").height() - 1 + "px",
          left: gPW + "px",
        });
        //alert(((wW - gPW)-jQuery('.bookMark').width()));
      } else {
        jQuery(".gnbbgBox").hide();
      }
    } else if (wW >= 1600) {
      jQuery(".gnbbgBox").hide();
      gPW = 1537;
      menuWid = 1600;
      /*131224 장소 선택 가로값 변경*/
      jQuery("header .currentP").css({ width: "231px" });
      jQuery("header .currentP .currentP_sub").css({ "min-width": "231px" });
      /*//End 131224 장소 선택 가로값 변경*/
      jQuery("header .leftArea").css({ width: "399px" });
    } //E if
    jQuery("header>section.utill").css({ width: menuWid + "px" });
    jQuery(".gSubArea").css({ width: menuWid + "px" });
    jQuery(".gSub_section").css({ width: menuWid + "px" });

    gnbWidCalculator(gPW);
  }

  function gnbWidCalculator(gWid) {
    var wid = 0;
    var restWid = 0;
    var widArr = [];

    gnb.parentWid = gWid - 2 * gnb.len;
    gnb.wid = Math.floor(gnb.parentWid / gnb.len);
    jQuery(".menuBox").css({ width: gWid + "px" });
    wid = gnb.wid * (gnb.len - 1);
    restWid = gnb.parentWid - wid;

    for (i = 0; i < gnb.len; i++) {
      /*gnb 간격 수정*/
      if (i == 0) {
        widArr.push(restWid);
      } else {
        widArr.push(gnb.wid);
      } //E if
      /*//gnb 간격 수정*/
      jQuery(".gnbSubMenu .gSub_section li.one")
        .eq(i)
        .css({ width: widArr[i] + "px", height: gnb.sub.subHei - 70 + "px" }); /*서브*/
      jQuery(".menuBox ul.user>li")
        .eq(i)
        .css({ width: widArr[i] + "px" });
    } //E for

    try {
      jQuery(".gnbSubMenu .gSub_section li.bg").css({ width: "1px", height: gnb.sub.subHei - 70 + "px" });
    } catch (e) {
      alert(e);
    } //E try

    /*////////////////////////////////Admin//////////////////////////////////////////////*/
    if (gnbChange == "admin") {
      widArr = [];

      gnb.parentWid = gWid - 2 * gnb.aLen;
      gnb.wid = Math.floor(gnb.parentWid / gnb.aLen);
      jQuery(".menuBox").css({ width: gWid + "px" });

      wid = gnb.wid * (gnb.aLen - 1);
      restWid = gnb.parentWid - wid;

      for (j = 0; j < gnb.aLen; j++) {
        if (j == gnb.aLen - 1) {
          widArr.push(restWid);
        } else {
          widArr.push(gnb.wid);
        } //E if
        jQuery(".gnbSubMenu2 .gSub_section>li")
          .eq(j)
          .css({ width: widArr[j] + "px", height: gnb.sub.aSubHei - 70 + "px" }); /*서브*/
        jQuery(".menuBox>ul.admin>li")
          .eq(j)
          .css({ width: widArr[j] + "px" });
      } //E for

      try {
        jQuery(".gnbSubMenu2 .gSub_section>li.bg").css({ width: "1px", height: gnb.sub.aSubHei - 70 + "px" });
      } catch (e) {
        alert(e);
      } //E try
    } //E if
    /*////////////////////////////////Admin//////////////////////////////////////////////*/
  }

  function init() {
    jQuery(".currentP_sub").slideUp(0);
    if (jQuery(".currentP_sub>ul>li").length <= 1) {
      jQuery(".currentP .depthOne img").hide();
      jQuery(".currentP .depthOne p").css({ width: "80%" });
    }
    jQuery(".userSub").slideUp(0);
    jQuery(".gnbSubMenu").slideUp(0);
    gnb.sub.aSubHei = jQuery(".gnbSubMenu2>.gSubArea").height();

    jQuery(".gnbSubMenu2").slideUp(0);
    jQuery(".bookMark .bookBox").slideUp(0);
    jQuery(".gSubArea ul.gSub_section>li>ul.two>li").css({ cursor: "pointer" });

    upDownPos();
    resizeFun();
  }

  $.fn.extend({
    cPEvent: function () {
      var _this = this;
      var _sub = _this.find(".currentP_sub");
      var op = _sub.find("ul li");
      _this.bind("mousedown", function () {
        _sub.slideToggle(300);
        if (jQuery(this).hasClass("on")) {
          jQuery(this).removeClass("on");
          jQuery(this).find(".depthOne img").attr("src", cP.outImg);
        } else {
          jQuery(this).addClass("on");
          jQuery(this).find(".depthOne img").attr("src", cP.onImg);
        } //E if
        return false;
      }); //E fun
      op.bind("mousedown", function () {
        op.each(function () {
          jQuery(this).removeClass("on");
        });
        jQuery(this).addClass("on");
        _this.find(".depthOne img").attr("src", cP.outImg);
        var txt = jQuery(this).find("a p").text();
        _this.find(".depthOne p").text(txt);
        close();
        return false;
      }); //E

      jQuery("html").live("mousedown", function () {
        close();
      });
      function close() {
        _this.each(function () {
          jQuery(this).removeClass("on");
        });
        _sub.slideUp(200);
      } //E fun
    },

    userEvent: function () {
      var _this = this;
      var _sub = _this.find(".userSub");

      _this.bind("mouseover mouseleave", function (e) {
        if (e.type == "mouseover") {
          _this.find(".usNm .uName").bind("mouseenter", function () {
            _sub.slideDown(300);
          });
        } else if (e.type == "mouseleave") {
          _sub.slideUp(200);
        } //E if
      });
    },

    gnbSubEvent: function () {
      var _this = this;

      var _sub = jQuery(".gnbSubMenu");
      var _subLi = jQuery(".gnbSubMenu .gSubArea ul.gSub_section>li");
      var _subTwo = jQuery(".gnbSubMenu .gSubArea ul.gSub_section>li>ul.two>li");
      var _thee = jQuery(".gnbSubMenu .gSubArea ul.gSub_section>li>ul.two>li>.three>li");
      var oBg = jQuery(".gnbSubMenu .overLiner");
      var tmpNum = -1;

      _this.bind("mousedown mouseleave", function (e) {
        var id = jQuery(this).index(".menuBox ul.user>li");
        var isState = false;
        if (e.type == "mousedown") {
          /*강제 종료*/
          bookmarkSubClose();
          if (gnbChange == "admin") {
            adminSubClose();
          }

          _sub.slideDown(200, function () {
            gnb.uSubExtend = true;
          });
          mOver(id);
          if (id == tmpNum && jQuery(this).hasClass("on") && gnb.uSubExtend) {
            closeSub();
          }
          tmpNum = id;
        } else if (e.type == "mouseleave") {
          jQuery(".menuBox>.user").bind("mouseleave", function (e) {
            _sub.bind("mouseenter mouseleave", function (e) {
              if (e.type == "mouseenter") {
                _sub.stop().slideDown(0);
              } else if (e.type == "mouseleave") {
                closeSub();
              } //E if
            });

            if (gnb.uSubExtend) {
              closeSub();
            }
          });
        }
      });

      _subTwo.bind("mouseenter", function (e) {
        var id = jQuery(this).parent().parent().index(".gSubArea ul.gSub_section>li");
        var uId = jQuery(this).index(".gnbSubMenu .gSubArea ul.gSub_section>li:eq(" + id + ") ul.two>li");

        if (e.type == "mouseenter") {
          mOver(id, uId);
        }
        return false;
      });

      _thee.bind("mouseenter mouseleave", function (e) {
        if (e.type == "mouseenter") {
          jQuery(this).addClass("on");
        } else if (e.type == "mouseleave") {
          jQuery(this).removeClass("on");
        } //E if
      });

      function mOver(one, two, three) {
        var rpc = null;

        for (i = 0; i < gnb.len; i++) {
          if (i == one) {
            if (!_this.eq(i).hasClass("on")) {
              _this.eq(i).addClass("on");
              try {
                rpc = _this.eq(i).find("a .bBox .icon img").attr("src");
                rpc = rpc.replace("_out", "_over");
                _this.eq(i).find("a .bBox .icon img").attr("src", rpc);
              } catch (e) {}

              var tgt = _this.eq(i);
              TweenMax.to(oBg, 0.3, { width: tgt.width() + 2, left: tgt.position().left });
            } //E if
            for (j = 0; j < _subLi.eq(i).find("ul.two>li").length; j++) {
              if (j == two) {
                if (!_subLi.eq(i).find("ul.two>li").eq(j).hasClass("on")) {
                  _subLi.eq(i).find("ul.two>li").eq(j).addClass("on");
                }
              } else {
                if (_subLi.eq(i).find("ul.two>li").eq(j).hasClass("on")) {
                  _subLi.eq(i).find("ul.two>li").eq(j).removeClass("on");
                }
              } //E if
            } //E for
          } else {
            if (_this.eq(i).hasClass("on")) {
              try {
                _this.eq(i).removeClass("on");
                rpc = _this.eq(i).find("a .bBox .icon img").attr("src");
                rpc = rpc.replace("_over", "_out");
              } catch (e) {}

              _this.eq(i).find("a .bBox .icon img").attr("src", rpc);
            } //E if
            for (j = 0; j < _subLi.eq(i).find("ul.two>li").length; j++) {
              if (_subLi.eq(i).find("ul.two>li").eq(j).hasClass("on")) {
                _subLi.eq(i).find("ul.two>li").eq(j).removeClass("on");
              }
            } //E for
          } //E if
        } //E for
      } //E fun

      function closeSub() {
        _sub.slideUp(100, function () {
          gnb.uSubExtend = false;
          for (i = 0; i < gnb.len; i++) {
            if (_this.eq(i).hasClass("on")) {
              _this.eq(i).removeClass("on");
              try {
                rpc = _this.eq(i).find("a .bBox .icon img").attr("src");
                rpc = rpc.replace("_over", "_out");
                _this.eq(i).find("a .bBox .icon img").attr("src", rpc);
              } catch (e) {}
            } //E if
            for (j = 0; j < _subLi.eq(i).find("ul.two>li").length; j++) {
              if (_subLi.eq(i).find("ul.two>li").eq(j).hasClass("on")) {
                _subLi.eq(i).find("ul.two>li").eq(j).removeClass("on");
              }
            } //E for
          } //E for
        });
      } //E fun
    },

    bookMarkEvent: function () {
      var _this = this;
      var _sub = jQuery(".bookMark .bookBox");

      var forLi = jQuery(".bookBox .forder>.fBox>ul>li");
      var pagLi = jQuery(".bookBox .page>.pBox>ul>li");
      var forLen = forLi.length;

      var creaBtn = jQuery(".bookBox .btn_creat");
      var modiBtn = jQuery(".bookBox .btn_modify");
      var deleBtn = jQuery(".bookBox .btn_dele");
      var closeBtn = jQuery(".bookBox .btn_close");

      var chkid = -1;
      var modiState = false;
      var pDeleteState = false;

      _this.bind("mousedown mouseenter", function (e) {
        /*강제 종료*/

        if (e.type == "mouseenter") {
          gnbSubClose();
          if (gnbChange == "admin") {
            adminSubClose();
          }
        } else {
          jQuery(this).parent().addClass("on");
          var rpc = jQuery(this).find("img").attr("src");
          rpc = rpc.replace("_default", "_select");
          jQuery(this).find("img").attr("src", rpc);
          _sub.slideDown(300);
        }

        return false;
      });

      forLi.live("mousedown", function (e) {
        var id = jQuery(this).index(".forder ul li");
        modiState = true;
        pDeleteState = false;
        chkid = id;
        forderUnBind();
        selecEvent();

        return false;
      });

      modiBtn.bind("mousedown mouseover mouseout", function (e) {
        if (e.type == "mousedown") {
          if (modiState) {
            forLi.eq(chkid).find("input").removeAttr("readonly");
            forLi.eq(chkid).find("input").focus();
            forLi.eq(chkid).find("input").select();
            pDeleteState = true;
          }
        } else if (e.type == "mouseover") {
          rpc = $(this).find("img").attr("src");
          rpc = rpc.replace(".gif", "_over.gif");
          $(this).find("img").attr("src", rpc);
        } else if (e.type == "mouseout") {
          rpc = $(this).find("img").attr("src");
          rpc = rpc.replace("_over.gif", ".gif");
          $(this).find("img").attr("src", rpc);
        } //E if

        return false;
      });

      pagLi.live("mouseover mouseout", function (e) {
        if (modiState) {
          if (e.type == "mouseover") {
            $(this).addClass("on");
            $(this).find(".delete").show(); //pDeleteState
          } else if (e.type == "mouseout") {
            $(this).removeClass("on");
            $(this).find(".delete").hide();
          }
        }
        return false;
      }); //E if

      deleBtn.bind("mousedown mouseover mouseout", function (e) {
        if (e.type == "mousedown") {
          if (modiState) {
            forLi.eq(chkid).remove();
            forLi = jQuery(".bookBox .forder>.fBox>ul>li");
            modiState = false;
          }
        } else if (e.type == "mouseover") {
          rpc = $(this).find(">a>img").attr("src");
          rpc = rpc.replace(".gif", "_over.gif");
          $(this).find(">a>img").attr("src", rpc);
        } else if (e.type == "mouseout") {
          rpc = $(this).find("img").attr("src");
          rpc = rpc.replace("_over.gif", ".gif");
          $(this).find(">a>img").attr("src", rpc);
        } //E if

        return false;
      });

      pagLi.find(".delete").bind("mousedown", function () {
        jQuery(this).parent().remove();
        return false;
      });

      closeBtn.bind("click  mouseover mouseout", function (e) {
        if (e.type == "click") {
          _sub.slideUp(200, function () {
            _this.parent().removeClass("on");
            var rpc = _this.find("img").attr("src");
            rpc = rpc.replace("_select", "_default");
            _this.find("img").attr("src", rpc);
            forderUnBind();
          });
        } else if (e.type == "mouseover") {
          rpc = $(this).find(">a>img").attr("src");
          rpc = rpc.replace(".gif", "_over.gif");
          $(this).find("img").attr("src", rpc);
        } else if (e.type == "mouseout") {
          rpc = $(this).find(">a>img").attr("src");
          rpc = rpc.replace("_over.gif", ".gif");
          $(this).find("img").attr("src", rpc);
        } //E if

        return false;
      });

      creaBtn.bind("mousedown mouseover mouseout", function (e) {
        if (e.type == "mousedown") {
          var obj = jQuery(
            "<li class='on'><img src='/images/common/icon_forder_over.png' alt=''/><input value='새 폴더' /></li>",
          );
          forLi = jQuery(".bookBox .forder>.fBox>ul>li");
          var len = forLi.length;
          chkid = len - 1;
          obj.insertAfter(jQuery(".bookBox .forder ul li").eq(chkid));

          chkid = len;

          forLi = jQuery(".bookBox .forder>.fBox>ul>li");
          pagLi = jQuery(".bookBox .page>.pBox>ul>li");
          forderUnBind();
          selecEvent();
          modiState = true;
          if (modiState) {
            forLi.eq(chkid).find("input").removeAttr("readonly");
            forLi.eq(chkid).find("input").focus();
            forLi.eq(chkid).find("input").select();
            pDeleteState = true;
          }
        } else if (e.type == "mouseover") {
          rpc = $(this).find(">a>img").attr("src");

          rpc = rpc.replace(".gif", "_over.gif");
          $(this).find("img").attr("src", rpc);
        } else if (e.type == "mouseout") {
          rpc = $(this).find(">a>img").attr("src");
          rpc = rpc.replace("_over.gif", ".gif");
          $(this).find("img").attr("src", rpc);
        } //E if

        return false;
      });

      function forderUnBind() {
        forLi.each(function () {
          if (jQuery(this).hasClass("on")) {
            jQuery(this).removeClass("on");

            var rpc = jQuery(this).find("img").attr("src");
            rpc = rpc.replace("_over", "_out");
            jQuery(this).find("img").attr("src", rpc);
            jQuery(this).find("img").css({ left: "-2px" });
            jQuery(this).find("input").attr("readonly", true);
          }
        }); //E
      }

      function selecEvent() {
        forLi.eq(chkid).addClass("on");

        var rpc = forLi.eq(chkid).find("img").attr("src");
        rpc = rpc.replace("_out", "_over");
        forLi.eq(chkid).find("img").attr("src", rpc);
        forLi.eq(chkid).find("img").css({ left: "-4px" }); /*2014-01-07 북마크 아이콘짤림 수정*/
      }
    },

    adminSubEvent: function () {
      var _this = this;

      var _sub = jQuery(".gnbSubMenu2");
      var _subLi = jQuery(".gnbSubMenu2 .gSubArea ul.gSub_section>li");
      var _subTwo = jQuery(".gnbSubMenu2 .gSubArea ul.gSub_section>li>ul.two>li");
      var _thee = jQuery(".gnbSubMenu2 .gSubArea ul.gSub_section>li>ul.two>li>.three>li");
      var oBg = jQuery(".gnbSubMenu2 .overLiner");
      var tmpNum = -1;
      gnb.aSubExtend = false;

      _this.bind("mousedown mouseleave", function (e) {
        var id = jQuery(this).index(".menuBox .admin>li");
        var isState = false;

        if (e.type == "mousedown") {
          _sub.slideDown(200, function () {
            gnb.aSubExtend = true;
          });
          /*강제 종료*/
          bookmarkSubClose();
          gnbSubClose();

          mOver(id);

          if (id == tmpNum && jQuery(this).hasClass("on") && gnb.aSubExtend) {
            closeSub();
          }
          tmpNum = id;
        } else if (e.type == "mouseleave") {
          jQuery(".menuBox").bind("mouseleave", function (e) {
            _sub.bind("mouseenter mouseleave", function (e) {
              if (e.type == "mouseenter") {
                _sub.stop().slideDown(0);
              } else if (e.type == "mouseleave") {
                closeSub();
              } //E if
            });

            if (gnb.aSubExtend) {
              closeSub();
            }
          });
        }
        return false;
      });

      jQuery(".menuBox>.user>li").bind("mouseover", function (e) {
        if (gnb.aSubExtend) {
          closeSub();
        }
      });

      jQuery(".gnbbgBox").bind("mouseover", function (e) {
        if (gnb.aSubExtend) {
          closeSub();
        }
      });

      //jQuery('.menuBox').bind('mouseleave' , function(e){alert('leave2')});
      _subTwo.bind("mouseenter", function (e) {
        var id = jQuery(this).parent().parent().index(".gnbSubMenu2 ul.gSub_section>li");
        var uId = jQuery(this).index(".gnbSubMenu2 ul.gSub_section>li:eq(" + id + ") ul.two>li");

        if (e.type == "mouseenter") {
          mOver(id, uId);
        }
        return false;
      });

      _thee.bind("mouseenter mouseleave", function (e) {
        if (e.type == "mouseenter") {
          jQuery(this).addClass("on");
        } else if (e.type == "mouseleave") {
          jQuery(this).removeClass("on");
        } //E if
      });

      function mOver(one, two, three) {
        var rpc = null;

        for (i = 0; i < gnb.aLen; i++) {
          if (i == one) {
            if (!_this.eq(i).hasClass("on")) {
              _this.eq(i).addClass("on");
              try {
                rpc = _this.eq(i).find("a .bBox .icon img").attr("src");
                rpc = rpc.replace("_out", "_over");
                _this.eq(i).find("a .bBox .icon img").attr("src", rpc);
              } catch (e) {}

              var tgt = _this.eq(i);
              TweenMax.to(oBg, 0.3, { width: tgt.width() + 2, left: tgt.position().left });
            } //E if
            for (j = 0; j < _subLi.eq(i).find("ul.two>li").length; j++) {
              if (j == two) {
                if (!_subLi.eq(i).find("ul.two>li").eq(j).hasClass("on")) {
                  _subLi.eq(i).find("ul.two>li").eq(j).addClass("on");
                }
              } else {
                if (_subLi.eq(i).find("ul.two>li").eq(j).hasClass("on")) {
                  _subLi.eq(i).find("ul.two>li").eq(j).removeClass("on");
                }
              } //E if
            } //E for
          } else {
            if (_this.eq(i).hasClass("on")) {
              _this.eq(i).removeClass("on");
              try {
                rpc = _this.eq(i).find("a .bBox .icon img").attr("src");
                rpc = rpc.replace("_over", "_out");
                _this.eq(i).find("a .bBox .icon img").attr("src", rpc);
              } catch (e) {}
            } //E if
            for (j = 0; j < _subLi.eq(i).find("ul.two>li").length; j++) {
              if (_subLi.eq(i).find("ul.two>li").eq(j).hasClass("on")) {
                _subLi.eq(i).find("ul.two>li").eq(j).removeClass("on");
              }
            } //E for
          } //E if
        } //E for
      } //E fun

      function closeSub() {
        _sub.slideUp(100, function () {
          gnb.aSubExtend = false;
        });
        for (i = 0; i < gnb.aLen; i++) {
          if (_this.eq(i).hasClass("on")) {
            _this.eq(i).removeClass("on");
            try {
              rpc = _this.eq(i).find("a .bBox .icon img").attr("src");
              rpc = rpc.replace("_over", "_out");
              _this.eq(i).find("a .bBox .icon img").attr("src", rpc);
            } catch (e) {}
          } //E if
          for (j = 0; j < _subLi.eq(i).find("ul.two>li").length; j++) {
            if (_subLi.eq(i).find("ul.two>li").eq(j).hasClass("on")) {
              _subLi.eq(i).find("ul.two>li").eq(j).removeClass("on");
            }
          } //E for
        } //E for
      } //E fun
    },
  }); //E extend

  if (jQuery(".currentP_sub>ul>li").length > 1) {
    jQuery(".currentP").cPEvent(); //current Position in logo right
  }

  jQuery(".user").userEvent(); //memberInfo

  jQuery(".menuBox>.user>li").gnbSubEvent(); //gnb

  /*////////////////////////////////Admin//////////////////////////////////////////////*/
  if (gnbChange == "admin") {
    jQuery(".menuBox>.admin>li").adminSubEvent(); //admin gnb
  }
  /*////////////////////////////////Admin//////////////////////////////////////////////*/

  jQuery(".bookMark>.bBox").bookMarkEvent(); //bookmark` in gnb right

  /*드롭 메뉴 강제 종료*/
  function gnbSubClose() {
    var _sub = jQuery(".gnbSubMenu");

    _sub.slideUp(100, function () {
      gnb.uSubExtend = false;
      for (i = 0; i < gnb.len; i++) {
        var _this = jQuery(".menuBox .user>li");
        var _subLi = jQuery(".gnbSubMenu .gSubArea ul.gSub_section>li");

        if (_this.eq(i).hasClass("on")) {
          _this.eq(i).removeClass("on");

          try {
            rpc = _this.eq(i).find("a .bBox .icon img").attr("src");
            rpc = rpc.replace("_over", "_out");
            _this.eq(i).find("a .bBox .icon img").attr("src", rpc);
          } catch (e) {}
        } //E if
        for (j = 0; j < _subLi.eq(i).find("ul.two>li").length; j++) {
          if (_subLi.eq(i).find("ul.two>li").eq(j).hasClass("on")) {
            _subLi.eq(i).find("ul.two>li").eq(j).removeClass("on");
          }
        } //E for
      } //E for
    });
  }

  function adminSubClose() {
    var _sub = jQuery(".gnbSubMenu2");

    _sub.slideUp(100, function () {
      var _this = jQuery(".menuBox .admin>li");
      var _subLi = jQuery(".gnbSubMenu2 .gSubArea ul.gSub_section>li");
      gnb.aSubExtend = false;
      for (i = 0; i < gnb.aLen; i++) {
        if (_this.eq(i).hasClass("on")) {
          _this.eq(i).removeClass("on");
          try {
            rpc = _this.eq(i).find("a .bBox .icon img").attr("src");
            rpc = rpc.replace("_over", "_out");
            _this.eq(i).find("a .bBox .icon img").attr("src", rpc);
          } catch (e) {}
        } //E if
        for (j = 0; j < _subLi.eq(i).find("ul.two>li").length; j++) {
          if (_subLi.eq(i).find("ul.two>li").eq(j).hasClass("on")) {
            _subLi.eq(i).find("ul.two>li").eq(j).removeClass("on");
          }
        } //E for
      } //E for
    });
  }

  function bookmarkSubClose() {
    var _sub = jQuery(".bookMark>.bookBox");
    _sub.slideUp(100, function () {
      var _this = jQuery(".bookMark>.bBox");
      _this.parent().removeClass("on");
      var rpc = _this.find("img").attr("src");
      rpc = rpc.replace("_select", "_default");
      _this.find("img").attr("src", rpc);
      jQuery(".bookBox .forder>.fBox>ul>li").each(function () {
        if (jQuery(this).hasClass("on")) {
          jQuery(this).removeClass("on");

          var rpc1 = jQuery(this).find("img").attr("src");
          rpc1 = rpc1.replace("_over", "_out");
          jQuery(this).find("img").attr("src", rpc1);
          jQuery(this).find("img").css({ left: "-2px" });
          jQuery(this).find("input").attr("readonly", true);
        }
      }); //E
    });
  }
  /*//드롭 메뉴 강제 종료*/

  init();
}); //E doc
