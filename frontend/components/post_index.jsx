import React from 'react';
import NewPostContainer from './new_post_container';
import { Link } from 'react-router';
import TimeAgo from 'react-timeago';

class PostIndex extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchPosts(this.props.profileId);
  }

  componentWillUpdate(nextProps) {
    if (this.props.profileId !== nextProps.profileId) {

      this.props.fetchPosts(nextProps.profileId);
    }
  }

  render() {
    const {postKeys, posts} = this.props;
    const postItems = postKeys.map(postId => {
      return (
        <div key={postId} className="body-content-col">
          <div className="post-content-post">
            <div className="post-content-topper group">
              <div className="post-content-thumb">
                <img src="http://placecorgi.com/40/40" alt="" />
              </div>
              <div className="post-content-name group">
                <Link to={`/profile/${posts[postId].id}`}>{posts[postId].email}</Link>
                <br/>
                <div className="post-content-timestamp">
                  <TimeAgo date={posts[postId].created_at} minPeriod="60" />
                </div>
              </div>

            </div>

            <div className="post-content-body">
              {posts[postId].body}
            </div>

            <div className="post-content-actions group">
              <div className="post-content-actions-like">
                <i className="material-icons">thumb_up</i> Like
              </div>

              <div className="post-content-actions-like">
                <i className="material-icons">comment</i> Comment
              </div>
            </div>

          </div>
        </div>
      )
    })

    return(
      <div>
        <NewPostContainer />
        {postItems}
      </div>
    )
  }
}

export default PostIndex;
