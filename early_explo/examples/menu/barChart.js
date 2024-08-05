const barChart = Highcharts.chart('bar-container', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Energy Sources',
        align: 'left'
    },
    xAxis: {
        categories: ['Geothermal', 'Solar', 'Wind', 'Hydro', 'Biomass', 'Nuclear', 'Coal', 'Natural Gas', 'Petroleum']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total Quads'
        },
        stackLabels: {
            enabled: true
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        series: {
            stacking: 'normal',
            pointWidth: 25,
            borderWidth: 2,
            dataLabels: {
                enabled: true,
                formatter: function() {
                    return (this.y !== 0 && this.y !== this.total) ? this.y : "";
                }
            }
        }
    },
    series: [
        {
            name: 'Not Included',
            color: "#ffffff",
            borderColor: "#767676",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0]
        }, 
        {
            name: 'Geothermal',
            color: "#009c00",
            borderColor: "#009c00",
            data: [0.21, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
            name: 'Solar',
            color: "#009c00",
            borderColor: "#009c00",
            data: [0, 0.77, 0, 0, 0, 0, 0, 0, 0]
        }, 
        {
            name: 'Wind',
            color: "#009c00",
            borderColor: "#009c00",
            data: [0, 0, 2.35, 0, 0, 0, 0, 0, 0]
        },
        {
            name: 'Hydro',
            color: "#009c00",
            borderColor: "#009c00",
            data: [0, 0, 0, 2.76, 0, 0, 0, 0, 0]
        },
        {
            name: 'Biomass',
            color: "#009c00",
            borderColor: "#009c00",
            data: [0, 0, 0, 0, 4.92, 0, 0, 0, 0]
        },
        {
            name: 'Nuclear',
            color: "#1a8dff",
            borderColor: "#1a8dff",
            data: [0, 0, 0, 0, 0, 8.42, 0, 0, 0]
        },
        {
            name: 'Coal',
            color: "#989898",
            borderColor: "#989898",
            data: [0, 0, 0, 0, 0, 0, 13.96, 0, 0]
        },
        {
            name: 'Natural Gas',
            color: "#1a8dff",
            borderColor: "#1a8dff",
            data: [0, 0, 0, 0, 0, 0, 0, 28.01, 0]
        },
        {
            name: 'Petroleum',
            color: "#989898",
            borderColor: "#989898",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 36.2]
        },
    ]
});