import {
  ANSWERED_QUESTION
} from '../../config/actionTypes';

const INITIAL_STATE = {
  enableAnswer: true,
};

export default function QuestionReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ANSWERED_QUESTION:
      return { ...state, enableAnswer: action.payload };
    default:
      return state;
  }
}
