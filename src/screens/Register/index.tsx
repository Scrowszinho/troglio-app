import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react';
import RegisterFormComponent from "./components/register_form_component";
import RegisterOrLoginComponent from "./components/register_or_login_component";
import { KeyboardAvoidingView, ScrollView } from "react-native";

const Register = () => {
    return (
        <SafeAreaView style={{ flexGrow: 1 }}>
            <KeyboardAvoidingView style={{ flexGrow: 1 }}>

                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <RegisterFormComponent />
                    <RegisterOrLoginComponent />
                </ScrollView>

            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default Register;