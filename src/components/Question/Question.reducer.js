import {
  	ANSWERED_QUESTION,
  	UPDATE_POINTS,
  	UPDATE_LIVES,
    MODAL_VISIBILITY,
    MODAL_TYPE,
} from '../../config/actionTypes';

const INITIAL_STATE = {
  	enableAnswer: true,
  	points: 0,
  	lives: 3,
  	modalVisible: false,
    modalType: 'QUIT'
};

export default function QuestionReducer(state = INITIAL_STATE, action) {
  	switch (action.type) {
    	case ANSWERED_QUESTION:
      	return { ...state, enableAnswer: action.payload };
    	case UPDATE_POINTS:
      	return { ...state, points: action.payload };
      case UPDATE_LIVES:
      	return { ...state, lives: action.payload };
      case MODAL_VISIBILITY:
        return { ...state, modalVisible: action.payload };
      case MODAL_TYPE:
        return { ...state, modalType: action.payload };
    	default:
      		return state;
  	}
}
