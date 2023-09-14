import { Text } from '@react-native-material/core';
import { registerStyles } from "../styles";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const RegisterOrLoginComponent = () => {
    const navigation = useNavigation();
    return (
        <View style={[registerStyles.section, registerStyles.registerButtonSection]}>
            <TouchableOpacity
                style={registerStyles.registerButtonStyle}
                onPress={() => { console.log("aaa"); }}>

                <Text style={registerStyles.registerButtonText}>REGISTRAR</Text>
            </TouchableOpacity>

            <View style={registerStyles.buttonSection}>
                <Text style={[registerStyles.attentionText, {fontWeight: '500'}]}>Já tem uma conta? </Text>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Login')
                    }}>
                    <Text style={registerStyles.loginButtonStyle}>Entre agora</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default RegisterOrLoginComponent;