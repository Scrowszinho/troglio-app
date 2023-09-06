import { SafeAreaView } from 'react-native';
import HomeList from '../../components/HomeList';
import { IHomeList } from '../../components/HomeList/interface';
import MonthFilter from '../../components/MonthFilter';
import { useEffect, useState } from 'react';
import { IDebitData } from 'src/interfaces/home.interface';
import axios from '../../utils/axios';
import { saveItemToStorage } from '../../utils/storage';
import { DefaultStorageEnum } from '../../enum/default-storage.enum';
import { getMonth } from 'date-fns';

const Home = () => {
	const dataa: IHomeList[] = [{ icon: 'light-bulb', title: 'Home', type: 'CREDIT', value: 11 }, { icon: 'water', title: 'axios', type: 'CREDIT', value: 11 }];
	const [month, setMonth] = useState<number>(8);
	const [data, setData] = useState<IDebitData>();
	saveItemToStorage(DefaultStorageEnum.APP_USER_TOKEN, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjk0MDQyNDA2LCJleHAiOjE2OTQwNjQwMDZ9.xDxoLQ7Y7Vl1UDKxUC9EKcapvfTjQIkVMZ9G_7bjLIw');
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
		<SafeAreaView>
			<MonthFilter  />
			{
				data ?
				<HomeList data={data} />
				:
				<></>
			}
		</SafeAreaView>
	);
};
export default Home;