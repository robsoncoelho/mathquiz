import { combineReducers } from 'redux';
import BaseNavigation from '../Router';
import main from '../components/Main/Main.reducer';

export default combineReducers({
  navigation: (state, action) => BaseNavigation.router.getStateForAction(action, state),
  state: (state = {}) => state,
  main
});
