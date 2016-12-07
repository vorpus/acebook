import React from 'react';
import GreetingContainer from './greeting_container';
import PostIndexContainer from './post_index_container';

const App = ({ children }) => (
  <div>
  <GreetingContainer />
  <section className="main-body">
    <div className="main-body-left">
      <ul className="main-left-mainlinks">
        <li><i className="material-icons">group</i> Li Zhang</li>
        <li><i className="material-icons">group</i> News Feed</li>
        <li><i className="material-icons">group</i> Messages</li>
      </ul>

      <strong className="main-left-title">Shortcuts</strong>
      <ul className="main-left-shortcuts">
        <li><i className="material-icons">group</i> The cool group</li>
        <li><i className="material-icons">group</i> Wedding planning</li>
        <li><i className="material-icons">group</i> fantasy football</li>
        <li><i className="material-icons">group</i> UT Class of 2016</li>
        <li><i className="material-icons">group</i> Electrical engineering</li>
        <li><i className="material-icons">group</i> Remy timepieces</li>
        <li><i className="material-icons">group</i> VGfashion</li>
        <li><i className="material-icons">arrow_drop_down</i> See More...</li>
      </ul>

      <strong className="main-left-title">Explore</strong>
      <ul className="main-left-explore">
        <li><i className="material-icons">group</i> Pages</li>
        <li><i className="material-icons">group</i> Groups</li>
        <li><i className="material-icons">group</i> Insights</li>
        <li><i className="material-icons">group</i> On This Day</li>
        <li><i className="material-icons">group</i> Manage Apps</li>
        <li><i className="material-icons">group</i> Pages Feed</li>
        <li><i className="material-icons">group</i> Photos</li>
        <li><i className="material-icons">arrow_drop_down</i> See More...</li>
      </ul>

      <strong className="main-left-title">Create</strong>
        <p className="main-left-p">Ad · Page · Group · Event · Fundraiser</p>
    </div>

    <PostIndexContainer />
    <div className="main-body-right-positioner">
      <div className="main-body-right">
        <div className="body-right-col">
          your pages
          <br />
          hello
        </div>

        <div className="body-right-col">
          test
        </div>

        <div className="body-right-col">
          <p>English (US) · Español · Português (Brasil) · Français (France) · Deutsch</p>
        </div>

        <footer className="body-right-footer">
          <p>Privacy · Terms · Advertising · Ad Choices · Cookies</p>
          <p>Facebook © 2016</p>
        </footer>
      </div>
    </div>
  </section>
    { children }
  </div>
);

export default App;
