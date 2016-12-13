import { connect } from 'react-redux';
import PostComments from './post_comments';

import { createComment } from '../actions/comment_actions';
import { fetchPost } from '../actions/post_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    createComment: (postId, comment) => dispatch(createComment(postId, comment)),
    fetchPost: (postId) => dispatch(fetchPost(postId)),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(PostComments)
