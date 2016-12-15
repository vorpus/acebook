import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { logout } from '../actions/session_actions';
import { findFriendRequests, acceptFriend, removeFriend } from '../actions/friend_actions';

import Greeting from './greeting';

const mapStateToProps = (state) => {
  return({
    pendingFriends: state.friendAdds,
    currentUser: state.session.currentUser,
  });
};

const mapDispatchToProps = (dispatch) => {

  return ({
    logout: () => dispatch(logout()),
    findFriendRequests: () => dispatch(findFriendRequests()),
    acceptFriend: (friendshipId) => dispatch(acceptFriend(friendshipId)),
    removeFriend: (friendshipId) => dispatch(removeFriend(friendshipId)),
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting));
