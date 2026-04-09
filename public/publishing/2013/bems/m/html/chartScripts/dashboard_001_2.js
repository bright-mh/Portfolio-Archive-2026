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
        startAngle: -90,
        endAngle: 90,
        background: [],
        borderColor: "#FFFFFF",
      },
      // the value axis
      yAxis: {
        min: 0,
        max: 180,
        tickWidth: 0,
        lineWidth: 0,
        minorTickInterval: "auto",
        minorTickWidth: 0,
        minorTickLength: 0,
        minorTickPosition: "inside",
        minorTickColor: "#666",
        tickPixelInterval: 60,
        labels: {
          enabled: false,
        },
        title: {
          text: "",
        },
        plotBands: [
          {
            from: 0,
            to: 35,
            color: "#5fa34e",
            innerRadius: "90%",
            outerRadius: "130%",
          },
          {
            from: 36,
            to: 71,
            color: "#b4ce73",
            innerRadius: "90%",
            outerRadius: "130%",
          },
          {
            from: 72,
            to: 107,
            color: "#f6bf4a",
            innerRadius: "90%",
            outerRadius: "130%",
          },
          {
            from: 108,
            to: 143,
            color: "#e87b43",
            innerRadius: "90%",
            outerRadius: "130%",
          },
          {
            from: 144,
            to: 180,
            color: "#ca2b27",
            innerRadius: "90%",
            outerRadius: "130%",
          },
        ],
      },

      series: [
        {
          key: "key",
          name: "12:45",
          data: [
            {
              y: 80,
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
          var newName = "13:00";
          var newPoint = 160;
          data.name = newName;
          point.update(newPoint);
        }, 3000);
      }
    },
  );
});
