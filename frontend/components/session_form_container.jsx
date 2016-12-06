import { connect } from 'react-redux';

import SessionForm from './session_form';

import {login, signup} from '../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    loggedIn: state.session.currentUser ? true : false,
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const isLoginForm = (ownProps.location.pathname === '/login');
  return {
    formType: isLoginForm ? 'login' : 'signup',
    processForm: isLoginForm ?
      (user) => dispatch(login(user)) :
      (user) => dispatch(signup(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
