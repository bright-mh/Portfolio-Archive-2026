$(function () {
  $("#chart01").highcharts({
    chart: {
      type: "spline",
      spacing: BC.spacing,
      events: {
        load: function (event) {
          onChartLoaded("chart01");
        },
      }, // 2014-01-07 폰트 통일을 위해 추가
    },
    title: BC.emptyText,
    credits: false,
    //		xAxis: BC.xAxis._2H,		//2014-01-06 하기와 같이 변경
    /*2014-01-06  x축 시간 표기 및 설정*/
    xAxis: [
      {
        type: "datetime",
        dateTimeLabelFormats: {
          day: "%H:%M",
          hour: "%H:%M",
        },
        tickWidth: 0,
        labels: {
          style: {
            "font-size": "11px",
          },
        },
      },
    ],
    /* //End 2014-01-06  x축 시간 표기 및 설정*/
    yAxis: {
      lineWidth: 1,
      min: 0,
      tickInterval: 500,
      title: BC.txt.kWh,
      labels: BC.yLabelBy1000,
    },
    legend: BC.legend,
    tooltip: BC.tooltip_ns.realtime,
    series: [
      {
        name: "10층",
        data: [
          1300, 1325, 1320, 1200, 1230, 1200, 1000, 950, 810, 800, 850, 860, 1300, 1325, 1320, 1200, 1230, 1200, 1000,
          950, 810, 800, 850, 860,
        ],
        pointInterval: BC.interval._1H,
        marker: BC.marker01,
        tooltip: { valueSuffix: " kWh" },
      },
      {
        name: "11층",
        data: [
          650, 662.5, 660, 600, 615, 600, 500, 475, 405, 400, 425, 430, 650, 662.5, 660, 600, 615, 600, 500, 475, 405,
          400, 425, 430,
        ],
        pointInterval: BC.interval._1H,
        marker: BC.marker01,
        tooltip: { valueSuffix: " kWh" },
      },
      {
        name: "12층",
        data: [
          383, 390, 389, 353, 362, 353, 295, 280, 239, 236, 250, 253, 383, 390, 389, 353, 362, 353, 295, 280, 239, 236,
          250, 253,
        ],
        pointInterval: BC.interval._1H,
        marker: BC.marker01,
        tooltip: { valueSuffix: " kWh" },
      },
    ],
    exporting: BC.exporting,
  });
});
