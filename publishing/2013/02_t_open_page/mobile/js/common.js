$.fn.extend({
  searchBlurDefault: function () {
    if ($(this).val() == "검색어 입력" || $(this).val() == "") {
      $(this).val("검색어 입력");
      $(this).css("color", "#bfbfbf ");
      $("#srConClear").css("display", "none");
      $("div#srResultList").css("display", "none");
    }
  },

  searchKeyDownDefault: function () {
    var str = $(this).val().toString();
    if (str.indexOf("검색어 입력") > -1) {
      $(this).val("");
      $(this).css("backgroundPosition", "-10000px bottom");
      $("span#searchBtn").css("display", "none");
      $("#srConClear").css({ display: "block", "margin-top": "10px" });
      $("div#srResultList").css("display", "block");
    }
    $(this).css("color", "#000");
    /*	if($(this).val() != '검색어 입력'){
			$(this).css('color','#000');
		}else{
			$(this).css('color','#bfbfbf ');
		}*/
  },

  searchConClear: function () {
    $("div#srResultList").css("display", "none");
    $("#searchInput").css("color", "#bfbfbf ");
    $("#searchInput").val("검색어 입력");
    $("#srConClear").css("display", "none");
  },

  focusSearch: function () {
    var wid = $(window).width();
    if (wid >= 480) {
      $("#logo").css({ display: "none", top: "-23px" });
      $(".search").css({ float: "none", display: "inline-block", width: "100%" });
    }

    if ($(this).val() == "검색어 입력" || $(this).val() == "") {
      $(this).val("검색어 입력");
      //$(this).css({'background-image':'none','color':'#bfbfbf','width':'100%'});backgroundPosition
      $(this).css({ backgroundPosition: "-10000px bottom", color: "#bfbfbf", width: "100%" });
      $("div.searchBar").css("width", "97%");
      $("div.searchBar span#searchBtn").css("display", "none");
      $("div.search div.pcon").css("display", "none");
      $("div.srConBtn").css("display", "block");
      $("#srConClear").css("display", "block");
    }
  },

  searchListClose: function () {
    var wid = $(window).width();
    if (wid >= 480) {
      $("#logo").css({ float: "left", display: "inline-block", "padding-top": "2px", width: "102px" });
      $(".search").css({ float: "right", display: "inline-block", width: "311px" });
    }

    $("div.srConBtn").css("display", "none");
    $("div.searchBar span#searchBtn").css("display", "block");
    $("div.search div.pcon").css("display", "block");
    $("div#srResultList").css("display", "none");
    $("div.searchBar").css("width", "100%");
    $("#searchInput").val("");
    //$('#searchInput').css({'background':'#f9f9f9 url(images/google.gif)','background-repeat':'no-repeat','background-position':'1px bottom'});
    $("#searchInput").css("backgroundPosition", "1px bottom");
    $("#searchInput").css("color", "#bfbfbf ");
    $("#srConClear").css("display", "none");
  },
});

$.extend({
  listInit: function () {
    var list = $("div.themeBar div.listCon ul li");
    list.each(function () {
      if (panelAry[$(this).index()] != "") {
        //	alert($(this).index());
        $(this).css("background", bgColor[$(this).index()]);
        $(this).find("span.onoff img").attr("src", "images/listplus.png");
      }
    });
  },

  winResize: function () {
    $(window).bind("resize", function () {
      var wid = $(window).width();

      var str = $("#searchInput").val().toString();

      if (str.length > 0) {
        if (wid >= 480) {
          $("#logo").css({ display: "none", top: "-23px" });
          $(".search").css({ float: "none", display: "inline-block", width: "100%" });
        }
      } else {
        if (wid < 480) {
          $("#logo").css({ display: "none", top: "-23px" });
          $(".search").css({ float: "none", display: "block", width: "auto" });
        } else {
          $("#logo").css({ display: "inline-block", top: "0" });
          $(".search").css({ float: "right", display: "inline-block", width: "311px" });
        }
      }
    });
  },
});

var panelAry = new Array();
panelAry = ["#p1", "", "#p2", "", "", "", "", "", "#p5", "", "#p6", "#p7", "#p3", ""];

var siteurlAry = new Array();
siteurlAry = [
  "http://www.nate.com",
  "http://www.esquire.com",
  "http://www.pinterest.com",
  "http://www.loisjeans.com",
  "http://www.daum.net",
  "http://www.pepsi.com",
];

var bgColor = new Array();
bgColor = [
  "#7375c2",
  "#f2b600",
  "#78baa9",
  "#37c5ca",
  "#ec691a",
  "#ec1a1a",
  "#978c70",
  "#1990c7",
  "#c4c34d",
  "#60bb4b",
  "#6bc3d1",
  "#ed9249",
  "#2e2e2e",
  "#d26e9f",
];

