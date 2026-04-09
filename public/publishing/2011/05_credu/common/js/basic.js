// JavaScript Document

//png
function setPng24(obj) {
  obj.width = obj.height = 1;
  obj.className = obj.className.replace(/\bpng24\b/i, "");
  obj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + obj.src + "',sizingMethod='image');";
  obj.src = "";
  return "";
}

function promotion(a) {
  if (a == "01") {
    $(".promotion_btn1 > img").css("display", "none");
    $(".promotion_btn2 > img").css("display", "block");
    $(".promotion_btn3 > img").css("display", "block");
    $(".promotion_btn4 > img").css("display", "block");
    $(".promotion_btn5 > img").css("display", "block");
    $(".promotion_btn6 > img").css("display", "block");
    $(".promotion_btn7 > img").css("display", "block");
    $(".promotion_btn8 > img").css("display", "block");
    $(".promotion_btn1 > span").css("display", "block");
    $(".promotion_btn2 > span").css("display", "none");
    $(".promotion_btn3 > span").css("display", "none");
    $(".promotion_btn4 > span").css("display", "none");
    $(".promotion_btn5 > span").css("display", "none");
    $(".promotion_btn6 > span").css("display", "none");
    $(".promotion_btn7 > span").css("display", "none");
    $(".promotion_btn8 > span").css("display", "none");
    $(".promotion_list > ul").animate({ left: 0 }, 500);
  } else if (a == "02") {
    $(".promotion_btn1 > img").css("display", "block");
    $(".promotion_btn2 > img").css("display", "none");
    $(".promotion_btn3 > img").css("display", "block");
    $(".promotion_btn4 > img").css("display", "block");
    $(".promotion_btn5 > img").css("display", "block");
    $(".promotion_btn6 > img").css("display", "block");
    $(".promotion_btn7 > img").css("display", "block");
    $(".promotion_btn8 > img").css("display", "block");
    $(".promotion_btn1 > span").css("display", "none");
    $(".promotion_btn2 > span").css("display", "block");
    $(".promotion_btn3 > span").css("display", "none");
    $(".promotion_btn4 > span").css("display", "none");
    $(".promotion_btn5 > span").css("display", "none");
    $(".promotion_btn6 > span").css("display", "none");
    $(".promotion_btn7 > span").css("display", "none");
    $(".promotion_btn8 > span").css("display", "none");
    $(".promotion_list > ul").animate({ left: -508 }, 500);
  } else if (a == "03") {
    $(".promotion_btn1 > img").css("display", "block");
    $(".promotion_btn2 > img").css("display", "block");
    $(".promotion_btn3 > img").css("display", "none");
    $(".promotion_btn4 > img").css("display", "block");
    $(".promotion_btn5 > img").css("display", "block");
    $(".promotion_btn6 > img").css("display", "block");
    $(".promotion_btn7 > img").css("display", "block");
    $(".promotion_btn8 > img").css("display", "block");
    $(".promotion_btn1 > span").css("display", "none");
    $(".promotion_btn2 > span").css("display", "none");
    $(".promotion_btn3 > span").css("display", "block");
    $(".promotion_btn4 > span").css("display", "none");
    $(".promotion_btn5 > span").css("display", "none");
    $(".promotion_btn6 > span").css("display", "none");
    $(".promotion_btn7 > span").css("display", "none");
    $(".promotion_btn8 > span").css("display", "none");
    $(".promotion_list > ul").animate({ left: -1016 }, 500);
  } else if (a == "04") {
    $(".promotion_btn1 > img").css("display", "block");
    $(".promotion_btn2 > img").css("display", "block");
    $(".promotion_btn3 > img").css("display", "block");
    $(".promotion_btn4 > img").css("display", "none");
    $(".promotion_btn5 > img").css("display", "block");
    $(".promotion_btn6 > img").css("display", "block");
    $(".promotion_btn7 > img").css("display", "block");
    $(".promotion_btn8 > img").css("display", "block");
    $(".promotion_btn1 > span").css("display", "none");
    $(".promotion_btn2 > span").css("display", "none");
    $(".promotion_btn3 > span").css("display", "none");
    $(".promotion_btn4 > span").css("display", "block");
    $(".promotion_btn5 > span").css("display", "none");
    $(".promotion_btn6 > span").css("display", "none");
    $(".promotion_btn7 > span").css("display", "none");
    $(".promotion_btn8 > span").css("display", "none");
    $(".promotion_list > ul").animate({ left: -1524 }, 500);
  } else if (a == "05") {
    $(".promotion_btn1 > img").css("display", "block");
    $(".promotion_btn2 > img").css("display", "block");
    $(".promotion_btn3 > img").css("display", "block");
    $(".promotion_btn4 > img").css("display", "block");
    $(".promotion_btn5 > img").css("display", "none");
    $(".promotion_btn6 > img").css("display", "block");
    $(".promotion_btn7 > img").css("display", "block");
    $(".promotion_btn8 > img").css("display", "block");
    $(".promotion_btn1 > span").css("display", "none");
    $(".promotion_btn2 > span").css("display", "none");
    $(".promotion_btn3 > span").css("display", "none");
    $(".promotion_btn4 > span").css("display", "none");
    $(".promotion_btn5 > span").css("display", "block");
    $(".promotion_btn6 > span").css("display", "none");
    $(".promotion_btn7 > span").css("display", "none");
    $(".promotion_btn8 > span").css("display", "none");
    $(".promotion_list > ul").animate({ left: -2032 }, 500);
  } else if (a == "06") {
    $(".promotion_btn1 > img").css("display", "block");
    $(".promotion_btn2 > img").css("display", "block");
    $(".promotion_btn3 > img").css("display", "block");
    $(".promotion_btn4 > img").css("display", "block");
    $(".promotion_btn5 > img").css("display", "block");
    $(".promotion_btn6 > img").css("display", "none");
    $(".promotion_btn7 > img").css("display", "block");
    $(".promotion_btn8 > img").css("display", "block");
    $(".promotion_btn1 > span").css("display", "none");
    $(".promotion_btn2 > span").css("display", "none");
    $(".promotion_btn3 > span").css("display", "none");
    $(".promotion_btn4 > span").css("display", "none");
    $(".promotion_btn5 > span").css("display", "none");
    $(".promotion_btn6 > span").css("display", "block");
    $(".promotion_btn7 > span").css("display", "none");
    $(".promotion_btn8 > span").css("display", "none");
    $(".promotion_list > ul").animate({ left: -2540 }, 500);
  } else if (a == "07") {
    $(".promotion_btn1 > img").css("display", "block");
    $(".promotion_btn2 > img").css("display", "block");
    $(".promotion_btn3 > img").css("display", "block");
    $(".promotion_btn4 > img").css("display", "block");
    $(".promotion_btn5 > img").css("display", "block");
    $(".promotion_btn6 > img").css("display", "block");
    $(".promotion_btn7 > img").css("display", "none");
    $(".promotion_btn8 > img").css("display", "block");
    $(".promotion_btn1 > span").css("display", "none");
    $(".promotion_btn2 > span").css("display", "none");
    $(".promotion_btn3 > span").css("display", "none");
    $(".promotion_btn4 > span").css("display", "none");
    $(".promotion_btn5 > span").css("display", "none");
    $(".promotion_btn6 > span").css("display", "none");
    $(".promotion_btn7 > span").css("display", "block");
    $(".promotion_btn8 > span").css("display", "none");
    $(".promotion_list > ul").animate({ left: -3048 }, 500);
  } else if (a == "08") {
    $(".promotion_btn1 > img").css("display", "block");
    $(".promotion_btn2 > img").css("display", "block");
    $(".promotion_btn3 > img").css("display", "block");
    $(".promotion_btn4 > img").css("display", "block");
    $(".promotion_btn5 > img").css("display", "block");
    $(".promotion_btn6 > img").css("display", "block");
    $(".promotion_btn7 > img").css("display", "block");
    $(".promotion_btn8 > img").css("display", "none");
    $(".promotion_btn1 > span").css("display", "none");
    $(".promotion_btn2 > span").css("display", "none");
    $(".promotion_btn3 > span").css("display", "none");
    $(".promotion_btn4 > span").css("display", "none");
    $(".promotion_btn5 > span").css("display", "none");
    $(".promotion_btn6 > span").css("display", "none");
    $(".promotion_btn7 > span").css("display", "none");
    $(".promotion_btn8 > span").css("display", "block");
    $(".promotion_list > ul").animate({ left: -3556 }, 500);
  }
}

function lecture_best5(a) {
  if (a == "01") {
    $(".lecture_best5_all").css("display", "block");
    $(".lecture_best5_opic").css("display", "none");
    $(".lecture_best5_en").css("display", "none");
    $(".lecture_best5_ch").css("display", "none");
    $(".lecture_best5_tab1 > a").addClass("on");
    $(".lecture_best5_tab2 > a").removeClass("on");
    $(".lecture_best5_tab3 > a").removeClass("on");
    $(".lecture_best5_tab4 > a").removeClass("on");
  } else if (a == "02") {
    $(".lecture_best5_all").css("display", "none");
    $(".lecture_best5_opic").css("display", "block");
    $(".lecture_best5_en").css("display", "none");
    $(".lecture_best5_ch").css("display", "none");
    $(".lecture_best5_tab1 > a").removeClass("on");
    $(".lecture_best5_tab2 > a").addClass("on");
    $(".lecture_best5_tab3 > a").removeClass("on");
    $(".lecture_best5_tab4 > a").removeClass("on");
  } else if (a == "03") {
    $(".lecture_best5_all").css("display", "none");
    $(".lecture_best5_opic").css("display", "none");
    $(".lecture_best5_en").css("display", "block");
    $(".lecture_best5_ch").css("display", "none");
    $(".lecture_best5_tab1 > a").removeClass("on");
    $(".lecture_best5_tab2 > a").removeClass("on");
    $(".lecture_best5_tab3 > a").addClass("on");
    $(".lecture_best5_tab4 > a").removeClass("on");
  } else if (a == "04") {
    $(".lecture_best5_all").css("display", "none");
    $(".lecture_best5_opic").css("display", "none");
    $(".lecture_best5_en").css("display", "none");
    $(".lecture_best5_ch").css("display", "block");
    $(".lecture_best5_tab1 > a").removeClass("on");
    $(".lecture_best5_tab2 > a").removeClass("on");
    $(".lecture_best5_tab3 > a").removeClass("on");
    $(".lecture_best5_tab4 > a").addClass("on");
  }
}

