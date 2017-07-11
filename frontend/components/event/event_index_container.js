import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import EventIndex from './event_index';
import { requestAllEvent, deleteEvent }
  from '../../actions/event_actions';
import { selectallEvents }
  from '../../reducers/event_selectors';
  import { requestBookmarks }
    from '../../actions/event_bookmark_actions';

const mapStateToProps = (state) => ({
  events: selectallEvents(state),
  bookmarks: state.bookmarks
});

const mapDispatchToProps = (dispatch) => ({
  requestAllEvent: () => dispatch(requestAllEvent()),
  requestBookmarks: user => dispatch(requestBookmarks(user)),
  deleteEvent: (id) => dispatch(deleteEvent(id))
});

export default withRouter(
  connect(
  mapStateToProps,
  mapDispatchToProps
  )(EventIndex)
);
