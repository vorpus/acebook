import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import PostsReducer from './post_reducer';
// import errorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  posts: PostsReducer
});

export default rootReducer;
