/**
	ID : AN_PEAK_007
	
	에너지분석 월별 전기 피크
	x 축의 시작이 선택년의 1월 이고 
	x 축의 마지막이 선택년의 12월 이다.
	데이터는 1개월 간격으로 뿌려짐.

*/
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
    yAxis: {
      lineWidth: 1,
      tickInterval: 500,
      title: BC.txt.kW,
      labels: BC.yLabel,
    },
    legend: BC.legend,
    tooltip: {
      shared: false,
      seHTML: true,
      headerFormat: "",
      pointFormat:
        "<p>" +
        '<span style="color: {series.color}">{series.name}: </span>' +
        '<span style="text-align: right"> {point.y} </span> ' +
        "</span> ",
      footerFormat: "",
      valueDecimals: 2,
      dateTimeLabelFormats: { hour: "%Y-%m" },
    },
    series: [
      {
        type: "column",
        name: "현재",
        data: [450, 460, 450, 890, 1320, 1820, 2100, 2010, 2100, 1980, 700, 560],
        marker: BC.marker01,
        tooltip: {
          valueSuffix: " kW",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">전기피크: </span>' +
            '<span style="text-align: right"> {point.y} </span> ' +
            "</span> ",
        },
        index: 2,
        legendIndex: 0,
        color: BC.COLOR.ELECT,
        lineColor: BC.COLOR.ELECT,
      },
      {
        type: "line",
        name: "2013년 피크",
        data: [1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900],
        marker: BC.marker01,
        tooltip: { valueSuffix: " kW" },
        index: 2,
        legendIndex: 1,
        color: BC.COLOR.PEAK_THISYEAR,
        lineColor: BC.COLOR.PEAK_THISYEAR,
      },
      {
        type: "line",
        name: "2013년 목표피크",
        data: [2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100],
        marker: BC.marker01,
        tooltip: { valueSuffix: " kW" },
        index: 0,
        legendIndex: 2,
      },
      {
        type: "line",
        name: "2012년 피크",
        data: [2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400],
        marker: BC.marker01,
        tooltip: { valueSuffix: " kW" },
        index: 2,
        legendIndex: 3,
        color: BC.COLOR.PEAK_1YEAR,
        lineColor: BC.COLOR.PEAK_1YEAR,
      },
    ],
    exporting: BC.exporting,
  });
});
