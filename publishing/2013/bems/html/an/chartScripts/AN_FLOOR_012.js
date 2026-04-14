$(function () {
  $("#chart01").highcharts({
    chart: {
      type: "spline",
      spacing: BC.spacing,
      events: {
        load: function (event) {
          onChartLoaded("chart01");
        },
      }, // 2014-01-07 폰트 통일을 위해 추가
    },
    title: BC.emptyText,
    credits: false,
    //		xAxis: BC.xAxis._2H,		//2014-01-06 하기와 같이 변경
    /*2014-01-06  x축 시간 표기 및 설정*/
    xAxis: [
      {
        type: "datetime",
        dateTimeLabelFormats: {
          day: "%H:%M",
          hour: "%H:%M",
        },
        tickWidth: 0,
        labels: {
          style: {
            "font-size": "11px",
          },
        },
      },
    ],
    /* //End 2014-01-06  x축 시간 표기 및 설정*/
    yAxis: {
      lineWidth: 1,
      min: 0,
      tickInterval: 500,
      title: BC.txt.kWh,
      labels: BC.yLabelBy1000,
    },
    legend: BC.legend,
    tooltip: BC.tooltip_ns.realtime,
    series: [
      {
        type: "column",
        name: "현재",
        data: [
          450,
          460,
          450,
          460, // 0
          470,
          500,
          510,
          480, // 1
          1880,
          420,
          450,
          510,
        ],
        pointInterval: BC.interval._1H,
        pointStart: Date.UTC(2013, 11, 22),
        marker: BC.marker01,
        tooltip: {
          valueSuffix: " kW",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">전기피크: </span>' +
            '<span style="text-align: right"> {point.y} </span> ' +
            "</span> ",
        },
        color: BC.COLOR.ELECT,
        lineColor: BC.COLOR.ELECT,
      },
      {
        type: "line",
        name: "2013년 피크",
        data: [1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900],
        pointInterval: BC.interval._1H,
        pointStart: Date.UTC(2013, 11, 22),
        marker: BC.marker01,
        tooltip: {
          headerFormat: "",
          valueSuffix: " kW",
        },
        color: BC.COLOR.PEAK_THISYEAR,
        lineColor: BC.COLOR.PEAK_THISYEAR,
      },
      {
        type: "line",
        name: "2013년 목표피크",
        data: [2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100],
        pointInterval: BC.interval._1H,
        pointStart: Date.UTC(2013, 11, 22),
        marker: BC.marker01,
        tooltip: {
          headerFormat: "",
          valueSuffix: " kW",
        },
      },
      {
        type: "line",
        name: "2012년 목표피크",
        data: [2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400],
        pointInterval: BC.interval._1H,
        pointStart: Date.UTC(2013, 11, 22),
        marker: BC.marker01,
        tooltip: {
          headerFormat: "",
          valueSuffix: " kW",
        },
        color: BC.COLOR.PEAK_1YEAR,
        lineColor: BC.COLOR.PEAK_1YEAR,
      },
    ],
    exporting: BC.exporting,
  });
});
