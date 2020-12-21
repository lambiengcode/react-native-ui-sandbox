import React from 'react';
import {Image, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/index';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default HomeBottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 10,
          marginTop: 5,
        },

        style: {
          backgroundColor: '#1e1e1e',
          borderTopColor: '#1e1e1e',
          paddingBottom: 6.0,
          paddingTop: 10.0,
          height: 54.0,
        },
        activeTintColor: '#fff',
      }}>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name={'home'} size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Search'}
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name={'search1'} size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Upload'}
        component={Home}
        options={{
          tabBarIcon: ({}) => (
            <Image
              source={{
                uri:
                  'https://firebasestorage.googleapis.com/v0/b/mylife-5ce69.appspot.com/o/plus-icon.png?alt=media&token=7270b5b8-2b67-452d-9d2f-340b0712e91f',
              }}
              style={{width: 44, height: 40, resizeMode: 'contain'}}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name={'Inbox'}
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons
              name={'chatbox-ellipses-outline'}
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name={'person-outline'} size={22} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
