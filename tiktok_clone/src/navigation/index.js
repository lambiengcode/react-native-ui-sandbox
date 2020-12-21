import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeBottomTabNavigator from './homeBottomTabNavigator';
import Home from '../screens/Home/index';

const Stack = createStackNavigator();

export default Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeBottomTabNavigator} />
        <Stack.Screen
          options={{
            headerShown: true,
            title: 'Post',
          }}
          name="CreatePost"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};