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
    xAxis: BC.xAxis._1D,
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
          476, 116, 0, 505, 449, 486, 484, 513, 78, 0, 701, 1466, 946, 1043, 795, 93, 25, 1279, 1267, 1237, 1163, 1015,
          73, 0, 1367, 1310, 1277, 1595, 1516, 125,
        ],
        pointStart: Date.UTC(2013, 11, 1),
        pointInterval: BC.interval._1D,
        tooltip: {
          valueSuffix: " N㎥",
          dateTimeLabelFormats: BC.dateFormat.full,
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">증기보일러 가스사용량: </span>' +
            '<span style="text-align: right"> {point.y} </span> ' +
            "</span> </p>",
        },
      },
      {
        type: "spline",
        name: "가스취사",
        marker: BC.marker01,
        data: [
          701, 1466, 946, 1043, 795, 93, 25, 1279, 1267, 1237, 1163, 1015, 73, 0, 1367, 1310, 1277, 1595, 1516, 125,
          476, 116, 0, 505, 449, 486, 484, 513, 476, 116,
        ],
        pointStart: Date.UTC(2013, 11, 1),
        pointInterval: BC.interval._1D,
        tooltip: {
          valueSuffix: " N㎥",
          dateTimeLabelFormats: BC.dateFormat.full,
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">가스취사: </span>' +
            '<span style="text-align: right"> {point.y} </span> ' +
            "</span> </p>",
        },
      },
      {
        type: "spline",
        name: "LPG",
        marker: BC.marker01,
        data: [
          1163, 1015, 73, 0, 1367, 1310, 1277, 1595, 1516, 125, 73, 0, 1367, 1310, 1277, 1595, 1516, 1163, 1015, 73, 0,
          1367, 1310, 1277, 1595, 1516, 125, 0, 1367, 1310,
        ],
        pointStart: Date.UTC(2013, 11, 1),
        pointInterval: BC.interval._1D,
        tooltip: {
          valueSuffix: " N㎥",
          dateTimeLabelFormats: BC.dateFormat.full,
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">LPG: </span>' +
            '<span style="text-align: right"> {point.y} </span> ' +
            "</span> </p>",
        },
      },
      {
        type: "spline",
        name: "공조취사",
        marker: BC.marker01,
        data: [
          476, 116, 0, 505, 449, 486, 484, 513, 476, 116, 0, 505, 449, 486, 484, 513, 476, 476, 116, 0, 505, 449, 486,
          484, 513, 476, 116, 505, 449, 486,
        ],
        pointStart: Date.UTC(2013, 11, 1),
        pointInterval: BC.interval._1D,
        tooltip: {
          valueSuffix: " N㎥",
          dateTimeLabelFormats: BC.dateFormat.full,
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">spline: </span>' +
            '<span style="text-align: right"> {point.y} </span> ' +
            "</span> </p>",
        },
      },
      {
        type: "spline",
        name: "비교대상 증기보일러 가스사용량",
        marker: BC.marker01,
        data: [
          443, 433, 126, 409, 88, 139, 503, 484, 99, 501, 473, 101, 0, 490, 534, 458, 450, 509, 105, 179, 518, 531, 473,
          454, 483, 98, 0, 574, 468, 469,
        ],
        pointStart: Date.UTC(2013, 11, 1),
        pointInterval: BC.interval._1D,
        tooltip: {
          valueSuffix: " N㎥",
          dateTimeLabelFormats: BC.dateFormat.full,
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">비교대상 증기보일러 가스사용량: </span>' +
            '<span style="text-align: right"> {point.y} </span> ' +
            "</span> </p>",
        },
      },
      {
        type: "spline",
        name: "비교대상 가스취사",
        marker: BC.marker01,
        data: [
          449, 486, 484, 518, 531, 473, 454, 483, 98, 0, 88, 505, 449, 486, 484, 513, 25, 1279, 1267, 1237, 1163, 1015,
          73, 0, 1277, 1595, 1277, 1595, 1516, 125,
        ],
        pointStart: Date.UTC(2013, 11, 1),
        pointInterval: BC.interval._1D,
        tooltip: {
          valueSuffix: " N㎥",
          dateTimeLabelFormats: BC.dateFormat.full,
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">비교대상 가스취사: </span>' +
            '<span style="text-align: right"> {point.y} </span> ' +
            "</span> </p>",
        },
      },
      {
        type: "spline",
        name: "비교대상 LPG",
        marker: BC.marker01,
        data: [
          473, 101, 0, 490, 534, 458, 450, 509, 105, 179, 88, 1277, 1595, 1516, 125, 0, 1277, 1595, 1516, 125, 476, 116,
          0, 505, 484, 513, 484, 513, 476, 116,
        ],
        pointStart: Date.UTC(2013, 11, 1),
        pointInterval: BC.interval._1D,
        tooltip: {
          valueSuffix: " N㎥",
          dateTimeLabelFormats: BC.dateFormat.full,
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">비교대상 LPG: </span>' +
            '<span style="text-align: right"> {point.y} </span> ' +
            "</span> </p>",
        },
      },
      {
        type: "spline",
        name: "비교대상 공조취사",
        marker: BC.marker01,
        data: [
          503, 484, 99, 501, 473, 503, 484, 99, 501, 473, 101, 0, 490, 476, 116, 505, 0, 0, 0, 0, 1277, 1595, 1516, 125,
          518, 531, 473, 454, 483, 98,
        ],
        pointStart: Date.UTC(2013, 11, 1),
        pointInterval: BC.interval._1D,
        tooltip: {
          valueSuffix: " N㎥",
          dateTimeLabelFormats: BC.dateFormat.full,
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">비교대상 공조취사: </span>' +
            '<span style="text-align: right"> {point.y} </span> ' +
            "</span> </p>",
        },
      },
    ],
    legend: BC.legend,
    tooltip: BC.tooltip_ns.daily,
    exporting: BC.exporting,
  });
});
