export const ADD_FRIEND = "ADD_FRIEND";
export const GET_FRIEND = "GET_FRIEND";
export const RECEIVE_FRIEND = "RECEIVE_FRIEND";
export const REMOVE_FRIEND = "REMOVE_FRIEND";

import * as APIUtil from '../util/api_util';

export const addFriend = (friendId) => {
  return (dispatch) => {
    return APIUtil.addFriend(friendId).then(
      (success) => dispatch(receiveFriend(success)),
      (err) => dispatch(receiveErrors(err))
    );
  };
};

export const findFriend = (friendId) => {
  return (dispatch) => {
    return APIUtil.findFriend(friendId).then(
      (success) => dispatch(receiveFriend(success)),
      (err) => dispatch(receiveErrors(err))
    );
  };
};

export const acceptFriend = (friendshipId) => {
  return (dispatch) => {
    return APIUtil.acceptFriend(friendshipId).then(
      (success) => dispatch(receiveFriend(success)),
      (err) => dispatch(receiveErrors(err))
    );
  };
};

export const removeFriend = (friendshipId) => {
  return (dispatch) => {
    return APIUtil.removeFriend(friendshipId).then(
      //TODO: NEED WHAT TO DO AFTER DELETING FRIEND?
      (success) => dispatch(receiveFriend(null)),
      (err) => dispatch(receiveErrors(err))
    );
  };
};

export const receiveFriend = (friend) => {
  return {
    type: RECEIVE_FRIEND,
    friend
  };
}
