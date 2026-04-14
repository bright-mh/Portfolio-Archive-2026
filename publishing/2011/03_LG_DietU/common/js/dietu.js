// JavaScript Document

function setPng24(obj) {
  obj.width = obj.height = 1;
  obj.className = obj.className.replace(/\bpng24\b/i, "");
  obj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + obj.src + "',sizingMethod='image');";
  obj.src = "";
  return "";
}

// search
var flag_00 = 0;
function search_choice() {
  flag_00 = flag_00 + 1;
  if (flag_00 % 2 == "1") $(".select_list").slideDown("fast");
  else if (flag_00 % 2 == "0") $(".select_list").slideUp("fast");
}

// SNB
function snb(a) {
  if (a == "01") {
    $(".snb1 span a").addClass("on");
    $(".snb2 span a").removeClass("on");
    $(".snb3 span a").removeClass("on");
    $(".snb4 span a").removeClass("on");
    $(".snb5 span a").removeClass("on");
    $(".snb1 ul").css("display", "block");
    $(".snb2 ul").css("display", "none");
    $(".snb3 ul").css("display", "none");
    $(".snb4 ul").css("display", "none");
    $(".snb5 ul").css("display", "none");
  } else if (a == "02") {
    $(".snb1 span a").removeClass("on");
    $(".snb2 span a").addClass("on");
    $(".snb3 span a").removeClass("on");
    $(".snb4 span a").removeClass("on");
    $(".snb5 span a").removeClass("on");
    $(".snb1 ul").css("display", "none");
    $(".snb2 ul").css("display", "block");
    $(".snb3 ul").css("display", "none");
    $(".snb4 ul").css("display", "none");
    $(".snb5 ul").css("display", "none");
  } else if (a == "03") {
    $(".snb1 span a").removeClass("on");
    $(".snb2 span a").removeClass("on");
    $(".snb3 span a").addClass("on");
    $(".snb4 span a").removeClass("on");
    $(".snb5 span a").removeClass("on");
    $(".snb1 ul").css("display", "none");
    $(".snb2 ul").css("display", "none");
    $(".snb3 ul").css("display", "block");
    $(".snb4 ul").css("display", "none");
    $(".snb5 ul").css("display", "none");
  } else if (a == "04") {
    $(".snb1 span a").removeClass("on");
    $(".snb2 span a").removeClass("on");
    $(".snb3 span a").removeClass("on");
    $(".snb4 span a").addClass("on");
    $(".snb5 span a").removeClass("on");
    $(".snb1 ul").css("display", "none");
    $(".snb2 ul").css("display", "none");
    $(".snb3 ul").css("display", "none");
    $(".snb4 ul").css("display", "block");
    $(".snb5 ul").css("display", "none");
  } else if (a == "05") {
    $(".snb1 span a").removeClass("on");
    $(".snb2 span a").removeClass("on");
    $(".snb3 span a").removeClass("on");
    $(".snb4 span a").removeClass("on");
    $(".snb5 span a").addClass("on");
    $(".snb1 ul").css("display", "none");
    $(".snb2 ul").css("display", "none");
    $(".snb3 ul").css("display", "none");
    $(".snb4 ul").css("display", "none");
    $(".snb5 ul").css("display", "block");
  }
}
function snb_out(a) {
  if (a == "01") {
    $(".snb1 span a").addClass("on");
    $(".snb2 span a").removeClass("on");
    $(".snb3 span a").removeClass("on");
    $(".snb4 span a").removeClass("on");
    $(".snb5 span a").removeClass("on");
    $(".snb1 ul").slideDown("fast");
    $(".snb2 ul").css("display", "none");
    $(".snb3 ul").css("display", "none");
    $(".snb4 ul").css("display", "none");
    $(".snb5 ul").css("display", "none");
  } else if (a == "02") {
    $(".snb2 span a").addClass("on");
    $(".snb1 span a").removeClass("on");
    $(".snb3 span a").removeClass("on");
    $(".snb4 span a").removeClass("on");
    $(".snb5 span a").removeClass("on");
    $(".snb1 ul").css("display", "none");
    $(".snb2 ul").slideDown("fast");
    $(".snb3 ul").css("display", "none");
    $(".snb4 ul").css("display", "none");
    $(".snb5 ul").css("display", "none");
  } else if (a == "03") {
    $(".snb3 span a").addClass("on");
    $(".snb1 span a").removeClass("on");
    $(".snb2 span a").removeClass("on");
    $(".snb4 span a").removeClass("on");
    $(".snb5 span a").removeClass("on");
    $(".snb1 ul").css("display", "none");
    $(".snb2 ul").css("display", "none");
    $(".snb3 ul").slideDown("fast");
    $(".snb4 ul").css("display", "none");
    $(".snb5 ul").css("display", "none");
  } else if (a == "04") {
    $(".snb4 span a").addClass("on");
    $(".snb1 span a").removeClass("on");
    $(".snb2 span a").removeClass("on");
    $(".snb3 span a").removeClass("on");
    $(".snb5 span a").removeClass("on");
    $(".snb1 ul").css("display", "none");
    $(".snb2 ul").css("display", "none");
    $(".snb3 ul").css("display", "none");
    $(".snb4 ul").slideDown("fast");
    $(".snb5 ul").css("display", "none");
  } else if (a == "05") {
    $(".snb5 span a").addClass("on");
    $(".snb1 span a").removeClass("on");
    $(".snb2 span a").removeClass("on");
    $(".snb3 span a").removeClass("on");
    $(".snb4 span a").removeClass("on");
    $(".snb1 ul").css("display", "none");
    $(".snb2 ul").css("display", "none");
    $(".snb3 ul").css("display", "none");
    $(".snb4 ul").css("display", "none");
    $(".snb5 ul").slideDown("fast");
  }
}

