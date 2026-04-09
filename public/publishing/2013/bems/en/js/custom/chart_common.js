var BC = {
  emptyText: { text: "" },
  txt: {
    nm3: {
      text: "N㎥",
      style: {
        color: "#777777",
        "font-size": "12px",
        "font-weight": "bold",
        "font-family": '"돋움",Dotum, Helvetica, AppleGothic, Sans-serif;',
      },
    },
    percent: { text: "%" },
    kgoe: { text: "kgoe/㎡" },
    kWh: { text: "kWh" },
    kW: { text: "kW" },
    toe: {
      text: "toe",
      style: {
        color: "#777777",
        "font-size": "12px",
        "font-weight": "bold",
        "font-family": '"돋움",Dotum, Helvetica, AppleGothic, Sans-serif;',
      },
    },
    c0: {
      text: "ºC",
      style: {
        color: "#777777",
        "font-size": "12px",
        "font-weight": "bold",
        "font-family": '"돋움",Dotum, Helvetica, AppleGothic, Sans-serif;',
      },
    },
    C: { text: "℃" },
  },
  yLabel: {
    formatter: function () {
      return this.value;
    },
  }, // y축 레이블을 그대로 표시 할 때
  yLabelBy1000: {
    formatter: function () {
      return this.value / 1000;
    },
  }, // y축 레이블을 1000 으로 나눈 값으로 표시할 때 (eg: 데이터가 1000g 일때 1kg 으로 표시를 원할 때 사용)
  dateFormat: {
    hour: { hour: "%H" },
    hourMin: { hour: "%H:%M" },
    day: { day: "%e" },
    full: { hour: "%Y-%m-%e (%H:%M)" },
    daily: { day: "%Y-%m-%e" },
    monthly: { month: "%m" },
    yearly: { year: "%Y" },
  },
  tooltip_s: {
    shared: true,
    seHTML: true,
    headerFormat: "{point.key}<br />",
    pointFormat:
      '<span style="color: {series.color}">{series.name}: </span>' +
      '<span style="text-align: right"> {point.y} </span>  <br/>',
    footerFormat: "",
    valueDecimals: 2,
  },
  tooltip_ns: {
    shared: false,
    seHTML: true,
    headerFormat: "{point.key}<br />",
    pointFormat:
      '<span style="color: {series.color}">{series.name}: </span>' +
      '<span style="text-align: right"> {point.y} </span>  <br/>',
    footerFormat: "",
    valueDecimals: 2,
    dateTimeLabelFormats: { hour: "%Y-%m-%e (%H:%M)" },

    realtime: {
      shared: false,
      seHTML: true,
      headerFormat: "{point.key}<br />",
      pointFormat:
        '<span style="color: {series.color}">{series.name}: </span>' +
        '<span style="text-align: right"> {point.y} </span> ',

      footerFormat: "",
      valueDecimals: 2,
      dateTimeLabelFormats: { hour: "%Y-%m-%e (%H:%M)" },

      elect: {
        shared: false,
        seHTML: true,
        valueDecimals: 2,
        dateTimeLabelFormats: { hour: "%Y-%m-%e (%H:%M)" },
        headerFormat: "{point.key}<br />",
        pointFormat:
          '<span style="color: {series.color}">전기 : </span>' +
          '<span style="text-align: right"> {point.y} </span>  <br/>',
        footerFormat: "",
        valueSuffix: " kWh",
      },
    },
    daily: {
      shared: false,
      seHTML: true,
      headerFormat: "{point.key}<br />",
      pointFormat:
        '<span style="color: {series.color}">{series.name}: </span>' +
        '<span style="text-align: right"> {point.y} </span> ',

      footerFormat: "",
      valueDecimals: 2,
      dateTimeLabelFormats: { day: "%Y-%m-%e" },
    },
    monthly: {
      shared: false,
      seHTML: true,
      headerFormat: "{point.key}<br />",
      pointFormat:
        '<span style="color: {series.color}">{series.name}: </span>' +
        '<span style="text-align: right"> {point.y} </span> ',

      footerFormat: "",
      valueDecimals: 2,
      dateTimeLabelFormats: { hour: "%Y-%m" },
    },
    yearly: {
      shared: false,
      seHTML: true,
      headerFormat: "{point.key}<br />",
      pointFormat:
        '<span style="color: {series.color}">{series.name}: </span>' +
        '<span style="text-align: right"> {point.y} </span> ',

      footerFormat: "",
      valueDecimals: 2,
      dateTimeLabelFormats: { year: "%Y" },
    },
  },

  spacing: [40, 0, 0, 0],

  marker01: {
    enabled: false,
    symbol: "circle",
    radius: 4,
    lineWidth: 0,
  },

  marker02: {
    enabled: false,
    symbol: "circle",
    radius: 2,
    lineWidth: 2,
  },

  /* 2013-11-28 maker enabled: true 형태의 마커를 사용하기 위해 추가 */
  marker03: {
    enabled: true,
    symbol: "circle",
    radius: 4,
    lineWidth: 0,
  },

  xAxis: {
    // x축 표시 설정
    _15M: {
      // 15분 간격
      tickWidth: 0,
      type: "datetime",
      dateTimeLabelFormats: { hour: "%H:%M" },
      tickInterval: 15 * 60 * 1000,
    },
    _30M: {
      // 30분 간격
      tickWidth: 0,
      type: "datetime",
      dateTimeLabelFormats: { hour: "%H:%M" },
      tickInterval: 30 * 60 * 1000,
    },
    _1H: {
      // 1시간 간격 ( 시간만표시 )
      tickWidth: 0,
      type: "datetime",
      dateTimeLabelFormats: { hour: "%H" },
      tickInterval: 3600 * 1000,
    },
    _1HM: {
      // 1시간 간격 (시간,분 표시)
      tickWidth: 0,
      type: "datetime",
      dateTimeLabelFormats: { hour: "%H:%M" },
      tickInterval: 3600 * 1000,
    },
    _2H: {
      // 2시간 간격 (시간만 표시)
      tickWidth: 0,
      type: "datetime",
      dateTimeLabelFormats: { hour: "%H" },
      tickInterval: 3600 * 1000,
    },
    _2HM: {
      // 1시간 간격 (시간, 분 표시)
      tickWidth: 0,
      type: "datetime",
      dateTimeLabelFormats: { hour: "%H:%M" },
      tickInterval: 2 * 3600 * 1000,
    },
    _1D: {
      // 1일 간격
      tickWidth: 0,
      type: "datetime",
      dateTimeLabelFormats: { day: "%e" },
      tickInterval: 24 * 3600 * 1000,
    },
    _2D: {
      // 2일 간격
      tickWidth: 0,
      type: "datetime",
      dateTimeLabelFormats: { day: "%e" },
      tickInterval: 2 * 24 * 3600 * 1000,
    },
    _1M: {
      // 1개월 간격  -- 2013-11-28  추가한 내용
      tickWidth: 0,
      categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    },
  },

  interval: {
    _15M: 15 * 60 * 1000, // 15분 간격
    _30M: 30 * 60 * 1000, // 30분 간격
    _1H: 60 * 60 * 1000, // 1시간 간격
    _2H: 120 * 60 * 1000, // 2시간 간격
    _1D: 24 * 3600 * 1000, // 1일 간격
  },

  legend: {
    layout: "horizontal",
    align: "center",
    verticalAlign: "bottom",
    floating: false,
    backgroundColor: "#FFFFFF",
    borderColor: "#FFFFFF",
    borderWidth: 0,
    style: {
      fontSize: "10px",
      color: "#777777",
      fontWeight: "normal",
    },
    title: {
      style: {
        fontSize: "10px",
        color: "#777777",
        fontWeight: "normal",
      },
    },
  },

  // 색상 값 설정
  COLOR: {
    TOTAL: "#9a78dc", // TOTAL
    TOTAL_2: "#c4b2e7", // TOTAL 비교대상
    ELECT: "#ed8672", // 전기
    ELECT_2: "#f7beb2", // 전기 비교대상
    GAS: "#77b4d3", // 가스
    GAS_2: "#b4dcf0", // 가스 비교대상
    TEMP_IN: "#9a017b", // 기온 실내
    TEMP_OUT: "#ed4aee", // 기온 실외
    MOIS_IN: "#008e75", // 습도 실내
    MOIS_OUT: "#00e0c8", // 습도 실외
    PEAK_GOOD: "#b4cd78", // 피크 양호
    PEAK_CAUTION: "#f5be55", // 피크 주의
    PEAK_WARN: "#c82d2d", // 피크 경고
  },

  exporting: {
    buttons: {
      contextButton: { align: "right", y: -40, x: -22 },
    },
  },
};
