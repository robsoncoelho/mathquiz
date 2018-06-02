import { combineReducers } from 'redux';
import BaseNavigation from '../Router';
import main from '../components/Main/Main.reducer';
import question from '../components/Question/Question.reducer';

export default combineReducers({
  navigation: (state, action) => BaseNavigation.router.getStateForAction(action, state),
  state: (state = {}) => state,
  main,
  question
});
