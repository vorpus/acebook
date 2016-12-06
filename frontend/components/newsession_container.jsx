import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import {login, signup, receiveErrors} from '../actions/session_actions';
import NewSession from './newsession';

const mapStateToProps = (state) => {
  return {
    loggedIn: state.session.currentUser ? true : false,
    errors: state.session.errors
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processLogin: (user) => dispatch(login(user)),
    processSignup: (user) => dispatch(signup(user))
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NewSession));
