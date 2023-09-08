import { DefaultTextEnEnum } from "../enum/default-text.enum";

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

export function getColorsByType(type: string): {color: string, icon: string} {
    let color = '#BBCFBF', icon = 'coins';
    if(type === DefaultTextEnEnum.WATER) {
        color = '#65CBE9';
        icon = 'water';
    } else if (type === DefaultTextEnEnum.ENERGY) {
        color = '#F7DF65';
        icon = 'bolt';
    } else if (type === DefaultTextEnEnum.RENT) {
        color = '#6B74F7';
        icon = 'bolt';
    } else if (type === DefaultTextEnEnum.PROLAB) {
        color = '#BBCFBF';
        icon = 'hand-holding-usd';
    }
    else if (type === DefaultTextEnEnum.HONOR) {
        color = '#AFE5AA';
        icon = 'file-invoice-dollar';
    }
    else if (type === DefaultTextEnEnum.SALARY) {
        color = '#76826D';
        icon = 'money-check';
    }
    else if (type === DefaultTextEnEnum.SIMPLE) {
        color = '#E5DBFF';
        icon = 'coins';
    }
    else if (type === DefaultTextEnEnum.FGTS) {
        color = '#E5DBFF';
        icon = 'coins';
    }
    else if (type === DefaultTextEnEnum.IRRF) {
        color = '#E5DBFF';
        icon = 'coins';
    }
    else if (type === DefaultTextEnEnum.ICMS) {
        color = '#E5DBFF';
        icon = 'coins';
    }
    else if (type === DefaultTextEnEnum.OTHERS) {
        color = '#E5DBFF';
        icon = 'coins';
    }
    return {
        color,
        icon
    }
}
  