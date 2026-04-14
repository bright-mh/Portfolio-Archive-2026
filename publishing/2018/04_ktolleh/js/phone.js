function hasJqueryObject(elem) {
  return elem.length > 0;
}
var app = {};
window.onload = function () {
  init();
};
function init() {
  app.$body = $("body");
  if (hasJqueryObject(app.$body.find(".swiper_ex1"))) initSlideScroll(".tag_box");
  initSlideScroll(".video_box");
  if (hasJqueryObject(app.$body.find(".swiper_ex2"))) initTabScroll(".tab_area .tab_list_box");
  if (hasJqueryObject(app.$body.find(".func_list"))) func_btn();
  if (hasJqueryObject(app.$body.find(".func"))) func_btn2();
  if (hasJqueryObject(app.$body.find(".more_area .btn_more"))) btnToggle();
  if (hasJqueryObject(app.$body.find(".click_effect"))) clickEffect();
  if (hasJqueryObject(app.$body.find(".comm_area .view"))) reply();
  if (hasJqueryObject(app.$body.find(".top_lnb"))) initTopLnb();
  if (hasJqueryObject(app.$body.find("#comment"))) comment();
}

/* swiper */
function initSlideScroll(slideWrap) {
  var swiper = new Swiper(slideWrap, {
    scrollbar: { el: null, hide: false },
    direction: "horizontal",
    slidesPerView: "auto",
    mousewheelControl: true,
    freeMode: true,
  });
}

function initTabScroll(slideWrap, idx) {
  var swiper = new Swiper(slideWrap, {
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

      if ($(this).parents().hasClass("tab_area")) {
        $(slideWrap).parents().next().find(".grouping").removeClass("on");
        $(slideWrap).parents().next().find(".grouping").eq(index).addClass("on");
      }

      swiper.slideTo(index - 1, 500);
    });
}

function initBtnSlide(slideWrap) {
  var swiper = new Swiper(slideWrap, {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".btn_next",
      prevEl: ".btn_prev",
    },
  });
}

function initTouchSlide(slideWrap) {
  var swiper = new Swiper(slideWrap, {
    loop: false,
    pagination: { el: ".swiper-pagination" },
  });
}

/* 상세 기능 버튼 */
function func_btn() {
  var btn = $(".func_list button.btn");
  btn.on("click", function () {
    if ($(this).hasClass("func_like")) {
      $(this).addClass("on");
    } else if ($(this).hasClass("func_choice")) {
      $(this).toggleClass("on");
    }
  });
}

/* 더보기 토글 */
function btnToggle() {
  var btn = $(".btn_more");
  btn.on("click", function () {
    if ($(this).hasClass("on")) {
      $(this).prev().addClass("ellipsis");
      $(this).removeClass("on");
      $(this).parent().nextAll().hide();
    } else if ($(this).parent().parent().hasClass("event_area")) {
      if ($(this).hasClass("on")) {
        $(this).removeClass("on");
        $(this).parent().nextAll().hide();
      } else {
        $(this).addClass("on");
        $(this).parent().nextAll().show();
      }
    } else {
      $(this).prev().removeClass("ellipsis");
      $(this).addClass("on");
      $(this).parent().nextAll().show();
    }
  });
}

/* 클릭 효과 */
function clickEffect() {
  var list = $(".click_effect a");
  list.on("click", function () {
    $(this).parents("ul").children("li").removeClass("on");
    $(this).parent().addClass("on");
  });
}

/* 답글 보기 */
function reply() {
  var btn_open = $(".comm_area .view");
  var btn_colse = $(".comm_area .btn_close");

  btn_open.on("click", function () {
    $(this).parents(".original").next().show();
  });
  btn_colse.on("click", function () {
    $(this).parents(".comment_list").hide();
  });
}

/* 유닛 좋아요 버튼 */
function func_btn2() {
  $(".func .f_like button").on("click", function () {
    $(this).parent().addClass("on");
  });
}

/* 통합검색 순위형 상단 탭 영역 */
function initTopLnb() {
  var period = $(".period_tab .period li");
  period.find("a").on("click", function () {
    $(this).parent().addClass("on").siblings().removeClass("on");
    if ($(this).hasClass("years")) {
      period.parent().next(".depth").addClass("active");
      initTabScroll(".period_tab .depth");
    } else {
      period.parent().next(".depth").removeClass("active");
    }
  });
  $(".view_type a").on("click", function () {
    $(this).addClass("on").siblings().removeClass("on");
  });
}

/* 덧글보기 바로가기 */
function comment() {
  var commTop = $("#comment").offset().top;
  var playerH = $(".player_sticky").height();
  $(".func_comment").on("click", function (e) {
    e.preventDefault();
    $("html, body").scrollTop(commTop - playerH);
  });
}
