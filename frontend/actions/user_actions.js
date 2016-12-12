export const RECEIVE_USER = "RECEIVE_USER";

import * as APIUtil from '../util/api_util';

export const getUser = (userId) => {
  return (dispatch) => {
    return APIUtil.getUser(userId).then(
      (success) => dispatch(receiveUser(success)),
      (err) => dispatch(receiveErrors(err))
    );
  };
};

export const updateUser = (userId, data) => {
  debugger
  return (dispatch) => {
    return APIUtil.updateUser(userId, data).then(
      (success) => dispatch(receiveUser(success)),
      (err) => dispatch(receiveErrors(err))
    );
  };
}

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});
