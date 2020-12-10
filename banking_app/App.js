import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import TouchScreen from './src/screens/TouchScreen';
import PinScreen from './src/screens/PinScreen';
import HomeScreen from './src/screens/HomeScreen';
import CardsScreen from './src/screens/CardsScreen';
import SendRequests from './src/screens/SendRequests';

const AppStack = createStackNavigator();
const TabStack = createBottomTabNavigator();

export default App = () => {

  const tabBarOptions = {
    showLabel: true,
    style: {
      backgroundColor: '#1e1e1e',
      borderTopColor: '#1e1e1e',
      paddingBottom: 10.0,
    }
  }

  const screenOptions = ({route}) => ({
    tabBarIcon: ({focused}) => {
      let icon = '';
      const color = focused ? '#559dff' : '#828282';
      const size = 24;

      switch (route.name) {
        case 'CardsScreen':
          icon = 'credit-card';
          break;
        
        case 'SendRequests':
          icon = 'send';
          break;

        default:
          icon = 'dashboard';
          break;
      }

      return <MaterialIcons name={icon} size={size} color={color}/>;
    }
  })

  const TabStackScreens = () => {
    return (
      <TabStack.Navigator tabBarOptions={tabBarOptions} screenOptions={screenOptions}>
        <TabStack.Screen name='HomeScreen' component={HomeScreen}/>
        <TabStack.Screen name='SendRequests' component={SendRequests} options={{title: 'Send & Request'}}/>
        <TabStack.Screen name='CardsScreen' component={CardsScreen} options={{title: 'My Cards'}}/>
      </TabStack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode='none'>
        <AppStack.Screen name='TouchScreen' component={TouchScreen}/>
        <AppStack.Screen name='PinScreen' component={PinScreen}/>
        <AppStack.Screen name='Tabs' component={TabStackScreens}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
