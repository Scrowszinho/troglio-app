import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Foundation, FontAwesome5 } from '@expo/vector-icons';
import { defaultTheme } from '../theme/default';
import Home from '../screens/Home';
import ConfigTax from '../screens/ConfigTax';
import Form from '../screens/Form';
import Graph from '../screens/Graph';
import Config from '../screens/Config';
import ButtonTeste from '../components/AddButton';
import Login from '../screens/Login';
import Register from '../screens/Register';

const MainNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerTitleAlign: 'center',
          headerTitleStyle: { color: defaultTheme.colors.white },
          headerStyle: { backgroundColor: defaultTheme.colors.green,}
        }}>
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <FontAwesome5 name='home' size={24} color={focused ? defaultTheme.colors.green : defaultTheme.colors.greyStrong} />
            ), tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name='ConfigTax'
          component={ConfigTax}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Entypo name='list' size={24} color={focused ? defaultTheme.colors.green : defaultTheme.colors.greyStrong} />
            ),
          }}
        />
        <Tab.Screen
          name='Form'
          component={Form}
          options={{
            tabBarButton: ButtonTeste
          }}
        />
        <Tab.Screen
          name='Graph'
          component={Graph}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Foundation name='graph-bar' size={24} color={focused ? defaultTheme.colors.green : defaultTheme.colors.greyStrong} />
            ),
          }}
        />
        <Tab.Screen
          name='Config'
          component={Config}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Entypo name='dots-three-horizontal' size={24} color={focused ? defaultTheme.colors.green : defaultTheme.colors.greyStrong} />
            ),
          }}
        />
        <Tab.Screen
          name='Login'
          component={Login}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Entypo name='onedrive' size={24} color={focused ? defaultTheme.colors.green : defaultTheme.colors.greyStrong} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;