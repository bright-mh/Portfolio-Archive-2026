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
      categories: ["2011", "2012", "2013"],
    },
    yAxis: [
      {
        lineWidth: 1,
        title: {
          text: "toe",
        },
        min: 0,
        max: 60,
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
        data: [19, 18, 21],
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
        data: [26, 36, 32],
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
        data: [34, 34, 30],
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
        data: [25, 25, 27],
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
        data: [14, 14, 15],
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
            name: "SKYPARK 1 : 12.34% ",
            y: 30,
            color: Highcharts.getOptions().colors[0],
          },
          {
            name: "SKYPARK 2 : 22.34% ",
            y: 17,
            color: Highcharts.getOptions().colors[1],
          },
          {
            name: "SKYPARK 3 : 31.34% ",
            y: 19,
            color: Highcharts.getOptions().colors[2],
          },
          {
            name: "SKYPARK 4 : 15.34% ",
            y: 10,
            color: Highcharts.getOptions().colors[3],
          },
          {
            name: "SKYPARK 5 : 35.34% ",
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
