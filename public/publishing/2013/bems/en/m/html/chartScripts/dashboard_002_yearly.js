/**
			dashboard_002_yearly : 에너지 사용량 (연별)
		*/

jQuery(function () {
  $("#chart04").highcharts({
    credits: { enabled: false },
    exporting: { enabled: false },
    legend: { enabled: false },
    chart: {
      margin: [5, 18, 35, 30],
      spacing: [2, 0, 0, 0],
    },
    title: { text: " " },
    subtitle: { text: " " },

    xAxis: {
      categories: ["2011", "2012", "2013"],
      labels: {
        align: "center",
        style: {
          color: "#777777",
          "font-size": "8px",
        },
      },
      tickWidth: 0,
    },
    yAxis: [
      {
        // Primary yAxis
        lineWidth: 1,
        labels: {
          format: "{value}",
          align: "right",
          style: {
            color: "#777777",
            "font-size": "8px",
          },
          formatter: function () {
            return this.value / 1000 + "k";
          },
        },
        title: {
          rotation: -90,
          text: "toe",
          style: {
            color: "#777777",
            "font-size": "8px",
            "font-weight": "bold",
          },
          x: 5,
        },
      },
    ],
    tooltip: {
      shared: false,
    },
    plotOptions: {
      column: {
        stacking: "normal",
      },
    },
    legend: {
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom",
      floating: false,
      backgroundColor: "#FFFFFF",
      y: 5,
      borderColor: "#FFFFFF",
      itemDistance: 20,
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
      itemStyle: { fontSize: "8px" },
    },
    series: [
      {
        name: "Gas",
        legendIndex: 1,
        color: "#77b4d3",
        type: "column",
        yAxis: 0,
        data: [288.76492, 299.4036311, 248.296685],
        labels: {
          style: {
            color: "#777777",
            "font-size": "8px",
          },
        },
        tooltip: {
          valueSuffix: " toe",
          shared: true,
          useHTML: true,
          headerFormat: "{point.key}<br />",
          pointFormat:
            "" +
            "<span >{series.name}: </span>" +
            '<span style="text-align: right"> {point.y} </span><br /> ' +
            '<span style="color: #000">Total: </span>' +
            '<span style="text-align: right"> 0.1234567 toe</span> ' +
            "",
          footerFormat: "",
          valueDecimals: 2,
        },
      },
      {
        name: "Electricity",
        legendIndex: 0,
        color: "#ed8672",
        type: "column",
        yAxis: 0,
        data: [1678.90547, 1470.4915906, 1478.2467347],
        labels: {
          style: {
            color: "#777777",
            "font-size": "8px",
          },
        },
        tooltip: {
          valueSuffix: " toe",
          shared: true,
          useHTML: true,
          headerFormat: "{point.key}<br />",
          pointFormat:
            "" +
            "<span >{series.name}: </span>" +
            '<span style="text-align: right"> {point.y} </span><br /> ' +
            '<span style="color: #000">Total: </span>' +
            '<span style="text-align: right"> 0.1234567 toe</span> ' +
            "",

          footerFormat: "",
          valueDecimals: 2,
        },
      },
    ],
  });
});
