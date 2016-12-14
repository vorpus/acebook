import { CREATE_POST, RECEIVE_POST, RECEIVE_POSTS, RECEIVE_MORE_POSTS } from '../actions/post_actions';

const PostsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_POST:
      return Object.assign({}, state, {[action.post.id]: action.post});
    case RECEIVE_POSTS:
      return action.posts;
    case RECEIVE_MORE_POSTS:
      return Object.assign({}, state, action.posts);
    default:
      return state;
  }
}

export default PostsReducer;
