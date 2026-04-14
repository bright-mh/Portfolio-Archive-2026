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
        title: BC.txt.kWh,
      },
    ],
    series: [
      {
        type: "column",
        name: "일반통신 1-1-1",
        marker: BC.marker01,
        stack: "normal",
        data: [
          3.05005, 0.01436, 5.02063, 9.03057, 3.04618, 4.06444, 1.09822, 4.015468, 10.020434, 7.024126, 7.027387,
          7.039459,
        ],
        tooltip: {
          valueSuffix: " kWh",
          dateTimeLabelFormats: BC.dateFormat.full,
        },
      },
      {
        type: "column",
        name: "일반통신 1-1-10",
        marker: BC.marker01,
        stack: "normal",
        data: [
          1.05005, 5.01436, 5.02063, 5.03057, 5.04618, 5.06444, 5.09822, 3.015468, 5.020434, 2.126, 5.027387, 2.039459,
        ],
        tooltip: {
          valueSuffix: " kWh",
          dateTimeLabelFormats: BC.dateFormat.full,
        },
      },
      {
        type: "column",
        name: "일반통신 1-1-11",
        marker: BC.marker01,
        stack: "normal",
        data: [
          1.05005, 5.01436, 5.02063, 5.03057, 5.04618, 5.06444, 5.09822, 3.015468, 5.020434, 2.126, 5.027387, 2.039459,
        ],
        tooltip: {
          valueSuffix: " kWh",
          dateTimeLabelFormats: BC.dateFormat.full,
        },
      },
      {
        type: "column",
        name: "비교대상 일반통신 1-1-1",
        marker: BC.marker01,
        stack: "extends",
        data: [
          1.05005, 5.01436, 5.02063, 5.03057, 5.04618, 5.06444, 5.09822, 3.015468, 5.020434, 2.126, 5.027387, 2.039459,
        ],
        tooltip: {
          valueSuffix: " kWh",
          dateTimeLabelFormats: BC.dateFormat.full,
        },
      },
      {
        type: "column",
        name: "비교대상 일반통신 1-1-10",
        marker: BC.marker01,
        stack: "extends",
        data: [
          1.05005, 5.01436, 5.02063, 5.03057, 5.04618, 5.06444, 5.09822, 3.015468, 5.020434, 2.126, 5.027387, 2.039459,
        ],
        tooltip: {
          valueSuffix: " kWh",
          dateTimeLabelFormats: BC.dateFormat.full,
        },
      },
      {
        type: "column",
        name: "비교대상 일반통신 1-1-11",
        marker: BC.marker01,
        stack: "extends",
        data: [
          1.05005, 5.01436, 5.02063, 5.03057, 5.04618, 5.06444, 5.09822, 3.015468, 5.020434, 2.126, 5.027387, 2.039459,
        ],
        tooltip: {
          valueSuffix: " kWh",
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
    tooltip: BC.tooltip_ns,
    exporting: BC.exporting,
  });
});
