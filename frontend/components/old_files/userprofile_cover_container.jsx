import { connect } from 'react-redux';

import UserProfileCover from './userprofile_cover';
import { getUser } from '../actions/user_actions';

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    errors: state.session.errors
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUser: (userId) => dispatch(getUser(userId)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileCover);
