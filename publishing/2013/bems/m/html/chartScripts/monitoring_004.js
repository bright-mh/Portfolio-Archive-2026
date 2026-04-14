jQuery(function () {
  jQuery("#chart03").highcharts({
    credits: { enabled: false },
    chart: {
      type: "spline",
      margin: [5, 30, 55, 30],
      spacing: [5, 5, 30, 0],
    },
    title: {
      text: "",
    },
    subtitle: {
      text: "",
    },
    marker: { enabled: false, symbol: "circle", radius: 3, lineWidth: 0 },
    xAxis: [
      {
        tickWidth: 0,
        type: "datetime",
        dateTimeLabelFormats: {
          hour: "%H:%M",
        },
        label: { style: { "font-size": "8px" } },
        plotBands: [
          {
            from: Date.UTC(2013, 11, 14),
            to: Date.UTC(2013, 11, 14) + 1000 * 60 * 30 * 4,
            color: "rgba(241, 246, 231, 1)",
          },
          {
            from: Date.UTC(2013, 11, 14) + 1000 * 60 * 30 * 4,
            to: Date.UTC(2013, 11, 14) + 1000 * 60 * 30 * 5,
            color: "rgba(253, 243, 224, 1)",
          },
          {
            from: Date.UTC(2013, 11, 14) + 1000 * 60 * 30 * 5,
            to: Date.UTC(2013, 11, 14) + 1000 * 60 * 30 * 7,
            color: "rgba(248, 229, 229, 1)",
          },
          {
            from: Date.UTC(2013, 11, 14) + 1000 * 60 * 30 * 7,
            to: Date.UTC(2013, 11, 14) + 1000 * 60 * 30 * 10,
            color: "rgba(253, 243, 224, 1)",
          },
          {
            from: Date.UTC(2013, 11, 14) + 1000 * 60 * 30 * 10,
            to: Date.UTC(2013, 11, 14) + 1000 * 60 * 30 * 12,
            color: "rgba(248, 229, 229, 1)",
          },
          {
            from: Date.UTC(2013, 11, 14) + 1000 * 60 * 30 * 12,
            to: Date.UTC(2013, 11, 14) + 1000 * 60 * 30 * 16,
            color: "rgba(253, 243, 224, 1)",
          },
        ],
        labels: { style: { "font-size": "8px", "font-weight": "normal" } },
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
            "font-weight": "bold", //2014-01-09 y축 볼드처리
          },
          x: 5,
        },
        labels: { style: { "font-size": "8px", "font-weight": "normal" } },
        min: 0,
        minorGridLineWidth: 0,
        gridLineWidth: 1,
        alternateGridColor: null,
        //tickInterval: 500,
        tickColor: "#cccccc",
      },
      {
        lineWidth: 1,
        title: {
          text: "원",
          style: {
            color: "#777777",
            "font-size": "8px",
            "font-weight": "bold", //2014-01-09 y축 볼드처리
          },
          x: -5,
        },
        labels: { style: { "font-size": "8px", "font-weight": "normal" }, x: 2 },
        min: 0,
        max: 100,
        minorGridLineWidth: 0,
        gridLineWidth: 1,
        alternateGridColor: null,
        tickColor: "#cccccc",
        opposite: 1,
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
        marker: { enabled: false, symbol: "circle", radius: 3, lineWidth: 0 },
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
        "<p>" +
        '<span style="color: {series.color}">{series.name}: </span>' +
        '<soan style="text-align: right"> {point.y} </span> ' +
        "</p> ",
      footerFormat: "",
      valueDecimals: 2,
    },
    series: [
      {
        name: "현재",
        color: "#e97b6a",
        data: [700, 700, 700, 700, 700, 1100, 1100, 1100, 1100, 1100, 1100, 600, 600, 600, 600, 600],
        marker: { enabled: false, symbol: "circle", radius: 3, lineWidth: 0 },
        pointStart: Date.UTC(2013, 11, 14), // 시작일. 개발 시 적용.
        pointInterval: 30 * 60 * 1000, // 데이터의 간격
      },
      {
        name: "2013피크",
        color: "#b3a4a1",
        dashStyle: "DashDot",
        data: [1800, 1800, 1800, 1800, 1800, 1800, 1800, 1800, 1800, 1800, 1800, 1800, 1800, 1800, 1800, 1800],
        marker: { enabled: false, symbol: "circle", radius: 3, lineWidth: 0 },
        pointStart: Date.UTC(2013, 11, 14), // 시작일. 개발 시 적용.
        pointInterval: 30 * 60 * 1000, // 데이터의 간격
      },
      {
        name: "2013목표피크",
        color: "#ed8672",
        dashStyle: "Dash",
        data: [2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100],
        marker: { enabled: false, symbol: "circle", radius: 3, lineWidth: 0 },
        pointStart: Date.UTC(2013, 11, 14), // 시작일. 개발 시 적용.
        pointInterval: 30 * 60 * 1000, // 데이터의 간격
      },
      {
        name: "2012피크",
        color: "#8c807e",
        dashStyle: "Dot",
        data: [2250, 2250, 2250, 2250, 2250, 2250, 2250, 2250, 2250, 2250, 2250, 2250, 2250, 2250, 2250, 2250],
        marker: { enabled: false, symbol: "circle", radius: 3, lineWidth: 0 },
        pointStart: Date.UTC(2013, 11, 14), // 시작일. 개발 시 적용.
        pointInterval: 30 * 60 * 1000, // 데이터의 간격
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
      y: 30,
      itemStyle: { fontSize: "10px" },
    },
    navigation: {
      menuItemStyle: {
        fontSize: "8px", // 2014-01-10 원그래프 상단 타이틀 텍스트 크기 조정
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
