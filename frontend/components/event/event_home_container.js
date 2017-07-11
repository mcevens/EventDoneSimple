import React from 'react';
import { connect } from 'react-redux';
import EventHome from './event_home';
import { requestAllEvent, deleteEvent }
  from '../../actions/event_actions';
import { selectallEvents }
  from '../../reducers/event_selectors';
import { destroyBookmark, createBookmark }
  from '../../actions/event_bookmark_actions';


const mapStateToProps = (state) => {
return(  {
  events: selectallEvents(state),
  currentUser: state.session.currentUser
});
};

const mapDispatchToProps = (dispatch) => ({
  requestAllEvent: () => dispatch(requestAllEvent()),
  destroyBookmark: id => dispatch(destroyBookmark(id)),
  createBookmark: bookmark => dispatch(createBookmark(bookmark))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventHome);
