jQuery(function () {
  $("#chart06").highcharts({
    credits: { enabled: false },
    exporting: { enabled: false },
    legend: { enabled: false },
    chart: {
      margin: [5, 5, 40, 35],
      spacing: [2, 0, 30, 0],
    },
    title: { text: " " },
    subtitle: { text: " " },

    xAxis: [
      {
        type: "datetime",
        dateTimeLabelFormats: {
          hour: "%H", // %e:날짜(숫자), %a:요일(세글자), %m:월(숫자) %Y:년도(숫자) %H:시간(24), %M:분, %S:초
        },
        pointStart: Date.UTC(2013, 12, 05), // 기준 날짜를 설정
        labels: {
          align: "center",
          style: {
            color: "#777777",
            "font-size": "8px",
            "font-weight": "normal",
          },
        },
        tickWidth: 0, //2014-01-09 x축 라인 삭제
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
            "font-size": "8px",
          },
        },
        title: {
          rotation: -90,
          text: "N㎥",
          style: {
            color: "#777777",
            "font-size": "8px",
            "font-weight": "bold", //2014-01-09 y축 단위 볼드 처리
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
      y: 30,
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
      itemStyle: { fontSize: "10px" },
    },
    series: [
      {
        name: "최근1주일평균",
        legendIndex: 1, //2014-01-09 범례 순서 바꿈
        color: "#b4dcf0",
        type: "area",
        data: [0, 0, 12, 13, 14, 10, 9, 8, 10, 7, 10, 13, 12, 9, 10, 6, 12, 17, 19, 11, 8, 7, 0, 0],
        pointInterval: 3600 * 1000, // one day
        labels: {
          style: {
            color: "#777777",
            "font-size": "8px",
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
          pointFormat: "" + "<span>{series.name}: </span>" + '<span style="text-align: right"> {point.y} </span> ' + "",
          footerFormat: "",
          valueDecimals: 2,
        },
        marker: {
          enabled: false,
          symbol: "circle",
        },
      },
      {
        name: "오늘",
        legendIndex: 0, //2014-01-09 범례 순서 바꿈
        color: "#77b4d3",
        type: "line",
        yAxis: 0,
        data: [0, 0, 10, 9, 4, 5, 6, 7, 8, 5, 8, 9, 8, 5, 7, 3, 9, 14, 15, 10, 5, 5, 0, 0],
        pointInterval: 3600 * 1000, // one day
        labels: {
          style: {
            color: "#777777",
            "font-size": "8px",
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
            "<span >{series.name}: </span>" +
            '<span style="text-align: right"> {point.y} </span><br />' +
            "<span >최근 7일 평균 대비: </span>" +
            '<span style="text-align: right"> ▲1.23% </span> ' +
            "",
          footerFormat: "",
          valueDecimals: 2,
        },
        marker: {
          enabled: false,
          symbol: "circle",
        },
      },
    ],
  });
});
