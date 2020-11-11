import {StyleSheet} from 'react-native';

import * as colors from '../helpers/colors';

export default StyleSheet.create({
  homeScreenContainer: {
    flex: 1,
    backgroundColor: colors.nightBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeScreenRow: {
    flexDirection: 'row',
  },
});
