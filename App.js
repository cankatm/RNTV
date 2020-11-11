import React from 'react';
import {View} from 'react-native';

import {ControllerProvider} from './src/context/ControllerContext';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <ControllerProvider>
      <View style={{flex: 1}}>
        <HomeScreen />
      </View>
    </ControllerProvider>
  );
};

export default App;
