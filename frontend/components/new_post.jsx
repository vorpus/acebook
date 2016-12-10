import React from 'react';

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.resetPostForm = this.resetPostForm.bind(this);
  }

  resetPostForm() {
    this.setState({
      body: ''
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    
    this.props.createPost(this.state, this.props.profileId).then(()=>{
      this.resetPostForm();
    })

  }

  handleInput(e) {
    const name = e.currentTarget.name;

    this.setState({
      [name]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div className="body-content-col group">
        <form className="new-post-form"
              action="index.html"
              onSubmit={this.handleSubmit}
              >
          <div className="new-post-padded group">
            <div className="new-post-upload-photo">
              <a href="#">
                <i className="material-icons">add_a_photo</i>
                Photo/Video
              </a>
            </div>
            <div className="new-post-thumb">
              <img src="http://placecorgi.com/40/40" alt="" />
            </div>
            <textarea name="body" rows="2" cols="80"
              onChange={this.handleInput}
              placeholder="What's on your mind?" value={this.state.body}/>
          </div>
          <div className="new-post-bottom group">
            <div className="new-post-adds group">
                <a href="#">A</a><a href="#">B</a><a href="#">C</a>
            </div>
            <button type="submit" name="">Post</button>
          </div>


        </form>
      </div>
    )
  }
}

export default NewPost;
