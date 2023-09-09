import { SafeAreaView, View, TouchableOpacity, Text } from 'react-native';
import HomeList from '../../components/HomeList';
import { IHomeList } from '../../components/HomeList/interface';
import { useEffect, useState } from 'react';
import { IDebitData } from '../../interfaces/home.interface';
import axios from '../../utils/axios';
import { ActivityIndicator } from "@react-native-material/core";
import { home } from './style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { defaultTheme } from '../../theme/default';
const Home = () => {
	const [month, setMonth] = useState<number>(8);
	const [data, setData] = useState<IDebitData>();
	const [openFilter, setOpenFilter] = useState(false);
	useEffect(() => {
		axios.post('/debits/year', { month: 8, year: 2023 })
			.then((response) => {
				setData(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	return (
		<SafeAreaView style={home.container}>
			<View style={home.topInformations}>
				<TouchableOpacity onPress={() => setOpenFilter(!openFilter)}>
					<FontAwesome5 name={'filter'} size={24} color={defaultTheme.colors.white} />
				</TouchableOpacity>
				<Text>Jan</Text>
				<View></View>
			</View>
			{
				data ?
					<>
						<Text style={home.text}>Débitos</Text>
						<HomeList data={data} openFilter={openFilter} />
					</>
					:
					<ActivityIndicator size="small" color="error" />
			}
		</SafeAreaView>
	);
};
export default Home;