function offline_course(a) {
  if (a == "01") {
    $(".offline_gangnam").css("display", "block");
    $(".offline_gangbuk").css("display", "none");
    $(".offline_course_tab1 > a").addClass("on");
    $(".offline_course_tab2 > a").removeClass("on");
  } else if (a == "02") {
    $(".offline_gangnam").css("display", "none");
    $(".offline_gangbuk").css("display", "block");
    $(".offline_course_tab1 > a").removeClass("on");
    $(".offline_course_tab2 > a").addClass("on");
  }
}

function book_store(a) {
  if (a == "01") {
    $(".book_store_best").css("display", "block");
    $(".book_store_new").css("display", "none");
    $(".book_store_tab1 > a").addClass("on");
    $(".book_store_tab2 > a").removeClass("on");
  } else if (a == "02") {
    $(".book_store_best").css("display", "none");
    $(".book_store_new").css("display", "block");
    $(".book_store_tab1 > a").removeClass("on");
    $(".book_store_tab2 > a").addClass("on");
  }
}

function today_study(a) {
  if (a == "01") {
    $(".today_study_en").css("display", "block");
    $(".today_study_ch").css("display", "none");
    $(".today_study_jp").css("display", "none");
    $(".today_study_tab1 > a").addClass("on");
    $(".today_study_tab2 > a").removeClass("on");
    $(".today_study_tab3 > a").removeClass("on");
  } else if (a == "02") {
    $(".today_study_en").css("display", "none");
    $(".today_study_ch").css("display", "block");
    $(".today_study_jp").css("display", "none");
    $(".today_study_tab1 > a").removeClass("on");
    $(".today_study_tab2 > a").addClass("on");
    $(".today_study_tab3 > a").removeClass("on");
  } else if (a == "03") {
    $(".today_study_en").css("display", "none");
    $(".today_study_ch").css("display", "none");
    $(".today_study_jp").css("display", "block");
    $(".today_study_tab1 > a").removeClass("on");
    $(".today_study_tab2 > a").removeClass("on");
    $(".today_study_tab3 > a").addClass("on");
  }
}

function job_ready(a) {
  if (a == "01") {
    $(".job_ready_list1").fadeIn("fast");
    $(".job_ready_list2").fadeOut("fast");
    $(".job_ready_list3").fadeOut("fast");
    $(".job_ready_tab1 > span").addClass("on");
    $(".job_ready_tab2 > span").removeClass("on");
    $(".job_ready_tab3 > span").removeClass("on");
  } else if (a == "02") {
    $(".job_ready_list1").fadeOut("fast");
    $(".job_ready_list2").fadeIn("fast");
    $(".job_ready_list3").fadeOut("fast");
    $(".job_ready_tab1 > span").removeClass("on");
    $(".job_ready_tab2 > span").addClass("on");
    $(".job_ready_tab3 > span").removeClass("on");
  } else if (a == "03") {
    $(".job_ready_list1").fadeOut("fast");
    $(".job_ready_list2").fadeOut("fast");
    $(".job_ready_list3").fadeIn("fast");
    $(".job_ready_tab1 > span").removeClass("on");
    $(".job_ready_tab2 > span").removeClass("on");
    $(".job_ready_tab3 > span").addClass("on");
  }
}

function test_effect(a) {
  if (a == "01") {
    $(".test_effect1 > a").animate({ height: 180 }, 300);
    $(".test_effect2 > a").animate({ height: 0 }, 300);
    $(".test_effect3 > a").animate({ height: 0 }, 300);
    $(".test_effect1 > span").addClass("on");
    $(".test_effect2 > span").removeClass("on");
    $(".test_effect3 > span").removeClass("on");
    $(".test_effect2 > span").animate({ height: 30 }, 300);
    $(".test_effect > ul").removeClass("on");
  } else if (a == "02") {
    $(".test_effect1 > a").animate({ height: 0 }, 300);
    $(".test_effect2 > a").animate({ height: 178 }, 300);
    $(".test_effect3 > a").animate({ height: 0 }, 300);
    $(".test_effect1 > span").removeClass("on");
    $(".test_effect2 > span").addClass("on");
    $(".test_effect3 > span").removeClass("on");
    $(".test_effect2 > span").animate({ height: 32 }, 300);
    $(".test_effect > ul").removeClass("on");
  } else if (a == "03") {
    $(".test_effect1 > a").animate({ height: 0 }, 300);
    $(".test_effect2 > a").animate({ height: 0 }, 300);
    $(".test_effect3 > a").animate({ height: 177 }, 300);
    $(".test_effect1 > span").removeClass("on");
    $(".test_effect2 > span").removeClass("on");
    $(".test_effect3 > span").addClass("on");
    $(".test_effect2 > span").animate({ height: 32 }, 300);
    $(".test_effect > ul").addClass("on");
  }
}

function familysite(a) {
  if (a == "01") {
    $(".familysite > div").slideDown("fast");
  } else if (a == "02") {
    $(".familysite > div").slideUp("fast");
  }
}

function left_menu(a) {
  if (a == "01") {
    $(".left_menu1 > ul").slideDown("fast");
    $(".left_menu2 > ul").slideUp("fast");
    $(".left_menu3 > ul").slideUp("fast");
    $(".left_menu4 > ul").slideUp("fast");
    $(".left_menu5 > ul").slideUp("fast");
    $(".left_menu6 > ul").slideUp("fast");
    $(".left_menu7 > ul").slideUp("fast");
    $(".left_menu8 > ul").slideUp("fast");
  } else if (a == "02") {
    $(".left_menu1 > ul").slideUp("fast");
    $(".left_menu2 > ul").slideDown("fast");
    $(".left_menu3 > ul").slideUp("fast");
    $(".left_menu4 > ul").slideUp("fast");
    $(".left_menu5 > ul").slideUp("fast");
    $(".left_menu6 > ul").slideUp("fast");
    $(".left_menu7 > ul").slideUp("fast");
    $(".left_menu8 > ul").slideUp("fast");
  } else if (a == "03") {
    $(".left_menu1 > ul").slideUp("fast");
    $(".left_menu2 > ul").slideUp("fast");
    $(".left_menu3 > ul").slideDown("fast");
    $(".left_menu4 > ul").slideUp("fast");
    $(".left_menu5 > ul").slideUp("fast");
    $(".left_menu6 > ul").slideUp("fast");
    $(".left_menu7 > ul").slideUp("fast");
    $(".left_menu8 > ul").slideUp("fast");
  } else if (a == "04") {
    $(".left_menu1 > ul").slideUp("fast");
    $(".left_menu2 > ul").slideUp("fast");
    $(".left_menu3 > ul").slideUp("fast");
    $(".left_menu4 > ul").slideDown("fast");
    $(".left_menu5 > ul").slideUp("fast");
    $(".left_menu6 > ul").slideUp("fast");
    $(".left_menu7 > ul").slideUp("fast");
    $(".left_menu8 > ul").slideUp("fast");
  } else if (a == "05") {
    $(".left_menu1 > ul").slideUp("fast");
    $(".left_menu2 > ul").slideUp("fast");
    $(".left_menu3 > ul").slideUp("fast");
    $(".left_menu4 > ul").slideUp("fast");
    $(".left_menu5 > ul").slideDown("fast");
    $(".left_menu6 > ul").slideUp("fast");
    $(".left_menu7 > ul").slideUp("fast");
    $(".left_menu8 > ul").slideUp("fast");
  } else if (a == "06") {
    $(".left_menu1 > ul").slideUp("fast");
    $(".left_menu2 > ul").slideUp("fast");
    $(".left_menu3 > ul").slideUp("fast");
    $(".left_menu4 > ul").slideUp("fast");
    $(".left_menu5 > ul").slideUp("fast");
    $(".left_menu6 > ul").slideDown("fast");
    $(".left_menu7 > ul").slideUp("fast");
    $(".left_menu8 > ul").slideUp("fast");
  } else if (a == "07") {
    $(".left_menu1 > ul").slideUp("fast");
    $(".left_menu2 > ul").slideUp("fast");
    $(".left_menu3 > ul").slideUp("fast");
    $(".left_menu4 > ul").slideUp("fast");
    $(".left_menu5 > ul").slideUp("fast");
    $(".left_menu6 > ul").slideUp("fast");
    $(".left_menu7 > ul").slideDown("fast");
    $(".left_menu8 > ul").slideUp("fast");
  } else if (a == "08") {
    $(".left_menu1 > ul").slideUp("fast");
    $(".left_menu2 > ul").slideUp("fast");
    $(".left_menu3 > ul").slideUp("fast");
    $(".left_menu4 > ul").slideUp("fast");
    $(".left_menu5 > ul").slideUp("fast");
    $(".left_menu6 > ul").slideUp("fast");
    $(".left_menu7 > ul").slideUp("fast");
    $(".left_menu8 > ul").slideDown("fast");
  } else if (a == "00") {
    $(".left_menu1 > ul").slideUp("fast");
    $(".left_menu2 > ul").slideUp("fast");
    $(".left_menu3 > ul").slideUp("fast");
    $(".left_menu4 > ul").slideUp("fast");
    $(".left_menu5 > ul").slideUp("fast");
    $(".left_menu6 > ul").slideUp("fast");
    $(".left_menu7 > ul").slideUp("fast");
    $(".left_menu8 > ul").slideUp("fast");
  }
}

