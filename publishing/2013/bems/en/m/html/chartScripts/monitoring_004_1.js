jQuery(function () {
  jQuery("#chart04").highcharts({
    credits: { enabled: false },
    chart: {
      type: "column",
      margin: [5, 0, 55, 45],
      spacing: [5, 0, 30, 0],
    },
    title: {
      text: "",
    },
    subtitle: {
      text: "",
    },
    xAxis: [
      {
        categories: ["Light Loading", "Heavy Loading", "Maximum Load"],
        labels: {
          style: {
            color: "#777777",
            "font-size": "8px",
          },
        },
        tickWidth: 0,
      },
    ],
    yAxis: [
      {
        lineWidth: 1,
        title: {
          text: "kWh",
          style: {
            color: "#777777",
            "font-size": "8px",
            "font-weight": "bold",
          },
          x: 5,
        },
        labels: { style: { "font-size": "8px", "font-weight": "normal" } },
        min: 0,
        minorGridLineWidth: 0,
        gridLineWidth: 1,
        alternateGridColor: null,
        tickColor: "#cccccc",
      },
    ],
    plotOptions: {
      column: {
        pointPadding: 0,
        borderWidth: 0,
      },
    },

    tooltip: {
      valueSuffix: " kW",
      dateTimeLabelFormats: {
        hour: "%H:%M",
      },
      shared: false,
      useHTML: true,
      headerFormat: "{point.key}<br />",
      pointFormat:
        "" +
        '<span style="color: {series.color}">{series.name}: </span>' +
        '<span style="text-align: right"> {point.y} </span> ' +
        "",
      footerFormat: "",
      valueDecimals: 2,
    },
    series: [
      {
        name: "30-Day Average",
        color: "#7f706d",
        borderColor: "#7f706d",
        data: [5939, 7095, 4784],
      },
      {
        name: "7-Day Average ",
        color: "#a48e8a",
        borderColor: "#a48e8a",
        data: [6101, 6373, 3899],
      },
      {
        name: "Yesterday",
        color: "#f7beb2",
        borderColor: "#f7beb2",
        data: [5777, 7816, 5669],
        legend: {
          title: {
            text: "eee",
          },
        },
      },
      {
        name: "Today",
        color: "#ed8672",
        borderColor: "#ed8672",
        data: [5652, 5925, 4686],
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
          fontSize: "8px",
          color: "#777777",
          fontWeight: "normal",
        },
      },
      style: {
        fontSize: "8px",
        color: "#777777",
        fontWeight: "normal",
      },
      itemDistance: 20,
      itemStyle: { fontSize: "8px" },
      y: 20,
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
