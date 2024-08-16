let chart;
let barChart;
let lineChart;
let shadowChart;
const menuFunctions = {
    Comprehension: {
        change: option => {},
        "Alt text visual appearance": {
            change: (option)=> {
                [
                    {
                        container: "container",
                        sr: "highcharts-screen-reader-region-before-2"
                    },
                    {
                        container: "line-container",
                        sr: "highcharts-screen-reader-region-before-1"
                    },
                    {
                        container: "bar-container",
                        sr: "highcharts-screen-reader-region-before-0"
                    },
                ].forEach( d=> {
                    if (option.indexOf("show") > -1) {
                        document.getElementById(d.container).setAttribute("style","pointer-events: fill;")
                        const srMajorRegion = document.getElementById(d.sr).children[0]
                        srMajorRegion.setAttribute("style","font-size: 1.2em;")
                        srMajorRegion.querySelector("button").setAttribute("style","font-size: 1em;")
                        if (option.indexOf("all") > -1) {
                            document.getElementById(d.container).querySelectorAll('path[aria-label]').forEach(e => {
                                let label = document.createElement("div")
                                let rect = e.getBoundingClientRect()
                                label.innerText = e.getAttribute("aria-label")
                                label.setAttribute("style",`left:${rect.left}px; top:${rect.top}px; width:${rect.width}px; height:${rect.height}px;`)
                                label.setAttribute("class","highcharts-visible-alt")
                                document.getElementById(d.container).appendChild(label)
                            })
                        } else {
                            document.getElementById(d.container).querySelectorAll('.highcharts-visible-alt').forEach(e => e.remove())
                        }
                    } else {
                        document.getElementById(d.container).setAttribute("style","overflow: hidden; pointer-events: fill;")
                        const srMajorRegion = document.getElementById(d.sr).children[0]
                        srMajorRegion.setAttribute("style","position: absolute; width: 1px; height: 1px; overflow: hidden; white-space: nowrap; clip: rect(1px, 1px, 1px, 1px); margin-top: -3px; opacity: 0.01;")
                        document.getElementById(d.container).querySelectorAll('.highcharts-visible-alt').forEach(e => e.remove())
                    }
                })
            }
        },
        "Description verbosity": {
            change: option => {},
            "Chart": {
                change: option => {
                    //highcharts-description-default
                    // description-line
                    let chartlist = ["sankey","bar","line"]
                    chartlist.forEach(c => {
                        let chartId = `description-${c}`
                        let chart = document.getElementById(chartId)
                        let desc = descriptions[chartId][option]
                        if (!desc) {
                            chart.classList.add("highcharts-menu-hidden")
                        } else {
                            chart.classList.remove("highcharts-menu-hidden")
                            chart.innerText = desc
                        }
                    })
                }
            },
            "Region alt text": {
                change: option => {}
            }
        }
    },
    "Text visuals": {
        change: option => {},
        "Font Size": {
            change: option => {},
            Title: {
                change: option => {
                    [chart, lineChart, barChart].forEach(d => {
                        d.update({
                            title: {
                                style: {
                                    fontSize: option === 'default' ? shadowChart.title.fontSize || '1em' : menuStateValueMap.fontSize[option]
                                }
                            }
                        })
                    })
                },
            },
            Subtitle: {
                change: option => {
                    [chart, lineChart, barChart].forEach(d => {
                        d.update({
                            subtitle: {
                                style: {
                                    fontSize: option === 'default' ? shadowChart.subtitle.fontSize || '1em' : menuStateValueMap.fontSize[option]
                                }
                            }
                        })
                    })
                },
            },
            Tooltip: {
                change: option => {
                    [chart, lineChart, barChart].forEach(d => {
                        d.update({
                            tooltip: {
                                style: {
                                    fontSize: option === 'default' ? shadowChart.tooltip.fontSize || '1em' : menuStateValueMap.fontSize[option]
                                }
                            }
                        })
                    })
                },
            },
            "Series Labels": {
                change: option => {
                    chart.update({
                        plotOptions: {
                            series: {
                                dataLabels: {
                                    style: {
                                        fontSize: option === 'default' ? shadowChart.series.fontSize || '1em' : menuStateValueMap.fontSize[option]
                                    }
                                }
                            }
                        }
                    })
                    barChart.update({
                        plotOptions: {
                            series: {
                                dataLabels: {
                                    style: {
                                        fontSize: option === 'default' ? shadowChart.series.fontSize || '1em' : menuStateValueMap.fontSize[option]
                                    }
                                }
                            }
                            
                        },
                        yAxis: {
                            stackLabels: {
                                style: {
                                    fontSize: option === 'default' ? shadowChart.series.fontSize || '1em' : menuStateValueMap.fontSize[option]
                                }
                            }
                        }
                    })
                },
            },
            "Axis Labels": {
                change: option => {
                    [lineChart, barChart].forEach(d => {
                        d.update({
                            xAxis: {
                                labels: {
                                    style: {
                                        fontSize: option === 'default' ? shadowChart.series.fontSize || '1em' : menuStateValueMap.fontSize[option]
                                    }
                                }
                            },
                            yAxis: {
                                labels: {
                                    style: {
                                        fontSize: option === 'default' ? shadowChart.series.fontSize || '1em' : menuStateValueMap.fontSize[option]
                                    }
                                }
                            }
                        })
                    })
                },
            },
            "Legend Labels": {
                change: option => {
                    [lineChart].forEach(d => {
                        d.update({
                            legend: {
                                itemStyle: {
                                    fontSize: option === 'default' ? shadowChart.series.fontSize || '1em' : menuStateValueMap.fontSize[option]
                                }
                            }
                        })
                    })
                },
            }
        },
        "Font Weight": {
            change: option => {},
            Title: {
                change: option => {
                    [chart, lineChart, barChart].forEach(d => {
                        d.update({
                            title: {
                                style: {
                                    fontWeight: option === 'default' ? shadowChart.title.fontWeight || 'regular' : option
                                }
                            }
                        })
                    })
                },
            },
            Subtitle: {
                change: option => {
                    [chart, lineChart, barChart].forEach(d => {
                        d.update({
                            subtitle: {
                                style: {
                                    fontWeight: option === 'default' ? shadowChart.subtitle.fontWeight || 'regular' : option
                                }
                            }
                        })
                    })
                },
            },
            Tooltip: {
                change: option => {
                    [chart, lineChart, barChart].forEach(d => {
                        d.update({
                            tooltip: {
                                style: {
                                    fontWeight: option === 'default' ? shadowChart.tooltip.fontWeight || 'regular' : option
                                }
                            }
                        })
                    })
                },
            },
            "Series Labels": {
                change: option => {
                    chart.update({
                        plotOptions: {
                            series: {
                                dataLabels: {
                                    style: {
                                        fontWeight: option === 'default' ? shadowChart.series.fontWeight || 'regular' : option
                                    }
                                }
                            }
                        }
                    })
                    barChart.update({
                        plotOptions: {
                            series: {
                                dataLabels: {
                                    style: {
                                        fontWeight: option === 'default' ? shadowChart.series.fontWeight || 'regular' : option
                                    }
                                }
                            }
                            
                        },
                        yAxis: {
                            stackLabels: {
                                style: {
                                    fontWeight: option === 'default' ? shadowChart.series.fontWeight || 'regular' : option
                                }
                            }
                        }
                    })
                },
            },
            "Axis Labels": {
                change: option => {
                    [lineChart, barChart].forEach(d => {
                        d.update({
                            xAxis: {
                                labels: {
                                    style: {
                                        fontWeight: option === 'default' ? shadowChart.series.fontWeight || 'regular' : option
                                    }
                                }
                            },
                            yAxis: {
                                labels: {
                                    style: {
                                        fontWeight: option === 'default' ? shadowChart.series.fontWeight || 'regular' : option
                                    }
                                }
                            }
                        })
                    })
                },
            },
            "Legend Labels": {
                change: option => {
                    [lineChart].forEach(d => {
                        d.update({
                            legend: {
                                itemStyle: {
                                    fontWeight: option === 'default' ? shadowChart.series.fontWeight || 'regular' : option
                                }
                            }
                        })
                    })
                },
            }
        }
    },
    "Color and contrast": {
        change: option => {},
        "Text color": {
            change: option => {
                [chart, lineChart, barChart].forEach(d => {
                    d.update({
                        title: {
                            style: {
                                color: option === 'default' || option === 'custom' ? shadowChart.title.color || "#333333" : option
                            }
                        },
                        subtitle: {
                            style: {
                                color: option === 'default'|| option === 'custom' ? shadowChart.subtitle.color || "#333333" : option
                            }
                        },
                        tooltip: {
                            style: {
                                color: option === 'default' || option === 'custom' ? shadowChart.tooltip.color || "#333333" : option
                            }
                        },
                        series: {
                            dataLabels: {
                                style: {
                                    color: option === 'default' ? shadowChart.tooltip.color || "#333333" : option === 'custom' ? 'white' : option
                                }
                            }
                        },
                        xAxis: {
                            labels: {
                                style: {
                                    color: option === 'default' ? shadowChart.tooltip.color || "#333333" : option === 'custom' ? shadowChart.tooltip.color || "#333333" : option
                                }
                            }
                        },
                        yAxis: {
                            labels: {
                                style: {
                                    color: option === 'default' ? shadowChart.tooltip.color || "#333333" : option === 'custom' ? shadowChart.tooltip.color || "#333333" : option
                                }
                            },
                            stackLabels: {
                                style: {
                                    color: option === 'default' ? shadowChart.tooltip.color || "#333333" : option === 'custom' ? shadowChart.tooltip.color || "#333333" : option
                                }
                            }
                        },
                        legend: {
                            itemStyle: {
                                color: option === 'default' ? shadowChart.tooltip.color || "#333333" : option === 'custom' ? shadowChart.tooltip.color || "#333333" : option
                            }
                        }
                    })
                })
            },
        },
        "Mark color": {
            change: option => {
                // default: [ "#2caffe", "#544fc5", "#00e272", "#fe6a35", "#6b8abc", "#d568fb", "#2ee0ca", "#fa4b42", "#feb56a", "#91e8e1" ]
                let svgs = [...document.getElementsByTagName("svg")]
                svgs.forEach(svg => {
                    if (svg.classList.contains("highcharts-root")) {
                        svg.style.filter = option === "limited white" ? "grayscale(1)" : option === "limited dark" ? "grayscale(1) invert()" : ""
                    }
                })
            },
        },
        "Distinguish without color": {
            change: option => {},
            "Fill patterns": {
                change: option => {
                    if (option === 'default') {
                        document.querySelector('.highcharts-root').setAttribute('class','highcharts-root')
                        chart.update({
                            series:[{
                                data: [...sankeyData],
                                nodes: [...sankeyNodes]
                            }]
                        })
                    } else {
                        document.querySelector('.highcharts-root').setAttribute('class',`highcharts-root ${option === 'low contrast' ? 'highcharts-using-fills-low' : 'highcharts-using-fills-high'}`)
                        chart.update({
                            series: [{
                                data: [...patternData],
                                nodes: [...patternNodes]
                            }]
                        })
                    }
                },
            }
        }
    },
    "Element size": {
        change: option => {},
        Lines: {
            change: option => {
                // console.log("changing lines!")
                lineChart.update({
                    plotOptions: {
                        series: {
                            lineWidth: menuStateValueMap.lineWidth[option]
                        }
                    }
                })
            },
            // Outlines : {
            //     change: option => {},
            // }
        }
    },
    Audio: {
        change: option => {},
        "Sonification duration": {
            change: option => {
                lineChart.update({
                    sonification: {
                        duration: menuStateValueMap.duration[option]
                    }
                })
            }
        },
        "Sonification order": {
            change: option => {
                lineChart.update({
                    sonification: {
                        order: option === 'default' ? 'sequential' : option
                    }
                })
            }
        },
        "Sonification volume": {
            change: option => {
                lineChart.update({
                    sonification: {
                        masterVolume: menuStateValueMap.volume[option]
                    }
                })
            }
        },
        "Sonification pitch range": {
            change: () => {},
            "Pitch min.": {
                change: option => {
                    lineChart.update({
                        sonification: {
                            defaultInstrumentOptions: {
                                mapping: {
                                    pitch: {
                                        min: option === 'default' ? 'c3' : option,
                                    }
                                }
                            }
                        }
                    })
                }
            },
            "Pitch max.": {
                change: option => {
                    lineChart.update({
                        sonification: {
                            defaultInstrumentOptions: {
                                mapping: {
                                    pitch: {
                                        max: option === 'default' ? 'd6' : option,
                                    }
                                }
                            }
                        }
                    })
                }
            }
        },
        // "Tempo ticker timing": {
        //     change: option => {
        //         let tracks = 
        //         lineChart.update({
        //             sonification: {
        //                 globalContextTracks: [
        //                     option === 'default',
        //                 ]
        //             }
        //         })
        //     }
        // },
    },
    Motion: {
        change: option => {},
    },
    Interactivity: {
        change: option => {},
        "Pointer focus": {
            change: option => {},
        }
    }
}
const parseMenuState = (highchartsPropName) => {
    let styleObject = {}
    let propName = propNameMap[highchartsPropName]
    menuState["Text visuals"]["Font Size"].Title.value ? propMap["Font Size"][menuState["Text visuals"]["Font Size"].Title.value] : undefined
    if (menuState["Text visuals"]["Font Size"][propName].value) {
        styleObject.fontSize = propValueMap.fontSize[menuState["Text visuals"]["Font Size"][propName].value]
    }
    return styleObject
}