let colorMap = {
  'Geothermal': "#009c00", 
  'Solar': "#009c00", 
  'Wind': "#009c00", 
  'Hydro': "#009c00", 
  'Biomass': "#009c00", 
  'Nuclear': "#1a8dff", 
  'Coal': "#989898", 
  'Natural Gas': "#1a8dff", 
  'Petroleum': "#989898"
}
const componentToHex = (c) => {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

const rgbToHex = (r, g, b) => {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

const hexToRgb = (hex) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}