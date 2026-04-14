jQuery(function () {
  jQuery("#chart01").highcharts({
    credits: { enabled: false },
    chart: {
      type: "spline",
      spacing: [40, 0, 0, 0],
      events: {
        load: function (event) {
          onChartLoaded("chart01");
        },
      },
    },
    title: {
      text: "",
    },
    subtitle: {
      text: "",
    },
    yAxis: {
      lineWidth: 1,
      title: {
        text: " kWh",
      },
      min: 0,
      max: 10,
      minorGridLineWidth: 0,
      gridLineWidth: 1,
      alternateGridColor: null,
      tickInterval: 1,
      tickColor: "#cccccc",
    },
    xAxis: BC.xAxis._1D,
    plotOptions: {
      line: {
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1,
          },
        },
        marker: BC.marker01,
      },
    },

    tooltip: {
      valueSuffix: " kWh",
      dateTimeLabelFormats: { day: "%e" },
      shared: false,
      useHTML: true,
      headerFormat: "{point.key}<br />",
      pointFormat:
        "<p>" +
        '<span style="color: {series.color}">SKYPARK 1: </span>' +
        '<span style="text-align: right"> {point.y} </span> ' +
        "</p> ",
      footerFormat: "",
      valueDecimals: 2,
    },

    series: [
      {
        name: "사용량",
        data: [
          0.3, 5.1, 4.3, 5.2, 5.4, 4.7, 3.5, 4.1, 5.6, 4.4, 4.9, 5.1, 3.9, 4.9, 3.5, 4.7, 4.3, 5.1, 4.3, 5.2, 5.4, 4.7,
          3.5, 4.1, 4.3, 5.2, 5.4, 4.7, 3.5, 4.1,
        ],
        marker: BC.marker01,
        pointStart: Date.UTC(2013, 11, 1),
        pointInterval: BC.interval._1D,
      },
    ],
    legend: {
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom",
      floating: false,
      backgroundColor: "#FFFFFF",
      borderColor: "#FFFFFF",
      title: {
        style: {
          fontSize: "10px",
          color: "#777777",
          fontWeight: "normal",
        },
      },
      style: {
        fontSize: "10px",
        color: "#777777",
        fontWeight: "normal",
      },
    },
    navigation: {
      menuItemStyle: {
        fontSize: "11px",
      },
    },
    exporting: {
      buttons: {
        contextButton: {
          align: "right",
          y: -40,
          x: -22,
        },
      },
    },
  });
});
