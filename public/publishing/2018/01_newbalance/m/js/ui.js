function hasJqueryObject(elem) {
  return elem.length > 0;
}
var app = {};
window.onload = function () {
  init();
};
$(window).bind({
  scroll: function () {
    if (hasJqueryObject($("body").find(".detail .sticky_wrap"))) stickyWrap();
  },
  resize: function () {
    if (hasJqueryObject($("body").find("#header"))) headerSetting();
    //if( hasJqueryObject( $("body").find(".detail .sticky_wrap") ) ) stickyWrap();
    if (hasJqueryObject($("body").find(".category_inner"))) categoryListHeight();
  },
});
//$(document).ready(function(){ initLoad (); });
function init() {
  app.$body = $("body");
  if (hasJqueryObject(app.$body.find("#header"))) headerControl();
  if (hasJqueryObject(app.$body.find(".btn_top"))) initTop();
  if (hasJqueryObject(app.$body.find(".filter_inner"))) filterToggle();
  if (hasJqueryObject(app.$body.find(".category_inner"))) categoryList();
  categoryListHeight();
  if (hasJqueryObject(app.$body.find(".visual_list"))) initTouchSlide();
  if (hasJqueryObject(app.$body.find(".pr_lookshop"))) initTouchSlide2(".pr_lookshop .img_box", ".ls_pr", ".ls_nt");
  if (hasJqueryObject(app.$body.find(".nbpeople"))) initTouchSlide2(".nbpeople .img_box", ".nb_pr", ".nb_nt");
  //if( hasJqueryObject( app.$body.find(".main_visual") ) ) initTouchSlideAuto(".main_visual .img_box");
  if (hasJqueryObject(app.$body.find(".prod_slide"))) initSlideScroll2(".prod_slide", ".scrollbar");
  if (hasJqueryObject(app.$body.find(".tag_list"))) initSlideScroll(".tag_list", null, 0);
  if (hasJqueryObject(app.$body.find(".detail .sticky_wrap"))) stickyWrap();
  if (hasJqueryObject(app.$body.find(".toggle_box"))) toggleOpt();
  if (hasJqueryObject(app.$body.find(".qna_list"))) initQna();
  if (hasJqueryObject(app.$body.find(".zip_code"))) zipCode();
  if (hasJqueryObject(app.$body.find(".cal_noti"))) calNoti();
}
/* Top버튼  =============================================================== */
function initTop() {
  var goTop = $(".btn_top");
  $(window).on("scroll", function () {
    var scrTop = $(window).scrollTop();
    scrTop > 60 ? goTop.show() : goTop.hide();
  });
  goTop.on("click", function () {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 200);
  });
}

/* 필터 팝업 토글  =============================================================== */
function filterToggle() {
  var sortBox = $(".filter_inner .sort_select");
  var headerH = $(".filter_inner .header").height();

  var arrSectionOffset = [];

  sortBox.each(function (idx) {
    arrSectionOffset[idx] = $(this).offset().top;
    $(this).attr("key", idx);
  });

  sortBox.find(".tit").on("click", function () {
    var key = $(this).parents(".sort_select").attr("key");

    if ($(this).parents(".sort_select").hasClass("on")) {
      sortBox.removeClass("on");
      sortBox.find(".sort_by").slideUp();
      $(".layer_wrap").animate({ scrollTop: 0 }, 500);
    } else {
      sortBox.removeClass("on");
      sortBox.find(".sort_by").slideUp();
      $(this).parents(".sort_select").addClass("on");

      $(this).next(".sort_by").slideDown();
      $(".layer_wrap").animate({ scrollTop: arrSectionOffset[key] - headerH - 1 }, 500);
      return false;
    }
  });
}

