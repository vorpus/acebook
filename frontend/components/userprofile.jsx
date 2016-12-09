import React from 'react';
import GreetingContainer from './greeting_container';
import PostIndexContainer from './post_index_container';

class UserProfile extends React.Component {
  constructor(params) {
    super(params);

    this.addFriend = this.addFriend.bind(this);
    this.removeFriendship = this.removeFriendship.bind(this);
    this.acceptFriendship = this.acceptFriendship.bind(this);
  }

  componentDidMount() {
    this.props.getUser(this.props.params.id);
    this.props.findFriend(this.props.params.id);
  }

  componentWillUpdate(nextProps) {
    if (this.props.params.id !== nextProps.params.id) {
      this.props.getUser(nextProps.params.id);
    }
  }

  aboutUser() {
    let birthday, current_town, home_town, relationship, workplace, school;
    if (this.props.user) {
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
    } else {
      return (<div>test</div>)
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

  friendButton() {
    if (this.props.friendRelationship) {
      if (this.props.friendRelationship.status === "active") {
        return(<div onClick={this.removeFriendship}>Friends</div>);
      } else {
        if (this.props.friendRelationship.user1 == this.props.params.id) {
          return(<div onClick={this.acceptFriendship}>Accept Friendship</div>);
        } else {
          return(<div onClick={this.removeFriendship}>Pending...</div>);
        }
      }
    } else {
      if (this.props.params.id == this.props.currentUser.id) {
        return(<div>Update Profile</div>)
      } else {
        return(<div onClick={this.addFriend}>Add Friend</div>);
      }

    }
  }

  render() {
    const fullName = this.props.user ? `${this.props.user.firstname} ${this.props.user.lastname}` : ""
    const firstName = this.props.user ? `${this.props.user.firstname}` : ""

    return (
      <div>
      <GreetingContainer />

      <section className="profile-body">
        <div className="profile-topper">
          <div className="profile-cover-photo" style={{"background":"url(http://www.placecorgi.com/850/315)"}}>
            <div className="profile-cover-info">
              <div className="profile-cover-name">{fullName}</div>
            </div>
            <div className="profile-cover-buttons">
              <div className="profile-cover-friend">{this.friendButton()}</div>
            </div>
          </div>

          <div className="profile-topper-bottom">
            <div className="profile-picture">
              <div className="profile-picture-picture" style={{"background":"url(http://www.placecorgi.com/160/160)"}}></div>
            </div>
            <ul className="profile-navigation">
              <li><a href="#">Timeline</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Friends</a></li>
              <li><a href="#">Photos</a></li>
              <li><a href="#">More</a></li>
            </ul>
          </div>
        </div>

        <div className="profile-left">
          <div className="profile-left-content">
            <strong>About {firstName}</strong>
            {this.aboutUser()}
          </div>

          <div className="profile-left-content">
            test
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
