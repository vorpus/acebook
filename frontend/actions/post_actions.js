export const CREATE_POST = "CREATE_POST";
export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POSTS = "RECEIVE_POSTS";

import * as APIUtil from '../util/api_util';

export const fetchPosts = () => {
  return (dispatch) => {
    return APIUtil.getPosts().then(
      (success) => dispatch(receivePosts(success)),
      (err) => dispatch(receiveErrors(err))
    );
  };
};

export const createPost = (post) => {
  return (dispatch) => {
    return APIUtil.createPost(post).then(
      (success) => dispatch(receivePost(post)),
      (err) => dispatch(receiveErrors(err))
    );
  };
};

export const receivePost = (post) => {
  return { type: RECEIVE_POST,
    post: { body: post.body, email: post.email}
  };
}



export const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
});
