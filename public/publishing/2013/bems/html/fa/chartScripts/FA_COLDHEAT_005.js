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
      tickWidth: 0, // 2014-01-10 x축 선 없앰.
      type: "datetime",
      labels: {
        rotation: 270,
      },
      tickInterval: 15 * 60 * 1000,
    },
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
        data: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
          0, 0, 0, 0, 0, 0, 0, 0,
        ],
        marker: BC.marker03,
        pointStart: Date.UTC(2013, 11, 14),
        pointInterval: 15 * 60 * 1000,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 2,
          dateTimeLabelFormats: { hour: "%H:%M" },
          headerFormat: "{point.key}<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">{series.name}: </span>' +
            '<span style="text-align: right"> ' +
            ("{point.y}" == "0" ? "OFF" : "ON") +
            " </span>  <br/>" +
            "</p> ",
          footerFormat: "",
          valueSuffix: "",
        },
      },
      {
        name: "CH-1 운전상태",
        data: [
          0, 0, 0, 0, 01, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        marker: BC.marker03,
        pointStart: Date.UTC(2013, 11, 14),
        pointInterval: 15 * 60 * 1000,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 2,
          dateTimeLabelFormats: { hour: "%H:%M" },
          headerFormat: "{point.key}<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">{series.name}: </span>' +
            '<span style="text-align: right"> ' +
            ("{point.y}" == "0" ? "OFF" : "ON") +
            " </span>  <br/>" +
            "</p> ",
          footerFormat: "",
          valueSuffix: "",
        },
      },
      {
        name: "냉/온수펌프-1 운전상태",
        data: [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          ,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
        ],
        marker: BC.marker03,
        pointStart: Date.UTC(2013, 11, 14),
        pointInterval: 15 * 60 * 1000,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 2,
          dateTimeLabelFormats: { hour: "%H:%M" },
          headerFormat: "{point.key}<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">{series.name}: </span>' +
            '<span style="text-align: right"> ' +
            ("{point.y}" == "0" ? "OFF" : "ON") +
            " </span>  <br/>" +
            "</p> ",
          footerFormat: "",
          valueSuffix: "",
        },
      },
      {
        name: "냉각수펌프-1 운전상태",
        data: [
          0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 01, 1, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        marker: BC.marker03,
        pointStart: Date.UTC(2013, 11, 14),
        pointInterval: 15 * 60 * 1000,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 2,
          dateTimeLabelFormats: { hour: "%H:%M" },
          headerFormat: "{point.key}<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">{series.name}: </span>' +
            '<span style="text-align: right"> ' +
            ("{point.y}" == "0" ? "OFF" : "ON") +
            " </span>  <br/>" +
            "</p> ",
          footerFormat: "",
          valueSuffix: "",
        },
      },
      {
        name: "냉각탑-1 운전상태",
        data: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        marker: BC.marker03,
        pointStart: Date.UTC(2013, 11, 14),
        pointInterval: 15 * 60 * 1000,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 2,
          dateTimeLabelFormats: { hour: "%H:%M" },
          headerFormat: "{point.key}<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">{series.name}: </span>' +
            '<span style="text-align: right"> ' +
            ("{point.y}" == "0" ? "OFF" : "ON") +
            " </span>  <br/>" +
            "</p> ",
          footerFormat: "",
          valueSuffix: "",
        },
      },
    ],
    exporting: BC.exporting,
  });
});
