import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { BACK_BUTTON } from '../common/variables';

import CommonStyle from '../common/style';
import Style from './style';

class Question extends Component {
  render() {
  	const { operation, level, navigation } = this.props;
  	let bg_page;

  	switch(operation) {
      case 'addition':
        bg_page = require('../../assets/images/bg_addition.png');
      break;
      case 'subtraction':
        bg_page = require('../../assets/images/bg_subtraction.png');
      break;
      case 'multiplication':
        bg_page = require('../../assets/images/bg_multiplication.png');
      break;
      case 'division':
        bg_page = require('../../assets/images/bg_division.png');
      break;
    }
    return (
    	<ImageBackground source={bg_page} style={CommonStyle.imageBackground}>
        	<View style={CommonStyle.content}>
        		<TouchableOpacity
		            style={CommonStyle.backButton}
		            activeOpacity={0.4}
		            onPress={() => {
                  navigation.goBack(null);
		            }}>
		            <Image
		              style={CommonStyle.backImage}
		              resizeMode={'contain'}
		              source={BACK_BUTTON}
		            />
	          	</TouchableOpacity>
        		<Text>{operation}</Text>
      		</View>
      	</ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  operation: state.main.operation,
  level: state.main.level
});

export default connect(mapStateToProps)(Question);
