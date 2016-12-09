import React from 'react';

class UserProfileCover extends React.Component {
  constructor(params) {
    super(params);

    this.aboutUser = this.aboutUser.bind(this)
  }

  componentDidMount() {
    this.props.getUser(this.props.profileId);
  }

  componentWillUpdate(nextProps) {
    if (this.props.profileId !== nextProps.profileId) {

      this.props.getUser(nextProps.profileId);
    }
  }

  aboutUser() {
    
  }

  render() {
    const fullName = this.props.user ? `${this.props.user.firstname} ${this.props.user.lastname}` : ""

    return (
      <div className="profile-topper">
        <div className="profile-cover-photo" style={{"background":"url(http://www.placecorgi.com/850/315)"}}>
          <div className="profile-cover-info">
            <div className="profile-cover-name">{fullName}</div>
          </div>
          <div className="profile-cover-buttons">
            <div className="profile-cover-friend">Add Friend</div>
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
    )
  }

}

export default UserProfileCover;
