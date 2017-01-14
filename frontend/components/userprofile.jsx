import React from 'react';
import GreetingContainer from './greeting_container';
import PostIndexContainer from './post_index_container';

class UserProfile extends React.Component {
  constructor(params) {
    super(params);

    this.state = {
      imageUrl: "",
      imageFile: null,
      friendshipId: null,
    }

    this.addFriend = this.addFriend.bind(this);
    this.removeFriendship = this.removeFriendship.bind(this);
    this.acceptFriendship = this.acceptFriendship.bind(this);
    this.uploadNewPhoto = this.uploadNewPhoto.bind(this);
    this.updateCoverPicButton = this.updateCoverPicButton.bind(this);
    this.uploadCoverPhoto = this.uploadCoverPhoto.bind(this);
    this.submitProfileEdit = this.submitProfileEdit.bind(this);
    this.saveEditButton = this.saveEditButton.bind(this);
    this.refreshPostsAfterUpload = this.refreshPostsAfterUpload.bind(this);
  }

  componentDidMount() {
    this.props.getUser(this.props.params.id);
    this.props.findFriend(this.props.params.id);
  }

  componentWillUpdate(nextProps) {
    if (this.props.params.id !== nextProps.params.id) {
      this.props.getUser(nextProps.params.id);
      this.props.findFriend(nextProps.params.id);
    }
  }

  submitProfileEdit() {

    var formData = new FormData();
    formData.append("user[birthday]", new Date($('input[name="birthday"]').val()));
    formData.append("user[relationship]", $('input[name="relationship"]').val());
    formData.append("user[school]", $('input[name="school"]').val());
    formData.append("user[workplace]", $('input[name="workplace"]').val());
    formData.append("user[current_town]", $('input[name="current_town"]').val());

    this.props.updateUser(formData);

  }

  saveEditButton() {
    if (this.props.user) {
      if (this.props.currentUser.id === this.props.user.id) {
        return <div className="about-user-save" onClick={this.submitProfileEdit}>Save Changes</div>
      };
    };
  }

  aboutUser() {
    let birthday, current_town, home_town, relationship, workplace, school;

    if (this.props.user) {
      if (this.props.currentUser.id === this.props.user.id) {

        birthday = (<li><i className='material-icons'>card_giftcard</i> <input type="date" name="birthday" defaultValue={this.props.user.birthday} /></li>)
        relationship = (<li><i className='material-icons'>favorite</i> <input type="text" name="relationship" defaultValue={this.props.user.relationship} /></li>)
        school = (<li><i className='material-icons'>gavel</i> <input type="text" name="school" defaultValue={this.props.user.school} /></li>)
        workplace = (<li><i className='material-icons'>work</i> <input type="text" name="workplace" defaultValue={this.props.user.workplace} /></li>)
        current_town = (<li><i className='material-icons'>home</i> <input type="text" name="current_town" defaultValue={this.props.user.current_town} /></li>)


        return(
          <ul className="about-user">
          {birthday}
          {relationship}
          {school}
          {workplace}
          {current_town}
          </ul>
        )
      } else {
        if (this.props.user.birthday) {
          birthday = (<li><i className='material-icons'>card_giftcard</i> {this.props.user.birthday}</li>)
        }
        if (this.props.user.relationship) {
          relationship = (<li><i className='material-icons'>favorite</i> {this.props.user.relationship}</li>)
        }
        if (this.props.user.school) {
          school = (<li><i className='material-icons'>gavel</i> {this.props.user.school}</li>)
        }
        if (this.props.user.workplace) {
          workplace = (<li><i className='material-icons'>work</i> {this.props.user.workplace}</li>)
        }
        if (this.props.user.current_town) {
          current_town = (<li><i className='material-icons'>home</i> {this.props.user.current_town}</li>)
        }
        return(
          <ul className="about-user">
            {birthday}
            {relationship}
            {school}
            {workplace}
            {current_town}
          </ul>
        )
      }

    } else {
      return (<div>Nothing to show</div>)
    }
  }

  addFriend() {
    this.props.addFriend(this.props.params.id);
  }

  removeFriendship() {
    this.props.removeFriend(this.props.friendRelationship.id);
  }

