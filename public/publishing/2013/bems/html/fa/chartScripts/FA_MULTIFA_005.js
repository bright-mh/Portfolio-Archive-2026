/**
	ID : FA_MULTIFA_001
*/
$(function () {
  Highcharts.setOptions({
    lang: {
      weekdays: ["일", "월", "화", "수", "목", "금", "토"],
    },
  });

  $("#chart01").highcharts({
    chart: {
      type: "spline",
      spacing: BC.spacing,
      events: {
        load: function (event) {
          onChartLoaded("chart01");
        },
      }, // 2014-01-07 폰트 통일을 위해 추가
    },
    title: BC.emptyText,
    credits: false,
    xAxis: BC.xAxis._2H,
    yAxis: [
      {
        lineWidth: 1,
        title: {
          text: "1st",
        },
      },
      {
        lineWidth: 1,
        title: {
          text: "2nd",
        },
        opposite: 1,
      },
      {
        lineWidth: 1,
        title: {
          text: "3rd",
        },
        opposite: 1,
      },
      {
        lineWidth: 1,
        title: {
          text: "4th",
        },
        opposite: 1,
      },
    ],
    legend: BC.legend,
    series: [
      {
        name: "1st",
        data: [
          0, 0, 0, 0, 140, 240, 360, 410, 210, 113, 8, 0, 0, 0, 0, 0, 140, 240, 360, 410, 210, 113, 8, 0, 0, 0, 0, 0,
          140, 240, 360, 410, 210, 113, 8, 0, 0, 0, 0, 0, 140, 240, 360, 410, 210, 113, 8, 0,
        ],
        marker: BC.marker03,
        pointStart: Date.UTC(2013, 11, 14),
        pointInterval: BC.interval._15M,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 0,
          headerFormat: "{point.key}<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">{series.name}: </span>' +
            '<span style="text-align: right">{point.y}</span>  <br/>' +
            "</p> ",
          footerFormat: "",
          valueSuffix: "",
        },
        yAxis: 0,
      },
      {
        name: "2nd",
        data: [
          0, 0, 0, 0, 150, 250, 350, 420, 200, 100, 10, 0, 0, 0, 0, 0, 150, 250, 350, 420, 200, 100, 10, 0, 0, 0, 0, 0,
          150, 250, 350, 420, 200, 100, 10, 0, 0, 0, 0, 0, 150, 250, 350, 420, 200, 100, 10, 0,
        ],
        marker: BC.marker03,
        pointStart: Date.UTC(2013, 11, 14),
        pointInterval: BC.interval._15M,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 0,
          headerFormat: "{point.key}<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">{series.name}: </span>' +
            '<span style="text-align: right">{point.y}</span>  <br/>' +
            "</p> ",
          footerFormat: "",
        },
        yAxis: 1,
      },
      {
        name: "3rd",
        data: [
          0, 0, 0, 0, 130, 260, 370, 410, 202, 105, 11, 0, 0, 0, 0, 0, 130, 260, 370, 410, 202, 105, 11, 0, 0, 0, 0, 0,
          130, 260, 370, 410, 202, 105, 11, 0, 0, 0, 0, 0, 130, 260, 370, 410, 202, 105, 11, 0,
        ],
        marker: BC.marker03,
        pointStart: Date.UTC(2013, 11, 14),
        pointInterval: BC.interval._15M,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 0,
          headerFormat: "{point.key}<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">{series.name}: </span>' +
            '<span style="text-align: right">{point.y}</span>  <br/>' +
            "</p> ",
          footerFormat: "",
        },
        yAxis: 2,
      },
      {
        name: "4th",
        data: [
          0, 0, 0, 0, 132, 213, 310, 410, 150, 70, 10, 0, 0, 0, 0, 0, 132, 213, 310, 410, 150, 70, 10, 0, 0, 0, 0, 0,
          132, 213, 310, 410, 150, 70, 10, 0, 0, 0, 0, 0, 132, 213, 310, 410, 150, 70, 10, 0,
        ],
        marker: BC.marker03,
        pointStart: Date.UTC(2013, 11, 14),
        pointInterval: BC.interval._15M,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 0,
          headerFormat: "{point.key}<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">{series.name}: </span>' +
            '<span style="text-align: right">{point.y}</span>  <br/>' +
            "</p> ",
          footerFormat: "",
        },
        yAxis: 3,
      },
    ],
    exporting: BC.exporting,
  });
});
