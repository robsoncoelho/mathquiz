import { Dimensions } from 'react-native';
import { MediaQueryStyleSheet } from 'react-native-responsive';
import { PADDING, COLOR, WINDOW_WIDTH, WINDOW_HEIGHT } from '../common/variables';

export default MediaQueryStyleSheet.create({
	buttons: {
		width: WINDOW_WIDTH * 0.78,
		flexDirection: 'row',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
		marginRight: WINDOW_WIDTH * 0.22,
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
	},
	select: {
		marginTop: WINDOW_WIDTH * 0.04,
		width: WINDOW_WIDTH * 0.78,
		borderColor: COLOR.WHITE,
		alignItems: 'center',
		borderRadius: 14,
		borderWidth: 2,
		overflow: 'hidden',
	},
	index: {
		backgroundColor: COLOR.WHITE,
		lineHeight: WINDOW_HEIGHT * 0.08,
		height: WINDOW_HEIGHT * 0.08,
		justifyContent: 'center',
		textAlign: 'center',
		color: '#5F83B4',
		width: '100%',
		fontSize: 20,
	},
	selectItem: {
		width: '100%',
		height: WINDOW_HEIGHT * 0.10,
		justifyContent: 'center',
	},
	selectText: {
		fontSize: 20,
		width: '100%',
		height: '100%',
		color: COLOR.WHITE,
		textAlign: 'center',
		lineHeight: WINDOW_HEIGHT * 0.10,
	},
	selectTextHover: {
		color: '#5F83B4',
	},
	selectDivider: {
		width: '100%',
		height: 1,
		backgroundColor: COLOR.WHITE,
	},
	cards: {
		marginTop: WINDOW_HEIGHT * 0.08,
		flexDirection: 'row',
		alignItems: 'flex-start',
	}
});
