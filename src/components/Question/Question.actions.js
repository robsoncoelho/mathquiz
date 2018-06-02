import {
  ANSWERED_QUESTION
} from '../../config/actionTypes';

export function answerQuestion(boolean) {
  return (dispatch, getStore) => {
    dispatch({
      type: ANSWERED_QUESTION,
      payload: boolean,
    });
  };
}
