import { Text } from '@react-native-material/core';
import { registerStyles } from "../styles";
import { View, TouchableOpacity } from "react-native";

const RegisterOrLoginComponent = () => {
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
                        console.log("Botão 'Entre agora' pressionado!");
                    }}>
                    <Text style={registerStyles.loginButtonStyle}>Entre agora</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default RegisterOrLoginComponent;