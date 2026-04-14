/* common mouseover/mouseout */
function imageOver(imgEl) {
  var src;
  if (imgEl.attr("src").replace("_off", "_on")) {
    src = imgEl.attr("src").replace("_off", "_on");
    imgEl.attr("src", src);
    return false;
  }
}
function imageOut(imgEl) {
  var src;
  if (imgEl.attr("src").replace("_on", "_off")) {
    src = imgEl.attr("src").replace("_on", "_off");
    imgEl.attr("src", src);
    return false;
  }
}

var isMain = true;

var mainInterval;
var subInterval;

var mainNum = 0;
var subNum = 0;
var pMainNum;

var ssNum = -1; //music

var musicOpen = false;

var wid;
function winWid() {
  wid = $(window).width() - 149;
  return wid;
}

$.fn.pngFix = function () {
  if (!$.browser.msie || $.browser.version >= 9) {
    return $(this);
  }

  return $(this).each(function () {
    var img = $(this),
      src = img.attr("src");

    img
      .attr("src", "../resources/img/main/record_g.png")
      .css(
        "filter",
        "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled='true',sizingMethod='crop',src='" + src + "')",
      );
  });
};

//disk 관련
var rInterval;
var isOpen = false;
var isClick = false;

//cover
var isCover = true;

$(document).ready(function () {
  var cover = $(this).find(".coverCon");

  $.fn.extend({
    mainRotation: function () {
      searchTxtSet();

      var tr = -840 * mainNum;
      //			alert(mainNum+" & "+subNum);
      if (mainNum >= 0 && mainNum < 3 && subNum < 2) {
        if (mainNum == 0) {
          if (pMainNum != 3) {
            if (isCover == true) {
              cover.css("display", "block");
            }
          }
        } else {
          if (isCover == true) {
            cover.css("display", "block");
          }
        }
      }
      if ($(this).css("margin-left") != "0" && mainNum == 0 && subNum != 0) {
        /* 한바퀴 돈 직후 */
        $(this).css("margin-left", "1000px");

        $(this)
          .stop()
          .animate({ "margin-left": tr }, 400, "easeInOutQuad", function () {
            cover.css("display", "none");
            if (subNum != 0) {
              subInit();
              mainNum = 1;
            }
          });
      } else {
        /* 일반 케이스 */
        $(this)
          .stop()
          .animate({ "margin-left": tr }, 400, "easeInOutQuad", function () {
            cover.css("display", "none");
          });
      }

      $("#mainBanner").children(".bulCon").thumbOn();
      imgChange();
    },

    subRotation: function () {
      searchTxtSet();
      var tr = -840 * subNum;
      $(this).stop().animate({ left: tr }, 400, "easeInOutQuad");
      $("#mainBanner").find(".bannerCon3").find(".menuCon").subThumbOn();
    },

    mainMove: function () {
      var _this = $(this);

      mainInterval = setInterval(function () {
        pMainNum = mainNum;
        mainNum++;
        if (mainNum > 3) {
          mainNum = 0;
        }

        if (mainNum == 0) {
          bg.bgSlide("#f8f7f6");
        }
        _this.mainRotation();
        if (mainNum == 3 && subNum == 0) {
          clearInterval(mainInterval);
          bg.bgSlide("#8333e7");
          subRoCon.subMove();
        }

        //mainNum++;
      }, 5000);
    },
    /* Today Best 3 */
    subMove: function () {
      var _this = $(this);
      subInterval = setInterval(function () {
        subNum++;
        //alert(subNum);
        if (subNum == 2) {
          bg.bgSlide("#52b11e");
        }
        if (subNum > 2) {
          clearInterval(subInterval);
          bg.bgSlide("#f8f7f6");
          pMainNum = 3;
          mainNum = 0;
          mainRoCon.mainRotation();
          mainRoCon.mainMove();
        } else {
          _this.subRotation();
        }
      }, 5000);
    },

    bgSlide: function (color) {
      $(this).css("background-color", color);
      $(this).css("left", winWid());

      $(this)
        .stop()
        .animate({ left: 0 }, 500, "easeInOutCubic", function () {
          $("#container").css("background-color", color);
          $(this).css("left", winWid());
        });
    },

    thumbInit: function () {
      $(this)
        .find("a")
        .each(function () {
          $(this).children("img").unbind("mouseenter mouseleave");
          $(this).bind({
            click: function (e) {
              if (mainNum != $(this).index()) {
                recordDefault();

                if (mainNum == 3) {
                  isCover = false;
                } else {
                  isCover = true;
                }

                mainNum = $(this).index();
                subInit();
                mainRoCon.mainRotation();
                if (mainNum == 3 && subNum == 0) {
                  bg.bgSlide("#8333e7");
                } else {
                  bg.bgSlide("#f8f7f6");
                }
              }

              e.preventDefault();
            },
          });
        });
    },

    thumbOn: function () {
      $(this)
        .find("a")
        .each(function () {
          var src;
          if ($(this).index() == mainNum) {
            src = $(this).children("img").attr("src").replace("_off", "_on");
            $(this).children("img").attr("src", src);
          } else {
            src = $(this).children("img").attr("src").replace("_on", "_off");
            $(this).children("img").attr("src", src);
          }
        });
    },

    subThumbInit: function () {
      $(this)
        .find("a")
        .each(function () {
          $(this).children("img").unbind("mouseenter mouseleave");
          $(this).bind({
            click: function (e) {
              recordDefault();
              mainNum = 3;
              subNum = $(this).parent().index();

              subRoCon.subRotation();
              if (subNum == 2) {
                bg.bgSlide("#52b11e");
              } else {
                bg.bgSlide("#8333e7");
              }

              e.preventDefault();
            },
          });
        });
    },

    subThumbOn: function () {
      $(this)
        .find("a")
        .each(function () {
          var src;
          if ($(this).parent().index() == subNum) {
            $(this).parent().addClass("on");
            src = $(this).children("img").attr("src").replace("_off", "_on");
            $(this).children("img").attr("src", src);
          } else {
            $(this).parent().removeClass("on");
            src = $(this).children("img").attr("src").replace("_on", "_off");
            $(this).children("img").attr("src", src);
          }
        });
    },

    prevBtnSet: function () {
      $(this).bind({
        click: function (e) {
          e.preventDefault();
          recordDefault();

          mainNum--;
          if (mainNum < 0) {
            mainNum = 3;
            mainRoCon.css("margin-left", "-3600px");
          }
          subInit();
          if (mainNum == 2) {
            isCover = false;
          } else {
            isCover = true;
          }
          mainRoCon.mainRotation();

          if (mainNum == 3 && subNum == 0) {
            bg.bgSlide("#8333e7");
          } else {
            bg.bgSlide("#f8f7f6");
          }
        },
      });
    },

    nextBtnSet: function () {
      $(this).bind({
        click: function (e) {
          e.preventDefault();
          recordDefault();
          pMainNum = mainNum;
          mainNum++;
          if (mainNum > 3) {
            mainNum = 0;
            mainRoCon.css("margin-left", "900px");
          }

          mainRoCon.mainRotation();
          subInit();
          if (mainNum == 3 && subNum == 0) {
            bg.bgSlide("#8333e7");
          } else {
            bg.bgSlide("#f8f7f6");
          }
        },
      });
    },

    /* Today best 3 */
    overView: function () {
      $(this).bind({
        mouseenter: function () {
          tcInterval();
          if (isOpen == false && isClick == false) {
            isOpen = true;
            if ($(this).children(".gray").length > 0) {
              $(this).children(".gray").children("img").pngFix();
              if (!$.browser.msie || $.browser.version >= 9) {
                $(this).children(".gray").stop().animate({ opacity: 1 }, 300, "easeOutCubic");
              } else {
                $(this).children(".gray").stop().animate({ opacity: 0.25 }, 300, "easeOutCubic");
              }
              //li vertical movement
              $(this)
                .parent()
                .each(function () {
                  $(this).liMove($(this).index());
                });
            }

            $(this)
              .children(".black")
              .stop()
              .animate({ opacity: 0.8 }, 200, "easeOutCubic", function () {
                $(this).parent().children(".m_preview").css("opacity", "1");
                if ($(this).parent().parent().children(".record").length > 0) {
                  $(this).parent().parent().children(".record").stop().animate({ left: "58px" }, 300, "easeOutCubic");
                }
              });
          }
        },
        mouseleave: function () {
          if (!isClick) {
            var _this = $(this);
            clearInterval(rInterval);
            isOpen = false;
            $(this).children(".black").stop().animate({ opacity: 0 }, 200, "easeOutCubic");
            $(this).children(".m_preview").css("opacity", "0");

            /* music case */
            if ($(this).children(".gray").length > 0) {
              $(this).children(".gray").stop().animate({ opacity: 0 }, 300, "easeOutCubic");
              $(this).parent().children(".record").stop().animate({ left: "-12px" }, 300, "easeOutCubic");

              setTimeout(function () {
                if (isOpen == false) {
                  _this
                    .parent()
                    .parent()
                    .children("li")
                    .each(function () {
                      $(this).stop().animate({ left: "0" }, 300, "linear");
                      clearInterval(rInterval);
                    });
                }
              }, 400);
            }
            /*  music case end */

            if (isOpen == false) {
              if (subNum < 2) {
                subRoCon.subMove();
              } else {
                mainNum = -1;
                pMainNum = 3;
                clearInterval(subInterval);
                mainRoCon.mainMove();
              }
            }
          }
        },
        click: function () {
          if ($(this).parent().children(".record").length > 0) {
            if (ssNum != $(this).parent().index()) {
              //현재 연주되는 li의 순번이 클릭된 li의 index값과 다를 때
              ssNum = $(this).parent().index();
              $(this)
                .parent()
                .parent()
                .children("li")
                .children(".record_bg")
                .each(function () {
                  $(this).musicPlayerInit();
                });
            }
          } else {
            musicOpen = true;
            player.css("left", 0);
          }
          isClick = true;
        },
      });
    },

    musicPlayerInit: function () {
      if ($(this).parent().index() == ssNum) {
        isOpen = true;
        $(this).children(".gray").children("img").pngFix();
        if (!$.browser.msie || $.browser.version >= 9) {
          $(this).children(".gray").stop().animate({ opacity: 1 }, 300, "easeOutCubic");
        } else {
          $(this).children(".gray").stop().animate({ opacity: 0.25 }, 300, "easeOutCubic");
        }
        $(this)
          .parent()
          .each(function () {
            $(this).liMove($(this).index());
          });

        $(this)
          .children(".black")
          .stop()
          .animate({ opacity: 0.8 }, 200, "easeOutCubic", function () {
            $(this).parent().children(".m_preview").css("opacity", "1");
            if ($(this).parent().parent().children(".record").length > 0) {
              $(this)
                .parent()
                .parent()
                .children(".record")
                .stop()
                .animate({ left: "58px" }, 300, "easeOutCubic", function () {
                  $(this).parent().children(".record").find("span").recordMove();
                  /*for flash player*/
                  $(this).parent().children(".record_bg").children(".m_preview").find("img").hide();
                  musicPlayerInsert(ssNum);
                  /*end for flash player*/
                });
            }
          });
      } else {
        clearInterval(rInterval);
        isOpen = false;
        $(this).children(".black").stop().animate({ opacity: 0 }, 200, "easeOutCubic");
        /*for flash player*/
        $(this).children(".m_preview").find("object").remove();
        $(this).children(".m_preview").prepend('<div id="musicPlayer0"></div>');
        $(this).children(".m_preview").find("img").show();
        /*end for flash player*/
        $(this).children(".m_preview").css("opacity", "0");

        $(this).children(".gray").stop().animate({ opacity: 0 }, 300, "easeOutCubic");
        $(this).parent().children(".record").stop().animate({ left: "-12px" }, 300, "easeOutCubic");
        setTimeout(function () {
          if (isOpen == false) {
            $(this)
              .parent()
              .parent()
              .children("li")
              .each(function () {
                $(this).stop().animate({ left: "0" }, 300, "linear");
                clearInterval(rInterval);
              });
          }
        }, 400);
      }
    },

    recordMove: function () {
      var _this = $(this);
      rInterval = setInterval(function () {
        var tr = parseInt(_this.css("top"));
        if (tr < -2050) {
          tr = 191;
        }
        _this.css("top", tr - 191 + "px");
      }, 80);
    },

    liMove: function (n) {
      if (n == 0) {
        $(this).stop().animate({ left: "-30px" }, 300, "linear");
        $(this).parent().children(".second").stop().animate({ left: "0px" }, 300, "linear");
        $(this).parent().children(".last").stop().animate({ left: "0px" }, 300, "linear");
      } else if (n == 1) {
        $(this).parent().children(".first").stop().animate({ left: "-20px" }, 300, "linear");
        $(this).stop().animate({ left: "-10px" }, 300, "linear");
        $(this).parent().children(".last").stop().animate({ left: "20px" }, 300, "linear");
      } else if (n == 2) {
        $(this).parent().children(".first").stop().animate({ left: "-20px" }, 300, "linear");
        $(this).parent().children(".second").stop().animate({ left: "-20px" }, 300, "linear");
        $(this).stop().animate({ left: "-10px" }, 300, "linear");
      } else if (n == -1) {
        $(this).parent().children(".first").stop().animate({ left: 0 }, 300, "linear");
        $(this).parent().children(".second").stop().animate({ left: "0px" }, 300, "linear");
        $(this).parent().children(".last").stop().animate({ left: 0 }, 300, "linear");
      }
    },
  });

  function recordDefault() {
    $("div#con1 ul li .record_bg").each(function () {
      $(this).parent().liMove(-1);

      if (ssNum == $(this).parent().index()) {
        //		alert($(this).find('.black').css('opacity'));
        $(this).find(".black").css("opacity", 0);
        //$(this).find('.black').stop().animate({'opacity':0},200,'easeOutCubic');
        $(this).find(".m_preview").find("object").remove();
        $(this).find(".m_preview").prepend('<div id="musicPlayer0"></div>');
        $(this).find(".m_preview").find("img").show();

        $(this).find(".m_preview").css("opacity", "0");
        //$(this).find('.gray').stop().animate({'opacity':0},300,'easeOutCubic');
        $(this).find(".gray").css("opacity", 0);
        $(this).parent().children(".record").stop().animate({ left: "-12px" }, 100, "easeOutCubic");
        setTimeout(function () {
          if (isOpen == false) {
            $(this)
              .parent()
              .parent()
              .children("li")
              .each(function () {
                $(this).stop().animate({ left: "0" }, 100, "linear");
                clearInterval(rInterval);
              });
          }
        }, 100);
      }
    });
    isClick = false;
    isOpen = false;
    ssNum = -1;
  }
  function musicPlayerInsert(num) {
    var pqs = new ParsedQueryString();
    var parameterNames = pqs.params(false);
    var parameters = {
      src: "http://mediapm.edgesuite.net/osmf/content/test/train_1500.mp3",
      autoPlay: "true",
      verbose: true,
      playButtonOverlay: false,
      controlBarAutoHide: "false",
      controlBarPosition: "bottom",
      poster: "images/sample.jpg",
      preview: "false",
      subject: "사랑먼지(노래제목입니다.이 끝이 최대입니다.)",
      name: "Britney Spears - 가수명입니다.",
    };

    for (var i = 0; i < parameterNames.length; i++) {
      var parameterName = parameterNames[i];
      parameters[parameterName] = pqs.param(parameterName) || parameters[parameterName];
    }

    var wmodeValue = "window";
    var wmodeOptions = ["direct", "opaque", "transparent", "window"];
    if (parameters.hasOwnProperty("wmode")) {
      if (wmodeOptions.indexOf(parameters.wmode) >= 0) {
        wmodeValue = parameters.wmode;
      }
      delete parameters.wmode;
    }

    // Embed the player SWF:
    var str = "musicPlayer" + num;
    swfobject.embedSWF(
      "tMpPlayer_type02.swf",
      str,
      89,
      80,
      "10.1.0",
      "expressInstall.swf",
      parameters,
      {
        allowFullScreen: "true",
        wmode: wmodeValue,
      },
      {
        name: "tMpPlayer_type02",
      },
    );
  }

  /* 상단 조그만 이미지들 */
  function imgChange() {
    var cNum = mainNum;
    /* toy image change*/
    var r = toy.children(".left").find("a").children("img").attr("src");
    var c = "../resources/img/main/small" + cNum + "_0.png";
    if (r != c) {
      toy
        .children(".left")
        .stop()
        .animate({ left: "-100px" }, 300, "easeOutQuad", function () {
          var l = "../resources/img/main/small" + cNum + "_0.png";

          $(this).find("a").children("img").attr("src", l);
          $(this)
            .stop()
            .animate({ left: 0 }, 300, "easeOutQuad", function () {
              toy.children(".right").stop().animate({ right: 0 }, 250, "easeOutQuad");
            });
        });

      toy
        .children(".right")
        .stop()
        .animate({ right: "-100px" }, 300, "easeOutQuad", function () {
          var r = "../resources/img/main/small" + cNum + "_1.png";
          $(this).find("a").children("img").attr("src", r);
          //				$(this).stop().animate({'right':0},400,'easeOutQuad');
        });
    }
  }

  function tcInterval() {
    clearInterval(mainInterval);
    clearInterval(subInterval);
  }

  function subInit() {
    subRoCon.css("left", "0");
    subNum = 0;
    $("#mainBanner").find(".bannerCon3").find(".menuCon").subThumbOn();
  }

  function searchTxtSet() {
    if (mainNum < 3 && subNum < 2) {
      $(".searchTop .notice a").css("color", "#7f7f7f");
    } else if (mainNum == 3 && subNum < 2) {
      $(".searchTop .notice a").css("color", "#491a85");
    } else if (subNum == 2) {
      $(".searchTop .notice a").css("color", "#347b0d");
    } else if (subNum > 2) {
      $(".searchTop .notice a").css("color", "#7f7f7f");
    }
    //		alert('mainNum= '+mainNum+' subNum= '+subNum);
  }

  var mainRoCon = $("#mainBanner").children(".totalCon").children(".contentsCon").children("#realCon");

  mainRoCon.mainMove(); /*default rolling*/

  var bg = $(".ccBgCon");

  var subRoCon = $(".contentCon").children(".rollCon");

  $("#mainBanner").children(".bulCon").thumbInit();

  $("#mainBanner")
    .find("a")
    .each(function (e) {
      $(this).bind({
        mouseenter: function () {
          tcInterval();
        },
        mouseleave: function () {
          if (mainNum < 3) {
            mainRoCon.mainMove();
          } else {
            subRoCon.subMove();
          }
        },
      });
    });
  $("#toyContainer")
    .find("a")
    .each(function (e) {
      $(this).bind({
        mouseenter: function () {
          tcInterval();
        },
        mouseleave: function () {
          if (mainNum < 3) {
            mainRoCon.mainMove();
          } else {
            subRoCon.subMove();
          }
        },
      });
    });

  $("#toyContainer")
    .children("span.left")
    .find("a")
    .bind("click", function (e) {
      e.preventDefault();
    });
  $("#toyContainer").children("span.left").find("a").prevBtnSet();
  $("#toyContainer")
    .children("span.right")
    .find("a")
    .bind("click", function (e) {
      e.preventDefault();
    });
  $("#toyContainer").children("span.right").find("a").nextBtnSet();

  $("#mainBanner").children("a.prevBtn").prevBtnSet();
  $("#mainBanner")
    .children("a.prevBtn")
    .find("img")
    .bind({
      mouseenter: function () {
        imageOver($(this));
      },
      mouseleave: function () {
        imageOut($(this));
      },
    });
  $("#mainBanner").children("a.nextBtn").nextBtnSet();
  $("#mainBanner")
    .children("a.nextBtn")
    .find("img")
    .bind({
      mouseenter: function () {
        imageOver($(this));
      },
      mouseleave: function () {
        imageOut($(this));
      },
    });

  //내폰에 설치하기 버튼
  $("a.btnOnOver").each(function () {
    $(this)
      .find("img")
      .bind({
        mouseenter: function () {
          imageOver($(this));
        },
        mouseleave: function () {
          imageOut($(this));
        },
        click: function () {
          $("section#popContainer").css("left", "0");
          $("section#popContainer .mask").css("left", "0");
        },
      });
  });

  //lnb 내폰에 설치하기 버튼,ok캐쉬백 포인트 충전
  $("aside")
    .find("img.onoff")
    .each(function () {
      $(this).unbind("mouseenter");
    });
  $("aside")
    .find("img.onoff")
    .each(function () {
      $(this).unbind("mouseleave");
    });
  $("aside")
    .find("img.onoff")
    .each(function () {
      $(this).bind({
        mouseenter: function () {
          imageOver($(this));
        },
        mouseleave: function () {
          imageOut($(this));
        },
      });
    });
  $("#gnb")
    .find("img.onoff")
    .each(function () {
      $(this).unbind("mouseenter");
    });
  $("#gnb")
    .find("img.onoff")
    .each(function () {
      $(this).unbind("mouseleave");
    });
  $("#gnb")
    .find("img.onoff")
    .each(function () {
      $(this).bind({
        mouseenter: function () {
          imageOver($(this));
        },
        mouseleave: function () {
          imageOut($(this));
        },
      });
    });
  //popup
  function popPos() {
    var popup = $("section#popContainer .layer_popup2");
    var wid = 0.5 * ($(window).width() - popup.width());
    var hei = 0.5 * ($(window).height() - popup.height());
    popup.css({ top: hei, left: wid });
  }

  $("section#popContainer .close").bind("click", function () {
    $(this).parent().parent().css("left", "-10000px");
    $(this).parent().parent().children(".mask").css("left", "-10000px");
  });
  $("section#popContainer .mask").bind("click", function () {
    $(this).parent().css("left", "-10000px");
    $(this).css("left", "-10000px");
  });

  //프로모션 버튼
  $("p.btn")
    .find("a")
    .each(function () {
      $(this)
        .find("img")
        .bind({
          mouseenter: function () {
            imageOver($(this));
          },
          mouseleave: function () {
            imageOut($(this));
          },
        });
    });

  $("#mainBanner").find(".bannerCon3").find(".menuCon").subThumbInit();

  $("#mainArticle .closeBtn").toggle(
    function () {
      var src = $(this).children("img").attr("src").replace("pr", "pr0");
      $(this).children("img").attr("src", src);
      $(this).parent().stop().animate({ right: "-301px" }, 300, "easeOutCubic");
    },
    function () {
      var src = $(this).children("img").attr("src").replace("pr0", "pr");
      $(this).children("img").attr("src", src);
      $(this).parent().stop().animate({ right: 0 }, 300, "easeOutCubic");
    },
  );

  $("div#con ul li .record_bg").each(function () {
    $(this).overView();
  });
  $("div#con_1 ul li .record_bg").each(function () {
    $(this).overView();
  });
  $("div#con1 ul li .record_bg").each(function () {
    $(this).overView();
  });

  var toy = $("#toyContainer");
  setTimeout(function () {
    toy
      .children(".left")
      .stop()
      .animate({ left: 0 }, 300, "easeOutQuad", function () {
        toy.children(".right").stop().animate({ right: 0 }, 400, "easeOutQuad");
      });
  }, 400);

  var player = $(".playerBg");
  player.find(".closeBtn").bind("click", function (e) {
    musicOpen = false;

    $("div#con ul li .record_bg").each(function () {
      clearInterval(rInterval);
      isOpen = false;
      $(this).children(".black").stop().animate({ opacity: 0 }, 200, "easeOutCubic");
      $(this).children(".m_preview").css("opacity", "0");
    });
    $("div#con_1 ul li .record_bg").each(function () {
      clearInterval(rInterval);
      isOpen = false;
      $(this).children(".black").stop().animate({ opacity: 0 }, 200, "easeOutCubic");
      $(this).children(".m_preview").css("opacity", "0");
    });

    player.css("left", "10000px");
    if (subNum < 2) {
      subRoCon.subMove();
    } else {
      clearInterval(subInterval);
      mainNum = 0;
      mainRoCon.mainMove();
    }
    e.preventDefault();
    isOpen = false;
    isClick = false;
  });

  function winResize() {
    var wid = parseInt($(window).width());
    //alert(typeof(wid));
    if (wid < 1280) {
      $("body").width("1293px");
      //$('html').css('overflow-x','scroll');
    } else {
      $("body").width("auto");
      //$('html').css('overflow-x','hidden');
    }
    if (wid > 1920) {
      $("#wrap").addClass("wide");
      $("footer").css({ position: "fixed", bottom: "0" });
      $("#container.mainContainer").css("height", "100%");
      $(".ccBgCon").css("height", "100%");
    } else {
      $("#wrap").removeClass("wide");
      $("footer").css({ position: "relative", bottom: "auto" });
      $("#container.mainContainer").css("height", "900px");
      $(".ccBgCon").css("height", "900px");
    }
  }
  winResize();
  popPos();

  $(window).resize(function () {
    winResize();
    popPos();
  });
});
