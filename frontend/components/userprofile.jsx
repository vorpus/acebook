import React from 'react';
import GreetingContainer from './greeting_container';
import PostIndexContainer from './post_index_container';

class UserProfile extends React.Component {
  constructor(params) {
    super(params);
  }

  render() {
    return (
      <div>
      <GreetingContainer />

      <section className="profile-body">
        <div className="profile-topper">
          <div className="profile-cover-photo" style={{"background":"url(http://www.placecorgi.com/850/315)"}}>
            <div className="profile-cover-info">
              <div className="profile-cover-name">Action Corgi</div>
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

        <div className="profile-left">
          <div className="profile-left-content">
            test
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