function eng_ad_tab(a) {
  if (a == "01") {
    $(".eng_ad_tab1 > img").css("display", "none");
    $(".eng_ad_tab2 > img").css("display", "block");
    $(".eng_ad_tab3 > img").css("display", "block");
    $(".eng_ad_tab1 > span").css("display", "block");
    $(".eng_ad_tab2 > span").css("display", "none");
    $(".eng_ad_tab3 > span").css("display", "none");
    $(".eng_ad_list1 img").fadeIn("fast");
    $(".eng_ad_list2 img").fadeOut("fast");
    $(".eng_ad_list3 img").fadeOut("fast");
  } else if (a == "02") {
    $(".eng_ad_tab1 > img").css("display", "block");
    $(".eng_ad_tab2 > img").css("display", "none");
    $(".eng_ad_tab3 > img").css("display", "block");
    $(".eng_ad_tab1 > span").css("display", "none");
    $(".eng_ad_tab2 > span").css("display", "block");
    $(".eng_ad_tab3 > span").css("display", "none");
    $(".eng_ad_list1 img").fadeOut("fast");
    $(".eng_ad_list2 img").fadeIn("fast");
    $(".eng_ad_list3 img").fadeOut("fast");
  } else if (a == "03") {
    $(".eng_ad_tab1 > img").css("display", "block");
    $(".eng_ad_tab2 > img").css("display", "block");
    $(".eng_ad_tab3 > img").css("display", "none");
    $(".eng_ad_tab1 > span").css("display", "none");
    $(".eng_ad_tab2 > span").css("display", "none");
    $(".eng_ad_tab3 > span").css("display", "block");
    $(".eng_ad_list1 img").fadeOut("fast");
    $(".eng_ad_list2 img").fadeOut("fast");
    $(".eng_ad_list3 img").fadeIn("fast");
  }
}

function lecture_tab(a) {
  if (a == "01") {
    $(".lecture_info").css("display", "block");
    $(".lecture_index").css("display", "none");
    $(".lecture_tab1 > a").addClass("on");
    $(".lecture_tab2 > a").removeClass("on");
  } else if (a == "02") {
    $(".lecture_info").css("display", "none");
    $(".lecture_index").css("display", "block");
    $(".lecture_tab1 > a").removeClass("on");
    $(".lecture_tab2 > a").addClass("on");
  }
}

function lecture_tab2(a) {
  if (a == "01") {
    $(".lecture_info_list").css("display", "block");
    $(".lecture_index2").css("display", "none");
    $(".lecture_tab3 > a").addClass("on");
    $(".lecture_tab4 > a").removeClass("on");
  } else if (a == "02") {
    $(".lecture_info_list").css("display", "none");
    $(".lecture_index2").css("display", "block");
    $(".lecture_tab3 > a").removeClass("on");
    $(".lecture_tab4 > a").addClass("on");
  }
}

function best_course(a) {
  if (a == "01") {
    $(".best_course_list1 > div").slideDown("fast");
    $(".best_course_list2 > div").slideUp("fast");
    $(".best_course_list3 > div").slideUp("fast");
    $(".best_course_list1 span").addClass("on");
    $(".best_course_list2 span").removeClass("on");
    $(".best_course_list3 span").removeClass("on");
    $(".best_course_img1").css("display", "block");
    $(".best_course_img2").css("display", "none");
    $(".best_course_img3").css("display", "none");
  } else if (a == "02") {
    $(".best_course_list1 > div").slideUp("fast");
    $(".best_course_list2 > div").slideDown("fast");
    $(".best_course_list3 > div").slideUp("fast");
    $(".best_course_list1 span").removeClass("on");
    $(".best_course_list2 span").addClass("on");
    $(".best_course_list3 span").removeClass("on");
    $(".best_course_img1").css("display", "none");
    $(".best_course_img2").css("display", "block");
    $(".best_course_img3").css("display", "none");
  } else if (a == "03") {
    $(".best_course_list1 > div").slideUp("fast");
    $(".best_course_list2 > div").slideUp("fast");
    $(".best_course_list3 > div").slideDown("fast");
    $(".best_course_list1 span").removeClass("on");
    $(".best_course_list2 span").removeClass("on");
    $(".best_course_list3 span").addClass("on");
    $(".best_course_img1").css("display", "none");
    $(".best_course_img2").css("display", "none");
    $(".best_course_img3").css("display", "block");
  }
}

function guide_off(a) {
  if (a == "china") {
    $(".china_guide").css("display", "none");
    $(".visual_china").css("display", "block");
    $(".location").css("display", "block");
  }
}

function album_btn_on(pfix, idx) {
  /*
	pfix : 프리픽스
	idx : 강의코드
	*/
  if (pfix == "A") {
    $(".A_" + idx).css("display", "block");
    $(".B_" + idx).css("display", "none");
    $(".C_" + idx).css("display", "none");
  } else if (pfix == "B") {
    $(".A_" + idx).css("display", "none");
    $(".B_" + idx).css("display", "block");
    $(".C_" + idx).css("display", "none");
  } else if (pfix == "C") {
    $(".A_" + idx).css("display", "none");
    $(".B_" + idx).css("display", "none");
    $(".C_" + idx).css("display", "block");
  }
}

function album_btn_off() {
  $(".album_con .btn span").css("display", "none");
}

function level_show1(a) {
  if (a == "01") {
    $(".level_substance li").removeClass("level_open");
    $("#level_substance01").addClass("level_open");
    $(".level_substance li>div").css("display", "none");
    $("#level_substance01>div").css("display", "block");
  } else if (a == "02") {
    $(".level_substance li").removeClass("level_open");
    $("#level_substance02").addClass("level_open");
    $(".level_substance li>div").css("display", "none");
    $("#level_substance02>div").css("display", "block");
  } else if (a == "03") {
    $(".level_substance li").removeClass("level_open");
    $("#level_substance03").addClass("level_open");
    $(".level_substance li>div").css("display", "none");
    $("#level_substance03>div").css("display", "block");
  } else if (a == "04") {
    $(".level_substance li").removeClass("level_open");
    $("#level_substance04").addClass("level_open");
    $(".level_substance li>div").css("display", "none");
    $("#level_substance04>div").css("display", "block");
  } else if (a == "05") {
    $(".level_substance li").removeClass("level_open");
    $("#level_substance05").addClass("level_open");
    $(".level_substance li>div").css("display", "none");
    $("#level_substance05>div").css("display", "block");
  } else if (a == "06") {
    $(".level_substance li").removeClass("level_open");
    $("#level_substance06").addClass("level_open");
    $(".level_substance li>div").css("display", "none");
    $("#level_substance06>div").css("display", "block");
  } else if (a == "07") {
    $(".level_substance li").removeClass("level_open");
    $("#level_substance07").addClass("level_open");
    $(".level_substance li>div").css("display", "none");
    $("#level_substance07>div").css("display", "block");
  } else if (a == "08") {
    $(".level_substance li").removeClass("level_open");
    $("#level_substance08").addClass("level_open");
    $(".level_substance li>div").css("display", "none");
    $("#level_substance08>div").css("display", "block");
  } else if (a == "09") {
    $(".level_substance li").removeClass("level_open");
    $("#level_substance09").addClass("level_open");
    $(".level_substance li>div").css("display", "none");
    $("#level_substance09>div").css("display", "block");
  } else if (a == "10") {
    $(".level_substance li").removeClass("level_open");
    $("#level_substance10").addClass("level_open");
    $(".level_substance li>div").css("display", "none");
    $("#level_substance10>div").css("display", "block");
  }
}

function package_list(a) {
  if (a == "01") {
    $(".package_tab li:eq(0)").removeClass("package_tab1");
    $(".package_tab li:eq(0)").addClass("package_tab1_on");
    $(".package_tab li:eq(1)").removeClass("package_tab2_on");
    $(".package_tab li:eq(1)").addClass("package_tab2");
    $(".package_tab li:eq(2)").removeClass("package_tab3_on");
    $(".package_tab li:eq(2)").addClass("package_tab3");
    $(".elementary_package").css("display", "block");
    $(".intermediate_package").css("display", "none");
    $(".advanced_package").css("display", "none");
  } else if (a == "02") {
    $(".package_tab li:eq(0)").removeClass("package_tab1_on");
    $(".package_tab li:eq(0)").addClass("package_tab1");
    $(".package_tab li:eq(1)").removeClass("package_tab2");
    $(".package_tab li:eq(1)").addClass("package_tab2_on");
    $(".package_tab li:eq(2)").removeClass("package_tab3_on");
    $(".package_tab li:eq(2)").addClass("package_tab3");
    $(".elementary_package").css("display", "none");
    $(".intermediate_package").css("display", "block");
    $(".advanced_package").css("display", "none");
  } else if (a == "03") {
    $(".package_tab li:eq(0)").removeClass("package_tab1_on");
    $(".package_tab li:eq(0)").addClass("package_tab1");
    $(".package_tab li:eq(1)").removeClass("package_tab2_on");
    $(".package_tab li:eq(1)").addClass("package_tab2");
    $(".package_tab li:eq(2)").removeClass("package_tab3");
    $(".package_tab li:eq(2)").addClass("package_tab3_on");
    $(".elementary_package").css("display", "none");
    $(".intermediate_package").css("display", "none");
    $(".advanced_package").css("display", "block");
  }
}

