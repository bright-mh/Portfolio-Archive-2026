// JavaScript Document

//png
function setPng24(obj) {
  obj.width = obj.height = 1;
  obj.className = obj.className.replace(/\bpng24\b/i, "");
  obj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + obj.src + "',sizingMethod='image');";
  obj.src = "";
  return "";
}

//GNB
function gnb(a) {
  if (a == "01") {
    $("html").css("overflow-x", "hidden");
    $(".header_bar").css("display", "block");
    $("#gnb1 img").attr("src", "common/img/gnb_coolcatteam_on.gif");
    $("#gnb2 img").attr("src", "common/img/gnb_introduction.gif");
    $("#gnb3 img").attr("src", "common/img/gnb_gamedate.gif");
    $("#gnb4 img").attr("src", "common/img/gnb_fanzone.gif");
    $(".lnb1").css("display", "block");
    $(".lnb2").css("display", "none");
    $(".lnb3").css("display", "none");
    $(".lnb4").css("display", "none");
  } else if (a == "02") {
    $("html").css("overflow-x", "hidden");
    $(".header_bar").css("display", "block");
    $("#gnb1 img").attr("src", "common/img/gnb_coolcatteam.gif");
    $("#gnb2 img").attr("src", "common/img/gnb_introduction_on.gif");
    $("#gnb3 img").attr("src", "common/img/gnb_gamedate.gif");
    $("#gnb4 img").attr("src", "common/img/gnb_fanzone.gif");
    $(".lnb1").css("display", "none");
    $(".lnb2").css("display", "block");
    $(".lnb3").css("display", "none");
    $(".lnb4").css("display", "none");
  } else if (a == "03") {
    $("html").css("overflow-x", "hidden");
    $(".header_bar").css("display", "block");
    $("#gnb1 img").attr("src", "common/img/gnb_coolcatteam.gif");
    $("#gnb2 img").attr("src", "common/img/gnb_introduction.gif");
    $("#gnb3 img").attr("src", "common/img/gnb_gamedate_on.gif");
    $("#gnb4 img").attr("src", "common/img/gnb_fanzone.gif");
    $(".lnb1").css("display", "none");
    $(".lnb2").css("display", "none");
    $(".lnb3").css("display", "block");
    $(".lnb4").css("display", "none");
  } else if (a == "04") {
    $("html").css("overflow-x", "hidden");
    $(".header_bar").css("display", "block");
    $("#gnb1 img").attr("src", "common/img/gnb_coolcatteam.gif");
    $("#gnb2 img").attr("src", "common/img/gnb_introduction.gif");
    $("#gnb3 img").attr("src", "common/img/gnb_gamedate.gif");
    $("#gnb4 img").attr("src", "common/img/gnb_fanzone_on.gif");
    $(".lnb1").css("display", "none");
    $(".lnb2").css("display", "none");
    $(".lnb3").css("display", "none");
    $(".lnb4").css("display", "block");
  }
}

function header_off(a) {
  if (a == "01") {
    $("html").css("overflow-x", "auto");
    $(".header_bar").css("display", "none");
    $("#gnb1 img").attr("src", "common/img/gnb_coolcatteam.gif");
    $("#gnb2 img").attr("src", "common/img/gnb_introduction.gif");
    $("#gnb3 img").attr("src", "common/img/gnb_gamedate.gif");
    $("#gnb4 img").attr("src", "common/img/gnb_fanzone.gif");
    $(".lnb1").css("display", "none");
    $(".lnb2").css("display", "none");
    $(".lnb3").css("display", "none");
    $(".lnb4").css("display", "none");
  }
}

//GNB_a
function gnb_a(a) {
  if (a == "01") {
    $("html").css("overflow-x", "hidden");
    $(".header_bar").css("display", "block");
    $("#gnb1 img").attr("src", "../common/img/gnb_coolcatteam_on.gif");
    $("#gnb2 img").attr("src", "../common/img/gnb_introduction.gif");
    $("#gnb3 img").attr("src", "../common/img/gnb_gamedate.gif");
    $("#gnb4 img").attr("src", "../common/img/gnb_fanzone.gif");
    $(".lnb1").css("display", "block");
    $(".lnb2").css("display", "none");
    $(".lnb3").css("display", "none");
    $(".lnb4").css("display", "none");
  } else if (a == "02") {
    $("html").css("overflow-x", "hidden");
    $(".header_bar").css("display", "block");
    $("#gnb1 img").attr("src", "../common/img/gnb_coolcatteam.gif");
    $("#gnb2 img").attr("src", "../common/img/gnb_introduction_on.gif");
    $("#gnb3 img").attr("src", "../common/img/gnb_gamedate.gif");
    $("#gnb4 img").attr("src", "../common/img/gnb_fanzone.gif");
    $(".lnb1").css("display", "none");
    $(".lnb2").css("display", "block");
    $(".lnb3").css("display", "none");
    $(".lnb4").css("display", "none");
  } else if (a == "03") {
    $("html").css("overflow-x", "hidden");
    $(".header_bar").css("display", "block");
    $("#gnb1 img").attr("src", "../common/img/gnb_coolcatteam.gif");
    $("#gnb2 img").attr("src", "../common/img/gnb_introduction.gif");
    $("#gnb3 img").attr("src", "../common/img/gnb_gamedate_on.gif");
    $("#gnb4 img").attr("src", "../common/img/gnb_fanzone.gif");
    $(".lnb1").css("display", "none");
    $(".lnb2").css("display", "none");
    $(".lnb3").css("display", "block");
    $(".lnb4").css("display", "none");
  } else if (a == "04") {
    $("html").css("overflow-x", "hidden");
    $(".header_bar").css("display", "block");
    $("#gnb1 img").attr("src", "../common/img/gnb_coolcatteam.gif");
    $("#gnb2 img").attr("src", "../common/img/gnb_introduction.gif");
    $("#gnb3 img").attr("src", "../common/img/gnb_gamedate.gif");
    $("#gnb4 img").attr("src", "../common/img/gnb_fanzone_on.gif");
    $(".lnb1").css("display", "none");
    $(".lnb2").css("display", "none");
    $(".lnb3").css("display", "none");
    $(".lnb4").css("display", "block");
  }
}

