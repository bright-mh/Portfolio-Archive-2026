jQuery(function () {
  jQuery("#chart01").highcharts({
    chart: {
      spacing: BC.spacing,
      events: {
        load: function (event) {
          onChartLoaded("chart01");
        },
      },
    },
    title: BC.emptyText,
    subtitle: BC.emptyText,
    credits: false,
    xAxis: {
      tickWidth: 0,
      categories: ["2011", "2012", "2013"],
    },
    yAxis: [
      {
        lineWidth: 1,
        min: 5300000,
        title: BC.txt.kWh,
      },
    ],
    series: [
      {
        type: "column",
        name: "사용량",
        color: BC.COLOR.TOTAL,
        marker: BC.marker01,
        data: [5410000, 5535000, 5448000],
        tooltip: {
          valueSuffix: " kWh",
          dateTimeLabelFormats: BC.dateFormat.full,
          shared: false,
          seHTML: true,
          headerFormat: "{point.key}<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">SKYPARK 1: </span>' +
            '<span style="text-align: right"> {point.y} </span> ' +
            "</p>",
          footerFormat: "",
          valueDecimals: 0,
          dateTimeLabelFormats: { day: "%Y-%m-%e" },
        },
      },
    ],
    legend: BC.legend,
    exporting: BC.exporting,
  });
});
