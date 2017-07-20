import React from 'react';
import { connect } from 'react-redux';
import ManageEvent from './manage_event';
import { getUser }
  from '../../actions/session_actions';

const mapStateToProps = (state) => {
return(  {
  currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => ({
   getUser: userId => dispatch(getUser(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageEvent);
