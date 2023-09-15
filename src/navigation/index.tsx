import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './stack';


const MainNavigation = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default MainNavigation;