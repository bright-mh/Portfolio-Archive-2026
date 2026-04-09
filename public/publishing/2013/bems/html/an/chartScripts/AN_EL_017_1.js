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
        title: BC.txt.kWh,
      },
    ],
    series: [
      {
        type: "column",
        name: "HV-1",
        marker: BC.marker01,
        stack: "normal",
        data: [1, 2, 3],
        tooltip: {
          valueSuffix: " kWh",
          dateTimeLabelFormats: BC.dateFormat.full,
        },
      },
      {
        type: "column",
        name: "일반동력",
        marker: BC.marker01,
        stack: "normal",
        data: [4, 5, 4],
        tooltip: {
          valueSuffix: " kWh",
          dateTimeLabelFormats: BC.dateFormat.full,
        },
      },
      {
        type: "column",
        name: "냉동동력",
        marker: BC.marker01,
        stack: "normal",
        data: [1.05005, 5.01436, 5.02063],
        tooltip: {
          valueSuffix: " kWh",
          dateTimeLabelFormats: BC.dateFormat.full,
        },
      },
      {
        type: "column",
        name: "비상동력",
        marker: BC.marker01,
        stack: "normal",
        data: [1.05005, 5.01436, 5.02063],
        tooltip: {
          valueSuffix: " kWh",
          dateTimeLabelFormats: BC.dateFormat.full,
        },
      },
      {
        type: "column",
        name: "통신동력",
        marker: BC.marker01,
        stack: "normal",
        data: [1.05005, 5.01436, 5.02063],
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