/* 카테고리 팝업  =============================================================== */
function categoryListHeight() {
  var browserH = $(window).height();
  var categoryBox = $(".category_inner .menu_list .category");
  if (categoryBox.length < 2) {
  } else {
    $(".category_inner .menu_list > ul")
      .find("> li:last-child")
      .css("height", browserH - 57);
  }
}
function categoryList() {
  var categoryTit = $(".category_inner .menu_tit li");
  var categoryBox = $(".category_inner .menu_list .category");
  var headerH = $(".category_inner .header").height();
  var arrCategoryOffset = [];

  categoryBox.each(function (idx) {
    arrCategoryOffset[idx] = $(this).offset().top;
  });
  categoryTit.each(function (idx) {
    $(this).attr("key", idx);
  });
  categoryTit.parents().find("li:last-child").addClass("last");

  categoryTit.find("a").on("click", function () {
    var key = $(this).parents("li").attr("key");
    categoryTit.removeClass("on").removeClass("scroll").removeClass("out2").addClass("out");
    $(".layer_wrap").animate({ scrollTop: arrCategoryOffset[key] - headerH - 1 }, 500);
    $(this).parents("li").addClass("on").addClass("ing");
    //마지막 메뉴 클릭 시
    if ($(this).parents("li").hasClass("last")) {
      $(this).parents("li").removeClass("out");
      $(this).parents("li").prev().addClass("out2");
    }
  });

  var temporalScroll = 0;

  $(".layer_wrap").on("scroll", function () {
    var scrTop = $(this).scrollTop();
    categoryBox.each(function (idx) {
      if (arrCategoryOffset[idx] - headerH - 1 <= scrTop) {
        var nth = idx + 1;
        categoryTit.removeClass("on2");
        categoryTit
          .parents()
          .find("li:nth-child(" + nth + ")")
          .addClass("on2")
          .addClass("scroll");
        setTimeout(function () {
          categoryTit.removeClass("ing").removeClass("out");
        }, 550);
      }
    });
    if (scrTop < temporalScroll) {
      categoryTit.removeClass("out2");
      categoryTit.parents().find(".last").removeClass("on");
    }
    temporalScroll = scrTop;
  });
}

/* 토글 공통 =============================================================== */
function toggleOpt() {
  $(".toggle_box .title").on("click", function () {
    if ($(this).hasClass("on")) {
      $(this).parents(".toggle_box").removeClass("on");
      $(this).removeClass("on");
      $(this).next(".con_box").slideUp();
    } else {
      $(this).parents(".toggle_box").addClass("on");
      $(this).addClass("on");
      $(this).next(".con_box").slideDown();
    }
  });
}

/* Q&A list =============================================================== */
function initQna() {
  var qnaList = $(".qna_list li");
  qnaList.find(".row_q").on("click", function () {
    if ($(this).parents("li").hasClass("on")) {
      qnaList.removeClass("on");
      qnaList.find(".row_a").slideUp();
    } else {
      qnaList.removeClass("on");
      qnaList.find(".row_a").slideUp();
      $(this).parents("li").addClass("on");
      $(this).next(".row_a").slideDown();
    }
  });
}

/* 상품 구매하기, 옵션선택 ======================================================== */
function stickyWrap() {
  var detailWrap = $(".detail .detail_wrap");
  var setSection = detailWrap.offset().top;
  var intScrollTop = $(window).scrollTop();

  var tabbox = $(".tab_box li");
  tabbox.each(function (n) {
    $(this)
      .find("a")
      .click(function () {
        var tabCont = detailWrap.find(".explain_wrap .section");
        $(this).parent().addClass("on").siblings().removeClass("on");
        tabCont.eq(n).addClass("on").siblings().removeClass("on");
      });
  });

  if (intScrollTop > setSection - 1) {
    detailWrap.addClass("fixed");
  } else if (intScrollTop < setSection - 1) {
    detailWrap.removeClass("fixed");
  }
}

/* swiper 공통 =============================================================== */
function initTouchSlide() {
  var swiper = new Swiper(".visual_list .img_box", {
    loop: true,
    pagination: { el: ".swiper-pagination" },
  });
}

function initTouchSlide2(slideWrap, prev, next) {
  var swiper = new Swiper(slideWrap, {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 2,
    grabCursor: true,
    navigation: {
      nextEl: next,
      prevEl: prev,
    },
  });
}

function initTouchSlideAuto(slideWrap) {
  var swiper = new Swiper(slideWrap, {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: { el: ".swiper-pagination" },
  });
}

function initSlideScroll(slideWrap, bar, idx) {
  var swiper = new Swiper(slideWrap, {
    scrollbar: { el: bar, hide: false },
    direction: "horizontal",
    slidesPerView: "auto",
    mousewheelControl: true,
    freeMode: true,
  });
  swiper.slideTo(idx, 1);

  $(slideWrap)
    .find("li a")
    .on("click", function () {
      $(this).parents("li").addClass("on").siblings().removeClass("on");
      var index = $(this).parents("li").index();
      swiper.slideTo(index - 1, 500);
    });
}
function initSlideScroll2(slideWrap, bar) {
  var swiper = new Swiper(slideWrap, {
    scrollbar: { el: bar, hide: false },
    direction: "horizontal",
    slidesPerView: "auto",
    mousewheelControl: true,
    freeMode: true,
  });
}

