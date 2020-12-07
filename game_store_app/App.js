import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import styled from 'styled-components';

import HomeScreen from './src/components/screens/HomeScreen';
import LiveScreen from './src/components/screens/LiveScreen';
import ProfileScreen from './src/components/screens/ProfileScreen';
import GameScreen from './src/components/screens/GameScreen';

const AppStack = createStackNavigator();
const TabNav = createBottomTabNavigator();

const tabBarOptions = {
  showLabel: false,
  style: {
    backgroundColor: '#343434',
    borderTopColor: '#343434',
    paddingBottom: 20.0,
    paddingTop: 20.0,
    height: 54.0,
  },
};

const TabNavScreen = () => {
  return (
    <TabNav.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;

          switch (route.name) {
            case 'HomeScreen':
              iconName = 'home';
              break;
            case 'LiveScreen':
              iconName = 'game-controller';
              break;
            case 'ProfileScreen':
              iconName = 'user';
              break;

            default:
              iconName = 'home';
              break;
          }

          return (
            <TabBarIconContainer focused={focused}>
              <Entypo name={iconName} size={22.0} color="#FFFFFF" />
            </TabBarIconContainer>
          );
        },
      })}>
      <TabNav.Screen name="HomeScreen" component={HomeScreen} />
      <TabNav.Screen name="LiveScreen" component={LiveScreen} />
      <TabNav.Screen name="ProfileScreen" component={ProfileScreen} />
    </TabNav.Navigator>
  );
};

export default App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator mode='modal' headerMode="none">
        <AppStack.Screen name="App" component={TabNavScreen} />
        <AppStack.Screen name="GameScreen" component={GameScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

const TabBarIconContainer = styled.View`
  backgroundColor: ${props => (props.focused ? '#819ee5' : '#343434')};
  padding: 4px 16px;
  border-radius: 32px;
`;
