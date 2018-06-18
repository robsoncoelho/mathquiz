import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Share,
  Platform
} from 'react-native';

import {
  AdMobInterstitial,
} from 'react-native-admob';

import {
  answerQuestion,
  updateScore,
  updateLives,
  modalVisibility,
  updateModalType,
} from './Question.actions';

import {
  countAdMobInterval,
} from '../Main/Main.actions';

import { COLOR } from '../common/variables';
import Style from './style';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.confirmRestart = this.confirmRestart.bind(this);
    this.confirmQuit = this.confirmQuit.bind(this);
    this.quitPopUpTemplate = this.quitPopUpTemplate.bind(this);
    this.restartPopUpTemplate = this.restartPopUpTemplate.bind(this);
    this.noScorePopUpTemplate = this.noScorePopUpTemplate.bind(this);
    this.shareContent = this.shareContent.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.type !== nextProps.type;
  }

  shareContent() {
    const {
      score,
      operation
    } = this.props;

    Share.share({
      message: `My new score in the ${operation} Math Operation is ${score} MathQuiz: URL DA STORE`,
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
      adMobInterval,
      countAdMobInterval,
    } = this.props;

    modalVisibility(false);

    setTimeout(()=> {
      navigation.goBack();
      answerQuestion(true);
      updateModalType('QUIT');
      updateScore(0);
      updateLives(3);
      countAdMobInterval(adMobInterval-1);
      if(adMobInterval === 0) {
        countAdMobInterval(3);
        AdMobInterstitial
          .requestAd()
          .then(() => AdMobInterstitial.showAd());
      }
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
            onPress={() => this.confirmQuit() }>
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

  noScorePopUpTemplate() {
    return (
      <View style={Style.popup}>
        <View style={Style.stars}>
          <Text style={[Style.popupTitleLarge]}>Ops!</Text>
        </View>
        <Text style={[Style.popupTitle]}>You didn't go very well this time.</Text>
        <Text style={Style.popupMessage}>Come on, try again and show how you can go better now!</Text>
        <View style={Style.shareButtons}>
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
      score
    } = this.props;

    switch(type) {
      case 'QUIT':
        return this.quitPopUpTemplate()
      break;
      case 'RESTART':
        if(score > 0) {
          return this.restartPopUpTemplate()
        } else {
          return this.noScorePopUpTemplate()
        }
      break;
    }
  }
}

const mapStateToProps = state => ({
  modalVisible: state.question.modalVisible,
  score: state.question.score,
  operation: state.main.operation,
  adMobInterval: state.main.adMobInterval
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
  countAdMobInterval: (value) => {
    dispatch(countAdMobInterval(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
