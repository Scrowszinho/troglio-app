import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { montFilter } from './style';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { addMonths, format, getMonth } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { defaultTheme } from '../../theme/default';
import { MonthsYearEnumBr } from 'src/enum/months.enum';

const Item = ({ monthLabel, index }: { monthLabel: string, index: number; }) => {
    return (
        <View style={index === 0 ? montFilter.selected : montFilter.noSelected}>
            <Text style={index === 0 ? montFilter.textMonth : montFilter.textMonthUnselected}> {monthLabel} </Text>
        </View>
    );
};

const MonthFilter = (props: any) => {
    // const [currentMonth, setCurrentMonth] = useState(new Date());    
    // const advanceMonth = () => {
    //     setCurrentMonth(addMonths(currentMonth, 1));
    //     props.setMonth(currentMonth)
    //     console.log(getMonth(currentMonth));
    // };

    // const goBackMonth = () => {
    //     setCurrentMonth(addMonths(currentMonth, -1));
    //     console.log(currentMonth);
    //     props.setMonth(currentMonth)
    // };

    // const monthsData = [];
    // const locale = ptBR;
    // for (let i = -1; i <= 1; i++) {
    //     const month = addMonths(currentMonth, i);
    //     monthsData.push({
    //         id: i,
    //         monthLabel: format(month, 'MMMM', { locale }),
    //     });
    // }
    const months = [];
    for (const [key, value] of Object.entries(MonthsYearEnumBr)) {
        months.push(value);
    }

    const [mesSelecionado, setMesSelecionado] = useState(getMonth(new Date()));
    const mesesExibidos = Meses.slice(mesSelecionado - 1, mesSelecionado + 2); // Exibe 3 meses
    
    return (
        <View style={montFilter.container}>
            <TouchableOpacity onPress={goBackMonth}>
                <AntDesign name='left' size={24} color={defaultTheme.colors.greyStrong} />
            </TouchableOpacity>
            <FlatList
                data={monthsData}
                renderItem={({ item }) => <Item monthLabel={item.monthLabel} index={item.id} />}
                horizontal={false}
                style={montFilter.teste}
                numColumns={3}
                snapToInterval={300}
            />
            <TouchableOpacity onPress={advanceMonth}>
                <AntDesign name='right' size={24} color={defaultTheme.colors.greyStrong} />
            </TouchableOpacity>
        </View>
    );
};

export default MonthFilter;