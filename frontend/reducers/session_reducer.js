import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';

const defaultUserState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = defaultUserState, action) => {
    switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        currentUser: action.currentUser,
        errors: []
      };
    case RECEIVE_ERRORS:
      return Object.assign({}, state, {errors: action.errors.responseJSON});
    default:
      return state;
  }
};

export default SessionReducer;
