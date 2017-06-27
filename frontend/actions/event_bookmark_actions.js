import * as APIUtil from '../util/event_bookmark_util.js';
export const RECEIVE_EVENT_BOOKMARKS = 'RECEIVE_EVENT_BOOKMARKS';

export const receiveEventBookMarks = eventBookmarks => {
  return ({
    type: RECEIVE_EVENT_BOOKMARKS,
    eventBookmarks
  });
};

export const requestAllEventBookMark = () => (dispatch) => {
  //debugger
  return APIUtil.fetchAllEventBookmark()
  .then(eventBookmarks => dispatch(receiveEventBookMarks(eventBookmarks)));
};
