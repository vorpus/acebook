export const CREATE_USER = "CREATE_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

import * as APIUtil from '../util/api_util';

export const login = (user) => {
  return (dispatch) => {
    return APIUtil.loginUser(user).then(
      (user) => {
        dispatch(receiveCurrentUser(user));
      },
      (err) => dispatch(receiveErrors(err))
    );
  };
};

export const logout = () => {
  return (dispatch) => {
    return APIUtil.logoutUser().then(
      (success) => dispatch(receiveCurrentUser(null)),
      (err) => dispatch(receiveErrors(err)));
  };
};

export const signup = (user) => {
  return (dispatch) => {
    return APIUtil.createUser(user).then(
      (success) => dispatch(receiveCurrentUser(user)),
      (err) => dispatch(receiveErrors(err))
    );
  };
};

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
