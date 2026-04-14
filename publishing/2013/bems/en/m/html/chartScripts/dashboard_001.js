/**
 *	dashboard_001.js
 *	대시보드 하단 게이지
 */

$(function () {
  $("#chart01").highcharts(
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
        spacing: [20, 10, 0, 4],
      },
      credits: {
        enabled: false,
      },
      exporting: {
        enabled: false,
      },
      legend: {
        enabled: false,
        itemStyle: { fontSize: "10px" },
      },
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
        max: 2400,
        tickWidth: 0,
        lineWidth: 0,
        minorTickInterval: "auto",
        minorTickWidth: 0,
        minorTickLength: 0,
        minorTickPosition: "inside",
        minorTickColor: "#666",
        tickPixelInterval: 60,
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
            to: 1499,
            color: "#b4cd78",
            innerRadius: "90%",
            outerRadius: "130%",
          },
          {
            from: 1500,
            to: 1999,
            color: "#f5be55",
            innerRadius: "90%",
            outerRadius: "130%",
          },
          {
            from: 2000,
            to: 2400,
            color: "#c82d2d",
            innerRadius: "90%",
            outerRadius: "130%",
          },
        ],
      },

      series: [
        {
          key: "key",
          name: "19:15",
          data: [
            {
              y: 400,
              dataLabels: false,
            },
          ],
          tooltip: {
            shared: true,
            useHTML: true,
            headerFormat: '<div class="chart_tooltip">',
            pointFormat: "{series.name} <br />{point.y}",
            footerFormat: "</div>",
            valueDecimals: 0,
            valueSuffix: " kW",
          },
        },
      ],
    },
    // Add some life
    function (chart) {
      if (!chart.renderer.forExport) {
        setInterval(function () {
          var data = chart.series[0];
          var point = chart.series[0].points[0];
          var newName = "19:30";
          var newPoint = 850;
          data.name = newName;
          point.update(newPoint);
        }, 3000);
      }
    },
  );
});
