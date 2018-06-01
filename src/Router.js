import { StackNavigator } from 'react-navigation';

import Main from './components/Main/Main.scene';
import Question from './components/Question/Question.scene';

const BaseNavigation = StackNavigator({
  	Main: { screen: Main },
  	Question: { screen: Question },
},{
	initialRouteName: 'Main',
	headerMode: 'none'
});

export default BaseNavigation;
