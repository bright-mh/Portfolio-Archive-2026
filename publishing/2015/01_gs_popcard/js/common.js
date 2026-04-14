$(document).ready(function () {
  /* top 버튼 */
  $("html, body").bind("scrollstop", function () {
    var top = $("#wrap").offset().top;
    var con = $(".btnTop");

    setTimeout(function () {
      if (top < 0) {
        con.fadeIn(500);
      } else {
        con.fadeOut(500);
      }
    }, 500);
  });

  /* 1depth tab */
  var oneTab = $(".tabChoice li a");
  oneTab.on("click", function () {
    oneTab.removeClass("on");
    $(this).addClass("on");
    if (oneTab.index($(this)) == 0) {
      $(".recommendList").show();
      $(".receiptGroup").hide();
    } else {
      $(".recommendList").hide();
      $(".receiptGroup").show();
    }
  });

  /* 2depth tab */
  var twoTab = $(".receiptTab li a");
  twoTab.on("click", function () {
    twoTab.removeClass("on");
    $(this).addClass("on");
    if (twoTab.index($(this)) == 0) {
      $(".exchangeGroup").show();
      $(".rechargeGroup").hide();
    } else {
      $(".exchangeGroup").hide();
      $(".rechargeGroup").show();
    }
  });

  /* 쿠폰번호 직접 입력 */
  var cpInput = $(".numberBox .txtArea input");
  var cpLabel = $(".numberBox .txtArea label");

  cpInput.on({
    click: function () {
      if (cpLabel.css("display") == "none" && $(this).val().length == 0) {
        cpLabel.show();
      } else {
        cpLabel.hide();
      }
    },
    blur: function () {
      if (cpLabel.css("display") == "none" && $(this).val().length == 0) {
        cpLabel.show();
      }
    },
  });

  /*faq : select */
  var faqSelect = $(".selectArea .inputTxt a");
  var faqSelectList = $(".selectArea .selectList");
  var faqSelectChoice = $(".selectArea .selectList a");

  faqSelect.on("click", function () {
    if (faqSelectList.css("display") == "none") {
      $(this).addClass("on");
      faqSelectList.show();

      faqSelectChoice.on("click", function () {
        var choiceTxt = $(this).text();
        faqSelect.text(choiceTxt);

        faqSelectList.hide();
        faqSelect.removeClass("on");
      });
    } else {
      faqSelectList.hide();
      $(this).removeClass("on");
    }
  });

  /*faq : list */
  var faqList = $(".faqList li");
  var faqListChoice = $(".faqList .subject a");

  faqListChoice.on("click", function () {
    if ($(this).parent().parent().hasClass("on")) {
      faqList.removeClass("on");
    } else {
      faqList.removeClass("on");
      $(this).parent().parent().addClass("on");
    }
  });
});
