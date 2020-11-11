import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const MovieItem = () => {
  return (
    <TouchableOpacity>
      <View style={styles.movieItemContainer}>
        <Text>Movie Item</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieItem;
