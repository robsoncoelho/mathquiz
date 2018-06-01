import { Platform, Dimensions } from 'react-native';

export const COLOR = {
  WHITE: '#FFFFFF',
  BLACK: '#000000'
};

export const PADDING = {
  TOP: Platform.OS === 'ios' ? 30 : 20
};

export const FONT = {

};

export const LOGO = require('../../assets/images/logo.png');
export const BACK_BUTTON = require('../../assets/images/back_button.png');
export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;
