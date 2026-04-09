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
        title: BC.txt.kWh,
        tickInterval: 0.01,
      },
    ],
    series: [
      {
        type: "spline",
        name: "일반통신 1-1-1",
        lineWidth: 2,
        marker: BC.marker01,
        data: [
          0.05005, 0.01436, 0.02063, 0.03057, 0.04618, 0.06444, 0.09822, 0.015468, 0.020434, 0.024126, 0.027387,
          0.039459, 0.03005, 0.09436, 0.02063, 0.03057, 0.04618, 0.06444, 0.09822, 0.015468, 0.020434, 0.024126,
          0.037387, 0.039459, 0.06005,
        ],
        pointStart: Date.UTC(2013, 11, 21),
        pointInterval: BC.interval._1H,
        tooltip: {
          valueSuffix: " kWh",
          dateTimeLabelFormats: BC.dateFormat.full,
        },
      },
      {
        type: "spline",
        name: "일반통신 1-1-10",
        lineWidth: 2,
        marker: BC.marker01,
        data: [
          0.041005, 0.041436, 0.02063, 0.03057, 0.04618, 0.06444, 0.09822, 0.015468, 0.020434, 0.024126, 0.027387,
          0.029459, 0.01005, 0.01436, 0.02063, 0.03057, 0.04618, 0.046444, 0.049822, 0.015468, 0.0420434, 0.024126,
          0.027387, 0.029459,
        ],
        pointStart: Date.UTC(2013, 11, 21),
        pointInterval: BC.interval._1H,
        tooltip: {
          valueSuffix: " kWh",
          dateTimeLabelFormats: BC.dateFormat.full,
        },
      },
      {
        type: "spline",
        name: "일반통신 1-1-11",
        lineWidth: 2,
        marker: BC.marker01,
        data: [
          0.013005, 0.013436, 0.012063, 0.03057, 0.04618, 0.06444, 0.09822, 0.015468, 0.020434, 0.024126, 0.0127387,
          0.029459, 0.01005, 0.01436, 0.02063, 0.03057, 0.04618, 0.06444, 0.019822, 0.015468, 0.020434, 0.0214126,
          0.027387, 0.0129459,
        ],
        pointStart: Date.UTC(2013, 11, 21),
        pointInterval: BC.interval._1H,
        tooltip: {
          valueSuffix: " kWh",
          dateTimeLabelFormats: BC.dateFormat.full,
        },
      },
      {
        type: "spline",
        name: "비교대상 일반통신 1-1-1",
        lineWidth: 2,
        marker: BC.marker01,
        data: [
          0.05005, 0.051436, 0.02063, 0.03057, 0.04618, 0.06444, 0.09822, 0.015468, 0.020434, 0.024126, 0.027387,
          0.039459, 0.03005, 0.09436, 0.02063, 0.03057, 0.04618, 0.06444, 0.09822, 0.015468, 0.020434, 0.024126,
          0.037387, 0.039459, 0.06005,
        ],
        pointStart: Date.UTC(2013, 11, 21),
        pointInterval: BC.interval._1H,
        tooltip: {
          valueSuffix: " kWh",
          dateTimeLabelFormats: BC.dateFormat.full,
        },
      },
      {
        type: "spline",
        name: "비교대상 일반통신 1-1-10",
        lineWidth: 2,
        marker: BC.marker01,
        data: [
          0.01005, 0.01436, 0.02063, 0.03057, 0.04618, 0.06444, 0.09822, 0.015468, 0.020434, 0.024126, 0.027387,
          0.029459, 0.01005, 0.01436, 0.02063, 0.03057, 0.04618, 0.06444, 0.09822, 0.015468, 0.020434, 0.024126,
          0.027387, 0.029459, 0.01005,
        ],
        pointStart: Date.UTC(2013, 11, 21),
        pointInterval: BC.interval._1H,
        tooltip: {
          valueSuffix: " kWh",
          dateTimeLabelFormats: BC.dateFormat.full,
        },
      },
      {
        type: "spline",
        name: "일반통신 1-1-11",
        lineWidth: 2,
        marker: BC.marker01,
        data: [
          0.03005, 0.03436, 0.02063, 0.03057, 0.04618, 0.06444, 0.09822, 0.015468, 0.020434, 0.024126, 0.027387,
          0.029459, 0.01005, 0.01436, 0.02063, 0.03057, 0.04618, 0.06444, 0.09822, 0.015468, 0.020434, 0.024126,
          0.027387, 0.029459, 0.01005,
        ],
        pointStart: Date.UTC(2013, 11, 21),
        pointInterval: BC.interval._1H,
        tooltip: {
          valueSuffix: " kWh",
          dateTimeLabelFormats: BC.dateFormat.full,
        },
      },
    ],
    legend: BC.legend,
    tooltip: BC.tooltip_ns,
    exporting: BC.exporting,
  });
});
