import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const MovieItem = ({
  movie,
  isFocused,
  isSelected,
  handleFocusMovie,
  handleSelectMovie,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        handleFocusMovie(movie.id), handleSelectMovie(movie.id);
      }}
      onBlur={() => handleSelectMovie(null)}>
      <View style={styles.movieItemFrame}>
        <View style={styles.movieItemContainer}>
          {isSelected && <Text>{movie.name}</Text>}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MovieItem;
