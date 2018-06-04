import { MediaQueryStyleSheet } from 'react-native-responsive';
import { PADDING, COLOR, WINDOW_WIDTH, WINDOW_HEIGHT } from '../common/variables';

export default MediaQueryStyleSheet.create({
	buttons: {
		marginTop: WINDOW_HEIGHT * 0.08,
		width: WINDOW_WIDTH * 0.78,
		justifyContent: 'space-between',
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	button: {
		width: WINDOW_WIDTH * 0.37,
		height: WINDOW_WIDTH * 0.37,
		marginTop: WINDOW_WIDTH * 0.04,
		justifyContent: 'center',
		borderColor: COLOR.WHITE,
		alignItems: 'center',
		borderRadius: 14,
		borderWidth: 2,
	},
	buttonIcon: {
		width: '45%',
		height: '45%',
	}
});
