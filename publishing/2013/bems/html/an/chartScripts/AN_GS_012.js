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
    xAxis: BC.xAxis._1D,
    yAxis: [
      {
        lineWidth: 1,
        title: BC.txt.nm3,
      },
    ],
    series: [
      {
        type: "spline",
        name: "증기1-1",
        lineWidth: 2,
        marker: BC.marker01,
        data: [
          0.05005, 0.01436, 0.02063, 0.03057, 0.04618, 0.06444, 0.09822, 0.015468, 0.020434, 0.024126, 0.027387,
          0.039459, 0.03005, 0.09436, 0.02063, 0.03057, 0.04618, 0.06444, 0.09822, 0.015468, 0.020434, 0.024126,
          0.037387, 0.039459, 0.06005, 0.02436, 0.05063, 0.04057, 0.04618, 0.06444, 0.03822, 0.045468,
        ],
        pointStart: Date.UTC(2013, 11, 21),
        pointInterval: BC.interval._1D,
        tooltip: {
          valueSuffix: " N㎥",
          dateTimeLabelFormats: BC.dateFormat.full,
        },
      },
      {
        type: "spline",
        name: "증기1-2",
        lineWidth: 2,
        marker: BC.marker01,
        data: [
          0.041005, 0.041436, 0.02063, 0.03057, 0.04618, 0.06444, 0.09822, 0.015468, 0.020434, 0.024126, 0.027387,
          0.029459, 0.01005, 0.01436, 0.02063, 0.03057, 0.04618, 0.046444, 0.049822, 0.015468, 0.0420434, 0.024126,
          0.027387, 0.029459, 0.01005, 0.01436, 0.02063, 0.03057, 0.04618, 0.06444,
        ],
        pointStart: Date.UTC(2013, 11, 21),
        pointInterval: BC.interval._1D,
        tooltip: {
          valueSuffix: " N㎥",
          dateTimeLabelFormats: BC.dateFormat.full,
        },
      },
      {
        type: "spline",
        name: "증기1-3",
        lineWidth: 2,
        marker: BC.marker01,
        data: [
          0.013005, 0.013436, 0.012063, 0.03057, 0.04618, 0.06444, 0.09822, 0.015468, 0.020434, 0.024126, 0.0127387,
          0.029459, 0.01005, 0.01436, 0.02063, 0.03057, 0.04618, 0.06444, 0.019822, 0.015468, 0.020434, 0.0214126,
          0.027387, 0.0129459, 0.01005, 0.01436, 0.02063, 0.03057, 0.014618, 0.016444,
        ],
        pointStart: Date.UTC(2013, 11, 21),
        pointInterval: BC.interval._1D,
        tooltip: {
          valueSuffix: " N㎥",
          dateTimeLabelFormats: BC.dateFormat.full,
        },
      },
      {
        type: "spline",
        name: "비교대상 증기1-1",
        lineWidth: 2,
        marker: BC.marker01,
        data: [
          0.05005, 0.051436, 0.02063, 0.03057, 0.04618, 0.06444, 0.09822, 0.015468, 0.020434, 0.024126, 0.027387,
          0.039459, 0.03005, 0.09436, 0.02063, 0.03057, 0.04618, 0.06444, 0.09822, 0.015468, 0.020434, 0.024126,
          0.037387, 0.039459, 0.06005, 0.02436, 0.05063, 0.04057, 0.04618, 0.06444, 0.03822,
        ],
        pointStart: Date.UTC(2013, 11, 21),
        pointInterval: BC.interval._1D,
        tooltip: {
          valueSuffix: " N㎥",
          dateTimeLabelFormats: BC.dateFormat.full,
        },
      },
      {
        type: "spline",
        name: "비교대상 증기1-2",
        lineWidth: 2,
        marker: BC.marker01,
        data: [
          0.01005, 0.01436, 0.02063, 0.03057, 0.04618, 0.06444, 0.09822, 0.015468, 0.020434, 0.024126, 0.027387,
          0.029459, 0.01005, 0.01436, 0.02063, 0.03057, 0.04618, 0.06444, 0.09822, 0.015468, 0.020434, 0.024126,
          0.027387, 0.029459, 0.01005, 0.01436, 0.02063, 0.03057, 0.04618, 0.06444, 0.09822,
        ],
        pointStart: Date.UTC(2013, 11, 21),
        pointInterval: BC.interval._1D,
        tooltip: {
          valueSuffix: " N㎥",
          dateTimeLabelFormats: BC.dateFormat.full,
        },
      },
      {
        type: "spline",
        name: "비교대상 증기1-3",
        lineWidth: 2,
        marker: BC.marker01,
        data: [
          0.03005, 0.03436, 0.02063, 0.03057, 0.04618, 0.06444, 0.09822, 0.015468, 0.020434, 0.024126, 0.027387,
          0.029459, 0.01005, 0.01436, 0.02063, 0.03057, 0.04618, 0.06444, 0.09822, 0.015468, 0.020434, 0.024126,
          0.027387, 0.029459, 0.01005, 0.01436, 0.02063, 0.03057, 0.04618, 0.06444, 0.049822,
        ],
        pointStart: Date.UTC(2013, 11, 21),
        pointInterval: BC.interval._1D,
        tooltip: {
          valueSuffix: " N㎥",
          dateTimeLabelFormats: BC.dateFormat.full,
        },
      },
    ],
    legend: BC.legend,
    tooltip: BC.tooltip_ns.daily,
    exporting: BC.exporting,
  });
});
