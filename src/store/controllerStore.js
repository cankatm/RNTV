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
  };
}
