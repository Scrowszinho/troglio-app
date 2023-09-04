import { SafeAreaView } from 'react-native';
import HomeList from '../../components/HomeList';
import { IHomeList } from '../../components/HomeList/interface';
import MonthFilter from '../../components/MonthFilter';
import { useEffect, useState } from 'react';
import { IDebitData } from 'src/interfaces/home.interface';
import ttt from '../../utils/axios';

const Home = () => {
	const dataa: IHomeList[] = [{ icon: 'light-bulb', title: 'Home', type: 'CREDIT', value: 11 }, { icon: 'water', title: 'ttt', type: 'CREDIT', value: 11 }];
	const [data, setData] = useState<IDebitData>();

	useEffect(() => {
		ttt.get('/endpoint')
			.then((response) => {
				console.log(response);

			})
			.catch((error) => {
				console.log(error);

			});
	}, []);
	return (
		<SafeAreaView>
			<MonthFilter />
			<HomeList data={dataa} />
		</SafeAreaView>
	);
};
export default Home;