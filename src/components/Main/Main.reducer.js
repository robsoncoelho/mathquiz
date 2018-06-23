import {
  SET_OPERATION_TYPE,
  COUNT_AD_MOB_INTERVAL
} from '../../config/actionTypes';

const INITIAL_STATE = {
  operation: '',
  adMobInterval: 3
};

export default function MainReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_OPERATION_TYPE:
      return { ...state, operation: action.payload };
    case COUNT_AD_MOB_INTERVAL:
      return { ...state, adMobInterval: action.payload };
    default:
      return state;
  }
}
