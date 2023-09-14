import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { defaultTheme } from '../../theme/default';
import { addButton } from './style';
import { useNavigation } from '@react-navigation/native';
import { RoutesEnum } from '../../enum/routes.enum';

const ButtonTeste = () => {
    const navigation = useNavigation();

    const navigateToProfile = () => {
      navigation.navigate(RoutesEnum.FORM_REGISTER);
    };
    return (
        <TouchableOpacity style={addButton.container} onPress={navigateToProfile}>
            <AntDesign style={addButton.icon} name='plus' size={24} color={defaultTheme.colors.greyStrong} />
        </TouchableOpacity>
    );
}

export default ButtonTeste;