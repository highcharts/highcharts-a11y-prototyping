const descriptions = {
    "description-sankey": {
        "minimal":  `Sankey charts are used to visualize data flow and volume between nodes.`,
        "default": `Sankey charts are used to visualize data flow and volume between nodes. Visually wider lines indicate larger volumes.`,
        "verbose": `Sankey charts are used to visualize data flow and volume between nodes. Visually wider lines indicate larger volumes. This chart is showing energy consumption and types. Interacting with this chart by selecting a node or flow (such as with a click) will update the stacked bar chart below.`
    },
    "description-bar": {
        "minimal": `Chart showing stacked bars for comparing quantities.`,
        "default": `Chart showing stacked bars for comparing quantities. Stacked charts are often used to visualize data that accumulates to a sum.`,
        "verbose": `Chart showing stacked bars for comparing quantities. Stacked charts are often used to visualize data that accumulates to a sum. This chart is showing data from the energy sources, and will stack to demonstrate the proportion of an energy source that is currently selected by the previous Sankey Diagram.`
    },
    "description-line": {
        "minimal": `Line chart for comparing change in data across categories. Sonification will play all values selected in legend.`,
        "default": `Line chart for comparing change in data across categories. Line charts are often used to visualize change in data over time, showing important trends. Sonification will play all values selected in legend.`,
        "verbose": `Line chart for comparing change in data across categories. Line charts are often used to visualize change in data over time, showing important trends. This chart is showing energy consumption over time, by type of consumption. Interacting with the legend can help focus or toggle on and off specific categories. Sonification will play all values selected in legend.`
    },
}
const multipliers = {
    "flat": [
        {
            month: "Jan",
            quads: 0.083
        },
        {
            month: "Feb",
            quads: 0.083
        },
        {
            month: "Mar",
            quads: 0.083
        },
        {
            month: "Apr",
            quads: 0.083
        },
        {
            month: "May",
            quads: 0.083
        },
        {
            month: "Jun",
            quads: 0.083
        },
        {
            month: "Jul",
            quads: 0.083
        },
        {
            month: "Aug",
            quads: 0.083
        },
        {
            month: "Sep",
            quads: 0.083
        },
        {
            month: "Oct",
            quads: 0.083
        },
        {
            month: "Nov",
            quads: 0.083
        },
        {
            month: "Dec",
            quads: 0.083
        }
    ],
    "winter": [
        {
            month: "Jan",
            quads: 0.12
        },
        {
            month: "Feb",
            quads: 0.11
        },
        {
            month: "Mar",
            quads: 0.1
        },
        {
            month: "Apr",
            quads: 0.09
        },
        {
            month: "May",
            quads: 0.08
        },
        {
            month: "Jun",
            quads: 0.07
        },
        {
            month: "Jul",
            quads: 0.07
        },
        {
            month: "Aug",
            quads: 0.08
        },
        {
            month: "Sep",
            quads: 0.09
        },
        {
            month: "Oct",
            quads: 0.10
        },
        {
            month: "Nov",
            quads: 0.11
        },
        {
            month: "Dec",
            quads: 0.12
        }
    ],
    "rainy": [
        {
            month: "Jan",
            quads: 0.08
        },
        {
            month: "Feb",
            quads: 0.09
        },
        {
            month: "Mar",
            quads: 0.11
        },
        {
            month: "Apr",
            quads: 0.12
        },
        {
            month: "May",
            quads: 0.09
        },
        {
            month: "Jun",
            quads: 0.04
        },
        {
            month: "Jul",
            quads: 0.04
        },
        {
            month: "Aug",
            quads: 0.06
        },
        {
            month: "Sep",
            quads: 0.1
        },
        {
            month: "Oct",
            quads: 0.1
        },
        {
            month: "Nov",
            quads: 0.09
        },
        {
            month: "Dec",
            quads: 0.08
        }
    ]
}
const datasets = {
    "Solar": {
        "total":0.77,
        "type":"summer",
        "values": [
            {
                "month":"Jan",
                "quads":0.035
            },
            {
                "month":"Feb",
                "quads":0.037
            },
            {
                "month":"Mar",
                "quads":0.045
            },
            {
                "month":"Apr",
                "quads":0.059
            },
            {
                "month":"May",
                "quads":0.072
            },
            {
                "month":"Jun",
                "quads":0.092
            },
            {
                "month":"Jul",
                "quads":0.097
            },
            {
                "month":"Aug",
                "quads":0.093
            },
            {
                "month":"Sep",
                "quads":0.084
            },
            {
                "month":"Oct",
                "quads":0.062
            },
            {
                "month":"Nov",
                "quads":0.054
            },
            {
                "month":"Dec",
                "quads":0.04}
        ]
    },
    "Nuclear": {
        "total":8.42,
        "type":"flat",
        "values": [
            {
                "month":"Jan",
                "quads":0.698
            },
            {
                "month":"Feb",
                "quads":0.706
            },
            {
                "month":"Mar",
                "quads":0.694
            },
            {
                "month":"Apr",
                "quads":0.698
            },
            {
                "month":"May",
                "quads":0.705
            },
            {
                "month":"Jun",
                "quads":0.717
            },
            {
                "month":"Jul",
                "quads":0.706
            },
            {
                "month":"Aug",
                "quads":0.698
            },
            {
                "month":"Sep",
                "quads":0.707
            },
            {
                "month":"Oct",
                "quads":0.695
            },
            {
                "month":"Nov",
                "quads":0.699
            },
            {
                "month":"Dec",
                "quads":0.697
            }
        ]
    },
    "Hydro": {
        "total":2.76,
        "type":"rainy",
        "values": [
            {
                "month":"Jan",
                "quads":0.22
            },
            {
                "month":"Feb",
                "quads":0.242
            },
            {
                "month":"Mar",
                "quads":0.3
            },
            {
                "month":"Apr",
                "quads":0.331
            },
            {
                "month":"May",
                "quads":0.245
            },
            {
                "month":"Jun",
                "quads":0.11
            },
            {
                "month":"Jul",
                "quads":0.109
            },
            {
                "month":"Aug",
                "quads":0.164
            },
            {
                "month":"Sep",
                "quads":0.280
            },
            {
                "month":"Oct",
                "quads":0.284
            },
            {
                "month":"Nov",
                "quads":0.248
            },
            {
                "month":"Dec",
                "quads":0.227
            }
        ]
    },
    "Wind": {
        "total":2.35,
        "type":"flat",
        "values": [
            {
                "month":"Jan",
                "quads":0.195
            },
            {
                "month":"Feb",
                "quads":0.186
            },
            {
                "month":"Mar",
                "quads":0.204
            },
            {
                "month":"Apr",
                "quads":0.185
            },
            {
                "month":"May",
                "quads":0.203
            },
            {
                "month":"Jun",
                "quads":0.197
            },
            {
                "month":"Jul",
                "quads":0.211
            },
            {
                "month":"Aug",
                "quads":0.204
            },
            {
                "month":"Sep",
                "quads":0.175
            },
            {
                "month":"Oct",
                "quads":0.188
            },
            {
                "month":"Nov",
                "quads":0.201
            },
            {
                "month":"Dec",
                "quads":0.201
            }
        ]
    },
    "Geothermal": {
        "total":0.21,
        "type":"winter",
        "values": [
            {
                "month":"Jan",
                "quads":0.025
            },
            {
                "month":"Feb",
                "quads":0.026
            },
            {
                "month":"Mar",
                "quads":0.02
            },
            {
                "month":"Apr",
                "quads":0.013
            },
            {
                "month":"May",
                "quads":0.011
            },
            {
                "month":"Jun",
                "quads":0.014
            },
            {
                "month":"Jul",
                "quads":0.013
            },
            {
                "month":"Aug",
                "quads":0.011
            },
            {
                "month":"Sep",
                "quads":0.013
            },
            {
                "month":"Oct",
                "quads":0.016
            },
            {
                "month":"Nov",
                "quads":0.023
            },
            {
                "month":"Dec",
                "quads":0.025
            }
        ]
    },
    "Natural Gas": {
        "total":28.01,
        "type":"winter",
        "values": [
            {
                "month":"Jan",
                "quads":3.361
            },
            {
                "month":"Feb",
                "quads":3.090
            },
            {
                "month":"Mar",
                "quads":2.301
            },
            {
                "month":"Apr",
                "quads":2.022
            },
            {
                "month":"May",
                "quads":1.724
            },
            {
                "month":"Jun",
                "quads":1.630
            },
            {
                "month":"Jul",
                "quads":1.510
            },
            {
                "month":"Aug",
                "quads":1.642
            },
            {
                "month":"Sep",
                "quads":2.1
            },
            {
                "month":"Oct",
                "quads":2.284
            },
            {
                "month":"Nov",
                "quads":2.985
            },
            {
                "month":"Dec",
                "quads":3.361
            }
        ]
    },
    "Coal": {
        "total":13.96,
        "type":"winter",
        "values": [
            {
                "month":"Jan",
                "quads":1.6
            },
            {
                "month":"Feb",
                "quads":1.477
            },
            {
                "month":"Mar",
                "quads":1.396
            },
            {
                "month":"Apr",
                "quads":1.156
            },
            {
                "month":"May",
                "quads":1.016
            },
            {
                "month":"Jun",
                "quads":0.677
            },
            {
                "month":"Jul",
                "quads":0.577
            },
            {
                "month":"Aug",
                "quads":0.816
            },
            {
                "month":"Sep",
                "quads":1.056
            },
            {
                "month":"Oct",
                "quads":1.198
            },
            {
                "month":"Nov",
                "quads":1.441
            },
            {
                "month":"Dec",
                "quads":1.55
            }
        ]
    },
    "Biomass": {
        "total":4.92,
        "type":"flat",
        "values": [
            {
                "month":"Jan",
                "quads":0.41
            },
            {
                "month":"Feb",
                "quads":0.414
            },
            {
                "month":"Mar",
                "quads":0.408
            },
            {
                "month":"Apr",
                "quads":0.415
            },
            {
                "month":"May",
                "quads":0.406
            },
            {
                "month":"Jun",
                "quads":0.412
            },
            {
                "month":"Jul",
                "quads":0.406
            },
            {
                "month":"Aug",
                "quads":0.416
            },
            {
                "month":"Sep",
                "quads":0.407
            },
            {
                "month":"Oct",
                "quads":0.404
            },
            {
                "month":"Nov",
                "quads":0.408
            },
            {
                "month":"Dec",
                "quads":0.414
            }
        ]
    },
    "Petroleum": {
        "total":36.2,
        "type":"flat",
        "values": [
            {
                "month":"Jan",
                "quads":3.002
            },
            {
                "month":"Feb",
                "quads":3.026
            },
            {
                "month":"Mar",
                "quads":3.014
            },
            {
                "month":"Apr",
                "quads":3.03
            },
            {
                "month":"May",
                "quads":3.022
            },
            {
                "month":"Jun",
                "quads":3.024
            },
            {
                "month":"Jul",
                "quads":3.009
            },
            {
                "month":"Aug",
                "quads":3.017
            },
            {
                "month":"Sep",
                "quads":3.006
            },
            {
                "month":"Oct",
                "quads":3.022
            },
            {
                "month":"Nov",
                "quads":3.034
            },
            {
                "month":"Dec",
                "quads":2.994
            }
        ]
    }
}
let strokeWidth = 1;
let lineData = []
const addJitter = (n) => {
    return n + +((Math.random() - 0.5)/50).toString().substring(0,5)
}
const buildDataset = (total, type) => {
    let out = [];
    let runningTotal = 0
    multipliers[type].forEach(d => {
        let val = addJitter(d.quads * total)
        val = val < 0 ? 0.001 : val
        runningTotal += val
        out.push({
            month: d.month,
            quads: val
        })
    })
    out.realTotal = runningTotal
    return out
}
const buildAllDatasets = () => {
    Object.keys(datasets).forEach(ds => {
        let set = datasets[ds]
        if (multipliers[set.type]) {
            set.values = buildDataset(set.total, set.type)
        }
    })
}
const countDatasets = () => {
    Object.keys(datasets).forEach(ds => {
        let set = datasets[ds]
        let total = 0
        set.values.forEach(v => {
            total += v.quads*1000
        })
    })
}
const buildLineData = () => {
    Object.keys(datasets).forEach(ds => {
        let set = datasets[ds]
        let d = []
        set.values.forEach(v => {
            d.push(v.quads)
        })
        lineData.push({
            name: ds,
            data: d,
            strokeWidth: strokeWidth,
            color: colorMap[ds]
        })
    })
}
buildLineData()