function header_off(a) {
  if (a == "02") {
    $("html").css("overflow-x", "auto");
    $(".header_bar").css("display", "none");
    $("#gnb1 img").attr("src", "../common/img/gnb_coolcatteam.gif");
    $("#gnb2 img").attr("src", "../common/img/gnb_introduction.gif");
    $("#gnb3 img").attr("src", "../common/img/gnb_gamedate.gif");
    $("#gnb4 img").attr("src", "../common/img/gnb_fanzone.gif");
    $(".lnb1").css("display", "none");
    $(".lnb2").css("display", "none");
    $(".lnb3").css("display", "none");
    $(".lnb4").css("display", "none");
  }
}

function ico_off(a) {
  $(".ico_list").slideUp("fast");
}

//패미리사이트
function family_site(a) {
  if (a == "01") {
    $(".site_list").slideDown("fast");
  } else if (a == "02") {
    $(".site_list").slideUp("fast");
  }
}

//한줄응원 아이콘
var flag_00 = 0;
function ico_coolcat_on() {
  flag_00 = flag_00 + 1;
  if (flag_00 % 2 == "1") {
    $(".ico_list").slideDown("fast");
    $(".cheer_input dt a").css("background-image", "url(../common/img/ico_coolcat_off.gif)");
  } else if (flag_00 % 2 == "0") {
    $(".ico_list").slideUp("fast");
    $(".cheer_input dt a").css("background-image", "url(../common/img/ico_coolcat_on.gif)");
  }
}

function ico_list(num) {
  var $imgsrc = $("#ico_coolcat").attr("src");
  var imgsrc_dot_arr = $imgsrc.split(".");
  var imgsrc_file_name = "";
  var imgsrc_file_extension = "";
  var new_imgsrc_file_name = "";
  for (var i = 0; i < imgsrc_dot_arr.length; i++) {
    if (i == 0) {
      imgsrc_file_name = imgsrc_dot_arr[i];
    } else if (i == imgsrc_dot_arr.length - 1) {
      imgsrc_file_extension = imgsrc_dot_arr[i];
    } else {
      if ($.trim(imgsrc_file_name) == "") {
        imgsrc_file_name = imgsrc_dot_arr[i];
      } else {
        imgsrc_file_name = imgsrc_file_name + "_" + imgsrc_dot_arr[i];
      }
    }
  }

  new_imgsrc_file_name =
    ".." + imgsrc_file_name.substring(0, imgsrc_file_name.length - 2) + num + "." + imgsrc_file_extension;

  $("#ico_coolcat").attr("src", new_imgsrc_file_name);
  $(".ico_list").slideUp("fast");
}

//갤러리 프로모션
function gallery(a) {
  if (a == "01") {
    $(".photo1 .text").css("display", "block");
    $(".photo1 .bg").css("display", "block");
  } else if (a == "02") {
    $(".photo2 .text").css("display", "block");
    $(".photo2 .bg").css("display", "block");
  } else if (a == "03") {
    $(".photo3 .text").css("display", "block");
    $(".photo3 .bg").css("display", "block");
  }
}
function gallery_off(a) {
  if (a == "01") {
    $(".photo1 .text").css("display", "none");
    $(".photo2 .text").css("display", "none");
    $(".photo3 .text").css("display", "none");
    $(".photo1 .bg").css("display", "none");
    $(".photo2 .bg").css("display", "none");
    $(".photo3 .bg").css("display", "none");
  }
}

/* vs */
function vs(a) {
  if (a == "01") {
    $(".vs_box").css("display", "block");
    $(".vs_open").css("display", "none");
  } else if (a == "02") {
    $(".vs_box").css("display", "none");
    $(".vs_open").css("display", "block");
  }
}

