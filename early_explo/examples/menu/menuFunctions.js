let chart;
const menuFunctions = {
    Comprehension: {
        change: option => {},
        "Alt text appearance": {
            change: (option)=> {
                if (option.indexOf("show") > -1) {
                    const srMajorRegion = document.getElementById("highcharts-screen-reader-region-before-0").children[0]
                    srMajorRegion.setAttribute("style","")
                    if (option.indexOf("all") > -1) {
                        document.getElementById("container").querySelectorAll('path[aria-label]').forEach(e => {
                            let label = document.createElement("div")
                            let rect = e.getBoundingClientRect()
                            label.innerText = e.getAttribute("aria-label")
                            label.setAttribute("style",`left:${rect.left}px; top:${rect.top}px; width:${rect.width}px; height:${rect.height}px;`)
                            label.setAttribute("class","highcharts-visible-alt")
                            document.getElementById("container").appendChild(label)
                        })
                    } else {
                        document.getElementById("container").querySelectorAll('.highcharts-visible-alt').forEach(e => e.remove())
                    }
                } else {
                    const srMajorRegion = document.getElementById("highcharts-screen-reader-region-before-0").children[0]
                    console.log(option)
                    srMajorRegion.setAttribute("style","position: absolute; width: 1px; height: 1px; overflow: hidden; white-space: nowrap; clip: rect(1px, 1px, 1px, 1px); margin-top: -3px; opacity: 0.01;")
                    document.getElementById("container").querySelectorAll('.highcharts-visible-alt').forEach(e => e.remove())
                }
            }
        }
    },
    Text: {
        change: option => {},
        "Font Size": {
            change: option => {},
            Title: {
                change: option => {
                    chart.update({
                        title: {
                            style: {
                                fontSize: menuStateValueMap.fontSize[option]
                            }
                        }
                    })
                },
            },
            Subtitle: {
                change: option => {
                    chart.update({
                        subtitle: {
                            style: {
                                fontSize: menuStateValueMap.fontSize[option]
                            }
                        }
                    })
                },
            },
            Tooltip: {
                change: option => {
                    chart.update({
                        tooltip: {
                            style: {
                                fontSize: menuStateValueMap.fontSize[option]
                            }
                        }
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
                                        fontSize: menuStateValueMap.fontSize[option]
                                    }
                                }
                            }
                        }
                    })
                },
            }
        },
        "Font Weight": {
            change: option => {
                chart.update({
                    title: {
                        style: {
                            fontWeight: option
                        }
                    },
                    subtitle: {
                        style: {
                            fontWeight: option
                        }
                    },
                    tooltip: {
                        style: {
                            fontWeight: option
                        }
                    },
                    // plotOptions: {
                        series: {
                            dataLabels: {
                                style: {
                                    fontWeight: option
                                }
                            }
                        }
                    // }
                })
            },
            title: {
                change: option => {},
            },
            subtitle: {
                change: option => {},
            },
            tooltip: {
                change: option => {},
            },
            seriesLabel: {
                change: option => {},
            }
        }
    },
    "Color and contrast": {
        change: option => {},
        "Text color": {
            change: option => {
                chart.update({
                    title: {
                        style: {
                            color: option
                        }
                    },
                    subtitle: {
                        style: {
                            color: option
                        }
                    },
                    tooltip: {
                        style: {
                            color: option
                        }
                    },
                    // plotOptions: {
                        series: {
                            dataLabels: {
                                style: {
                                    color: option
                                }
                            }
                        }
                    // }
                })
            },
        },
        "Mark color": {
            change: option => {
                console.log("changing mark colors!")
                // default: [ "#2caffe", "#544fc5", "#00e272", "#fe6a35", "#6b8abc", "#d568fb", "#2ee0ca", "#fa4b42", "#feb56a", "#91e8e1" ]
                if (option === "limited white") {
                    document.getElementsByTagName("svg")[0].style.filter = "grayscale(1)"
                } else if (option === "limited dark") {
                    document.getElementsByTagName("svg")[0].style.filter = "grayscale(1) invert()"
                } else {
                    document.getElementsByTagName("svg")[0].style.filter = ""
                }
                
            },
        },
        "Distinguish without color": {
            change: option => {},
            "Fill patterns": {
                change: option => {},
            }
        }
    },
    "Element size": {
        change: option => {},
        Lines: {
            change: option => {},
            Outlines : {
                change: option => {},
            }
        }
    },
    Audio: {
        change: option => {},
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
    console.log(highchartsPropName)
    menuState.Text["Font Size"].Title.value ? propMap["Font Size"][menuState.Text["Font Size"].Title.value] : undefined
    if (menuState.Text["Font Size"][propName].value) {
        styleObject.fontSize = propValueMap.fontSize[menuState.Text["Font Size"][propName].value]
    }
    console.log(styleObject)
    return styleObject
}