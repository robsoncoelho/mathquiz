import {
  SET_OPERATION_TYPE,
  COUNT_AD_MOB_INTERVAL
} from '../../config/actionTypes';

export function setOperationType(operation) {
  return (dispatch, getStore) => {
    dispatch({
      type: SET_OPERATION_TYPE,
      payload: operation,
    });
  };
}

export function countAdMobInterval(count) {
  return (dispatch, getStore) => {
    dispatch({
      type: COUNT_AD_MOB_INTERVAL,
      payload: count,
    });
  };
}


