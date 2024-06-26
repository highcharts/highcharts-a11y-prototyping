function generatePreferencesHTML(preferences, level = 2) {
  let html = '';
  
  preferences.forEach(pref => {
    const headingTag = `h${level}`;
    const nextLevel = level + 1;
    const inputName = pref.name.toLowerCase().replace(/\s+/g, '-');
    
    html += `<details>
      <summary class="highcharts-menu-group highcharts-menu-group-${level - 1}">
        <${headingTag}>${pref.name}<span class="highcharts-menu-hint highcharts-menu-hidden">*</span></${headingTag}>
      </summary>`;
    
    if (pref.children && pref.children.length > 0) {
      html += generatePreferencesHTML(pref.children, nextLevel);
    }
    
    html += `<form>
      <div class="highcharts-menu-column">
        <div class="highcharts-column-left">
          <label class="highcharts-menu-checkbox-label-${level - 1}" for="${inputName}" aria-label="Enable ${pref.name}">${pref.name}<span class="highcharts-menu-indeterminant highcharts-menu-hidden">, note: at least one child option overrides this setting.</span></label>
          <input class="highcharts-menu-checkbox" type="checkbox" name="${inputName}-enabled"/>
        </div>
        <div class="highcharts-menu-slider-wrapper highcharts-column-right">
          <div class="highcharts-menu-slider-line"></div>`;
    
    pref.options.forEach((option, index) => {
      const optionName = `${inputName}-${option.toLowerCase().replace(/\s+/g, '-')}`;
      html += `<label for="${optionName}" data-value="${option.toLowerCase()}">${option}</label>
          <input type="radio" name="${optionName}" id="${optionName}" value="${index}" required="" disabled>`;
    });
    
    html += `</div>
      </div>
    </form>`;
    
    html += '</details>';
  });

  return html;
}