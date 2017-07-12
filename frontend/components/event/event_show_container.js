import React from 'react';
import EventShow from './event_show';
import { requestSingleEvent , updateEventState }
              from '../../actions/event_actions';
import { openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { selectEvent } from '../../reducers/event_selectors.js';
import { withRouter } from 'react-router-dom';
import { createTicketOrder, updateTicketOrderState }
          from '../../actions/ticket_order_actions';
import { destroyEventBookmark, createEventBookmark }
                  from '../../actions/event_bookmark_actions';

const mapStateToProps = (state, ownProps) => {

  let eventId = ownProps.match.params.eventId;
  let event = selectEvent(state, eventId);
  if (state.events.event) {
    event = state.events.event;
    event["tickets"] = state.events.tickets;
  }
  return ({
    eventId: eventId,
    event: event,
    session: state.session,
    bookmark: state.bookmark
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    destroyEventBookmark: id => dispatch(destroyEventBookmark(id)),
    createEventBookmark: bookmark => dispatch(createEventBookmark(bookmark)),
    requestSingleEvent: (id) => dispatch(requestSingleEvent(id)),
    updateEventState:(event) => dispatch(updateEventState(event)),
    openModal: (component) => dispatch(openModal(component))
  });
};

export default withRouter(
connect(
  mapStateToProps,
  mapDispatchToProps
)(EventShow)
);
