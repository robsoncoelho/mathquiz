import {
  ANSWERED_QUESTION,
  UPDATE_POINTS,
} from '../../config/actionTypes';

export function answerQuestion(boolean) {
  return (dispatch, getStore) => {
    dispatch({
      type: ANSWERED_QUESTION,
      payload: boolean,
    });
  };
}

export function updatePoints(value) {
  return (dispatch, getStore) => {
    dispatch({
      type: UPDATE_POINTS,
      payload: value,
    });
  };
}
