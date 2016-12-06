import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import NewSession from './newsession_container';

class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  _redirectIfLoggedIn (_, replace) {
    if (!store.getState().session.currentUser) {
      replace('/login');
    }
  }

  render() {
    return (
      <Provider store={ this.props.store }>
        <Router history={ hashHistory }>
          <Route path="/login" component={NewSession}/>
          <Route path="/" component={ App } onEnter={this._redirectIfLoggedIn}>

          </Route>
        </Router>
      </Provider>
    )
  }
}

export default Root;
