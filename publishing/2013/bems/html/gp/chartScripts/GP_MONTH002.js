$(function () {
  $("#chart01").highcharts({
    chart: {
      spacing: BC.spacing,
      events: {
        load: function (event) {
          onChartLoaded("chart01");
        },
      },
    },
    title: BC.emptyText,
    credits: false,
    xAxis: {
      categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    },
    yAxis: {
      lineWidth: 1,
      title: BC.txt.nm3,
      labels: BC.yLabel,
    },
    legend: BC.legend,
    series: [
      {
        type: "column",
        name: "사용량",
        data: [115000, 103092, 111441, 119457, 108846, 102245, 113643, 103681, 91781, 109878, 109999],
        marker: BC.marker01,
        tooltip: {
          valueSuffix: " N㎥",
          headerFormat: "{point.key}<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">SKYPARK 1: </span>' +
            '<span style="text-align: right"> {point.y}</span> ' +
            "</p>",
        },
        legendIndex: 0,
      },
    ],
    exporting: BC.exporting,
  });
});
