import React from 'react';


import SignupForm from './signup_form';
import SessionForm from './session_form';

const NewSession = ({loggedIn, errors, processLogin, processSignup, router}) => {

  return (
    <div className="loginBody">
      <header className="login-header">
        <div className="login-container">
          <p className="logo">♠acebook</p>
          <SessionForm loggedIn={loggedIn} errors={errors} processForm={processLogin} router={router} />
        </div>
      </header>

      <section className="login-bottom group">
        <div className="login-bottom-container">
          <article className="login-description">
            <h2>Connect with friends and the <br/>world around you on ♠acebook.</h2>
            <div className="login-description-item group">
              <i className="material-icons">web</i>
              <p><strong>See photos and updates</strong> from friends in News Feed.</p>
            </div>
            <div className="login-description-item group">
              <i className="material-icons">forum</i>
              <p><strong>Share what's new</strong> in your life on your Timeline.</p>
            </div>
            <div className="login-description-item group">
              <i className="material-icons">group</i>
              <p><strong>Find more</strong> of what you're looking for with ♠acebook Search.</p>
            </div>
          </article>

          <SignupForm  loggedIn={loggedIn} errors={errors} processForm={processSignup} router={router} />
        </div>

      </section>

      <footer className="session-footer">
        <section className="footer-container">
        <nav>
          <ul className="languages group">
            <li>English (US)</li>
            <a><li>Español</li></a>
            <a><li>Français (France)</li></a>
            <a><li>中文(简体)</li></a>
            <a><li>العربية</li></a>
            <a><li>Português (Brasil)</li></a>
            <a><li>Italiano</li></a>
            <a><li>한국어</li></a>
            <a><li>Deutsch</li></a>
            <a><li>हिन्दी</li></a>
            <a><li>日本語</li></a>
          </ul>
        </nav>

        <nav className="bottom-navs group">
          <ul>
            <li><a>Sign Up</a></li>
            <li><a>Log In</a></li>
            <li><a>Messenger</a></li>
            <li><a>Facebook Lite</a></li>
            <li><a>Mobile</a></li>
            <li><a>Find Friends</a></li>
            <li><a>Badges</a></li>
            <li><a>People</a></li>
            <li><a>Pages</a></li>
            <li><a>Places</a></li>
            <li><a>Games</a></li>
            <li><a>Locations</a></li>
            <li><a>Celebrities</a></li>
            <li><a>Groups</a></li>
            <li><a>Moments</a></li>
            <li><a>Instagram</a></li>
            <li><a>About</a></li>
            <li><a>Create Ad</a></li>
            <li><a>Create Page</a></li>
            <li><a>Developers</a></li>
            <li><a>Careers</a></li>
            <li><a>Privacy</a></li>
            <li><a>Cookies</a></li>
            <li><a>Ad Choices</a></li>
            <li><a>Terms</a></li>
            <li><a>Help</a></li>
          </ul>
        </nav>

        <div className="copyright">♠acebook © 2016</div>
        </section>
      </footer>
    </div>
  );
};

export default NewSession;
