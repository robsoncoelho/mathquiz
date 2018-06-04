import { Platform, Dimensions } from 'react-native';

export const COLOR = {
  WHITE: '#FFFFFF',
  BLACK: '#000000',
  BLACK_TRANSPARENCY: '#00000080',
  GREY_DARK: '#595959',
  GREY: '#666666',
  GREEN: '#48C688',
  RED: '#FF6262',
};

export const PADDING = {
  TOP: Platform.OS === 'ios' ? 27 : 10
};

export const FONT = {

};

export const LOGO = require('../../assets/images/logo.png');
export const LOGO_SMALL = require('../../assets/images/logo_small.png');
export const BACK_BUTTON = require('../../assets/images/back_button.png');
export const ICON_HEART = require('../../assets/images/icon_heart.png');
export const ICON_HEART_WHITE = require('../../assets/images/icon_heart_white.png');
export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;
