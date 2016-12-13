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
            <h2>Connect with friends and the <br/>world around you on Facebook.</h2>
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
              <p><strong>Find more</strong> of what you're looking for with Facebook Search.</p>
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
            <a href="#"><li>Español</li></a>
            <a href="#"><li>Français (France)</li></a>
            <a href="#"><li>中文(简体)</li></a>
            <a href="#"><li>العربية</li></a>
            <a href="#"><li>Português (Brasil)</li></a>
            <a href="#"><li>Italiano</li></a>
            <a href="#"><li>한국어</li></a>
            <a href="#"><li>Deutsch</li></a>
            <a href="#"><li>हिन्दी</li></a>
            <a href="#"><li>日本語</li></a>
          </ul>
        </nav>

        <nav className="bottom-navs group">
          <ul>
            <li><a href="#">Sign Up</a></li>
            <li><a href="#">Log In</a></li>
            <li><a href="#">Messenger</a></li>
            <li><a href="#">Facebook Lite</a></li>
            <li><a href="#">Mobile</a></li>
            <li><a href="#">Find Friends</a></li>
            <li><a href="#">Badges</a></li>
            <li><a href="#">People</a></li>
            <li><a href="#">Pages</a></li>
            <li><a href="#">Places</a></li>
            <li><a href="#">Games</a></li>
            <li><a href="#">Locations</a></li>
            <li><a href="#">Celebrities</a></li>
            <li><a href="#">Groups</a></li>
            <li><a href="#">Moments</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Create Ad</a></li>
            <li><a href="#">Create Page</a></li>
            <li><a href="#">Developers</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Ad Choices</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </nav>

        <div className="copyright">acebook © 2016</div>
        </section>
      </footer>
    </div>
  );
};

export default NewSession;
