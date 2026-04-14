/**
	ID : AN_FLOOR_026
	
	에너지분석 실시간 층별 전기 사용량
	x 축의 시작이 당일의 0시 이고 
	x 축의 마지막이 현재 접속 시각이다. 
	데이터는 15분 간격으로 뿌려짐.
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
    tooltip: {
      valueSuffix: " kW",
      dateTimeLabelFormats: BC.dateFormat.full,
    },
    tooltip: BC.tooltip_ns,
    series: [
      {
        type: "column",
        name: "현재",
        data: [
          450, 460, 450, 460, 470, 500, 510, 480, 1880, 420, 450, 510, 450, 460, 520, 480, 450, 460, 450, 460, 470, 500,
          510, 480, 480, 420, 450, 510, 450, 460, 520, 480, 450, 460, 450, 460, 470, 500, 510, 480, 480, 420, 450, 510,
          460, 470, 500, 510, 480, 480, 420, 480,
        ],
        pointInterval: BC.interval._15M,
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
      },
      {
        type: "line",
        name: "2013년 피크",
        data: [
          1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900,
          1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900,
          1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900,
        ],
        pointInterval: BC.interval._15M,
        pointStart: Date.UTC(2013, 11, 22),
        marker: BC.marker01,
        tooltip: {
          headerFormat: "",
          valueSuffix: " kW",
        },
      },
      {
        type: "line",
        name: "2013년 목표피크",
        data: [
          2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100,
          2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100,
          2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100,
        ],
        pointInterval: BC.interval._15M,
        pointStart: Date.UTC(2013, 11, 22),
        marker: BC.marker01,
        tooltip: {
          headerFormat: "",
          valueSuffix: " kW",
        },
      },
      {
        type: "line",
        name: "2012년 피크",
        data: [
          2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400,
          2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400,
          2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400,
        ],
        pointInterval: BC.interval._15M,
        pointStart: Date.UTC(2013, 11, 22),
        marker: BC.marker01,
        tooltip: {
          headerFormat: "",
          valueSuffix: " kW",
        },
      },
    ],
    exporting: BC.exporting,
  });
  // 여기부터 2014-02-12 초기에 disabled 시키는 부분
  var chart = $("#chart01").highcharts();
  chart.series[3].hide();
  // 여기까지 2014-02-12 초기에 disabled 시키는 부분
});
