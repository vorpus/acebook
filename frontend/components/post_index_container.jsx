import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PostIndex from './post_index';
import { fetchPost, fetchPosts, fetchMorePosts, createPost, editPost, deletePost, receivePost, receivePosts } from '../actions/post_actions';
import { addLike, removeLike } from '../actions/like_actions';

const mapStateToProps = (state) => {

  const sortedKeys = (posts) => {
    let keyvals = Object.keys(posts);
    let timestamps = [];
    let sortedIndicies = [];
    for (let i = 0; i < keyvals.length; i++) {
      timestamps.push(posts[keyvals[i]].created_at);
    }
    let sortedTimes = timestamps.slice(0).sort().reverse();

    for (let i = 0; i < sortedTimes.length; i++) {
      sortedIndicies.push(keyvals[timestamps.indexOf(sortedTimes[i])]);
    }
    return sortedIndicies;
  }

  return {
    postKeys: sortedKeys(state.posts),
    posts: state.posts,
    errors: state.session.errors,
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPost: (postId) => dispatch(fetchPost(postId)),
    fetchPosts: (data) => dispatch(fetchPosts(data)),
    fetchMorePosts: (data, page) => dispatch(fetchMorePosts(data, page)),
    createPost: (post) => dispatch(createPost(post)),
    deletePost: (postId) => dispatch(deletePost(postId)),
    editPost: (postId, data) => dispatch(editPost(postId, data)),
    addLike: (postId) => dispatch(addLike(postId)),
    removeLike: (likeId) => dispatch(removeLike(likeId))
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex));
