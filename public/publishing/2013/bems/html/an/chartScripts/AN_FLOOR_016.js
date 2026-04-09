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
    xAxis: BC.xAxis._1D,
    yAxis: {
      lineWidth: 1,
      min: -50,
      max: 10,
      tickInterval: 10,
      title: BC.txt.kWh,
      labels: BC.yLabel,
    },
    legend: BC.legend,
    tooltip: BC.tooltip_ns.daily,
    series: [
      {
        name: "A동",
        data: [3, 1, 2, 1, 2, 2, 1, -43, 1, 2, 1, 1, 3, 1, 2, 1, 2, 2, 1, -43, 1, 2, 1, 1, 3, 1, 2, 1, 2, 2, 0],
        pointInterval: BC.interval._1D,
        marker: BC.marker01,
        tooltip: { valueSuffix: " kWh" },
      },
      {
        name: "비교대상 A동",
        data: [3, 1, 7, -5, 1, 3, 2, 2, 1, 2, 2, 1, 3, 1, 2, -4, 1, 2, 1, 2, 2, 1, 1, 1, 3, 1, 2, 1, 2, 2, 0],
        pointInterval: BC.interval._1D,
        marker: BC.marker01,
        tooltip: { valueSuffix: " kWh" },
      },
    ],
    exporting: BC.exporting,
  });
});
