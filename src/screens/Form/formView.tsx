import React from 'react';
import { View } from 'react-native';
import Select from '../../components/SelectComponent';
import { formStyle } from './style';
import Button from '../../components/Button';
import { defaultTheme } from '../../theme/default';
import DefaultTextInput from '../../components/InputText';
const FormView = () => {
    return (
        <View style={formStyle.back}>
            <Select />
            <View style={formStyle.typeChosen}>
                <Button label='Débito' onPress={()=>console.log(1)} />
                <Button label='Crédito' onPress={()=>console.log(1)} buttonColor={defaultTheme.colors.darkRed} />
            </View>
        </View>
    );
}

export default FormView;