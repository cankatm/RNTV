import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Observer} from 'mobx-react';

import {MovieItem} from '../components/movie';
import styles from './styles';
import {useControllerStore} from '../context/ControllerContext';
import * as colors from '../helpers/colors';
import DummyMovieData from '../helpers/dummyMovieData';

const HomeScreen = () => {
  const [focusedId, setFocusedId] = useState(1);
  const [selectedId, setSelectedId] = useState(null);

  const controllerStore = useControllerStore();

  // handleFocusMovie = (id) => setFocusedId(id);

  // handleSelectMovie = (id) => setSelectedId(id);

  renderMovies = () => {
    return DummyMovieData.map((movie) => {
      return (
        <MovieItem
          key={movie.id}
          movie={movie}
          controllerStore={controllerStore}
          isFocused={controllerStore.focusedId === movie.id}
          isSelected={controllerStore.selectedId === movie.id}
          // handleFocusMovie={controllerStore.handleFocusMovie}
          // handleSelectMovie={controllerStore.handleSelectMovie}
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
