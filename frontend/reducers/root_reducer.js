import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import topicReducer from './topic_reducer';

export default combineReducers({
  session: sessionReducer,
  topics: topicReducer
});
