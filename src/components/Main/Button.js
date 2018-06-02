import React, { Component } from 'react';
import { View, Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { COLOR } from '../common/variables';
import { setOperationType } from './Main.actions';

import CommonStyle from '../common/style';
import Style from './style';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { pressButton: false }

    this.setOperationType = this.setOperationType.bind(this);
  }

  onHideUnderlay() {
    this.setState({ pressButton: false });
  }

  onShowUnderlay() {
    this.setState({ pressButton: true });
  }

  setOperationType(type) {
    this.props.setOperationType(type);
  }

  render() {
    const { type, levelVisible } = this.props;
    const { pressButton } = this.state;

    let icon_default,
        icon_pressed;

    switch(type) {
      case 'Addition':
        icon_default = require('../../assets/images/icon_addition.png');
        icon_pressed = require('../../assets/images/icon_addition_hover.png');
      break;
      case 'Subtraction':
        icon_default = require('../../assets/images/icon_subtraction.png');
        icon_pressed = require('../../assets/images/icon_subtraction_hover.png');
      break;
      case 'Multiplication':
        icon_default = require('../../assets/images/icon_multiplication.png');
        icon_pressed = require('../../assets/images/icon_multiplication_hover.png');
      break;
      case 'Division':
        icon_default = require('../../assets/images/icon_division.png');
        icon_pressed = require('../../assets/images/icon_division_hover.png');
      break;
    }

    return (
      <TouchableHighlight
        style={Style.button}
        underlayColor={COLOR.WHITE}
        onHideUnderlay={this.onHideUnderlay.bind(this)}
        onShowUnderlay={this.onShowUnderlay.bind(this)}
        onPress={() => {
            levelVisible(true);
            this.setOperationType(type);
          }
        }>
        <Image
          style={Style.buttonIcon}
          resizeMode={'contain'}
          source={ pressButton ? icon_pressed : icon_default }
        />
      </TouchableHighlight>
    );
  }
}

const mapStateToProps = state => ({
  operation: state.main.operation,
});

const mapDispatchToProps = dispatch => ({
  setOperationType: (value) => {
    dispatch(setOperationType(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
