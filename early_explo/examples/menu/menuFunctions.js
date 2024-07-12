const menuFunctions = {
    Comprehension: {
        change: option => {},
        "Alt text appearance": {
            change: (option)=> {
                const srMajorRegion = document.getElementById("highcharts-screen-reader-region-before-0").children[0]
                console.log(option)
                srMajorRegion.setAttribute("style","position: absolute; width: 1px; height: 1px; overflow: hidden; white-space: nowrap; clip: rect(1px, 1px, 1px, 1px); margin-top: -3px; opacity: 0.01;")
            }
        }
    },
    Text: {
        change: option => {},
        "Font Size": {
            change: option => {},
            Title: {
                change: option => {},
            },
            Subtitle: {
                change: option => {},
            },
            Tooltip: {
                change: option => {},
            },
            seriesLabel: {
                change: option => {},
            }
        },
        "Font Weight": {
            change: option => {},
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
            change: option => {},
        },
        "Mark color": {
            change: option => {},
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