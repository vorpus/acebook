export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_SEARCH = "RECEIVE_SEARCH";

import * as APIUtil from '../util/api_util';

export const searchUser = (searchString) => {
  return (dispatch) => {
    return APIUtil.findUser(searchString).then(
      (success) => dispatch(receiveSearch(success)),
      (err) => dispatch(receiveErrors(err))
    );
  };
}

export const getUser = (userId) => {
  return (dispatch) => {
    return APIUtil.getUser(userId).then(
      (success) => dispatch(receiveUser(success)),
      (err) => dispatch(receiveErrors(err))
    );
  };
};

export const updateUser = (data) => {
  return (dispatch) => {
    return APIUtil.updateUser(data).then(
      (success) => dispatch(receiveUser(success)),
      (err) => dispatch(receiveErrors(err))
    );
  };
}

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const receiveSearch = (users) => ({
  type: RECEIVE_SEARCH,
  users
})
