import { connect } from 'react-redux';
import SavedEvents from './saved_events';
import { selectSavedEvents } from '../../reducers/selectors';
import { requestEvents } from '../../actions/event_actions';
import { requestAllTopic } from '../../actions/topic_actions';
import { requestBookmarks } from '../../actions/bookmark_actions';

const mapStateToProps = state => {
  const currentUser = state.session.currentUser;
  return {
    currentUser,
    types: state.types,
    categories: state.categories,
    bookmarks: state.bookmarks,
    savedEvents: selectSavedEvents(state.events, state.bookmarks),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestEvents: () => dispatch(requestEvents()),
    requestBookmarks: user => dispatch(requestBookmarks(user)),
    requestAllTopic: () => dispatch(requestAllTopic())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SavedEvents);
