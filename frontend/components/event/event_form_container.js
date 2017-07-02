import { connect  } from 'react-redux';
import EventForm from './event_form';
import { createEvent, selectEvent, updateEventState }
          from '../../actions/event_actions';
import { editEvent } from '../../actions/event_actions';
import { requestAllTopic } from '../../actions/topic_action';
import { selectallTopics } from '../../reducers/topic_selectors';

const mapStateToProps = (state, ownProps) => {
  const eventId = null;
  const event = null;
  const errors = state.errors;
  if (ownProps.match.params.postId) {
    // eventId = ownProps.match.params.eventId;
    // event = selectEvent(state, eventId);
  }
  return ({
    event: state.singleEvent,
    topics: selectallTopics(state),
    errors
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    createEvent: (event) => dispatch(createEvent(event)),
    updateEventState: (event) => dispatch(updateEventState(event)),
    requestAllTopic: () => dispatch(requestAllTopic())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);
