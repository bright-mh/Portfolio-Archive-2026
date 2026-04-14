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
        categories: ["경부하", "중부하", "최대부하"],
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
            "font-weight": "normal",
          },
          x: 5,
        },
        labels: { style: { "font-size": "8px", "font-weight": "normal" } },
        min: 0,
        minorGridLineWidth: 0,
        gridLineWidth: 1,
        alternateGridColor: null,
        tickInterval: 200,
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
        name: "30일 평균",
        color: "#7f706d",
        borderColor: "#7f706d",
        data: [600, 700, 700],
      },
      {
        name: "7일 평균",
        color: "#a48e8a",
        borderColor: "#a48e8a",
        data: [630, 620, 580],
      },
      {
        name: "11/1(금)",
        color: "#f7beb2",
        borderColor: "#f7beb2",
        data: [700, 680, 720], // 2014-01-10 테스트 텍스트 'eee' 삭제
      },
      {
        name: "오늘",
        color: "#ed8672",
        borderColor: "#ed8672",
        data: [580, 780, 700],
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
      itemStyle: { fontSize: "10px" }, //2014-01-09 범례 폰트사이즈 수정
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
