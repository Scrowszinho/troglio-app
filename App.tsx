import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/app/modules/Home';
import Form from './src/app/modules/Form';

const App = () =>{
  const Tab = createBottomTabNavigator();
  return (
      <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false, headerTitle: '' }}>
        <Tab.Screen name="Home" component={Home}  />
        <Tab.Screen name="Form" component={Form} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;