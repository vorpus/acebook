import React from 'react';
import { Link } from 'react-router';

class PostComments extends React.Component {
  constructor(props) {
    super(props);

    this.allComments = this.allComments.bind(this);
    this.commentForm = this.commentForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.execDeleteComment = this.execDeleteComment.bind(this);

    this.state = {
      body: ''
    }
  }

  execDeleteComment(key, postId) {
    this.props.deleteComment(key).then(
      (success) => this.props.fetchPost(postId)
    )
  }

  allComments() {
    if (this.props.comments) {
      let comments = this.props.comments;
      let commentKeys = Object.keys(this.props.comments);

      return commentKeys.map((key) => {
        const picStyle = {backgroundImage:"url("+comments[key].authorpic+")"};

        let deleteComment = () => {
          if (store.getState().session.currentUser.id === comments[key].authorid) {
            return(
              <div className="comment-delete" onClick={() => this.execDeleteComment(key, comments[key].post_id)}>
                <i className="material-icons">delete_forever</i>
              </div>
            );
          }
        }

        return (
          <div key={key} className="post-comment-article group">
            <div className="post-comment-pic" style={picStyle}></div>
            <div className="post-comment-text">
              <div className="post-comment-author">
                <Link to={`/profile/${comments[key].authorid}`}>{comments[key].authorf} {comments[key].authorl}</Link>
              </div>
              <div className="post-comment-body">{comments[key].body}</div>
            </div>
            {deleteComment()}
          </div>
        );
      });
    }
  }

  handleInput(e) {
    this.setState({
      body: e.currentTarget.value
    });
  }

  resetForm(e) {
    this.setState({
      body: ''
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.props.postId, this.state).then(
      () => this.props.fetchPost(this.props.postId)
    ).then(
      () => this.resetForm()
    )
  }

  commentForm() {
    return(
      <div className="post-comment-addcomment">
        <form className="post-comment-addcomment-form" onSubmit={this.handleSubmit}>
          <input type="text" name="" placeholder="Write a comment..." value={this.state.body} onChange={this.handleInput}/>
        </form>
      </div>
    )
  }





  render() {
    return(
      <div>
        {this.allComments()}
        {this.commentForm()}
      </div>
    )
  }
}

export default PostComments
