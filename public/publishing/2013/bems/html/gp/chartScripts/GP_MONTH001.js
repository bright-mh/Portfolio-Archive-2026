jQuery(function () {
  jQuery("#chart01").highcharts({
    credits: { enabled: false },
    chart: {
      type: "column", // area,
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
    xAxis: {
      tickWidth: 0,
      categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    },
    yAxis: [
      {
        lineWidth: 1,
        title: {
          text: "toe",
        },
        min: 0,
        max: 6,
        minorGridLineWidth: 0,
        gridLineWidth: 1,
        alternateGridColor: null,
        tickColor: "#cccccc",
      },
    ],
    plotOptions: {
      spline: {
        lineWidth: 2,
        states: {
          hover: {
            lineWidth: 2,
          },
        },
        marker: BC.marker01,
      },
    },
    series: [
      {
        name: "SKYPARK 1",
        data: [1.7, 1.6, 1.5, 1.8, 1.7, 1.6, 1.8, 1.6, 1.4, 1.7, 1.8],
        tooltip: {
          valueSuffix: " toe",
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
      },
      {
        name: "SKYPARK 2",
        data: [3.0, 2.7, 3.2, 3.8, 3.5, 3.2, 3.8, 3.4, 2.8, 3.7, 3.1],
        tooltip: {
          valueSuffix: " toe",
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
      },
      {
        name: "SKYPARK 3",
        data: [3.4, 3.7, 3.2, 3.8, 3.5, 3.2, 3.8, 2.9, 2.4, 3.5, 3.1],
        tooltip: {
          valueSuffix: " toe",
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
      },
      {
        name: "SKYPARK 4",
        data: [2.5, 2.3, 2.4, 2.4, 2.3, 2.0, 2.3, 2.3, 2.0, 2.4, 2.5],
        tooltip: {
          valueSuffix: " toe",
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
      },
      {
        name: "SKYPARK 5",
        data: [1.4, 1.3, 1.4, 1.3, 1.0, 0.9, 1.2, 0.9, 0.8, 1.1, 1.0],
        tooltip: {
          valueSuffix: " toe",
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
      },
      {
        tooltip: {
          valueSuffix: " toe",
          dateTimeLabelFormats: {
            hour: "%H:%M",
          },
          shared: false,
          useHTML: true,
          headerFormat: "00:15~24:00<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">{point.name} </span>' +
            '<span style="text-align: right"> ({point.y}) </span> ' +
            "</p> ",
          footerFormat: "",
          valueDecimals: 2,
        },
        type: "pie",
        data: [
          {
            name: "SKYPARK 1 : 23.14% ",
            y: 30,
            color: Highcharts.getOptions().colors[0],
          },
          {
            name: "SKYPARK 2 : 24.14% ",
            y: 17,
            color: Highcharts.getOptions().colors[1],
          },
          {
            name: "SKYPARK 3 : 13.14% ",
            y: 19,
            color: Highcharts.getOptions().colors[2],
          },
          {
            name: "SKYPARK 4 : 41.14% ",
            y: 10,
            color: Highcharts.getOptions().colors[3],
          },
          {
            name: "SKYPARK 5 : 33.14% ",
            y: 4,
            color: Highcharts.getOptions().colors[4],
          },
        ],
        center: [65, 60], // 그래프의 x, y 위치 좌표
        size: 100,
        showInLegend: false,
        dataLabels: {
          enabled: false,
        },
      },
    ],
    labels: {
      // 그래프 내 표시할 타이틀
      items: [
        {
          html: "누적 사용량 비율",
          style: {
            left: "38px",
            top: "8px",
            color: "#646566",
            fontWeight: "bold",
          },
        },
      ],
    },
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
