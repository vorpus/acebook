import { RECEIVE_LIKE, RECEIVE_LIKES } from '../actions/like_actions';

const LikeReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_LIKE:
      return action.like;
    case RECEIVE_LIKES:
      return action.likes;
    default:
      return state;
  }
}

export default LikeReducer;
