import { Feather, SimpleLineIcons, FontAwesome } from '@expo/vector-icons';
import { Text } from '@react-native-material/core';
import { View, TextInput } from "react-native";
import { registerStyles } from "../styles";
import { useState } from 'react';

const RegisterFormComponent = () => {
    const [password, setPassword] = useState(true);

    return (
        <View style={registerStyles.section}>
            <Text style={registerStyles.attentionText}>Crie sua conta</Text>

            <View style={registerStyles.form}>
                <FontAwesome name="user-o" size={16} style={registerStyles.icon} />
                <TextInput
                    style={registerStyles.textInputStyle}
                    placeholder="Nome"
                />
            </View>

            <View style={registerStyles.form}>
                <Feather name="mail" size={16} style={registerStyles.icon} />
                <TextInput
                    style={registerStyles.textInputStyle}
                    placeholder="Email"
                />
            </View>

            <View style={registerStyles.form}>
                <SimpleLineIcons name="lock" size={16} style={registerStyles.icon} />
                <TextInput
                    style={registerStyles.textInputStyle}
                    placeholder="Senha"
                    secureTextEntry={password}
                />
                <Feather
                    name={password ? "eye-off" : "eye"}
                    size={20}
                    style={registerStyles.icon}
                    onPress={() => setPassword(!password)}
                />
            </View>
        </View>
    );
}

export default RegisterFormComponent;