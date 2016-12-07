import React from 'react';

class PostIndex extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const {posts} = this.props;
    const postItems = Object.values(posts).map((e,idx) => {
      return (
        <div key={idx} className="body-content-col">
          {e.email} says {e.body}
        </div>
      )
    })

    return(
      <div className="main-body-content">
        {postItems}
      </div>
    )
  }
}

export default PostIndex;
