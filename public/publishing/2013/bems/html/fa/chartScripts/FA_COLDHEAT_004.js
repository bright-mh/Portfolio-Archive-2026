/**
	ID : FA_COLDWARM_001.js
	설비성능분석 > 계통설비성능분석 > 냉열원 > 시간별
*/
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
    xAxis: {
      tickWidth: 0,
      categories: ["2013", "2012", "2011"],
    },
    yAxis: {
      lineWidth: 1,
      min: 0,
      title: {
        text: "가동시간(시간)",
      },
    },
    legend: BC.legend,
    series: [
      {
        name: "CH-1 기동정지_B",
        data: [1502.4523, 1800.4252435, 1850.2345234],
        marker: BC.marker03,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 2,
          dateTimeLabelFormats: { hour: "%Y" },
          pointStart: Date.UTC(2013, 11, 14),
          headerFormat: "{point.key}년<br />",
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
        data: [1504.224, 1830.934, 1860.1345],
        marker: BC.marker03,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 2,
          dateTimeLabelFormats: { hour: "%Y" },
          pointStart: Date.UTC(2013, 11, 14),
          headerFormat: "{point.key}년<br />",
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
        data: [1503.234, 1830.245, 1860.536],
        marker: BC.marker03,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 2,
          dateTimeLabelFormats: { hour: "%Y" },
          pointStart: Date.UTC(2013, 11, 14),
          headerFormat: "{point.key}년<br />",
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
        data: [1509.25524, 1650.25234, 1800.25324],
        marker: BC.marker03,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 2,
          dateTimeLabelFormats: { hour: "%Y" },
          pointStart: Date.UTC(2013, 11, 14),
          headerFormat: "{point.key}년<br />",
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
        data: [1500.2231, 1603.25, 1835.25],
        marker: BC.marker03,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 2,
          dateTimeLabelFormats: { hour: "%Y" },
          pointStart: Date.UTC(2013, 11, 14),
          headerFormat: "{point.key}년<br />",
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
