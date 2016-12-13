export const CREATE_COMMENT = "CREATE_COMMENT";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";

import * as APIUtil from '../util/api_util';

export const fetchComments = (postId) => {
  return (dispatch) => {
    return APIUtil.getComments(postId).then(
      (success) => dispatch(receiveComments(success)),
      (err) => dispatch(receiveErrors(err))
    );
  };
}

export const createComment = (postId, comment) => {
  return (dispatch) => {
    return APIUtil.addComment(postId, comment).then(
      (success) => dispatch(receiveComment(success)),
      (err) => dispatch(receiveErrors(err))
    );
  };
}

export const deleteComment = (commentId) => {
  return (dispatch) => {
    return APIUtil.deleteComment(commentId).then(
      (success) => dispatch(receiveComment(null)),
      (err) => dispatch(receiveErrors(err))
    );
  };
}

export const receiveComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
}

export const receiveComments = (comments) => {
  return {
    type: RECEIVE_COMMENTS,
    comments
  }
}
