import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { defaultTheme } from '../../theme/default';
import { button } from './style';

interface ButtonProps {
    onPress: () => void,
    butonStyleType?: 'filled' | 'outline'
    buttonWidth?: number
    label: string
    fontColor?: string
    buttonColor?: string
}

const Button = ({
    onPress,
    label,
    butonStyleType,
    buttonWidth,
    buttonColor,
    fontColor
}: ButtonProps) => {
    return (
        <TouchableOpacity 
        onPress={onPress}
        style={{
            width: 150 || buttonWidth,
            backgroundColor: buttonColor ? buttonColor : butonStyleType === 'outline' ? defaultTheme.colors.white : defaultTheme.colors.green,
            borderWidth: butonStyleType === 'outline' ? 1 : 0,
            ...button.button
        }}>
            <Text style={{
                fontWeight: 'bold',
                color: fontColor ?? defaultTheme.colors.white
            }}>{label}</Text>
        </TouchableOpacity>
    );
}

export default Button;