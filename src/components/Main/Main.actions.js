import {
  SET_OPERATION_TYPE,
  SET_LEVEL_TYPE
} from '../../config/actionTypes';

export function setOperationType(operation) {
  return (dispatch, getStore) => {
    dispatch({
      type: SET_OPERATION_TYPE,
      payload: operation,
    });
  };
}

export function setLevelType(level) {
  return (dispatch, getStore) => {
    dispatch({
      type: SET_LEVEL_TYPE,
      payload: level,
    });
  };
}
