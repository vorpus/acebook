import { RECEIVE_FRIEND } from '../actions/friend_actions';

const FriendReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_FRIEND:
      return action.friend;
    // case RECEIVE_FRIENDS:
    //   //RECEIVING MULTIPLE FRIENDS
    //   return null;
    default:
      return state;
  }
}

export default FriendReducer;
