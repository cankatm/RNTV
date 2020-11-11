import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './styles';
import * as colors from '../../helpers/colors';

const MovieItem = ({
  movie,
  isFocused,
  isSelected,
  handleFocusMovie,
  handleSelectMovie,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        handleFocusMovie(movie.id), handleSelectMovie(movie.id);
      }}
      onFocus={() => handleFocusMovie(movie.id)}
      onBlur={() => handleSelectMovie(null)}>
      <View
        style={[
          styles.movieItemFrame,
          {backgroundColor: isFocused ? colors.smokeGrey : colors.nightBlue},
        ]}>
        <Image
          style={styles.movieItemImage}
          source={movie.imgSrc}
          resizeMode="cover"
        />
        {isSelected && <Text style={styles.movieItemText}>{movie.name}</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default MovieItem;
