import {
  SET_OPERATION_TYPE,
  SHOW_AD_MOB
} from '../../config/actionTypes';

export function setOperationType(operation) {
  return (dispatch, getStore) => {
    dispatch({
      type: SET_OPERATION_TYPE,
      payload: operation,
    });
  };
}

export function showAdMob(bool) {
  return (dispatch, getStore) => {
    dispatch({
      type: SHOW_AD_MOB,
      payload: bool,
    });
  };
}
