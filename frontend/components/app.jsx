import React from 'react';
import GreetingContainer from './greeting_container';
import PostIndexContainer from './post_index_container';
import { Link } from 'react-router';


const App = ({ children }) => (
  <div>
  <GreetingContainer />
  <section className="main-body group">
    <div className="main-body-left dead">
      <ul className="main-left-mainlinks">
        <Link to={`/`}>
            <li><i className="material-icons">group</i> News Feed</li>
        </Link>
      </ul>

      <strong className="main-left-title">Other projects</strong>
      <ul className="main-left-shortcuts">
        <a href="http://lizha.ng" target="_blank">
          <li><i className="material-icons">accessibility</i> Portfolio</li>
        </a>
        <a href="https://vorpus.github.io/TreeJS/" target="_blank">
          <li><i className="material-icons">call_split</i> Trees</li>
        </a>
      </ul>

      <strong className="main-left-title">Play games</strong>
      <ul className="main-left-explore">
        <a href="https://vorpus.github.io/PicassoJS/" target="_blank">
          <li><i className="material-icons">bubble_chart</i> Picasso</li>
        </a>
        <a href="https://vorpus.github.io/theSims0/" target="_blank">
          <li><i className="material-icons">face</i> The Sims v0</li>
        </a>
        <a href="https://vorpus.github.io/architect/" target="_blank">
          <li><i className="material-icons">open_with</i> Architect</li>
        </a>
        <a href="https://vorpus.github.io/minesweeper/" target="_blank">
          <li><i className="material-icons">grid_on</i> Minesweeper</li>
        </a>
        <a href="http://vorpus.github.io/snake_js/" target="_blank">
          <li><i className="material-icons">timeline</i> Snake</li>
        </a>
      </ul>

    </div>

    <div className="main-body-content">
      <PostIndexContainer />
    </div>

    <div className="main-body-right-positioner">
      <div className="main-body-right">


        <div className="body-right-col">
          <strong className="main-left-title">Sponsored</strong>
          <a href="https://github.com/vorpus/acebook">
            <img src="https://s3.amazonaws.com/acebook-pro/img/drunktocat.png" target="_blank" />
            <strong className="main-right-title">Project Github</strong>
          </a>
          <p className="main-left-p">Check out the source code and documentation for this app! Also the wireframes/green squares that made Acebook possible!</p>

          <a href="https://www.linkedin.com/in/zhangio">
            <img src="https://s3.amazonaws.com/acebook-pro/img/bravo.jpeg" target="_blank" />
            <strong className="main-right-title">Linkedin</strong>
          </a>
          <p className="main-left-p">Find me on linkedin and download my resume!</p>

        </div>

        <div className="body-right-col">
          <p>builtWith ( React · jQuery · Ruby · Rails · AWS · CSS · HTML )</p>
        </div>

        <footer className="body-right-footer">
          <p>♠acebook © 2017</p>
        </footer>
      </div>
    </div>
  </section>
    { children }
  </div>
);

export default App;
