/**
			dashboard_002_daily : 에너지 사용량 (일별)
		*/

jQuery(function () {
  $("#chart02").highcharts({
    credits: { enabled: false },
    exporting: { enabled: false },
    legend: { enabled: false },
    chart: {
      margin: [5, 35, 35, 35], //y축 짤림 여백 수정
      spacing: [2, 0, 0, 0],
    },
    title: { text: " " },
    subtitle: { text: " " },

    xAxis: [
      {
        type: "datetime",
        dateTimeLabelFormats: {
          day: "%e", // %e:날짜(숫자), %a:요일(세글자), %m:월(숫자) %Y:년도(숫자) %H:시간(24), %M:분, %S:초
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
            "font-weight": "bold", //2014-01-09 y축 단위 볼드 처리
          },
          x: -2,
        },
        title: {
          rotation: -90,
          text: "toe",
          style: {
            color: "#777777",
            "font-size": "8px",
            "font-weight": "bold", //2014-01-09 y축 단위 볼드 처리
          },
          x: 5,
        },
      },
      {
        // Secondary yAxis
        lineWidth: 1,
        title: {
          text: "℃", //2014-01-09 y축 단위 괄호 삭제
          rotation: 90,
          style: {
            color: "#777777",
            "font-size": "8px",
            "writing-mode": "lr-tb",
            "font-weight": "bold", //2014-01-09 y축 단위 볼드 처리
          },
          x: -2,
        },
        labels: {
          format: "{value}",
          style: {
            color: "#777777",
            "font-size": "8px",
            align: 0,
            "font-weight": "bold", //2014-01-09 y축 단위 볼드 처리
          },
          x: 5,
        },
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
          color: "#777777",
          "font-size": "8px",
        },
      },
      style: {
        color: "#777777",
        "font-size": "8px",
      },
      itemStyle: { fontSize: "8px" },
    },
    series: [
      {
        name: "가스",
        legendIndex: 1,
        color: "#77b4d3",
        type: "column",
        yAxis: 0,
        data: [
          2.9, 3.5, 3.4, 2.2, 4.0, 5.0, 4.6, 4.5, 5.4, 4.6, 4.6, 4.4, 4.9, 4.5, 3.4, 4.2, 4.0, 5.0, 3.6, 3.5, 5.4, 4.1,
          3.9, 4.5, 3.4, 4.2, 4.0, 3.8, 3.6, 3.5,
        ],
        pointInterval: 24 * 3600 * 1000, // one day
        labels: {
          style: {
            color: "#777777",
            "font-size": "8px",
          },
        },
        tooltip: {
          valueSuffix: " toe",
          dateTimeLabelFormats: {
            day: "%m월%e일(%a)", // %e:날짜(숫자), %a:요일(세글자), %m:월(숫자) %Y:년도(숫자) %H:시간(24), %M:분, %S:초
          },
          shared: true,
          useHTML: true,
          headerFormat: "{point.key}<br />",
          pointFormat:
            "<dl>" + "<dt >{series.name}: </dt>" + '<dd style="text-align: right"> {point.y} </dd> ' + "</dl> ",
          footerFormat: "",
          valueDecimals: 2,
        },
      },
      {
        name: "전기",
        legendIndex: 0,
        color: "#ed8672",
        type: "column",
        yAxis: 0,
        data: [
          3.9, 3.5, 3.4, 3.2, 3.0, 3.2, 3.6, 3.5, 3.4, 3.1, 3.6, 3.4, 3.9, 3.5, 3.4, 3.2, 3.0, 3.6, 3.6, 3.5, 3.4, 3.1,
          3.9, 3.5, 3.4, 3.2, 3.0, 3.0, 3.6, 3.5,
        ],
        pointInterval: 24 * 3600 * 1000, // one day
        labels: {
          style: {
            color: "#777777",
            "font-size": "8px",
          },
        },
        tooltip: {
          valueSuffix: " toe",
          dateTimeLabelFormats: {
            day: "%m월%e일(%a)", // %e:날짜(숫자), %a:요일(세글자), %m:월(숫자) %Y:년도(숫자) %H:시간(24), %M:분, %S:초
          },
          shared: true,
          useHTML: true,
          headerFormat: "{point.key}<br />",
          pointFormat:
            "<dl>" + "<dt>{series.name}: </dt>" + '<dd style="text-align: right"> {point.y} </dd> ' + "</dl> ",
          footerFormat: "",
          valueDecimals: 2,
        },
      },
      {
        name: "평균외기온도",
        legendIndex: 2,
        color: "#616161",
        type: "line",
        yAxis: 1,
        data: [
          2.9, 11.5, 10.4, 19.2, 14.0, 16.0, 15.6, 18.5, 16.4, 14.1, 15.6, 14.4, 14.9, 11.5, 10.4, 19.2, 14.0, 16.0,
          15.6, 18.5, 16.4, 14.1, 15.9, 11.5, 10.4, 19.2, 14.0, 16.0, 15.6, 18.5,
        ],
        pointInterval: 24 * 3600 * 1000, // one day
        labels: {
          style: {
            color: "#777777",
            "font-size": "8px",
          },
        },
        tooltip: {
          valueSuffix: " ℃",
          dateTimeLabelFormats: {
            day: "%m월%e일(%a)", // %e:날짜(숫자), %a:요일(세글자), %m:월(숫자) %Y:년도(숫자) %H:시간(24), %M:분, %S:초
          },
          shared: true,
          useHTML: true,
          headerFormat: "{point.key}<br />",
          pointFormat:
            "<dl>" + "<dt>{series.name}: </dt>" + '<dd style="text-align: right"> {point.y} </dd> ' + "</dl> ",
          footerFormat: "",
          valueDecimals: 2,
        },
        marker: {
          enabled: false,
          symbol: "circle",
          fillColor: "#FFFFFF",
          lineColor: "#616161",
          lineWidth: 2,
        },
      },
    ],
  });
});
