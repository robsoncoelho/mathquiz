import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { COLOR } from '../common/variables';

import Style from './style';

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = { answeredQuestion: false }
    this.answeredQuestion = this.answeredQuestion.bind(this);
  }

  answeredQuestion() {
    this.setState({ answeredQuestion: true })
  }

  render() {
    const { value, correctAnswer } = this.props;
    const { answeredQuestion } = this.state;

    return (
      <TouchableHighlight
        style={[Style.button, answeredQuestion && ( correctAnswer ? Style.buttonCorrect : Style.buttonWrong ) ]}
        underlayColor={COLOR.WHITE}
        onPress={() => this.answeredQuestion() }>
        <Text style={[Style.buttonText]}>{value}</Text>
      </TouchableHighlight>
    );
  }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(Button);
