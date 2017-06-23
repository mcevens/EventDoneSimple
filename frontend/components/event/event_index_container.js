import React from 'react';
import { connect } from 'react-redux';
import EventIndex from './event_index';
import { requestAllEvent, deleteEvent } from '../../actions/event_actions';
import { selectallEvents } from '../../reducers/event_selectors';

const mapStateToProps = (state) => ({
  events: selectallEvents(state)
});

const mapDispatchToProps = (dispatch) => ({
  requestAllEvent: () => dispatch(requestAllEvent()),
  deleteEvent: (id) => dispatch(deleteEvent(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventIndex);