$(document).ready(function () {
  $("#searchInput").css("color", "#bfbfbf");
  $("#srConClear").css("display", "none");

  var wid = $(window).width();
  if (wid < 480) {
    $("#logo").animate({ top: "-23px" }, 1000, function () {
      $(this).css("display", "none");
    });
  } else {
    $("#logo").css({ display: "inline-block", top: "0" });
  }

  $("#searchInput")
    .bind("blur", function () {
      $(this).searchListClose();
    })
    .bind("keydown", function (e) {
      $(this).searchKeyDownDefault();
    })
    .focus(function () {
      $(this).focusSearch();
    });

  $("#srConClear").click(function () {
    $(this).searchConClear();
  });

  $("div#srResultList ul li img").each(function () {
    $(this).click(function () {
      var searchText = $(this).parent().children("span").text();
      $("#searchInput").val(searchText);
    });
  });

  $("div#srResultList ul li span:not(.noList,.srClose)").each(function () {
    $(this).click(function () {
      alert($(this).parent().index());
    });
  });

  $(".liLast span.noList").click(function () {
    $(this).searchConClear();
  });

  $(".liLast span.srClose").bind("click", function () {
    $(this).searchListClose();
  });

  //사이트 바로가기 링크
  $("div.siteCon div.siteList ul li").each(function () {
    $(this).click(function () {
      var num = $(this).index();
      var url = siteurlAry[num];
      window.open(url);
    });
  });

  //화제의 영상 바로가기 링크
  $("div.movieCon div.movieList ul li").each(function () {
    $(this).click(function () {
      alert($(this).index());
    });
  });
  //주요 뉴스 바로가기 링크
  $("div.newsCon div.movieList ul li").each(function () {
    $(this).click(function () {
      alert($(this).index());
    });
  });

  //오늘의 추천
  $("div.recommendCon div.movieList ul li").each(function () {
    $(this).click(function () {
      alert($(this).index());
    });
  });

  //오늘 하루 특가
  /*$('div.shoppingCon div.shoppingList ul li').each(function(){
		$(this).click(function(){
			alert($(this).index());
		});	
	});*/
  //오늘의 추천2
  $("div.recommendCon2 div.shoppingList ul li").each(function () {
    $(this).click(function () {
      alert($(this).index());
    });
  });
  //오늘의 추천3
  $("div.recommendCon3 div.shoppingList2 ul li").each(function () {
    $(this).click(function () {
      alert($(this).index());
    });
  });

  //리스트 셀렉트

  $.listInit();

  var list = $("div.themeBar div.listCon ul li span.onoff");
  list.find("img").each(function () {
    $(this).bind("click", function (e) {
      var v;
      var srcimg = $(this).attr("src").toString();

      if (srcimg.indexOf("minus") > -1) {
        //alert($(this).index());
        v = $(this).attr("src").replace("minus", "plus");
        $(this).attr("src", v);
        $(this).parent().parent().css("background", bgColor[$(this).parent().parent().index()]);
      } else {
        v = $(this).attr("src").replace("plus", "minus");
        $(this).attr("src", v);
        $(this).parent().parent().css("background", "#d6d6d6");
      }
    });
  });

  $("div.search div.pcon").bind("click", function () {
    $("div#wrap").animate({ left: "-300px" }, 250, "easeOutExpo");
    $("div.themeBar").css("display", "block");
    $("div.themeBar").animate({ right: "-15px" }, 250, "easeOutExpo");
  });

  $("div.themeBar").swipe({
    swipeRight: function (event, direction, distance, duration, fingerCount) {
      //alert( 'aaaaa');
      $("div#wrap").animate({ left: "0" }, 250, "easeOutExpo");
      $(this).animate({ right: "-303px" }, 250, "easeOutExpo", function (e) {
        $("div.themeBar").css("display", "none");
      });
    }, //Default is 75px, set to 0 for demo so any distance triggers swipe
    threshold: 0,
  });

  //날씨 리스트 셀렉트
  var wlist = $("div.weatherBar div.listCon ul li");
  wlist.each(function () {
    $(this).bind("click", function (e) {
      var img = $(this).find("span.onoff");
      if (img.css("display") != "none") {
        $(this).css("background", "#d0d0d0");
        img.css("display", "none");
      } else {
        $(this).css("background", "#78baa9");
        img.css("display", "block");
      }
    });
  });

  $("div.sub .sub_header a.btn_go").bind("click", function (e) {
    $("div.sub").animate({ left: "-300px" }, 250, "easeOutExpo");
    $("div.weatherBar").css("display", "block");
    $("div.weatherBar").animate({ right: "-15px" }, 250, "easeOutExpo");
    e.preventDefault();
  });

  $("div.weatherBar").swipe({
    swipeRight: function (event, direction, distance, duration, fingerCount) {
      //alert( 'aaaaa');
      $("div.sub").animate({ left: "0" }, 250, "easeOutExpo");
      $(this).animate({ right: "-303px" }, 250, "easeOutExpo", function (e) {
        $("div.weatherBar").css("display", "none");
      });
    }, //Default is 75px, set to 0 for demo so any distance triggers swipe
    threshold: 0,
  });

  $.winResize();
});
