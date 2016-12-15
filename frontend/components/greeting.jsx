import React from 'react';
import { Link } from 'react-router';


class Greeting extends React.Component {
  constructor() {
    super();

    this.state = {
      search: ''
    }

    this.log_out = this.log_out.bind(this);
    this.yourname = this.yourname.bind(this);
    this.startSearch = this.startSearch.bind(this);
    this.friendReqs = this.friendReqs.bind(this);
    this.acceptFriendship = this.acceptFriendship.bind(this);
  }


  log_out() {
    this.props.logout().then(() => this.props.router.push('/login'));
  }

  yourname() {
    if (this.props.currentUser) {
      return (<Link to={`/profile/${this.props.currentUser.id}`}>{this.props.currentUser.firstname}</Link>);
    } else {
      return "";
    }
  }

  startSearch(e) {
    e.preventDefault();
  }

  componentDidMount() {
    this.props.findFriendRequests();
  }

  acceptFriendship(e, id) {
    this.props.acceptFriend(id).then(
      () => this.props.findFriendRequests()
    )
  }

  removeFriendship(e, id) {
    this.props.removeFriend(id).then(
      () => this.props.findFriendRequests()
    )
  }

  friendBadge() {
    let howMany = Object.keys(this.props.pendingFriends);
    if (howMany.length) {
      return (
        <div className="new-request-badge"></div>
      );
    } else {
      return (
        <div></div>
      )
    }
  }

  friendReqs () {
    let howMany = Object.keys(this.props.pendingFriends);
    if (howMany.length) {
      return howMany.map((friendshipId) => {
        if (friendshipId > 0) {
          let friendship = this.props.pendingFriends[friendshipId]

          let style;
          if (friendship.friender.profilepic) {
            style = {backgroundImage:"url("+friendship.friender.profilepic+")"};
          } else {
            style = "";
          }
          return (
            <li key={friendshipId} className="requester-group group">
              <div className="requester-picture" style={style}></div>

              <div className="requester-name">
                <Link to={`/profile/${friendship.friender.id}`}>
                {friendship.friender.firstname} {friendship.friender.lastname}
                </Link>
              </div>

              <div className="requester-actions">
                <div onClick={(e) => {this.acceptFriendship(e, friendship.id)}}>Approve</div>
                <div onClick={(e) => {this.removeFriendship(e, friendship.id)}}>Deny</div>
              </div>
            </li>
          );
        }
      });
    } else {
      return "No pending friend requests.";
    }
  }

  render() {
    return (
        <header className="main-header">
          <div className="main-header-container">

            <div className="searchbar-component">
              <div className="header-logo" onClick={()=>{this.props.router.push('/')}}>♠</div>
              <form className="header-searchbar" onSubmit={this.startSearch}>
                <input type="text" name="" value={this.state.search} placeholder="Search ♠acebook" />
                <button type="submit" name="submit"><i className="material-icons">search</i></button>
              </form>
            </div>

            <div className="navigation-component">

              <ul className="navigation-text">
                <li>{this.yourname()}</li>
                <li><a href="#">Home</a></li>
              </ul>

              <ul className="navigation-icons">
                <li>
                  <i className="material-icons">group</i>
                  {this.friendBadge()}
                  <div className="navigation-dropdown">
                    <ul>
                      {this.friendReqs()}
                    </ul>
                  </div>
                </li>
                <li>
                  <i className="material-icons">question_answer</i>
                </li>
                <li>
                  <i className="material-icons">public</i>
                </li>
              </ul>

              <ul className="privacy-icons" onClick={this.log_out}>
                <li><i className="material-icons">lock</i></li>
                <li><i className="material-icons">arrow_drop_down</i></li>
                <div className="privacy-dropdown">Log Out</div>
              </ul>
            </div>
          </div>
        </header>
    );
  }
};

export default Greeting;
