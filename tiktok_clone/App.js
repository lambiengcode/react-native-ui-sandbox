import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar, SafeAreaView} from 'react-native';


import Navigation from './src/navigation/index';
import Home from './src/screens/Home/index';

export default App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor = 'transparent' translucent/>
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <Navigation />
      </SafeAreaView>
    </>
  );
};
