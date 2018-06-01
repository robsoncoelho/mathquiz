import {
  SET_OPERATION_TYPE,
  SET_LEVEL_TYPE
} from '../../config/actionTypes';

const INITIAL_STATE = {
  operation: '',
  level: ''
};

export default function MainReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_OPERATION_TYPE:
      return { ...state, operation: action.payload };
    case SET_LEVEL_TYPE:
      return { ...state, level: action.payload };
    default:
      return state;
  }
}
