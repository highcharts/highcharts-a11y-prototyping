const rawPrefs = `- Comprehension (no assistance, moderate, robust)
- - Alt text appearance (no visuals, show high level, show all)
- - Description verbosity (hide, minimal, default, verbose)
- - - Chart (hide, minimal, default, verbose)
- - - Region alt text (hide, minimal, default, verbose)
- - - Mark alt text (hide, minimal, default, verbose)
- - - Interactions (hide, minimal, default, verbose)
- - - Animations (hide, minimal, default, verbose)
- - - Sonification (hide, minimal, default, verbose)
- - Explanation verbosity (hide, minimal, default, verbose)
- - - Chart (hide, minimal, default, verbose)
- - - Data (hide, minimal, default, verbose)
- - - Interactions (hide, minimal, default, verbose)
- - - Animations (hide, minimal, default, verbose)
- - - Sonification (hide, minimal, default, verbose)
- - Cues and labels (hide, pattern, show)
- - - Annotations (hide, pattern, show)
- - - Mark Labels (hide, pattern, show)
- - - Series Labels (hide, pattern, show)
- - - Legend Title (hide, pattern, show)
- - - Legend Label (hide, pattern, show)
- - - Axis Title (hide, pattern, show)
- - - Axis Labels (hide, pattern, show)
- - - Gridlines (hide, pattern, show)
- - - Interactions (hide, pattern, show)
- Text (minimalist, moderate, maximalist)
- - Font Size (small, medium, large)
- - - Title (small, small+, medium, medium+, large)
- - - Subtitle (small, small+, medium, medium+, large)
- - - Mark Labels (small, small+, medium, medium+, large)
- - - Series Labels (small, small+, medium, medium+, large)
- - - Legend Title (small, small+, medium, medium+, large)
- - - Legend Labels (small, small+, medium, medium+, large)
- - - Axis Titles (small, small+, medium, medium+, large)
- - - Axis Labels (small, small+, medium, medium+, large)
- - - Caption (small, small+, medium, medium+, large)
- - - Annotations (small, small+, medium, medium+, large)
- - - Misc. (small, small+, medium, medium+, large)
- - Font Weight (light, regular, bold)
- - - Title (thin, light, regular, bold, black)
- - - Subtitle (thin, light, regular, bold, black)
- - - Mark Labels (thin, light, regular, bold, black)
- - - Series Labels (thin, light, regular, bold, black)
- - - Legend Title (thin, light, regular, bold, black)
- - - Legend Labels (thin, light, regular, bold, black)
- - - Axis Titles (thin, light, regular, bold, black)
- - - Axis Labels (thin, light, regular, bold, black)
- - - Caption (thin, light, regular, bold, black)
- - - Annotations (thin, light, regular, bold, black)
- - - Misc. (thin, light, regular, bold, black)
- - Font Family (sans serif, serif, slab serif)
- - - Title (sans serif, serif, slab serif)
- - - Subtitle (sans serif, serif, slab serif)
- - - Mark Labels (sans serif, serif, slab serif)
- - - Series Labels (sans serif, serif, slab serif)
- - - Legend Title (sans serif, serif, slab serif)
- - - Legend Labels (sans serif, serif, slab serif)
- - - Axis Titles (sans serif, serif, slab serif)
- - - Axis Labels (sans serif, serif, slab serif)
- - - Caption (sans serif, serif, slab serif)
- - - Annotations (sans serif, serif, slab serif)
- - - Misc. (sans serif, serif, slab serif)
- - Text overflow (truncate, ellipses, allow overflow)
- - - Title (truncate, ellipses, allow overflow)
- - - Subtitle (truncate, ellipses, allow overflow)
- - - Mark Labels (truncate, ellipses, allow overflow)
- - - Series Labels (truncate, ellipses, allow overflow)
- - - Legend Title (truncate, ellipses, allow overflow)
- - - Legend Labels (truncate, ellipses, allow overflow)
- - - Axis Titles (truncate, ellipses, allow overflow)
- - - Axis Labels (truncate, ellipses, allow overflow)
- - - Caption (truncate, ellipses, allow overflow)
- - - Annotations (truncate, ellipses, allow overflow)
- - - Misc. (truncate, ellipses, allow overflow)
- - Horizontal Spacing (tight, moderate, wide)
- - - Title (tight, moderate, wide)
- - - Subtitle (tight, moderate, wide)
- - - Mark Labels (tight, moderate, wide)
- - - Series Labels (tight, moderate, wide)
- - - Legend Title (tight, moderate, wide)
- - - Legend Labels (tight, moderate, wide)
- - - Axis Titles (tight, moderate, wide)
- - - Axis Labels (tight, moderate, wide)
- - - Caption (tight, moderate, wide)
- - - Annotations (tight, moderate, wide)
- - - Misc. (tight, moderate, wide)
- - Vertical Spacing (tight, moderate, wide)
- - - Title (tight, moderate, wide)
- - - Subtitle (tight, moderate, wide)
- - - Mark Labels (tight, moderate, wide)
- - - Series Labels (tight, moderate, wide)
- - - Legend Title (tight, moderate, wide)
- - - Legend Labels (tight, moderate, wide)
- - - Axis Titles (tight, moderate, wide)
- - - Axis Labels (tight, moderate, wide)
- - - Caption (tight, moderate, wide)
- - - Annotations (tight, moderate, wide)
- - - Misc. (tight, moderate, wide)
- - Italics (allow, disable)
- - Alignment (left, centered, right)
- - - Title (left, centered, right)
- - - Subtitle (left, centered, right)
- - - Mark Labels (left, centered, right)
- - - Series Labels (left, centered, right)
- - - Legend Title (left, centered, right)
- - - Legend Labels (left, centered, right)
- - - Axis Titles (left, centered, right)
- - - Axis Labels (left, centered, right)
- - - Caption (left, centered, right)
- - - Annotations (left, centered, right)
- - - Misc. (left, centered, right)
- Color and contrast (disabled, minimalist, maximalist)
- - Text color (black, white, grey, custom)
- - Mark color (disabled, limited dark, limited white)
- - - Categorical data types (disabled, limited dark, limited white, custom)
- - - Ordinal data types (disabled, limited dark, limited white, custom)
- - - Quantitative data types (disabled, limited dark, limited white, custom)
- - - Non data marks (disabled, limited dark, limited white, custom)
- - Distinguish without color (disabled, enabled)
- - - Shapes (disabled, 1 varied type, different types, custom)
- - - Fill patterns (disabled, low contrast, high contrast, custom)
- - - Line patterns (disabled, enabled, custom)
- - - Interaction states (disabled, patterns, marks, patterns + marks)
- - Text contrast (disabled, low contrast, high contrast)
- - - Title (disabled, low contrast, high contrast, custom)
- - - Subtitle (disabled, low contrast, high contrast, custom)
- - - Mark Labels (disabled, low contrast, high contrast, custom)
- - - Series Labels (disabled, low contrast, high contrast, custom)
- - - Legend Title (disabled, low contrast, high contrast, custom)
- - - Legend Labels (disabled, low contrast, high contrast, custom)
- - - Axis Titles (disabled, low contrast, high contrast, custom)
- - - Axis Labels (disabled, low contrast, high contrast, custom)
- - - Caption (disabled, low contrast, high contrast, custom)
- - - Annotations (disabled, low contrast, high contrast, custom)
- - - Misc. (disabled, low contrast, high contrast, custom)
- - Mark contrast (disabled, low contrast, high contrast)
- - - Categorical data types (disabled, low contrast, high contrast)
- - - Ordinal data types (disabled, low contrast, high contrast)
- - - Quantitative data types (disabled, low contrast, high contrast)
- - - Non data marks (disabled, low contrast, high contrast)
- - Mark opacity (low, moderate, full)
- - Axis line contrast (disabled, low contrast, high contrast, custom)
- - Gridline contrast (disabled, low contrast, high contrast, custom)
- - Mark outline contrast (disabled, low contrast, high contrast, custom)
- - Text outline contrast (disabled, low contrast, high contrast, custom)
- - Interaction state contrast (disabled, low contrast, high contrast, custom)
- - Misc. element contrast (disabled, low contrast, high contrast, custom)
- Element size (smaller, moderate, larger)
- - Bar spacing (0%, 10%, 20%, 30%, 40%, 50%)
- - Lines (light, moderate, thick)
- - - Data lines (thin, light, moderate, thick, heavy)
- - - Axis lines (thin, light, moderate, thick, heavy)
- - - Gridlines (thin, light, moderate, thick, heavy)
- - - Outlines (thin, light, moderate, thick, heavy)
- - Mark min. size (0, 3px, 10px)
- - - Scaled mark min. (0px to 44px)
- - - Non scaled mark min. (1px to 44px)
- - Interaction target (minimal, moderate, large)
- Audio (disabled, gentle, complex)
- - Sonification volume (low, medium, high)
- - - High pitch volume (quiet, low, medium, high, loud)
- - - Middle pitch volume (quiet, low, medium, high, loud)
- - - Low pitch volume (quiet, low, medium, high, loud)
- - Sonification pitch range (small, moderate, full)
- - - Pitch max. (9k, 12k, 15k, 18k, 20k)
- - - Pitch min. (20, 100, 250, 500, 1000)
- - Instruments (disabled, all sine, all piano, custom)
- - Tempo ticker (disabled, quiet, moderate, loud)
- Motion (disabled, staged, slower, faster)
- Interactivity (disabled, minimal feedback, high feedback)
- - Interaction console (hide, show as log, always show)
- - Tooltips (disabled, show on focus, toggle only)
- - Element selection (disabled, no confirmation, use confirmation)
- - Filtering (disabled, no confirmation, use confirmation)
- - Input mapping
- - - Help (F1, custom keypress)
- - - Preferences menu (Shift+F1, custom keypress)
- - - Activate Hover (on focus, custom keypress)
- - - Remove Hover (Backspace/on loss of focus, custom keypress)
- - - Select (Spacebar/Enter, custom keypress)
- - - Exit and skip chart (Escape, custom keypress)
- - - Next element (AT default, right, down, custom keypress)
- - - Previous element (AT default, left, up, custom keypress)
- - - Next across element (period, custom keypress)
- - - Previous across element (comma, custom keypress)
- - - Parent element (AT default, up, page up, custom keypress)
- - - First child element (AT default, down, page down, custom keypress)`
var parsePreferences = (str) => {
    const lines = str.trim().split('\n');
    const stack = [];
    let root = [];
    console.log("lines",lines)
  
    lines.forEach(line => {
      console.log("root",root)
      const indentLevel = (line.match(/-/g) || []).length;
      console.log("indentLevel",indentLevel)
      if (!indentLevel) {console.log("FAILURE")}
  
      const cleanLine = line.replaceAll('- ',''); // Remove '- ' from the start
      console.log("cleanline",cleanLine)
  
      const [name, optionsStr] = cleanLine.split(' (');
      console.log("options are...",optionsStr)
  
      const options = optionsStr ? optionsStr.slice(0, -1).split(', ') : [];
      console.log(options,"options")
  
      const newItem = {
        name: name.trim(),
        options: options,
        children: []
      };
  
      if (indentLevel === 1) {
          root.push(newItem);
      } else {
          const parent = root[root.length - 1];
          console.log("parent",parent)
          // if (!parent.children) parent.children = [];
          let target = parent;
          if (indentLevel === 3) {
              target = parent.children[parent.children.length - 1];
  
              console.log("new target",target)
          }
          target.children.push(newItem)
      }
    });
  
    return root;
  }
