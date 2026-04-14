$(function () {
  $("#chart01").highcharts({
    chart: {
      type: "line",
      spacing: BC.spacing,
      events: {
        load: function (event) {
          onChartLoaded("chart01");
        },
      }, // 2014-01-07 폰트 통일을 위해 추가
    },
    title: BC.emptyText,
    credits: false,
    xAxis: BC.xAxis._1D,
    yAxis: {
      lineWidth: 1,
      tickInterval: 10,
      title: BC.txt.kWh,
      labels: BC.yLabel,
    },
    legend: BC.legend,
    tooltip: BC.tooltip_ns.daily,
    series: [
      {
        name: "10층",
        data: [
          9, 9, 20, 19, 20, 21, 28, 15, 25, 20, 25, 28, 30, 27, 32, 35, 48, 36, 25, 15, 10, 21, 18, 20, 28, 32, 28, 38,
          18, 16, 15,
        ],
        pointInterval: BC.interval._1D,
        marker: BC.marker01,
        tooltip: { valueSuffix: " kWh" },
      },
      {
        name: "11층",
        data: [
          10, 12, 23, 20, 24, 25, 20, 26, 30, 21, 30, 35, 36, 32, 41, 51, 52, 42, 32, 20, 21, 21, 25, 30, 32, 40, 30,
          35, 20, 21, 25,
        ],
        pointInterval: BC.interval._1D,
        marker: BC.marker01,
        tooltip: { valueSuffix: " kWh" },
      },
      {
        name: "12층",
        data: [
          12, 11, 24, 21, 23, 25, 22, 28, 32, 24, 30, 31, 34, 31, 40, 48, 52, 44, 31, 21, 19, 25, 23, 28, 31, 43, 31,
          38, 23, 23, 21,
        ],
        pointInterval: BC.interval._1D,
        marker: BC.marker01,
        tooltip: { valueSuffix: " kWh" },
      },
    ],
    exporting: BC.exporting,
  });
});
