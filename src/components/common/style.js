import { Dimensions } from 'react-native';
import { MediaQueryStyleSheet } from 'react-native-responsive';
import { PADDING, WINDOW_WIDTH, WINDOW_HEIGHT } from '../common/variables';

export default MediaQueryStyleSheet.create({
  	content: {
    	marginTop: PADDING.TOP,
    	alignItems: 'center',
      flexDirection: 'column',
      height: WINDOW_HEIGHT
  	},
    imageBackground: {
    	width: '100%',
    	height: '100%'
  	},
  	logo: {
  		width: WINDOW_WIDTH * 0.3,
  		height: (WINDOW_WIDTH * 0.3) * 1.54,
  		marginTop: WINDOW_HEIGHT * 0.05
  	},
    backButton: {
      width: WINDOW_WIDTH * 0.08,
      height: WINDOW_WIDTH * 0.06,
      position: 'absolute',
      left: 10,
      top: 9,
      zIndex: 9,
    },
    backImage: {
      width: '100%',
      height: '100%',
    }
});
