import { connect } from 'react-redux'
import PostIndex from './post_index';
import { fetchPosts, createPost, receivePost, receivePosts } from '../actions/post_actions';
import { addLike, removeLike } from '../actions/like_actions';

const mapStateToProps = (state) => {
  return {
    postKeys: Object.keys(state.posts).reverse(),
    posts: state.posts,
    errors: state.session.errors
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPosts: (data) => dispatch(fetchPosts(data)),
    createPost: (post) => dispatch(createPost(post)),
    addLike: (postId) => dispatch(addLike(postId)),
    removeLike: (likeId) => dispatch(removeLike(likeId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
