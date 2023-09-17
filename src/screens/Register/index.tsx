import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from 'react';
import RegisterFormComponent from "./components/register_form_component";
import RegisterOrLoginComponent from "./components/register_or_login_component";
import { KeyboardAvoidingView, ScrollView } from "react-native";
import axios from '../../utils/axios';
import { useNavigation } from '@react-navigation/native';
import { apiUrl } from '../../apiUrl';
import { INewUser } from '../../interfaces/user.interface';
import { StackRoutesType } from '../../navigation/stack';
import { AxiosError } from 'axios';
import { Button, Snackbar } from '@react-native-material/core';

const Register = () => {
    const [password, setPassword] = useState(true);
    const [error, setError] = useState<string>('');
    const [openSnackBar, setOpenSnackbar] = useState<boolean>(false);
    const [select, setSelect] = useState<number>(0);
    const [newUser, setNewUser] = useState<INewUser>({});
    const navigation = useNavigation<StackRoutesType>();
    const madeRequest = async () => {
        if (newUser.password !== newUser.passwordConfirm) {
            setOpenSnackbar(true);
            setError('Senhas devem ser iguais');
            return;
        }
        delete newUser.passwordConfirm;
        newUser.idCompany = select;
        axios.post(apiUrl.newUser, newUser).then((response) => {
            navigation.reset({
                routes: [{ name: 'LOGIN_USER' }]
            });
        }).catch((error: AxiosError<any>) => {
            setOpenSnackbar(true);
            setError(error.response?.data?.errors[0]);
        });
    };

    return (
        <SafeAreaView style={{ flexGrow: 1 }}>
            <KeyboardAvoidingView style={{ flexGrow: 1 }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <RegisterFormComponent
                        password={password}
                        newUser={newUser}
                        setNewUser={setNewUser}
                        setSelect={setSelect}
                        select={select}
                        setPassword={setPassword} />
                    <RegisterOrLoginComponent
                        madeRequest={madeRequest}
                    />
                    {
                        openSnackBar ?
                            <Snackbar
                                message={error}
                                action={<Button title="Ok" color="#BB86FC" onPress={() => setOpenSnackbar(false)} />}
                                style={{ position: "absolute", start: 16, end: 16, bottom: 16 }}
                            />
                            :
                            <></>
                    }
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default Register;