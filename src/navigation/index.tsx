import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ConfigTax from '../screens/ConfigTax';
import Form from '../screens/Form';
import Graph from '../screens/Graph';
import Config from '../screens/Config';
import Login from '../screens/Login';


const MainNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Config" component={Config} />
        <Stack.Screen name="Graph" component={Graph} />
        <Stack.Screen name="ConfigTax" component={ConfigTax} />
        <Stack.Screen name="Form" component={Form} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;