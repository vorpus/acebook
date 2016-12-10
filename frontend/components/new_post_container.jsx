import { connect } from 'react-redux';

import { createPost } from '../actions/post_actions';
import NewPost from './new_post';

const mapStateToProps = (state) => {
  return {
    errors: state.session.errors,
    currentUser: state.session.currentUser,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createPost: (post, tagged_id) => dispatch(createPost(post, tagged_id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPost);
