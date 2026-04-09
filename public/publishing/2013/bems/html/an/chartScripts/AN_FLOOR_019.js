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
      min: 0,
      tickInterval: 2000,
      title: BC.txt.kWh,
      labels: BC.yLabelBy1000,
    },
    legend: BC.legend,
    tooltip: {
      shared: false,
      seHTML: true,
      headerFormat: "2013-{point.key}<br />",
      pointFormat:
        "<p>" +
        '<span style="color: {series.color}">전기: </span>' +
        '<span style="text-align: right"> {point.y} </span> ' +
        "</span> ",
      footerFormat: "",
      valueDecimals: 2,
      dateTimeLabelFormats: { hour: "%Y-%m" },
    },
    series: [
      {
        name: "사용량",
        data: [16000, 16200, 16200, 15800, 15700, 15000, 15900, 16000, 13800, 14500, 16900, 16300],
        marker: BC.marker01,
        tooltip: { valueSuffix: " kWh" },
        color: BC.COLOR.ELECT,
        lineColor: BC.COLOR.ELECT,
      },
    ],
    exporting: BC.exporting,
  });
});
