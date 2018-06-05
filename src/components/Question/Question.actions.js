import {
  ANSWERED_QUESTION,
  UPDATE_POINTS,
  UPDATE_LIVES,
  MODAL_VISIBILITY,
  MODAL_TYPE,
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

export function updateLives(value) {
  return (dispatch, getStore) => {
    dispatch({
      type: UPDATE_LIVES,
      payload: value,
    });
  };
}

export function modalVisibility(value) {
  return (dispatch, getStore) => {
    dispatch({
      type: MODAL_VISIBILITY,
      payload: value,
    });
  };
}

export function updateModalType(value) {
  return (dispatch, getStore) => {
    dispatch({
      type: MODAL_TYPE,
      payload: value,
    });
  };
}
