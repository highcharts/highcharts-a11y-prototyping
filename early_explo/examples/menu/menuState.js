// option is chosen
// we set menu state
// we then run a menuFunction to change the chart to match
// menuFunction relies on propNameMap and menuStateValueMap for determining actual values for things
let menuState = {
    Comprehension: {
        value: "",
        available: true,
        enabled: false,
        "Alt text visual appearance": {
            value: "",
            available: true,
            enabled: false
        },
        "Description verbosity": {
            value: "",
            available: true,
            enabled: false,
            "Chart": {
                value: "",
                available: true,
                enabled: false
            }
        }
    },
    "Text visuals": {
        value: "",
        available: true,
        enabled: false,
        "Font Size": {
            value: "",
            available: true,
            enabled: false,
            Title: {
                value: "",
                available: true,
                enabled: false
            },
            Subtitle: {
                value: "",
                available: true,
                enabled: false
            },
            Tooltip: {
                value: "",
                available: true,
                enabled: false
            },
            "Series Labels": {
                value: "",
                available: true,
                enabled: false
            },
            "Axis Labels": {
                value: "",
                available: true,
                enabled: false
            },
            "Legend Labels": {
                value: "",
                available: true,
                enabled: false
            }
        },
        "Font Weight": {
            value: "",
            available: true,
            enabled: false,
            Title: {
                value: "",
                available: true,
                enabled: false
            },
            Subtitle: {
                value: "",
                available: true,
                enabled: false
            },
            Tooltip: {
                value: "",
                available: true,
                enabled: false
            },
            "Series Labels": {
                value: "",
                available: true,
                enabled: false
            },
            "Axis Labels": {
                value: "",
                available: true,
                enabled: false
            },
            "Legend Labels": {
                value: "",
                available: true,
                enabled: false
            }
        }
    },
    "Color and contrast": {
        value: "",
        available: true,
        enabled: false,
        "Text color": {
            value: "",
            available: true,
            enabled: false
        },
        "Mark color": {
            value: "",
            available: true,
            enabled: false
        },
        "Distinguish without color": {
            value: "",
            available: true,
            enabled: false,
            "Fill patterns": {
                value: "",
                available: true,
                enabled: false
            }
        }
    },
    "Element size": {
        value: "",
        available: true,
        enabled: false,
        Lines: {
            value: "",
            available: true,
            enabled: false,
            // Outlines : {
            //     value: "",
            //     available: true,
            //     enabled: false
            // }
        }
    },
    Audio: {
        value: "",
        available: true,
        enabled: false,
        "Sonification duration" : {
            value: "",
            available: true,
            enabled: false,
        },
        "Sonification order" : {
            value: "",
            available: true,
            enabled: false,
        },
        "Sonification volume": {
            value: "",
            available: true,
            enabled: false
        },
        "Sonification pitch range" : {
            value: "",
            available: true,
            enabled: false,
            "Pitch min." : {
                value: "",
                available: true,
                enabled: false,
            },
            "Pitch max." : {
                value: "",
                available: true,
                enabled: false,
            },
        },
        // "Tempo ticker": {
        //     value: "",
        //     available: true,
        //     enabled: false,
        //     "Tempo ticker timing": {
        //         value: "",
        //         available: true,
        //         enabled: false
        //     },
        //     "Tempo ticker volume": {
        //         value: "",
        //         available: true,
        //         enabled: false
        //     },
        // }
    },
    Motion: {
        value: "",
        available: false,
        enabled: false
    },
    Interactivity: {
        value: "",
        available: false,
        enabled: false,
        "Pointer focus": {
            value: "",
            available: false,
            enabled: false
        }
    }
}
let overrideValues = {
    "Comprehension": {
        options: {
            moderate:  {
                "Description verbosity": "minimal"
            },
            robust:  {
                "Description verbosity": "verbose"
            }
        }
    },
    "Color and contrast": {
        options: {
            default: {
                "Text color": "black"
            },
            minimalist: {
                "Text color": "custom",
                "Mark color": "limited white",
                "Distinguish without color": "default"
            },
            maximalist: {
                "Text color": "black",
                "Mark color": "default",
                "Distinguish without color": "enabled"
            }
        },
        "Distinguish without color": {
            options: {
                enabled: {
                    "Fill patterns": "high-contrast"
                }
            }
        }
    },
    "Audio": {
        options: {
            complex: {
                "Sonification duration": "fast",
                "Sonification volume": "high",
                "Sonification pitch range": "full",
                "Tempo ticker": "enabled"
            }
        },
        "Tempo ticker": {
            options: {
                disabled: {
                    "Tempo ticker volume": "default",
                    "Tempo ticker timing": "default"
                }
            }
        }
    }
}
const propNameMap = {
    title: "Title",
    subtitle: "Subtitle",
    tooltip: "Tooltip"
}
const menuStateValueMap = {
    fontSize: {
        small: "0.75em",
        "small+": "1em",
        medium: "1.25em",
        "medium+": "1.5em",
        large: "1.75em"
    },
    lineWidth: {
        default: 2,
        light: 1,
        moderate: 3,
        thick: 4
    },
    duration: {
        default: 8000,
        slow: 12000,
        moderate: 8000,
        fast: 4000
    },
    volume: {
        default: 0.7,
        low: 0.2,
        medium: 0.7,
        high: 1.2
    }
}