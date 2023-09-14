import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BottomStack from '../bottom';
import Register from '../../screens/Register';
import Login from '../../screens/Login';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Register' component={Register} options={{headerShown: false}} />
            <Stack.Screen name='Login' component={Login} options={{headerShown: false}} />
            <Stack.Screen name='Teste' component={BottomStack} options={{headerShown: false, gestureEnabled: false}} />
        </Stack.Navigator>
    );
}

export default StackNavigator;
