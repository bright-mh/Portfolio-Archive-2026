/**
			dashboard_002_daily : 에너지 사용량 (일별)
		*/

jQuery(function () {
  $("#chart02").highcharts({
    credits: { enabled: false },
    exporting: { enabled: false },
    legend: { enabled: false },
    chart: {
      margin: [5, 30, 45, 30],
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
        tickWidth: 0,
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
            "font-weight": "normal",
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
            "writing-mode": "lr-tb",
            "font-weight": "bold",
          },
          x: -2,
        },
        labels: {
          format: "{value}",
          style: {
            color: "#777777",
            "font-size": "8px",
            align: 0,
            "font-weight": "normal",
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
        name: "Gas",
        legendIndex: 1,
        color: "#77b4d3",
        type: "column",
        yAxis: 0,
        data: [
          0.332717,
          1.488361,
          1.226568,
          1.065946,
          0.964775,
          1.120182,
          0.257621,
          0.068838,
          1.53321,
          1.632295,
          1.811691,
          1.680273,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
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
            day: "%b %e (%a)", // %e:날짜(숫자), %a:요일(세글자), %m:월(숫자) %Y:년도(숫자) %H:시간(24), %M:분, %S:초
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
        name: "Electricity",
        legendIndex: 0,
        color: "#ed8672",
        type: "column",
        yAxis: 0,
        data: [
          2.534695,
          4.3984039,
          4.3804253,
          4.2835827,
          4.1926452,
          4.1613801,
          2.5172538,
          2.3693045,
          4.3561877,
          4.3562403,
          4.4663242,
          3.883057,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
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
            day: "%b %e (%a)", // %e:날짜(숫자), %a:요일(세글자), %m:월(숫자) %Y:년도(숫자) %H:시간(24), %M:분, %S:초
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
        name: "Outdoor Temperature",
        legendIndex: 2,
        color: "#616161",
        type: "line",
        yAxis: 1,
        data: [
          4.5,
          3.9,
          6.7,
          5.5,
          5.5,
          3.0,
          6.2,
          4.2,
          3.8,
          0.3,
          -1.7,
          -3.2,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
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
            day: "%b %e (%a)", // %e:날짜(숫자), %a:요일(세글자), %m:월(숫자) %Y:년도(숫자) %H:시간(24), %M:분, %S:초
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
