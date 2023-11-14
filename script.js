function generateColorVariations(baseColor) {
    function lightenColor(color, factor) {
      const r = Math.min(255, color.r + (255 - color.r) * factor);
      const g = Math.min(255, color.g + (255 - color.g) * factor);
      const b = Math.min(255, color.b + (255 - color.b) * factor);
      return `#${Math.round(r).toString(16).padStart(2, '0')}${Math.round(g).toString(16).padStart(2, '0')}${Math.round(b).toString(16).padStart(2, '0')}`;
    }

    function darkenColor(color, factor) {
      const r = color.r * (1 - factor);
      const g = color.g * (1 - factor);
      const b = color.b * (1 - factor);
      return `#${Math.round(r).toString(16).padStart(2, '0')}${Math.round(g).toString(16).padStart(2, '0')}${Math.round(b).toString(16).padStart(2, '0')}`;
    }

    const color = {
      r: parseInt(baseColor.slice(1, 3), 16),
      g: parseInt(baseColor.slice(3, 5), 16),
      b: parseInt(baseColor.slice(5, 7), 16),
    };

    const colorValues = {
      50: lightenColor(color, 0.9),
      100: lightenColor(color, 0.8),
      200: lightenColor(color, 0.6),
      300: lightenColor(color, 0.4),
      400: lightenColor(color, 0.2),
      500: baseColor,
      600: darkenColor(color, 0.2),
      700: darkenColor(color, 0.4),
      800: darkenColor(color, 0.6),
      900: darkenColor(color, 0.8),
    };

    return colorValues;
}

function drawColorPalette(colors) {
const canvas = document.getElementById('colorPalette');
const ctx = canvas.getContext('2d');

const colorKeys = Object.keys(colors);

const rectWidth = canvas.width / colorKeys.length;

for (let i = 0; i < colorKeys.length; i++) {
    const color = colors[colorKeys[i]];
    ctx.fillStyle = color;
    ctx.fillRect(i * rectWidth, 0, rectWidth, canvas.height);
}
}

function updatePalette() {
    let primaryColor = document.getElementById('primaryColorInput').value;
    console.log();
    if(primaryColor.length == 0){
        primaryColor = "#FA5338"
    }

    const colorVariations = generateColorVariations(primaryColor);

    drawColorPalette(colorVariations);
}

document.getElementById('generatePaletteButton').addEventListener('click', updatePalette);
updatePalette();
