import { connect  } from 'react-redux';
import SelectTicket from './select_ticket';
import { createTicketOrder, updateTicketOrderState }
          from '../../actions/ticket_order_actions';
import { withRouter } from 'react-router-dom';
const mapStateToProps = (state, ownProps) => {
  debugger
  const eventId = null;
  const event = null;
  const errors = state.errors;
  // if (ownProps.match.params.postId) {
  //   // eventId = ownProps.match.params.eventId;
  //   // event = selectEvent(state, eventId);
  // }
  return ({
    session: state.session,
    errors
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    createTicketOrder: (ticketOrder) => dispatch(createTicketOrder(ticketOrder)),
    updateTicketOrderState: (ticketOrder) => dispatch(updateTicketOrderState(ticketOrder))
  });
};

export default withRouter(
connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectTicket)
);
