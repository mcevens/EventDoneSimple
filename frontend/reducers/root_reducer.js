import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import tweetsReducer from './tweet_reducer';

export default combineReducers({
  session: sessionReducer
});