/* navigation =============================================================== */
function headerSetting() {
  var browserH = $(window).height();
  var headerbarH = $(".head_bar").height();
  // nav 높이값 계산
  $(".nav_wrap .category_box").css("height", browserH - headerbarH);
  // search 영역 resize 높이 값 계산
  var headSearchH = $("#header .head_search").height();
  headSearchH > browserH - headerbarH
    ? $("#header .head_search").css("height", browserH - headerbarH)
    : $("#header .head_search").css("height", "auto");
}

function headerControl() {
  headerSetting();

  var navWrap = $("#header .nav_wrap");
  var categoryBox = $(".nav_wrap .category_box");
  var headSearch = $("#header .head_search");

  // navigation 클릭 시 (열기)
  $(".head_bar .btn_nav").on("click", function () {
    event.preventDefault();
    navWrap.show();
    searchClose();
    $(this).addClass("hide");
    $(".head_bar .btn_nav_close").removeClass("hide");
    $("body").addClass("layer_on");
  });

  // navigation 클릭 시 (닫기)
  $(".head_bar .btn_nav_close").on("click", function () {
    navClose();
    $("body").removeClass("layer_on");
  });

  // navigation 메뉴
  navWrap.find("a").on("click", function (e) {
    if ($(this).next().hasClass("category_box")) {
      e.preventDefault();
      $(this).next(".category_box").addClass("on");
      $(this).parents(".category_box").addClass("hide");
    } else if ($(this).parent().hasClass("back")) {
      e.preventDefault();
      $(this).closest(".category_box").removeClass("on");
      $(this).closest("li").closest(".category_box").removeClass("hide");
    }
  });

  // search 클릭 시
  $(".head_bar .btn_srch").on("click", function () {
    event.preventDefault();
    if ($(this).hasClass("on")) {
      searchClose();
      $("body").removeClass("layer_on");
    } else {
      headSearch.show();
      navClose();
      $(this).addClass("on");
      $("#wrap").after('<div class="dimm_gnb"></div>');
      $("body").addClass("layer_on");
      $("#header").css("position", "fixed");
    }
  });

  $("body").on("click", ".dimm_gnb", searchClose);

  // navigation 닫기
  function navClose() {
    navWrap.hide();
    categoryBox.removeClass("on").removeClass("hide");
    $(".head_bar .btn_nav_close").addClass("hide");
    $(".head_bar .btn_nav").removeClass("hide");
  }
  // search 닫기
  function searchClose() {
    //alert("dd");
    $("body").removeClass("layer_on");
    headSearch.hide();
    $(".head_bar .btn_srch").removeClass("on");
    $(".dimm_gnb").remove();
  }
}

/* 우편번호 찾기 layer 팝업 (mw_me_02_03_l02) ======================================================== */
function zipCode() {
  var addChoice = $(".zip_code .add_choice .ip_radio");
  var inputTxt = $(".zip_code .add_choice .ip_text");

  addChoice.on("click", function () {
    var index = addChoice.index(this);
    if (index == 1) {
      inputTxt.attr("placeholder", "찾고자 하는 주소의 동/읍/면 이름을 입력해주세요.");
    } else {
      inputTxt.attr("placeholder", "찾고자 하는 주소의 도로명 건물번호를 입력해주세요.");
    }
  });
}

/* NB 런칭 캘린더 =============================================================== */
// 캘린더 알림 - 체크박스 버튼 선택 시, 텍스트&이미지 교체
function calNoti() {
  var btnChk = $(".cal_noti .btn_area input");
  btnChk.on("click", function () {
    if ($(this).prop("checked")) {
      $(".cal_noti .top_box").addClass("on");
      $(".cal_noti .top_box p").html(
        "알림취소 시 NB 런칭캘린더에 등록되는<br />신규 상품과 기획전에 대한 알림이<br />제공되지 않습니다.",
      );
      $(".cal_noti .btn_area label").text("캘린더 알림취소");
    } else {
      $(".cal_noti .top_box").removeClass("on");
      $(".cal_noti .top_box p").html(
        "NB 런칭캘린더에 등록되는<br />신규 상품과 기획전에 대한 알림을<br />받을 수 있습니다.",
      );
      $(".cal_noti .btn_area label").text("캘린더 알림받기");
    }
  });
}
