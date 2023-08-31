import { Text } from '@react-native-material/core';
import { loginStyles } from "../styles";
import { View, TouchableOpacity } from "react-native";

const LoginOrRegisterComponent = ({ navigation }: any) => {
    return (
        <View style={[loginStyles.section, loginStyles.loginButtonSection]}>
            <TouchableOpacity
                style={loginStyles.loginButtonStyle}
                onPress={() => { console.log("aaa"); }}>

                <Text style={loginStyles.loginButtonText}
                    onPress={() => navigation.navigator("home")}>ENTRAR</Text>
            </TouchableOpacity>

            <View style={loginStyles.buttonSection}>
                <Text style={loginStyles.attentionText}>Não tem uma conta? </Text>
                
                <TouchableOpacity
                    onPress={() => {
                        console.log("Botão 'Registre agora' pressionado!");
                    }}>
                    <Text style={loginStyles.registerButtonStyle}>Registre agora</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default LoginOrRegisterComponent;