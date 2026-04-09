jQuery(function () {
  jQuery("#chart01").highcharts({
    chart: {
      spacing: BC.spacing,
      events: {
        load: function (event) {
          onChartLoaded("chart01");
        },
      }, // 2014-01-07 폰트 통일을 위해 추가
    },
    title: BC.emptyText,
    subtitle: BC.emptyText,
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
    yAxis: [
      {
        lineWidth: 1,
        title: BC.txt.nm3,
        min: 0,
      },
    ],
    series: [
      {
        type: "spline",
        name: "증기보일러 가스사용량",
        marker: BC.marker01,
        data: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 65, 71, 62,
          59, 12, 19, 14, 17, 12, 13, 7, 12, 14, 10, 14, 15, 13, 2, 14, 12, 14, 0, 13, 19, 4, 9, 14, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        pointStart: Date.UTC(2013, 11, 21),
        pointInterval: BC.interval._15M,
        tooltip: {
          valueSuffix: " N㎥",
          dateTimeLabelFormats: BC.dateFormat.full,
          pointFormat:
            '<span style="color: {series.color}">증기보일러 가스 사용량: </span>' +
            '<span style="text-align: right"> {point.y} </span> ',
        },
      },
      {
        type: "spline",
        name: "가스취사",
        marker: BC.marker01,
        data: [
          0, 0, 0, 0, 0, 4, 65, 71, 62, 59, 12, 19, 14, 17, 12, 13, 7, 12, 14, 10, 14, 15, 13, 2, 14, 12, 14, 0, 13, 19,
          4, 9, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 65, 71, 62, 59, 12, 19, 14, 17, 12, 13, 7, 12, 14, 10,
          14, 15, 13, 2, 14, 12, 14, 0, 13, 19, 4, 9, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        pointStart: Date.UTC(2013, 11, 21),
        pointInterval: BC.interval._15M,
        tooltip: {
          valueSuffix: " N㎥",
          dateTimeLabelFormats: BC.dateFormat.full,
          pointFormat:
            '<span style="color: {series.color}">가스취사: </span>' +
            '<span style="text-align: right"> {point.y} </span> ',
        },
      },
      {
        type: "spline",
        name: "LPG",
        marker: BC.marker01,
        data: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 65, 71, 62, 59, 12, 19, 14, 17, 12, 13, 7, 12, 14, 10, 14, 15, 13,
          2, 14, 12, 14, 0, 13, 19, 4, 9, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        pointStart: Date.UTC(2013, 11, 21),
        pointInterval: BC.interval._15M,
        tooltip: {
          valueSuffix: " N㎥",
          dateTimeLabelFormats: BC.dateFormat.full,
          pointFormat:
            '<span style="color: {series.color}">LPG: </span>' + '<span style="text-align: right"> {point.y} </span> ',
        },
      },
      {
        type: "spline",
        name: "공조취사",
        marker: BC.marker01,
        data: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
          65, 71, 62, 59, 12, 19, 14, 17, 12, 13, 7, 12, 14, 10, 14, 15, 13, 2, 14, 12, 14, 0, 13, 19, 4, 9, 14, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 65, 71, 62, 59, 12, 19, 14, 17, 12, 13, 7, 12, 14, 10, 14, 15, 13, 2, 14,
        ],
        pointStart: Date.UTC(2013, 11, 21),
        pointInterval: BC.interval._15M,
        tooltip: {
          valueSuffix: " N㎥",
          dateTimeLabelFormats: BC.dateFormat.full,
          pointFormat:
            '<span style="color: {series.color}">공조취사: </span>' +
            '<span style="text-align: right"> {point.y} </span> ',
        },
      },
    ],
    legend: BC.legend,
    tooltip: BC.tooltip_ns,
    exporting: BC.exporting,
  });
});
