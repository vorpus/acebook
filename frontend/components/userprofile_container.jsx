import { connect } from 'react-redux';

import UserProfile from './userprofile';
import { getUser, updateUser } from '../actions/user_actions';
import { addFriend, findFriend, acceptFriend, removeFriend } from '../actions/friend_actions';

const mapStateToProps = (state) => {
  return {
    postKeys: Object.keys(state.posts).reverse(),
    currentUser: state.session.currentUser,
    posts: state.posts,
    user: state.user.user,
    errors: state.session.errors,
    friendRelationship: state.friendRelationship,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUser: (userId) => dispatch(getUser(userId)),
    updateUser: (data) => dispatch(updateUser(data)),
    fetchPosts: () => dispatch(fetchPosts()),
    createPost: (post) => dispatch(createPost(post)),
    addFriend: (friendId) => dispatch(addFriend(friendId)),
    findFriend: (friendId) => dispatch(findFriend(friendId)),
    acceptFriend: (friendshipId) => dispatch(acceptFriend(friendshipId)),
    removeFriend: (friendshipId) => dispatch(removeFriend(friendshipId)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
