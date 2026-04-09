/**
    AN_GOAL_002
    에너지분석 > 에너지 사용량 패턴분석 > 전기 사용패턴 > 평균사용량
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
      tickWidth: 0, //2014-01-07 x축 가로라인 삭제
    },
    yAxis: {
      lineWidth: 1,
      tickInterval: 200,
      title: BC.txt.toe,
      labels: BC.yLabel,
    },
    legend: BC.legend,
    tooltip: BC.tooltip_ns.yearly,
    series: [
      {
        name: "목표량",
        data: [0, 1400, 1600],
        tooltip: {
          pointFormat:
            "<p>" +
            '<span style="color:' +
            BC.COLOR.ELECT +
            '">전기: </span><span style="text-align: right">999 </span><br /> ' +
            '<span style="color:' +
            BC.COLOR.GAS +
            '">가스: </span><span style="text-align: right">999 </span><br /> ' +
            '<span style="color: {series.color}">전체: </span>' +
            '<span style="text-align: right"> {point.y} </span> ' +
            "</span> ",
          valueSuffix: " TOE",
        },
      },
      {
        name: "사용량",
        data: [0, 1800, 1500],
        tooltip: {
          pointFormat:
            "<p>" +
            '<span style="color:' +
            BC.COLOR.ELECT +
            '">전기: </span><span style="text-align: right">999 </span><br /> ' +
            '<span style="color:' +
            BC.COLOR.GAS +
            '">가스: </span><span style="text-align: right">999 </span><br /> ' +
            '<span style="color: {series.color}">전체: </span>' +
            '<span style="text-align: right"> {point.y} </span> ' +
            "</span> ",
          valueSuffix: " TOE",
        },
      },
    ],
    exporting: BC.exporting,
  });
});
