import { RECEIVE_FRIEND, RECEIVE_FRIENDS } from '../actions/friend_actions';

const FriendReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_FRIEND:
      return action.friend;

    default:
      return state;
  }
}

export default FriendReducer;