const allPreferences = parsePreferences(rawPrefs)
function generatePreferencesHTML(preferences, level = 2, parentName = '') {
  let html = '';
  
  preferences.forEach(pref => {
    const headingTag = `h${level}`;
    const nextLevel = level + 1;
    const inputName = pref.name.toLowerCase().replace(/\s+/g, '-');
    const children = pref.children && pref.children.length > 0

    const details = children ? "details" : "div class='highcharts-empty-details'"
    const summary = children ? "summary" : "div class='highcharts-empty-summary'"

    html += `<${details}>
        <${summary} class="highcharts-menu-group highcharts-menu-group-${level - 1}">
            <form>
                <div class="highcharts-menu-column">
                    <div class="highcharts-column-left highcharts-column-level-${level - 1}">
                    <label class="highcharts-menu-checkbox-label highcharts-menu-checkbox-label-${level - 1}" for="${parentName+inputName}">
                        <${headingTag}>${pref.name}<span class="highcharts-menu-hint highcharts-menu-hidden" aria-label="note: at least one child option overrides this setting.">*</span></${headingTag}>
                    </label>
                        
                    <input class="highcharts-menu-checkbox" type="checkbox" name="${parentName+inputName}"/>
                    </div>
                    <div class="highcharts-menu-slider-line"></div>
                    <div id="${parentName+inputName}-menu" class="highcharts-menu-slider-wrapper highcharts-column-right highcharts-menu-slider-disabled">`;
                
    pref.options.forEach((option, index) => {
        const optionName = `${parentName+inputName}-${option.toLowerCase().replace(/\s+/g, '-')}`;
        html += `<div class="highcharts-menu-slider-option"><label for="${optionName}" data-value="${option.toLowerCase()}">
                ${option}
            </label><input type="radio" name="${parentName+inputName}" id="${optionName}" value="${index}" required="" disabled></div>`;
    });
                
    html += `</div></div></form></${summary}>`;
    const newParent = parentName+inputName+'-'
    if (children) {
      html += generatePreferencesHTML(pref.children, nextLevel, newParent);
    }
    
    html += `</${details}>`;
  });

  return html;
}

let x = generatePreferencesHTML(allPreferences)

document.getElementById('menu').innerHTML = x

const toggleOptions = (e) => {
    console.log("e",e)
    const menu = document.getElementById(e.srcElement.name + "-menu")
    const inputs = [...menu.querySelectorAll('input')]
    menu.classList.toggle("highcharts-menu-slider-disabled")
    inputs.forEach(input => input.disabled = !input.disabled)
}
const checkboxes = [...document.querySelectorAll(".highcharts-menu-checkbox")]
console.log("checkboxes",checkboxes)
checkboxes.forEach(box => {
    box.addEventListener("click",toggleOptions)
})