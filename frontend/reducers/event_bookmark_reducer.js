import {
  RECEIVE_EVENT_BOOKMARKS , RECEIVE_NEW_BOOKMARK
  ,RECEIVE_BOOKMARKS, RECEIVE_BOOKMARK, REMOVE_BOOKMARK

} from '../actions/event_bookmark_actions.js';
import { merge } from 'lodash';
const defaultState = {};

const EventBookmarkReducer = (state = {}, action ) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOOKMARKS:
      const newBookmarks = {};
      action.bookmarks.forEach(bookmark => {
        newBookmarks[bookmark.id] = bookmark;
      });
      return Object.assign({}, state, newBookmarks);

    case RECEIVE_BOOKMARK:
      const newBookmark = {[action.bookmark.id]: action.bookmark};
      return Object.assign({}, state, newBookmark);

    case REMOVE_BOOKMARK:
      const newState = Object.assign({}, state);
      delete newState[action.bookmark.id];
      return newState;

    default:
      return state;
  }
};

export default EventBookmarkReducer;
