import { connect  } from 'react-redux';
import TicketTable from './ticket_table';
import { createEvent, selectEvent } from '../../actions/event_actions';
import { editEvent } from '../../actions/event_actions';

// const mapDispatchToProps = (dispatch) => {
//   return({
//     addTicket: (event, ticket) => dispatch(addTicket(event, ticket))
//   });
// };

const mapDispatchToProps = (dispatch) => {
  return({
    createEvent: (event) => dispatch(createEvent(event))
  });
};
export default connect(
  null,
  mapDispatchToProps
)(TicketTable);
