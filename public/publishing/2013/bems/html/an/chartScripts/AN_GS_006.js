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
    //		xAxis: BC.xAxis._1H,		//2014-01-06 하기와 같이 변경
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
        data: [0, 0, 0, 0, 0, 0, 97, 0, 0, 126, 39, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        pointStart: Date.UTC(2013, 11, 21),
        pointInterval: BC.interval._1H,
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
        data: [97, 0, 0, 126, 39, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 97, 0, 0, 126, 39, 49, 0, 0, 0],
        pointStart: Date.UTC(2013, 11, 21),
        pointInterval: BC.interval._1H,
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
        data: [0, 0, 0, 0, 0, 0, 97, 0, 0, 126, 39, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        pointStart: Date.UTC(2013, 11, 21),
        pointInterval: BC.interval._1H,
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
        data: [0, 0, 97, 0, 0, 126, 39, 49, 0, 0, 97, 0, 0, 126, 39, 49, 0, 0, 126, 39, 49, 0, 0, 0],
        pointStart: Date.UTC(2013, 11, 21),
        pointInterval: BC.interval._1H,
        tooltip: {
          valueSuffix: " N㎥",
          dateTimeLabelFormats: BC.dateFormat.full,
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">공조취사: </span>' +
            '<span style="text-align: right"> {point.y} </span> ' +
            "</span> </p>",
        },
      },
      {
        type: "spline",
        name: "비교대상 증기보일러 가스사용량",
        marker: BC.marker01,
        data: [0, 0, 0, 0, 0, 97, 143, 218, 225, 190, 146, 136, 129, 145, 113, 112, 112, 129, 123, 30, 0, 0, 0, 0],
        pointStart: Date.UTC(2013, 11, 21),
        pointInterval: BC.interval._1H,
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
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 143, 218, 225, 190, 146, 136, 129, 145, 113, 112, 112, 129],
        pointStart: Date.UTC(2013, 11, 21),
        pointInterval: BC.interval._1H,
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
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 97, 143, 218, 225, 190, 146, 136, 129, 145, 113],
        pointStart: Date.UTC(2013, 11, 21),
        pointInterval: BC.interval._1H,
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
        data: [0, 0, 97, 143, 218, 225, 190, 146, 136, 129, 145, 113, 112, 112, 129, 123, 30, 0, 0, 0, 0, 0, 0, 0],
        pointStart: Date.UTC(2013, 11, 21),
        pointInterval: BC.interval._1H,
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
    tooltip: BC.tooltip_ns,
    exporting: BC.exporting,
  });
});
