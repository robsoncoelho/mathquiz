import { Dimensions } from 'react-native';
import { MediaQueryStyleSheet } from 'react-native-responsive';
import { PADDING, WINDOW_WIDTH, WINDOW_HEIGHT } from '../common/variables';

export default MediaQueryStyleSheet.create({
  	content: {
    	marginTop: PADDING.TOP,
    	alignItems: 'center',
      flexDirection: 'column',
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
      width: WINDOW_WIDTH * 0.1,
      height: WINDOW_WIDTH * 0.07,
      position: 'absolute',
      left: 10,
      top: 7,
      zIndex: 9,
    },
    backImage: {
      width: '100%',
      height: '100%',
    }
});
