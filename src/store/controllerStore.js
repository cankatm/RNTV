import DummyMovieData from '../helpers/dummyMovieData';

export function createControllerStore() {
  return {
    focusedId: 1,
    selectedId: null,
    handleFocusMovie(id) {
      this.focusedId = id;
    },
    handleSelectMovie(id) {
      this.selectedId = id;
    },
    handleMovement(movementValue) {
      if (
        this.focusedId + movementValue >= 1 &&
        this.focusedId + movementValue <= DummyMovieData.length
      ) {
        this.focusedId = this.focusedId + movementValue;
      }
    },
  };
}
