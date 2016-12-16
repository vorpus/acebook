import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import PostsReducer from './post_reducer';
import UserReducer from './user_reducer';
import FriendReducer from './friend_reducer';
import FriendAddReducer from './friend_add_reducer';
import LikeReducer from './like_reducer';
import LoadingReducer from './loading_reducer';
import SearchReducer from './search_reducer';

// import errorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  posts: PostsReducer,
  user: UserReducer,
  friendRelationship: FriendReducer,
  friendAdds: FriendAddReducer,
  like: LikeReducer,
  loading: LoadingReducer,
  userSearch: SearchReducer
});

export default rootReducer;
