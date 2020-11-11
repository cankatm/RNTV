import React from 'react';
import {View, useTVEventHandler} from 'react-native';
import {Observer} from 'mobx-react';

import {MovieItem} from '../components/movie';
import styles from './styles';
import {useControllerStore} from '../context/ControllerContext';
import DummyMovieData from '../helpers/dummyMovieData';

const HomeScreen = () => {
  const controllerStore = useControllerStore();

  const myTVEventHandler = (evt) => {
    console.log(evt);
    switch (evt.eventType) {
      case 'right':
        return controllerStore.handleMovement(1);
      case 'left':
        return controllerStore.handleMovement(-1);
      case 'back':
      case 'menu':
        return controllerStore.handleSelectMovie(null);
      case 'playPause':
        return controllerStore.handleSelectMovie(controllerStore.focusedId);
      default:
        break;
    }
  };

  useTVEventHandler(myTVEventHandler);

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
