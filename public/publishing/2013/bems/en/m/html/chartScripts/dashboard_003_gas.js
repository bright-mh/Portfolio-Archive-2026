jQuery(function () {
  db_003_gas_7();
});

function db_003_gas_1() {
  db_003_gas(
    "Yesterday",
    [0, 0, 0, 0, 0, 102, 86, 143, 160, 144, 128, 130, 129, 153, 72, 119, 117, 119, 108, 27, 0, 0, 0, 0],
  );
}
function db_003_gas_7() {
  db_003_gas(
    "Latest 7-day average",
    [0, 0, 0, 0, 0, 51, 48, 100, 100, 90, 78, 75, 71, 76, 54, 63, 66, 62, 61, 15, 0, 0, 0, 0],
  );
}
function db_003_gas_30() {
  db_003_gas(
    "Latest 30-day average",
    [0, 0, 0, 0, 0, 51, 48, 100, 100, 90, 78, 75, 71, 76, 54, 63, 66, 62, 61, 15, 0, 0, 0, 0],
  );
}

function db_003_gas(name, data) {
  $("#chart06").highcharts({
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
          text: "N㎥",
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
        color: "#b4dcf0",
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
          valueSuffix: " N㎥",
          dateTimeLabelFormats: {
            hour: "%H:%M",
          },
          shared: false,
          useHTML: true,
          headerFormat: "{point.key}<br />",
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
        name: "Today",
        legendIndex: 0,
        color: "#77b4d3",
        type: "line",
        yAxis: 0,
        data: [
          0,
          0,
          0,
          0,
          0,
          104,
          52,
          191,
          196,
          126,
          85,
          140,
          114,
          121,
          102,
          92,
          90,
          116,
          12,
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
          valueSuffix: " N㎥",
          dateTimeLabelFormats: { hour: "%H:%M" },
          shared: false,
          useHTML: true,
          headerFormat: "{point.key}<br />",
          pointFormat:
            "" +
            "<span >{series.name}: </span>" +
            '<span style="text-align: right"> {point.y} </span><br />' +
            "<span >Compared to the <br />latest 7-day average: </span>" +
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
