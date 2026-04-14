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
    xAxis: {
      tickWidth: 0,
      categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    },
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
        data: [0, 0, 0, 0, 140, 240, 360, 410, 210, 113, 8, 0],
        marker: BC.marker03,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 0,
          dateTimeLabelFormats: { hour: "%m월 %e일(%a)" },
          pointStart: Date.UTC(2013, 11, 14),
          headerFormat: "{point.key}월<br />",
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
        data: [0, 0, 0, 0, 150, 250, 350, 420, 200, 100, 10, 0],
        marker: BC.marker03,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 0,
          headerFormat: "{point.key}월<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">{series.name}: </span>' +
            '<span style="text-align: right">{point.y} 시간</span>  <br/>' +
            "</p> ",
          footerFormat: "",
        },
      },
      {
        name: "냉/온수펌프-1 운전상태",
        data: [0, 0, 0, 0, 130, 260, 370, 410, 202, 105, 11, 0],
        marker: BC.marker03,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 0,
          headerFormat: "{point.key}월<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">{series.name}: </span>' +
            '<span style="text-align: right">{point.y} 시간</span>  <br/>' +
            "</p> ",
          footerFormat: "",
        },
      },
      {
        name: "냉각수펌프-1 운전상태",
        data: [0, 0, 0, 0, 132, 213, 310, 410, 150, 70, 10, 0],
        marker: BC.marker03,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 0,
          headerFormat: "{point.key}월<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">{series.name}: </span>' +
            '<span style="text-align: right">{point.y} 시간</span>  <br/>' +
            "</p> ",
          footerFormat: "",
        },
      },
      {
        name: "냉각탑-1 운전상태",
        data: [0, 0, 0, 0, 151, 256, 354, 422, 206, 105, 11, 0],
        marker: BC.marker03,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 0,
          headerFormat: "{point.key}월<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">{series.name}: </span>' +
            '<span style="text-align: right">{point.y} 시간</span>  <br/>' +
            "</p> ",
          footerFormat: "",
        },
      },
    ],
    exporting: BC.exporting,
  });
});
