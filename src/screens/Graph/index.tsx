import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
// import { styles } from './styles';
import axios from '../../utils/axios';
import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { IDebitData, IIncomingsData } from '../../interfaces/home.interface';
import { getColorsByType } from '../../theme/default';

function getMonthName(monthNumber: number) {
    const date = new Date();
    date.setMonth(monthNumber - 1);
    const dateLocale = date.toLocaleString('pt-BR', { month: 'long' });

    return dateLocale.substring(0, 1).toUpperCase() + dateLocale.substring(1, dateLocale.length).toLowerCase();
}

const Graph = () => {
    const [month, setMonth] = useState<number>(8);
    const [error, setError] = useState<string>('');
    const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
    const [debits, setDebits] = useState<IDebitData>();
    // const [total, setTotal] = useState<number>(0);
    const [incomings, setIncomings] = useState<IIncomingsData>();
    const [openFilter, setOpenFilter] = useState(false);

    useEffect(() => {
        axios.post('/debits/year', { month: 8, year: 2023 })
            .then((response) => {
                console.log(response.data);

                setDebits(response.data);
                // setTotal(response.data.total);
            })
            .catch((error: AxiosError<any>) => {
                setError(error.response?.data?.errors[0]);
                setOpenSnackbar(true);
            });
        // axios.post('/incomings/year', { month: 8, year: 2023 })
        // 	.then((response) => {
        // 		setIncomings(response.data);
        // 	})
        // 	.catch((error: AxiosError<any>) => {				
        // 		setError(error.response?.data?.errors[0]);
        // 		setOpenSnackbar(true);
        // 	});

    }, []);


    const getDebits = () => {
        if (!debits) return [];

        return debits.debits.map((element) => ({
            name: getMonthName(+element.month),
            population: element.value,
            color: getColorsByType(element.type).color,
            legendFontColor: 'black',
            legendFontSize: 15,
        }));
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.chartContainer}>
                <PieChart
                    data={getDebits()}
                    width={300}
                    height={200}
                    chartConfig={{
                        backgroundGradientFrom: '#1E2923',
                        backgroundGradientTo: '#08130D',
                        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                    }}
                    accessor="population"
                    backgroundColor="transparent"
                    paddingLeft="15"
                    absolute
                />
            </View>
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <Text style={styles.legend}>Legenda:</Text>
                    <Text ></Text>
                    {getDebits().map((data, index) => (
                        <View key={index} style={styles.legendItem}>
                            <Text>{data.name}</Text>
                        </View>
                    ))}
                </View>
                <View style={styles.card}>
                    <Text style={styles.totalLabel}>Total:</Text>
                    <Text style={styles.totalValue}>{debits?.total}</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    chartContainer: {
        marginTop: 20,
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        width: '48%',
    },
    legend: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    totalLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    totalValue: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Graph;