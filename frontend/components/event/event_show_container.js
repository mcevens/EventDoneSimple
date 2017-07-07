import React from 'react';
import EventShow from './event_show';
import { receiveSingleEvent } from '../../actions/event_actions';
import { openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { selectEvent } from '../../reducers/event_selectors.js';
import { withRouter } from 'react-router-dom';
import { createTicketOrder, updateTicketOrderState }
          from '../../actions/ticket_order_actions';

const mapStateToProps = (state, ownProps) => {

  debugger
  const eventId = ownProps.match.params.eventId;
  const event = selectEvent(state, eventId);
  return ({
    eventId: eventId,
    event: event,
    session: state.session
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
