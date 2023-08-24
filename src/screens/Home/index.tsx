import { SafeAreaView } from 'react-native';
import HomeList from '../../components/HomeList';
import { IHomeList } from '../../components/HomeList/interface';

const Home = () => {
    const dataa: IHomeList[] = [{icon: 'light-bulb',title:'Home', type: 'CREDIT', value:11},{icon: 'water',title:'teste', type: 'CREDIT', value:11}];
    return (
        <SafeAreaView>
            <HomeList data={dataa} />
        </SafeAreaView>
    )
}
export default Home;