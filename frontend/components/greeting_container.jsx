import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { logout } from '../actions/session_actions';
import { findFriendRequests, acceptFriend, removeFriend } from '../actions/friend_actions';
import { fetchPosts } from '../actions/post_actions';
import { searchUser } from '../actions/user_actions';

import Greeting from './greeting';

const mapStateToProps = (state) => {
  return({
    pendingFriends: state.friendAdds,
    currentUser: state.session.currentUser,
    searchResults: state.userSearch,
  });
};

const mapDispatchToProps = (dispatch) => {

  return ({
    logout: () => dispatch(logout()),
    findFriendRequests: () => dispatch(findFriendRequests()),
    acceptFriend: (friendshipId) => dispatch(acceptFriend(friendshipId)),
    removeFriend: (friendshipId) => dispatch(removeFriend(friendshipId)),
    fetchPosts: (data) => dispatch(fetchPosts(data)),
    searchUser: (searchString) => dispatch(searchUser(searchString)),
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting));
