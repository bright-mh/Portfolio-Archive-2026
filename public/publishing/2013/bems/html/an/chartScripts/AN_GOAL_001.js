/**
    AN_GOAL_001

*/

$(function () {
  $("#chart01").highcharts({
    chart: {
      type: "column",
      spacing: BC.spacing,
      events: {
        load: function (event) {
          onChartLoaded("chart01");
        },
      }, // 2014-01-07 폰트 통일을 위해 추가
    },
    title: BC.emptyText,
    credits: false,
    xAxis: {
      tickWidth: 0,
      categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    },
    yAxis: {
      lineWidth: 1,
      tickInterval: 20,
      title: BC.txt.toe,
      labels: BC.yLabel,
    },
    legend: BC.legend,
    tooltip: {
      shared: false,
      seHTML: true,
      headerFormat: "2003-{point.key}<br />",
      pointFormat:
        "<p>" +
        '<span style="color: {series.color}">{series.name}: </span>' +
        '<span style="text-align: right"> {point.y} </span> ' +
        "</span> ",
      footerFormat: "",
      valueDecimals: 2,
      dateTimeLabelFormats: { hour: "%Y-%m" },
    },
    series: [
      {
        name: "목표량",
        data: [125, 121, 125, 140, 120, 130, 128, 142, 153, 178, 180, 144],
        tooltip: {
          pointFormat:
            '<span style="color:' +
            BC.COLOR.ELECT +
            '">전기: </span><span style="text-align: right">100.00 </span><br /> ' +
            '<span style="color:' +
            BC.COLOR.GAS +
            '">가스: </span><span style="text-align: right">78.00 </span><br /> ' +
            '<span style="color: {series.color}">전체: </span>' +
            '<span style="text-align: right"> {point.y} </span> ' +
            "</span> ",
          valueSuffix: " TOE",
        },
      },
      {
        name: "사용량",
        data: [112, 110, 113, 125, 108, 118, 114, 130, 140, 162, 165, 132],
        tooltip: {
          pointFormat:
            '<span style="color:' +
            BC.COLOR.ELECT +
            '">전기: </span><span style="text-align: right">100.00 </span><br /> ' +
            '<span style="color:' +
            BC.COLOR.GAS +
            '">가스: </span><span style="text-align: right">78.00 </span><br /> ' +
            '<span style="color: {series.color}">전체: </span>' +
            '<span style="text-align: right"> {point.y} </span> ' +
            "</span> ",
          valueSuffix: " TOE",
        },
        color: BC.COLOR.TOTAL,
        lineColor: BC.COLOR.TOTAL,
      },
    ],
    exporting: BC.exporting,
  });
});
