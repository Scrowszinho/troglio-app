import { SafeAreaView, View, TouchableOpacity, Text } from 'react-native';
import HomeList from '../../components/HomeList';
import { IHomeList } from '../../components/HomeList/interface';
import { useEffect, useState } from 'react';
import { IDebitData } from 'src/interfaces/home.interface';
import axios from '../../utils/axios';
import { ActivityIndicator } from "@react-native-material/core";
import { saveItemToStorage } from '../../utils/storage';
import { DefaultStorageEnum } from '../../enum/default-storage.enum';
import { home } from './style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { defaultTheme } from '../../theme/default';
const Home = () => {
	const dataa: IHomeList[] = [{ icon: 'light-bulb', title: 'Home', type: 'CREDIT', value: 11 }, { icon: 'water', title: 'axios', type: 'CREDIT', value: 11 }];
	const [month, setMonth] = useState<number>(8);
	const [data, setData] = useState<IDebitData>();
	const [openFilter, setOpenFilter] = useState(false);
	saveItemToStorage(DefaultStorageEnum.APP_USER_TOKEN, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjk0MTMzMjg3LCJleHAiOjE2OTQxNTQ4ODd9.Ojs3iz20XfDDbtHu6fuBWttm0OxZmidVQWiitGkOGsk');
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