function receipt_order(a) {
  if (a == "01") {
    $(".receipt_order li a").removeClass("on");
    $(".receipt_order_list1 a").addClass("on");
    $(".receipt_change li a").removeClass("on");
    $(".receipt_change_list1 a").addClass("on");
    $(".receipt_cancle li a").removeClass("on");
    $(".receipt_cancle_list1 a").addClass("on");
    $(".receipt_order_group div").css("display", "none");
    $(".receipt_order1").css("display", "block");
  } else if (a == "02") {
    $(".receipt_order li a").removeClass("on");
    $(".receipt_order_list2 a").addClass("on");
    $(".receipt_change li a").removeClass("on");
    $(".receipt_change_list2 a").addClass("on");
    $(".receipt_cancle li a").removeClass("on");
    $(".receipt_cancle_list2 a").addClass("on");
    $(".receipt_order_group div").css("display", "none");
    $(".receipt_order2").css("display", "block");
  } else if (a == "03") {
    $(".receipt_order li a").removeClass("on");
    $(".receipt_order_list3 a").addClass("on");
    $(".receipt_change li a").removeClass("on");
    $(".receipt_change_list3 a").addClass("on");
    $(".receipt_cancle li a").removeClass("on");
    $(".receipt_cancle_list3 a").addClass("on");
    $(".receipt_order_group div").css("display", "none");
    $(".receipt_order3").css("display", "block");
  } else if (a == "04") {
    $(".receipt_order li a").removeClass("on");
    $(".receipt_order_list4 a").addClass("on");
    $(".receipt_change li a").removeClass("on");
    $(".receipt_change_list4 a").addClass("on");
    $(".receipt_cancle li a").removeClass("on");
    $(".receipt_cancle_list4 a").addClass("on");
    $(".receipt_order_group div").css("display", "none");
    $(".receipt_order4").css("display", "block");
  } else if (a == "05") {
    $(".receipt_order li a").removeClass("on");
    $(".receipt_order_list5 a").addClass("on");
    $(".receipt_order_group div").css("display", "none");
    $(".receipt_order5").css("display", "block");
  } else if (a == "06") {
    $(".receipt_order li a").removeClass("on");
    $(".receipt_order_list6 a").addClass("on");
    $(".receipt_order_group div").css("display", "none");
    $(".receipt_order6").css("display", "block");
  }
}

function recommend_book(a) {
  if (a == "00") {
    $(".main_recommend_book dd a").css("display", "none");
  } else if (a == "01") {
    $(".link1").css("display", "block");
  } else if (a == "02") {
    $(".link2").css("display", "block");
  } else if (a == "03") {
    $(".link3").css("display", "block");
  } else if (a == "04") {
    $(".link4").css("display", "block");
  } else if (a == "05") {
    $(".link5").css("display", "block");
  }
}

function mobile_learning_show(a) {
  if (a == "01") {
    $(".img1 a").css("display", "block");
  } else if (a == "02") {
    $(".img2 a").css("display", "block");
  } else if (a == "03") {
    $(".img3 a").css("display", "block");
  }
}

function mobile_learning_hidden() {
  $(".mobile_learning_img li a").css("display", "none");
}

function realname_tab(a) {
  if (a == "01") {
    $(".realname_check1").css("display", "block");
    $(".realname_check2").css("display", "none");
    $(".realname_tab1 a").addClass("on");
    $(".realname_tab2 a").removeClass("on");
  } else if (a == "02") {
    $(".realname_check1").css("display", "none");
    $(".realname_check2").css("display", "block");
    $(".realname_tab1 a").removeClass("on");
    $(".realname_tab2 a").addClass("on");
  }
}

function find_id_tab(a) {
  if (a == "01") {
    $(".realname_check1").css("display", "block");
    $(".realname_check2").css("display", "none");
    $(".realname_check3").css("display", "none");
    $(".realname_check4").css("display", "block");
    $(".realname_check5").css("display", "none");
    $(".find_id_tab1 a").addClass("on");
    $(".find_id_tab2 a").removeClass("on");
    $(".find_id_tab3 a").removeClass("on");
  } else if (a == "02") {
    $(".realname_check1").css("display", "none");
    $(".realname_check2").css("display", "block");
    $(".realname_check3").css("display", "none");
    $(".realname_check4").css("display", "none");
    $(".realname_check5").css("display", "none");
    $(".find_id_tab1 a").removeClass("on");
    $(".find_id_tab2 a").addClass("on");
    $(".find_id_tab3 a").removeClass("on");
  } else if (a == "03") {
    $(".realname_check1").css("display", "none");
    $(".realname_check2").css("display", "none");
    $(".realname_check3").css("display", "block");
    $(".realname_check4").css("display", "none");
    $(".realname_check5").css("display", "block");
    $(".find_id_tab1 a").removeClass("on");
    $(".find_id_tab2 a").removeClass("on");
    $(".find_id_tab3 a").addClass("on");
  }
}

function question_best(a) {
  if (a == "01") {
    $(".question_best ul a").removeClass("on");
    $(".question_best_list1 a").addClass("on");
    $(".question_details div").css("display", "none");
    $(".question_details1").css("display", "block");
  } else if (a == "02") {
    $(".question_best ul a").removeClass("on");
    $(".question_best_list2 a").addClass("on");
    $(".question_details div").css("display", "none");
    $(".question_details2").css("display", "block");
  } else if (a == "03") {
    $(".question_best ul a").removeClass("on");
    $(".question_best_list3 a").addClass("on");
    $(".question_details div").css("display", "none");
    $(".question_details3").css("display", "block");
  } else if (a == "04") {
    $(".question_best ul a").removeClass("on");
    $(".question_best_list4 a").addClass("on");
    $(".question_details div").css("display", "none");
    $(".question_details4").css("display", "block");
  } else if (a == "05") {
    $(".question_best ul a").removeClass("on");
    $(".question_best_list5 a").addClass("on");
    $(".question_details div").css("display", "none");
    $(".question_details5").css("display", "block");
  } else if (a == "06") {
    $(".question_best ul a").removeClass("on");
    $(".question_best_list6 a").addClass("on");
    $(".question_details div").css("display", "none");
    $(".question_details6").css("display", "block");
  } else if (a == "07") {
    $(".question_best ul a").removeClass("on");
    $(".question_best_list7 a").addClass("on");
    $(".question_details div").css("display", "none");
    $(".question_details7").css("display", "block");
  }
}

var faq_idx = "";
function table_faq(idx) {
  if (faq_idx != "") {
    $("tr.f_" + faq_idx + " td:eq(0)").removeClass("td_range_on");
    $("tr.f_" + faq_idx + " td:eq(0)").addClass("td_range");
    $("tr.f_" + faq_idx + " td:eq(1)").removeClass("show");
    $("div.f_" + faq_idx).css("display", "none");
  }
  $("tr.f_" + idx + " td:eq(0)").removeClass("td_range");
  $("tr.f_" + idx + " td:eq(0)").addClass("td_range_on");
  $("tr.f_" + idx + " td:eq(1)").addClass("show");
  $("div.f_" + idx).css("display", "block");

  faq_idx = idx;
}

var epilogue_idx = "";
function table_epilogue(idx) {
  if (epilogue_idx != "") {
    $(".title span").removeClass("on");
    $("div.z_" + epilogue_idx).css("display", "none");
  }
  $("tr.z_" + idx + " td:eq(1) a span").addClass("on");
  $("div.z_" + idx).css("display", "block");

  epilogue_idx = idx;
}

function language_core_tab(a) {
  if (a == "01") {
    $(".language_core_tab1 a").addClass("on");
    $(".language_core_tab2 a").removeClass("on");
    $(".language_core_tab3 a").removeClass("on");
    $(".language_core1").css("display", "block");
    $(".language_core2").css("display", "none");
    $(".language_core3").css("display", "none");
  } else if (a == "02") {
    $(".language_core_tab1 a").removeClass("on");
    $(".language_core_tab2 a").addClass("on");
    $(".language_core_tab3 a").removeClass("on");
    $(".language_core1").css("display", "none");
    $(".language_core2").css("display", "block");
    $(".language_core3").css("display", "none");
  } else if (a == "03") {
    $(".language_core_tab1 a").removeClass("on");
    $(".language_core_tab2 a").removeClass("on");
    $(".language_core_tab3 a").addClass("on");
    $(".language_core1").css("display", "none");
    $(".language_core2").css("display", "none");
    $(".language_core3").css("display", "block");
  }
}

function language_word_tab(a) {
  if (a == "01") {
    $(".language_word_tab1 a").addClass("on");
    $(".language_word_tab2 a").removeClass("on");
    $(".language_word_tab3 a").removeClass("on");
    $(".language_word1").css("display", "block");
    $(".language_word2").css("display", "none");
    $(".language_word3").css("display", "none");
  } else if (a == "02") {
    $(".language_word_tab1 a").removeClass("on");
    $(".language_word_tab2 a").addClass("on");
    $(".language_word_tab3 a").removeClass("on");
    $(".language_word1").css("display", "none");
    $(".language_word2").css("display", "block");
    $(".language_word3").css("display", "none");
  } else if (a == "03") {
    $(".language_word_tab1 a").removeClass("on");
    $(".language_word_tab2 a").removeClass("on");
    $(".language_word_tab3 a").addClass("on");
    $(".language_word1").css("display", "none");
    $(".language_word2").css("display", "none");
    $(".language_word3").css("display", "block");
  }
}

