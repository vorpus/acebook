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

    const arrow = (<strong className="tagged-user-arrow">▶</strong>)

    const postItems = postKeys.map(postId => {

      let taggedLink = () => {
        if (posts[postId].tagged) {
          return (
            <div className="tagged-user-in-post">
              {arrow}<Link to={`/profile/${posts[postId].tagged.id}`}>{posts[postId].tagged.firstname} {posts[postId].tagged.lastname}</Link>
            </div>
          )
        }
      }

      return (
        <div key={postId} className="body-content-col">
          <div className="post-content-post">
            <div className="post-content-topper group">
              <div className="post-content-thumb">
                <img src="http://placecorgi.com/40/40" alt="" />
              </div>
              <div className="post-content-name group">
                <Link to={`/profile/${posts[postId].author.id}`} className="author-in-post">{posts[postId].author.firstname} {posts[postId].author.lastname}</Link>
                {taggedLink()}
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
        <NewPostContainer profileId={this.props.profileId} />
        {postItems}
      </div>
    )
  }
}

export default PostIndex;
