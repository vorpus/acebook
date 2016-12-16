import { RECEIVE_SEARCH } from '../actions/user_actions';

const defaultSearchState = {}

const SearchReducer = (state = defaultSearchState, action) => {
  switch(action.type) {
    case RECEIVE_SEARCH:
      return action.users
    default:
      return state;
  }
};

export default SearchReducer;
