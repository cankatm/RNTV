import React, {useState} from 'react';
import {View, Text} from 'react-native';

import {MovieItem} from '../components/movie';
import styles from './styles';
import * as colors from '../helpers/colors';
import DummyMovieData from '../helpers/dummyMovieData';

const HomeScreen = () => {
  const [focusedId, setFocusedId] = useState(1);
  const [selectedId, setSelectedId] = useState(null);

  handleFocusMovie = (id) => setFocusedId(id);

  handleSelectMovie = (id) => setSelectedId(id);

  renderMovies = () => {
    return DummyMovieData.map((movie) => {
      return (
        <MovieItem
          key={movie.id}
          movie={movie}
          isFocused={focusedId === movie.id}
          isSelected={selectedId === movie.id}
          handleFocusMovie={this.handleFocusMovie}
          handleSelectMovie={this.handleSelectMovie}
        />
      );
    });
  };

  return (
    <View style={styles.homeScreenContainer}>
      <View style={styles.homeScreenRow}>{this.renderMovies()}</View>
    </View>
  );
};

export default HomeScreen;
