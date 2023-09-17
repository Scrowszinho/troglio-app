import { Feather, SimpleLineIcons, FontAwesome } from '@expo/vector-icons';
import { Text, select } from '@react-native-material/core';
import { View, TextInput } from "react-native";
import { registerStyles } from "../styles";
import { INewUser } from 'src/interfaces/user.interface';
import CompanySelect from '../../../components/CompanySelect';

interface RegisterUser {
    password: boolean,
    setPassword: React.Dispatch<React.SetStateAction<boolean>>,
    newUser: INewUser,
    select: number,
    setNewUser: React.Dispatch<React.SetStateAction<INewUser>>,
    setSelect: React.Dispatch<React.SetStateAction<number>>,
}

const RegisterFormComponent = ({ password, setPassword, setNewUser, newUser, setSelect, select }: RegisterUser) => {

    return (
        <View style={registerStyles.section}>
            <Text style={registerStyles.attentionText}>Crie sua conta</Text>

            <View style={registerStyles.form}>
                <FontAwesome name="user-o" size={16} style={registerStyles.icon} />
                <TextInput
                    value={newUser.name}
                    onChangeText={text => setNewUser({ ...newUser, name: text })}
                    style={registerStyles.textInputStyle}
                    placeholder="Nome"
                />
            </View>

            <View style={registerStyles.form}>
                <Feather name="mail" size={16} style={registerStyles.icon} />
                <TextInput
                  value={newUser.email}
                  onChangeText={text => setNewUser({ ...newUser, email: text })}
                    style={registerStyles.textInputStyle}
                    placeholder="Email"
                />
            </View>

            <View style={registerStyles.form}>
                <SimpleLineIcons name="lock" size={16} style={registerStyles.icon} />
                <TextInput
                    style={registerStyles.textInputStyle}
                    value={newUser.password}
                    onChangeText={text => setNewUser({ ...newUser, password: text })}
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
            <View style={registerStyles.form}>
                <SimpleLineIcons name="lock" size={16} style={registerStyles.icon} />
                <TextInput
                    style={registerStyles.textInputStyle}
                    placeholder="Repita sua Senha"
                    value={newUser.passwordConfirm}
                    onChangeText={text => setNewUser({ ...newUser, passwordConfirm: text })}
                    secureTextEntry={password}
                />
            </View>
            <View>
                <CompanySelect
                    value={select}
                    selectValue={setSelect}
                />
            </View>
        </View>
    );
};

export default RegisterFormComponent;