function member_word_tab(a) {
  if (a == "01") {
    $(".member_word_tab1 a").addClass("on");
    $(".member_word_tab2 a").removeClass("on");
    $(".member_word_tab3 a").removeClass("on");
    $(".member_word1").css("display", "block");
    $(".member_word2").css("display", "none");
    $(".member_word3").css("display", "none");
  } else if (a == "02") {
    $(".member_word_tab1 a").removeClass("on");
    $(".member_word_tab2 a").addClass("on");
    $(".member_word_tab3 a").removeClass("on");
    $(".member_word1").css("display", "none");
    $(".member_word2").css("display", "block");
    $(".member_word3").css("display", "none");
  } else if (a == "03") {
    $(".member_word_tab1 a").removeClass("on");
    $(".member_word_tab2 a").removeClass("on");
    $(".member_word_tab3 a").addClass("on");
    $(".member_word1").css("display", "none");
    $(".member_word2").css("display", "none");
    $(".member_word3").css("display", "block");
  }
}

function member_point_tab(a) {
  if (a == "01") {
    $(".member_point_tab1 a").addClass("on");
    $(".member_point_tab2 a").removeClass("on");
    $(".member_point_tab3 a").removeClass("on");
    $(".member_point1").css("display", "block");
    $(".member_point2").css("display", "none");
    $(".member_point3").css("display", "none");
  } else if (a == "02") {
    $(".member_point_tab1 a").removeClass("on");
    $(".member_point_tab2 a").addClass("on");
    $(".member_point_tab3 a").removeClass("on");
    $(".member_point1").css("display", "none");
    $(".member_point2").css("display", "block");
    $(".member_point3").css("display", "none");
  } else if (a == "03") {
    $(".member_point_tab1 a").removeClass("on");
    $(".member_point_tab2 a").removeClass("on");
    $(".member_point_tab3 a").addClass("on");
    $(".member_point1").css("display", "none");
    $(".member_point2").css("display", "none");
    $(".member_point3").css("display", "block");
  }
}

function vitamin_tab(a) {
  if (a == "01") {
    $(".vitamin_tab1 a").addClass("on");
    $(".vitamin_tab2 a").removeClass("on");
    $(".my_vitamin").css("display", "block");
    $(".vitamin_info").css("display", "none");
  } else if (a == "02") {
    $(".vitamin_tab1 a").removeClass("on");
    $(".vitamin_tab2 a").addClass("on");
    $(".my_vitamin").css("display", "none");
    $(".vitamin_info").css("display", "block");
  }
}

function my_use_tab(a) {
  if (a == "01") {
    $(".use_tab1 a").addClass("on");
    $(".use_tab2 a").removeClass("on");
    $(".my_use1").css("display", "block");
    $(".my_use2").css("display", "none");
  } else if (a == "02") {
    $(".use_tab1 a").removeClass("on");
    $(".use_tab2 a").addClass("on");
    $(".my_use1").css("display", "none");
    $(".my_use2").css("display", "block");
  }
}

function etest_tab(a) {
  if (a == "01") {
    $(".about_etest a").addClass("on");
    $(".benefit_etest a").removeClass("on");
    $(".employment_etest1").css("display", "block");
    $(".employment_etest2").css("display", "none");
  } else if (a == "02") {
    $(".about_etest a").removeClass("on");
    $(".benefit_etest a").addClass("on");
    $(".employment_etest1").css("display", "none");
    $(".employment_etest2").css("display", "block");
  }
}

function tab_open() {
  $(".enterprise_list").css("display", "none");
  $(".enterprise_list_all").css("display", "block");
}

function tab_close() {
  $(".enterprise_list").css("display", "block");
  $(".enterprise_list_all").css("display", "none");
}

function category_area(a) {
  if (a == "01") {
    $(".category_area1_top1 a").addClass("on");
    $(".category_area1_top2 a").removeClass("on");
    $(".category_area1_01").css("display", "block");
    $(".category_area1_02").css("display", "none");
  } else if (a == "02") {
    $(".category_area1_top1 a").removeClass("on");
    $(".category_area1_top2 a").addClass("on");
    $(".category_area1_01").css("display", "none");
    $(".category_area1_02").css("display", "block");
  }
}

function ie6_modal_open() {
  $("html").removeClass("html-ie6");
  $("html").addClass("html-ie6-on");
}
function ie6_modal_close() {
  $("html").addClass("html-ie6");
  $("html").removeClass("html-ie6-on");
}

function free_day_open(a) {
  if (a == "01") {
    $(".free_3min_topic div.box").css("display", "block");
    $(".free_3min_topic .open").css("display", "none");
    $(".free_3min_topic .close").css("display", "block");
  } else if (a == "02") {
    $(".free_3min_script div.box").css("display", "block");
    $(".free_3min_script .open").css("display", "none");
    $(".free_3min_script .close").css("display", "block");
  } else if (a == "03") {
    $(".free_3min_exp div.box").css("display", "block");
    $(".free_3min_exp .open").css("display", "none");
    $(".free_3min_exp .close").css("display", "block");
  } else if (a == "04") {
    $(".free_3min_teacher div.box").css("display", "block");
    $(".free_3min_teacher .open").css("display", "none");
    $(".free_3min_teacher .close").css("display", "block");
  } else if (a == "05") {
    $(".free_3min_question div.box").css("display", "block");
    $(".free_3min_question .open").css("display", "none");
    $(".free_3min_question .close").css("display", "block");
  } else if (a == "06") {
    $(".free_3min_sample div.box").css("display", "block");
    $(".free_3min_sample .open").css("display", "none");
    $(".free_3min_sample .close").css("display", "block");
  } else if (a == "07") {
    $(".free_3min_teacher2 div.box").css("display", "block");
    $(".free_3min_teacher2 .open").css("display", "none");
    $(".free_3min_teacher2 .close").css("display", "block");
  }
}

function free_day_close(a) {
  if (a == "01") {
    $(".free_3min_topic div.box").css("display", "none");
    $(".free_3min_topic .open").css("display", "block");
    $(".free_3min_topic .close").css("display", "none");
  } else if (a == "02") {
    $(".free_3min_script div.box").css("display", "none");
    $(".free_3min_script .open").css("display", "block");
    $(".free_3min_script .close").css("display", "none");
  } else if (a == "03") {
    $(".free_3min_exp div.box").css("display", "none");
    $(".free_3min_exp .open").css("display", "block");
    $(".free_3min_exp .close").css("display", "none");
  } else if (a == "04") {
    $(".free_3min_teacher div.box").css("display", "none");
    $(".free_3min_teacher .open").css("display", "block");
    $(".free_3min_teacher .close").css("display", "none");
  } else if (a == "05") {
    $(".free_3min_question div.box").css("display", "none");
    $(".free_3min_question .open").css("display", "block");
    $(".free_3min_question .close").css("display", "none");
  } else if (a == "06") {
    $(".free_3min_sample div.box").css("display", "none");
    $(".free_3min_sample .open").css("display", "block");
    $(".free_3min_sample .close").css("display", "none");
  } else if (a == "07") {
    $(".free_3min_teacher2 div.box").css("display", "none");
    $(".free_3min_teacher2 .open").css("display", "block");
    $(".free_3min_teacher2 .close").css("display", "none");
  }
}

function free_read(a) {
  if (a == "01") {
    $(".free_read_open").css("display", "block");
    $(".free_read_close").css("display", "none");
  } else if (a == "02") {
    $(".free_read_open").css("display", "none");
    $(".free_read_close").css("display", "block");
  }
}

function problem_view(a) {
  if (a == "01") {
    $(".analysis_box p.text_cont").css("display", "block");
    $(".analysis_box p.text_btn").css("display", "none");
  } else if (a == "02") {
    $(".point_box p.text_cont").css("display", "block");
    $(".point_box p.text_btn").css("display", "none");
  } else if (a == "03") {
    $(".reply_box p.text_cont").css("display", "block");
    $(".reply_box p.text_btn").css("display", "none");
  }
}

