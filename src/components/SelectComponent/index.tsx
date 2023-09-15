import React, { useRef } from 'react';
import { Picker } from '@react-native-picker/picker';
import { selectDefault } from './style';

const SelectDefault = () => {
    const pickerRef = useRef();

    function open() {
        pickerRef.current.focus();
    }

    function close() {
        pickerRef.current.blur();
    }

    return <Picker
        ref={pickerRef}
        style={selectDefault.select}
        onValueChange={(itemValue, itemIndex) =>
            console.log(itemValue, itemIndex)
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
    </Picker>;
};

export default SelectDefault;