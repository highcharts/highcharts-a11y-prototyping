const lineChart = Highcharts.chart('line-container', {
    title: {
        text: 'Monthly Energy Consumption',
        align: 'left'
    },
    // subtitle: {
    //     text: 'By Job Category. Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>.',
    //     align: 'left'
    // },

    // yAxis: {
    //     title: {
    //         text: ''
    //     }
    // },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: Jan to Dec'
        },
        categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    },
    legend: {
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom'
    },
    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            }
        }
    },
    series: lineData,
});