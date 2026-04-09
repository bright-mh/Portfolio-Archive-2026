// 레이아웃별 세팅
function layoutInit() {
  var bodyType;
  if ($(window).width() >= 1024) {
    // pc
    bodyType = "typePc";
    //console.log('pc');
  } else if ($(window).width() <= 1023 && $(window).width() >= 640) {
    // tablet
    bodyType = "typeTablet";
    //console.log('tablet');
  } else if ($(window).width() < 639) {
    // mobile
    bodyType = "typeMobile";
    //console.log('m');
  }
  $("body").attr("id", bodyType);
}

// alert
function mobilealert() {
  if ($(window).width() < 639) {
    // mobile
    if ($("#typeMobile div.article").hasClass("alert")) {
      $("div.gray").css("display", "block");
      $("body, html").animate({ scrollTop: 0 });
    }
  } else if ($(window).width() >= 640) {
    $("div.gray").css("display", "");
    $("body, html").dequeue();
  }
}

// 모바일메뉴 초기셋팅
function mobileMenuInit() {
  if ($(window).width() <= 640) {
    // 넓이계산

    //console.log('mobile');
    var mobileW = $(window).width() - 50;

    if ($("#mobileMenu").hasClass("open")) {
      //console.log('mobile menu open');
      $("#mobileMenu").css("width", mobileW);
      $("body").css("left", $("#mobileMenu").width());
    } else {
      //console.log('mobile menu close');
      $("#mobileMenu").css({ width: mobileW, left: -mobileW });
    }
  } else {
    //console.log('pc');

    $("html").removeAttr("style");
    $("body").removeAttr("style");
    $("#layoutWrap").removeAttr("style");
    $("#mobileMenu").removeAttr("style").removeClass("open");
  }
}

// 모바일메뉴 클릭시
// 그냥 mobileMenuClick() 이것만 호출하면 안열려있으면 열리고 ,  열려있으면 열리게 해놨어요!
function mobileMenuClick() {
  if (!$("#mobileMenu").hasClass("open")) {
    $("html").css({ overflow: "hidden", width: "100%", height: "100%" });
    $("body").css({ position: "absolute", width: $(window).width(), height: "100%", overflow: "hidden" });
    $("#layoutWrap").css({ width: $(window).width() });
    $("body").animate({ left: $("#mobileMenu").width() }, 500, function () {
      $("body").css("width", "50px");
    });
    $("#mobileMenu").addClass("open").show().animate({ left: "0" }, 500);
  } else {
    $("body")
      .css("width", $(window).width())
      .animate({ left: 0 }, 500, function () {
        $("html").removeAttr("style");
        $("body").removeAttr("style");
      });
    $("#mobileMenu").animate({ left: -($(window).width() - 50) }, 500, function () {
      $("#mobileMenu").removeClass("open").hide();
    });
  }
}

//모바일 gnb 효과
function m_gnb() {
  $("#mobileMenu .gnb > li").each(function (num) {
    $(this).click(function () {
      if ($("#mobileMenu .gnb > li").eq(num).hasClass("on")) {
        $("#mobileMenu .gnb > li").removeClass("on");
      } else {
        $("#mobileMenu .gnb > li").removeClass("on");
        $("#mobileMenu .gnb > li").eq(num).addClass("on");
      }
    });
  });
}

