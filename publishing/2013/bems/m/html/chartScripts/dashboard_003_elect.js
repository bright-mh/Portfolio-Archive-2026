/**
 *	dashboard_003_elect.js : 에너지 사용 패턴 (전기)
 */
jQuery(function () {
  $("#chart05").highcharts({
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
          text: "kWh",
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
        legendIndex: 2,
        color: "#f7beb2",
        type: "area",
        data: [
          150, 140, 135, 143, 156, 172, 214, 250, 254, 260, 250, 262, 270, 259, 250, 265, 259, 262, 270, 255, 175, 185,
          162, 150,
        ],
        pointInterval: 3600 * 1000, // one day
        labels: {
          style: {
            color: "#777777",
            "font-size": "8px",
          },
        },
        tooltip: {
          valueSuffix: " kWh",
          dateTimeLabelFormats: {
            hour: "%H", // %e:날짜(숫자), %a:요일(세글자), %m:월(숫자) %Y:년도(숫자) %H:시간(24), %M:분, %S:초
          },
          shared: false,
          useHTML: true,
          headerFormat: "{point.key}시<br />",
          pointFormat:
            "" + "<span >{series.name}: </span>" + '<span style="text-align: right"> {point.y} </span> ' + "",
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
        legendIndex: 0,
        color: "#ed8672",
        type: "line",
        yAxis: 0,
        data: [
          156, 142, 130, 141, 150, 175, 210, 245, 250, 255, 240, 252, 263, 249, 260, 255, 250, 242, 0, 0, 0, 0, 0, 0,
        ],
        pointInterval: 3600 * 1000, // one day
        labels: {
          style: {
            color: "#777777",
            "font-size": "8px",
          },
        },
        tooltip: {
          valueSuffix: " kWh",
          dateTimeLabelFormats: { hour: "%H" },
          shared: false,
          useHTML: true,
          headerFormat: "{point.key} 시<br />",
          pointFormat:
            "" +
            "<span >{series.name}: </span>" +
            '<span style="text-align: right"> {point.y} </span><br />' +
            '<span ">최근 7일 평균 대비: </span>' +
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