  acceptFriendship() {
    this.props.acceptFriend(this.props.friendRelationship.id);
  }

  updateProfilePicButton() {
    if (this.props.currentUser) {
      if (this.props.params.id == this.props.currentUser.id) {
        return (
          <div className="profile-picture-editpic" onClick={ () => {
            $('#profile-pic-input').click()
          }}>

            <i className='material-icons'>camera_enhance</i>
            <form className="profile-picture-form" >
              <input id="profile-pic-input" type="file" name="" value="" onChange={this.uploadNewPhoto}/>
            </form>
          </div>
        );
      } else {
        return (<div></div>)
      }
    } else {
      return (<div></div>)
    }
  }

  updateCoverPicButton() {
    return (
      <div className="profile-cover-editpic" onClick={ () => {
        $('#profile-cover-input').click()
      }}>

        <div>Upload Cover Photo</div>
        <form className="profile-cover-form" >
          <input id="profile-cover-input" type="file" name="" value="" onChange={this.uploadCoverPhoto}/>
        </form>
      </div>

    )
  }

  uploadCoverPhoto(e) {

    var file = e.currentTarget.files[0];

    var formData = new FormData();
    formData.append("user[coverpic]", file);
    this.props.updateUser(formData);
  }

  uploadNewPhoto(e) {
    var file = e.currentTarget.files[0];
    var formData = new FormData();
    formData.append("user[profilepic]", file);
    this.props.updateUser(formData).then(() => this.refreshPostsAfterUpload() );
  }

  refreshPostsAfterUpload() {
    this.props.fetchPosts(this.props.params.id);
  }

  friendButton() {
    if (this.props.friendRelationship) {
      if (this.props.friendRelationship.status === "active") {
        return(
          <div onClick={this.removeFriendship}>
            <div className="profile-cover-friend-status">Friends</div>
            <div className="profile-cover-friend-toggle">Unfriend</div>
          </div>
        );
      } else {
        if (this.props.friendRelationship.user1 == this.props.params.id) {
          return(<div onClick={this.acceptFriendship}>Accept Friendship</div>);
        } else {
          return(
            <div onClick={this.removeFriendship}>
              <div className="profile-cover-friend-status">Pending Request</div>
              <div className="profile-cover-friend-toggle">Cancel Request</div>
            </div>
          );
        }
      }
    } else {
      if (this.props.currentUser) {
        if (this.props.params.id == this.props.currentUser.id) {
          return this.updateCoverPicButton();
        } else {
          return(<div onClick={this.addFriend}>Add Friend</div>);
        }
      }

    }
  }

  render() {

    const fullName = this.props.user ? `${this.props.user.firstname} ${this.props.user.lastname}` : ""
    const firstName = this.props.user ? `${this.props.user.firstname}` : ""

    const userCoverPic = this.props.user ? this.props.user.coverpic : ""
    const coverStyle = {backgroundImage:"url("+userCoverPic+")"};
    const userProfilePic = this.props.user ? this.props.user.profilepic : ""
    const profileStyle = {backgroundImage:"url("+userProfilePic+")"};

    return (
      <div>
      <GreetingContainer />

      <section className="profile-body">
        <div className="profile-topper">
          <div className="profile-cover-photo" style={coverStyle}>
            <div className="profile-cover-info">
              <div className="profile-cover-name">{fullName}</div>
            </div>
            <div className="profile-cover-buttons">
              <div className="profile-cover-friend">{this.friendButton()}</div>
            </div>
          </div>

          <div className="profile-topper-bottom">
            <div className="profile-picture">
              <div className="profile-picture-picture" style={profileStyle}>
                {this.updateProfilePicButton()}
              </div>
            </div>
            <ul className="profile-navigation">
              <li><a>Timeline</a></li>
            </ul>
          </div>
        </div>

        <div className="profile-left">
          <div className="profile-left-content">

            <strong>About {firstName}</strong>
            {this.saveEditButton()}
            {this.aboutUser()}
          </div>

        </div>

        <div className="profile-body-content">
          <PostIndexContainer profileId={this.props.params.id}/>
        </div>
      </section>
      </div>
    )
  }
}

export default UserProfile;
