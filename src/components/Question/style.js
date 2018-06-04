import { MediaQueryStyleSheet } from 'react-native-responsive';
import { PADDING, WINDOW_WIDTH, WINDOW_HEIGHT, COLOR } from '../common/variables';

export default MediaQueryStyleSheet.create({
	header: {
		flexDirection: 'row',
		width: '90%',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative'
	},
	logoSmall: {
		alignSelf: 'center',
		width: WINDOW_WIDTH * 0.25
	},
	details: {
		position: 'absolute',
		top: 7,
		right: 0,
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'flex-end'
	},
	hearts: {
		flexDirection: 'row-reverse',
		justifyContent: 'flex-end',
	},
	iconHeart: {
		width: WINDOW_WIDTH * 0.04,
		marginLeft: 5,
	},
	counter: {
		fontSize: 14,
		color: COLOR.WHITE
	},
	title: {
		marginTop: WINDOW_HEIGHT * 0.08,
		fontWeight: '300',
		fontSize: 35,
		color: COLOR.WHITE
	},
	question: {
		width: '90%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: WINDOW_HEIGHT * 0.08,
	},
	number: {
		fontSize: 50,
		fontWeight: '300',
		color: COLOR.WHITE,
	},
	iconOperation: {
		width: WINDOW_WIDTH * 0.10,
		height: WINDOW_WIDTH * 0.08,
		marginLeft: 10,
		marginRight: 14
	},
	answer: {
		fontSize: 50,
		marginTop: 20,
		fontWeight: '300',
		color: COLOR.WHITE,
		textAlign: 'center',
		borderBottomWidth: 1,
		borderBottomColor: COLOR.WHITE,
		minWidth: '30%',
		maxWidth: '90%'
	},
	buttons: {
		width: WINDOW_WIDTH * 0.78,
		flexDirection: 'row',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
		marginTop: WINDOW_HEIGHT * 0.08,
	},
	button: {
		width: WINDOW_WIDTH * 0.37,
		height: WINDOW_WIDTH * 0.25,
		marginTop: WINDOW_WIDTH * 0.04,
		justifyContent: 'center',
		borderColor: COLOR.WHITE,
		alignItems: 'center',
		borderRadius: 14,
		borderWidth: 2,
	},
	buttonCorrect: {
		backgroundColor: COLOR.GREEN
	},
	buttonWrong: {
		backgroundColor: COLOR.RED
	},
	buttonText: {
		color: COLOR.WHITE,
		fontSize: 22
	},
	modal: {
		top: 0,
		left: 0,
		width: WINDOW_WIDTH,
		height: WINDOW_HEIGHT,
		backgroundColor: COLOR.BLACK_TRANSPARENCY,
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
		display: 'none'
	},
	modalVisible: {
		display: 'flex'
	},
	popup: {
		width: WINDOW_WIDTH * 0.9,
		backgroundColor: COLOR.WHITE,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: WINDOW_HEIGHT * -0.1,
		borderRadius: 8,
		paddingHorizontal: 10,
		paddingTop: 20,
		paddingBottom: 14,
	},
	popupTitle: {
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 10,
		color: COLOR.BLACK,
	},
	popupMessage: {
		fontSize: 12,
		color: COLOR.BLACK,
	},
	popupButtons: {
		flexDirection: 'row',
		marginTop: 20,
	},
	popupButton: {
		borderColor: COLOR.GREY_DARK,
		alignItems: 'center',
		borderRadius: 6,
		borderWidth: 1,
		paddingVertical: 10,
		marginHorizontal: 5,
		flex: 1
	}
});
