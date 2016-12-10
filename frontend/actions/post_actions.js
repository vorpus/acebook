export const CREATE_POST = "CREATE_POST";
export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POSTS = "RECEIVE_POSTS";

import * as APIUtil from '../util/api_util';

export const fetchPosts = (userId) => {
  return (dispatch) => {
    return APIUtil.getPosts(userId).then(
      (success) => dispatch(receivePosts(success)),
      (err) => dispatch(receiveErrors(err))
    );
  };
};

export const createPost = (post, tagged_id) => {
  return (dispatch) => {
    return APIUtil.createPost(post, tagged_id).then(
      (success) => dispatch(receivePost(success)),
      (err) => dispatch(receiveErrors(err))
    );
  };
};

// delete post

// edit post

export const receivePost = (post) => {
  return { type: RECEIVE_POST,
    post
  };
}



export const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
});
