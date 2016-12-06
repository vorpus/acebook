import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { logout } from '../actions/session_actions';

import Greeting from './greeting';

const mapStateToProps = (state) => {
  return({
    currentUser: state.session.currentUser,
  });
};

const mapDispatchToProps = (dispatch) => {

  return ({
    logout: () => {dispatch(logout()).then(
      () => {} //need to do something with routing
    );},
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting));
