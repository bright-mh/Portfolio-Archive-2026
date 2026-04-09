/*content select*/
function select() {
  $(".slt").click(function (event) {
    var selectObj = $(this);
    event.stopPropagation();
    if (selectObj.children().eq(1).css("display") == "none") {
      $(".slt").each(function () {
        $(this).css("z-index", "0");
        $(this).parent().css("z-index", "0");

        if ($(this).children().eq(1).css("display") == "block") {
          $(this).children().eq(0).removeClass("on");
          $(this).children().eq(1).removeClass("on");
        }
      });
      selectObj.children().eq(0).addClass("on");
      selectObj.children().eq(1).addClass("on");
      selectObj.find("ul>li>a").click(function () {
        selectObj.children().eq(0).html($(this).html());
      });
      selectObj.parent().css("z-index", "100");
      selectObj.css("z-index", "100");
    } else {
      selectObj.children().eq(0).removeClass("on");
      selectObj.children().eq(1).removeClass("on");
      selectObj.css("z-index", "0");
      selectObj.parent().css("z-index", "0");
    }
  });

  $(document).click(function () {
    $(".slt").each(function () {
      if ($(this).children().eq(1).css("display") == "block") {
        $(this).children().eq(0).removeClass("on");
        $(this).children().eq(1).removeClass("on");
        $(this).css("z-index", "0");
        $(this).parent().css("z-index", "0");
      }
    });
  });
}

$.extend({
  popupShow: function () {
    var pop01 = $("div.pop01");
    var pop02 = $("div.pop02");
    var bg = $("div.popbg");

    var wid = $(window).width();
    var hei = $(window).height() + 200 + "px";

    var hei_5 = 0.5 * $(window).height() + "px";
    pop01.css("top", hei_5);
    pop02.css("top", hei_5);
    bg.height(hei);

    $("html").css("overflow", "hidden");
  },
});

var resizeTimer;

$(document).ready(function () {
  select(); //select

  var pop = $("#layerPop");

  //	alert($(pop,'body').length);
  pop.each(function () {
    if ($(".advertiserChoice").css("display") == "block") {
      $("div.popbg").css("height", "100%");
      $.popupShow();

      $(window).bind("resize", function () {
        $.popupShow();
      });
    }
    if ($(".advertiserRegistration").css("display") == "block") {
      $("div.popbg").css("height", "100%");
      $.popupShow();

      $(window).bind("resize", function () {
        $.popupShow();
      });
    }
  });

  /* ie7 : ���Ի� �� css���� */
  if ($(".tabContainer div:eq(0)").hasClass("nolist")) {
    $("div.tabListCon").css("padding-right", "0");
  }
  if ($(".tabListCon").hasClass("nolist")) {
    $(".colStyle").attr("style", "width:126px");
    $(".colStyle2").attr("style", "width:126px");
    $("div.tabListCon").css("padding-right", "0");
  }
});
