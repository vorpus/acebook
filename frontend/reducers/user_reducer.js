import { RECEIVE_USER } from '../actions/user_actions';

const defaultProfileState = {
  user: null,
  errors: []
}

const UserReducer = (state = defaultProfileState, action) => {
    switch (action.type) {
    case RECEIVE_USER:
      return {
        user: action.user,
        errors: []
      };
    default:
      return state;
  }
};

export default UserReducer;