// PC, 타블릿 gnb 효과
function gnb() {
  if ($(window).width() >= 1024) {
    // pc 넓이계산
    $("div.header .gnb > li").each(function (num) {
      //			$(this).mouseenter(function(){ /* 2014.08.06 탭운용 수정 */
      $(this).bind("mouseenter focusin", function () {
        $("div.header .gnb > li").removeClass("on");
        $("div.header .gnb > li").eq(num).addClass("on");
        $("div.header .gnb > li .gnb_sub").removeClass("on");
        $("div.header .gnb > li .gnb_sub").eq(num).addClass("on");
      });

      //			$(this).mouseleave(function(){ /* 2014.08.06 탭운용 수정 */
      $(this).bind("mouseleave", function () {
        $("div.header .gnb .gnb_sub.on").removeClass("on");
        $("div.header .gnb > li").removeClass("on");
      });
      $("div.header .gnb > li:last-child > div.gnb_sub > ul > li:last-child").bind("focusout", function () {
        $("div.header .gnb .gnb_sub.on").removeClass("on");
        $("div.header .gnb > li").removeClass("on");
      });
    });
    /* 2014.08.06 탭운용 수정 */
    $("#menu h1 a").bind("focusin", function () {
      $("div.header .gnb .gnb_sub.on").removeClass("on");
      $("div.header .gnb > li").removeClass("on");
    });
  } else if ($(window).width() <= 1023 && $(window).width() >= 640) {
    // tablet
    $("#typeTablet div.header .gnb > li").each(function (num) {
      $(this).click(function () {
        $("#typeTablet div.header .gnb > li").removeClass("on");
        $("#typeTablet div.header .gnb > li").eq(num).addClass("on");
        $("#typeTablet div.header .gnb > li .gnb_sub").removeClass("on");
        $("#typeTablet div.header .gnb > li .gnb_sub").eq(num).addClass("on");
      });
    });
  }

  $("div.article").click(function () {
    $("div.header").css({ height: "", "border-bottom": "" });
    $("div.header .gnb .gnb_sub.on").removeClass("on");
    $("div.header .gnb > li").removeClass("on");
  });
}

// 사회공헌 활동분야
function contributeM() {
  var serve = $(".serve").length;

  $("div.serve_paging ul").empty();
  //console.log(serve)
  for (var i = 0; i < serve; i++) {
    $("div.serve_paging ul").append($("<li><a href='#viewServe'>" + (i + 1) + "</a></li>"));
  }
  $(".serveBox .serve").removeClass("on").eq(0).addClass("on");
  $("div.serve_paging ul li").eq(0).addClass("on");
  //console.log(paging.length)

  if ($(window).width() < 640) {
    $("#typeMobile .serve_paging li").each(function (num) {
      $(this).click(function () {
        $("#typeMobile .serve_paging li").removeClass("on");
        $("#typeMobile .serve_paging li").eq(num).addClass("on");
        //$("#typeMobile .serve").css("visibility" , "hidden");
        //$("#typeMobile .serve").eq(num).css({"visibility" : "visible"});
        $("#typeMobile .serve").removeClass("on");
        $("#typeMobile .serve").eq(num).addClass("on");
      });
    });
  }
  if ($(window).width() >= 640) {
    $(".serveBox .serve").css("visibility", "");
  }
}

// 로비콘서트
function robbyList() {
  $(".concert .list li").each(function (num) {
    $(this).click(function () {
      var file = $(".concert .list li").eq(num).find("img.thumb").attr("src");
      var filename = file.split(".", 1);
      $(".concert .print .left img").attr("src", filename + "_b.jpg");
      $(".concert .print .left img").attr("alt", $(".concert .list li").eq(num).find("img.thumb").attr("alt"));
      $(".concert .print h2").text($(".concert .list li").eq(num).find("p.tx").text());

      $(".concert .list li").removeClass("on");
      $(".concert .list li").eq(num).addClass("on");
      $(".concert .list li").eq(num).find(".cover img").attr("src", "/front/images/06prcenter/cover_on.png");
      $(".concert .list li").eq(num).siblings().find(".cover img").attr("src", "/front/images/06prcenter/cover.png");
    });
  });
}

// 메인 배너
function mainBanner() {
  // store the slider in a local variable
  var $window = $(window),
    flexslider;

  $window.load(function () {
    $(".main_slides").flexslider({
      pausePlay: true,
      controlNav: true,
      directionNav: true,
      slideshowSpeed: 4000,
      animationLoop: true,
      itemWidth: 210,
      itemMargin: 5,
      minItems: 1, // use function to pull in initial value
      maxItems: 1, // use function to pull in initial value
    });
  });
}

// 말줄임표 2,3 줄일때
function multiEllipsis() {
  $(".ellip_2line, .ellip_3line, .ellip_4line").each(function () {
    $(this).dotdotdot({
      ellipsis: "... ",
    });
  });
}

// 디자인 셀렉트박스
function selectBox() {
  $(".box_select").selectbox();
}

// Top 버튼
function topscroll() {
  $(".bt_top").click(function () {
    $("body, html").animate({ scrollTop: 0 }, 300);
  });
}

