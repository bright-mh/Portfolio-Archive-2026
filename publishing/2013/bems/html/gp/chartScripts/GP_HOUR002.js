jQuery(function () {
  jQuery("#chart01").highcharts({
    chart: {
      spacing: BC.spacing,
      events: {
        load: function (event) {
          onChartLoaded("chart01");
        },
      },
    },
    title: BC.emptyText,
    subtitle: BC.emptyText,
    credits: false,
    xAxis: [
      {
        type: "datetime",
        dateTimeLabelFormats: {
          day: "%H:%M",
          hour: "%H:%M",
        },
        tickWidth: 0,
        labels: {
          style: {
            "font-size": "11px",
          },
        },
      },
    ],
    yAxis: [
      {
        lineWidth: 1,
        title: BC.txt.nm3,
      },
    ],
    series: [
      {
        type: "spline",
        name: "사용량",
        marker: BC.marker01,
        color: BC.COLOR.GAS,
        data: [
          0.3, 5.1, 4.3, 5.2, 5.4, 4.7, 3.5, 4.1, 5.6, 4.4, 4.9, 5.1, 3.9, 4.9, 3.5, 4.7, 4.3, 5.1, 4.3, 5.2, 5.4, 4.7,
          3.5, 4.1,
        ],
        pointStart: Date.UTC(2013, 11, 21),
        pointInterval: BC.interval._1H,
        tooltip: {
          valueSuffix: " N㎥",
          dateTimeLabelFormats: BC.dateFormat.full,
        },
      },
    ],
    legend: BC.legend,
    tooltip: BC.tooltip_ns,
    exporting: BC.exporting,
  });
});
