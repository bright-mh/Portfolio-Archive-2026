/**
	ID : FA_MULTIFA_001
*/
$(function () {
  $("#chart01").highcharts({
    chart: {
      type: "spline",
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
      tickWidth: 0,
      categories: ["2013", "2012", "2011"],
    },
    yAxis: [
      {
        lineWidth: 1,
        title: {
          text: "1st",
        },
      },
      {
        lineWidth: 1,
        title: {
          text: "2nd",
        },
        opposite: 1,
      },
      {
        lineWidth: 1,
        title: {
          text: "3rd",
        },
        opposite: 1,
      },
      {
        lineWidth: 1,
        title: {
          text: "4th",
        },
        opposite: 1,
      },
    ],
    legend: BC.legend,
    series: [
      {
        name: "1st",
        data: [140, 240, 360],
        marker: BC.marker03,
        yAxis: 0,
      },
      {
        name: "2nd",
        data: [150, 250, 350],
        marker: BC.marker03,
        yAxis: 1,
      },
      {
        name: "3rd",
        data: [260, 370, 410],
        marker: BC.marker03,
        yAxis: 2,
      },
      {
        name: "4th",
        data: [310, 410, 150],
        marker: BC.marker03,
        yAxis: 3,
      },
    ],
    exporting: BC.exporting,
  });
});
