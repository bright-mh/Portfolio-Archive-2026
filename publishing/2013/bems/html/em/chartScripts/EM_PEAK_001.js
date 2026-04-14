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
      categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    },
    yAxis: [
      {
        lineWidth: 1,
        title: BC.txt.kWh,
      },
      {
        lineWidth: 1,
        title: BC.txt.kW,
        min: 0,
        max: 15,
        opposite: 1,
      },
    ],
    legend: BC.legend,
    series: [
      {
        type: "column",
        name: "2013년 사용량(kWh)",
        data: [120, 122, 110, 130, 113, 100, 90, 85, 71, 70, 75, 76],
        marker: BC.marker01,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 2,
          headerFormat: "2013년 {point.key}월 전기사용량<br />",
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
        type: "column",
        // 2013-12-23 단위 수정 (kwh->kWh)
        name: "2012년 사용량(kWh)",
        data: [120, 122, 110, 130, 113, 100, 90, 85, 71, 70, 75, 76],
        marker: BC.marker01,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 2,
          headerFormat: "2012년 {point.key}월 전기사용량<br />",
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
        name: "2013년 전기 목표 Peak",
        data: [13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13],
        marker: BC.marker01,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 2,
          headerFormat: "2013년 전기 목표피크<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">전기 : </span>' +
            '<span style="text-align: right"> {point.y} </span>  <br/>' +
            "</p> ",
          footerFormat: "",
          valueSuffix: " kW", // 2013-12-23 단위 수정 (kw -> kW)
        },
        yAxis: 1,
      },
      // 2013-12-26 2012년 전기 목표 Peak 데이터 추가
      {
        type: "line",
        name: "2012년 전기 목표 Peak",
        data: [14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14],
        marker: BC.marker01,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 2,
          headerFormat: "2012년 전기 목표피크<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">전기 : </span>' +
            '<span style="text-align: right"> {point.y} </span>  <br/>' +
            "</p> ",
          footerFormat: "",
          valueSuffix: " kW", // 2013-12-23 단위 수정 (kw -> kW)
        },
        yAxis: 1,
      },
    ],
    exporting: BC.exporting,
  });
});

$(function () {
  $("#chart02").highcharts(
    {
      chart: {
        type: "gauge",
        plotBackgroundColor: "#FFFFFF",
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotBorderColor: "#FFFFFF",
        plotShadow: false,
        backgroundColor: "#FFFFFF",
        backgroundImage: null,
        alignTicks: false,
        borderColor: "#FFFFFF",
        spacing: [20, 10, 0, 10],
      },
      credits: { enabled: false },
      exporting: { enabled: false },
      legend: { enabled: false },
      title: {
        text: "",
      },
      pane: {
        startAngle: -150,
        endAngle: 150,
        background: [],
        borderColor: "#FFFFFF",
      },

      // the value axis
      yAxis: {
        min: 0,
        max: 200,
        // 2013-12-23 ie8 에서 line 없애기 위해 tickWidth, lineWidth 추가, minorTickWidth 수정
        tickWidth: 0,
        lineWidth: 0,
        minorTickInterval: "auto",
        minorTickWidth: 0,
        minorTickLength: 40,
        minorTickPosition: "inside",
        minorTickColor: "#666",
        tickPixelInterval: 30, // 중간 구분선
        labels: {
          rotation: "auto",
          style: {
            "font-size": "10px",
            color: "#999999",
          },
        },
        title: {
          text: "",
        },
        plotBands: [
          {
            from: 0,
            to: 119,
            color: "#b4cd78", // 첫번째 영역
            innerRadius: "90%",
            outerRadius: "130%",
          },
          {
            from: 120,
            to: 159,
            color: "#f5be55", // 두번째 영역
            innerRadius: "90%",
            outerRadius: "130%",
          },
          {
            from: 160,
            to: 200,
            color: "#c82d2d", // 세번째 영역
            innerRadius: "90%",
            outerRadius: "130%",
          },
        ],
      },

      series: [
        {
          key: "key",
          name: "12:45", // 여기에 툴팁에 초기에 표시되는 타이틀이 들어갑니다.
          data: [{ y: 80, dataLabels: false }],
          tooltip: {
            shared: true,
            useHTML: true,
            headerFormat: '<div class="chart_tooltip">',
            pointFormat: "{series.name} <br />{point.y}",
            footerFormat: "</div>",
            valueDecimals: 0, // 소수점 몇자리까지 표시 할 것인지
            valueSuffix: " kWh",
          },
        },
      ],
    },
    // Add some life
    function (chart) {
      if (!chart.renderer.forExport) {
        setInterval(function () {
          // 주기적으로 아래 함수를 실행시켜 주면서 데이터를 반영합니다. ajax로 데이터를 불러올 것 이라면 이 부분에 코딩을 하시면 됩니다.
          var data = chart.series[0];
          var point = chart.series[0].points[0];
          var newName = "13:00";
          var newPoint = 160;
          data.name = newName;
          point.update(newPoint);
        }, 3000); // 1000 : 1초
      }
    },
  );
});
// 2014-01-07 ie8  에서 선 없애는 것은 다른 방법으로 해결. 기존 방법 때문에 다른 그래프 y 축에 선이 안나오게 되어 삭제.
