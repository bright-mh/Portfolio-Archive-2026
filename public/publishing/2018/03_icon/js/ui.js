function hasJqueryObject(elem) {
  return elem.length > 0;
}
var app = {};
window.onload = function () {
  init();
};
$(window).bind({
  scroll: function () {
    gnbStkicy();
    if (hasJqueryObject($("body").find(".academy"))) academyFixed();
  },
  resize: function () {
    if (hasJqueryObject($("body").find(".academy"))) academyFixed();
  },
});
function init() {
  app.$body = $("body");

  if (hasJqueryObject(app.$body.find(".input"))) inputCheck();
  if (hasJqueryObject(app.$body.find(".academy"))) academyFixed();
  if (hasJqueryObject(app.$body.find(".academy .lnb"))) academylnbToggle();

  /*common*/
  languageCheck();
  gnbStkicy();
  popupClose();
}

$(document).ready(function () {
  // code Highlight
  if (hasJqueryObject($("body").find(".markdown pre"))) hljs.initHighlightingOnLoad();
  if (hasJqueryObject($("body").find(".editor_box pre"))) hljs.initHighlightingOnLoad();
});

function popupOpen(popid) {
  $(popid).css("display", "block");
  $("body").append('<div class="dimm_pop"></div>');
  $("body").css({ overflow: "hidden" });
}

function popupClose() {
  $(".layer_pop")
    .find(".close")
    .on("click", function () {
      $(this).closest(".layer_pop").css("display", "none");
      $(".dimm_pop").remove();
      $("body").css({ overflow: "inherit" });
    });
}

/* gnb : sticky =============================================================== */
function gnbStkicy() {
  var headerM = $(".main .header");
  var headerS = $(".sub .header");
  var headerS2 = $(".sub2 .header");
  var btnTop = $(".container .btn_top");
  var intScrollTop = $(window).scrollTop();
  if (intScrollTop > 50) {
    headerM.addClass("sticky");
    headerS2.addClass("sticky");
    btnTop.addClass("on");
  } else if (intScrollTop < 50) {
    headerM.removeClass("sticky");
    headerS2.removeClass("sticky");
    btnTop.removeClass("on");
  }
  if (intScrollTop > 120) {
    headerS.addClass("sticky");
    btnTop.addClass("on");
  } else if (intScrollTop < 120) {
    headerS.removeClass("sticky");
    btnTop.removeClass("on");
  }
  btnTop.on("click", function () {
    $("body,html").scrollTop(0);
  });
}

/* common : language 체크  =============================================================== */
function languageCheck() {
  $(".header .utility .lang .select").on("click", function () {
    $(this).parents(".lang").toggleClass("on");
  });
  $(".header .utility .lang ul a").on("click", function () {
    $(this).closest("ul").find("li").removeClass("selected");
    $(this).parent().addClass("selected");
    $(this).closest(".lang").removeClass("on");
    $(this).hasClass("ko")
      ? $(this).closest(".lang").find(".select").text("KOREAN")
      : $(this).closest(".lang").find(".select").text("ENGLISH");
  });
}

/* input error 체크  =============================================================== */
function inputCheck() {
  var focusInput = $(".input.error input, .input.error textarea");
  focusInput.keyup(function () {
    $(this).parents(".input.error").removeClass("error");
  });
}

/* input file 디자인  =============================================================== */
function file_design() {
  var uploadFile = $(".file_box .btn_upload");
  uploadFile.on("change", function () {
    if (window.FileReader) {
      var filename = $(this)[0].files[0].name;
    } else {
      var filename = $(this).val().split("/").pop().split("\\").pop();
    }
    $(this).siblings(".file_name").val(filename);
  });
}

/* Academy fixed =============================================================== */
function academyFixed() {
  var browserH = $(window).height();
  var fixedSection1 = $(".contents .academy");
  var fixedSection2 = $(".footer");
  var mkdHeight = $(".academy .mkd_box").outerHeight();
  var setSection1 = fixedSection1.offset().top;
  var setSection2 = fixedSection2.offset().top;
  var mkdSection = $(".academy .mkd_box").offset().top;
  var intScrollTop = $(window).scrollTop();

  if (intScrollTop > setSection1 - 70) {
    fixedSection1.find(".lnb").css({ top: 0 });
    fixedSection1.addClass("fixed");
  } else if (intScrollTop < setSection1 - 70) {
    fixedSection1.find(".lnb").css({ top: 0 });
    fixedSection1.removeClass("fixed");
  }

  if (mkdHeight > browserH - 190) {
    if (intScrollTop > setSection2 - browserH) {
      var topN = intScrollTop - (setSection2 - browserH);
      fixedSection1.find(".lnb").css({ top: -topN });
    }
    var secScroll = browserH - 150;
    fixedSection1.find(".lnb .scroll_inner").css("height", secScroll);
  } else {
    if (intScrollTop > mkdSection) {
      var topN2 = intScrollTop - mkdSection;
      fixedSection1.find(".lnb").css({ top: -topN2 });
    }
    fixedSection1.find(".lnb .scroll_inner").css("height", mkdHeight - 80);
  }
}
//academy toggle
function academylnbToggle() {
  $(".academy .lnb .box > ul > li > a").on("click", function () {
    if ($(this).next().hasClass("depth")) {
      $(this).next(".depth").hasClass("on")
        ? $(this).next(".depth").removeClass("on")
        : $(this).next(".depth").addClass("on");
    }
  });
}
