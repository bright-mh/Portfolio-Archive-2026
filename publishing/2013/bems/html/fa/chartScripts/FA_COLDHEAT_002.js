/**
	ID : FA_COLDWARM_001.js
	설비성능분석 > 계통설비성능분석 > 냉열원 > 시간별
*/
$(function () {
  Highcharts.setOptions({
    lang: {
      weekdays: ["일", "월", "화", "수", "목", "금", "토"],
    },
  });

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
      title: {
        text: "가동시간(시간)",
      },
    },
    legend: BC.legend,
    series: [
      {
        name: "CH-1 기동정지_B",
        data: [
          14, 16, 18, 9, 5, 14, 24, 14, 24, 26, 21, 29, 31, 23, 15, 23, 14, 34, 12, 43, 31, 26, 31, 32, 31, 15, 17, 24,
          13, 41,
        ],
        pointInterval: BC.interval._1H,
        marker: BC.marker03,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 0,
          dateTimeLabelFormats: { hour: "%m월 %e일(%a)" },
          pointStart: Date.UTC(2013, 11, 14),
          headerFormat: "{point.key}<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">{series.name}: </span>' +
            '<span style="text-align: right">{point.y} 시간</span>  <br/>' +
            "</p> ",
          footerFormat: "",
          valueSuffix: "",
        },
      },
      {
        name: "CH-1 운전상태",
        data: [
          14, 16, 23, 14, 34, 12, 43, 31, 26, 31, 32, 31.15, 18, 9, 5, 14, 24, 14, 24, 26, 21, 29, 31, 23, 15, 17, 24,
          13, 41,
        ],
        pointInterval: BC.interval._1H,
        marker: BC.marker03,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 0,
          dateTimeLabelFormats: { hour: "%m월 %e일(%a)" },
          pointStart: Date.UTC(2013, 11, 14),
          headerFormat: " {point.key}<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">{series.name}: </span>' +
            '<span style="text-align: right">{point.y} 시간</span>  <br/>' +
            "</p> ",
          footerFormat: "",
          valueSuffix: "",
        },
      },
      {
        name: "냉/온수펌프-1 운전상태",
        data: [
          14, 16, 18, 9, 5, 14, 24, 14, 24, 26, 21, 29, 31, 23, 15, 23, 14, 34, 12, 43, 31, 26, 31, 32, 31, 15, 17, 24,
          13, 41,
        ],
        pointInterval: BC.interval._1H,
        marker: BC.marker03,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 0,
          dateTimeLabelFormats: { hour: "%m월 %e일(%a)" },
          pointStart: Date.UTC(2013, 11, 14),
          headerFormat: " {point.key}<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">{series.name}: </span>' +
            '<span style="text-align: right">{point.y} 시간</span>  <br/>' +
            "</p> ",
          footerFormat: "",
          valueSuffix: "",
        },
      },
      {
        name: "냉각수펌프-1 운전상태",
        data: [
          15, 23, 14, 34, 12, 43, 31, 26, 31, 32, 31, 15, 17, 24, 13, 41, 34, 12, 43, 31, 26, 31, 32, 31, 15, 27, 24,
          33, 41,
        ],
        pointInterval: BC.interval._1H,
        marker: BC.marker03,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 0,
          dateTimeLabelFormats: { hour: "%m월 %e일(%a)" },
          pointStart: Date.UTC(2013, 11, 14),
          headerFormat: " {point.key}<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">{series.name}: </span>' +
            '<span style="text-align: right">{point.y} 시간</span>  <br/>' +
            "</p> ",
          footerFormat: "",
          valueSuffix: "",
        },
      },
      {
        name: "냉각탑-1 운전상태",
        data: [
          31, 32, 31, 15, 17, 24, 13, 41, 34, 12, 43, 31, 26, 31, 32, 31, 14, 16, 43, 31, 26, 31, 32, 31, 14, 16, 18, 9,
          5,
        ],
        pointInterval: BC.interval._1H,
        marker: BC.marker03,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 0,
          dateTimeLabelFormats: { hour: "%m월 %e일(%a)" },
          pointStart: Date.UTC(2013, 11, 14),
          headerFormat: " {point.key}<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">{series.name}: </span>' +
            '<span style="text-align: right">{point.y} 시간</span>  <br/>' +
            "</p> ",
          footerFormat: "",
          valueSuffix: "",
        },
      },
    ],
    exporting: BC.exporting,
  });
});
