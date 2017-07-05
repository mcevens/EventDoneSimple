import React from 'react';
import EventShow from './event_show';
import { receiveSingleEvent } from '../../actions/event_actions';
import { openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { selectEvent } from '../../reducers/event_selectors.js';
import { withRouter } from 'react-router-dom';

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
    requestSingleEvent: (id) => dispatch(receiveSingleEvent(id)),
    openModal: (component) => dispatch(openModal(component))
  });
};

export default withRouter(
connect(
  mapStateToProps,
  mapDispatchToProps
)(EventShow)
);
