import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect, useState } from 'react';
import { ILogin, ILoginMaded } from '../../interfaces/login.interface';
import { loginStyles } from './styles';
import { Feather, SimpleLineIcons } from '@expo/vector-icons';
import { Text } from '@react-native-material/core';
import { View, TextInput, TouchableOpacity } from 'react-native';
import axios from '../../utils/axios';
import { AxiosError, AxiosResponse } from 'axios';
import { saveItemToStorage, getItemToStorage } from '../../utils/storage';
import { DefaultStorageEnum } from '../../enum/default-storage.enum';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();
    const [login, setLogin] = useState<ILogin>({ email: '', password: '' });
    const [error, setError] = useState<string>('');

    const getConsults = async () => {
        const tokenExpires = await getItemToStorage(DefaultStorageEnum.APP_USER_TOKEN_EXPIRES);
        if (new Date() > new Date(tokenExpires)) {
            navigation.navigate('Login');
        } else {
            navigation.navigate('Teste');
        }
      }
    

    const makeLogin = async () => {
        axios.post('/login', login).then((response: AxiosResponse<ILoginMaded>) => {
            saveItemToStorage(DefaultStorageEnum.APP_USER_TOKEN, response.data.token);
            saveItemToStorage(DefaultStorageEnum.APP_USER_DATA, response.data.user);     
            saveItemToStorage(DefaultStorageEnum.APP_USER_TOKEN_EXPIRES, response.data.expires_date);                   
        })
        .catch((error: AxiosError<any>) => {
            setError(error.response?.data?.errors[0]);
        });
    }
    useEffect(() => {
        getConsults()
    }, []);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={loginStyles.section}>
                <Text style={loginStyles.attentionText}>Acesse sua conta</Text>

                <View style={loginStyles.form}>
                    <Feather name='mail' size={16} style={loginStyles.icon} />
                    <TextInput
                        style={loginStyles.textInputStyle}
                        value={login.email}
                        onChangeText={text => setLogin({ email: text, password: login.password})}
                        keyboardType='default'
                        placeholder='Email'
                    />
                </View>

                <View style={loginStyles.form}>
                    <SimpleLineIcons name='lock' size={16} style={loginStyles.icon} />
                    <TextInput
                        style={loginStyles.textInputStyle}
                        value={login.password}
                        onChangeText={text => setLogin({ email: login.email, password: text})}
                        placeholder='Senha'
                    />
                </View>
                <Text>{error}</Text>
            </View>
            <View style={[loginStyles.section, loginStyles.loginButtonSection]}>
            <TouchableOpacity
                style={loginStyles.loginButtonStyle}
                onPress={() => makeLogin()}>

                <Text style={loginStyles.loginButtonText}>ENTRAR</Text>
            </TouchableOpacity>

            <View style={loginStyles.buttonSection}>
                <Text style={loginStyles.attentionText}>Não tem uma conta? </Text>
                
                <TouchableOpacity onPress={()=> navigation.navigate('Register')}>
                    <Text style={loginStyles.registerButtonStyle}>Registre agora</Text>
                </TouchableOpacity>
            </View>
        </View>
        </SafeAreaView>
    );
};

export default Login;