import React from 'react';
import {View, Text} from 'react-native';

import {MovieItem} from '../components/movie';
import styles from './styles';
import * as colors from '../helpers/colors';
import DummyMovieData from '../helpers/dummyMovieData';

const HomeScreen = () => {
  renderMovies = () => {
    return DummyMovieData.map((movie) => {
      return <MovieItem />;
    });
  };

  return (
    <View style={styles.homeScreenContainer}>
      <View style={styles.homeScreenRow}>{this.renderMovies()}</View>
    </View>
  );
};

export default HomeScreen;
