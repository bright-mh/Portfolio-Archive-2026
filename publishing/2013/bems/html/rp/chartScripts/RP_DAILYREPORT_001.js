$(function () {
  $("#chart01").highcharts({
    chart: {
      spacing: BC.spacing,
      events: {
        load: function (event) {
          onChartLoaded("chart01");
        },
      }, // 2014-01-07 폰트 통일을 위해 추가
    },
    title: BC.emptyText,
    credits: false,
    xAxis: {
      tickWidth: 0,
      type: "datetime",
      //dateTimeLabelFormats: { hour: '%H' },		//2014-01-07 기존 데이터 주석처리
      //tickInterval: BC.interval._1H,			//2014-01-07 기존 데이터 주석처리
      /* 2014-01-07 x축 시간 간격 기본으로 수정 */
      dateTimeLabelFormats: {
        day: "%H:%M",
        hour: "%H:%M",
      },
      labels: {
        style: {
          "font-size": "11px",
        },
      },
      /* //   2014-01-07 x축 시간 간격 기본으로 수정 */
      plotBands: [
        {
          from: Date.UTC(2013, 11, 14),
          to: Date.UTC(2013, 11, 14) + 1000 * 60 * 60 * 9,
          color: "rgba(241, 246, 231, 1)",
        },
        {
          from: Date.UTC(2013, 11, 14) + 1000 * 60 * 60 * 9,
          to: Date.UTC(2013, 11, 14) + 1000 * 60 * 60 * 10,
          color: "rgba(253, 243, 224, 1)",
        },
        {
          from: Date.UTC(2013, 11, 14) + 1000 * 60 * 60 * 10,
          to: Date.UTC(2013, 11, 14) + 1000 * 60 * 60 * 12,
          color: "rgba(248, 229, 229, 1)",
        },
        {
          from: Date.UTC(2013, 11, 14) + 1000 * 60 * 60 * 12,
          to: Date.UTC(2013, 11, 14) + 1000 * 60 * 60 * 17,
          color: "rgba(253, 243, 224, 1)",
        },
        {
          from: Date.UTC(2013, 11, 14) + 1000 * 60 * 60 * 17,
          to: Date.UTC(2013, 11, 14) + 1000 * 60 * 60 * 19,
          color: "rgba(248, 229, 229, 1)",
        },
        {
          from: Date.UTC(2013, 11, 14) + 1000 * 60 * 60 * 19,
          to: Date.UTC(2013, 11, 14) + 1000 * 60 * 60 * 22,
          color: "rgba(253, 243, 224, 1)",
        },
        {
          from: Date.UTC(2013, 11, 14) + 1000 * 60 * 60 * 22,
          to: Date.UTC(2013, 11, 14) + 1000 * 60 * 60 * 24,
          color: "rgba(253, 243, 224, 1)",
        },
      ],
    },
    yAxis: [
      {
        lineWidth: 1,
        min: 0,
        title: BC.txt.kWh,
        labels: BC.yLabelBy1000,
      },
      {
        lineWidth: 1,
        min: 0,
        title: BC.txt.kW,
        labels: BC.yLabelBy1000,
        opposite: 1,
      },
    ],
    legend: BC.legend,
    tooltip: BC.tooltip_ns,
    series: [
      {
        type: "column",
        name: "최근일주일평균",
        data: [
          1300, 1325, 1320, 1200, 1230, 1200, 1000, 950, 810, 800, 850, 860, 1300, 1325, 1320, 1200, 1230, 1200, 1000,
          950, 810, 800, 850, 860,
        ],
        pointStart: Date.UTC(2013, 11, 14),
        pointInterval: BC.interval._1H,
        marker: BC.marker01,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 2,
          dateTimeLabelFormats: { hour: "%Y-%m-%e (%H:%M)" },
          headerFormat: "{point.key}<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">전기 : </span>' +
            '<span style="text-align: right"> {point.y} </span>  <br/>' +
            "</p> ",
          footerFormat: "",
          valueSuffix: " kWh",
        },
      },
      {
        type: "line",
        name: "11월 05일 (화)",
        data: [
          1300, 1325, 1320, 1200, 1230, 1200, 1000, 950, 810, 800, 850, 860, 1300, 1325, 1320, 1200, 1230, 1200, 1000,
          950, 810, 800, 850, 860,
        ],
        pointStart: Date.UTC(2013, 11, 14),
        pointInterval: BC.interval._1H,
        marker: BC.marker01,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 2,
          dateTimeLabelFormats: { hour: "%Y-%m-%e (%H:%M)" },
          headerFormat: "{point.key}<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">전기 : </span>' +
            '<span style="text-align: right"> {point.y} </span>  <br/>' +
            "</p> ",
          footerFormat: "",
          valueSuffix: " kWh",
        },
      },
      {
        type: "line",
        name: "최대수요",
        data: [
          14000, 14250, 14200, 13000, 13030, 13000, 12000, 10050, 10010, 10000, 10050, 9600, 11000, 12025, 12020, 11000,
          11030, 11000, 10000, 10050, 1910, 1900, 1950, 1960,
        ],
        pointStart: Date.UTC(2013, 11, 14),
        pointInterval: BC.interval._1H,
        marker: BC.marker01,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 2,
          dateTimeLabelFormats: { hour: "%Y-%m-%e (%H:%M)" },
          headerFormat: "{point.key}<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">전기 : </span>' +
            '<span style="text-align: right"> {point.y} </span>  <br/>' +
            "</p> ",
          footerFormat: "",
          valueSuffix: " kW",
        },
        yAxis: 1,
      },
      {
        type: "line",
        name: "2013년 피크",
        data: [
          14000, 14000, 14000, 14000, 14000, 14000, 14000, 14000, 14000, 14000, 14000, 14000, 14000, 14000, 14000,
          14000, 14000, 14000, 14000, 14000, 14000, 14000, 14000, 14000,
        ],
        pointStart: Date.UTC(2013, 11, 14),
        pointInterval: BC.interval._1H,
        dashStyle: "Dash",
        marker: BC.marker01,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 2,
          dateTimeLabelFormats: { hour: "%Y-%m-%e (%H:%M)" },
          headerFormat: "{point.key}<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">전기 : </span>' +
            '<span style="text-align: right"> {point.y} </span>  <br/>' +
            "</p> ",
          footerFormat: "",
          valueSuffix: " kW",
        },
        yAxis: 1,
      },
      {
        type: "line",
        name: "2013년 목표피크",
        data: [
          13000, 13000, 13000, 13000, 13000, 13000, 13000, 13000, 13000, 13000, 13000, 13000, 13000, 13000, 13000,
          13000, 13000, 13000, 13000, 13000, 13000, 13000, 13000, 13000,
        ],
        pointStart: Date.UTC(2013, 11, 14),
        pointInterval: BC.interval._1H,
        marker: BC.marker01,
        dashStyle: "Dash",
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 2,
          dateTimeLabelFormats: { hour: "%Y-%m-%e (%H:%M)" },
          headerFormat: "{point.key}<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">전기 : </span>' +
            '<span style="text-align: right"> {point.y} </span>  <br/>' +
            "</p> ",
          footerFormat: "",
          valueSuffix: " kW",
        },
        yAxis: 1,
      },
      {
        type: "line",
        name: "2012년 피크",
        data: [
          16000, 16000, 16000, 16000, 16000, 16000, 16000, 16000, 16000, 16000, 16000, 16000, 16000, 16000, 16000,
          16000, 16000, 16000, 16000, 16000, 16000, 16000, 16000, 16000,
        ],
        pointStart: Date.UTC(2013, 11, 14),
        pointInterval: BC.interval._1H,
        marker: BC.marker01,
        dashStyle: "Dash",
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 2,
          dateTimeLabelFormats: { hour: "%Y-%m-%e (%H:%M)" },
          headerFormat: "{point.key}<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">전기 : </span>' +
            '<span style="text-align: right"> {point.y} </span>  <br/>' +
            "</p> ",
          footerFormat: "",
          valueSuffix: " kW",
        },
        yAxis: 1,
      },
    ],
    exporting: BC.exporting,
  });
});

