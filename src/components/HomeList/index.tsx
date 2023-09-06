import { FlatList, Text, View } from 'react-native';
import { IHomeList, IHomeListCalc } from './interface';
import { homeList } from './style';
import { useState } from 'react';
import { getColorsByType } from '../../theme/default';
import { IDebitData, ITreatValues } from 'src/interfaces/home.interface';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { getTypeText } from '../../utils/typeText';

const Item = ({ data }: { data: ITreatValues }) => {
    return (
        <View style={homeList.item}>
            <View style={[homeList.icon, { backgroundColor: data.icon?.color }]}>
                <FontAwesome5 name={data.icon?.icon} size={28} style={[homeList.listIcon, ]} />
            </View>
            <View style={homeList.boxText}>
                <View style={homeList.boxTitle}>
                    <Text style={homeList.title}>{data.title}</Text>
                    <Text style={homeList.subtitle}>{data.type = 'DEBIT' ? 'Gastos' : 'Ganhos'}</Text>
                </View>
                <Text style={homeList.valueText}>
                    {data.value}
                </Text>
            </View>
        </View>
    );
};

const CalcArea = ({ data }: { data: IHomeListCalc; }) => {
    return (
        <View style={homeList.spacer}>
            <View style={homeList.calcArea}>
                <View style={homeList.box}>
                    <Text style={homeList.titleCalc1}>{data.credits}</Text>
                    <Text style={homeList.subtitleCalc}>receitas</Text>
                </View>
                <View style={homeList.box}>
                    <Text style={homeList.titleCalc2}>{data.debits}</Text>
                    <Text style={homeList.subtitleCalc}>despesas</Text>
                </View>
                <View style={homeList.box}>
                    <Text style={homeList.titleCalc3}>{data.credits - data.debits}</Text>
                    <Text style={homeList.subtitleCalc}>saldo</Text>
                </View>
            </View>
        </View>
    );
};

const HomeList = ({ data }: { data: IDebitData }) => {
    const [calcValues, setCalcValues] = useState<IHomeListCalc>({credits: 0, debits: 0});
    const treatData: ITreatValues[] = [];
    data.debits.forEach(item => {
        treatData.push({
            id: item.id,
            month: item.month,
            type: item.type,
            value: item.value,
            year: item.year,
            userId: item.userId,
            title: getTypeText(item.type),
            icon: getColorsByType(item.type)
        })
    });
    return (
        <>
            <FlatList
                data={treatData}
                renderItem={({ item }) => <Item data={item} />}
                keyExtractor={item => item.id.toString()}
            />
            <CalcArea data={calcValues} />
        </>
    );
};

export default HomeList;