/**
 *	monitoring_001 : 에너지원별 사용량
 */
jQuery(function () {
  $("#chart01").highcharts({
    credits: { enabled: false },
    exporting: { enabled: false },
    legend: { enabled: false },
    chart: {
      margin: [5, 25, 35, 35],
      spacing: [2, 10, 5, 0],
    },
    title: { text: " " },
    subtitle: { text: " " },

    xAxis: [
      {
        type: "datetime",
        dateTimeLabelFormats: {
          hour: "%H:%M",
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
        // 1st yAxis
        lineWidth: 1,
        labels: {
          format: "{value}",
          align: "right",
          style: {
            color: "#777777",
            "font-size": "8px",
          },
          x: -2,
        },
        title: {
          rotation: -90,
          text: "kWh",
          style: {
            color: "#777777",
            "font-size": "8px",
            "font-weight": "bold", //2014-01-09 y축 단위 볼드 처리
          },
          x: 8,
        },
        min: 0,
      },
      {
        // 2nd yAxis
        lineWidth: 1,
        labels: {
          format: "{value}",
          style: {
            color: "#777777",
            "font-size": "8px",
          },
          x: 2,
        },
        title: {
          text: "N㎥",
          style: {
            color: "#777777",
            "font-size": "8px",
            "font-weight": "bold", //2014-01-09 y축 단위 볼드 처리
          },
          x: -5,
        },
        opposite: 1,
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
      y: 10,
      borderColor: "#FFFFFF",
      itemDistance: 0,
      title: {
        style: {
          "font-size": "8px",
          color: "#777777",
          "font-weight": "normal",
        },
      },
      style: {
        "font-size": "8px",
        color: "#777777",
        "font-weight": "normal",
      },
      itemStyle: { fontSize: "10px" },
    },
    series: [
      {
        name: "일반전력",
        legendIndex: 0,
        color: "#ed8672",
        type: "line",
        data: [
          112, 113, 124, 110, 109, 108, 110, 107, 100, 123, 112, 140, 161, 145, 172, 155, 167, 152, 160, 150, 200, 210,
          200, 225, 217, 210, 210, 210, 223, 210, 234, 210, 222, 215, 210, 210, 229, 228, 235, 210, 227, 210, 220, 205,
          215, 210, 220, 214, 215, 210, 212, 218, 238, 280, 243, 211, 225, 225, 211, 197, 210, 214, 205, 210, 225, 237,
          230, 215, 210, 211, 205, 220, 210, 205, 210, 217, 218, 225, 210, 233, 210, 227, 218, 225, 227, 230, 214, 208,
          220, 221, 218, 215, 207, 213, 232, 228, 250,
        ],
        pointStart: Date.UTC(2013, 12, 05),
        pointInterval: 15 * 60 * 1000, // one day
        labels: {
          style: {
            color: "#777777",
            "font-size": "8px",
          },
        },
        tooltip: {
          valueSuffix: " kWh",
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
          //fillColor:'#FFFFFF',
          //lineWidth: 2
        },
      },
      {
        name: "심야전력",
        legendIndex: 1,
        color: "#f7beb2",
        type: "line",
        yAxis: 0,
        data: [
          12, 13, 14, 10, 9, 8, 10, 7, 10, 13, 12, 50, 61, 55, 72, 65, 70, 52, 62, 70, 100, 110, 100, 115, 107, 112,
          100, 130, 123, 120, 134, 130, 132, 125, 110, 130, 129, 118, 125, 110, 127, 100, 120, 115, 105, 117, 120, 114,
          105, 120, 132, 118, 128, 180, 143, 121, 125, 135, 121, 117, 120, 114, 125, 120, 125, 117, 130, 115, 120, 121,
          105, 120, 110, 115, 120, 107, 118, 125, 110, 123, 110, 117, 128, 105, 117, 130, 124, 118, 120, 121, 118, 135,
          117, 123, 132, 108, 150,
        ],
        pointStart: Date.UTC(2013, 12, 05),
        pointInterval: 15 * 60 * 1000, // one day
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
            '<span style="color: {series.color}">{series.name}: </span>' +
            '<span style="text-align: right"> {point.y} </span><br />' +
            "",
          footerFormat: "",
          valueDecimals: 2,
        },
        marker: {
          enabled: false,
          symbol: "circle",
          //fillColor:'#FFFFFF',
          //lineWidth: 2
        },
      },
      {
        name: "가스",
        legendIndex: 1,
        color: "#77b4d3",
        type: "line",
        yAxis: 0,
        data: [
          12, 13, 14, 10, 9, 8, 10, 7, 10, 13, 12, 20, 11, 15, 22, 25, 20, 12, 12, 10, 10, 11, 13, 15, 17, 12, 10, 13,
          14, 12, 14, 13, 11, 15, 11, 13, 19, 11, 12, 11, 17, 10, 12, 11, 15, 17, 12, 14, 15, 12, 12, 11, 18, 11, 14,
          12, 15, 13, 21, 17, 12, 14, 25, 12, 15, 17, 13, 11, 12, 15, 15, 12, 11, 15, 12, 17, 11, 15, 11, 13, 10, 11,
          18, 15, 17, 13, 14, 18, 12, 11, 18, 15, 17, 12, 13, 18, 15,
        ],
        pointStart: Date.UTC(2013, 12, 05),
        pointInterval: 15 * 60 * 1000, // one day
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
            '<span style="color: {series.color}">{series.name}: </span>' +
            '<span style="text-align: right"> {point.y} </span><br />' +
            "",
          footerFormat: "",
          valueDecimals: 2,
        },
        marker: {
          enabled: false,
          symbol: "circle",
        },
        yAxis: 1,
      },
    ],
  });
});
