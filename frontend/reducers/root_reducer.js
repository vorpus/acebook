import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import PostsReducer from './post_reducer';
import UserReducer from './user_reducer';
import FriendReducer from './friend_reducer';

// import errorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  posts: PostsReducer,
  user: UserReducer,
  friendRelationship: FriendReducer,
});

export default rootReducer;
