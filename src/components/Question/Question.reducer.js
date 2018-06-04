import {
  	ANSWERED_QUESTION,
  	UPDATE_POINTS,
  	UPDATE_LIVES,
} from '../../config/actionTypes';

const INITIAL_STATE = {
  	enableAnswer: true,
  	points: 0,
  	lives: 3,
  	modalVisible: false,
};

export default function QuestionReducer(state = INITIAL_STATE, action) {
  	switch (action.type) {
    	case ANSWERED_QUESTION:
      		return { ...state, enableAnswer: action.payload };
    	case UPDATE_POINTS:
      		return { ...state, points: action.payload };
      	case UPDATE_LIVES:
      		return { ...state, lives: action.payload };
    	default:
      		return state;
  	}
}
