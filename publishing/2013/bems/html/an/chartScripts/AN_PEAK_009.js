/**
    AN_PEAK_009
    에너지분석 > 트랜드분석 > 전기피크 > 일별
*/

$(function () {
  $("#chart01").highcharts({
    chart: {
      type: "column",
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
      categories: ["2011", "2012", "2013"],
      tickWidth: 0, //2014-01-06 X축 라인 삭제
    },
    yAxis: {
      lineWidth: 1,
      tickInterval: 500,
      title: BC.txt.kW,
      labels: BC.yLabel,
    },
    legend: BC.legend,
    series: [
      {
        name: "목표피크",
        data: [0, 2400, 2500],
        marker: BC.marker01,
        tooltip: {
          shared: false,
          seHTML: true,
          headerFormat: '<span style="color: {series.color}; font-weight:bold;"> {point.key} 년 </span>',
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}; font-weight:bold; "> {series.name}: </span>' +
            '<span style="text-align: right"> {point.y} </span> ' +
            "</p> ",
          footerFormat: "",
          valueDecimals: 2,
          valueSuffix: " kW",
        },
      },
      {
        name: "피크전력",
        data: [0, 2300, 2600],
        marker: BC.marker01,
        tooltip: {
          shared: false,
          seHTML: true,
          headerFormat:
            '<span style="color: {series.color}; font-weight:bold;"> {point.key}-10-23 (14:00)</span><br />',
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}; font-weight:bold; ">전기피크: </span>' +
            '<span style="text-align: right"> {point.y} </span> ' +
            "</p> ",
          footerFormat: "",
          valueDecimals: 2,
          valueSuffix: " kW",
        },
        color: "#0d233a",
      },
    ],
    exporting: BC.exporting,
  });
});
