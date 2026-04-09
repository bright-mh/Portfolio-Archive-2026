/**
    AN_TIME_GS_002
    에너지분석 > 에너지 사용량 패턴분석 > 가스 사용패턴 > 누적사용량
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
    yAxis: [
      {
        min: 0,
        lineWidth: 1,
        title: BC.txt.nm3,
        labels: BC.yLabel,
      },
      {
        min: 0,
        lineWidth: 1,
        title: BC.txt.c0, //2014-01-07 y축 우축 단위 추가
        labels: BC.yLabel,
        opposite: 1,
      },
    ],
    plotOptions: {},
    legend: BC.legend,
    tooltip: BC.tooltip_ns,
    series: [
      {
        name: "사용량",
        data: [130, 120, 125, 120, 130, 150, 180, 210, 250, 280, 260, 240, 250, 240, 270, 250, 180, 140, 150, 160],
        pointStart: Date.UTC(2013, 11, 14),
        pointInterval: BC.interval._1H,
        marker: BC.marker01,
        tooltip: { valueSuffix: " N㎥" },
        color: BC.COLOR.GAS,
        lineColor: BC.COLOR.GAS,
      },
      {
        name: "비교대상",
        data: [
          135, 125, 120, 125, 135, 190, 185, 215, 255, 285, 265, 245, 255, 245, 275, 255, 185, 145, 155, 165, 185, 175,
          165, 145, 155,
        ],
        pointInterval: BC.interval._1H,
        pointStart: Date.UTC(2013, 11, 14),
        marker: BC.marker01,
        tooltip: { valueSuffix: " N㎥" },
        dashStyle: "Dash",
        color: BC.COLOR.GAS_1DAY,
        lineColor: BC.COLOR.GAS_1DAY,
      },
      {
        name: "외기온도",
        data: [-3.2, -1.2, 0.5, 0.6, 0.7, 0.9, 1.4, 1.9, 1.9, 2.0, 2.3, 2.4, 2.5, 2.8, 2.4, 2.3, 2.1, 1.7, 1.5, 1.3],
        pointInterval: BC.interval._1H,
        pointStart: Date.UTC(2013, 11, 14),
        marker: BC.marker01,
        tooltip: { valueSuffix: "  ℃" },
        yAxis: 1,
        color: BC.COLOR.TEMP_OUT,
        lineColor: BC.COLOR.TEMP_OUT,
      },
    ],
    exporting: BC.exporting,
  });
});
