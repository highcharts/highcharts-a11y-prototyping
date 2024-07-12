// option is chosen
// we set menu state
// we then run a menuFunction to change the chart to match
// menuFunction relies on propNameMap and menuStateValueMap for determining actual values for things
let menuState = {
    Comprehension: {
        value: "",
        available: true,
        enabled: false,
        "Alt text appearance": {
            value: "",
            available: true,
            enabled: false
        }
    },
    Text: {
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
            seriesLabel: {
                value: "",
                available: true,
                enabled: false
            }
        },
        "Font Weight": {
            value: "",
            available: true,
            enabled: false,
            title: {
                value: "",
                available: true,
                enabled: false
            },
            subtitle: {
                value: "",
                available: true,
                enabled: false
            },
            tooltip: {
                value: "",
                available: true,
                enabled: false
            },
            seriesLabel: {
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
            Outlines : {
                value: "",
                available: true,
                enabled: false
            }
        }
    },
    Audio: {
        value: "",
        available: false,
        enabled: false
    },
    Motion: {
        value: "",
        available: true,
        enabled: false
    },
    Interactivity: {
        value: "",
        available: true,
        enabled: false,
        "Pointer focus": {
            value: "",
            available: true,
            enabled: false
        }
    }
}
let overrideValues = {
    "Color and contrast": {
        options: {
            disabled: {
                "Text color": "black"
            },
            minimalist: {
                "Text color": "white",
                "Distinguish without color": "disabled"
            },
            maximalist: {
                "Text color": "black",
                "Mark color": "disabled",
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
    }
    // Text: {
    //     "minimalist": {
    //         "Font Size": "small",
    //         "Font Weight": "light"
    //     },
    //     "moderate": {
    //         "Font Size": "medium",
    //         "Font Weight": "regular"
    //     },
    //     "maximals": {
    //         "Font Size": "large",
    //         "Font Weight": "bold"
    //     },
    // }
}
const propNameMap = {
    title: "Title",
    subtitle: "Subtitle",
    tooltip: "Tooltip"
}
const menuStateValueMap = {
    fontSize: {
        small: "8pt",
        "small+": "10pt",
        medium: "12pt",
        "medium+": "14pt",
        large: "16pt"
    }
}