$(function () {
  $("#chart02").highcharts({
    chart: {
      type: "column",
      spacing: BC.spacing,
      events: {
        load: function (event) {
          onChartLoaded("chart02");
        },
      }, // 2014-01-07 폰트 통일을 위해 추가
    },
    title: BC.emptyText,
    credits: false,
    xAxis: {
      tickWidth: 0,
      categories: ["경부하", "중부하", "최대부하"],
    },
    yAxis: {
      lineWidth: 1,
      min: 0,
      tickInterval: 2000,
      title: BC.txt.kWh,
      labels: BC.yLabelBy1000,
    },
    legend: BC.legend,
    tooltip: {
      shared: false,
      seHTML: true,
      headerFormat: "2013-{point.key}<br />",
      pointFormat:
        "<p>" +
        '<span style="color: {series.color}">{series.name}: </span>' +
        '<span style="text-align: right"> {point.y} </span> ' +
        "</span> ",
      footerFormat: "",
      valueDecimals: 2,
      dateTimeLabelFormats: { hour: "%Y-%m" },
    },
    series: [
      {
        name: "최근1주일평균",
        data: [15500, 15400, 15800],
        marker: BC.marker01,
        tooltip: {
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">최근 1주일 평균 : </span>' +
            '<span style="text-align: right"> {point.y} </span> ' +
            "</span> ",
          valueSuffix: " kWh",
        },
        color: BC.COLOR.ELECT,
        lineColor: BC.COLOR.ELECT,
      },
      {
        name: "11월 4일(월)",
        data: [16000, 16200, 16200],
        marker: BC.marker01,
        tooltip: { valueSuffix: " kWh" },
      },
      {
        name: "11월 5일(화)",
        data: [16000, 16200, 16200],
        marker: BC.marker01,
        tooltip: { valueSuffix: " kWh" },
      },
    ],
    exporting: BC.exporting,
  });
});

