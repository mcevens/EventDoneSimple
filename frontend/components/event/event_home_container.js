import React from 'react';
import { connect } from 'react-redux';
import EventHome from './event_home';
import { requestAllEvent, deleteEvent }
  from '../../actions/event_actions';
import { selectallEvents }
  from '../../reducers/event_selectors';
import { requestAllEventBookMark, createBookmark }
  from '../../actions/event_bookmark_actions';
import {  selectallEventBookMarks }
  from '../../reducers/event_bookmark_selectors';

const mapStateToProps = (state) => {
return(  {
  events: selectallEvents(state),
  eventBookmarks: selectallEventBookMarks(state),
  currentUser: state.session.currentUser
});
};

const mapDispatchToProps = (dispatch) => ({
  requestAllEvent: () => dispatch(requestAllEvent()),
  requestAllEventBookMark: () => dispatch(requestAllEventBookMark()),
  deleteEvent: (id) => dispatch(deleteEvent(id)),
  createBookmark:(eventId) => dispatch(createBookmark(eventId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventHome);
