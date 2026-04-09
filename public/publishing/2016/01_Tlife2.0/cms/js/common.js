/*
 ***********************************************
 * @description    : 자바스크립트 > 공통
 ***********************************************
 */

$(document).ready(function () {
  // GNB 메뉴
  $("#gnb>li>a").each(function (index) {
    $("#gnb>li>a")
      .eq(index)
      .click(function () {
        if ($(this).next().css("display") == "block") {
          $(this).next().slideUp(200);
          return false;
        } else {
          $(this).next().slideDown(200);
          return false;
        }
      });
  });

  // Skip Navigation (크롬에서 포커스 이동 오류 해결)
  $(function () {
    $("#skip_navi a").each(function () {
      $(this).click(function () {
        var thishref = $(this).attr("href");
        $(thishref).attr("tabindex", "-1");
        $(thishref).focus();
      });
    });
  });

  // 날짜 선택 버튼
  $(".term_list > li a").click(function () {
    $(".term_list > li a").removeClass("on");
    $(this).addClass("on");
  });

  // 코드관리 : 카테고리 선택
  $(".cate > li").each(function (index) {
    $(".cate > li").eq(0).addClass("on");
    $(".cate > li")
      .eq(index)
      .click(function () {
        $(".cate > li").removeClass("on");
        $(this).addClass("on");
        return false;
      });
  });

  $(".cate2 > li").each(function (index) {
    $(".cate2 > li").eq(0).addClass("on");
    $(".cate2 > li")
      .eq(index)
      .click(function () {
        $(".cate2 > li").removeClass("on");
        $(this).addClass("on");
        return false;
      });
  });

  $(".cate3 > li").each(function (index) {
    $(".cate3 > li").eq(0).addClass("on");
    $(".cate3 > li")
      .eq(index)
      .click(function () {
        $(".cate3 > li").removeClass("on");
        $(this).addClass("on");
        return false;
      });
  });

  /* 버튼 비활성화 시, 클릭 되지 않도록 처리 */
  $("a.dimmed").click(function (e) {
    e.preventDefault();
  });

  /* filtering tab 제어 */
  $(".filtering a").on("click focus", function () {
    $(".filtering a").removeClass("on");
    $(this).addClass("on");
  });

  /* 키워드 선택 레이어 제어 */
  $(".btn_keyword").on("click", function (e) {
    if ($(this).hasClass("dimmed")) {
      e.preventDefault();
    } else {
      $(".keyword_box").toggle();
    }
    return false;
  });
  $(".keyword_box a.close").on("click", function () {
    $(".keyword_box").css("display", "none");
  });

  /* 유형선택 레이어 제어 */
  $(".btn_pattern").on("click", function (e) {
    $(this).next().toggle();
    $(this).toggleClass("open");
    return false;
  });
});

// GNB Scroll 플러그인
(function ($) {
  $(window).load(function () {
    $("a[rel='load-content']").click(function (e) {
      e.preventDefault();
      var url = $(this).attr("href");
      $.get(url, function (data) {
        $(".mCSB_container").append(data); //load new content inside .mCSB_container
        //scroll-to appended content
        $().mCustomScrollbar("scrollTo", "cont:last");
      });
    });

    $().delegate("a[href='top']", "click", function (e) {
      e.preventDefault();
      $().mCustomScrollbar("scrollTo", $(this).attr("href"));
    });
  });
})(jQuery);

// layer show/hide
function showLayer(id) {
  document.getElementById(id).style.display = "block";
}
function hideLayer(id) {
  document.getElementById(id).style.display = "none";
}
