import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { selectDefault } from './style';
import { ActivityIndicator } from '@react-native-material/core';

export interface IPickerOptions {
    value: number,
    label: string;
}

interface SelectDefault {
    data: IPickerOptions[],
    setValue: React.Dispatch<React.SetStateAction<number>>,
    loading: boolean,
    value: number,
}

const SelectDefault = ({ data, setValue, loading, value }: SelectDefault) => {
    return (
        <>
            {
                loading ?

                    <Picker
                        style={selectDefault.select}
                        selectedValue={value}
                        onValueChange={(itemValue: number) => setValue(itemValue)}>
                        {
                            data.map((item, index) => <Picker.Item label={item.label} value={item.value} key={index} />)
                        }

                    </Picker>
                    :
                    <ActivityIndicator size="large" color="error" />
            }
        </>
    );
};

export default SelectDefault;