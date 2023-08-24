import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { defaultTheme } from '../../theme/default';
import { addButton } from './style';

const ButtonTeste = () => {
    return (
        <TouchableOpacity style={addButton.container}>
            <AntDesign style={addButton.icon} name='plus' size={24} color={defaultTheme.colors.greyStrong} />
        </TouchableOpacity>
    );
}

export default ButtonTeste;