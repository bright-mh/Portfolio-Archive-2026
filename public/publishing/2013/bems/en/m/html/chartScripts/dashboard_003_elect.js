jQuery(function () {
  db_003_elec_7();
});

function db_003_elec_1() {
  db_003_elec(
    "Yesterday",
    [
      464, 436, 420, 396, 406, 464, 668, 909, 1045, 1151, 1168, 1108, 1061, 1128, 1063, 1072, 1030, 1066, 1003, 805,
      717, 644, 607, 574,
    ],
  );
}
function db_003_elec_7() {
  db_003_elec(
    "Latest 7-day average",
    [
      460, 421, 409, 397, 402, 443, 571, 730, 810, 904, 913, 904, 858, 911, 886, 881, 844, 873, 833, 686, 614, 565, 552,
      530,
    ],
  );
}
function db_003_elec_30() {
  db_003_elec(
    "Latest 30-day average",
    [
      472, 433, 423, 413, 420, 465, 633, 847, 958, 1054, 1055, 1041, 992, 1063, 1021, 1025, 993, 1000, 820, 746, 666,
      604, 579, 552,
    ],
  );
}

function db_003_elec(name, data) {
  $("#chart05").highcharts({
    credits: { enabled: false },
    exporting: { enabled: false },
    legend: { enabled: false },
    chart: {
      margin: [5, 5, 50, 35],
      spacing: [2, 0, 30, 0],
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
        tickWidth: 0,
        pointStart: Date.UTC(2013, 12, 05), // 기준 날짜를 설정
        labels: {
          align: "center",
          style: {
            color: "#777777",
            "font-size": "8px",
            "font-weight": "normal",
          },
        },
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
            "font-weight": "normal",
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
      itemStyle: { fontSize: "8px" },
    },
    series: [
      {
        name: name,
        legendIndex: 1,
        color: "#f7beb2",
        type: "area",
        data: data,
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
          headerFormat: "{point.key}<br />",
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
        name: "Today",
        legendIndex: 0,
        color: "#ed8672",
        type: "line",
        yAxis: 0,
        data: [
          492,
          442,
          440,
          445,
          451,
          488,
          660,
          903,
          1020,
          1106,
          1084,
          1112,
          1056,
          1150,
          1114,
          1122,
          1105,
          1060,
          624,
          null,
          null,
          null,
          null,
          null,
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
          headerFormat: "{point.key}<br />",
          pointFormat:
            "" +
            "<span >{series.name}: </span>" +
            '<span style="text-align: right"> {point.y} </span><br />' +
            '<span ">Compared to the <br />latest 7-day average</span>' +
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
}
