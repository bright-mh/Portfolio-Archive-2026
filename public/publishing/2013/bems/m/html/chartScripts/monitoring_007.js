/**
 *	monitoring_007 : 실내외 온도/습도
 */
jQuery(function () {
  jQuery("#chart07").highcharts({
    credits: { enabled: false },
    chart: {
      type: "spline",
      spacing: [5, 0, 5, 0],
    },
    title: {
      text: "",
    },
    subtitle: {
      text: "",
    },
    yAxis: [
      {
        lineWidth: 1,
        title: {
          text: " ℃", //2014-01-09 단위 수정
          style: { color: "#777777", "font-size": "10px", "font-weight": "bold" }, //2014-01-09 y축 단위 볼드처리
        },
        min: 0,
        minorGridLineWidth: 0,
        gridLineWidth: 1,
        alternateGridColor: null,
        //tickInterval: 5,
        tickColor: "#cccccc",
      },
      {
        lineWidth: 1,
        title: {
          text: " %",
          style: { color: "#777777", "font-size": "10px", "font-weight": "bold" }, //2014-01-09 y축 단위 볼드처리},
        },
        min: 0,
        minorGridLineWidth: 0,
        gridLineWidth: 1,
        alternateGridColor: null,
        //tickInterval: 10,
        tickColor: "#cccccc",
        opposite: true,
      },
    ],
    xAxis: {
      tickWidth: 0,
      type: "datetime",
      dateTimeLabelFormats: {
        hour: "%H:%M",
      },
      tickInterval: 12 * 60 * 60 * 1000,
    },
    plotOptions: {
      line: {
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1,
          },
        },
        marker: {
          enabled: true,
        },
      },
    },
    series: [
      {
        name: "실내온도",
        marker: { enabled: false, symbol: "circle", radius: 3, lineWidth: 0 },
        data: [
          1.1,
          2.3,
          { y: 0.3, marker: { enabled: true, symbol: "url(http://www.highcharts.com/demo/gfx/snow.png)" } },
          2.2,
          2.4,
          3.7,
          4.5,
          5.1,
          5.6,
          6.4,
          7.9,
          7.1,
          7.9,
          8.9,
          9.5,
          9.7,
          10.3,
          10.1,
          10.3,
          13.2,
          12.4,
          14.7,
          14.5,
          14.1,
          15.6,
          15.4,
          16.9,
          16.1,
          16.9,
          17.9,
          17.5,
          17.2,
          18.4,
          18.7,
          18.5,
          18.1,
          { y: 19, marker: { enabled: true, symbol: "url(http://www.highcharts.com/demo/gfx/sun.png)" } },
          19.4,
          20.9,
          20.1,
          20.9,
          24.9,
          23.5,
          25.1,
          23.9,
          24.9,
          23.5,
          24.7,
          23.5,
          24.1,
          25.6,
          24.4,
          24.9,
          25.1,
          26.9,
          27.9,
          27.5,
          30.1,
          30.9,
          34.9,
          33.9,
          34.9,
          33.5,
          28.7,
          28.3,
          27.1,
          27.3,
          27.2,
          25.4,
          24.7,
          23.5,
          24.1,
          24.9,
          23.5,
          25.1,
          23.9,
          24.9,
          13.9,
          14.9,
          13.5,
          14.7,
          14.3,
          15.1,
          14.3,
          15.4,
          14.7,
          10.5,
          9.1,
          9.6,
          9.4,
          5.9,
          5.1,
          3.9,
          4.9,
          3.5,
          2.7,
        ],
        pointStart: Date.UTC(2013, 11, 14),
        pointInterval: 15 * 60 * 1000,
        tooltip: {
          valueSuffix: " ℃",
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
      },
      {
        name: "실외온도",
        data: [
          4.3, 4.7, 4.3, 5.1, 4.3, 5.4, 4.7, 3.5, 4.1, 5.6, 4.4, 4.9, 5.1, 3.9, 4.9, 3.5, 4.7, 4.3, 5.1, 4.3, 5.2, 5.4,
          4.7, 3.5, 4.1, 4.1, 5.6, 4.4, 4.9, 5.1, 3.9, 4.9, 3.5, 4.7, 4.3, 5.2, 5.4, 4.7, 3.5, 4.1, 5.6, 4.4, 4.9, 5.1,
          3.9, 4.9, 3.5, 4.7, 5.2, 5.4, 2.3, 5.1, 4.3, 5.2, 5.4, 4.7, 3.5, 2.9, 5.1, 3.9, 4.9, 3.5, 4.7, 4.3, 5.2, 5.4,
          4.7, 3.5, 4.1, 5.6, 5.2, 5.4, 4.7, 3.5, 4.1, 2.9, 5.1, 3.9, 4.9, 3.5, 4.7, 4.3, 5.2, 5.4, 4.7, 3.5, 4.1, 5.6,
          4.7, 4.7, 3.5, 4.9, 5.1, 3.9, 4.9, 3.5, 4.7, 5.1, 3.9, 4.9,
        ],
        marker: { enabled: false, symbol: "circle", radius: 3, lineWidth: 0 },
        pointStart: Date.UTC(2013, 11, 14),
        pointInterval: 15 * 60 * 1000,
        tooltip: {
          valueSuffix: " ℃",
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
      },
      {
        name: "실내습도",
        //                color:'#149bbe',
        dashStyle: "Dash",
        yAxis: 1,
        data: [
          14.3, 15.1, 14.3, 15.2, 15.4, 14.7, 13.5, 14.1, 15.6, 14.4, 14.9, 15.1, 13.9, 14.9, 13.5, 14.7, 14.3, 15.1,
          14.3, 15.2, 15.4, 14.7, 13.5, 14.1, 15.6, 14.4, 14.9, 15.1, 13.9, 14.9, 13.5, 14.7, 14.3, 15.1, 14.3, 15.2,
          15.4, 14.7, 13.5, 14.1, 15.6, 14.4, 14.9, 15.1, 13.9, 14.9, 13.5, 14.7, 19.3, 15.1, 14.3, 15.2, 15.4, 14.7,
          13.5, 14.1, 15.6, 14.4, 14.9, 15.1, 13.9, 14.9, 13.5, 14.7, 14.3, 15.1, 14.3, 15.2, 15.4, 14.7, 13.5, 14.1,
          12.6, 14.4, 14.9, 15.1, 13.9, 14.9, 13.5, 14.7, 14.3, 15.1, 14.3, 15.2, 15.4, 14.7, 13.5, 14.1, 15.6, 14.4,
          14.9, 15.1, 13.9, 14.9, 13.5, 14.7,
        ],
        marker: { enabled: false, symbol: "circle", radius: 3, lineWidth: 0 },
        pointStart: Date.UTC(2013, 11, 14),
        pointInterval: 15 * 60 * 1000,
        tooltip: {
          valueSuffix: " %",
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
      },
      {
        name: "실외습도",
        //                color:'#149bbe',
        dashStyle: "Dash",
        yAxis: 1,
        data: [
          48.3, 45.1, 44.3, 45.2, 45.4, 44.7, 43.5, 44.1, 45.6, 44.4, 44.9, 45.1, 43.9, 44.9, 43.5, 44.7, 44.3, 45.1,
          44.3, 45.2, 45.4, 44.7, 43.5, 44.1, 48.6, 44.4, 44.9, 45.1, 43.9, 44.9, 43.5, 44.7, 44.3, 45.1, 44.3, 45.2,
          45.4, 44.7, 43.5, 44.1, 45.6, 44.4, 44.9, 45.1, 43.9, 44.9, 43.5, 44.7, 48.3, 45.1, 44.3, 45.2, 45.4, 44.7,
          43.5, 44.1, 45.6, 44.4, 44.9, 45.1, 43.9, 44.9, 43.5, 44.7, 44.3, 45.1, 44.3, 45.2, 45.4, 44.7, 43.5, 44.1,
          48.6, 44.4, 44.9, 45.1, 43.9, 44.9, 43.5, 44.7, 44.3, 45.1, 44.3, 45.2, 45.4, 44.7, 43.5, 44.1, 45.6, 44.4,
          44.9, 45.1, 43.9, 44.9, 43.5, 44.7,
        ],
        marker: { enabled: false, symbol: "circle", radius: 3, lineWidth: 0 },
        pointStart: Date.UTC(2013, 11, 14),
        pointInterval: 15 * 60 * 1000,
        tooltip: {
          valueSuffix: " %",
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
      itemStyle: { fontSize: "10px" }, //2014-01-09 범례 폰트사이즈 수정
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
