$(window).bind({
  load: function () {
    parallaxIe.settings();
    parallaxIe.moveParallax();
    initScaleImg();
  },
  scroll: function () {
    parallaxIe.moveParallax();
  },
});

/* img hover scale  =============================================================== */
function initScaleImg() {
  var scaleImg = $(".pro_img").find("a");
  scaleImg.hover(
    function () {
      var scaleSize = $(this).width() * 1.07;
      var scaleSizeH = $(this).height() * 1.07;
      var posLeft = (scaleSize - $(this).width()) / 2;
      var posTop = (scaleSizeH - $(this).height()) / 2;
      $(this).stop().animate({ width: scaleSize, left: -posLeft, top: -posTop }, 300, "easeInOutQuad");
    },
    function () {
      $(this)
        .stop()
        .animate({ width: $(this).parent().width(), left: 0, top: 0 }, 300, "easeInOutQuad");
    },
  );
  scaleImg.on("focus", function () {
    var scaleSize = $(this).width() * 1.07;
    var scaleSizeH = $(this).height() * 1.07;
    var posLeft = (scaleSize - $(this).width()) / 2;
    var posTop = (scaleSizeH - $(this).height()) / 2;
    $(this).stop().animate({ width: scaleSize, left: -posLeft, top: -posTop }, 300, "easeInOutQuad");
  });
  scaleImg.on("blur", function () {
    $(this)
      .stop()
      .animate({ width: $(this).parent().width(), left: 0, top: 0 }, 300, "easeInOutQuad");
  });
}

/* main -parallax =============================================================== */
var WINDOW = $(window);
var windowH = WINDOW.height();
var arrSectionOffsetIe = new Array(8);
var parallaxIe = {
  settings: function () {
    var parallaxIe01 = $(".parallax01");
    var parallaxIe02 = $(".parallax02");
    var parallaxIe03 = $(".parallax03");
    var parallaxIe04 = $(".parallax04");
    var parallaxIe05 = $(".parallax05");
    var parallaxIe06 = $(".parallax06");

    arrSectionOffsetIe[0] = parallaxIe01.offset().top;
    arrSectionOffsetIe[1] = parallaxIe02.offset().top;
    arrSectionOffsetIe[2] = parallaxIe03.offset().top;
    arrSectionOffsetIe[3] = parallaxIe04.offset().top;
    arrSectionOffsetIe[4] = parallaxIe05.offset().top;
    arrSectionOffsetIe[5] = parallaxIe06.offset().top;

    /*$('.main .collection .parallax01 .pro_img.on').css({'right':0,'top':'70px'});
		$('.main .collection .parallax01 .pro_txt.on').css({'left':0});
		$('.main .collection .parallax02 .pro_img.on').css({'left':0,'top':'130px'});
		$('.main .collection .parallax02 .pro_txt.on').css({'right':0});*/
  },
  moveParallax: function () {
    var intScrollTop = WINDOW.scrollTop();
    var gnbH = $(".header").height();
    var windowHalf = windowH / 2;

    function parCollectionOn(pos, posX1, posX2, posY1) {
      pos.stop().animate({ "margin-left": posX1, "margin-right": posX2, "margin-top": posY1 }, 700, "easeInOutQuad");
    }
    function parCollectionOff(pos) {
      pos.stop().animate({ "margin-left": 0, "margin-right": 0, "margin-top": 0 }, 700, "easeInOutQuad");
    }

    /*parallax01*/
    if (intScrollTop > arrSectionOffsetIe[0] - windowHalf - gnbH) {
      if (!$(".parallax01").hasClass("on")) {
        $(".parallax01").addClass("on");
        parCollectionOn($(".parallax01 .pro_img"), 0, 220, -140);
        parCollectionOn($(".parallax01 .pro_txt"), 220, 0, 0);
      }
    } else if (intScrollTop < arrSectionOffsetIe[0] - windowHalf - gnbH) {
      if ($(".parallax01").hasClass("on")) {
        $(".parallax01").removeClass("on");
        parCollectionOff($(".parallax01 .pro_img"));
        parCollectionOff($(".parallax01 .pro_txt"));
      }
    }
    /*parallax02*/
    if (intScrollTop > arrSectionOffsetIe[1] - windowHalf - gnbH) {
      if (!$(".parallax02").hasClass("on")) {
        $(".parallax02").addClass("on");
        parCollectionOn($(".parallax02 .pro_img"), 220, 0, -130);
        parCollectionOn($(".parallax02 .pro_txt"), 0, 220, 0);
      }
    } else if (intScrollTop < arrSectionOffsetIe[1] - windowHalf - gnbH) {
      if ($(".parallax02").hasClass("on")) {
        $(".parallax02").removeClass("on");
        parCollectionOff($(".parallax02 .pro_img"));
        parCollectionOff($(".parallax02 .pro_txt"));
      }
    }
    /*parallax03*/
    if (intScrollTop > arrSectionOffsetIe[2] - windowHalf - gnbH) {
      var i = 0;
      var setBox = setInterval(function () {
        var target = $(".parallax03");
        if (target.offset().top < intScrollTop + windowH) {
          $(".parallax03 > .list:eq(" + i + ")")
            .stop()
            .animate({ top: 0 }, 700, "easeInOutSine");
          i++;
        }
      }, 100);
    } else if (intScrollTop < arrSectionOffsetIe[2] - windowHalf - gnbH) {
      $(".parallax03 .list").stop().animate({ top: 150 }, 700);
    }

    /*parallax05*/
    if (intScrollTop > arrSectionOffsetIe[4] - windowH - gnbH) {
      $(".parallax05 .p_video").stop().animate({ top: -55 }, 500, "easeInOutQuad");
    } else if (intScrollTop < arrSectionOffsetIe[4] - windowH - gnbH) {
      $(".parallax05 .p_video").stop().animate({ top: 0 }, 500, "easeInOutQuad");
    }
    if (intScrollTop > arrSectionOffsetIe[4] - windowHalf - gnbH) {
      $(".parallax05 .p_list").stop().animate({ top: 0 }, 500, "easeInOutQuad");
    } else if (intScrollTop < arrSectionOffsetIe[4] - windowHalf - gnbH) {
      $(".parallax05 .p_list").stop().animate({ top: 150 }, 500, "easeInOutQuad");
    }
  },
};
