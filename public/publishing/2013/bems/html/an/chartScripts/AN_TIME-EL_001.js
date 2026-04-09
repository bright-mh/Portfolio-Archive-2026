/**
    AN_TIME_EL_001
    에너지분석 > 에너지 사용량 패턴분석 > 전기 사용패턴 > 평균사용량
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
      tickWidth: 0,
      type: "datetime",
      dateTimeLabelFormats: {
        //                hour: '%H'
        day: "%H:%M", //2014-01-06 데이터 포멧 변경
        hour: "%H:%M", //2014-01-06 데이터 포멧 변경
      },
      //                tickInterval: BC.interval._2H,	//2014-01-06 시간 인터벌 제거
      labels: {
        style: {
          "font-size": "11px", //2014-01-06 font-size 수정
        },
      },

      plotBands: [
        {
          from: Date.UTC(2013, 11, 14),
          to: Date.UTC(2013, 11, 14) + 1000 * 60 * 60 * 9,
          color: "rgba(241, 246, 231, 1)",
        },
        {
          from: Date.UTC(2013, 11, 14) + 1000 * 60 * 60 * 9,
          to: Date.UTC(2013, 11, 14) + 1000 * 60 * 60 * 10,
          color: "rgba(253, 243, 224, 1)",
        },
        {
          from: Date.UTC(2013, 11, 14) + 1000 * 60 * 60 * 10,
          to: Date.UTC(2013, 11, 14) + 1000 * 60 * 60 * 12,
          color: "rgba(248, 229, 229, 1)",
        },
        {
          from: Date.UTC(2013, 11, 14) + 1000 * 60 * 60 * 12,
          to: Date.UTC(2013, 11, 14) + 1000 * 60 * 60 * 17,
          color: "rgba(253, 243, 224, 1)",
        },
        {
          from: Date.UTC(2013, 11, 14) + 1000 * 60 * 60 * 17,
          to: Date.UTC(2013, 11, 14) + 1000 * 60 * 60 * 19,
          color: "rgba(248, 229, 229, 1)",
        },
        {
          from: Date.UTC(2013, 11, 14) + 1000 * 60 * 60 * 19,
          to: Date.UTC(2013, 11, 14) + 1000 * 60 * 60 * 22,
          color: "rgba(253, 243, 224, 1)",
        },
        {
          from: Date.UTC(2013, 11, 14) + 1000 * 60 * 60 * 22,
          to: Date.UTC(2013, 11, 14) + 1000 * 60 * 60 * 24,
          color: "rgba(253, 243, 224, 1)",
        },
      ],
    },
    yAxis: [
      {
        min: 0,
        lineWidth: 1,
        tickInterval: 50,
        title: BC.txt.kW,
        labels: BC.yLabel,
      },
      {
        lineWidth: 1,
        tickInterval: 1,
        title: BC.txt.c0,
        labels: BC.yLabel,
        opposite: 1,
      },
    ],
    legend: BC.legend,
    tooltip: BC.tooltip_ns,
    series: [
      {
        name: "사용량",
        data: [130, 120, 125, 120, 130, 150, 180, 210, 250, 280, 260, 240, 250, 240, 270, 250, 180, 140, 150, 160],
        pointStart: Date.UTC(2013, 11, 14),
        pointInterval: BC.interval._1H,
        marker: BC.marker01,
        tooltip: { valueSuffix: " kW" },
        color: BC.COLOR.ELECT,
        lineColor: BC.COLOR.ELECT,
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
        tooltip: { valueSuffix: " kW" },
        dashStyle: "Dash",
        color: BC.COLOR.ELECT_2,
        lineColor: BC.COLOR.ELECT_2,
      },
      {
        name: "외기온도",
        data: [-3.2, -1.2, 0.5, 0.6, 0.7, 0.9, 1.4, 1.9, 1.9, 2.0, 2.3, 2.4, 2.5, 2.8, 2.4, 2.3, 2.1, 1.7, 1.5, 1.3],
        pointInterval: BC.interval._1H,
        pointStart: Date.UTC(2013, 11, 14),
        marker: BC.marker01,
        tooltip: { valueSuffix: " ℃" },
        color: BC.COLOR.TEMP_OUT,
        lineColor: BC.COLOR.TEMP_OUT,
        yAxis: 1,
      },
    ],
    exporting: BC.exporting,
  });
});
