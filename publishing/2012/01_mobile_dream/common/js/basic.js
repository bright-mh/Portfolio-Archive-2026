// JavaScript Document

//주소창 숨기기
$(function () {
  setTimeout(loaded, 100);
});
function loaded() {
  window.scrollTo(0, 1);
}

//맨위로
function btn_top() {
  if ($(window).scrollTop() > 0) $("html, body").animate({ scrollTop: 0 }, 300);
}

//로그인 체크박스
var flag_01 = 0;
function login_check1() {
  flag_01 = flag_01 + 1;
  if (flag_01 % 2 == "1") $(".dream_login .check1 label").addClass("on");
  else if (flag_01 % 2 == "0") $(".dream_login .check1 label").removeClass("on");
}
var flag_02 = 0;
function login_check2() {
  flag_02 = flag_02 + 1;
  if (flag_02 % 2 == "1") $(".dream_login .check2 label").addClass("on");
  else if (flag_02 % 2 == "0") $(".dream_login .check2 label").removeClass("on");
}

//창업적성검사 그래프 체크박스
var flag_03 = 0;
function graph_check1() {
  flag_03 = flag_03 + 1;
  if (flag_03 % 2 == "1") {
    $(".diagnostic2_graph_tab .check1 label").removeClass("on");
    $("#diagnostic2_canvas2").css("display", "none");
  } else if (flag_03 % 2 == "0") {
    $(".diagnostic2_graph_tab .check1 label").addClass("on");
    $("#diagnostic2_canvas2").css("display", "block");
  }
}
var flag_04 = 0;
function graph_check2() {
  flag_04 = flag_04 + 1;
  if (flag_04 % 2 == "1") {
    $(".diagnostic2_graph_tab .check2 label").removeClass("on");
    $("#diagnostic2_canvas1").css("display", "none");
  } else if (flag_04 % 2 == "0") {
    $(".diagnostic2_graph_tab .check2 label").addClass("on");
    $("#diagnostic2_canvas1").css("display", "block");
  }
}

//모바일학습 탭
function study_detail(a) {
  if (a == "01") {
    $("#tab1").addClass("tab1_on");
    $("#tab1").removeClass("tab1");
    $("#tab2").addClass("tab2");
    $("#tab2").removeClass("tab2_on");
    $(".study_detail_list").css("display", "block");
    $(".study_detail_info").css("display", "none");
  } else if (a == "02") {
    $("#tab1").addClass("tab1");
    $("#tab1").removeClass("tab1_on");
    $("#tab2").addClass("tab2_on");
    $("#tab2").removeClass("tab2");
    $(".study_detail_list").css("display", "none");
    $(".study_detail_info").css("display", "block");
  }
}

//직업선호도검사결과 탭
function diagnostic1_result(a) {
  if (a == "01") {
    $("#tab1").addClass("tab1_on");
    $("#tab1").removeClass("tab1");
    $("#tab2").addClass("tab2");
    $("#tab2").removeClass("tab2_on");
    $("#tab3").addClass("tab3");
    $("#tab3").removeClass("tab3_on");
    $(".diagnostic1_result_01").css("display", "block");
    $(".diagnostic1_result_02").css("display", "none");
    $(".diagnostic1_result_03").css("display", "none");
  } else if (a == "02") {
    $("#tab1").addClass("tab1");
    $("#tab1").removeClass("tab1_on");
    $("#tab2").addClass("tab2_on");
    $("#tab2").removeClass("tab2");
    $("#tab3").addClass("tab3");
    $("#tab3").removeClass("tab3_on");
    $(".diagnostic1_result_01").css("display", "none");
    $(".diagnostic1_result_02").css("display", "block");
    $(".diagnostic1_result_03").css("display", "none");
  } else if (a == "03") {
    $("#tab1").addClass("tab1");
    $("#tab1").removeClass("tab1_on");
    $("#tab2").addClass("tab2");
    $("#tab2").removeClass("tab2_on");
    $("#tab3").addClass("tab3_on");
    $("#tab3").removeClass("tab3");
    $(".diagnostic1_result_01").css("display", "none");
    $(".diagnostic1_result_02").css("display", "none");
    $(".diagnostic1_result_03").css("display", "block");
  }
}

