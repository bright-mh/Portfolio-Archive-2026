/**
    ID : AN_USERCTRL_002
    에너지분석 > 사용자 정의 분석
*/

$(function () {
  $("#chart01").highcharts({
    chart: {
      type: "scatter",
      zoomType: "xy",
      spacing: BC.spacing,
      events: {
        load: function (event) {
          onChartLoaded("chart01");
        },
      }, // 2014-01-07 폰트 통일을 위해 추가
    },
    title: BC.emptyText,
    subtitle: BC.emptyText,
    credits: false,
    xAxis: {
      title: {
        enabled: true,
        text: "",
      },
      tickWidth: 0, //2014-01-07 x축 라인삭제
      min: -20,
      max: 40,
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true,
      plotLines: [
        {
          value: 0,
          color: "#CCCCCC",
          width: 0,
          label: {
            text: "",
            align: "center",
            style: {
              color: "gray",
            },
          },
        },
      ],
    },
    yAxis: [
      {
        min: 0,
        max: 1000,
        lineWidth: 1,
        title: {
          text: "toe", //2014-01-07 toe 추가
        },
      },
      /* 2014-01-03 우측 y 축 삭제 
                ,
                {
                    min: 0,
                    max: 16,
                    lineWidth:0,
                    title:BC.emptyText,
                    opposite: 1
                }
				*/
    ],
    legend: BC.legend,
    plotOptions: {
      scatter: {
        marker: {
          radius: 5,
          states: {
            hover: {
              enabled: true,
              lineColor: "rgb(100,100,100)",
            },
          },
        },
        states: {
          hover: {
            marker: {
              enabled: false,
            },
          },
        },
      },
    },
    series: [
      {
        name: "항목-1-1-1",
        color: BC.COLOR.ELECT,
        data: [
          [1, 600],
          [2, 605],
          [3, 610],
          [4, 615],
          [5, 620],
          [6, 625],
          [7, 630],
          [8, 635],
          [9, 640],
          [10, 645],
          [11, 650],
          [12, 655],
          [13, 660],
          [14, 665],
          [15, 670],
          [16, 675],
          [17, 680],
          [18, 685],
          [19, 690],
          [20, 695],
          [21, 700],
          [22, 705],
          [23, 710],
          [24, 715],
          [25, 720],
          [26, 725],
          [27, 730],
          [28, 735],
          [29, 740],
          [30, 745],
        ],
        tooltip: {
          /*131223 툴팁 날짜 수정*/
          headerFormat: "<b>2103-01-07 13:15</b><br>",
          pointFormat: "외기온도 : {point.x} %,<br/>{series.name} : {point.y} toe", // 2014-01-03 검색부분에서 선택된 항목에 따라 툴팁 표시를 맞춤. (현재 페이지에서 선택된 것은 외기온도, toe)
        },
      },
      {
        name: "항목-2-1-55",
        color: BC.COLOR.GAS,
        data: [
          [15, 0],
          [16, 60],
          [17, 120],
          [18, 180],
          [19, 220],
          [20, 260],
          [21, 300],
          [22, 360],
          [23, 420],
          [24, 480],
          [25, 540],
          [26, 600],
          [27, 660],
        ],
        tooltip: {
          /*131223 툴팁 날짜 수정*/
          headerFormat: "<b>2103-01-07 13:15</b><br>",
          pointFormat: "외기온도 : {point.x} %,<br/>{series.name} : {point.y} toe", // 2014-01-03 검색부분에서 선택된 항목에 따라 툴팁 표시를 맞춤. (현재 페이지에서 선택된 것은 외기온도, toe)
        },
      },
    ],
    exporting: BC.exporting,
  });
});
