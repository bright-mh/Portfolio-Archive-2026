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
        name: "HV-1",
        marker: BC.maker01,
        data: [
          0.05005, 0.01436, 0.02063, 0.03057, 0.04618, 0.06444, 0.09822, 0.015468, 0.020434, 0.024126, 0.027387,
          0.039459,
        ],
        stack: "normal",
        tooltip: {
          valueSuffix: " kWh",
          dateTimeLabelFormats: BC.dateFormat.daily,
        },
      },
      {
        type: "column",
        name: "일반동력",
        marker: BC.maker01,
        data: [
          0.05005, 0.01436, 0.02063, 0.03057, 0.04618, 0.06444, 0.09822, 0.015468, 0.020434, 0.024126, 0.027387,
          0.039459,
        ],
        stack: "normal",
        tooltip: {
          valueSuffix: " kWh",
          dateTimeLabelFormats: BC.dateFormat.daily,
        },
      },
      {
        type: "column",
        name: "냉동동력",
        marker: BC.maker01,
        data: [
          0.05005, 0.01436, 0.02063, 0.03057, 0.04618, 0.06444, 0.09822, 0.015468, 0.020434, 0.024126, 0.027387,
          0.039459,
        ],
        stack: "normal",
        tooltip: {
          valueSuffix: " kWh",
          dateTimeLabelFormats: BC.dateFormat.daily,
        },
      },
      {
        type: "column",
        name: "비상동력",
        marker: BC.maker01,
        data: [
          0.05005, 0.01436, 0.02063, 0.03057, 0.04618, 0.06444, 0.09822, 0.015468, 0.020434, 0.024126, 0.027387,
          0.039459,
        ],
        stack: "normal",
        tooltip: {
          valueSuffix: " kWh",
          dateTimeLabelFormats: BC.dateFormat.daily,
        },
      },
      {
        type: "column",
        name: "통신동력",
        marker: BC.maker01,
        data: [
          0.05005, 0.01436, 0.02063, 0.03057, 0.04618, 0.06444, 0.09822, 0.015468, 0.020434, 0.024126, 0.027387,
          0.039459,
        ],
        stack: "normal",
        tooltip: {
          valueSuffix: " kWh",
          dateTimeLabelFormats: BC.dateFormat.daily,
        },
      },
    ],
    plotOptions: {
      column: {
        stacking: "normal",
      },
    },
    legend: BC.legend,
    tooltip: BC.tooltip_ns,
    exporting: BC.exporting,
  });
});
