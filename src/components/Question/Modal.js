import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Share } from 'react-native';
import { connect } from 'react-redux';
import {
  answerQuestion,
  updateScore,
  updateLives,
  modalVisibility,
  updateModalType,
} from './Question.actions';

import { COLOR } from '../common/variables';

import Style from './style';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.confirmQuit = this.confirmQuit.bind(this);
    this.confirmRestart = this.confirmRestart.bind(this);
    this.quitPopUpTemplate = this.quitPopUpTemplate.bind(this);
    this.restartPopUpTemplate = this.restartPopUpTemplate.bind(this);
    this.shareContent = this.shareContent.bind(this);
  }

  shareContent() {
    const {
      score
    } = this.props;

    Share.share({
      message: `My new score in the Division Math Operation is ${score} MathQuiz: URL DA STORE`,
      url: 'URL DA APP STORE',
      title: 'My new MathQuiz score'
    }, {
      // Android only:
      dialogTitle: `My new MathQuiz score is ${score}.`,
    })
  }

  confirmQuit() {
    const {
      answerQuestion,
      updateScore,
      updateLives,
      navigation,
      modalVisibility,
      updateModalType,
    } = this.props;

    modalVisibility(false);

    setTimeout(()=> {
      navigation.goBack();
      answerQuestion(true);
      updateModalType('QUIT');
      updateScore(0);
      updateLives(3);
    }, 400)
  }

  confirmRestart() {
    const {
      updateScore,
      updateLives,
      modalVisibility,
      updateModalType,
    } = this.props;

    modalVisibility(false);
    updateModalType('QUIT');
    updateScore(0);
    updateLives(3);
  }

  quitPopUpTemplate() {
    const {
      modalVisibility
    } = this.props;

    return (
      <View style={Style.popup}>
        <Text style={Style.popupTitle}>Are you sure you want to quit?</Text>
        <Text style={Style.popupMessage}>Your score will be canceled.</Text>
        <View style={Style.popupButtons}>
          <TouchableOpacity
            style={Style.popupButton}
            activeOpacity={0.4}
            onPress={() => { modalVisibility(false) }}>
            <Text style={Style.popupMessage}>CANCEL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Style.popupButton}
            activeOpacity={0.4}
            onPress={() => { this.confirmQuit() }}>
            <Text style={Style.popupMessage}>CONFIRM</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  restartPopUpTemplate() {
    const {
      score
    } = this.props;

    return (
      <View style={Style.popup}>
        <View style={Style.stars}>
          <Image
            style={Style.iconStar}
            resizeMode={'contain'}
            source={require('../../assets/images/stars_left.png')}
          />
          <Text style={[Style.popupTitleLarge]}>Congratulations</Text>
          <Image
            style={Style.iconStar}
            resizeMode={'contain'}
            source={require('../../assets/images/stars_right.png')}
          />
        </View>
        <Text style={[Style.popupTitle]}>Your new score is: {score}</Text>
        <Text style={Style.popupMessage}>This is a great score, share with your friends and keep practicing to set new records.</Text>
        <View style={Style.shareButtons}>
          <TouchableOpacity
            style={[Style.shareButton, {backgroundColor: '#3B5998'}]}
            activeOpacity={0.2}
            onPress={() => { this.shareContent() }}>
            <Text style={Style.shareText}>Share with your friends</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Style.shareButton, {backgroundColor: '#FFB717'}]}
            activeOpacity={0.2}
            onPress={() => { this.confirmRestart() }}>
            <Text style={Style.shareText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  render() {
    const {
      type,
    } = this.props;

    switch(type) {
      case 'QUIT':
        return this.quitPopUpTemplate()
      break;
      case 'RESTART':
        return this.restartPopUpTemplate()
      break;
    }
  }
}

const mapStateToProps = state => ({
  modalVisible: state.question.modalVisible,
  score: state.question.score,
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

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
