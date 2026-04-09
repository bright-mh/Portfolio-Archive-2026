jQuery(function () {
  jQuery("#chart01").highcharts({
    chart: {
      spacing: BC.spacing,
      events: {
        load: function (event) {
          onChartLoaded("chart01");
        },
      }, // 2014-01-07 폰트 통일을 위해 추가
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
        title: BC.txt.nm3,
      },
    ],
    series: [
      {
        type: "column",
        name: "증기보일러 가스사용량",
        marker: BC.marker01,
        stack: "normal",
        data: [0, 0, 0, 0, 0, 0, 673, 17019, 8246, 11063, 21400, 0],
        tooltip: {
          valueSuffix: " N㎥",
          dateTimeLabelFormats: BC.dateFormat.full,
        },
      },
      {
        type: "column",
        name: "가스취사",
        marker: BC.marker01,
        stack: "normal",
        data: [0, 0, 0, 0, 0, 0, 573, 16235, 6452, 8223, 19744, 0],
        tooltip: {
          valueSuffix: " N㎥",
          dateTimeLabelFormats: BC.dateFormat.full,
        },
      },
      {
        type: "column",
        name: "LPG",
        marker: BC.marker01,
        stack: "normal",
        data: [0, 0, 0, 0, 0, 0, 800, 16856, 7753, 14112, 20012, 0],
        tooltip: {
          valueSuffix: " N㎥",
          dateTimeLabelFormats: BC.dateFormat.full,
        },
      },
      {
        type: "column",
        name: "공조취사`",
        marker: BC.marker01,
        stack: "normal",
        data: [0, 0, 0, 0, 0, 0, 333, 1533, 2132, 1142, 12644, 0],
        tooltip: {
          valueSuffix: " N㎥",
          dateTimeLabelFormats: BC.dateFormat.full,
        },
      },
    ],
    plotOptions: {
      column: {
        pointPadding: 0,
        borderWidth: 0,
        stacking: "normal",
      },
    },
    legend: BC.legend,
    tooltip: BC.tooltip_ns.monthly,
    exporting: BC.exporting,
  });
});
