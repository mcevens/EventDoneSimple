import React from 'react';
import EventShow from './event_show';
import { receiveSingleEvent } from '../../actions/event_actions';
import { connect } from 'react-redux';
import { selectEvent } from '../../reducers/event_selectors.js';

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.eventId;
  const event = selectEvent(state, eventId);

  return ({
    eventId: eventId,
    event: event
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    requestSingleEvent: (id) => dispatch(receiveSingleEvent(id))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventShow);
