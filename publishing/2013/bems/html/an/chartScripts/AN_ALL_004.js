jQuery(function () {
  jQuery("#chart01").highcharts({
    chart: {
      spacing: BC.spacing,
      events: {
        load: function (event) {
          onChartLoaded("chart01");
        },
      }, // 2014-01-06 폰트 통일을 위해 추가
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
        title: BC.txt.toe,
        tickInterval: 0.01,
      },
      {
        lineWidth: 1,
        title: BC.txt.c0,
        tickInterval: 1,
        opposite: true,
      },
    ],
    series: [
      {
        type: "area",
        name: "사용량",
        color: BC.COLOR.TOTAL,
        marker: BC.marker01,
        data: [
          0.05005, 0.01436, 0.02063, 0.03057, 0.04618, 0.06444, 0.09822, 0.015468, 0.020434, 0.024126, 0.027387,
          0.039459, 0.03005, 0.09436, 0.02063, 0.03057, 0.04618, 0.06444, 0.09822, 0.015468, 0.020434, 0.024126,
          0.037387, 0.020434, 0.024126,
        ],
        pointStart: Date.UTC(2013, 11, 21),
        pointInterval: BC.interval._1H,
        tooltip: {
          valueSuffix: " toe", // 2014-01-14 TOE -> toe
          dateTimeLabelFormats: BC.dateFormat.full,
          shared: false,
          seHTML: true,
          headerFormat: "{point.key}<br />",
          pointFormat:
            '<span style="color:#ed8672;">전기</span> : 10 toe<br/>' + // 2014-01-14 TOE -> toe
            '<span style="color:#77b4d3;">가스</span> : 0.5599 toe<br/>' + // 2014-01-14 TOE -> toe
            '<span style="color: {series.color}">전체 사용량: </span>' +
            '<span style="text-align: right"> {point.y} </span> ',
          footerFormat: "",
          valueDecimals: 2,
          dateTimeLabelFormats: { hour: "%Y-%m-%e (%H:%M)" },
        },
      },
      {
        type: "spline",
        lineColor: BC.COLOR.TEMP_OUT,
        lineWidth: 2,
        color: BC.COLOR.TEMP_OUT,
        name: "평균 외기온도",
        marker: BC.marker01,
        yAxis: 1,
        data: [
          3.06, 3.605, 3.471, 3.322, 3.238, 3.221, 3.129, 3.089, 8.339, 3.399, 3.538, 3.643, 3.06, 4.605, 4.471, 4.322,
          4.238, 4.221, 4.129, 4.089, 4.339, 4.399, 4.538, 4.643, 5.06,
        ],
        pointStart: Date.UTC(2013, 11, 21),
        pointInterval: BC.interval._1H,
        tooltip: {
          valueSuffix: " ℃",
          dateTimeLabelFormats: BC.dateFormat.full,
          shared: false,
          seHTML: true,
          headerFormat: "{point.key}<br />",
          pointFormat:
            '<span style="color: {series.color}">{series.name}: </span>' +
            '<span style="text-align: right"> {point.y} </span> ',
          footerFormat: "",
          valueDecimals: 2,
          dateTimeLabelFormats: { hour: "%Y-%m-%e (%H:%M)" },
        },
      },
    ],
    legend: BC.legend,
    tooltip: BC.tooltip_ns,
    exporting: BC.exporting,
  });
});
