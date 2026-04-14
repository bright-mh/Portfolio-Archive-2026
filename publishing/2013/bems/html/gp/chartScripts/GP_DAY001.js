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
        text: " toe",
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
      valueSuffix: " toe",
      dateTimeLabelFormats: {
        hour: "%H:%M",
      },
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
    labels: {
      items: [
        {
          html: "누적 사용량 비율",
          style: {
            left: "22px",
            top: "-22px",
            color: "#646566",
            fontWeight: "bold",
            fontSize: "11px",
          },
        },
      ],
    },

    series: [
      {
        name: "SKYPARK 1",
        data: [
          0.3, 5.1, 4.3, 5.2, 5.4, 4.7, 3.5, 4.1, 5.6, 4.4, 4.9, 5.1, 3.9, 4.9, 3.5, 4.7, 4.3, 5.1, 4.3, 5.2, 5.4, 4.7,
          3.5, 4.1, 4.3, 5.2, 5.4, 4.7, 3.5, 4.1,
        ],
        marker: BC.marker01,
        pointStart: Date.UTC(2013, 11, 1),
        pointInterval: BC.interval._1D,
      },
      {
        name: "SKYPARK 2",
        data: [
          4.3, 4.7, 4.3, 5.1, 4.3, 5.4, 4.7, 3.5, 4.1, 5.6, 4.4, 4.9, 5.1, 3.9, 4.9, 3.5, 4.7, 4.3, 5.1, 4.3, 5.2, 5.4,
          4.7, 3.5, 5.1, 4.3, 5.2, 5.4, 4.7, 3.5,
        ],
        marker: BC.marker01,
        pointStart: Date.UTC(2013, 11, 1),
        pointInterval: BC.interval._1D,
      },
      {
        name: "SKYPARK 3",
        data: [
          5.6, 4.4, 4.9, 5.1, 3.9, 4.9, 3.5, 4.7, 4.3, 5.1, 4.3, 5.2, 5.4, 4.7, 3.5, 4.1, 5.6, 4.4, 4.9, 5.1, 3.9, 4.9,
          3.5, 4.7, 4.9, 5.1, 3.9, 4.9, 3.5, 4.7,
        ],
        marker: BC.marker01,
        pointStart: Date.UTC(2013, 11, 1),
        pointInterval: BC.interval._1D,
      },
      {
        name: "SKYPARK 4",
        data: [
          9.3, 5.1, 4.3, 5.2, 5.4, 4.7, 3.5, 4.1, 5.6, 4.4, 4.9, 5.1, 3.9, 4.9, 3.5, 4.7, 4.3, 5.1, 4.3, 5.2, 5.4, 4.7,
          3.5, 4.1, 4.3, 5.2, 5.4, 4.7, 3.5, 4.1,
        ],
        marker: BC.marker01,
        pointStart: Date.UTC(2013, 11, 1),
        pointInterval: BC.interval._1D,
      },
      {
        name: "SKYPARK 5",
        data: [
          2.6, 4.4, 4.9, 5.1, 3.9, 4.9, 3.5, 4.7, 4.3, 5.1, 4.3, 5.2, 5.4, 4.7, 3.5, 4.1, 5.6, 4.4, 4.9, 5.1, 3.9, 4.9,
          3.5, 4.7, 4.9, 5.1, 3.9, 4.9, 3.5, 4.7,
        ],
        marker: BC.marker01,
        pointStart: Date.UTC(2013, 11, 1),
        pointInterval: BC.interval._1D,
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
        name: "누적 사용량 비율",
        data: [
          {
            name: "SKYPARK 1 : 23.23% ",
            y: 10,
          },
          {
            name: "SKYPARK 2 : 13.23% ",
            y: 17,
          },
          {
            name: "SKYPARK 3 : 24.23% ",
            y: 20,
          },
          {
            name: "SKYPARK 4 : 43.23% ",
            y: 22,
          },
          {
            name: "SKYPARK 5 : 21.23% ",
            y: 28,
          },
        ],
        center: [50, 30], // 그래프의 x, y 좌표
        size: 100,
        showInLegend: false,
        dataLabels: {
          enabled: false,
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
