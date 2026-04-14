/**
			dashboard_002_yearly : 에너지 사용량 (연별)
		*/

jQuery(function () {
  $("#chart04").highcharts({
    credits: { enabled: false },
    exporting: { enabled: false },
    legend: { enabled: false },
    chart: {
      margin: [5, 18, 35, 38], //2014-01-09 y축 짦림 수정
      spacing: [2, 0, 0, 0],
    },
    title: { text: " " },
    subtitle: { text: " " },

    xAxis: {
      categories: ["2011", "2012", "2013"],
      labels: {
        align: "center",
        style: {
          color: "#777777",
          "font-size": "8px",
        },
      },
      tickWidth: 0,
    },
    yAxis: [
      {
        // Primary yAxis
        lineWidth: 1,
        labels: {
          format: "{value}",
          align: "right",
          style: {
            color: "#777777",
            "font-size": "8px",
          },
          formatter: function () {
            return this.value / 1000 + "k";
          },
        },
        title: {
          rotation: -90,
          text: "toe",
          style: {
            color: "#777777",
            "font-size": "8px",
            "font-weight": "bold", //2014-01-09 y축 단위 볼드 처리
          },
          x: 5,
        },
      },
      {
        // Secondary yAxis
        lineWidth: 1,
        title: {
          text: "℃", // 2014-01-09 괄호 삭제
          rotation: 90,
          style: {
            color: "#777777",
            "font-size": "8px",
            "font-weight": "bold", //2014-01-09 y축 단위 볼드 처리
            "writing-mode": "lr-tb",
          },
        },
        labels: {
          format: "{value}",
          style: {
            color: "#777777",
            "font-size": "8px",
            align: 0,
          },
        },
        opposite: true,
      },
    ],
    tooltip: {
      shared: false,
    },
    plotOptions: {
      column: {
        stacking: "normal",
      },
    },
    legend: {
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom",
      floating: false,
      backgroundColor: "#FFFFFF",
      y: 5,
      borderColor: "#FFFFFF",
      itemDistance: 20,
      title: {
        style: {
          fontSize: "8px",
          color: "#777777",
          fontWeight: "normal",
        },
      },
      style: {
        fontSize: "8px",
        color: "#777777",
        fontWeight: "normal",
      },
      itemStyle: { fontSize: "8px" },
    },
    series: [
      {
        name: "가스",
        legendIndex: 1,
        color: "#77b4d3",
        type: "column",
        yAxis: 0,
        data: [0, 300, 200],
        labels: {
          style: {
            color: "#777777",
            "font-size": "8px",
          },
        },
        tooltip: {
          valueSuffix: " toe",
          shared: true,
          useHTML: true,
          headerFormat: "{point.key}월<br />",
          pointFormat:
            "" +
            "<span >{series.name}: </span>" +
            '<span style="text-align: right"> {point.y} </span><br /> ' +
            '<span style="color: #000">전체: </span>' +
            '<span style="text-align: right"> 0.1234567 toe</span> ' +
            "",
          footerFormat: "",
          valueDecimals: 2,
        },
      },
      {
        name: "전기",
        legendIndex: 0,
        color: "#ed8672",
        type: "column",
        yAxis: 0,
        data: [0, 1420, 1080],
        labels: {
          style: {
            color: "#777777",
            "font-size": "8px",
          },
        },
        tooltip: {
          valueSuffix: " toe",
          shared: true,
          useHTML: true,
          headerFormat: "{point.key}월<br />",
          pointFormat:
            "" +
            "<span >{series.name}: </span>" +
            '<span style="text-align: right"> {point.y} </span><br /> ' +
            '<span style="color: #000">전체: </span>' +
            '<span style="text-align: right"> 0.1234567 toe</span> ' +
            "",

          footerFormat: "",
          valueDecimals: 2,
        },
      },
    ],
  });
});
