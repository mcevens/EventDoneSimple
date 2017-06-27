import {RECEIVE_EVENT_BOOKMARKS} from '../actions/event_bookmark_actions.js';

import { merge } from 'lodash';
const defaultState = {};

const EventBookmarkReducer = (state = defaultState, action ) => {
  Object.freeze(state);

  let newState;
  switch (action.type) {
    case RECEIVE_EVENT_BOOKMARKS:
        newState = {};
        merge(newState, state, action.eventBookmarks);
        return action.eventBookmarks;
    default:
      return state;
  }
};

export default EventBookmarkReducer;
