/**
    ID : AN_USERCTRL_002 _2
    에너지분석 > 사용자 정의 분석
	y축이 추가로 제공되는 형태
*/

$(function () {
  $("#chart01").highcharts({
    chart: {
      type: "scatter",
      zoomType: "xy",
      events: {
        load: function (event) {
          onChartLoaded("chart01");
        },
      }, // 2014-01-07 폰트 통일을 위해 추가
    },
    title: BC.emptyText,
    subtitle: BC.emptyText,
    xAxis: {
      title: {
        enabled: true,
        text: "",
      },
      min: -20,
      max: 40,
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true,
      plotLines: [
        {
          value: 0,
          color: "#FFFFFF",
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
          text: "",
        },
      },
      {
        min: 0,
        max: 16,
        lineWidth: 1,
        title: {
          text: "",
        },
        opposite: 1,
      },
      {
        min: 0,
        max: 200,
        lineWidth: 1,
        title: {
          text: "",
        },
        opposite: 1,
      },
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
        tooltip: {
          headerFormat: "<b>{series.name}</b><br>",
          pointFormat: "{point.x} cm, {point.y} kg",
        },
      },
    },
    series: [
      {
        name: "전기사용량",
        color: "rgba(223, 83, 83, .5)",
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
      },
      {
        name: "가스사용량",
        color: "rgba(119, 152, 191, .5)",
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
      },
    ],
  });
});
