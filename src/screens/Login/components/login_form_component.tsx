import { Feather, SimpleLineIcons } from '@expo/vector-icons';
import { Text } from '@react-native-material/core';
import { View, TextInput } from "react-native";
import { loginStyles } from "../styles";

const LoginFormComponent = () => {
    return (
        <View style={loginStyles.section}>
            <Text style={loginStyles.attentionText}>Acesse sua conta</Text>

            <View style={loginStyles.form}>
                <Feather name="mail" size={16} style={loginStyles.icon} />
                <TextInput
                    style={loginStyles.textInputStyle}
                    placeholder="Email"
                />
            </View>

            <View style={loginStyles.form}>
                <SimpleLineIcons name="lock" size={16} style={loginStyles.icon} />
                <TextInput
                    style={loginStyles.textInputStyle}
                    placeholder="Senha"
                />
            </View>
        </View>
    );
}

export default LoginFormComponent;