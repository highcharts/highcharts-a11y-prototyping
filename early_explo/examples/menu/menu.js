const allPreferences = parsePreferences(rawPrefs)
let allOptionsFlattened = {}

let x = `<div class="highcharts-menu-padding">
    <h1>Preferences</h1>
    <p>This menu provides a way to customize charts and graphs. The menu is organized into categories, and adjusting the settings at the category level will adjust all of the settings within that category. Some settings within categories also have sub-settings which will also inherit higher level settings that they belong to. If wording for a category's setting is hard to understand, try changing that setting and then navigating into the menu to see which children settings it affected.</p>
    <div><label for="toggle-unavailable">Hide unavailable options</label><input id="toggle-unavailable" name="toggle-unavailable" type="checkbox" class="highcharts-toggle-unavailable" checked>
    </div>${ generatePreferencesHTML(allPreferences)}</div>`

const urlParse = new URL(window.location.href)
const urlMenu = urlParse.searchParams.get("menu");
console.log("menu in url is:",urlMenu);
if (urlMenu !== "hide") {
    document.getElementById('menu').innerHTML = x

    const toggleMenu = (menu) => {
        const inputs = [...menu.querySelectorAll('input')]
        menu.classList.toggle("highcharts-menu-slider-disabled")
        inputs.forEach(input => input.disabled = !input.disabled)
    }
    const toggleOptions = (e) => {
        e.srcElement.setAttribute('data-highcharts-override', 'true')
        const menu = document.getElementById(e.srcElement.name + "-menu")
        menu.setAttribute('data-highcharts-override', 'true')
        toggleMenu(menu)

        const childrenBoxes = [...e.srcElement.form.parentNode.parentNode.querySelectorAll('input[type="checkbox"]')]
        childrenBoxes.forEach(box =>{
            if (!box.getAttribute('data-highcharts-override')) {
                box.checked = e.srcElement.checked
            }
        })

        const childrenMenus = [...e.srcElement.form.parentNode.parentNode.querySelectorAll(".highcharts-menu-slider-wrapper")]
        let i = 0;
        childrenMenus.forEach(menuChild => {
            // if the user hasn't overriden the checkbox already AND
            // we aren't looking at the first checkbox
            if (!menuChild.getAttribute('data-highcharts-override') && i) {
                toggleMenu(menuChild)
            }
            i++
        })
    }
    const toggleShowAvailable = (e) => {
        e.srcElement.parentNode.parentNode.parentNode.classList.toggle("highcharts-hiding-children")
    }
    const runMenuFunction = option => {
        let parentGroup = option.option.parent ? option.option.parent : null
        let parentGroupOfParent = parentGroup && parentGroup.parent ? parentGroup.parent : null
        // all three of these will attempt to run conditionally, but only one will be able to
        menuFunctions?.[parentGroupOfParent?.name]?.[parentGroup?.name]?.[option?.option?.name]?.change(option?.targetName)
        menuFunctions?.[parentGroup?.name]?.[option?.option?.name]?.change(option?.targetName)
        menuFunctions?.[option?.option?.name]?.change(option?.targetName)
    }
    const changeValue = (option) => {
        document.getElementById(option.id).checked = true
        runMenuFunction(option)
    }
    const processRadioSelection = (e) => {
        // overall, the process on user interaction:
        // option is chosen by user
        // we set menu state
        // we then run a menuFunction to change the chart to match
        // (menuFunction relies on propNameMap and menuStateValueMap for determining actual values for things)
        const option = allOptionsFlattened[e.srcElement.id]
        let childrenOfOption = option.parent.children.length ? [...option.parent.children] : []
        childrenOfOption.push(option.parent)
        let index = option.parent.options.findIndex(d => d === option.name)
        // we also need to check the children of children!
        // we try to match try to match name, otherwise check for overrides, otherwise use index
        // use new value to pass on to childmost level 
        const findDownstreamOption = (targetOption, sourceName) => {
            let targetName = targetOption.options.find(d => d === sourceName)
            let parentGroup = targetOption.parent ? targetOption.parent : null
            let parentGroupOfParent = parentGroup && parentGroup.parent ? parentGroup.parent : null

            if (!targetName) {
                // least legible block of code ever lol!
                // basically, the menu's parent options don't always map perfectly to child names, so we try to check if there are override values set, otherwise try for index number matching
                console.log("parentGroupOfParent",parentGroupOfParent)
                console.log(" overrideValues?.[parentGroup?.name]?.[parentGroupOfParent?.name]?.options?.[sourceName]", overrideValues?.[parentGroup?.name]?.[parentGroupOfParent?.name]?.options?.[sourceName])
                targetName = !parentGroupOfParent && overrideValues?.[parentGroup?.name]?.options?.[sourceName] 
                    ? overrideValues[parentGroup.name].options[sourceName][targetOption.name] 
                    : parentGroupOfParent && overrideValues?.[parentGroup?.name]?.[parentGroupOfParent?.name]?.options?.[sourceName] ? overrideValues[parentGroup.name][parentGroupOfParent.name].options[sourceName][targetOption.name] : undefined
            }
            console.log("targetOption",targetOption)
            console.log("targetName",targetName)
            targetName = targetName || targetOption.options[index]
            let id = `${parentGroupOfParent ? parentGroupOfParent.domName + '-' : ''}${parentGroup ? parentGroup.domName + '-' : ''}${targetOption.domName}-${targetName}`
            id = id.trim().toLowerCase().replace(/\s+/g, '-')
            return { id, targetName, option:targetOption }
        }
        childrenOfOption.forEach(affectedOption => {
            if (affectedOption.available) {
                const correspondingOption = findDownstreamOption(affectedOption, option.name)
                changeValue(correspondingOption)
                if (affectedOption.children.length) {
                    affectedOption.children.forEach(childmost => {
                        if (childmost.available) {
                            const childmostCorrespondingOption = findDownstreamOption(childmost, correspondingOption.targetName)
                            changeValue(childmostCorrespondingOption)
                        }
                    })
                }
            }
        })
    }
    const checkboxes = [...document.querySelectorAll(".highcharts-menu-checkbox")]
    checkboxes.forEach(box => {
        box.addEventListener("click",toggleOptions)
    })
    document.querySelector(".highcharts-toggle-unavailable").addEventListener("click",toggleShowAvailable)
    const radios = [...document.querySelectorAll(".highcharts-menu-radio")]
    radios.forEach(radio => {
        radio.addEventListener("click",processRadioSelection)
    })

} else {
    console.log("no menus!")
    document.getElementById("menu").style.display = "none"
}
