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
        "B6",
        "B5",
        "B4",
        "B3",
        "B2",
        "B1",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31",
        "32",
        "33",
        "34",
        "35",
      ],
      tickWidth: 0, //2014-01-06 X축 라인 삭제
    },
    yAxis: {
      lineWidth: 1,
      min: 0,
      tickInterval: 2000,
      title: BC.txt.kW,
      labels: BC.yLabel,
    },
    legend: BC.legend,
    tooltip: {
      shared: false,
      seHTML: true,
      headerFormat: "2013-10-23<br />{point.key}층<br />",
      pointFormat:
        "<p>" +
        '<span style="color: {series.color}">{series.name}: </span>' +
        '<span style="text-align: right"> {point.y} </span> ' +
        "</span> ",
      footerFormat: "",
      valueDecimals: 2,
    },
    series: [
      {
        name: "사용량",
        data: [
          16000, 16200, 16200, 15800, 15700, 15000, 15900, 16000, 13800, 14500, 16900, 16300, 16200, 15800, 15700,
          15000, 12900, 16100, 12800, 14300, 13900, 16200, 12200, 12800, 13700, 14000, 14900, 16400, 13400, 11500,
          16600, 14300, 16500, 15400, 15700, 15000, 15900, 16300, 11800, 14400, 14900,
        ],
        marker: BC.marker01,
        tooltip: { valueSuffix: " kW" },
        color: BC.COLOR.TOTAL,
        lineColor: BC.COLOR.TOTAL,
      },
    ],
    exporting: BC.exporting,
  });
});