// 계열사 소개
function mobiletab5() {
  var li_on = $(".tab5 li.on").text();
  var tab5ul = $(".tab5 ul");

  if ($(window).width() < 639) {
    if ($(".tab5").find(".select").length == 0) {
      $(".tab5").prepend('<p class="select"><a href="#none"></a></p>');
    }

    $(".tab5 .select").find("a").text(li_on);
    tab5ul.hide();

    $(".tab5 .select").off("click");
    $(".tab5 .select").on("click", function () {
      if ($(".tab5 ul").css("display") == "none") {
        $(".tab5 ul").show();
      } else {
        $(".tab5 ul").hide();
      }
    });
  } else {
    $(".tab5 .select").remove();
    tab5ul.show();
  }
}

// 연혁 슬라이드
function history_slide() {
  var owl = $("#history_slide");

  owl.owlCarousel({
    itemsCustom: [
      [0, 1],
      [639, 2],
      [1024, 3],
    ],
    navigation: true,
    pagination: false,
    rewindNav: false,
  });
}
// History
function CompanyHistory() {
  var clickedCount = 0;
  if ($(window).width() < 639) {
    var listLi;
    if (clickedCount == 0) {
      listLi = $("#typeMobile .history .list_history").css("height", "auto").height();
      //console.log('m' + listLi);
      var list = $("#typeMobile .history .list_history");
      list.height(300);
      $("#typeMobile .history .btn_history").show();
    }

    $("#typeMobile .history .btn_history").off("click");
    $("#typeMobile .history .btn_history").on("click", function () {
      //console.log(listLi);
      //console.log(list.height());

      var listhh = $("#typeMobile .history .list_history").height();

      $("#typeMobile .history .list_history").css("height", listhh + 300);

      if ($("#typeMobile .history .list_history").height() > listLi) {
        $("#typeMobile .history .list_history").css("height", "auto");
        $(this).hide();
      }
      clickedCount++;
    });
  } else if ($(window).width() >= 640) {
    //console.log(0);
    clickedCount = 0;
    $(".history .btn_history").hide();
    $(".history .list_history").css("height", "auto");
  }
}

// 디바이스별 이미지 변경
var imgChange_falg = true;
function imgChange() {
  $(".ceo img, .change img").each(function () {
    var src = $(this).attr("src");
    if ($(window).width() <= 639) {
      if (imgChange_falg) {
        var scrStr = src.replace(".jpg", "_m.jpg");
        $(this).attr("src", scrStr);

        imgChange_falg = false;
        //console.log('m');
      }
    } else {
      if (!imgChange_falg) {
        var scrStr = src.replace("_m.jpg", ".jpg");
        $(this).attr("src", scrStr);

        imgChange_falg = true;
        //console.log('pc');
      }
    }
  });

  $(".vision img, .recruit img").each(function () {
    var src = $(this).attr("src");
    if ($(window).width() <= 1023) {
      if (imgChange_falg) {
        var scrStr = src.replace(".gif", "_m.gif");
        $(this).attr("src", scrStr);

        imgChange_falg = false;
        //console.log('m');
      }
    } else {
      if (!imgChange_falg) {
        var scrStr = src.replace("_m.gif", ".gif");
        $(this).attr("src", scrStr);

        imgChange_falg = true;
        //console.log('pc');
      }
    }
  });
}

// 보도자료
function newsList() {
  $(".newsDetail .news > a").off("click");
  $(".newsDetail .news > a").on("click", function () {
    var title = $(this).parent(".news");
    if (title.hasClass("on")) {
      $(".newsDetail .news").removeClass("on");
    } else {
      title.addClass("on");
      $(".newsDetail .news").not(title).removeClass("on");
    }
  });
}

//자주묻는 질문
function tblFAQ() {
  $(".tbl_faq .question").off("click");
  $(".tbl_faq .question").on("click", function () {
    var opentr = $(this).parent("td");

    if (opentr.hasClass("on")) {
      $(".tbl_faq td").removeClass("on");
    } else {
      opentr.addClass("on");
      $(".tbl_faq td").not(opentr).removeClass("on");
    }
  });
}

