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

    xAxis: BC.xAxis._1D,
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
        type: "area",
        name: "사용량",
        color: BC.COLOR.TOTAL,
        marker: BC.marker01,
        data: [
          0.02005, 0.02436, 0.02063, 0.01057, 0.03618, 0.03444, 0.03822, 0.045468, 0.010434, 0.054126, 0.077387,
          0.039459, 0.04005, 0.01436, 0.02063, 0.03057, 0.03618, 0.06444, 0.09822, 0.015468, 0.020434, 0.024126,
          0.027387, 0.039459, 0.04005, 0.03436, 0.04063, 0.01057, 0.01618, 0.01444,
        ],
        pointStart: Date.UTC(2013, 11, 1),
        pointInterval: BC.interval._1D,
        tooltip: {
          valueSuffix: " toe", // 2014-01-14 TOE -> toe
          dateTimeLabelFormats: BC.dateFormat.full,
          shared: false,
          seHTML: true,
          headerFormat: "{point.key}<br />",
          pointFormat:
            '<span style="color:#ed8672;">전기</span> : 10 toe<br/>' + // 2014-01-14 TOE -> toe
            '<span style="color:#77b4d3;">가스</span> : 0.5599 toe<br/>' + // 2014-01-14 TOE -> toe
            '<span style="color: {series.color}">전체 사용량: </span>' +
            '<span style="text-align: right"> {point.y} </span> ',
          footerFormat: "",
          valueDecimals: 2,
          dateTimeLabelFormats: { day: "%Y-%m-%e" },
        },
        legendIndex: 1,
      },
      {
        type: "spline",
        lineColor: BC.COLOR.TEMP_OUT,
        lineWidth: 2,
        name: "평균 외기온도",
        color: BC.COLOR.TEMP_OUT,
        marker: BC.marker01,
        yAxis: 1,
        data: [
          3.06, 3.605, 3.471, 3.322, 3.238, 3.221, 3.129, 3.089, 8.339, 3.399, 3.538, 3.643, 4.06, 4.605, 8.471, 3.322,
          3.238, 8.221, 4.129, 4.089, 4.339, 4.399, 4.538, 4.643, 5.06, 5.605, 8.471, 5.322, 5.238, 8.221,
        ],
        pointStart: Date.UTC(2013, 11, 1),
        pointInterval: BC.interval._1D,
        tooltip: {
          valueSuffix: " ℃",
          dateTimeLabelFormats: BC.dateFormat.full,
          shared: false,
          seHTML: true,
          headerFormat: "{point.key}<br />",
          pointFormat:
            '<span style="color: {series.color}">{series.name}: </span>' +
            '<span style="text-align: right"> {point.y} </span> ',
          footerFormat: "",
          valueDecimals: 2,
          dateTimeLabelFormats: { day: "%Y-%m-%e" },
        },
        index: 3,
        legendIndex: 2,
      },
      {
        type: "area",
        name: "비교대상 사용량",
        marker: BC.marker01,
        color: BC.COLOR.TOTAL_2,
        data: [
          0.05005, 0.01436, 0.02063, 0.03057, 0.04618, 0.06444, 0.09822, 0.015468, 0.020434, 0.024126, 0.027387,
          0.039459, 0.03005, 0.09436, 0.02063, 0.03057, 0.04618, 0.06444, 0.09822, 0.015468, 0.020434, 0.024126,
          0.037387, 0.039459, 0.06005, 0.02436, 0.05063, 0.04057, 0.04618, 0.06444,
        ],
        pointStart: Date.UTC(2013, 11, 1),
        pointInterval: BC.interval._1D,
        tooltip: {
          valueSuffix: " toe", // 2014-01-14 TOE -> toe
          dateTimeLabelFormats: BC.dateFormat.full,
          shared: false,
          seHTML: true,
          headerFormat: "{point.key}<br />",
          pointFormat:
            '<span style="color:#ed8672;">전기</span> : 10 toe<br/>' + // 2014-01-14 TOE -> toe
            '<span style="color:#77b4d3;">가스</span> : 0.5599 toe<br/>' + // 2014-01-14 TOE -> toe
            '<span style="color: {series.color}">전체 사용량: </span>' +
            '<span style="text-align: right"> {point.y} </span> ',
          footerFormat: "",
          valueDecimals: 2,
          dateTimeLabelFormats: { day: "%Y-%m-%e" },
        },
        legendIndex: 3,
      },

      {
        type: "spline",
        lineWidth: 2,
        name: "비교대상 평균 외기온도",
        marker: BC.marker01,
        color: BC.COLOR.TEMP_1YEAR,
        yAxis: 1,
        data: [
          3.06, 3.605, 3.471, 3.322, 3.238, 3.221, 3.129, 3.089, 8.339, 3.399, 3.538, 3.643, 3.06, 4.605, 4.471, 4.322,
          4.238, 4.221, 4.129, 4.089, 4.339, 4.399, 4.538, 4.643, 5.06, 5.605, 5.471, 5.322, 5.238, 5.221, 5.129,
        ],
        pointStart: Date.UTC(2013, 11, 1),
        pointInterval: BC.interval._1D,
        tooltip: {
          valueSuffix: " ℃",
          dateTimeLabelFormats: BC.dateFormat.full,
          shared: false,
          seHTML: true,
          headerFormat: "{point.key}<br />",
          pointFormat:
            '<span style="color: {series.color}">{series.name}: </span>' +
            '<span style="text-align: right"> {point.y} </span> ',
          footerFormat: "",
          valueDecimals: 2,
          dateTimeLabelFormats: { day: "%Y-%m-%e" },
        },
        legendIndex: 4,
      },
    ],
    legend: BC.legend,
    tooltip: BC.tooltip_ns,
    exporting: BC.exporting,
  });
});
