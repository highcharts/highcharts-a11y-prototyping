
function generatePreferencesHTML(preferences, level = 2, parentName = '') {
  let html = '';
  
  preferences.forEach(pref => {
    const headingTag = `h${level}`;
    const nextLevel = level + 1;
    const inputName = pref.domName;
    const children = pref.children && pref.children.length > 0

    const unavailable = pref.available ? "" : "highcharts-hide-unavailable"
    const details = children ? `details class="${unavailable}"` : `div class="highcharts-empty-details ${unavailable}"`
    const summary = children ? "summary" : "div class='highcharts-empty-summary'"

    html += `<div class="highcharts-details-wrapper ${unavailable}"><form>
                <div class="highcharts-menu-column">
                    <div class="highcharts-column-left highcharts-column-level-${level - 1}">
                    <label class="highcharts-menu-checkbox-label highcharts-menu-checkbox-label-${level - 1}" for="${parentName+inputName}">
                        <${headingTag}>${pref.name}<span class="highcharts-menu-hint highcharts-menu-hidden" aria-label="note: at least one child option overrides this setting.">*</span></${headingTag}>
                    </label>
                        
                    <input class="highcharts-menu-checkbox highcharts-menu-hidden-checkbox" type="checkbox" name="${parentName+inputName}" ${unavailable ? 'disabled' : ''}/>
                    </div>
                    <div class="highcharts-menu-slider-line"></div>
                    <div id="${parentName+inputName}-menu" class="highcharts-menu-slider-wrapper highcharts-column-right ${unavailable ? 'highcharts-menu-slider-disabled' : ''}">`;
                
    pref.options.forEach((option, index) => {
        const optionName = `${parentName+inputName}-${option.toLowerCase().replace(/\s+/g, '-')}`;
        allOptionsFlattened[optionName] = {
            name: option,
            domName: option.toLowerCase().replace(/\s+/g, '-'),
            parent: pref,
            parentName,
            inputName
        }
        html += `<div class="highcharts-menu-slider-option"><label for="${optionName}" data-value="${option.toLowerCase()}">
                ${option}
            </label><input type="radio" name="${parentName+inputName}" id="${optionName}" class="highcharts-menu-radio" value="${index}" required="" ${option === 'default' ? 'checked' : ''} ${unavailable ? 'disabled' : ''}></div>`;
    });

    html += `</div></div></form></div><${details}>
        <${summary} class="highcharts-menu-group highcharts-menu-group-${level - 1}">${summary === "summary" ? `Show more ${pref.name.toLowerCase()} options...` : ""}</${summary}>`;
    const newParent = parentName+inputName+'-'
    if (children) {
      html += generatePreferencesHTML(pref.children, nextLevel, newParent);
    }
    
    html += `</${details}>`;
  });

  return html;
}