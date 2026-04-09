$(document).ready(function () {
  initCalendar();

  initContentType();
});

function initCalendar() {
  create_dual_calendar("#searchStartDate", "#searchEndDate", true);

  var btn_check_id = $("#calendar_btn_default").val();
  if (btn_check_id != "") {
    $("#" + btn_check_id).removeClass("btn_gray03");
    $("#" + btn_check_id).addClass("btn_blue01");
  }

  $(".calendar_btn").click(function (event) {
    $("#calendar_btn_default").val($(this).attr("id"));
  });

  $("#searchStartDate").datepicker("option", "onSelect", function (value, date) {
    $("#calendar_btn_default").val("");
    $(".calendar_btn").each(function () {
      $(this).removeClass("btn_blue01");
      $(this).addClass("btn_gray03");
    });
  });

  $("#searchEndDate").datepicker("option", "onSelect", function (value, date) {
    $("#calendar_btn_default").val("");
    $(".calendar_btn").each(function () {
      $(this).removeClass("btn_blue01");
      $(this).addClass("btn_gray03");
    });
  });

  $(".ui-datepicker-trigger").addClass("calendar");
  $("img.ui-datepicker-trigger").attr("style", "cursor: pointer;position:absolute;top:0;right:0;");
}

function initContentType() {
  changeContentType();
}

function changeContentType(content_type_cd) {
  if (typeof content_type_cd == "undefined") {
    content_type_cd = $("#content_type_cd").val();
  }

  $("#advert_type_selectbox").hide();
  $("#content_type_dummy_selectbox").hide();

  if (content_type_cd == "CONTYP102") {
    // 광고
    $("#advert_type_selectbox").show();
  } else {
    // 상품
    $("#content_type_dummy_selectbox").show();
  }

  changeAdvertType();
}

function changeAdvertType(ad_type_cd) {
  if (typeof ad_type_cd == "undefined") {
    ad_type_cd = $("#ad_type_cd").val();
  }

  $("#main_category_selectbox").hide();
  $("#main_category_dummy_selectbox").hide();

  var content_type_cd = $("#content_type_cd").val();
  if (content_type_cd == "CONTYP102" && ad_type_cd == "ADTYPE102") {
    // 광고 && Bar형
    $("#main_category_dummy_selectbox").show();
  } else {
    $("#main_category_selectbox").show();
  }
  changeCategory();
}

function changeCategory(main_category_cd) {
  if (typeof main_category_cd == "undefined") {
    main_category_cd = $("#main_category_cd").val();
  }

  $("#vod_type_selectbox").hide();
  $("#issue_type_selectbox").hide();
  $("#sub_category_dummy_selectbox").hide();

  if ($("#main_category_selectbox").is(":hidden")) {
    $("#sub_category_dummy_selectbox").show();
    return;
  }

  if (main_category_cd == "CATGRY105") {
    // VOD
    $("#vod_type_selectbox").show();
  } else if (main_category_cd == "CATGRY101") {
    // Hot Issue
    $("#issue_type_selectbox").show();
  } else {
    $("#sub_category_dummy_selectbox").show();
  }
}

function changePerPage(per_page) {
  $("#search_form").submit();
}

function search() {
  $("#search_form").submit();
}