//창업적성검사결과 탭
function diagnostic2_result(a) {
  if (a == "01") {
    $("#tab1").addClass("tab1_on");
    $("#tab1").removeClass("tab1");
    $("#tab2").addClass("tab2");
    $("#tab2").removeClass("tab2_on");
    $(".diagnostic2_result_01").css("display", "block");
    $(".diagnostic2_result_02").css("display", "none");
  } else if (a == "02") {
    $("#tab1").addClass("tab1");
    $("#tab1").removeClass("tab1_on");
    $("#tab2").addClass("tab2_on");
    $("#tab2").removeClass("tab2");
    $(".diagnostic2_result_01").css("display", "none");
    $(".diagnostic2_result_02").css("display", "block");
  }
}

//전체메뉴
function all_view(a) {
  if (a == "01") {
    $(".all_menu").slideDown("fast");
  } else if (a == "02") {
    $(".all_menu").slideUp("fast");
  }
}

//직업상세보기 레이어
function job_layer(a) {
  if (a == "01") {
    $(".job_detail_layer").slideDown("fast");
  } else if (a == "02") {
    $(".job_detail_layer").slideUp("fast");
  }
}

//상세항목보기 레이어
function aptitude_layer(a) {
  if (a == "01") {
    $(".aptitude_detail_layer").slideDown("fast");
  } else if (a == "02") {
    $(".aptitude_detail_layer").slideUp("fast");
  }
}