/* 인사말 탭 */
function greeting(a) {
  if (a == "01") {
    $(".greeting1").css("display", "block");
    $(".greeting2").css("display", "none");
    $(".greeting_tab1 img").attr("src", "../common/img/greeting_tab1_on.gif");
    $(".greeting_tab2 img").attr("src", "../common/img/greeting_tab2.gif");
    $(".message_greeting").attr("src", "../common/img/message_greeting.gif");
  } else if (a == "02") {
    $(".greeting1").css("display", "none");
    $(".greeting2").css("display", "block");
    $(".greeting_tab1 img").attr("src", "../common/img/greeting_tab1.gif");
    $(".greeting_tab2 img").attr("src", "../common/img/greeting_tab2_on.gif");
    $(".message_greeting").attr("src", "../common/img/message_greeting2.gif");
  }
}

//사이트맵
function sitemap(a) {
  if (a == "01") {
    $(".sitemap").css("display", "block");
    $(".layer_bg").css("display", "block");
    $("html").css("overflow-x", "hidden");
    $("html").css("overflow-y", "hidden");
  } else if (a == "02") {
    $(".sitemap").css("display", "none");
    $(".layer_bg").css("display", "none");
    $("html").css("overflow-x", "auto");
    $("html").css("overflow-y", "auto");
  }
}

/* 포지션 선수 분류 탭 */
function position(a) {
  if (a == "01") {
    $(".position_list1 img").attr("src", "../common/img/tab_player_position1_on.gif");
    $(".position_list2 img").attr("src", "../common/img/tab_player_position2.gif");
    $(".position_list3 img").attr("src", "../common/img/tab_player_position3.gif");
    $(".position_list4 img").attr("src", "../common/img/tab_player_position4.gif");
    $(".guard").css("display", "block");
    $(".forward").css("display", "block");
    $(".center").css("display", "block");
  } else if (a == "02") {
    $(".position_list1 img").attr("src", "../common/img/tab_player_position1.gif");
    $(".position_list2 img").attr("src", "../common/img/tab_player_position2_on.gif");
    $(".position_list3 img").attr("src", "../common/img/tab_player_position3.gif");
    $(".position_list4 img").attr("src", "../common/img/tab_player_position4.gif");
    $(".guard").css("display", "block");
    $(".forward").css("display", "none");
    $(".center").css("display", "none");
  } else if (a == "03") {
    $(".position_list1 img").attr("src", "../common/img/tab_player_position1.gif");
    $(".position_list2 img").attr("src", "../common/img/tab_player_position2.gif");
    $(".position_list3 img").attr("src", "../common/img/tab_player_position3_on.gif");
    $(".position_list4 img").attr("src", "../common/img/tab_player_position4.gif");
    $(".guard").css("display", "none");
    $(".forward").css("display", "block");
    $(".center").css("display", "none");
  } else if (a == "04") {
    $(".position_list1 img").attr("src", "../common/img/tab_player_position1.gif");
    $(".position_list2 img").attr("src", "../common/img/tab_player_position2.gif");
    $(".position_list3 img").attr("src", "../common/img/tab_player_position3.gif");
    $(".position_list4 img").attr("src", "../common/img/tab_player_position4_on.gif");
    $(".guard").css("display", "none");
    $(".forward").css("display", "none");
    $(".center").css("display", "block");
  }
}

/* 선수사진
function player_photo(a){
	if (a == '01'){
	$("#player_photo_img").attr("src","../common/img/player_detail_photo_01_1.jpg");
	}
	else if (a == '02'){
	$("#player_photo_img").attr("src","../common/img/player_detail_photo_01_2.jpg");
	}
		else if (a == '03'){
	$("#player_photo_img").attr("src","../common/img/player_detail_photo_01_3.jpg");
	}
} */
function player_photo(num) {
  var $imgsrc = $("#player_photo_img").attr("src");
  var imgsrc_dot_arr = $imgsrc.split(".");
  var imgsrc_file_name = "";
  var imgsrc_file_extension = "";
  var new_imgsrc_file_name = "";
  for (var i = 0; i < imgsrc_dot_arr.length; i++) {
    if (i == 0) {
      imgsrc_file_name = imgsrc_dot_arr[i];
    } else if (i == imgsrc_dot_arr.length - 1) {
      imgsrc_file_extension = imgsrc_dot_arr[i];
    } else {
      if ($.trim(imgsrc_file_name) == "") {
        imgsrc_file_name = imgsrc_dot_arr[i];
      } else {
        imgsrc_file_name = imgsrc_file_name + "_" + imgsrc_dot_arr[i];
      }
    }
  }

  new_imgsrc_file_name =
    ".." + imgsrc_file_name.substring(0, imgsrc_file_name.length - 2) + num + "." + imgsrc_file_extension;

  $("#player_photo_img").attr("src", new_imgsrc_file_name);
}
