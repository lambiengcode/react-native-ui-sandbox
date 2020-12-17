import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import Home from './src/screens/Home/index';

export default App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor = 'transparent'/>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </>
  );
};
