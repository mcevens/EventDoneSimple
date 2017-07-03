import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CategoryEvents from './category_events';
import { fetchSingleTopic } from '../../actions/topic_action';

const mapStateToProps = (state, props) => {
  return({
  topics: state.topics,
  match: props.match,
  topic: state.singleTopic
});
};

const mapDispatchToProps = (dispatch) => ({
  fetchSingleTopic: (name) => dispatch(fetchSingleTopic(name))
});

export default withRouter(
connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryEvents)
);
