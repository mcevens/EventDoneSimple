import React from 'react';
import { connect } from 'react-redux';
import EventIndex from './event_index';
import { requestAllEvent, deleteEvent }
  from '../../actions/event_actions';
import { selectallEvents }
  from '../../reducers/event_selectors';
import { requestAllEventBookMark }
  from '../../actions/event_bookmark_actions';
import {  selectallEventBookMarks }
  from '../../reducers/event_bookmark_selectors';

const mapStateToProps = (state) => ({
  events: selectallEvents(state),
  eventBookmarks: selectallEventBookMarks(state)
});

const mapDispatchToProps = (dispatch) => ({
  requestAllEvent: () => dispatch(requestAllEvent()),
  requestAllEventBookMark: () => dispatch(requestAllEventBookMark()),
  deleteEvent: (id) => dispatch(deleteEvent(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventIndex);