// 건축사업 주요실적 슬라이드
function build_slide() {
  var owl = $("#build_slide");

  owl.owlCarousel({
    navigation: true,
    pagination: false,
    rewindNav: false,
    singleItem: true,
  });
}
// header 언어선택 셀렉트
function headLang() {
  $("#typeMobile .header .sbHolder a").each(function () {
    if ($(this).text() == "KOREA") {
      $(this).text("KO");
    } else if ($(this).text() == "ENGLISH") {
      $(this).text("EN");
    }
  });
  $("#typeTablet .header .sbHolder a").each(function () {
    if ($(this).text() == "KO") {
      $(this).text("KOREA");
    } else if ($(this).text() == "EN") {
      $(this).text("ENGLISH");
    }
  });
  $("#typePc .header .sbHolder a").each(function () {
    if ($(this).text() == "KO") {
      $(this).text("KOREA");
    } else if ($(this).text() == "EN") {
      $(this).text("ENGLISH");
    }
  });
}
/* 라디오버튼 */
jQuery.fn.customInput = function () {
  $(this).each(function (i) {
    if ($(this).is("[type=checkbox],[type=radio]")) {
      var input = $(this);
      var label = $("label[for=" + input.attr("id") + "]");
      var inputType = input.is("[type=checkbox]") ? "checkbox" : "radio";
      var allInputs = $("input[name=" + input.attr("name") + "]");
      input
        .bind("updateState", function () {
          if (input.is(":checked")) {
            if (input.is(":radio")) {
              allInputs.each(function () {
                $("label[for=" + $(this).attr("id") + "]").removeClass("checked");
              });
            }
            label.addClass("checked");
          } else {
            label.removeClass("checked checkedHover checkedFocus");
          }
        })
        .trigger("updateState")
        .click(function () {
          $(this).trigger("updateState");
        })
        .focus(function () {
          label.addClass("focus");
          if (inputType == "checkbox" && input.is(":checked")) {
            $(this).addClass("checkedFocus");
          }
        })
        .blur(function () {
          label.removeClass("focus checkedFocus");
        });
    }
  });
};
function radioCheckNew() {
  $(".radio_new input").customInput();
}

/* 2014-06-24_기술연구소 지적재산권_신기술 추가*/
function techbuild() {
  $(".tbl_toggle .array02 a").click(function () {
    if ($(this).parent().parent().hasClass("on")) {
      $(".tbl_toggle tr").removeClass("on");
      $(".tbl_toggle tr.details").addClass("blind");
    } else if (!$(this).parent().parent().hasClass("on")) {
      $(".tbl_toggle tr").removeClass("on");
      $(".tbl_toggle tr.details").addClass("blind");
      $(this).parent().parent().addClass("on");
      $(this).parent().parent().next().removeClass("blind");
    }
  });
}

/* 2014-07-22 footer family site toggle 기능 구현 추가*/
function familysite() {
  var isOver = false;

  $(".family_site ul").hide();
  $(".family_site p a").bind({
    mouseover: function () {
      isOver = true;
    },
    mouseout: function () {
      isOver = false;
    },
  });
  //	$('.family_site p a').click(function() {
  //		$('.family_site ul').toggle();
  //	});

  /* 2014-08-06 탭운용 수정 */
  $(".family_site p a").bind("click focus", function () {
    $(".family_site ul").css("display", "block");
  });
  $(".family_site ul li:last-child a").blur(function () {
    $(".family_site ul").css("display", "none");
  });
  /* //2014-08-06 탭운용 수정 */

  $(".family_site ul li a").click(function () {
    $(".family_site ul").hide();
  });

  if ($(".family_site ul")) {
    $("html").bind("click", function () {
      if ($(".family_site ul").css("display") == "block" && isOver == false) {
        $(".family_site ul").hide();
      }
    });
  }
}

// document ready
$(function () {
  layoutInit(); // 레이아웃별 세팅
  mainBanner();
  multiEllipsis();
  selectBox();
  mobileMenuInit();
  gnb();
  m_gnb();
  robbyList();
  topscroll();
  mobiletab5();
  contributeM();
  imgChange();
  newsList();
  mobilealert();
  tblFAQ();
  radioCheckNew();
  techbuild();
  familysite();
});

// window load
$(window).load(function () {
  CompanyHistory();
  history_slide();
  build_slide();
  headLang();
});

// window resize
$(window).resize(function () {
  layoutInit(); // 레이아웃별 세팅
  mobileMenuInit();
  gnb();
  robbyList();
  mobiletab5();
  contributeM();
  CompanyHistory();
  imgChange();
  newsList();
  mobilealert();
  tblFAQ();
  headLang();
});
