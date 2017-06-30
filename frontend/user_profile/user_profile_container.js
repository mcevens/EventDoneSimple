import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { selectSavedEvents } from '../../reducers/selectors';
import { selectUpcomingEvents } from '../../reducers/selectors';
import { selectPastEvents } from '../../reducers/selectors';
import { requestEvents } from '../../actions/event_actions';
import { requestBookmarks } from '../../actions/bookmark_actions';
import { requestTickets } from '../../actions/ticket_actions';
import { requestCategories } from '../../actions/category_actions';
import { requestTypes } from '../../actions/type_actions';

const mapStateToProps = state => {
  const currentUser = state.session.currentUser;
  return {
    currentUser,
    types: state.types,
    categories: state.categories,
    savedEvents: selectSavedEvents(state.events, state.bookmarks),
    upcomingEvents: selectUpcomingEvents(state.events, state.tickets),
    pastEvents: selectPastEvents(state.events, state.tickets),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestEvents: () => dispatch(requestEvents()),
    requestTypes: () => dispatch(requestTypes()),
    requestCategories: () => dispatch(requestCategories()),
    requestBookmarks: user => dispatch(requestBookmarks(user)),
    requestTickets: user => dispatch(requestTickets(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
