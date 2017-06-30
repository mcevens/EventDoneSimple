import * as APIUtil from '../util/event_bookmark_util.js';
export const RECEIVE_EVENT_BOOKMARKS = 'RECEIVE_EVENT_BOOKMARKS';
export const RECEIVE_NEW_BOOKMARK = 'RECEIVE_NEW_BOOKMARK';
export const REQUEST_BOOKMARKS = 'REQUEST_BOOKMARKS';
// import receiveAllEvent from '../event/';

export const receiveEventBookMarks = eventBookmarks => {
  return ({
    type: RECEIVE_EVENT_BOOKMARKS,
    eventBookmarks
  });
};

export const requestAllEventBookMark = () => (dispatch) => {
  return APIUtil.fetchAllEventBookmark()
  .then(eventBookmarks => dispatch(receiveEventBookMarks(eventBookmarks)));
};

// export const createBookmark = bookmark => dispatch => {
//  return APIUtil.createEventBookmark(bookmark).then(events => {
//     dispatch(receiveAllEvent(events));
//     return bookmark;
//   }).fail(err => console.log(err));
// };

export const receiveNewBookmark = bookmark => {
return ({
  type: RECEIVE_NEW_BOOKMARK,
  bookmark
});
};

export const requestBookmarks = (currentUser) => {
  return {
    type: REQUEST_BOOKMARKS,
    currentUser
  };
};
