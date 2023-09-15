import { TouchableOpacity, Text, View, Button } from 'react-native';
import { defaultTheme } from '../../theme/default';
import { backdropStyle } from './style';
import { useEffect, useState } from 'react';
import Backdrop from 'react-native-modal';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Spacer } from '@react-native-material/core';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

const BackDropComponent = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [showPicker, setShowPicker] = useState(false);
    const [iconName, setIconName] = useState('plus');
    const [selectedMonth, setSelectedMonth] = useState(null);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const togglePicker = () => {
        setShowPicker(!showPicker);
        setIconName(showPicker ? 'plus' : 'minus');
    };

    return (
        <View>
            <TouchableOpacity onPress={toggleModal}>
                <FontAwesome5 name={'filter'} size={24} color={defaultTheme.colors.white} />

                <Backdrop
                    isVisible={isModalVisible}
                    onBackdropPress={toggleModal}
                    onBackButtonPress={toggleModal}
                    backdropOpacity={0.5}
                    animationIn="slideInUp"
                    animationOut="slideOutDown"
                    style={backdropStyle.modal}
                >
                    <View style={backdropStyle.modalContainer}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ paddingRight: 10 }}>
                                <Feather name="filter" size={24} color="black" />
                            </View>
                            <Text style={{ fontSize: 15 }}>FILTROS</Text>
                            <Spacer></Spacer>
                            <Ionicons name="close" size={24} color="black" onPress={toggleModal} />
                        </View>

                        
                        <View style={backdropStyle.section}>
                            <Text style={backdropStyle.sectionTitle}>POR MÊS</Text>
                            <Spacer></Spacer>
                            <View>
                                <TouchableOpacity onPress={togglePicker}>
                                    <Feather name={iconName} size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                            {showPicker && (
                                <View style={backdropStyle.pickerStyle}>
                                    <Picker
                                        selectedValue={selectedMonth}
                                        onValueChange={(itemValue, itemIndex) => setSelectedMonth(itemValue)}
                                    >
                                        {_months.map((month, index) => (
                                            <Picker.Item key={index} label={month} value={month} />
                                        ))}
                                    </Picker>
                                </View>
                            )}
                                    </View>

                                    {/*  
                        <View style={{ flexDirection: 'row', paddingTop: 24 }}>
                            <Text style={{ fontSize: 15 }}>POR ANO</Text>
                            <Spacer></Spacer>
                            <View>
                                <Feather name="plus" size={24} color="black" />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', paddingTop: 24 }}>
                            <Text style={{ fontSize: 15 }}>OUTROS</Text>
                            <Spacer></Spacer>
                            <View>
                                <Feather name="plus" size={24} color="black" />
                            </View>
                        </View> */}

                                </View>
                </Backdrop>
                    </TouchableOpacity>
                </View>
                );
}

                const _months = [
                'Janeiro',
                'Fevereiro',
                'Março',
                'Abril',
                'Maio',
                'Junho',
                'Julho',
                'Agosto',
                'Setembro',
                'Outubro',
                'Novembro',
                'Dezembro',
                ];

                export default BackDropComponent;