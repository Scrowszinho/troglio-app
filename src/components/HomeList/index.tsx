import { FlatList, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { IHomeList } from './interface';
import { homeList } from './style';
import { useState } from 'react';
import { generatePastelColor } from '../../theme/default';

const Item = ({ data }: { data: IHomeList; }) => {
    return (
        <View style={homeList.item}>
            <Entypo name={data.icon} size={28} style={[homeList.listIcon, { backgroundColor: data.color }]} />
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

const CalcArea = () => {
    return (
        <View style={homeList.spacer}>
        <View style={homeList.calcArea}>
            <View style={homeList.box}>
                <Text style={homeList.titleCalc1}>{22}</Text>
                <Text style={homeList.subtitleCalc}>receitas</Text>
            </View>
            <View style={homeList.box}>
                <Text style={homeList.titleCalc2}>{22}</Text>
                <Text style={homeList.subtitleCalc}>despesas</Text>
            </View>
            <View style={homeList.box}>
                <Text style={homeList.titleCalc3}>{22}</Text>
                <Text style={homeList.subtitleCalc}>saldo</Text>
            </View>
        </View>
        </View>
    );
};

const HomeList = ({ data }: { data: IHomeList[]; }) => {
    const coloredData = data.map(item => ({
        ...item,
        color: generatePastelColor(),
      }));
    return (
        <>
            <FlatList
                data={coloredData}
                renderItem={({ item }) => <Item data={item} />}
                keyExtractor={item => item.title}
            />
            <CalcArea />

        </>
    );
};

export default HomeList;