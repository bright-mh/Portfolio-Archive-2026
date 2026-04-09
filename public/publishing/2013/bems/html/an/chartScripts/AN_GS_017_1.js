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
      categories: ["2011", "2012", "2013"],
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
        data: [0, 58401, 34262],
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
        data: [0, 51227, 12345],
        tooltip: {
          valueSuffix: " N㎥",
          dateTimeLabelFormats: BC.dateFormat.full,
        },
      },
      {
        type: "column",
        name: "LPG",
        lineColor: "#a9a9a9",
        lineWidth: 0,
        marker: BC.marker01,
        stack: "normal",
        data: [0, 59533, 12345],
        tooltip: {
          valueSuffix: " N㎥",
          dateTimeLabelFormats: BC.dateFormat.full,
        },
      },
      {
        type: "column",
        name: "공조취사",
        lineColor: "#a9a9a9",
        lineWidth: 0,
        marker: BC.marker01,
        stack: "normal",
        data: [0, 17784, 12345],
        tooltip: {
          valueSuffix: " N㎥",
          dateTimeLabelFormats: BC.dateFormat.full,
        },
      },
    ],
    plotOptions: {
      column: {
        stacking: "normal",
      },
    },
    legend: BC.legend,
    tooltip: BC.tooltip_ns.yearly,
    exporting: BC.exporting,
  });
});
