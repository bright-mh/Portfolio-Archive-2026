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
      categories: ["2011", "2012", "2013"],
    },
    yAxis: {
      lineWidth: 1,
      tickInterval: 50,
      title: BC.txt.kWh,
      labels: BC.yLabel,
    },
    plotOptions: {
      column: {
        stacking: "normal",
      },
    },

    legend: BC.legend,
    tooltip: BC.tooltip_ns.yearly,
    series: [
      {
        stack: 1,
        index: 3,
        name: "10층",
        data: [0, 140, 160],
        tooltip: { valueSuffix: " kWh" },
      },
      {
        stack: 1,
        index: 2,
        name: "11층",
        data: [0, 130, 120],
        tooltip: { valueSuffix: " kWh" },
      },
      {
        stack: 1,
        index: 1,
        name: "12층",
        data: [0, 100, 150],
        tooltip: { valueSuffix: " kWh" },
      },
    ],
    exporting: BC.exporting,
  });
});
