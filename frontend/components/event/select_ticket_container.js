import { connect  } from 'react-redux';
import SelectTicket from './select_ticket';
import { createTicketOrder }
          from '../../actions/ticket_order_actions';
import { updateTicketState }
          from '../../actions/ticket_actions';
import { requestSingleEvent , updateEventState }
                        from '../../actions/event_actions';
import { withRouter } from 'react-router-dom';
const mapStateToProps = (state, ownProps) =>{
  let eventId = null;
  let event = null;
  let errors = state.errors;
  if (state.events.event) {
    event = state.events.event;
    event["tickets"] = state.events.tickets;
  }
  return ({
    session: state.session,
    event: event,
    ticket: state.ticket,
    errors
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    createTicketOrder: (ticketOrder) => dispatch(createTicketOrder(ticketOrder)),
    updateTicketState: (ticket) => dispatch(updateTicketState(ticket))
  });
};

export default withRouter(
connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectTicket)
);
