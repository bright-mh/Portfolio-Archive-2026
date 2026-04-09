/**
 *	monitoring_006 : 가스사용량
 */
jQuery(function () {
  jQuery("#chart06").highcharts({
    credits: { enabled: false },
    chart: {
      type: "spline",
      spacing: [5, 15, 10, 0],
    },
    title: {
      text: "",
    },
    subtitle: {
      text: "",
    },
    yAxis: {
      lineWidth: 1,
      title: {
        text: " N㎥",
        style: { color: "#777777", "font-size": "10px", "font-weight": "bold" }, //2014-01-09 y축 단위 볼드처리
      },
      min: 0,
      minorGridLineWidth: 0,
      gridLineWidth: 1,
      alternateGridColor: null,
      tickColor: "#cccccc",
    },
    xAxis: {
      type: "datetime",
      dateTimeLabelFormats: {
        hour: "%H:%M",
      },
      tickInterval: 6 * 60 * 60 * 1000,
      tickWidth: 0, //2014-01-09 x축 라인삭제
    },
    plotOptions: {
      line: {
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1,
          },
        },
        marker: { enabled: false, symbol: "circle", radius: 3, lineWidth: 0 },
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
      pointFormat:
        "<p>" +
        '<span style="color: {series.color}">{series.name}: </span>' +
        '<span style="text-align: right"> {point.y} </span> ' +
        "</p> ",
      footerFormat: "",
      valueDecimals: 2,
    },
    series: [
      {
        name: "냉난방",
        data: [
          37.3, 35.1, 34.3, 35.2, 34.4, 34.7, 33.5, 34.1, 35.6, 34.4, 34.9, 35.1, 33.9, 34.9, 33.5, 34.7, 34.3, 35.1,
          34.3, 35.2, 35.4, 34.7, 33.5, 34.1, 35.6, 34.4, 34.9, 35.1, 33.9, 34.9, 33.5, 35.2, 35.4, 34.7, 33.5, 34.1,
          35.6, 34.4, 34.9, 35.1, 33.9, 34.9, 33.5, 35.1, 33.9, 34.9, 33.5, 34.7, 33.5, 34.1, 35.6, 34.4, 34.9, 35.1,
          33.9, 34.9, 33.5, 35.1, 31.9, 34.9, 33.9, 34.9, 33.5, 34.7, 34.3, 35.1, 34.3, 35.2, 35.4, 34.7, 33.5, 34.1,
          34.9, 33.5, 35.1, 33.9, 34.9, 33.9, 34.9, 33.5, 34.7, 34.3, 35.1, 34.3, 35.4, 34.7, 33.5, 34.1, 35.6, 34.4,
          34.9, 35.1, 33.9, 34.9, 33.5, 34.7,
        ],
        marker: { enabled: false, symbol: "circle", radius: 3, lineWidth: 0 },
        pointStart: Date.UTC(2013, 11, 14),
        pointInterval: 15 * 60 * 1000,
      },
      {
        name: "급탕",
        data: [
          4.3, 4.7, 4.3, 5.1, 4.3, 5.4, 4.7, 3.5, 4.1, 5.6, 4.4, 4.9, 5.1, 3.9, 4.9, 3.5, 4.7, 4.3, 5.1, 4.3, 5.2, 5.4,
          4.7, 47.5, 45.1, 52.1, 49.6, 40.4, 4.9, 5.1, 3.9, 4.9, 3.5, 4.7, 4.3, 5.2, 5.4, 4.7, 3.5, 4.1, 5.6, 4.4, 4.9,
          5.1, 3.9, 4.9, 3.5, 4.7, 5.2, 5.4, 2.3, 5.1, 4.3, 5.2, 5.4, 4.7, 3.5, 2.9, 5.1, 3.9, 4.9, 3.5, 4.7, 4.3, 5.2,
          5.4, 4.7, 3.5, 4.1, 5.6, 5.2, 5.4, 4.7, 3.5, 4.1, 32.9, 35.1, 33.9, 34.9, 33.5, 34.7, 34.3, 35.2, 35.4, 35.7,
          39.5, 34.1, 35.6, 34.7, 41.7, 3.5, 4.9, 5.1, 3.9, 4.9, 3.5, 4.7, 5.1, 3.9, 4.9,
        ],
        marker: { enabled: false, symbol: "circle", radius: 3, lineWidth: 0 },
        pointStart: Date.UTC(2013, 11, 14),
        pointInterval: 15 * 60 * 1000,
      },
      {
        name: "취사",
        data: [
          4.3, 5.1, 4.3, 5.2, 5.4, 4.7, 3.5, 4.1, 5.6, 4.4, 4.9, 5.1, 3.9, 4.9, 3.5, 4.7, 4.3, 5.1, 4.3, 25.2, 25.4,
          24.7, 23.5, 24.1, 25.6, 24.4, 24.9, 25.1, 23.9, 24.9, 23.5, 24.7, 4.3, 5.1, 4.3, 5.2, 5.4, 4.7, 3.5, 4.1, 5.6,
          4.4, 4.9, 5.1, 3.9, 4.9, 23.5, 24.7, 29.3, 25.1, 24.3, 5.2, 5.4, 4.7, 3.5, 4.1, 5.6, 4.4, 4.9, 5.1, 3.9, 4.9,
          3.5, 4.7, 4.3, 5.1, 4.3, 5.2, 5.4, 4.7, 3.5, 4.1, 22.6, 24.4, 24.9, 25.1, 23.9, 24.9, 23.5, 24.7, 24.3, 25.1,
          24.3, 25.2, 25.4, 24.7, 23.5, 24.1, 5.6, 4.4, 4.9, 5.1, 3.9, 4.9, 3.5, 4.7,
        ],
        marker: { enabled: false, symbol: "circle", radius: 3, lineWidth: 0 },
        pointStart: Date.UTC(2013, 11, 14),
        pointInterval: 15 * 60 * 1000,
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
