import React from 'react';
import { connect } from 'react-redux';
import EventRegistration from './event_registration';
import { receiveSingleEvent } from '../../actions/event_actions';
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
)(EventRegistration);
