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
        title: BC.txt.kWh,
      },
      {
        lineWidth: 1,
        title: BC.txt.kW,
        min: 0,
        max: 15,
        opposite: 1,
      },
    ],
    legend: BC.legend,
    series: [
      {
        type: "column",
        name: "2013년 사용량(kWh)",
        data: [120, 122, 110, 130, 113, 100, 90, 85, 71, 70, 75, 76],
        marker: BC.marker01,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 2,
          headerFormat: "2013년 {point.key}월 전기사용량<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">전기 : </span>' +
            '<span style="text-align: right"> {point.y} </span>  <br/>' +
            "</p> ",
          footerFormat: "",
          valueSuffix: " kWh",
        },
      },
      {
        type: "column",
        name: "2012년 사용량(kWh)", // 2013-12-23 단위수정 (kwh -> kWh)
        data: [120, 122, 110, 130, 113, 100, 90, 85, 71, 70, 75, 76],
        marker: BC.marker01,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 2,
          headerFormat: "2013년 {point.key}월 전기사용량<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">전기 : </span>' +
            '<span style="text-align: right"> {point.y} </span>  <br/>' +
            "</p> ",
          footerFormat: "",
          valueSuffix: " kWh",
        },
      },
      // 2013-12-26 2012년 전기 목표 Peak 데이터 추가
      {
        type: "line",
        name: "2012년 전기 목표 Peak",
        data: [14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14],
        marker: BC.marker01,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 2,
          headerFormat: "2012년 전기 목표피크<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">전기 : </span>' +
            '<span style="text-align: right"> {point.y} </span>  <br/>' +
            "</p> ",
          footerFormat: "",
          valueSuffix: " kW", // 2013-12-23 단위 수정 (kw -> kW)
        },
        yAxis: 1,
      },
    ],
    exporting: BC.exporting,
  });
});

// 2014-01-07 ie8  에서 선 없애는 것은 다른 방법으로 해결. 기존 방법 때문에 다른 그래프 y 축에 선이 안나오게 되어 삭제.
