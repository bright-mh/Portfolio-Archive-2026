/**
	ID : AN_PEAK_005
	
	에너지분석 일별 전기피크
	x 축의 시작이 선택일의 0시 이고 
	x 축의 마지막이 선택일의 24시 이다.
	데이터는 1일 간격으로 뿌려짐.

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
    xAxis: BC.xAxis._1D,
    yAxis: {
      lineWidth: 1,
      tickInterval: 500,
      title: BC.txt.kW,
      labels: BC.yLabel,
    },
    plotOptions: {
      column: {
        stacking: "normal",
      },
    },
    legend: BC.legend,
    tooltip: BC.tooltip_ns.daily,
    series: [
      {
        type: "column",
        name: "현재",
        data: [
          450, 460, 450, 460, 500, 650, 720, 890, 1320, 1820, 2100, 2010, 2100, 1980, 1900, 2100, 2000, 1780, 1600,
          1200, 890, 700, 560, 540, 530, 460, 440, 470, 420, 670,
        ],
        pointInterval: BC.interval._1D,
        pointStart: Date.UTC(2013, 11, 1),
        marker: BC.marker01,
        tooltip: {
          valueSuffix: " kW",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">전기피크: </span>' +
            '<span style="text-align: right"> {point.y} </span> ' +
            "</span> ",
        },
        index: 1,
        legendIndex: 0,
        color: BC.COLOR.ELECT,
        lineColor: BC.COLOR.ELECT,
      },
      {
        type: "line",
        name: "2013년 피크",
        data: [
          1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900,
          1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900,
        ],
        pointInterval: BC.interval._1D,
        pointStart: Date.UTC(2013, 11, 1),
        marker: BC.marker01,
        tooltip: {
          headerFormat: "",
          valueSuffix: " kW",
        },
        index: 1,
        legendIndex: 1,
        color: BC.COLOR.PEAK_THISYEAR,
        lineColor: BC.COLOR.PEAK_THISYEAR,
      },
      {
        type: "area",
        name: "2013년 목표피크",
        data: [
          2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100,
          2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100,
        ],
        pointInterval: BC.interval._1D,
        pointStart: Date.UTC(2013, 11, 1),
        marker: BC.marker01,
        tooltip: {
          headerFormat: "",
          valueSuffix: " kW",
        },
        index: 0,
        legendIndex: 2,
      },
      {
        type: "line",
        name: "2012년 피크",
        data: [
          2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400,
          2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400,
        ],
        pointInterval: BC.interval._1D,
        pointStart: Date.UTC(2013, 11, 1),
        marker: BC.marker01,
        tooltip: {
          headerFormat: "",
          valueSuffix: " kW",
        },
        index: 1,
        legendIndex: 3,
        color: BC.COLOR.PEAK_1YEAR,
        lineColor: BC.COLOR.PEAK_1YEAR,
      },
    ],
    exporting: BC.exporting,
  });
});
