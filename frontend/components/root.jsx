import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import SessionFormContainer from './session_form_container';

class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={ this.props.store }>
        <Router history={ hashHistory }>
          <Route path="/" component={ App }>
          <Route path="/login" component={SessionFormContainer} onEnter={this._redirectIfLoggedIn} />
          <Route path="/signup" component={SessionFormContainer} onEnter={this._redirectIfLoggedIn} />

          </Route>
        </Router>
      </Provider>
    )
  }
}

export default Root;
