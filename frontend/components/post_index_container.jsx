import { connect } from 'react-redux'
import PostIndex from './post_index';
import { fetchPosts, createPost, receivePost, receivePosts } from '../actions/post_actions';


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
)(PostIndex);
