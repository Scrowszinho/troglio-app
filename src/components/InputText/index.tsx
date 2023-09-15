import React from 'react';
import { KeyboardType, StyleProp, View, ViewStyle } from 'react-native';
import { TextInput, TextInputProps } from "@react-native-material/core";

interface InputTextProps extends TextInputProps {
    validateField?: (value: string) => boolean;
    keyBoardType?: KeyboardType;
    inputId: string;
    label: string;
    placeholder?: string;
    containerStyle?: StyleProp<ViewStyle>;
    isRequired?: boolean;
    value?: string
    errorMessage?: string;
    variant: 'filled' | 'outlined' | 'standard';
}

const DefaultTextInput = (props: InputTextProps) => {
    return (
        <View style={props.containerStyle}>
            <TextInput
                label={props.label}
                variant={props.variant}
                id={props.inputId}
                keyboardType={props.keyBoardType}
                value={props.value}
                maxLength={props.maxLength}
                onChange={props.onChange}
            />
        </View>
    );
};

export default DefaultTextInput;