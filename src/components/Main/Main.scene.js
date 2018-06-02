import React, { Component } from 'react';
import { View, Text, Animated, Easing, Image, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { LOGO, BACK_BUTTON, COLOR } from '../common/variables';
import Button from './Button';
import SelectItem from './SelectItem';

import CommonStyle from '../common/style';
import Style from './style';

const ANIMATION_PROPS = {
  duration: 350,
  easing: Easing.out(Easing.ease),
  useNativeDriver: true,
};

const INIT_VIEW_POSITION = Dimensions.get('window').width / 2;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewPosition: new Animated.Value(INIT_VIEW_POSITION),
      levelVisible: false,
    };

    this.animateLevel = this.animateLevel.bind(this);
  }

  animateLevel(showing) {
    const values = {
      viewPosition: showing ? (INIT_VIEW_POSITION) * -1 : INIT_VIEW_POSITION,
    };

    Animated.parallel([
      Animated.timing(this.state.viewPosition, {
        toValue: values.viewPosition,
        ...ANIMATION_PROPS,
      }),
    ]).start(() => {
      this.setState({
        levelVisible: showing ? true : false,
      });
    });
  }

  render() {
    const { viewPosition, levelVisible } = this.state;
    const { navigation } = this.props;

    return (
      <ImageBackground source={require('../../assets/images/bg_home4.png')} style={CommonStyle.imageBackground}>
        <View style={CommonStyle.content}>
          {levelVisible &&
          <TouchableOpacity
            style={CommonStyle.backButton}
            activeOpacity={0.4}
            onPress={() => {
              this.animateLevel(false);
              this.setState({ levelVisible: false })
            }}>
            <Image
              style={CommonStyle.backImage}
              resizeMode={'contain'}
              source={BACK_BUTTON}
            />
          </TouchableOpacity>
          }
          <Image
            style={CommonStyle.logo}
            resizeMode={'contain'}
            source={LOGO}
          />
          <Animated.View
            style={[Style.cards, {
              transform: [{ translateX: viewPosition }],
            }]}>
            <View style={Style.buttons}>
              <Button type={'Addition'} levelVisible={this.animateLevel} />
              <Button type={'Subtraction'} levelVisible={this.animateLevel} />
              <Button type={'Multiplication'} levelVisible={this.animateLevel} />
              <Button type={'Division'} levelVisible={this.animateLevel} />
            </View>
            <View style={Style.select}>
              <Text style={[Style.selectItem, Style.index]}>{'Select your level'}</Text>
              <SelectItem navigation={navigation} levelVisible={this.animateLevel} type={'Beginner'} />
              <View style={Style.selectDivider} />
              <SelectItem navigation={navigation} levelVisible={this.animateLevel} type={'Intermediate'} />
              <View style={Style.selectDivider} />
              <SelectItem navigation={navigation} levelVisible={this.animateLevel} type={'Advanced'} />
            </View>
          </Animated.View>
        </View>
      </ImageBackground>
    );
  }
}

export default Main;