function lnb_bar_close() {
  $("div.lnb").slideUp("fast");
  $("div.bg_lnb").slideUp("fast");
  $("dl.lnb1").slideUp("fast");
  $("dl.lnb2").slideUp("fast");
  $("dl.lnb3").slideUp("fast");
  $("dl.lnb4").slideUp("fast");
  $("dl.lnb5").slideUp("fast");
  $("dl.lnb6").slideUp("fast");
  $("dl.lnb7").slideUp("fast");
  $("dl.lnb8").slideUp("fast");
  $("dl.lnb9").slideUp("fast");
  $("dl.lnb10").slideUp("fast");
  $("dl.lnb11").slideUp("fast");
}
function lnb_menu(a) {
  if (a == "01") {
    $("div.lnb").slideDown("fast");
    $("div.bg_lnb").slideDown("fast");
    $("dl.lnb1").slideDown("fast");
    $("dl.lnb2").slideUp("fast");
    $("dl.lnb3").slideUp("fast");
    $("dl.lnb4").slideUp("fast");
    $("dl.lnb5").slideUp("fast");
    $("dl.lnb6").slideUp("fast");
    $("dl.lnb7").slideUp("fast");
    $("dl.lnb8").slideUp("fast");
    $("dl.lnb9").slideUp("fast");
    $("dl.lnb10").slideUp("fast");
    $("dl.lnb11").slideUp("fast");
  } else if (a == "02") {
    $("div.lnb").slideDown("fast");
    $("div.bg_lnb").slideDown("fast");
    $("dl.lnb1").slideUp("fast");
    $("dl.lnb2").slideDown("fast");
    $("dl.lnb3").slideUp("fast");
    $("dl.lnb4").slideUp("fast");
    $("dl.lnb5").slideUp("fast");
    $("dl.lnb6").slideUp("fast");
    $("dl.lnb7").slideUp("fast");
    $("dl.lnb8").slideUp("fast");
    $("dl.lnb9").slideUp("fast");
    $("dl.lnb10").slideUp("fast");
    $("dl.lnb11").slideUp("fast");
  } else if (a == "03") {
    $("div.lnb").slideDown("fast");
    $("div.bg_lnb").slideDown("fast");
    $("dl.lnb1").slideUp("fast");
    $("dl.lnb2").slideUp("fast");
    $("dl.lnb3").slideDown("fast");
    $("dl.lnb4").slideUp("fast");
    $("dl.lnb5").slideUp("fast");
    $("dl.lnb6").slideUp("fast");
    $("dl.lnb7").slideUp("fast");
    $("dl.lnb8").slideUp("fast");
    $("dl.lnb9").slideUp("fast");
    $("dl.lnb10").slideUp("fast");
    $("dl.lnb11").slideUp("fast");
  } else if (a == "04") {
    $("div.lnb").slideDown("fast");
    $("div.bg_lnb").slideDown("fast");
    $("dl.lnb1").slideUp("fast");
    $("dl.lnb2").slideUp("fast");
    $("dl.lnb3").slideUp("fast");
    $("dl.lnb4").slideDown("fast");
    $("dl.lnb5").slideUp("fast");
    $("dl.lnb6").slideUp("fast");
    $("dl.lnb7").slideUp("fast");
    $("dl.lnb8").slideUp("fast");
    $("dl.lnb9").slideUp("fast");
    $("dl.lnb10").slideUp("fast");
    $("dl.lnb11").slideUp("fast");
  } else if (a == "05") {
    $("div.lnb").slideDown("fast");
    $("div.bg_lnb").slideDown("fast");
    $("dl.lnb1").slideUp("fast");
    $("dl.lnb2").slideUp("fast");
    $("dl.lnb3").slideUp("fast");
    $("dl.lnb4").slideUp("fast");
    $("dl.lnb5").slideDown("fast");
    $("dl.lnb6").slideUp("fast");
    $("dl.lnb7").slideUp("fast");
    $("dl.lnb8").slideUp("fast");
    $("dl.lnb9").slideUp("fast");
    $("dl.lnb10").slideUp("fast");
    $("dl.lnb11").slideUp("fast");
  } else if (a == "06") {
    $("div.lnb").slideDown("fast");
    $("div.bg_lnb").slideDown("fast");
    $("dl.lnb1").slideUp("fast");
    $("dl.lnb2").slideUp("fast");
    $("dl.lnb3").slideUp("fast");
    $("dl.lnb4").slideUp("fast");
    $("dl.lnb5").slideUp("fast");
    $("dl.lnb6").slideDown("fast");
    $("dl.lnb7").slideUp("fast");
    $("dl.lnb8").slideUp("fast");
    $("dl.lnb9").slideUp("fast");
    $("dl.lnb10").slideUp("fast");
    $("dl.lnb11").slideUp("fast");
  } else if (a == "07") {
    $("div.lnb").slideDown("fast");
    $("div.bg_lnb").slideDown("fast");
    $("dl.lnb1").slideUp("fast");
    $("dl.lnb2").slideUp("fast");
    $("dl.lnb3").slideUp("fast");
    $("dl.lnb4").slideUp("fast");
    $("dl.lnb5").slideUp("fast");
    $("dl.lnb6").slideUp("fast");
    $("dl.lnb7").slideDown("fast");
    $("dl.lnb8").slideUp("fast");
    $("dl.lnb9").slideUp("fast");
    $("dl.lnb10").slideUp("fast");
    $("dl.lnb11").slideUp("fast");
  } else if (a == "08") {
    $("div.lnb").slideDown("fast");
    $("div.bg_lnb").slideDown("fast");
    $("dl.lnb1").slideUp("fast");
    $("dl.lnb2").slideUp("fast");
    $("dl.lnb3").slideUp("fast");
    $("dl.lnb4").slideUp("fast");
    $("dl.lnb5").slideUp("fast");
    $("dl.lnb6").slideUp("fast");
    $("dl.lnb7").slideUp("fast");
    $("dl.lnb8").slideDown("fast");
    $("dl.lnb9").slideUp("fast");
    $("dl.lnb10").slideUp("fast");
    $("dl.lnb11").slideUp("fast");
  } else if (a == "09") {
    $("div.lnb").slideDown("fast");
    $("div.bg_lnb").slideDown("fast");
    $("dl.lnb1").slideUp("fast");
    $("dl.lnb2").slideUp("fast");
    $("dl.lnb3").slideUp("fast");
    $("dl.lnb4").slideUp("fast");
    $("dl.lnb5").slideUp("fast");
    $("dl.lnb6").slideUp("fast");
    $("dl.lnb7").slideUp("fast");
    $("dl.lnb8").slideUp("fast");
    $("dl.lnb9").slideDown("fast");
    $("dl.lnb10").slideUp("fast");
    $("dl.lnb11").slideUp("fast");
  } else if (a == "10") {
    $("div.lnb").slideDown("fast");
    $("div.bg_lnb").slideDown("fast");
    $("dl.lnb1").slideUp("fast");
    $("dl.lnb2").slideUp("fast");
    $("dl.lnb3").slideUp("fast");
    $("dl.lnb4").slideUp("fast");
    $("dl.lnb5").slideUp("fast");
    $("dl.lnb6").slideUp("fast");
    $("dl.lnb7").slideUp("fast");
    $("dl.lnb8").slideUp("fast");
    $("dl.lnb9").slideUp("fast");
    $("dl.lnb10").slideDown("fast");
    $("dl.lnb11").slideUp("fast");
  } else if (a == "11") {
    $("div.lnb").slideDown("fast");
    $("div.bg_lnb").slideDown("fast");
    $("dl.lnb1").slideUp("fast");
    $("dl.lnb2").slideUp("fast");
    $("dl.lnb3").slideUp("fast");
    $("dl.lnb4").slideUp("fast");
    $("dl.lnb5").slideUp("fast");
    $("dl.lnb6").slideUp("fast");
    $("dl.lnb7").slideUp("fast");
    $("dl.lnb8").slideUp("fast");
    $("dl.lnb9").slideUp("fast");
    $("dl.lnb10").slideUp("fast");
    $("dl.lnb11").slideDown("fast");
  }
}

function bar_box_open(a) {
  $(".bar_box").animate({ height: 150 }, 300);
  $(".bar_open").css("display", "none");
  $(".bar_close").css("display", "block");
  $(".bar_menu").css("display", "none");
  selSubjAjax(1);
}
function bar_box_close(a) {
  $(".bar_box").animate({ height: 0 }, 300);
  $(".bar_open").css("display", "block");
  $(".bar_close").css("display", "none");
  $(".bar_lecture a").removeClass("on");
  $(".bar_today a").removeClass("on");
  $(".bar_cart a").removeClass("on");
  $(".bar_menu").css("display", "block");
}
function bar_info(a) {
  if (a == "01") {
    $("#bar_list_01").css("display", "block");
    $("#bar_list_02").css("display", "none");
    $("#bar_list_03").css("display", "none");
    $(".bar_box").animate({ height: 150 }, 300);
    $(".bar_open").css("display", "none");
    $(".bar_close").css("display", "block");
    $(".bar_lecture a").addClass("on");
    $(".bar_today a").removeClass("on");
    $(".bar_cart a").removeClass("on");
    $(".bar_menu").css("display", "none");
    selSubjAjax(1);
  } else if (a == "02") {
    $("#bar_list_01").css("display", "none");
    $("#bar_list_02").css("display", "block");
    $("#bar_list_03").css("display", "none");
    $(".bar_box").animate({ height: 150 }, 300);
    $(".bar_open").css("display", "none");
    $(".bar_close").css("display", "block");
    $(".bar_lecture a").removeClass("on");
    $(".bar_today a").addClass("on");
    $(".bar_cart a").removeClass("on");
    $(".bar_menu").css("display", "none");
  } else if (a == "03") {
    $("#bar_list_01").css("display", "none");
    $("#bar_list_02").css("display", "none");
    $("#bar_list_03").css("display", "block");
    $(".bar_box").animate({ height: 150 }, 300);
    $(".bar_open").css("display", "none");
    $(".bar_close").css("display", "block");
    $(".bar_lecture a").removeClass("on");
    $(".bar_today a").removeClass("on");
    $(".bar_cart a").addClass("on");
    $(".bar_menu").css("display", "none");

    callCartAjax(1);
  }
}

