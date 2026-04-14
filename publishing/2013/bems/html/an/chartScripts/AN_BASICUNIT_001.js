/**
    AN_BASICUNIT_001
    에너지분석 > 원단위분석
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
      }, // 2014-01-06 폰트 통일을 위해 추가
    },
    title: BC.emptyText,
    credits: false,
    xAxis: {
      categories: [
        "OOOO",
        "일반빌딩",
        "공공빌딩",
        "백화점",
        "상가",
        "대학교",
        "연구소",
        "호텔",
        "병원",
        "통신",
        "아파트",
        "기타",
      ],
      labels: {
        y: 15 /*132323 categories 상단여백*/,
      },
      tickWidth: 0, //2014-01-07 X 축 라인 삭제
    },
    yAxis: [
      {
        min: 0,
        lineWidth: 1,
        title: BC.txt.kgoe,
        labels: BC.yLabel,
      },
    ],
    legend: BC.legend,
    series: [
      {
        name: "2013",
        data: [18, null, null, null, null, null, null, null, null, null, null, null],
        marker: BC.marker01, // 2014-01-07 marker 통일
        tooltip: {
          valueSuffix: " kgoe/㎡",
          shared: false,
          useHTML: true,
          headerFormat: "2013-12<br />{point.key} : ",
          pointFormat: '<span style="text-align: right">{point.y} </span> ',
          footerFormat: "",
          valueDecimals: 2,
        },
      },
      {
        name: "2012",
        data: [null, 19, 17, 21, 18, 12, 36, 28, 33, 64, 64, 20],
        marker: BC.marker01, // 2014-01-07 marker 통일
        tooltip: {
          valueSuffix: " kgoe/㎡",
          shared: false,
          useHTML: true,
          headerFormat: "2012<br />{point.key} : ",
          pointFormat: '<span style="text-align: right"> {point.y} </span> ',
          footerFormat: "",
          valueDecimals: 2,
        },
      },
    ],
    exporting: BC.exporting,
  });
});

/**
    AN_BASICUNIT_001
    에너지분석 > 원단위분석
*/

$(function () {
  $("#chart02").highcharts({
    chart: {
      type: "line",
      spacing: BC.spacing,
      events: {
        load: function (event) {
          onChartLoaded("chart02");
        },
      }, // 2014-01-06 폰트 통일을 위해 추가
    },
    title: BC.emptyText,
    credits: false,
    xAxis: {
      categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    },
    yAxis: [
      {
        min: 0,
        lineWidth: 1,
        title: BC.txt.kgoe,
        labels: BC.yLabel,
      },
    ],
    legend: BC.legend,
    tooltip: {
      valueSuffix: " kgoe/㎡",
      shared: false,
      useHTML: true,
      headerFormat: "{point.key} 월<br />",
      pointFormat:
        "<p>" +
        '<span style="color: {series.color}">2013 : </span>' +
        '<span style="text-align: right"> {point.y} </span> ' +
        "</span> ",
      footerFormat: "",
      valueDecimals: 2,
    },
    series: [
      {
        name: "2013",
        data: [2.7, 2.5, 2.9, 6, 4.8, 4, 7, 3.7, 4.5, 4],
        marker: BC.marker01, // 2014-01-07 marker 통일
      },
      {
        name: "2012",
        data: [5.7, 5.5, 5.9, 8, 6.8, 6, 7, 5.7, 6.5, 6, 3.5, 6],
        marker: BC.marker01, // 2014-01-07 marker 통일
      },
      {
        name: "2011",
        data: [4.7, 4.5, 4.9, 7, 5.8, 5, 7, 4.7, 5.5, 5, 3.5, 5],
        marker: BC.marker01, // 2014-01-07 marker 통일
        dashStyle: "Dash",
      },
    ],
    exporting: BC.exporting,
  });
});
