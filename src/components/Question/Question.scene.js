import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, Image, ImageBackground, TouchableOpacity, TouchableHighlight } from 'react-native';
import { BACK_BUTTON, LOGO_SMALL, COLOR } from '../common/variables';
import Button from './Button';

import CommonStyle from '../common/style';
import Style from './style';

let bg_page, icon_operation;

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressButton: false,
      firstValue: 0,
      secondValue: 0,
      result: 0,
    }

    this.setBackgroundPage = this.setBackgroundPage.bind(this);
    this.newOperationValues = this.newOperationValues.bind(this);
    this.generateRandomAnswers = this.generateRandomAnswers.bind(this);
    this.rangeByLevel = this.rangeByLevel.bind(this);
  }

  componentWillMount() {
    this.setBackgroundPage();
    this.newOperationValues();
  }

  setBackgroundPage() {
    const { operation } = this.props;

    switch(operation) {
      case 'Addition':
        bg_page = require('../../assets/images/bg_addition.png');
        icon_operation = require('../../assets/images/icon_addition_small.png');
      break;
      case 'Subtraction':
        bg_page = require('../../assets/images/bg_subtraction.png');
        icon_operation = require('../../assets/images/icon_subtraction_small.png');
      break;
      case 'Multiplication':
        bg_page = require('../../assets/images/bg_multiplication.png');
        icon_operation = require('../../assets/images/icon_multiplication_small.png');
      break;
      case 'Division':
        bg_page = require('../../assets/images/bg_division.png');
        icon_operation = require('../../assets/images/icon_division_small.png');
      break;
    }
  }

  newOperationValues() {
    const { operation } = this.props;
    const ranges = this.rangeByLevel();

    let value1 = Math.floor((Math.random() * ranges['range1']) + 2);
    let value2 = Math.floor((Math.random() * ranges['range2']) + 2);
    let result = 0;

    if(value1 < value2) {
      let aux = value1;
      value1 = value2;
      value2 = aux;
    }

    switch(operation) {
      case 'Addition':
        result = value1 + value2;
      break;
      case 'Subtraction':
        result = value1 - value2;
      break;
      case 'Multiplication':
        result = value1 * value2;
      break;
      case 'Division':
        if((value1 % value2) > 0) {
          value1 = value1 - (value1 % value2);
        }
        result = value1 / value2;
      break;
    }

    this.setState({ result: result })
    this.setState({ firstValue: value1 })
    this.setState({ secondValue: value2 })
  }

  generateRandomAnswers(result, existedNumbers) {
    const min = result - 4;
    const max = result + 4;
    const num = Math.floor(Math.random() * (max - min)) + min;
    return (num === result || existedNumbers.includes(num) || num < 0) ? this.generateRandomAnswers(result, existedNumbers) : num;
  }

  rangeByLevel(range1 = 20, range2 = 20) {
    const { operation } = this.props;

    switch(operation) {
      case 'Division':
      case 'Multiplication':
        range2 = 3;
      break;
    }

    return {range1: range1, range2: range2}
  }

  render() {
    const { operation, level, navigation } = this.props;
    const { firstValue, secondValue, result } = this.state;
    let randomAnswers = [];

    [1,2,3].forEach(() => {
      randomAnswers.push(this.generateRandomAnswers(result, randomAnswers));
    })

    randomAnswers.push(result);

    randomAnswers = randomAnswers.sort((a, b) => 0.5 - Math.random());

    return (
      <ImageBackground source={bg_page} style={CommonStyle.imageBackground}>
          <View style={CommonStyle.content}>
            <TouchableOpacity
              style={CommonStyle.backButton}
              activeOpacity={0.4}
              onPress={() => {
                navigation.goBack();
              }}>
              <Image
                style={CommonStyle.backImage}
                resizeMode={'contain'}
                source={BACK_BUTTON}
              />
            </TouchableOpacity>
            <View style={Style.header}>
              <View style={Style.counterBox}>
              </View>
              <Image
                style={Style.logoSmall}
                resizeMode={'contain'}
                source={LOGO_SMALL}
              />
              <View style={Style.counterBox}>
                <Image
                  style={Style.iconHeart}
                  resizeMode={'contain'}
                  source={require('../../assets/images/icon_heart.png')}
                />
                <Text style={Style.counter}>{'3'}</Text>
              </View>
            </View>
            <Text style={Style.title}>{operation}</Text>
            <View style={Style.question}>
              <Text style={Style.number}>{firstValue}</Text>
              <Image
                style={Style.iconOperation}
                resizeMode={'contain'}
                source={icon_operation}
              />
              <Text style={Style.number}>{secondValue}</Text>
            </View>
            <View style={Style.buttons}>
              { randomAnswers.map((item, index) => {
                  return <Button key={index} value={item} correctAnswer={(result === item ? true : false)} />
                })
              }
            </View>
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