function instructor_close() {
  $(".instructor_detail").css("display", "none");
  $(".instructor_summary").css("display", "block");
  $(".btn_open").css("display", "block");
  $(".btn_close").css("display", "none");
}
function instructor_info(a) {
  if (a == "01") {
    $("#instructor_01 .instructor_detail").css("display", "block");
    $("#instructor_01 .instructor_summary").css("display", "none");
    $("#instructor_01 .btn_open").css("display", "none");
    $("#instructor_01 .btn_close").css("display", "block");
  } else if (a == "02") {
    $("#instructor_02 .instructor_detail").css("display", "block");
    $("#instructor_02 .instructor_summary").css("display", "none");
    $("#instructor_02 .btn_open").css("display", "none");
    $("#instructor_02 .btn_close").css("display", "block");
  } else if (a == "03") {
    $("#instructor_03 .instructor_detail").css("display", "block");
    $("#instructor_03 .instructor_summary").css("display", "none");
    $("#instructor_03 .btn_open").css("display", "none");
    $("#instructor_03 .btn_close").css("display", "block");
  } else if (a == "04") {
    $("#instructor_04 .instructor_detail").css("display", "block");
    $("#instructor_04 .instructor_summary").css("display", "none");
    $("#instructor_04 .btn_open").css("display", "none");
    $("#instructor_04 .btn_close").css("display", "block");
  } else if (a == "05") {
    $("#instructor_05 .instructor_detail").css("display", "block");
    $("#instructor_05 .instructor_summary").css("display", "none");
    $("#instructor_05 .btn_open").css("display", "none");
    $("#instructor_05 .btn_close").css("display", "block");
  } else if (a == "06") {
    $("#instructor_06 .instructor_detail").css("display", "block");
    $("#instructor_06 .instructor_summary").css("display", "none");
    $("#instructor_06 .btn_open").css("display", "none");
    $("#instructor_06 .btn_close").css("display", "block");
  } else if (a == "07") {
    $("#instructor_07 .instructor_detail").css("display", "block");
    $("#instructor_07 .instructor_summary").css("display", "none");
    $("#instructor_07 .btn_open").css("display", "none");
    $("#instructor_07 .btn_close").css("display", "block");
  } else if (a == "08") {
    $("#instructor_08 .instructor_detail").css("display", "block");
    $("#instructor_08 .instructor_summary").css("display", "none");
    $("#instructor_08 .btn_open").css("display", "none");
    $("#instructor_08 .btn_close").css("display", "block");
  } else if (a == "09") {
    $("#instructor_09 .instructor_detail").css("display", "block");
    $("#instructor_09 .instructor_summary").css("display", "none");
    $("#instructor_09 .btn_open").css("display", "none");
    $("#instructor_09 .btn_close").css("display", "block");
  } else if (a == "10") {
    $("#instructor_10 .instructor_detail").css("display", "block");
    $("#instructor_10 .instructor_summary").css("display", "none");
    $("#instructor_10 .btn_open").css("display", "none");
    $("#instructor_10 .btn_close").css("display", "block");
  }
}

function list_tab(a) {
  if (a == "01") {
    $(".list_tab1 a").addClass("on");
    $(".list_tab2 a").removeClass("on");
  } else if (a == "02") {
    $(".list_tab1 a").removeClass("on");
    $(".list_tab2 a").addClass("on");
  }
}

/* 1201_수정_김명희 */
function visual_eng_tab(a) {
  if (a == "01") {
    $(".visual_tab_list dd>a").removeClass("on");
    $(".visual_eng_tab1 a").addClass("on");
    $(".eng_tab_table1").css("display", "block");
    $(".eng_tab_table2").css("display", "none");
    $(".bg_map_eng1").css("display", "block");
    $(".bg_map_eng2").css("display", "none");
    $(".load_map_china").css("top", "1188px");
  } else if (a == "02") {
    $(".visual_tab_list dd>a").removeClass("on");
    $(".visual_eng_tab2 a").addClass("on");
    $(".eng_tab_table1").css("display", "none");
    $(".eng_tab_table2").css("display", "block");
    $(".bg_map_eng1").css("display", "none");
    $(".bg_map_eng2").css("display", "block");
    $(".load_map_china").css("top", "1460px");
  }
}
/* //1201_수정_김명희 */

function openFlvPlayer(a) {
  if (a == "01") {
    $("#visual_mobile_mov1").css("display", "block");
    $("#visual_mobile_mov2").css("display", "none");
  } else if (a == "02") {
    $("#visual_mobile_mov1").css("display", "none");
    $("#visual_mobile_mov2").css("display", "block");
  } else if (a == "03") {
    $(".mov_opic_flv").css("display", "block");
  }
}

function closeFlvPlayer() {
  $("#visual_mobile_mov1").css("display", "none");
  $("#visual_mobile_mov2").css("display", "none");
  $(".mov_opic_flv").css("display", "none");
}

function openStudyLoadMap() {
  $(".load_map_open").css("display", "block");
}

function openStudyLoadMap2() {
  $(".load_map_open2").css("display", "block");
}

function load_map_close() {
  $(".load_map_open").css("display", "none");
  $(".load_map_open2").css("display", "none");
}

function load_tab_on(a) {
  if (a == "00") {
    $(".eng_tab_on1").css("display", "none");
    $(".eng_tab_on2").css("display", "none");
    $(".opic_tab_on1").css("display", "none");
    $(".opic_tab_on2").css("display", "none");
  } else if (a == "01") {
    $(".eng_tab_on1").css("display", "block");
    $(".opic_tab_on1").css("display", "block");
  } else if (a == "02") {
    $(".eng_tab_on2").css("display", "block");
    $(".opic_tab_on2").css("display", "block");
  }
}

function tab_btn(a) {
  if (a == "01") {
    $(".south a").addClass("on");
    $(".north a").removeClass("on");
    $(".south_list").css("display", "block");
    $(".north_list").css("display", "none");
  } else if (a == "02") {
    $(".north a").addClass("on");
    $(".south a").removeClass("on");
    $(".north_list").css("display", "block");
    $(".south_list").css("display", "none");
  }
}

function opic_app_tab(a) {
  if (a == "01") {
    $(".opic_app_tab1 a").addClass("on");
    $(".opic_app_tab2 a").removeClass("on");
    $(".mobile_opic_app1").css("display", "block");
    $(".mobile_opic_app2").css("display", "none");
  } else if (a == "02") {
    $(".opic_app_tab1 a").removeClass("on");
    $(".opic_app_tab2 a").addClass("on");
    $(".mobile_opic_app1").css("display", "none");
    $(".mobile_opic_app2").css("display", "block");
  }
}

function tooltip(pfix, idx) {
  /*
	pfix : 프리픽스
	idx : 게시글코드
	*/
  if (pfix == "A") {
    $("#A_" + idx).css("display", "block");
    $("#B_" + idx).css("display", "none");
    $("#C_" + idx).css("display", "none");
  } else if (pfix == "B") {
    $("#A_" + idx).css("display", "none");
    $("#B_" + idx).css("display", "block");
    $("#C_" + idx).css("display", "none");
  } else if (pfix == "C") {
    $("#A_" + idx).css("display", "none");
    $("#B_" + idx).css("display", "none");
    $("#C_" + idx).css("display", "block");
  }
}

function tooltip_close() {
  $(".tooltip_none").css("display", "none");
}

function book_store_next(a) {
  if (a == "01") {
    $(".store_best_01").css("display", "none");
    $(".store_best_02").css("display", "block");
    $(".store_best_03").css("display", "none");
  } else if (a == "02") {
    $(".store_best_01").css("display", "none");
    $(".store_best_02").css("display", "none");
    $(".store_best_03").css("display", "block");
  } else if (a == "03") {
    $(".store_best_01").css("display", "block");
    $(".store_best_02").css("display", "none");
    $(".store_best_03").css("display", "none");
  } else if (a == "04") {
    $(".store_new_01").css("display", "none");
    $(".store_new_02").css("display", "block");
    $(".store_new_03").css("display", "none");
  } else if (a == "05") {
    $(".store_new_01").css("display", "none");
    $(".store_new_02").css("display", "none");
    $(".store_new_03").css("display", "block");
  } else if (a == "06") {
    $(".store_new_01").css("display", "block");
    $(".store_new_02").css("display", "none");
    $(".store_new_03").css("display", "none");
  }
}
function book_store_prev(a) {
  if (a == "01") {
    $(".store_best_01").css("display", "none");
    $(".store_best_02").css("display", "none");
    $(".store_best_03").css("display", "block");
  } else if (a == "02") {
    $(".store_best_01").css("display", "block");
    $(".store_best_02").css("display", "none");
    $(".store_best_03").css("display", "none");
  } else if (a == "03") {
    $(".store_best_01").css("display", "none");
    $(".store_best_02").css("display", "block");
    $(".store_best_03").css("display", "none");
  } else if (a == "04") {
    $(".store_new_01").css("display", "none");
    $(".store_new_02").css("display", "none");
    $(".store_new_03").css("display", "block");
  } else if (a == "05") {
    $(".store_new_01").css("display", "block");
    $(".store_new_02").css("display", "none");
    $(".store_new_03").css("display", "none");
  } else if (a == "06") {
    $(".store_new_01").css("display", "none");
    $(".store_new_02").css("display", "block");
    $(".store_new_03").css("display", "none");
  }
}

