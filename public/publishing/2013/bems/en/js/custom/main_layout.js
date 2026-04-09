jQuery(document).ready(function () {
  //$('.rss .feedBox p').dotdotdot();
  jQuery("#dataBox").selectbox(); //selectbox of jQuery

  jQuery(window).resize(function () {
    responOfMain();
  });

  /*main  RWD*/

  var smallWid = [];
  var bigWid = [];
  var layoutXpos = [];
  var layoutYpos = [];

  smallWid = [480, 381];
  bidWid = [974, 784];

  layoutXpos = [
    [12, 506, 12, 12, 12, 506],
    [12, 12, 407, 407, 1205, 1205],
  ];
  layoutYpos = [
    [0, 0, 362, 724, 1086, 1086],
    [0, 362, 0, 362, 0, 362],
  ];

  function responOfMain() {
    var wW = jQuery(window).width();
    var sBox = jQuery("#mainCon .smallBox");
    var bBox = jQuery("#mainCon .bigBox");
    var con = jQuery("#mainCon .content");

    var box1 = jQuery("#mainCon .todayEn");
    var box2 = jQuery("#mainCon .elecPeak");
    var box3 = jQuery("#mainCon .enUse");
    var box4 = jQuery("#mainCon .usePattern");
    var box5 = jQuery("#mainCon .charge");
    var box6 = jQuery("#mainCon .preparing");

    var conWrap = jQuery("#mainCon section .wrapCon");
    var conWrapBig = jQuery("#mainCon section.bigBox .wrapCon");

    var box1_grapBox = jQuery("#mainCon section.todayEn .grap");
    var box1_table = jQuery("#mainCon section.todayEn .table");

    var peakGrap = jQuery("#mainCon .elecPeak .dataBox .cirGrap");
    var peakTableFTd = jQuery("#mainCon .elecPeak .tableData table td");
    var peakTableSTd = jQuery("#mainCon .elecPeak .tableData table td.unit");

    var cusboxData1 = jQuery("#mainCon .dataBox02 .left");
    var cusboxData2 = jQuery("#mainCon .dataBox03 .left");

    var cusboxIcon1 = jQuery("#mainCon .dataBox02 .icon");
    var cusboxIcon2 = jQuery("#mainCon .dataBox03 .icon");

    var rss = jQuery(".rss");
    var rssFeedBox = jQuery(".rss .feedBox");
    var rssFeedDisplay = jQuery(".rss .feedBox .display");
    var rssFeedBoxUl = jQuery(".rss .feedBox ul");
    var rssDotDot = jQuery(".rss .feedBox p");

    var main = jQuery("#mainCon");
    var footer = jQuery("footer");

    if (wW >= 1600) {
      TweenMax.to(sBox, 0.3, { width: smallWid[1] });
      TweenMax.to(bBox, 0.3, { width: bidWid[1] });
      TweenMax.to(box1, 0.3, { left: layoutXpos[1][0], top: layoutYpos[1][0] });
      TweenMax.to(box2, 0.3, { left: layoutXpos[1][1], top: layoutYpos[1][1] });
      TweenMax.to(box3, 0.3, { left: layoutXpos[1][2], top: layoutYpos[1][2] });
      TweenMax.to(box4, 0.3, { left: layoutXpos[1][3], top: layoutYpos[1][3] });
      TweenMax.to(box5, 0.3, { left: layoutXpos[1][4], top: layoutYpos[1][4] });
      TweenMax.to(box6, 0.3, { left: layoutXpos[1][5], top: layoutYpos[1][5] });

      con.css({ width: "1600px", height: "712px" });
      conWrap.css({ "margin-left": "20px", width: "341px" });
      conWrapBig.css({ width: "744px" });
      box1_grapBox.css({ width: "290px" });
      box1_table.css({ width: "290px" });
      //peakTableFTd.css({'width': '69px'});		//140108 수정  일반전력 피크 width값 삭제
      //peakTableSTd.css({'width': '57px'});		//140108 수정  일반전력 피크 width값 삭제
      $("#mainCon .elecPeak .tableData").css({ margin: "20px 0px 0 0px" }); //140108 수정  일반전력 피크 마진값 추가
      peakGrap.css({ "margin-left": "5px" });
      cusboxData1.css({ "margin-left": "17px" });
      cusboxData2.css({ "margin-left": "17px" });
      cusboxIcon1.css({ "margin-right": "23px" });
      cusboxIcon2.css({ "margin-right": "25px" });
      rss.css({ width: "1575px" });
      rssFeedBox.css({ width: "1518px" });
      rssFeedBoxUl.css({ width: "1518px" });
      rssFeedDisplay.css({ width: "1518px" });
      rssDotDot.css({ width: "1390px" });
      main.css({ height: "895px" });
      footer.css({ width: "1576px" });
    } else {
      TweenMax.to(sBox, 0.3, { width: smallWid[0] });
      TweenMax.to(bBox, 0.3, { width: bidWid[0] });
      TweenMax.to(box1, 0.3, { left: layoutXpos[0][0], top: layoutYpos[0][0] });
      TweenMax.to(box2, 0.3, { left: layoutXpos[0][1], top: layoutYpos[0][1] });
      TweenMax.to(box3, 0.3, { left: layoutXpos[0][2], top: layoutYpos[0][2] });
      TweenMax.to(box4, 0.3, { left: layoutXpos[0][3], top: layoutYpos[0][3] });
      TweenMax.to(box5, 0.3, { left: layoutXpos[0][4], top: layoutYpos[0][4] });
      TweenMax.to(box6, 0.3, { left: layoutXpos[0][5], top: layoutYpos[0][5] });

      con.css({ width: "1000px", height: "1436px" });
      conWrap.css({ "margin-left": "30px", width: "420px" });
      conWrapBig.css({ width: "914px" });
      box1_grapBox.css({ width: "370px" });
      box1_table.css({ width: "370px" });
      //peakTableFTd.css({'width': '79px'});		//140108 수정  일반전력 피크 width값 삭제
      //peakTableSTd.css({'width': '90px'});		//140108 수정  일반전력 피크 width값 삭제
      $("#mainCon .elecPeak .tableData").css({ margin: "20px 10px 0 0px" }); //140108 수정  일반전력 피크 마진값 추가
      peakGrap.css({ "margin-left": "30px" });
      cusboxData1.css({ "margin-left": "27px" });
      cusboxData2.css({ "margin-left": "27px" });
      cusboxIcon1.css({ "margin-right": "33px" });
      cusboxIcon2.css({ "margin-right": "35px" });
      rss.css({ width: "974px" });
      rssFeedBox.css({ width: "918px" });
      rssFeedBoxUl.css({ width: "918px" });
      rssFeedDisplay.css({ width: "918px" });
      rssDotDot.css({ width: "790px" });
      main.css({ height: "1618px" });
      footer.css({ width: "976px" });
    } //E if
  } //E fun

  responOfMain();

  /*131129 jhy footer topBtn && 131218 dashboard footer mouseover out event*/
  jQuery("footer .fBtn").bind("mousedown mouseover mouseout", function (e) {
    if (e.type == "mousedown") {
      jQuery("html, body").stop().animate({ scrollTop: 0 }, 200);
    } else if (e.type == "mouseover") {
      rpc = $(this).find(">a>img").attr("src");
      rpc = rpc.replace(".gif", "_over.gif");
      $(this).find("img").attr("src", rpc);
    } else if (e.type == "mouseout") {
      rpc = $(this).find(">a>img").attr("src");
      rpc = rpc.replace("_over.gif", ".gif");
      $(this).find("img").attr("src", rpc);
    } //E if

    return false;
  });

  /*1224 rss 버튼 마우스 오버 및 아웃 효과*/
  $(".rss .rss_btn").bind("mouseover mouseout", function (e) {
    var rpc;
    if (e.type == "mouseover") {
      rpc = $(this).find(">a>img").attr("src").replace("_btn", "_btn_over");
      $(this).find(">a>img").attr("src", rpc);
    } else if (e.type == "mouseout") {
      rpc = $(this).find(">a>img").attr("src").replace("_btn_over", "_btn");
      $(this).find(">a>img").attr("src", rpc);
    } //E if
  });

  /*//End 1224 rss 버튼 마우스 오버 및 아웃 효과*/
}); //E ready
