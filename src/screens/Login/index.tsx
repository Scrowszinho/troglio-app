import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react';
import LoginFormComponent from "./components/login_form_component";
import LoginOrRegisterComponent from "./components/login_or_register_component";

const Login = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <LoginFormComponent />

            <LoginOrRegisterComponent />
        </SafeAreaView>
    );
}

export default Login;