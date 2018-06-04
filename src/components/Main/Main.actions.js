import {
  SET_OPERATION_TYPE
} from '../../config/actionTypes';

export function setOperationType(operation) {
  return (dispatch, getStore) => {
    dispatch({
      type: SET_OPERATION_TYPE,
      payload: operation,
    });
  };
}
