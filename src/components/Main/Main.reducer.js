import {
  SET_OPERATION_TYPE
} from '../../config/actionTypes';

const INITIAL_STATE = {
  operation: '',
};

export default function MainReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_OPERATION_TYPE:
      return { ...state, operation: action.payload };
    default:
      return state;
  }
}
