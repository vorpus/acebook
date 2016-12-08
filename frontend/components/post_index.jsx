import React from 'react';
import NewPostContainer from './new_post_container';

class PostIndex extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const {postKeys, posts} = this.props;
    const postItems = postKeys.map(postId => {
      debugger
      return (
        <div key={postId} className="body-content-col">
          <div className="post-content-post">
            <div className="post-content-topper group">
              <div className="post-content-thumb">
                <img src="http://placecorgi.com/40/40" alt="" />
              </div>
              <div className="post-content-name group">
                {posts[postId].email}
                <br/>
                <div className="post-content-timestamp">
                  1 hour ago
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
      <div className="main-body-content">
        <NewPostContainer />
        {postItems}
      </div>
    )
  }
}

export default PostIndex;
