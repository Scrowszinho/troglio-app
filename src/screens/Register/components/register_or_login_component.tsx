import { Text } from '@react-native-material/core';
import { registerStyles } from "../styles";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { RoutesEnum } from '../../../enum/routes.enum';
import { StackRoutesType } from '../../../navigation/stack';
import { INewUser } from 'src/interfaces/user.interface';

interface RegisterOrLogin {
    madeRequest: () => Promise<void>,
}

const RegisterOrLoginComponent = ({madeRequest} : RegisterOrLogin) => {
    const navigation = useNavigation<StackRoutesType>();
    return (
        <View style={[registerStyles.section, registerStyles.registerButtonSection]}>
            <TouchableOpacity
                style={registerStyles.registerButtonStyle}
                onPress={() => madeRequest()}>

                <Text style={registerStyles.registerButtonText}>REGISTRAR</Text>
            </TouchableOpacity>

            <View style={registerStyles.buttonSection}>
                <Text style={[registerStyles.attentionText, {fontWeight: '500'}]}>Já tem uma conta? </Text>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate(RoutesEnum.LOGIN_USER)
                    }}>
                    <Text style={registerStyles.loginButtonStyle}>Entre agora</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default RegisterOrLoginComponent;