//검사 프로세스 라디오 버튼 체크
$(document).ready(function () {
  $(".process_list div:eq(0) label").click(function () {
    if (".process_list li div:eq(0) label") {
      $(".process_list li div:eq(0) label").removeClass("on");
      $(this).addClass("on");
    }
  });
  $(".process_list div:eq(1) label").click(function () {
    if (".process_list li div:eq(1) label") {
      $(".process_list li div:eq(1) label").removeClass("on");
      $(this).addClass("on");
    }
  });
  $(".process_list div:eq(2) label").click(function () {
    if (".process_list li div:eq(2) label") {
      $(".process_list li div:eq(2) label").removeClass("on");
      $(this).addClass("on");
    }
  });
  $(".process_list div:eq(3) label").click(function () {
    if (".process_list li div:eq(3) label") {
      $(".process_list li div:eq(3) label").removeClass("on");
      $(this).addClass("on");
    }
  });
  $(".process_list div:eq(4) label").click(function () {
    if (".process_list li div:eq(4) label") {
      $(".process_list li div:eq(4) label").removeClass("on");
      $(this).addClass("on");
    }
  });
  $(".process_list div:eq(5) label").click(function () {
    if (".process_list li div:eq(5) label") {
      $(".process_list li div:eq(5) label").removeClass("on");
      $(this).addClass("on");
    }
  });
  $(".process_list div:eq(6) label").click(function () {
    if (".process_list li div:eq(6) label") {
      $(".process_list li div:eq(6) label").removeClass("on");
      $(this).addClass("on");
    }
  });
  $(".process_list div:eq(7) label").click(function () {
    if (".process_list li div:eq(7) label") {
      $(".process_list li div:eq(7) label").removeClass("on");
      $(this).addClass("on");
    }
  });
  $(".process_list div:eq(8) label").click(function () {
    if (".process_list li div:eq(8) label") {
      $(".process_list li div:eq(8) label").removeClass("on");
      $(this).addClass("on");
    }
  });
  $(".process_list div:eq(9) label").click(function () {
    if (".process_list li div:eq(9) label") {
      $(".process_list li div:eq(9) label").removeClass("on");
      $(this).addClass("on");
    }
  });
  $(".process_list div:eq(10) label").click(function () {
    if (".process_list li div:eq(10) label") {
      $(".process_list li div:eq(10) label").removeClass("on");
      $(this).addClass("on");
    }
  });
  $(".process_list div:eq(11) label").click(function () {
    if (".process_list li div:eq(11) label") {
      $(".process_list li div:eq(11) label").removeClass("on");
      $(this).addClass("on");
    }
  });
  $(".process_list div:eq(12) label").click(function () {
    if (".process_list li div:eq(12) label") {
      $(".process_list li div:eq(12) label").removeClass("on");
      $(this).addClass("on");
    }
  });
  $(".process_list div:eq(13) label").click(function () {
    if (".process_list li div:eq(13) label") {
      $(".process_list li div:eq(13) label").removeClass("on");
      $(this).addClass("on");
    }
  });
  $(".process_list div:eq(14) label").click(function () {
    if (".process_list li div:eq(14) label") {
      $(".process_list li div:eq(14) label").removeClass("on");
      $(this).addClass("on");
    }
  });
  $(".process_list div:eq(15) label").click(function () {
    if (".process_list li div:eq(15) label") {
      $(".process_list li div:eq(15) label").removeClass("on");
      $(this).addClass("on");
    }
  });
  $(".process_list div:eq(16) label").click(function () {
    if (".process_list li div:eq(16) label") {
      $(".process_list li div:eq(16) label").removeClass("on");
      $(this).addClass("on");
    }
  });
  $(".process_list div:eq(17) label").click(function () {
    if (".process_list li div:eq(17) label") {
      $(".process_list li div:eq(17) label").removeClass("on");
      $(this).addClass("on");
    }
  });
  $(".process_list div:eq(18) label").click(function () {
    if (".process_list li div:eq(18) label") {
      $(".process_list li div:eq(18) label").removeClass("on");
      $(this).addClass("on");
    }
  });
  $(".process_list div:eq(19) label").click(function () {
    if (".process_list li div:eq(19) label") {
      $(".process_list li div:eq(19) label").removeClass("on");
      $(this).addClass("on");
    }
  });
  $(".process_list div:eq(20) label").click(function () {
    if (".process_list li div:eq(20) label") {
      $(".process_list li div:eq(20) label").removeClass("on");
      $(this).addClass("on");
    }
  });
  $(".process_list div:eq(21) label").click(function () {
    if (".process_list li div:eq(21) label") {
      $(".process_list li div:eq(21) label").removeClass("on");
      $(this).addClass("on");
    }
  });
  $(".process_list div:eq(22) label").click(function () {
    if (".process_list li div:eq(22) label") {
      $(".process_list li div:eq(22) label").removeClass("on");
      $(this).addClass("on");
    }
  });
  $(".process_list div:eq(23) label").click(function () {
    if (".process_list li div:eq(23) label") {
      $(".process_list li div:eq(23) label").removeClass("on");
      $(this).addClass("on");
    }
  });
  $(".process_list div:eq(24) label").click(function () {
    if (".process_list li div:eq(24) label") {
      $(".process_list li div:eq(24) label").removeClass("on");
      $(this).addClass("on");
    }
  });
  $(".process_list div:eq(25) label").click(function () {
    if (".process_list li div:eq(25) label") {
      $(".process_list li div:eq(25) label").removeClass("on");
      $(this).addClass("on");
    }
  });
  $(".process_list div:eq(26) label").click(function () {
    if (".process_list li div:eq(26) label") {
      $(".process_list li div:eq(26) label").removeClass("on");
      $(this).addClass("on");
    }
  });
  $(".process_list div:eq(27) label").click(function () {
    if (".process_list li div:eq(27) label") {
      $(".process_list li div:eq(27) label").removeClass("on");
      $(this).addClass("on");
    }
  });
  $(".process_list div:eq(28) label").click(function () {
    if (".process_list li div:eq(28) label") {
      $(".process_list li div:eq(28) label").removeClass("on");
      $(this).addClass("on");
    }
  });
  $(".process_list div:eq(29) label").click(function () {
    if (".process_list li div:eq(29) label") {
      $(".process_list li div:eq(29) label").removeClass("on");
      $(this).addClass("on");
    }
  });
  $(".process_list div:eq(30) label").click(function () {
    if (".process_list li div:eq(30) label") {
      $(".process_list li div:eq(30) label").removeClass("on");
      $(this).addClass("on");
    }
  });
  $(".process_list div:eq(31) label").click(function () {
    if (".process_list li div:eq(31) label") {
      $(".process_list li div:eq(31) label").removeClass("on");
      $(this).addClass("on");
    }
  });
  $(".process_list div:eq(32) label").click(function () {
    if (".process_list li div:eq(32) label") {
      $(".process_list li div:eq(32) label").removeClass("on");
      $(this).addClass("on");
    }
  });
  $(".process_list div:eq(33) label").click(function () {
    if (".process_list li div:eq(33) label") {
      $(".process_list li div:eq(33) label").removeClass("on");
      $(this).addClass("on");
    }
  });
  $(".process_list div:eq(34) label").click(function () {
    if (".process_list li div:eq(34) label") {
      $(".process_list li div:eq(34) label").removeClass("on");
      $(this).addClass("on");
    }
  });
  $(".process_list div:eq(35) label").click(function () {
    if (".process_list li div:eq(35) label") {
      $(".process_list li div:eq(35) label").removeClass("on");
      $(this).addClass("on");
    }
  });
});
