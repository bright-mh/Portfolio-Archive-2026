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
    tooltip: {
      shared: false,
      seHTML: true,
      headerFormat: "{point.key}<br />",
      pointFormat:
        "<p>" +
        '<span style="color: {series.color}">전기: </span>' +
        '<span style="text-align: right"> {point.y} </span> ' +
        "</p> ",
      footerFormat: "",
      valueDecimals: 2,
      dateTimeLabelFormats: { day: "%Y-%m-%e" },
    },
    series: [
      {
        name: "사용량",
        color: BC.COLOR.ELECT,
        lineColor: BC.COLOR.ELECT,
        data: [3, 1, 2, 1, 2, 2, 1, -43, 1, 2, 1, 1, 3, 1, 2, 1, 2, 2, 1, -43, 1, 2, 1, 1, 3, 1, 2, 1, 2, 2, 0],
        pointInterval: BC.interval._1D,
        marker: BC.marker01,
        tooltip: { valueSuffix: " kWh" },
      },
    ],
    exporting: BC.exporting,
  });
});
