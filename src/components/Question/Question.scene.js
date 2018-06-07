import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import {
  BACK_BUTTON,
  LOGO_SMALL,
  COLOR,
  ICON_HEART,
  ICON_HEART_WHITE,
} from '../common/variables';

import {
  answerQuestion,
  updateScore,
  updateLives,
  modalVisibility,
  updateModalType,
} from './Question.actions';

import Button from './Button';
import ModalTemplate from './Modal';
import Modal from 'react-native-modal';
import CommonStyle from '../common/style';
import Style from './style';

let bg_page,
    icon_operation,
    randomAnswers = [];

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstValue: 0,
      secondValue: 0,
      result: 0,
    }

    this.setBackgroundPage = this.setBackgroundPage.bind(this);
    this.generateRandomAnswers = this.generateRandomAnswers.bind(this);
    this.newQuestion = this.newQuestion.bind(this);
    this.rangeByLevel = this.rangeByLevel.bind(this);
  }

  componentWillMount() {
    this.setBackgroundPage();
    this.newQuestion();
    this.props.modalVisibility(false);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return  this.state.firstValue !== nextState.firstValue ||
            this.state.secondValue !== nextState.secondValue ||
            this.props.modalVisible !== nextProps.modalVisible;
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

  newQuestion() {
    const {
      operation,
      answerQuestion,
      score
    } = this.props;

    let ranges;

    if(score < 400) {
      ranges = this.rangeByLevel();
    } else if(score >= 400 && score < 700) {
      ranges = this.rangeByLevel(40,35);
    } else if(score >= 700 && score < 1100) {
      ranges = this.rangeByLevel(60,50);
    } else if(score >= 1100 && score < 1500) {
      ranges = this.rangeByLevel(100,100);
    } else if(score >= 1500) {
      ranges = this.rangeByLevel(200,200);
    }

    answerQuestion(true);

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
        range2 = range2 / 5;
      break;
      case 'Multiplication':
        range1 = range1 / 2;
        range2 = range2 / 5;
      break;
    }

    return {range1: range1, range2: range2}
  }

  render() {
    const {
      operation,
      navigation,
      score,
      lives,
      modalVisible,
      modalVisibility,
      modalType
    } = this.props;

    const {
      firstValue,
      secondValue,
      result
    } = this.state;

    if(lives !== 0) {
      randomAnswers = [];

      [1,2,3].forEach(() => {
        randomAnswers.push(this.generateRandomAnswers(result, randomAnswers));
      })

      randomAnswers.push(result);
      randomAnswers = randomAnswers.sort((a, b) => 0.5 - Math.random());
    }

    return (
      <ImageBackground source={bg_page} style={CommonStyle.imageBackground}>
          <View style={CommonStyle.content}>
            <TouchableOpacity
              style={CommonStyle.backButton}
              activeOpacity={0.4}
              onPress={() => {
                if(score > 0) {
                  modalVisibility(true)
                } else {
                  navigation.goBack();
                }
              }}>
              <Image
                style={CommonStyle.backImage}
                resizeMode={'contain'}
                source={BACK_BUTTON}
              />
            </TouchableOpacity>
            <View style={Style.header}>
              <Image
                style={Style.logoSmall}
                resizeMode={'contain'}
                source={LOGO_SMALL}
              />

              <View style={Style.details}>
                <Text style={Style.counter}>{score}{' pts'}</Text>
                <View style={Style.hearts}>
                    { [1,2,3].map((item, index) => {
                        return  <Image
                                  key={index}
                                  style={Style.iconHeart}
                                  resizeMode={'contain'}
                                  source={(index >= lives ? ICON_HEART : ICON_HEART_WHITE) } />
                      })
                    }
                </View>
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
                  return <Button
                          key={index}
                          value={item}
                          newQuestion={this.newQuestion}
                          correctAnswer={(result === item ? true : false)} />
                })
              }
            </View>
          </View>
          <Modal
            animationInTiming={400}
            animationOutTiming={400}
            useNativeDriver={true}
            backdropOpacity={0.8}
            style={Style.modal}
            isVisible={modalVisible}>
            <ModalTemplate
              type={modalType}
              navigation={navigation} />
          </Modal>
        </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  operation: state.main.operation,
  score: state.question.score,
  lives: state.question.lives,
  modalVisible: state.question.modalVisible,
  modalType: state.question.modalType,
});

const mapDispatchToProps = dispatch => ({
  answerQuestion: (value) => {
    dispatch(answerQuestion(value));
  },
  updateScore: (value) => {
    dispatch(updateScore(value));
  },
  updateLives: (value) => {
    dispatch(updateLives(value));
  },
  modalVisibility: (value) => {
    dispatch(modalVisibility(value));
  },
  updateModalType: (value) => {
    dispatch(updateModalType(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
