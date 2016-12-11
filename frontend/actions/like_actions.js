export const CREATE_LIKE = "CREATE_LIKE";
export const DELETE_LIKE = "DELETE_LIKE";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const RECEIVE_LIKES = "RECEIVE_LIKES";

import * as APIUtil from '../util/api_util';

export const addLike = (postId) => {
  return (dispatch) => {
    return APIUtil.likePost(postId).then(
      (success) => dispatch(receiveLike(success)),
      (err) => dispatch(receiveErrors(err))
    );
  };
}

export const removeLike = (likeId) => {
  return (dispatch) => {
    return APIUtil.deleteLike(likeId).then(
      (success) => dispatch(receiveLike(null)),
      (err) => dispatch(receiveErrors(err))
    );
  };
}

export const receiveLike = (like) => {
  return {
    type: RECEIVE_LIKE,
    like
  };
}

export const receiveLikes = (likes) => {
  return {
    type: RECEIVE_LIKES,
    likes
  }
}
