import { connect } from 'react-redux';

import UserProfile from './userprofile';

const mapStateToProps = (state) => {
  return {
    postKeys: Object.keys(state.posts).reverse(),
    posts: state.posts,
    errors: state.session.errors
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    createPost: (post) => dispatch(createPost(post))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
