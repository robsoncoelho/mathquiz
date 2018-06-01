import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import { setLevelType } from './Main.actions';
import { COLOR } from '../common/variables';

import CommonStyle from '../common/style';
import Style from './style';

class SelectItem extends Component {
  constructor(props) {
    super(props);

    this.setLevelType = this.setLevelType.bind(this);
  }

  setLevelType(level) {
    this.props.setLevelType(level);
  }

  render() {
    const { type, navigation, levelVisible } = this.props;
    return (
      <TouchableOpacity
        style={Style.selectItem}
        activeOpacity={0.4}
        onPress={() => {
          navigation.navigate('Question');
          this.setLevelType(type);
          setTimeout(() => {
            levelVisible(false);
          }, 1000)
        }}>
        <Text style={Style.selectText}>{type}</Text>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => ({
  level: state.main.level,
});

const mapDispatchToProps = dispatch => ({
  setLevelType: (value) => {
    dispatch(setLevelType(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectItem);

