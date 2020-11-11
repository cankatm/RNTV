import React from 'react';
import {View, Text} from 'react-native';

import {MovieItem} from '../components/movie';
import styles from './styles';
import * as colors from '../helpers/colors';

const HomeScreen = () => {
  return (
    <View style={styles.homeScreenContainer}>
      <MovieItem />
    </View>
  );
};

export default HomeScreen;
