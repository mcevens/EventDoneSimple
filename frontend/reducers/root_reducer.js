import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import topicReducer from './topic_reducer';
import eventReducer from './event_reducer';
import eventBookmarkReducer from './event_bookmark_reducer';
import singleEventReducer from './single_event_reducer';

export default combineReducers({
  session: sessionReducer,
  topics: topicReducer,
  events: eventReducer,
  eventBookmarks: eventBookmarkReducer,
  singleEvent: singleEventReducer
});
