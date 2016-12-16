import React from 'react';
import NewPostContainer from './new_post_container';
import { Link } from 'react-router';
import TimeAgo from 'react-timeago';
import PostComments from './post_comments_container';

class PostIndex extends React.Component {
  constructor() {
    super();

    this.state = {
      page: 1,
      body: '',
    }

    this.nextPage = this.nextPage.bind(this);
    this._handleScroll = this._handleScroll.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.editPost = this.editPost.bind(this);
  }

  _handleScroll() {
    let curPos = $(window).scrollTop() + $(window).height();
    let totalHeight = $(document).height();
    if (curPos/totalHeight > 0.8 && !this.props.loading) {
        this.nextPage();
    }
  }

  componentDidMount() {
    this.props.fetchPosts(this.props.profileId);
    document.addEventListener("scroll", this._handleScroll)
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this._handleScroll)
  }

  deletePost(id) {
    this.props.deletePost(id).then(
      () => {this.props.fetchPosts(this.props.profileId)}
    )
  }

  editPost(e, id) {
    let postBody = $(e.target).parents().eq(4).find('.post-body-edit')
    this.setState({
      body: postBody[0].innerHTML
    })
    postBody.toggleClass('edit-hidden')
  }

  componentWillUpdate(nextProps) {
    if (!store.getState().session.currentUser) {
      this.props.router.push('/login');
    }
    if (this.props.profileId !== nextProps.profileId) {
      this.props.fetchPosts(nextProps.profileId);
    }
  }

  nextPage() {
    let pageNum = this.state.page + 1
    this.setState({
      page: pageNum
    });
    this.props.fetchMorePosts(this.props.profileId, pageNum)
  }


  render() {
    const {postKeys, posts} = this.props;

    const arrow = (<strong className="tagged-user-arrow">▶</strong>)

    const loadingAnimation = (
      <div className="timeline-wrapper">
          <div className="timeline-item">
              <div className="animated-background">
                  <div className="background-masker header-top"></div>
                  <div className="background-masker header-left"></div>
                  <div className="background-masker header-right"></div>
                  <div className="background-masker header-bottom"></div>
                  <div className="background-masker subheader-left"></div>
                  <div className="background-masker subheader-right"></div>
                  <div className="background-masker subheader-bottom"></div>
                  <div className="background-masker content-top"></div>
                  <div className="background-masker content-first-end"></div>
                  <div className="background-masker content-second-line"></div>
                  <div className="background-masker content-second-end"></div>
                  <div className="background-masker content-third-line"></div>
                  <div className="background-masker content-third-end"></div>
              </div>
          </div>
      </div>
    );

    const endOfPage = (
      <div className="body-content-col">
        <div className="post-content-post">
          There are no more posts to show.
        </div>
      </div>
    )

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

      let postLikes = () => {
        if (posts[postId].likes) {
          const howMany = Object.keys(posts[postId].likes).length;
          const likeOrLikes = howMany > 1 ? "likes" : "like"
          return(
            <div className="post-content-likes">
            <i className="material-icons">thumb_up</i> {howMany} {likeOrLikes}
            </div>
          )
        }
      }

      let addLike = () => {
        this.props.addLike(postId).then((success)=>{
          this.props.fetchPost(success.like.post_id);
        });
      }

      let removeLike = (likeId, likePostId) => {

        this.props.removeLike(likeId).then((success)=>{
          this.props.fetchPost(likePostId);
        });
      }

      let likeButton = () => {
        if (!store.getState().session.currentUser) {
          return (<h1>not logged in</h1>);
        }
        let liked = false;
        let likeId, likePostId;

        if (posts[postId].likes) {
          Object.keys(posts[postId].likes).forEach((key)=> {
            if (posts[postId].likes[key].userId === store.getState().session.currentUser.id) {
              likeId = key;
              likePostId = postId;
              liked = true;
            }
          })
        }



        if (!liked) {
          return (
            <div className="post-content-actions-like" onClick={addLike}>
              <i className="material-icons">thumb_up</i> Like
            </div>
          )
        } else {
          return (
            <div className="post-content-actions-like liked" onClick={() => removeLike(likeId, likePostId)}>
              <i className="material-icons">thumb_up</i> Liked
            </div>
          )
        }
      }

      let postImage = () => {
        if (posts[postId].image) {
          return(
            <img className="post-image" src={posts[postId].image} />
          )
        }
      }

      let handleInput = (e) => {
        this.setState({
          body: e.currentTarget.value
        });
      }

      let submitEdit = (e, postId) => {
        this.props.editPost(postId, {body: this.state.body})
        $(e.target).parents().eq(2).find('.post-body-edit').toggleClass('edit-hidden')
      }

      let postBody = () => {
        if (store.getState().session.currentUser.id === posts[postId].author.id) {
          return (
            <div className="post-body-text group">
              <div className="post-body-edit">
                {posts[postId].body}
              </div>
              <div className="post-body-edit edit-hidden">
                <textarea value={this.state.body} onChange={(e) => handleInput(e)}>
                </textarea>
                <div className="post-body-edit-done" onClick={(e) => submitEdit(e, postId)}>Edit</div>
              </div>
            </div>
          )
        } else {
          return (
            posts[postId].body
          )
        }
      }

      let selectCommentBox = (e) => {
        $(e.target).parent().parent().siblings().find('input').focus()
      }

      const style = {backgroundImage:"url("+posts[postId].author.profilepic+")"};

      let editDropdown = () => {
        if (store.getState().session.currentUser.id === posts[postId].author.id) {
          return(
            <div className="post-dropdown">
              <i className="material-icons">arrow_drop_down</i>
              <div className="post-dropdown-options">
                <ul>
                  <li onClick={(e) => {this.editPost(e, postId)}}>Edit</li>
                  <li onClick={() => {this.deletePost(postId)}}>Delete</li>
                </ul>
              </div>
            </div>
          );
        }
      }

      return (

        <div key={postId} className="body-content-col">
          <div className="post-content-post">
            <div className="post-content-topper group">
              <div className="post-content-thumb" style={style}>
              </div>
              <div className="post-content-name group">
                <Link to={`/profile/${posts[postId].author.id}`} className="author-in-post">{posts[postId].author.firstname} {posts[postId].author.lastname}</Link>
                {taggedLink()}
                <br/>
                <div className="post-content-timestamp">
                  <TimeAgo date={posts[postId].created_at} minPeriod="60" />
                </div>
              </div>
              {editDropdown()}
            </div>

            <div className="post-content-body">
              {postBody()}
              {postImage()}
            </div>

            <div className="post-content-actions group">
              {likeButton()}

              <div className="post-content-actions-like" onClick={selectCommentBox}>
                <i className="material-icons">comment</i> Comment
              </div>
            </div>

          </div>
          <div className="post-content-footer">
            {postLikes()}
            <div className="post-content-comments">
              <PostComments comments={posts[postId].comments} postId={postId}/>
            </div>
          </div>
        </div>
      )
    })
    if (this.props.loading) {
      return(
        <div>
          <NewPostContainer profileId={this.props.profileId} />

          {loadingAnimation}
        </div>
      );
    }
    else {
      return(
        <div>
          <NewPostContainer profileId={this.props.profileId} />
          {postItems}
          {endOfPage}
        </div>
      );
    }

  }
}

export default PostIndex;
