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
        title: BC.txt.kWh,
        tickInterval: 0.01,
      },
    ],
    series: [
      {
        type: "area",
        name: "통신동력",
        marker: BC.marker01,
        data: [
          0.02005, 0.02436, 0.02063, 0.01057, 0.03618, 0.03444, 0.03822, 0.045468, 0.010434, 0.054126, 0.077387,
          0.039459, 0.04005, 0.01436, 0.02063, 0.03057, 0.03618, 0.06444, 0.09822, 0.015468, 0.020434, 0.024126,
          0.027387, 0.039459, 0.04005, 0.03436, 0.04063, 0.01057, 0.01618, 0.01444, 0.0144,
        ],
        pointStart: Date.UTC(2013, 11, 1),
        pointInterval: BC.interval._1D,
        tooltip: {
          valueSuffix: " kWh",
          dateTimeLabelFormats: BC.dateFormat.daily,
        },
      },
      {
        type: "area",
        name: "비교대상 통신동력",
        marker: BC.marker01,
        data: [
          0.03005, 0.03436, 0.02063, 0.03057, 0.04618, 0.06444, 0.09822, 0.015468, 0.020434, 0.024126, 0.027387,
          0.029459, 0.01005, 0.01436, 0.02063, 0.03057, 0.04618, 0.06444, 0.09822, 0.015468, 0.020434, 0.024126,
          0.027387, 0.029459, 0.01005, 0.01436, 0.02063, 0.03057, 0.04618, 0.06444, 0.06444,
        ],
        pointStart: Date.UTC(2013, 11, 1),
        pointInterval: BC.interval._1D,
        tooltip: {
          valueSuffix: " kWh",
          dateTimeLabelFormats: BC.dateFormat.daily,
        },
      },
    ],
    legend: BC.legend,
    tooltip: BC.tooltip_ns,
    exporting: BC.exporting,
  });
});
