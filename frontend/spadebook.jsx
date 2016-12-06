import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root'

import {createUser, loginUser, logoutUser} from './util/api_util';
window.createUser = createUser;
window.loginUser = loginUser;
window.logoutUser = logoutUser;

import {login} from './actions/session_actions';
window.login = login;

document.addEventListener("DOMContentLoaded", ()=> {
  const root = document.getElementById('root');

  let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;

  ReactDOM.render(<Root store={store}/>, root);
});
