import React from 'react';

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      image: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.resetPostForm = this.resetPostForm.bind(this);
    this.uploadNewPhoto = this.uploadNewPhoto.bind(this);
  }

  resetPostForm() {
    this.setState({
      body: '',
      image: null
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    var formData = new FormData();
    formData.append("post[body]", this.state.body);
    if (this.state.image) {
      formData.append("post[image]", this.state.image);
    }

    this.props.createPost(formData, this.props.profileId).then(()=>{
      this.resetPostForm();
    })

  }

  uploadNewPhoto(e) {
    var reader = new FileReader();
    var file = e.currentTarget.files[0];
    reader.onloadend = function() {
      this.setState({ image: file });
    }.bind(this);

    reader.readAsDataURL(file);

  }

  handleInput(e) {
    const name = e.currentTarget.name;

    this.setState({
      [name]: e.currentTarget.value
    });
  }



  render() {
    let style;
    if (this.props.currentUser) {
      style = {backgroundImage:"url("+this.props.currentUser.profilepic+")"};
    }

    const attachedImageName = () => {
      if (this.state.image) {
        const imgName = this.state.image.name.length > 20 ? this.state.image.name.substring(0,20)+"..." : this.state.image.name
        return (
          <div className="new-post-attachment-name">Photo: {imgName}</div>
        )
      } else {
        return (
          <div></div>
        )
      }
    }

    return (
      <div className="body-content-col group">
        <form className="new-post-form"
              action="index.html"
              onSubmit={this.handleSubmit}
              >
          <div className="new-post-padded group">
            <div className="new-post-upload-photo">
              <a onClick={ () => {
                $('#post-pic-input').click()
              }}>
                <i className="material-icons">add_a_photo</i>
                Photo/Video
              </a>
              <input id="post-pic-input" type="file" onChange={this.uploadNewPhoto}/>
            </div>
            <div className="new-post-thumb" style={style}>
            </div>
            <textarea name="body" rows="2" cols="80"
              onChange={this.handleInput}
              placeholder="What's on your mind?" value={this.state.body}/>
          </div>
          <div className="new-post-bottom group">
            <div className="new-post-adds">
              {attachedImageName()}
            </div>
            <button type="submit" name="">Post</button>
          </div>


        </form>
      </div>
    )
  }
}

export default NewPost;
