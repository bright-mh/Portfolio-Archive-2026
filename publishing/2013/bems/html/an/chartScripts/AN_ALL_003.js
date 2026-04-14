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
          0.02005, 0.02436, 0.02063, 0.01057, 0.03618, 0.03444, 0.03822, 0.045468, 0.010434, 0.054126, 0.077387,
          0.039459, 0.04005, 0.01436, 0.02063, 0.03057, 0.03618, 0.06444, 0.09822, 0.015468, 0.020434, 0.024126,
          0.027387, 0.039459, 0.04005, 0.03436, 0.04063, 0.01057, 0.01618, 0.01444, 0.05822, 0.075468, 0.070434,
          0.074126, 0.017387, 0.039459, 0.04005, 0.03436, 0.04063, 0.02057, 0.02618, 0.04444, 0.04822, 0.045468,
          0.090434, 0.054126, 0.027387, 0.049459, 0.02005, 0.03436, 0.04063, 0.03057, 0.07618, 0.01444, 0.01822,
          0.055468, 0.060434, 0.054126, 0.097387, 0.039459, 0.04005, 0.04436, 0.04063, 0.04057, 0.07618, 0.03444,
          0.03822, 0.035468, 0.040434, 0.044126, 0.077387, 0.039459, 0.04005, 0.03436, 0.04063, 0.05057, 0.07618,
          0.05444, 0.05822, 0.025468, 0.050434, 0.084126, 0.057387, 0.039459, 0.04005, 0.03436, 0.04063, 0.06057,
          0.06618, 0.07444, 0.03822, 0.055468, 0.070434, 0.084126, 0.017387, 0.029459, 0.039459,
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
        legendIndex: 1,
      },
      {
        type: "spline",
        lineColor: BC.COLOR.TEMP_OUT,
        lineWidth: 2,
        name: "외기온도",
        color: BC.COLOR.TEMP_OUT,
        marker: BC.marker01,
        yAxis: 1,
        data: [
          3.06, 3.605, 3.471, 3.322, 3.238, 3.221, 3.129, 3.089, 8.339, 3.399, 3.538, 3.643, 4.06, 4.605, 4.471, 3.322,
          3.238, 4.221, 4.129, 4.089, 4.339, 4.399, 4.538, 4.643, 5.06, 5.605, 5.471, 5.322, 5.238, 5.221, 5.129, 5.089,
          5.339, 5.399, 5.538, 5.643, 6.06, 6.605, 6.471, 6.322, 6.238, 6.221, 6.129, 6.089, 6.339, 6.399, 6.538, 6.643,
          5.06, 5.605, 5.471, 5.322, 5.238, 5.221, 5.129, 5.089, 8.339, 5.399, 5.538, 5.643, 4.06, 4.605, 4.471, 4.322,
          4.238, 4.221, 4.129, 4.089, 4.339, 4.399, 4.538, 4.643, 9.06, 9.605, 9.471, 9.322, 9.238, 9.221, 9.129, 9.089,
          8.339, 9.399, 9.538, 9.643, 8.06, 8.605, 8.471, 8.322, 8.238, 8.221, 8.129, 8.089, 8.339, 8.399, 8.538, 8.643,
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
        index: 3,
        legendIndex: 2,
      },
      {
        type: "area",
        name: "비교대상 사용량",
        marker: BC.marker01,
        color: BC.COLOR.TOTAL_2,
        data: [
          0.05005, 0.01436, 0.02063, 0.03057, 0.04618, 0.06444, 0.09822, 0.015468, 0.020434, 0.024126, 0.027387,
          0.039459, 0.03005, 0.09436, 0.02063, 0.03057, 0.04618, 0.06444, 0.09822, 0.015468, 0.020434, 0.024126,
          0.037387, 0.039459, 0.06005, 0.02436, 0.05063, 0.04057, 0.04618, 0.06444, 0.03822, 0.045468, 0.040434,
          0.044126, 0.067387, 0.039459, 0.04005, 0.03436, 0.05063, 0.06057, 0.04618, 0.06444, 0.05822, 0.055468,
          0.030434, 0.064126, 0.057387, 0.069459, 0.05005, 0.04436, 0.05063, 0.04057, 0.04618, 0.06444, 0.07822,
          0.065468, 0.040434, 0.064126, 0.037387, 0.079459, 0.07005, 0.06436, 0.05063, 0.03057, 0.04618, 0.06444,
          0.05822, 0.055468, 0.050434, 0.064126, 0.057387, 0.059459, 0.06005, 0.06436, 0.05063, 0.03057, 0.04618,
          0.06444, 0.04822, 0.055468, 0.050434, 0.064126, 0.077387, 0.039459, 0.03005, 0.03436, 0.04063, 0.03057,
          0.04618, 0.06444, 0.03822, 0.055468, 0.050434, 0.064126, 0.077387, 0.029459, 0.029459,
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
        legendIndex: 3,
      },
      {
        type: "spline",
        lineWidth: 2,
        name: "비교대상 외기온도",
        marker: BC.marker01,
        yAxis: 1,
        data: [
          3.06, 3.605, 3.471, 3.322, 3.238, 3.221, 3.129, 3.089, 8.339, 3.399, 3.538, 3.643, 3.06, 4.605, 4.471, 4.322,
          4.238, 4.221, 4.129, 4.089, 4.339, 4.399, 4.538, 4.643, 5.06, 5.605, 5.471, 5.322, 5.238, 5.221, 5.129, 5.089,
          5.339, 5.399, 5.538, 5.643, 5.06, 5.605, 6.471, 6.322, 6.238, 6.221, 6.129, 7.089, 8.339, 7.399, 7.538, 7.643,
          8.06, 8.605, 8.471, 8.322, 8.238, 8.221, 9.129, 9.089, 9.339, 9.399, 10.538, 11.643, 11.06, 11.605, 11.471,
          11.322, 10.238, 10.221, 10.129, 10.089, 10.339, 10.399, 10.538, 10.643, 10.06, 10.605, 9.471, 9.322, 9.238,
          9.221, 9.129, 9.089, 9.339, 9.399, 9.538, 9.643, 8.06, 8.605, 8.471, 8.322, 8.238, 7.221, 7.129, 7.089, 8.339,
          9.399, 10.538, 11.643,
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
        legendIndex: 4,
      },
    ],
    legend: BC.legend,
    exporting: BC.exporting,
  });
});
