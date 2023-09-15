import React, { useState } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { formStyle } from './style';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { defaultTheme, getColorsByType } from '../../theme/default';
import { getArrayTypeText } from '../../utils/typeText';
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker';
import axios from '../../utils/axios';
import { IValuesDefault } from '../../interfaces/home.interface';

interface FormView {
    value: number;
    setValue: React.Dispatch<React.SetStateAction<number>>;
    isDebit: boolean;
    setIsDebit: React.Dispatch<React.SetStateAction<boolean>>;
    type: string;
    setType: React.Dispatch<React.SetStateAction<string>>;
    date: string;
    setDate: React.Dispatch<React.SetStateAction<string>>;
}

const FormView = ({ value, setValue, isDebit, setIsDebit, type, setType, date, setDate }: FormView) => {
    const [flip, setFlip] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    function addButon(valueInput: string) {
        setValue(+`${value}${valueInput}`);
    };

    function deleteLastDigit() {
        if (!value) return;
        const strin = `${value}`;
        setValue(+strin.slice(0, -1));
    }

    const makeRegister = async () => {
        const url = isDebit ? '/debits' : '/incomings';
        const data : IValuesDefault = {
            month: new Date(date).getMonth(),
            year: new Date(date).getFullYear(),
            type,
            value
        }
        // axios.post(url , )
        console.log(data);
        
    }
    
    return (
        <SafeAreaView style={formStyle.back}>
            <View style={[formStyle.shower, { backgroundColor: isDebit ? defaultTheme.colors.darkRed : defaultTheme.colors.green }]}>
                <Text style={formStyle.showerText}>R${value}</Text>
            </View>
            <View style={{ flex: 1 }}>
                {!flip ?
                    <>
                        <View style={formStyle.grid}>
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) =>
                                    <TouchableOpacity
                                        key={value.toString()}
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
                                style={formStyle.button}
                                onPress={() => {
                                    if (value) {
                                        setFlip(true);
                                    }
                                }}>
                                <FontAwesome5
                                    color={defaultTheme.colors.green}
                                    name={'check-circle'}
                                    size={24}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={formStyle.row}>
                            <TouchableOpacity
                                style={formStyle.viewIcon}
                                onPress={() => setIsDebit(false)} >
                                <FontAwesome5
                                    color={defaultTheme.colors.mediumGrey}
                                    name={'piggy-bank'}
                                    style={[formStyle.typeSelect, { backgroundColor: !isDebit ? defaultTheme.colors.green : defaultTheme.colors.greyDefault }]}
                                    size={28} />
                                <Text style={{ marginTop: 8 }}>Entradas</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={formStyle.viewIcon}
                                onPress={() => setIsDebit(true)} >
                                <FontAwesome5
                                    color={defaultTheme.colors.mediumGrey}
                                    style={[formStyle.typeSelect, { backgroundColor: isDebit ? defaultTheme.colors.darkRed : defaultTheme.colors.greyDefault }]}
                                    name={'money-bill-wave'}
                                    size={28} />
                                <Text style={{ marginTop: 8 }}>Saidas</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                    :
                    <View style={formStyle.selectType}>
                        <FlatList
                            data={getArrayTypeText(!isDebit)}
                            horizontal={false}
                            numColumns={3}
                            renderItem={({ item }) =>
                                <TouchableOpacity style={formStyle.viewIcon} onPress={({ }) => setType(item.key)}>
                                    <View style={[{ backgroundColor: type === item.key ? getColorsByType(item.key).color : defaultTheme.colors.greyDefault }, formStyle.typeIcon, type === item.key ? formStyle.selected : formStyle.unselected]}>
                                        <FontAwesome5
                                            name={getColorsByType(item.key).icon}
                                            color={defaultTheme.colors.white}
                                            size={28} />
                                    </View>
                                    <Text>{item.value}</Text>
                                </TouchableOpacity>
                            }
                            keyExtractor={item => item.key}
                        />
                        <View style={formStyle.buttonArea}>
                            <TouchableOpacity onPress={() => setFlip(false)}>
                                <FontAwesome5
                                    name={'chevron-left'}
                                    color={defaultTheme.colors.greenHigh}
                                    size={32} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <FontAwesome5
                                    name={'calendar'}
                                    onPress={() => setOpen(true)}
                                    color={defaultTheme.colors.greenHigh}
                                    size={32} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                {
                                    date ?
                                        <FontAwesome5
                                            name={'check-circle'}
                                            onPress={() => makeRegister()}
                                            color={defaultTheme.colors.green}
                                            size={32} />
                                        :
                                        <></>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>
                }
            </View>
            {
                open ?
                    <DatePicker
                        mode='monthYear'
                        selectorStartingYear={new Date().getFullYear()}
                        onMonthYearChange={date => {
                            setOpen(false);
                            console.log(getFormatedDate(new Date(date), 'YYYY-MM-DD'));
                            
                            setDate(date);
                        }}
                        onDateChange={item => console.log(item)}
                    /> :
                    <></>
            }
        </SafeAreaView>
    );
};

export default FormView;