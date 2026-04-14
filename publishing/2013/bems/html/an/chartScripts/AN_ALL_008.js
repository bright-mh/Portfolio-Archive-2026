jQuery(function () {
  jQuery("#chart01").highcharts({
    chart: {
      spacing: BC.spacing,
      events: {
        load: function (event) {
          onChartLoaded("chart01");
        },
      }, // 2014-01-06 폰트 통일을 위해 추가
    },
    title: BC.emptyText,
    subtitle: BC.emptyText,
    credits: false,
    xAxis: {
      tickWidth: 0,
      categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    },
    yAxis: [
      {
        lineWidth: 1,
        title: BC.txt.toe,
        tickInterval: 0.01,
      },
      {
        lineWidth: 1,
        title: BC.txt.c0,
        tickInterval: 1,
        opposite: true,
      },
    ],
    series: [
      {
        type: "column",
        name: "사용량",
        color: BC.COLOR.TOTAL,
        marker: BC.marker01,
        data: [
          0.05005, 0.01436, 0.02063, 0.03057, 0.04618, 0.06444, 0.09822, 0.015468, 0.020434, 0.024126, 0.027387,
          0.039459,
        ],
        tooltip: {
          valueSuffix: " toe", // 2014-01-14 TOE -> toe
          dateTimeLabelFormats: BC.dateFormat.full,
          shared: false,
          seHTML: true,
          headerFormat: "2013 {point.key}<br />",
          pointFormat:
            '<span style="color:#ed8672;">전기</span> : 10 toe<br/>' + // 2014-01-14 TOE -> toe
            '<span style="color:#77b4d3;">가스</span> : 0.5599 toe<br/>' + // 2014-01-14 TOE -> toe
            '<span style="color: {series.color}">전체 사용량: </span>' +
            '<span style="text-align: right"> {point.y} </span> ',

          footerFormat: "",
          valueDecimals: 2,
          dateTimeLabelFormats: { day: "%Y-%m-%e" },
        },
      },
      {
        type: "spline",
        lineColor: BC.COLOR.TEMP_OUT,
        lineWidth: 2,
        name: "평균 외기온도",
        color: BC.COLOR.TEMP_OUT,
        marker: BC.marker01,
        yAxis: 1,
        data: [3.06, 3.605, 3.471, 3.322, 3.238, 3.221, 3.129, 3.089, 8.339, 3.399, 3.538, 3.643],
        tooltip: {
          valueSuffix: " ℃",
          dateTimeLabelFormats: BC.dateFormat.full,
          shared: false,
          seHTML: true,
          headerFormat: "2013 {point.key}<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">{series.name}: </span>' +
            '<span style="text-align: right"> {point.y} </span> ' +
            "</span> ",
          footerFormat: "",
          valueDecimals: 2,
          dateTimeLabelFormats: { day: "%Y-%m-%e" },
        },
      },
    ],
    legend: BC.legend,
    exporting: BC.exporting,
  });
});
