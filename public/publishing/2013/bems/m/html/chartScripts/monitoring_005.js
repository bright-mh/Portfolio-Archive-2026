jQuery(function () {
  jQuery("#chart05").highcharts({
    credits: { enabled: false },
    chart: {
      type: "bar",
      spacing: [5, 10, 10, 0],
    },
    title: {
      text: "",
    },
    subtitle: {
      text: "",
    },
    xAxis: [
      {
        tickWidth: 0,
        categories: [
          "20",
          "19",
          "18",
          "17",
          "16",
          "15",
          "14",
          "13",
          "12",
          "11",
          "10",
          "9",
          "8",
          "7",
          "6",
          "5",
          "4",
          "3",
          "2",
          "1",
          "B1",
          "B2",
          "B3",
          "B4",
          "B5",
          "B6",
        ], //2014-01-09 y축 단위 추가
        labels: {
          style: {
            color: "#898a8c",
            "font-size": "10px",
          },
        },
      },
    ],
    yAxis: [
      {
        lineWidth: 1,
        title: {
          text: "",
        },
        min: 0,
        minorGridLineWidth: 0,
        gridLineWidth: 1,
        alternateGridColor: null,
        // tickInterval: 50,
        tickColor: "#cccccc",
      },
    ],
    plotOptions: {
      column: {
        pointPadding: -0.1,
        borderWidth: 2,
      },
    },
    tooltip: {
      valueSuffix: " kWh",
      shared: false,
      useHTML: true,
      headerFormat: "{point.key}<br />",
      pointFormat:
        "<p>" +
        '<span style="color: {series.color}">{series.name}: </span>' +
        '<span style="text-align: right"> {point.y} </span> ' +
        "</p> ",
      footerFormat: "",
      valueDecimals: 2,
    },
    series: [
      {
        name: "어제",
        color: "#f7beb2",
        borderColor: "#f7beb2",
        data: [
          150, 140, 350, 140, 360, 200, 130, 150, 160, 350, 220, 130, 300, 240, 190, 350, 400, 250, 147, 110, 210, 240,
          220, 200, 180, 160,
        ],
      },
      {
        name: "오늘",
        color: "#ed8672",
        borderColor: "#ed8672",
        data: [
          350, 400, 250, 147, 110, 210, 240, 220, 200, 180, 160, 150, 140, 350, 140, 360, 200, 130, 150, 160, 350, 220,
          130, 300, 240, 190,
        ],
        tooltip: {
          valueSuffix: " kWh",
          shared: false,
          useHTML: true,
          headerFormat: "{point.key}<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">{series.name}: </span>' +
            '<span style="text-align: right"> {point.y} </span><br /> ' +
            '<span ">어제대비 </span>' +
            '<span style="text-align: right" class="colorUp"> ▲2.58% </span> ' + // class name : colorUp/colorDown
            "</p> ",
          footerFormat: "",
          valueDecimals: 2,
        },
      },
    ],
    legend: {
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom",
      floating: false,
      backgroundColor: "#FFFFFF",
      borderColor: "#FFFFFF",
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
      itemStyle: { fontSize: "10px" },
    },
    navigation: {
      menuItemStyle: {
        fontSize: "11px",
      },
    },
    exporting: {
      buttons: {
        contextButton: {
          align: "right",
          y: -40,
          x: -22,
        },
      },
    },
  });
});

//]]>
