jQuery(function () {
  jQuery("#chart05").highcharts({
    credits: { enabled: false },
    chart: {
      type: "bar",
      spacing: [5, 10, 10, 0],
    },
    title: {
      text: "",
    },
    subtitle: {
      text: "",
    },
    xAxis: [
      {
        tickWidth: 0,
        categories: [
          "20",
          "19",
          "18",
          "17",
          "16",
          "15",
          "14",
          "13",
          "12",
          "11",
          "10",
          "9",
          "8",
          "7",
          "6",
          "5",
          "4",
          "3",
          "2",
          "1",
          "B1",
          "B2",
          "B3",
          "B4",
          "B5",
        ],
        labels: {
          style: {
            color: "#898a8c",
            "font-size": "10px",
          },
        },
      },
    ],
    yAxis: [
      {
        lineWidth: 1,
        title: {
          text: "",
        },
        min: 0,
        minorGridLineWidth: 0,
        gridLineWidth: 1,
        alternateGridColor: null,
        // tickInterval: 50,
        tickColor: "#cccccc",
      },
    ],
    plotOptions: {
      column: {
        pointPadding: -0.1,
        borderWidth: 2,
      },
    },
    tooltip: {
      valueSuffix: " kWh",
      shared: false,
      useHTML: true,
      headerFormat: "{point.key}<br />",
      pointFormat:
        "<p>" +
        '<span style="color: {series.color}">{series.name}: </span>' +
        '<span style="text-align: right"> {point.y} </span> ' +
        "</p> ",
      footerFormat: "",
      valueDecimals: 2,
    },
    series: [
      {
        name: "Yesterday",
        color: "#f7beb2",
        borderColor: "#f7beb2",
        data: [
          119, 156, 261, 187, 200, 292, 8, 220, 308, 114, 430, 300, 515, 406, 359, 155, 328, 294, 251, 306, 264, 66,
        ],
      },
      {
        name: "Today",
        color: "#ed8672",
        borderColor: "#ed8672",
        data: [
          114, 161, 258, 185, 200, 304, 9, 216, 301, 111, 422, 291, 524, 393, 347, 157, 356, 298, 230, 272, 272, 62,
        ],
        tooltip: {
          valueSuffix: " kWh",
          shared: false,
          useHTML: true,
          headerFormat: "{point.key}<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">{series.name}: </span>' +
            '<span style="text-align: right"> {point.y} </span><br /> ' +
            "</p> ",
          footerFormat: "",
          valueDecimals: 2,
        },
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
      itemDistance: 20,
      itemStyle: { fontSize: "8px" },
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

//]]>
