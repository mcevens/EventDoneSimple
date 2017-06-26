import { connect  } from 'react-redux';
import EventForm from './event_form';
import { createEvent, selectEvent } from '../../actions/event_actions';
import { editEvent } from '../../actions/event_actions';

const mapStateToProps = (state, ownProps) => {
  const eventId = null;
  const event = null;
  const errors = state.errors;
  if (ownProps.match.params.postId) {
    // eventId = ownProps.match.params.eventId;
    // event = selectEvent(state, eventId);
  }
  return ({
    event: event,
    errors
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    createEvent: (event) => dispatch(createEvent(event))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);
