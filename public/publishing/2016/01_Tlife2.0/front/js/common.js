$(document).ready(function () {
  $(".info_group .tab li").click(function () {
    var li_index = $(this).index();

    $(".info_group .tab li").removeClass("on");
    $(this).addClass("on");

    if (li_index == 0) {
      $(".tlife_info").show();
      $(".use").hide();
    } else {
      $(".tlife_info").hide();
      $(".use").show();
    }
  });

  //word-break:keep-all
  $(".tlife_info").wordBreakKeepAll();
  $(".use_list").wordBreakKeepAll();
  $(".notice_list").wordBreakKeepAll();
});
