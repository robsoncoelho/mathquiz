import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { COLOR } from '../common/variables';
import {
  answerQuestion,
  updatePoints,
  updateLives,
  modalVisibility,
  updateModalType,
} from './Question.actions';

import Style from './style';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { answeredQuestion: false }
    this.answeredQuestion = this.answeredQuestion.bind(this);
  }

  answeredQuestion() {
    const {
      answerQuestion,
      newQuestion,
      correctAnswer,
      updatePoints,
      updateLives,
      points,
      lives,
      modalVisibility,
      updateModalType,
    } = this.props;

    const { answeredQuestion } = this.state;

    answerQuestion(false);

    if(correctAnswer) {
      updatePoints(points + 10);
    } else {
      updateLives(lives - 1);
      if(lives - 1 === 0) {
        updateModalType('RESTART');
        modalVisibility(true);
        answerQuestion(true);
      }
    }

    this.setState({ answeredQuestion: true });

    setTimeout(() => {
      this.setState({ answeredQuestion: false });
      newQuestion();
    }, 500)
  }

  render() {
    const {
      value,
      correctAnswer,
      enableAnswer,
    } = this.props;

    const { answeredQuestion } = this.state;

    return (
      <TouchableOpacity
        style={[Style.button, answeredQuestion && ( correctAnswer ? Style.buttonCorrect : Style.buttonWrong ) ]}
        activeOpacity={1}
        onPress={() => {
            if(enableAnswer) {
              this.answeredQuestion();
            }
          }
        }>
        <Text style={[Style.buttonText]}>{value}</Text>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => ({
  enableAnswer: state.question.enableAnswer,
  points: state.question.points,
  lives: state.question.lives,
});

const mapDispatchToProps = dispatch => ({
  answerQuestion: (value) => {
    dispatch(answerQuestion(value));
  },
  updatePoints: (value) => {
    dispatch(updatePoints(value));
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

export default connect(mapStateToProps, mapDispatchToProps)(Button);
