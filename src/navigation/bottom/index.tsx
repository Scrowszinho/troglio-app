import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Foundation, FontAwesome5 } from '@expo/vector-icons';
import { defaultTheme } from '../../theme/default';
import Home from '../../screens/Home';
import ConfigTax from '../../screens/ConfigTax';
import Form from '../../screens/Form';
import Graph from '../../screens/Graph';
import Config from '../../screens/Config';
import ButtonAdd from '../../components/AddButton';

type StackTypeRoutes = {
  HOME: undefined,
  FORM_REGISTER: undefined,
  DASHBOARD: undefined,
};

export type BottomRoutesType = BottomTabNavigationProp<StackTypeRoutes>;

const MainNavigation = () => {
  const Tab = createBottomTabNavigator<StackTypeRoutes>();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerTitleAlign: 'center',
        headerTitleStyle: { color: defaultTheme.colors.white },
        headerStyle: { backgroundColor: defaultTheme.colors.green, }
      }}>
      <Tab.Screen
        name={'HOME'}
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome5 name='home' size={24} color={focused ? defaultTheme.colors.greenHigh : defaultTheme.colors.greyStrong} />
          ), tabBarShowLabel: false,
          headerShown: false
        }}
      />
      {/* <Tab.Screen
          name='ConfigTax'
          component={ConfigTax}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Entypo name='list' size={24} color={focused ? defaultTheme.colors.greenHigh : defaultTheme.colors.greyStrong} />
            ),
          }}
        /> */}
      <Tab.Screen
        name={'FORM_REGISTER'}
        component={Form}
        options={{
          tabBarButton: ButtonAdd,
          headerShown: false
        }}
      />
      <Tab.Screen
        name={'DASHBOARD'}
        component={Graph}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Foundation name='graph-bar' size={24} color={focused ? defaultTheme.colors.greenHigh : defaultTheme.colors.greyStrong} />
          ),
        }}
      />
      {/* <Tab.Screen
          name='Config'
          component={Config}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Entypo name='dots-three-horizontal' size={24} color={focused ? defaultTheme.colors.greenHigh : defaultTheme.colors.greyStrong} />
            ),
          }}
        /> */}
    </Tab.Navigator>
  );
};

export default MainNavigation;