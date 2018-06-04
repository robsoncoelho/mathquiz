import {
  	ANSWERED_QUESTION,
  	UPDATE_POINTS,
} from '../../config/actionTypes';

const INITIAL_STATE = {
  	enableAnswer: true,
  	points: 0,
};

export default function QuestionReducer(state = INITIAL_STATE, action) {
  	switch (action.type) {
    	case ANSWERED_QUESTION:
      		return { ...state, enableAnswer: action.payload };
    	case UPDATE_POINTS:
      		return { ...state, points: action.payload };
    	default:
      		return state;
  	}
}
