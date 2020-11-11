import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import {useControllerStore} from '../../context/ControllerContext';
import styles from './styles';
import * as colors from '../../helpers/colors';

const MovieItem = ({
  movie,
  isFocused,
  isSelected,
  handleFocusMovie,
  handleSelectMovie,
}) => {
  const controllerStore = useControllerStore();

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        controllerStore.handleFocusMovie(movie.id),
          controllerStore.handleSelectMovie(movie.id);
      }}
      // onPress={() => console.log(controllerStore)}
      onFocus={() => controllerStore.handleFocusMovie(movie.id)}
      onBlur={() => controllerStore.handleSelectMovie(null)}>
      <View
        style={[
          styles.movieItemFrame,
          {
            backgroundColor: isFocused ? colors.smokeGrey : colors.nightBlue,
          },
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
