import { FlatList, Text, View } from 'react-native';
import { IHomeListCalc } from './interface';
import { homeList } from './style';
import { useState } from 'react';
import { getColorsByType } from '../../theme/default';
import { IDebitData, IIncomingsData, ITreatValues } from '../../interfaces/home.interface';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { getTypeText, getTypeTextIncoming } from '../../utils/typeText';

interface HomeList {
    data: ITreatValues,
    isIncoming?: boolean
}

const Item = ({ data, isIncoming }: HomeList) => {
    return (
        <View style={homeList.item}>
            <View style={[homeList.icon, { backgroundColor: data.icon?.color }]}>
                <FontAwesome5 name={data.icon?.icon} size={28} style={[homeList.listIcon,]} />
            </View>
            <View style={homeList.boxText}>
                <View style={homeList.boxTitle}>
                    <Text style={homeList.title}>{data.title}</Text>
                    <Text style={homeList.subtitle}>{isIncoming ? 'Gastos' : 'Ganhos'}</Text>
                </View>
                <Text style={homeList.valueText}>
                    {data.value.toFixed(2).replace(".", ",")}
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
                    <Text style={homeList.titleCalc1}>{(data.credits).toFixed(2).replace(".", ",")}</Text>
                    <Text style={homeList.subtitleCalc}>receitas</Text>
                </View>
                <View style={homeList.box}>
                    <Text style={homeList.titleCalc2}>{(data.debits).toFixed(2).replace(".", ",")}</Text>
                    <Text style={homeList.subtitleCalc}>despesas</Text>
                </View>
                <View style={homeList.box}>
                    <Text style={homeList.titleCalc3}>{(data.credits - data.debits).toFixed(2).replace(".", ",")}</Text>
                    <Text style={homeList.subtitleCalc}>saldo</Text>
                </View>
            </View>
        </View>
    );
};

const HomeList = ({ data, incomings }: { data?: IDebitData, incomings?: IIncomingsData }) => {
    const [calcValues, setCalcValues] = useState<IHomeListCalc>({ credits: 0, debits: 0 });
    const treatData: ITreatValues[] = [];
    const treatDataIncomings: ITreatValues[] = [];
    if(data)
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
        });
    });
    if(incomings)
    incomings.incomings.forEach(item => {
        treatDataIncomings.push({
            id: item.id,
            month: item.month,
            type: item.type,
            value: item.value,
            year: item.year,
            userId: item.userId,
            title: getTypeTextIncoming(item.type),
            icon: getColorsByType(item.type)
        });
    });
    return (
        <>
        <Text style={homeList.textTitle}>Entradas</Text>
        {
            data ?
            <FlatList
            data={treatData}
            renderItem={({ item }) => <Item data={item} />}
            keyExtractor={item => item.id.toString()}
            />
            : <></>
        }
        <Text style={homeList.textTitle}>Saídas</Text>
        {
            incomings ?
            <FlatList
            data={treatDataIncomings}
            renderItem={({ item }) => <Item data={item} isIncoming={true} />}
            keyExtractor={item => item.id.toString()}
            /> 
            : <></>
        }
            <CalcArea data={{ debits: data?.total ?? 0, credits: incomings?.total ?? 0 }} />
        </>
    );
};

export default HomeList;