/**
	ID : AN_FLOOR_001
	에너지분석 > 트랜드분석 > 층별 전기사용량 > 실시간별 1
*/
$(function () {
  $("#chart01").highcharts({
    chart: {
      type: "area",
      spacing: BC.spacing,
      events: {
        load: function (event) {
          onChartLoaded("chart01");
        },
      }, // 2014-01-07 폰트 통일을 위해 추가
    },
    title: BC.emptyText,
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
    yAxis: {
      lineWidth: 1,
      min: 0,
      tickInterval: 500,
      title: BC.txt.kWh,
      labels: BC.yLabelBy1000,
    },
    legend: BC.legend,
    series: [
      {
        color: BC.COLOR.ELECT,
        name: "사용량",
        data: [
          1300, 1325, 1320, 1200, 1230, 1200, 1000, 950, 810, 800, 850, 860, 500, 570, 560, 520, 570, 770, 780, 750,
          780, 820, 880, 800, 904, 850, 980, 850, 910, 960, 950, 1400, 1500, 1550, 1570, 1900, 1920, 1980, 1920, 1950,
          1980, 1940, 1990, 1970, 1400, 1420, 1420, 1440, 1910, 2010, 2020, 2050, 2090, 2050, 2040, 2400, 2440, 2320,
          2390, 2520, 2800, 2750, 2800, 2400, 2580, 2750, 2600, 2450, 1500, 1540, 1510, 1240, 1100, 1150, 1310, 1300,
          1280, 1300, 1140, 1250, 1250, 1260, 1240, 1100, 1250, 1340, 1240, 1150, 1150, 1230, 1200, 1000, 1100, 990,
          950, 970,
        ],
        pointInterval: BC.interval._15M,
        marker: BC.marker01,
        tooltip: {
          shared: false,
          seHTML: true,
          valueDecimals: 2,
          dateTimeLabelFormats: { hour: "%Y-%m-%e (%H:%M)" },
          headerFormat: "{point.key}<br />",
          pointFormat:
            "<p>" +
            '<span style="color: {series.color}">전기 : </span>' +
            '<span style="text-align: right"> {point.y} </span>  <br/>' +
            "</p> ",
          footerFormat: "",
          valueSuffix: " kWh",
        },
      },
    ],
    exporting: BC.exporting,
  });
});
