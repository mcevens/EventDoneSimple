import { connect  } from 'react-redux';
import EventForm from './event_form';
import { createEvent } from '../../actions/event_actions';
import { editEvent } from '../../actions/event_actions';

const mapStateToProps = ({errors}) => ({
  errors
});

const mapDispatchToProps = (dispatch) => {
  return({
    createEvent: (event) => dispatch(createEvent(event))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);
