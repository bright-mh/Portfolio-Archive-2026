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
          0.01005, 0.01436, 0.02063, 0.03057, 0.04618, 0.06444, 0.09822, 0.015468, 0.020434, 0.024126, 0.027387,
          0.029459, 0.01005, 0.01436, 0.02063, 0.03057, 0.04618, 0.06444, 0.09822, 0.015468, 0.020434, 0.024126,
          0.027387, 0.029459, 0.01005, 0.01436, 0.02063, 0.03057, 0.04618, 0.06444, 0.09822, 0.015468, 0.020434,
          0.024126, 0.027387, 0.029459, 0.01005, 0.01436, 0.02063, 0.03057, 0.04618, 0.06444, 0.09822, 0.015468,
          0.020434, 0.024126, 0.027387, 0.029459, 0.01005, 0.01436, 0.02063, 0.03057, 0.04618, 0.06444, 0.09822,
          0.015468, 0.020434, 0.024126, 0.027387, 0.029459, 0.01005, 0.01436, 0.02063, 0.03057, 0.04618, 0.06444,
          0.09822, 0.015468, 0.020434, 0.024126, 0.027387, 0.029459, 0.01005, 0.01436, 0.02063, 0.03057, 0.04618,
          0.06444, 0.09822, 0.015468, 0.020434, 0.024126, 0.027387, 0.029459, 0.01005, 0.01436, 0.02063, 0.03057,
          0.04618, 0.06444, 0.09822, 0.015468, 0.020434, 0.024126, 0.027387, 0.029459, 0.029459,
        ],
        pointStart: Date.UTC(2013, 11, 21),
        pointInterval: BC.interval._15M,
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
        name: "외기온도",
        marker: BC.marker01,
        yAxis: 1,
        data: [
          1.06, 1.605, 2.471, 3.322, 4.238, 5.221, 6.129, 7.089, 8.339, 9.399, 10.538, 11.643, 1.06, 1.605, 2.471,
          3.322, 4.238, 5.221, 6.129, 7.089, 8.339, 9.399, 10.538, 11.643, 1.06, 1.605, 2.471, 3.322, 4.238, 5.221,
          6.129, 7.089, 8.339, 9.399, 10.538, 11.643, 1.06, 1.605, 2.471, 3.322, 4.238, 5.221, 6.129, 7.089, 8.339,
          9.399, 10.538, 11.643, 1.06, 1.605, 2.471, 3.322, 4.238, 5.221, 6.129, 7.089, 8.339, 9.399, 10.538, 11.643,
          1.06, 1.605, 2.471, 3.322, 4.238, 5.221, 6.129, 7.089, 8.339, 9.399, 10.538, 11.643, 1.06, 1.605, 2.471,
          3.322, 4.238, 5.221, 6.129, 7.089, 8.339, 9.399, 10.538, 11.643, 1.06, 1.605, 2.471, 3.322, 4.238, 5.221,
          6.129, 7.089, 8.339, 9.399, 10.538, 11.643,
        ],
        pointStart: Date.UTC(2013, 11, 21),
        pointInterval: BC.interval._15M,
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
    exporting: BC.exporting,
  });
});
