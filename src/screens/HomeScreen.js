import React from 'react';
import {View} from 'react-native';
import {Observer} from 'mobx-react';

import {MovieItem} from '../components/movie';
import styles from './styles';
import {useControllerStore} from '../context/ControllerContext';
import DummyMovieData from '../helpers/dummyMovieData';

const HomeScreen = () => {
  const controllerStore = useControllerStore();

  renderMovies = () => {
    return DummyMovieData.map((movie) => {
      return (
        <MovieItem
          key={movie.id}
          movie={movie}
          controllerStore={controllerStore}
          isFocused={controllerStore.focusedId === movie.id}
          isSelected={controllerStore.selectedId === movie.id}
        />
      );
    });
  };

  return (
    <Observer>
      {() => (
        <View style={styles.homeScreenContainer}>
          <View style={styles.homeScreenRow}>{this.renderMovies()}</View>
        </View>
      )}
    </Observer>
  );
};

export default HomeScreen;
