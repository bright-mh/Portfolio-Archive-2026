$(function () {
  $("#chart01").highcharts({
    chart: {
      type: "area",
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
        name: "사용량",
        color: BC.COLOR.ELECT,
        data: [
          1300, 1325, 1320, 1200, 1230, 1200, 1000, 950, 810, 800, 850, 860, 1300, 1325, 1320, 1200, 1230, 1200, 1000,
          950, 810, 800, 850, 860,
        ],
        pointInterval: BC.interval._1H,
        marker: BC.marker01,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 2,
          dateTimeLabelFormats: { hour: "%Y-%m-%e (%H:%M)" },
          headerFormat: "{point.key}<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">전기 : </span>' +
            '<span style="text-align: right"> {point.y} </span>  <br/>' +
            "</p> ",
          footerFormat: "",
          valueSuffix: " kWh",
        },
        index: 0,
        legendIndex: 0,
      },
      {
        name: "비교대상 사용량",
        color: BC.COLOR.ELECT_2,
        data: [
          1040, 1060, 1056, 860, 884, 860, 700, 660, 548, 540, 580, 588, 1040, 1060, 1056, 860, 884, 860, 700, 660, 548,
          540, 580, 588,
        ],
        pointInterval: BC.interval._1H,
        marker: BC.marker01,
        tooltip: { valueSuffix: " kWh" },
        index: 1,
        legendIndex: 1,
      },
    ],
    exporting: BC.exporting,
  });
});
