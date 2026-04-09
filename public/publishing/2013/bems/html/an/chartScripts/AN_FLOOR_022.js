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
      tickInterval: 10,
      title: BC.txt.kWh,
      labels: BC.yLabel,
    },
    plotOptions: {
      column: {
        stacking: "normal",
      },
    },

    legend: BC.legend,
    tooltip: {
      shared: false,
      seHTML: true,
      headerFormat: "2013-{point.key}<br />",
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
        stack: "1",
        name: "10층",
        data: [9, 9, 20, 19, 20, 21, 28, 15, 25, 20, 25, 28],
        marker: BC.marker01,
        tooltip: { valueSuffix: " kWh" },
      },
      {
        stack: "1",
        name: "11층",
        data: [10, 12, 23, 20, 24, 25, 20, 26, 30, 21, 30, 35],
        marker: BC.marker01,
        tooltip: { valueSuffix: " kWh" },
      },
      {
        stack: "1",
        name: "12층",
        data: [12, 11, 24, 21, 23, 25, 22, 28, 32, 24, 30, 31],
        marker: BC.marker01,
        tooltip: { valueSuffix: " kWh" },
      },
      {
        stack: "2",
        name: "비교대상 10층",
        data: [9, 9, 20, 19, 20, 21, 28, 15, 25, 20, 25, 28],
        marker: BC.marker01,
        tooltip: { valueSuffix: " kWh" },
      },
      {
        stack: "2",
        name: "비교대상 11층",
        data: [10, 12, 23, 20, 24, 25, 20, 26, 30, 21, 30, 35],
        marker: BC.marker01,
        tooltip: { valueSuffix: " kWh" },
      },
      {
        stack: "2",
        name: "비교대상 12층",
        data: [12, 11, 24, 21, 23, 25, 22, 28, 32, 24, 30, 31],
        marker: BC.marker01,
        tooltip: { valueSuffix: " kWh" },
      },
    ],
    exporting: BC.exporting,
  });
});
