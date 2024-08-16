const rawPrefs = `- Comprehension (default, moderate, robust)
- - Alt text visual appearance (default, show high level, show all)
- - Description verbosity (default, disable, minimal, verbose)
- - - Chart (default, disable, minimal, verbose)
- - - Region alt text (default, disable, minimal, verbose)
- - - Mark alt text (default, disable, minimal, verbose)
- - - Interactions (default, disable, minimal, verbose)
- - - Animations (default, disable, minimal, verbose)
- - - Sonification (default, disable, minimal, verbose)
- - Explanation verbosity (default, disable, minimal, verbose)
- - - Chart (default, disable, minimal, verbose)
- - - Data (default, disable, minimal, verbose)
- - - Interactions (default, disable, minimal, verbose)
- - - Animations (default, disable, minimal, verbose)
- - - Sonification (default, disable, minimal, verbose)
- - Cues and labels (default, pattern, show)
- - - Annotations (default, pattern, show)
- - - Mark Labels (default, pattern, show)
- - - Series Labels (default, pattern, show)
- - - Legend Title (default, pattern, show)
- - - Legend Label (default, pattern, show)
- - - Axis Title (default, pattern, show)
- - - Axis Labels (default, pattern, show)
- - - Gridlines (default, pattern, show)
- - - Interactions (default, pattern, show)
- Text visuals (default, minimalist, moderate, maximalist)
- - Font Size (default, small, medium, large)
- - - Title (default, small, small+, medium, medium+, large)
- - - Subtitle (default, small, small+, medium, medium+, large)
- - - Mark Labels (default, small, small+, medium, medium+, large)
- - - Series Labels (default, small, small+, medium, medium+, large)
- - - Tooltip (default, small, small+, medium, medium+, large)
- - - Legend Title (default, small, small+, medium, medium+, large)
- - - Legend Labels (default, small, small+, medium, medium+, large)
- - - Axis Titles (default, small, small+, medium, medium+, large)
- - - Axis Labels (default, small, small+, medium, medium+, large)
- - - Caption (default, small, small+, medium, medium+, large)
- - - Annotations (default, small, small+, medium, medium+, large)
- - - Misc. (default, small, small+, medium, medium+, large)
- - Font Weight (default, 100, 400, 700)
- - - Title (default, 100, 400, 700)
- - - Subtitle (default, 100, 400, 700)
- - - Mark Labels (default, 100, 400, 700)
- - - Series Labels (default, 100, 400, 700)
- - - Tooltip (default, 100, 400, 700)
- - - Legend Title (default, 100, 400, 700)
- - - Legend Labels (default, 100, 400, 700)
- - - Axis Titles (default, 100, 400, 700)
- - - Axis Labels (default, 100, 400, 700)
- - - Caption (default, 100, 400, 700)
- - - Annotations (default, 100, 400, 700)
- - - Misc. (default, 100, 400, 700)
- - Font Family (default, sans serif, serif, slab serif)
- - - Title (default, sans serif, serif, slab serif)
- - - Subtitle (default, sans serif, serif, slab serif)
- - - Mark Labels (default, sans serif, serif, slab serif)
- - - Series Labels (default, sans serif, serif, slab serif)
- - - Legend Title (default, sans serif, serif, slab serif)
- - - Legend Labels (default, sans serif, serif, slab serif)
- - - Axis Titles (default, sans serif, serif, slab serif)
- - - Axis Labels (default, sans serif, serif, slab serif)
- - - Caption (default, sans serif, serif, slab serif)
- - - Annotations (default, sans serif, serif, slab serif)
- - - Misc. (default, sans serif, serif, slab serif)
- - Text overflow (default, truncate, ellipses, allow overflow)
- - - Title (default, truncate, ellipses, allow overflow)
- - - Subtitle (default, truncate, ellipses, allow overflow)
- - - Mark Labels (default, truncate, ellipses, allow overflow)
- - - Series Labels (default, truncate, ellipses, allow overflow)
- - - Legend Title (default, truncate, ellipses, allow overflow)
- - - Legend Labels (default, truncate, ellipses, allow overflow)
- - - Axis Titles (default, truncate, ellipses, allow overflow)
- - - Axis Labels (default, truncate, ellipses, allow overflow)
- - - Caption (default, truncate, ellipses, allow overflow)
- - - Annotations (default, truncate, ellipses, allow overflow)
- - - Misc. (default, truncate, ellipses, allow overflow)
- - Horizontal Spacing (default, tight, moderate, wide)
- - - Title (default, tight, moderate, wide)
- - - Subtitle (default, tight, moderate, wide)
- - - Mark Labels (default, tight, moderate, wide)
- - - Series Labels (default, tight, moderate, wide)
- - - Legend Title (default, tight, moderate, wide)
- - - Legend Labels (default, tight, moderate, wide)
- - - Axis Titles (default, tight, moderate, wide)
- - - Axis Labels (default, tight, moderate, wide)
- - - Caption (default, tight, moderate, wide)
- - - Annotations (default, tight, moderate, wide)
- - - Misc. (default, tight, moderate, wide)
- - Vertical Spacing (default, tight, moderate, wide)
- - - Title (default, tight, moderate, wide)
- - - Subtitle (default, tight, moderate, wide)
- - - Mark Labels (default, tight, moderate, wide)
- - - Series Labels (default, tight, moderate, wide)
- - - Legend Title (default, tight, moderate, wide)
- - - Legend Labels (default, tight, moderate, wide)
- - - Axis Titles (default, tight, moderate, wide)
- - - Axis Labels (default, tight, moderate, wide)
- - - Caption (default, tight, moderate, wide)
- - - Annotations (default, tight, moderate, wide)
- - - Misc. (default, tight, moderate, wide)
- - Italics (default, allow, disabled)
- - Alignment (default, left, centered, right)
- - - Title (default, left, centered, right)
- - - Subtitle (default, left, centered, right)
- - - Mark Labels (default, left, centered, right)
- - - Series Labels (default, left, centered, right)
- - - Legend Title (default, left, centered, right)
- - - Legend Labels (default, left, centered, right)
- - - Axis Titles (default, left, centered, right)
- - - Axis Labels (default, left, centered, right)
- - - Caption (default, left, centered, right)
- - - Annotations (default, left, centered, right)
- - - Misc. (default, left, centered, right)
- Color and contrast (default, minimalist, maximalist)
- - Text color (default, black, grey, white, custom)
- - Mark color (default, limited dark, limited white)
- - - Categorical data types (default, limited dark, limited white, custom)
- - - Ordinal data types (default, limited dark, limited white, custom)
- - - Quantitative data types (default, limited dark, limited white, custom)
- - - Non data marks (default, limited dark, limited white, custom)
- - Distinguish without color (default, enabled)
- - - Shapes (default, 1 varied type, different types, custom)
- - - Fill patterns (default, low contrast, high contrast, custom)
- - - Line patterns (default, enabled, custom)
- - - Interaction states (default, patterns, marks, patterns + marks)
- - Text contrast (default, low contrast, high contrast)
- - - Title (default, low contrast, high contrast, custom)
- - - Subtitle (default, low contrast, high contrast, custom)
- - - Mark Labels (default, low contrast, high contrast, custom)
- - - Series Labels (default, low contrast, high contrast, custom)
- - - Legend Title (default, low contrast, high contrast, custom)
- - - Legend Labels (default, low contrast, high contrast, custom)
- - - Axis Titles (default, low contrast, high contrast, custom)
- - - Axis Labels (default, low contrast, high contrast, custom)
- - - Caption (default, low contrast, high contrast, custom)
- - - Annotations (default, low contrast, high contrast, custom)
- - - Misc. (default, low contrast, high contrast, custom)
- - Mark contrast (default, low contrast, high contrast)
- - - Categorical data types (default, low contrast, high contrast)
- - - Ordinal data types (default, low contrast, high contrast)
- - - Quantitative data types (default, low contrast, high contrast)
- - - Non data marks (default, low contrast, high contrast)
- - Mark opacity (default, low, moderate, full)
- - Axis line contrast (default, low contrast, high contrast, custom)
- - Gridline contrast (default, low contrast, high contrast, custom)
- - Mark outline contrast (default, low contrast, high contrast, custom)
- - Text outline contrast (default, low contrast, high contrast, custom)
- - Interaction state contrast (default, low contrast, high contrast, custom)
- - Misc. element contrast (default, low contrast, high contrast, custom)
- Element size (default, smaller, moderate, larger)
- - Bar spacing (default, 0%, 10%, 20%, 30%, 40%, 50%)
- - Lines (default, light, moderate, thick)
- - - Data lines (default, thin, light, moderate, thick, heavy)
- - - Axis lines (default, thin, light, moderate, thick, heavy)
- - - Gridlines (default, thin, light, moderate, thick, heavy)
- - - Outlines (default, thin, light, moderate, thick, heavy)
- - Mark min. size (default, 0, 3px, 10px)
- - - Scaled mark min. (default, 0px to 44px)
- - - Non scaled mark min. (default, 1px to 44px)
- - Interaction target (default, minimal, moderate, large)
- Audio (default, gentle, complex)
- - Sonification duration (default, slow, moderate, fast)
- - Sonification order (default, sequential, simultaneous)
- - Sonification volume (default, low, medium, high)
- - Sonification equalizer (default, low, medium, high)
- - - High pitch volume (default, quiet, low, medium, high, loud)
- - - Middle pitch volume (default, quiet, low, medium, high, loud)
- - - Low pitch volume (default, quiet, low, medium, high, loud)
- - Sonification pitch range (default, small, moderate, full)
- - - Pitch min. (default, c4, c3, c2)
- - - Pitch max. (default, d5, d6, d7)
- - Instruments (default, all sine, all piano, custom)
- - Tempo ticker (default, disabled, enabled)
- - - Tempo ticker volume (default, low, medium, high)
- - - Tempo ticker timing (default, 1/2, 1/3, 1/4)
- Motion (default, disabled, slower, faster)
- Interactivity (default, minimal feedback, high feedback)
- - Pointer focus (default, disabled, on hover, on click)
- - Interaction console (default, show as log, always show)
- - Tooltips (default, show on focus, toggle only)
- - Element selection (default, no confirmation, use confirmation)
- - Filtering (default, no confirmation, use confirmation)
- - Input mapping
- - - Help (default, F1, custom keypress)
- - - Preferences menu (default, Shift+F1, custom keypress)
- - - Activate Hover (default, on focus, custom keypress)
- - - Remove Hover (default, Backspace/on loss of focus, custom keypress)
- - - Select (default, Spacebar/Enter, custom keypress)
- - - Exit and skip chart (default, Escape, custom keypress)
- - - Next element (default, AT right, down, custom keypress)
- - - Previous element (default, AT left, up, custom keypress)
- - - Next across element (default, period, custom keypress)
- - - Previous across element (default, comma, custom keypress)
- - - Parent element (default, AT up, page up, custom keypress)
- - - First child element (default, AT down, page down, custom keypress)`
const parsePreferences = (str) => {
    const lines = str.trim().split('\n');
    let root = [];
  
    lines.forEach(line => {
        const indentLevel = (line.match(/-/g) || []).length;
    
        const cleanLine = line.replaceAll('- ',''); // Remove '- ' from the start
    
        const [name, optionsStr] = cleanLine.split(' (');
    
        const options = optionsStr ? optionsStr.slice(0, -1).split(', ') : [];
  
        let newItem = {
            name: name.trim(),
            domName: name.trim().toLowerCase().replace(/\s+/g, '-'),
            options: options,
            available: false,
            parent: null,
            children: []
        };
  
        if (indentLevel === 1) {
            if (menuState[newItem.name] && menuState[newItem.name].available) {
                newItem.available = true
            } else {
                menuState[newItem.name] = {
                    available: false,
                    value: "",
                    enabled: false
                }
            }
            root.push(newItem);
        } else {
            const parent = root[root.length - 1];
            // if (!parent.children) parent.children = [];
            let target = parent;
            let menuStateTarget = menuState[parent.name];
            if (indentLevel === 3) {
                target = parent.children[parent.children.length - 1];
                menuStateTarget = menuState[parent.name][parent.children[parent.children.length - 1].name]
            }
            if (menuStateTarget.available && menuStateTarget[newItem.name] && menuStateTarget[newItem.name].available) {
                newItem.available = true
            } else {
                menuStateTarget[newItem.name] = {
                    available: false,
                    value: "",
                    enabled: false
                }
            }
            newItem.parent = target
            target.children.push(newItem)
        }
    });
    return root;
}