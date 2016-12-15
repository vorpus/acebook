import { RECEIVE_FRIENDS } from '../actions/friend_actions';

const FriendAddReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_FRIENDS:
      return Object.assign({}, action.friends);
    default:
      return state;
  }
}

export default FriendAddReducer;
