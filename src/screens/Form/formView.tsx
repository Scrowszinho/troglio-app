import React, { useState } from 'react';
import { View } from 'react-native';
import { formStyle } from './style';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { defaultTheme } from '../../theme/default';
import Carousel from 'react-native-snap-carousel';
import { getArrayTypeText } from '../../utils/typeText';

interface FormView {
    value: number;
    setValue: React.Dispatch<React.SetStateAction<number>>;
    isDebit: boolean;
    setIsDebit: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormView = ({ value, setValue, isDebit, setIsDebit }: FormView) => {
    const data = getArrayTypeText();
    function addButon(valueInput: string) {
        setValue(+`${value}${valueInput}`);
    };

    function deleteLastDigit() {
        if (!value) return;
        const strin = `${value}`;
        setValue(+strin.slice(0, -1));
    }
    return (
        <View style={formStyle.back}>
            <View style={[formStyle.shower, { backgroundColor: isDebit ? defaultTheme.colors.darkRed : defaultTheme.colors.greenHigh }]}>
                <Text style={formStyle.showerText}>R${value}</Text>
            </View>
            <View>
            </View>
            <View style={formStyle.grid}>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) =>
                        <TouchableOpacity
                            onPress={() => addButon(value.toString())}
                            style={formStyle.button}>
                            <Text style={formStyle.text}>
                                {value}
                            </Text>
                        </TouchableOpacity>)
                }
                <TouchableOpacity
                    onPress={() => deleteLastDigit()}
                    style={formStyle.button}>
                    <FontAwesome5 color={'#413E52'} name={'backspace'} size={24} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => addButon('0')}
                    style={formStyle.button}>
                    <Text style={formStyle.text}>
                        0
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={formStyle.button}>
                    <FontAwesome5 color={defaultTheme.colors.greenHigh} name={'check-circle'} size={24} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default FormView;