import React from 'react';
import {View, Text} from 'react-native';

import {MovieItem} from '../components/movie';
import * as colors from '../helpers/colors';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: colors.nightBlue}}>
      <MovieItem />
    </View>
  );
};

export default HomeScreen;
