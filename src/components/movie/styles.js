import {StyleSheet} from 'react-native';

import * as colors from '../../helpers/colors';

export default StyleSheet.create({
  movieItemFrame: {
    padding: 24,
    backgroundColor: 'blue',
    marginHorizontal: 16,
  },
  movieItemImage: {
    width: 200,
    height: 300,
    backgroundColor: 'red',
  },
  movieItemText: {
    fontSize: 24,
    color: colors.creamWhite,
    marginTop: 8,
  },
});
