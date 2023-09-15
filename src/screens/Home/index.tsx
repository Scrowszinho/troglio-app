import { SafeAreaView, View, TouchableOpacity, Text, Button } from 'react-native';
import HomeList from '../../components/HomeList';
import { useEffect, useState } from 'react';
import { IDebitData, IIncomingsData } from '../../interfaces/home.interface';
import axios from '../../utils/axios';
import { ActivityIndicator, Snackbar } from "@react-native-material/core";
import { home } from './style';
import Backdrop from '../../components/BackDrop/index';
import { AxiosError } from 'axios';

const Home = () => {
	const [error, setError] = useState<string>('');
	const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
	const [debits, setDebits] = useState<IDebitData>();
	const [incomings, setIncomings] = useState<IIncomingsData>();
	useEffect(() => {
		axios.post('/debits/year', { month: 8, year: 2023 })
			.then((response) => {				
				setDebits(response.data);
			})
			.catch((error: AxiosError<any>) => {
				setError(error.response?.data?.errors[0]);
				setOpenSnackbar(true);
			});
		axios.post('/incomings/year', { month: 8, year: 2023 })
			.then((response) => {
				setIncomings(response.data);				
			})
			.catch((error: AxiosError<any>) => {								
				setError(error.response?.data?.errors[0]);
				setOpenSnackbar(true);
			});
	}, []);
	
	return (
		<SafeAreaView>
			<View style={home.topInformations}>
				<Backdrop />
				<Text>Jan</Text>
				<View></View>
			</View>
			{
				debits && incomings ?
					<>
						<HomeList incomings={incomings} data={debits} />
					</>
					:
					<View style={home.loadingInfo}>
						<ActivityIndicator size="large" color="error" />
					</View>
			}
			{
				openSnackbar ?
				<Snackbar
						message={error}
						action={<Button variant="text" title="Ok" color="#BB86FC" compact onPress={() => setOpenSnackbar(false)} />}
						style={{ position: "absolute", start: 16, end: 16, bottom: 16 }}
					/>
				:
				<></>
			}
		</SafeAreaView>
	);
};
export default Home;