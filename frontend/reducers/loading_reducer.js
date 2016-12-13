import { REQUEST_POSTS, RECEIVE_POSTS, RECEIVE_POST } from '../actions/post_actions';

const LoadingReducer = (state = false, action) => {
  switch(action.type) {
    case REQUEST_POSTS:
      return true;
    case RECEIVE_POSTS:
    case RECEIVE_POST:
      return false;
    default:
      return state;
  }
}

export default LoadingReducer;
