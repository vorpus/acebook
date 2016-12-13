import { connect } from 'react-redux'
import PostIndex from './post_index';
import { fetchPosts, createPost, receivePost, receivePosts } from '../actions/post_actions';
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