// 사이트맵
function sitemap(a) {
  if (a == "01") {
    $(".sitemap_service1 a").addClass("on");
    $(".service1_sub").css("display", "block");
    $(".sitemap_service2 a").removeClass("on");
    $(".service2_sub").css("display", "none");
    $(".sitemap_support2 a").removeClass("on");
    $(".support1_sub").css("display", "none");
  } else if (a == "02") {
    $(".sitemap_service2 a").addClass("on");
    $(".service2_sub").css("display", "block");
    $(".sitemap_service1 a").removeClass("on");
    $(".service1_sub").css("display", "none");
    $(".sitemap_support2 a").removeClass("on");
    $(".support1_sub").css("display", "none");
  } else if (a == "03") {
    $(".sitemap_support2 a").addClass("on");
    $(".support1_sub").css("display", "block");
    $(".sitemap_service1 a").removeClass("on");
    $(".service1_sub").css("display", "none");
    $(".sitemap_service2 a").removeClass("on");
    $(".service2_sub").css("display", "none");
  } else if (a == "04") {
    $(".sitemap_service1 a").removeClass("on");
    $(".service1_sub").css("display", "none");
    $(".sitemap_service2 a").removeClass("on");
    $(".service2_sub").css("display", "none");
    $(".sitemap_support2 a").removeClass("on");
    $(".support1_sub").css("display", "none");
  }
}

// 다이어트유
function dietu_tab(a) {
  if (a == "01") {
    $(".dietu_tab1 a").addClass("on");
    $(".dietu_tab2 a").removeClass("on");
    $(".dietu_tab3 a").removeClass("on");
    $(".dietu_tab4 a").removeClass("on");
    $(".dietu0").css("display", "none");
    $(".dietu1").css("display", "block");
    $(".dietu2").css("display", "none");
    $(".dietu3").css("display", "none");
    $(".dietu4").css("display", "none");
  } else if (a == "02") {
    $(".dietu_tab1 a").removeClass("on");
    $(".dietu_tab2 a").addClass("on");
    $(".dietu_tab3 a").removeClass("on");
    $(".dietu_tab4 a").removeClass("on");
    $(".dietu0").css("display", "none");
    $(".dietu1").css("display", "none");
    $(".dietu2").css("display", "block");
    $(".dietu3").css("display", "none");
    $(".dietu4").css("display", "none");
  } else if (a == "03") {
    $(".dietu_tab1 a").removeClass("on");
    $(".dietu_tab2 a").removeClass("on");
    $(".dietu_tab3 a").addClass("on");
    $(".dietu_tab4 a").removeClass("on");
    $(".dietu0").css("display", "none");
    $(".dietu1").css("display", "none");
    $(".dietu2").css("display", "none");
    $(".dietu3").css("display", "block");
    $(".dietu4").css("display", "none");
  } else if (a == "04") {
    $(".dietu_tab1 a").removeClass("on");
    $(".dietu_tab2 a").removeClass("on");
    $(".dietu_tab3 a").removeClass("on");
    $(".dietu_tab4 a").addClass("on");
    $(".dietu0").css("display", "none");
    $(".dietu1").css("display", "none");
    $(".dietu2").css("display", "none");
    $(".dietu3").css("display", "none");
    $(".dietu4").css("display", "block");
  }
}