function lecture_mobile_next(a) {
  if (a == "01") {
    $(".lecture_mobile_01").css("display", "none");
    $(".lecture_mobile_02").css("display", "block");
    $(".lecture_mobile_03").css("display", "none");
    $(".lecture_mobile_04").css("display", "none");
    $(".lecture_mobile_05").css("display", "none");
  } else if (a == "02") {
    $(".lecture_mobile_01").css("display", "none");
    $(".lecture_mobile_02").css("display", "none");
    $(".lecture_mobile_03").css("display", "block");
    $(".lecture_mobile_04").css("display", "none");
    $(".lecture_mobile_05").css("display", "none");
  } else if (a == "03") {
    $(".lecture_mobile_01").css("display", "none");
    $(".lecture_mobile_02").css("display", "none");
    $(".lecture_mobile_03").css("display", "none");
    $(".lecture_mobile_04").css("display", "block");
    $(".lecture_mobile_05").css("display", "none");
  } else if (a == "04") {
    $(".lecture_mobile_01").css("display", "none");
    $(".lecture_mobile_02").css("display", "none");
    $(".lecture_mobile_03").css("display", "none");
    $(".lecture_mobile_04").css("display", "none");
    $(".lecture_mobile_05").css("display", "block");
  } else if (a == "05") {
    $(".lecture_mobile_01").css("display", "block");
    $(".lecture_mobile_02").css("display", "none");
    $(".lecture_mobile_03").css("display", "none");
    $(".lecture_mobile_04").css("display", "none");
    $(".lecture_mobile_05").css("display", "none");
  }
}
function lecture_mobile_prev(a) {
  if (a == "01") {
    $(".lecture_mobile_01").css("display", "none");
    $(".lecture_mobile_02").css("display", "none");
    $(".lecture_mobile_03").css("display", "none");
    $(".lecture_mobile_04").css("display", "none");
    $(".lecture_mobile_05").css("display", "block");
  } else if (a == "02") {
    $(".lecture_mobile_01").css("display", "block");
    $(".lecture_mobile_02").css("display", "none");
    $(".lecture_mobile_03").css("display", "none");
    $(".lecture_mobile_04").css("display", "none");
    $(".lecture_mobile_05").css("display", "none");
  } else if (a == "03") {
    $(".lecture_mobile_01").css("display", "none");
    $(".lecture_mobile_02").css("display", "block");
    $(".lecture_mobile_03").css("display", "none");
    $(".lecture_mobile_04").css("display", "none");
    $(".lecture_mobile_05").css("display", "none");
  } else if (a == "04") {
    $(".lecture_mobile_01").css("display", "none");
    $(".lecture_mobile_02").css("display", "none");
    $(".lecture_mobile_03").css("display", "block");
    $(".lecture_mobile_04").css("display", "none");
    $(".lecture_mobile_05").css("display", "none");
  } else if (a == "05") {
    $(".lecture_mobile_01").css("display", "none");
    $(".lecture_mobile_02").css("display", "none");
    $(".lecture_mobile_03").css("display", "none");
    $(".lecture_mobile_04").css("display", "block");
    $(".lecture_mobile_05").css("display", "none");
  }
}

function recommend_book_next(a) {
  if (a == "01") {
    $(".recommend_book_01").css("display", "none");
    $(".recommend_book_02").css("display", "block");
  } else if (a == "02") {
    $(".recommend_book_01").css("display", "block");
    $(".recommend_book_02").css("display", "none");
  }
}
function recommend_book_prev(a) {
  if (a == "01") {
    $(".recommend_book_01").css("display", "none");
    $(".recommend_book_02").css("display", "block");
  } else if (a == "02") {
    $(".recommend_book_01").css("display", "block");
    $(".recommend_book_02").css("display", "none");
  }
}

function language_free_next(a) {
  if (a == "01") {
    $(".language_free_01").css("display", "none");
    $(".language_free_02").css("display", "block");
    $(".language_free_03").css("display", "none");
    $(".language_free_04").css("display", "none");
    $(".language_free_05").css("display", "none");
  } else if (a == "02") {
    $(".language_free_01").css("display", "none");
    $(".language_free_02").css("display", "none");
    $(".language_free_03").css("display", "block");
    $(".language_free_04").css("display", "none");
    $(".language_free_05").css("display", "none");
  } else if (a == "03") {
    $(".language_free_01").css("display", "none");
    $(".language_free_02").css("display", "none");
    $(".language_free_03").css("display", "none");
    $(".language_free_04").css("display", "block");
    $(".language_free_05").css("display", "none");
  } else if (a == "04") {
    $(".language_free_01").css("display", "none");
    $(".language_free_02").css("display", "none");
    $(".language_free_03").css("display", "none");
    $(".language_free_04").css("display", "none");
    $(".language_free_05").css("display", "block");
  } else if (a == "05") {
    $(".language_free_01").css("display", "block");
    $(".language_free_02").css("display", "none");
    $(".language_free_03").css("display", "none");
    $(".language_free_04").css("display", "none");
    $(".language_free_05").css("display", "none");
  }
}
function language_free_prev(a) {
  if (a == "01") {
    $(".language_free_01").css("display", "none");
    $(".language_free_02").css("display", "none");
    $(".language_free_03").css("display", "none");
    $(".language_free_04").css("display", "none");
    $(".language_free_05").css("display", "block");
  } else if (a == "02") {
    $(".language_free_01").css("display", "block");
    $(".language_free_02").css("display", "none");
    $(".language_free_03").css("display", "none");
    $(".language_free_04").css("display", "none");
    $(".language_free_05").css("display", "none");
  } else if (a == "03") {
    $(".language_free_01").css("display", "none");
    $(".language_free_02").css("display", "block");
    $(".language_free_03").css("display", "none");
    $(".language_free_04").css("display", "none");
    $(".language_free_05").css("display", "none");
  } else if (a == "04") {
    $(".language_free_01").css("display", "none");
    $(".language_free_02").css("display", "none");
    $(".language_free_03").css("display", "block");
    $(".language_free_04").css("display", "none");
    $(".language_free_05").css("display", "none");
  } else if (a == "05") {
    $(".language_free_01").css("display", "none");
    $(".language_free_02").css("display", "none");
    $(".language_free_03").css("display", "none");
    $(".language_free_04").css("display", "block");
    $(".language_free_05").css("display", "none");
  }
}

function left_bn_next(a) {
  if (a == "01") {
    $(".left_bn2_01").css("display", "none");
    $(".left_bn2_02").css("display", "block");
    $(".left_bn2_03").css("display", "none");
  } else if (a == "02") {
    $(".left_bn2_01").css("display", "none");
    $(".left_bn2_02").css("display", "none");
    $(".left_bn2_03").css("display", "block");
  } else if (a == "03") {
    $(".left_bn2_01").css("display", "block");
    $(".left_bn2_02").css("display", "none");
    $(".left_bn2_03").css("display", "none");
  }
}
function left_bn_prev(a) {
  if (a == "01") {
    $(".left_bn2_01").css("display", "none");
    $(".left_bn2_02").css("display", "none");
    $(".left_bn2_03").css("display", "block");
  } else if (a == "02") {
    $(".left_bn2_01").css("display", "block");
    $(".left_bn2_02").css("display", "none");
    $(".left_bn2_03").css("display", "none");
  } else if (a == "03") {
    $(".left_bn2_01").css("display", "none");
    $(".left_bn2_02").css("display", "block");
    $(".left_bn2_03").css("display", "none");
  }
}

/* 1203 추가수정 김신영 */
function best5_on(a) {
  if (a == "01") {
    $(".bg_no1 a").addClass("on");
    $(".bg_no2 a").removeClass("on");
    $(".bg_no3 a").removeClass("on");
    $(".bg_no4 a").removeClass("on");
    $(".bg_no5 a").removeClass("on");
    $(".best5_on_01").css("display", "block");
    $(".best5_on_02").css("display", "none");
    $(".best5_on_03").css("display", "none");
    $(".best5_on_04").css("display", "none");
    $(".best5_on_05").css("display", "none");
  }
  if (a == "02") {
    $(".bg_no1 a").removeClass("on");
    $(".bg_no2 a").addClass("on");
    $(".bg_no3 a").removeClass("on");
    $(".bg_no4 a").removeClass("on");
    $(".bg_no5 a").removeClass("on");
    $(".best5_on_01").css("display", "none");
    $(".best5_on_02").css("display", "block");
    $(".best5_on_03").css("display", "none");
    $(".best5_on_04").css("display", "none");
    $(".best5_on_05").css("display", "none");
  }
  if (a == "03") {
    $(".bg_no1 a").removeClass("on");
    $(".bg_no2 a").removeClass("on");
    $(".bg_no3 a").addClass("on");
    $(".bg_no4 a").removeClass("on");
    $(".bg_no5 a").removeClass("on");
    $(".best5_on_01").css("display", "none");
    $(".best5_on_02").css("display", "none");
    $(".best5_on_03").css("display", "block");
    $(".best5_on_04").css("display", "none");
    $(".best5_on_05").css("display", "none");
  }
  if (a == "04") {
    $(".bg_no1 a").removeClass("on");
    $(".bg_no2 a").removeClass("on");
    $(".bg_no3 a").removeClass("on");
    $(".bg_no4 a").addClass("on");
    $(".bg_no5 a").removeClass("on");
    $(".best5_on_01").css("display", "none");
    $(".best5_on_02").css("display", "none");
    $(".best5_on_03").css("display", "none");
    $(".best5_on_04").css("display", "block");
    $(".best5_on_05").css("display", "none");
  }
  if (a == "05") {
    $(".bg_no1 a").removeClass("on");
    $(".bg_no2 a").removeClass("on");
    $(".bg_no3 a").removeClass("on");
    $(".bg_no4 a").removeClass("on");
    $(".bg_no5 a").addClass("on");
    $(".best5_on_01").css("display", "none");
    $(".best5_on_02").css("display", "none");
    $(".best5_on_03").css("display", "none");
    $(".best5_on_04").css("display", "none");
    $(".best5_on_05").css("display", "block");
  }
}
/* 1203 추가수정 김신영 */
