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
    this.startSearch = this.startSearch.bind(this);

    this.searchResults = this.searchResults.bind(this);
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

  searchResults() {
    if (Object.keys(this.props.searchResults).length) {
      return Object.keys(this.props.searchResults).map((id) => {
        let style = {backgroundImage:"url("+this.props.searchResults[id].profilepic+")"};
        return (
          <li key={id} className="group">
            <div className="search-result-photo" style={style}>
            </div>
            <Link to={`/profile/${id}`} className="search-name-link">
              <div className="search-result-name">
                {this.props.searchResults[id].firstname} {this.props.searchResults[id].lastname}
              </div>
            </Link>

          </li>
        )
      });
    } else {
      return("no results");
    }
  }

  preventEnter(e) {
    e.preventDefault();
  }

  startSearch(e) {
    e.preventDefault();

    this.setState({
      search: e.currentTarget.value
    });

    this.props.searchUser(e.currentTarget.value);
  }

  componentDidMount() {
    this.props.findFriendRequests();

    let searchResultDisplay = $(document).find('.search-results');

    $(document).find('.header-searchbar input').focus(() => {
      searchResultDisplay.removeClass('hide-results')
    })
    $(document).find('.header-searchbar input').blur(() => {
      window.setTimeout(
        () => {searchResultDisplay.addClass('hide-results')
      }, 500);
    });
  }

  acceptFriendship(e, id) {
    this.props.acceptFriend(id).then(
      () => this.props.findFriendRequests()
    ).then(
      () => {this.props.fetchPosts(this.props.profileId)}
    )
  }

  removeFriendship(e, id) {
    this.props.removeFriend(id).then(
      () => this.props.findFriendRequests()
    ).then(
      () => {this.props.fetchPosts(this.props.profileId)}
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
              <form className="header-searchbar" onSubmit={this.preventEnter}>
                <input type="text" name="" value={this.state.search} placeholder="Search ♠acebook" onChange={this.startSearch}>
                </input>
                <button><i className="material-icons">search</i></button>
                <div className="search-results hide-results">
                  <ul>
                  {this.searchResults()}
                  </ul>
                </div>
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
