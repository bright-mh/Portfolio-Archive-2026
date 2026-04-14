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
      categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    },
    yAxis: [
      {
        lineWidth: 1,
        min: 0,
        title: BC.txt.kWh,
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
        marker: BC.marker01,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 2,
          headerFormat: "{point.key} 월 전기 사용량<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">전기 : </span>' +
            '<span style="text-align: right"> {point.y}</span>  <br/>' +
            "</p> ",
          footerFormat: "",
          valueSuffix: " kWh",
        },
      },
      {
        type: "line",
        name: "가스사용량",
        data: [120, 122, 110, 130, 113, 100, 90, 85, 71, 70, 75, 76],
        marker: BC.marker03,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 2,
          headerFormat: "{point.key} 월 가스 사용량<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">가스 : </span>' +
            '<span style="text-align: right"> {point.y}</span>  <br/>',
          footerFormat: "",
          valueSuffix: " N㎥",
        },
      },
    ],
    exporting: BC.exporting,
  });
});