$(function () {
  $("#chart03").highcharts({
    chart: {
      type: "area",
      spacing: BC.spacing,
      events: {
        load: function (event) {
          onChartLoaded("chart03");
        },
      }, // 2014-01-07 폰트 통일을 위해 추가
    },
    title: BC.emptyText,
    credits: false,
    xAxis: {
      tickWidth: 0,
      type: "datetime",
      dateTimeLabelFormats: { hour: "%H" },
      tickInterval: BC.interval._1H,
    },
    yAxis: {
      lineWidth: 1,
      title: BC.txt.nm3,
    },
    legend: BC.legend,
    tooltip: {
      shared: false,
      seHTML: true,
      headerFormat: "{point.key}<br />",
      pointFormat:
        "<p>" +
        '<span style="color: {series.color}">{series.name}: </span>' +
        '<span style="text-align: right"> {point.y} </span> ' +
        "</span> ",
      footerFormat: "",
      valueDecimals: 2,
      dateTimeLabelFormats: { hour: "%Y-%m" },
    },
    series: [
      {
        type: "line",
        name: "11월 5일",
        data: [
          15500, 15400, 15800, 15500, 15400, 15800, 15500, 15400, 15800, 15500, 15400, 15800, 15500, 15400, 15800,
          15500, 15400, 15800, 15500, 15400, 15800, 15500, 15400, 15800,
        ],
        marker: BC.marker01,
        tooltip: {
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">가스: </span>' +
            '<span style="text-align: right"> {point.y} </span> ' +
            "</span> ",
          valueSuffix: " N㎥",
        },
        pointInterval: BC.interval._1H,
        color: BC.COLOR.GAS,
        lineColor: BC.COLOR.GAS,
      },
      {
        type: "area",
        name: "최근1주일 평균",
        data: [
          15900, 15200, 16200, 15800, 15100, 15900, 15300, 15100, 16200, 16300, 16400, 16000, 15900, 15200, 16200,
          15800, 15100, 15900, 15300, 15100, 16200, 16300, 16400, 16000,
        ],
        marker: BC.marker01,
        tooltip: {
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">가스: </span>' +
            '<span style="text-align: right"> {point.y} </span> ' +
            "</span> ",
          valueSuffix: " N㎥",
        },
        pointInterval: BC.interval._1H,
        color: BC.COLOR.GAS_2,
        lineColor: BC.COLOR.GAS_2,
      },
    ],
    exporting: BC.exporting,
  });
});
