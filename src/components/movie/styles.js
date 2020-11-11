import {StyleSheet} from 'react-native';

import * as colors from '../../helpers/colors';

export default StyleSheet.create({
  movieItemFrame: {
    padding: 8,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  movieItemImage: {
    width: 200,
    height: 300,
  },
  movieItemText: {
    fontSize: 16,
    color: colors.creamWhite,
    marginTop: 8,
  },
});
