import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { styles } from './styles';
import axios from '../../utils/axios';
import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { IDebitData, IIncomingsData } from '../../interfaces/home.interface';


const Graph = () => {
    const [month, setMonth] = useState<number>(8);
    const [error, setError] = useState<string>('');
    const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
    const [debits, setDebits] = useState<IDebitData>();
    const [incomings, setIncomings] = useState<IIncomingsData>();
    const [openFilter, setOpenFilter] = useState(false);

    useEffect(() => {
        axios.post('/debits/year', { month: 8, year: 2023 })
            .then((response) => {
                setDebits(response.data);
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
   
    const data = [
        {
            name: debits?.debits[0].month,
            population: 10,
            color: 'red',
            legendFontColor: 'black',
            legendFontSize: 15,
        },
        {
            name: 'ssss',
            population: 20,
            color: 'green',
            legendFontColor: 'black',
            legendFontSize: 15,
        },
        {
            name: 'ddd',
            population: 15,
            color: 'blue',
            legendFontColor: 'black',
            legendFontSize: 15,
        },
    ];
    return (
        <SafeAreaView>
            <View>
                <PieChart
                    data={data}
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
        </SafeAreaView>
    );
}

export default Graph;