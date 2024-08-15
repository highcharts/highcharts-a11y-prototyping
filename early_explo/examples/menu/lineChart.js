lineChart = Highcharts.chart('line-container', {
    chart: {
        height: 350
    },
    title: {
        text: 'Monthly Energy Consumption',
        align: 'left'
    },
    // subtitle: {
    //     text: 'By Job Category. Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>.',
    //     align: 'left'
    // },

    yAxis: {
        title: {
            text: ''
        }
    },

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
    sonification: {
        duration: 8000,
        defaultInstrumentOptions: {
            mapping: {
                pitch: {
                    min: 'c3',
                    max: 'd6'
                }
            }
        }
    },
    series: lineData,
});
document.getElementById('sonify').onclick = function () {
    lineChart.toggleSonify();
};