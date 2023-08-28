export const defaultTheme = {
    colors: {
        green: '#17C74E',
        grey: '#EFEFEB',
        mediumGrey: '#E7E7E7',
        greyStrong: '#B1B2AD',
        red: '#D89498',
        blue: '#6E90E7',
        white: '#FFFFFF',
    },
    colorsLogo: {
        first: '#70C2D8',
        second: '#C3373A'
    },
    textInputColor: {
        background: '#F7F7F7',
    }
}

export function generatePastelColor() {
    const hue = Math.floor(Math.random() * 360);
    const saturation = 25 + Math.floor(Math.random() * 25);
    const lightness = 70 + Math.floor(Math.random() * 10);
  
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }
  