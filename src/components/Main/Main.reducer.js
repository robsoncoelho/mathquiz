import {
  SET_OPERATION_TYPE,
  SHOW_AD_MOB
} from '../../config/actionTypes';

const INITIAL_STATE = {
  operation: '',
  adMob: false
};

export default function MainReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_OPERATION_TYPE:
      return { ...state, operation: action.payload };
    case SHOW_AD_MOB:
      return { ...state, adMob: action.payload };
    default:
      return state;
  }
}
