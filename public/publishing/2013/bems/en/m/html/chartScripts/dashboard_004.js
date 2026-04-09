jQuery(function () {
  $("#chart07").highcharts({
    credits: { enabled: false },
    exporting: { enabled: false },
    legend: { enabled: false },
    chart: {
      spacing: [5, 0, 0, 0],
    },
    title: { text: " " },
    subtitle: { text: " " },

    xAxis: [
      {
        type: "datetime",
        dateTimeLabelFormats: {
          day: "%H",
          hour: "%H", // %e:날짜(숫자), %a:요일(세글자), %m:월(숫자) %Y:년도(숫자) %H:시간(24), %M:분, %S:초
        },
        pointStart: Date.UTC(2013, 12, 05), // 기준 날짜를 설정
      },
    ],
    yAxis: [
      {
        // Primary yAxis
        lineWidth: 1,
        labels: {
          format: "{value}",
          align: "right",
          style: {
            color: "#777777",
            "font-size": "10px",
          },
        },
        title: {
          rotation: -90,
          text: "N㎥",
          style: {
            color: "#777777",
            "font-size": "10px",
            "font-weight": "bold",
          },
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
      y: 30,
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
      itemStyle: { fontSize: "10px" },
    },
    series: [
      {
        name: "최근1주일평균",
        legendIndex: 0,
        color: "#b4dcf0",
        type: "area",
        data: [0, 0, 12, 13, 14, 10, 9, 8, 10, 7, 10, 13, 12, 9, 10, 6, 12, 17, 19, 11, 8, 7, 0, 0],
        pointInterval: 3600 * 1000, // one day
        labels: {
          style: {
            color: "#777777",
            "font-size": "10px",
          },
        },
        tooltip: {
          valueSuffix: " N㎥",
          dateTimeLabelFormats: {
            hour: "%H",
          },
          shared: false,
          useHTML: true,
          headerFormat: "{point.key}시<br />",
          pointFormat:
            "" +
            '<span style="color: {series.color}">{series.name}: </span>' +
            '<span style="text-align: right"> {point.y} </span> ' +
            "",
          footerFormat: "",
          valueDecimals: 2,
        },
        marker: {
          enabled: false,
          symbol: "circle",
          fillColor: "#FFFFFF",
          lineWidth: 2,
        },
      },
      {
        name: "오늘",
        legendIndex: 1,
        color: "#77b4d3",
        type: "line",
        yAxis: 0,
        data: [0, 0, 10, 9, 4, 5, 6, 7, 8, 5, 8, 9, 8, 5, 7, 3, 9, 14, 15, 10, 5, 5, 0, 0],
        pointInterval: 3600 * 1000, // one day
        labels: {
          style: {
            color: "#777777",
            "font-size": "10px",
          },
        },
        tooltip: {
          valueSuffix: " N㎥",
          dateTimeLabelFormats: { hour: "%H" },
          shared: false,
          useHTML: true,
          headerFormat: "{point.key} 시<br />",
          pointFormat:
            "" +
            '<span style="color: {series.color}">{series.name}: </span>' +
            '<span style="text-align: right"> {point.y} </span><br />' +
            '<span style="color: {series.color}">최근 7일 평균 대비: </span>' +
            '<span style="text-align: right"> ▲1.23% </span> ' +
            "",
          footerFormat: "",
          valueDecimals: 2,
        },
        marker: {
          enabled: false,
          symbol: "circle",
          fillColor: "#FFFFFF",
          lineWidth: 2,
        },
      },
    ],
  });
});
