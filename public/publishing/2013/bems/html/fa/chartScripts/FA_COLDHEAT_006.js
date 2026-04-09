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
    yAxis: [
      {
        lineWidth: 1,
        title: {
          text: "냉수공급온도",
        },
        tickInterval: 0.2,
      },
      {
        lineWidth: 1,
        title: {
          text: "냉수환수온도",
        },
        opposite: 1,
        tickInterval: 50,
      },
    ],
    legend: BC.legend,
    series: [
      {
        name: "냉수공급온도",
        data: [
          2.3, 2.6, 2.8, 2.85, 2.9, 2.87, 2.8, 2.76, 2.73, 2.88, 2.86, 2.79, 2.8, 2.9, 2.87, 2.8, 2.76, 2.73, 2.88,
          2.86, 2.79, 2.8, 2.99, 2.95,
        ],
        pointInterval: BC.interval._1H,
        marker: BC.marker01,
        yAxis: 0,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 2,

          dateTimeLabelFormats: { hour: "%m월 %e일(%a) (%H:%M)" },
          pointStart: Date.UTC(2013, 11, 14),
          headerFormat: "{point.key}<br />",
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
        name: "냉수환수온도",
        color: "#0f0",
        data: [
          2.3, 22.64, 32.83, 42.82, 52.94, 62.83, 72.85, 82.72, 92.71, 102.85, 112.85, 122.79, 132.82, 142.92, 152.84,
          162.86, 172.76, 182.72, 192.84, 182.84, 172.72, 162.86, 152.93, 142.92,
        ],
        pointInterval: BC.interval._1H,
        marker: BC.marker01,
        yAxis: 1,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 2,
          dateTimeLabelFormats: { hour: "%m월 %e일(%a) (%H:%M)" },
          pointStart: Date.UTC(2013, 11, 14),
          headerFormat: "{point.key}<br />",
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
