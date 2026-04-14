$(function () {
  $("#chart01").highcharts({
    chart: {
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
      type: "datetime",
      dateTimeLabelFormats: { hour: "%H" },
      tickInterval: BC.interval._1M,
    },
    yAxis: [
      {
        lineWidth: 1,
        min: 0,
        title: BC.txt.toe,
      },
      {
        lineWidth: 1,
        min: 0,
        title: BC.txt.nm3,
        opposite: 1,
      },
    ],
    legend: BC.legend,
    series: [
      {
        type: "column",
        name: "전기사용량",
        data: [130, 132, 130, 120, 123, 120, 100, 95, 81, 80, 85, 86],
        pointStart: Date.UTC(2013, 11, 14),
        pointInterval: BC.interval._1H,
        marker: BC.marker01,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 2,
          dateTimeLabelFormats: { hour: "%m" },
          headerFormat: "{point.key} 월 전체 목표량<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">{series.name} : </span>' +
            '<span style="text-align: right"> {point.y} toe </span>  <br/>' +
            "</p> ",
          footerFormat: "",
          valueSuffix: " toe",
        },
      },
      {
        type: "line",
        name: "가스사용량",
        data: [120, 122, 110, 130, 113, 100, 90, 85, 71, 70, 75, 76],
        pointStart: Date.UTC(2013, 11, 14),
        pointInterval: BC.interval._1H,
        marker: BC.marker03,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 2,
          dateTimeLabelFormats: { hour: "%m" },
          headerFormat: "{point.key} 월 사용량<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">{series.name} : </span>' +
            '<span style="text-align: right"> {point.y} toe </span>  <br/>',
          footerFormat: "",
          valueSuffix: " toe",
        },
      },
    ],
    exporting: BC.exporting,
  });
});
