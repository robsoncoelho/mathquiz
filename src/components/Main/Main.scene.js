import React, { Component } from 'react';
import {
  View,
  Text,
  Animated,
  Easing,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import {
  LOGO,
  BACK_BUTTON,
  COLOR
} from '../common/variables';

import Button from './Button';

import CommonStyle from '../common/style';
import Style from './style';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;

    return (
      <ImageBackground source={require('../../assets/images/bg_home4.png')} style={CommonStyle.imageBackground}>
        <View style={CommonStyle.content}>
          <Image
            style={CommonStyle.logo}
            resizeMode={'contain'}
            source={LOGO}
          />
          <View style={Style.buttons}>
            <Button type={'Addition'} navigation={navigation} />
            <Button type={'Subtraction'} navigation={navigation} />
            <Button type={'Multiplication'} navigation={navigation} />
            <Button type={'Division'} navigation={navigation} />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default Main;
