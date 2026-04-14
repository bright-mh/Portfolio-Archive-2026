/**
			dashboard_002_monthly : 에너지 사용량 (월별)
		*/

jQuery(function () {
  $("#chart03").highcharts({
    credits: { enabled: false },
    exporting: { enabled: false },
    legend: { enabled: false },
    chart: {
      margin: [5, 35, 45, 30],
      spacing: [2, 0, 0, 0],
    },
    title: { text: " " },
    subtitle: { text: " " },
    xAxis: {
      categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
      tickWidth: 0,
      labels: {
        format: "{value}",
        align: "center",
        style: {
          color: "#777777",
          "font-size": "8px",
        },
      },
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
            "font-weight": "bold",
          },
          x: -2,
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
      {
        // Secondary yAxis
        lineWidth: 1,
        title: {
          text: "℃",
          rotation: 90,
          style: {
            color: "#777777",
            "font-size": "8px",
            "font-weight": "normal",
            "writing-mode": "lr-tb",
          },
          x: -5,
        },
        labels: {
          format: "{value}",
          style: {
            color: "#777777",
            "font-size": "8px",
            align: 0,
          },
        },
        x: -2,
        opposite: true,
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
      itemStyle: { fontSize: "8px" },
    },
    series: [
      {
        name: "Gas",
        legendIndex: 1,
        color: "#77b4d3",
        type: "column",
        yAxis: 0,
        data: [
          54.73416, 36.29566, 25.41136, 20.5452, 14.40608, 10.03704, 13.474404, 17.750817, 8.600578, 11.538709, 22.3202,
          13.182477,
        ],
        labels: {
          style: {
            color: "#777777",
            "font-size": "10px",
          },
        },
        tooltip: {
          valueSuffix: " toe",
          shared: true,
          useHTML: true,
          headerFormat: "Oct<br />",
          pointFormat:
            "" +
            "<span>{series.name}: </span>" +
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
        data: [
          126.3494031, 107.8121053, 117.1973957, 114.7749763, 129.7478559, 140.6809422, 163.2695152, 167.7630103,
          132.6746353, 121.1901602, 110.8872355, 45.8994997,
        ],
        labels: {
          style: {
            color: "#777777",
            "font-size": "10px",
          },
        },
        tooltip: {
          valueSuffix: " toe",
          shared: true,
          useHTML: true,
          headerFormat: "Oct<br />",
          pointFormat:
            "" +
            "<span>{series.name}: </span>" +
            '<span style="text-align: right"> {point.y} </span><br /> ' +
            '<span style="color: #000">Total: </span>' +
            '<span style="text-align: right"> 0.1234567 toe</span> ' +
            "",

          footerFormat: "",
          valueDecimals: 2,
        },
      },
      {
        name: "Outdoor Temperature",
        legendIndex: 2,
        color: "#616161",
        type: "line",
        yAxis: 1,
        data: [-3.4, -1.2, 5.1, 10.0, 18.2, 24.4, 25.5, 27.7, 21.8, 15.8, 6.2, 3.2],
        labels: {
          style: {
            color: "#777777",
            "font-size": "10px",
          },
        },
        tooltip: {
          valueSuffix: " ℃",
          shared: true,
          useHTML: true,
          headerFormat: "Oct<br />",
          pointFormat: "" + "<span>{series.name}: </span>" + '<span style="text-align: right"> {point.y} </span> ' + "",

          footerFormat: "",
          valueDecimals: 2,
        },
        marker: {
          enable: false,
          symbol: "circle",
          fillColor: "#FFFFFF",
          lineColor: "#616161",
          lineWidth: 2,
        },
      },
    ],
  });
});
