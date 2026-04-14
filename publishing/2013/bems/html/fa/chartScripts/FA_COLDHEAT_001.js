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
    xAxis: BC.xAxis._2H,
    yAxis: {
      lineWidth: 1,
      categories: ["OFF(0)", "ON(1)"],
      title: {
        text: "가동상태(ON/OFF)",
      },
    },
    legend: BC.legend,
    series: [
      {
        name: "CH-1 기동정지_B",
        data: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        pointInterval: BC.interval._1H,
        marker: BC.marker01,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 0,

          dateTimeLabelFormats: { hour: "%m월 %e일(%a) (%H:%M)" },
          pointStart: Date.UTC(2013, 11, 14),
          headerFormat: "오늘, {point.key}<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">{series.name}: </span>' +
            '<span style="text-align: right">{point.y}</span>  <br/>' +
            "</p> ",
          footerFormat: "",
          valueSuffix: "",
        },
      },
      {
        name: "CH-1 운전상태",
        data: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        pointInterval: BC.interval._1H,
        marker: BC.marker01,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 0,

          dateTimeLabelFormats: { hour: "%m월 %e일(%a) (%H:%M)" },
          pointStart: Date.UTC(2013, 11, 14),
          headerFormat: "오늘, {point.key}<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">{series.name}: </span>' +
            '<span style="text-align: right">{point.y}</span>  <br/>' +
            "</p> ",
          footerFormat: "",
          valueSuffix: "",
        },
      },
      {
        name: "냉/온수펌프-1 운전상태",
        data: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        pointInterval: BC.interval._1H,
        marker: BC.marker01,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 0,

          dateTimeLabelFormats: { hour: "%m월 %e일(%a) (%H:%M)" },
          pointStart: Date.UTC(2013, 11, 14),
          headerFormat: "오늘, {point.key}<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">{series.name}: </span>' +
            '<span style="text-align: right">{point.y}</span>  <br/>' +
            "</p> ",
          footerFormat: "",
          valueSuffix: "",
        },
      },
      {
        name: "냉각수펌프-1 운전상태",
        data: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        pointInterval: BC.interval._1H,
        marker: BC.marker01,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 0,

          dateTimeLabelFormats: { hour: "%m월 %e일(%a) (%H:%M)" },
          pointStart: Date.UTC(2013, 11, 14),
          headerFormat: "오늘, {point.key}<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">{series.name}: </span>' +
            '<span style="text-align: right">{point.y}</span>  <br/>' +
            "</p> ",
          footerFormat: "",
          valueSuffix: "",
        },
      },
      {
        name: "냉각탑-1 운전상태",
        data: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        pointInterval: BC.interval._1H,
        marker: BC.marker01,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 0,

          dateTimeLabelFormats: { hour: "%m월 %e일(%a) (%H:%M)" },
          pointStart: Date.UTC(2013, 11, 14),
          headerFormat: "오늘, {point.key}<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">{series.name}: </span>' +
            '<span style="text-align: right">{point.y}</span>  <br/>' +
            "</p> ",
          footerFormat: "",
          valueSuffix: "",
        },
      },
    ],
    exporting: BC.exporting,
  });
});
