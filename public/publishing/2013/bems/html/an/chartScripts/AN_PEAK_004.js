/**
	ID : AN_PEAK_004
	
	에너지분석 시간별 층별 전기 사용량
	x 축의 시작이 선택일의 0시 이고 
	x 축의 마지막이 선택일의 24시 이다.
	데이터는 15분 간격으로 뿌려짐.
    
    비교대상이 있는 경우
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
    //		xAxis: BC.xAxis._2H,		//2014-01-06 하기와 같이 변경
    /*2014-01-06  x축 시간 표기 및 설정*/
    xAxis: [
      {
        type: "datetime",
        dateTimeLabelFormats: {
          day: "%H:%M",
          hour: "%H:%M",
        },
        tickWidth: 0,
        labels: {
          style: {
            "font-size": "11px",
          },
        },
      },
    ],
    /* //End 2014-01-06  x축 시간 표기 및 설정*/
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
    tooltip: BC.tooltip_ns,
    series: [
      {
        type: "column",
        name: "현재",
        data: [
          450,
          460,
          450,
          460, // 0
          470,
          500,
          510,
          480, // 1
          1880,
          420,
          450,
          510,
          450,
          460,
          450,
          460, // 0
          470,
          500,
          510,
          480, // 1
          1880,
          420,
          450,
          510,
        ],
        pointInterval: BC.interval._1H,
        pointStart: Date.UTC(2013, 11, 22),
        marker: BC.marker01,
        tooltip: {
          valueSuffix: " kW",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">전기피크: </span>' +
            '<span style="text-align: right"> {point.y} </span> ' +
            "</span> ",
        },
        color: BC.COLOR.ELECT,
        lineColor: BC.COLOR.ELECT,
        index: 1,
        legendIndex: 0,
      },
      {
        type: "line",
        name: "2013년 피크",
        data: [
          1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900,
          1900, 1900, 1900, 1900, 1900, 1900,
        ],
        pointInterval: BC.interval._1H,
        pointStart: Date.UTC(2013, 11, 22),
        marker: BC.marker01,
        tooltip: {
          headerFormat: "",
          valueSuffix: " kW",
        },
        color: BC.COLOR.PEAK_THISYEAR,
        lineColor: BC.COLOR.PEAK_THISYEAR,
        index: 2,
        legendIndex: 1,
      },
      {
        type: "line",
        name: "2013년 목표피크",
        data: [
          2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100,
          2100, 2100, 2100, 2100, 2100, 2100,
        ],
        pointInterval: BC.interval._1H,
        pointStart: Date.UTC(2013, 11, 22),
        marker: BC.marker01,
        tooltip: {
          headerFormat: "",
          valueSuffix: " kW",
        },
        index: 3,
        legendIndex: 2,
      },
      {
        type: "line",
        name: "2012년 목표피크",
        data: [
          2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400,
          2400, 2400, 2400, 2400, 2400, 2400,
        ],
        pointInterval: BC.interval._1H,
        pointStart: Date.UTC(2013, 11, 22),
        marker: BC.marker01,
        tooltip: {
          headerFormat: "",
          valueSuffix: " kW",
        },
        color: BC.COLOR.PEAK_1YEAR,
        lineColor: BC.COLOR.PEAK_1YEAR,
        index: 4,
        legendIndex: 3,
      },
      {
        type: "area",
        name: "비교대상",
        data: [
          440,
          440,
          440,
          440, // 0
          450,
          450,
          450,
          440, // 1
          450,
          420,
          450,
          440,
          440,
          440,
          440,
          440, // 0
          450,
          450,
          450,
          440, // 1
          450,
          420,
          450,
          440,
        ],
        pointInterval: BC.interval._1H,
        pointStart: Date.UTC(2013, 11, 22),
        marker: BC.marker01,
        tooltip: {
          headerFormat: "",
          valueSuffix: " kW",
        },
        color: BC.COLOR.ELECT_2,
        lineColor: BC.COLOR.ELECT_2,
        index: 0,
        legendIndex: 4,
      },
    ],
    exporting: BC.exporting,
  });
});
