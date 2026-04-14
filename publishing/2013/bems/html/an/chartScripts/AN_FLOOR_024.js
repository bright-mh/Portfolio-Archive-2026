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
        name: "A동",
        data: [0, 440, 400],
        marker: BC.marker01,
        tooltip: {
          valueSuffix: " kWh",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">{series.name}: </span>' +
            '<span style="text-align: right"> {point.y} </span> ' +
            "</span> ",
        },
      },
    ],
    exporting: BC.exporting,
  });
});
