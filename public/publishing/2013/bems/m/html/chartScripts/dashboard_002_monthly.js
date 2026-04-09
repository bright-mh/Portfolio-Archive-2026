/**
			dashboard_002_monthly : 에너지 사용량 (월별)
		*/

jQuery(function () {
  $("#chart03").highcharts({
    credits: { enabled: false },
    exporting: { enabled: false },
    legend: { enabled: false },
    chart: {
      margin: [5, 30, 35, 30],
      spacing: [2, 0, 0, 0],
    },
    title: { text: " " },
    subtitle: { text: " " },
    xAxis: {
      categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
      tickWidth: 0,
      labels: {
        format: "{value}",
        align: "center",
        style: {
          color: "#777777",
          "font-size": "8px",
        },
      },
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
          x: -2,
        },
        title: {
          rotation: -90,
          text: "toe",
          style: {
            color: "#777777",
            "font-size": "8px",
            "font-weight": "bold", // 2014-01-10 y aAxis title bold
          },
          x: 5,
        },
      },
      {
        // Secondary yAxis
        lineWidth: 1,
        title: {
          text: "℃", // 2014-01-10 delete '(', ')'
          rotation: 90,
          style: {
            color: "#777777",
            "font-size": "8px",
            "font-weight": "bold", // 2014-01-10 y aAxis title bold
            "writing-mode": "lr-tb",
          },
          x: -5,
        },
        labels: {
          format: "{value}",
          style: {
            color: "#777777",
            "font-size": "8px",
            align: 0,
          },
        },
        x: -2,
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
          fontSize: "10px",
          color: "#777777",
          fontWeight: "normal",
        },
      },
      style: {
        fontSize: "10px",
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
        data: [29.9, 87.5, 30.4, 112.2, 94.0, 76.0, 93.6, 118.5, 116.4, 94.1, 51.6, 52.4],
        labels: {
          style: {
            color: "#777777",
            "font-size": "10px",
          },
        },
        tooltip: {
          valueSuffix: " toe",
          shared: true,
          useHTML: true,
          headerFormat: "{point.key}월<br />",
          pointFormat:
            "" +
            "<span>{series.name}: </span>" +
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
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        labels: {
          style: {
            color: "#777777",
            "font-size": "10px",
          },
        },
        tooltip: {
          valueSuffix: " toe",
          shared: true,
          useHTML: true,
          headerFormat: "{point.key}월<br />",
          pointFormat:
            "" +
            "<span>{series.name}: </span>" +
            '<span style="text-align: right"> {point.y} </span><br /> ' +
            '<span style="color: #000">전체: </span>' +
            '<span style="text-align: right"> 0.1234567 toe</span> ' +
            "",

          footerFormat: "",
          valueDecimals: 2,
        },
      },
      {
        name: "평균외기온도",
        legendIndex: 2,
        color: "#616161",
        type: "line",
        yAxis: 1,
        data: [2.9, 11.5, 10.4, 19.2, 14.0, 16.0, 15.6, 18.5, 16.4, 14.1, 15.6, 14.4],
        labels: {
          style: {
            color: "#777777",
            "font-size": "10px",
          },
        },
        tooltip: {
          valueSuffix: " ℃",
          shared: true,
          useHTML: true,
          headerFormat: "{point.key} 월<br />",
          pointFormat: "" + "<span>{series.name}: </span>" + '<span style="text-align: right"> {point.y} </span> ' + "",

          footerFormat: "",
          valueDecimals: 2,
        },
        marker: {
          enable: false,
          symbol: "circle",
          fillColor: "#FFFFFF",
          lineColor: "#616161",
          lineWidth: 2,
        },
      },
    ],
  });
});
