import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import BottomStack from '../bottom';
import Register from '../../screens/Register';
import Login from '../../screens/Login';
import { RoutesEnum } from '../../enum/routes.enum';


type StackTypeRoutes = {
    LOGIN_USER: undefined,
    REGISTER_USER: undefined,
    LOGED_IN: undefined,
}

export type StackRoutesType = NativeStackNavigationProp<StackTypeRoutes>
const Stack = createNativeStackNavigator<StackTypeRoutes>();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'LOGIN_USER'} component={Login} options={{headerShown: false}} />
            <Stack.Screen name={'REGISTER_USER'} component={Register} options={{headerShown: false}} />
            <Stack.Screen name={'LOGED_IN'} component={BottomStack} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default StackNavigator;
