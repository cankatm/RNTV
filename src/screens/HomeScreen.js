import React from 'react';
import {View, Text} from 'react-native';

import * as colors from '../helpers/colors';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: colors.nightBlue}}>
      <Text>Home screen</Text>
    </View>
  );
};

export default HomeScreen;
