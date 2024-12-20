barChart = Highcharts.chart('bar-container', {
    chart: {
        type: 'bar',
        height: 350
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
        // stackLabels: {
        //     enabled: true
        // }
    },
    legend: {
        enabled: false
    },
    // tooltip: {
    //     headerFormat: '<b>{point.x}</b><br/>',
    //     pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    // },
    plotOptions: {
        series: {
            // stacking: 'normal',
            pointWidth: 20,
            borderWidth: 2,
            borderColor: "#767676",
            dataLabels: {
                enabled: true,
                // formatter: function() {
                //     return (this.y !== 0 && this.y !== this.total) ? this.y : "";
                // }
            }
        }
    },
    series: [{
        name: "Quads",
        data: [
            {y:0.21, color:'#009c00', borderColor:'#009c00'},
            {y:0.77, color:'#009c00', borderColor:'#009c00'}, 
            {y:2.35, color:'#009c00', borderColor:'#009c00'}, 
            {y:2.76, color:'#009c00', borderColor:'#009c00'}, 
            {y:4.92, color:'#009c00', borderColor:'#009c00'}, 
            {y:8.42, color:'#1a8dff', borderColor:'#1a8dff'}, 
            {y:13.96, color:'#989898', borderColor:'#989898'}, 
            {y:28.01, color:'#1a8dff', borderColor:'#1a8dff'}, 
            {y:36.2, color:'#989898', borderColor:'#989898'}]
    }]/* [
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
            data: [0.21, null, null, null, null, null, null, null, null]
        },
        {
            name: 'Solar',
            color: "#009c00",
            borderColor: "#009c00",
            data: [null, 0.77, null, null, null, null, null, null, null]
        }, 
        {
            name: 'Wind',
            color: "#009c00",
            borderColor: "#009c00",
            data: [null, null, 2.35, null, null, null, null, null, null]
        },
        {
            name: 'Hydro',
            color: "#009c00",
            borderColor: "#009c00",
            data: [null, null, null, 2.76, null, null, null, null, null]
        },
        {
            name: 'Biomass',
            color: "#009c00",
            borderColor: "#009c00",
            data: [null, null, null, null, 4.92, null, null, null, null]
        },
        {
            name: 'Nuclear',
            color: "#1a8dff",
            borderColor: "#1a8dff",
            data: [null, null, null, null, null, 8.42, null, null, null]
        },
        {
            name: 'Coal',
            color: "#989898",
            borderColor: "#989898",
            data: [null, null, null, null, null, null, 13.96, null, null]
        },
        {
            name: 'Natural Gas',
            color: "#1a8dff",
            borderColor: "#1a8dff",
            data: [null, null, null, null, null, null, null, 28.01, null]
        },
        {
            name: 'Petroleum',
            color: "#989898",
            borderColor: "#989898",
            data: [null, null, null, null, null, null, null, null, 36.2]
        },
    ]*/
});