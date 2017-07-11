import * as APIUtil from '../util/event_bookmark_util.js';

export const CREATE_BOOKMARK = 'CREATE_BOOKMARK';
export const RECEIVE_BOOKMARK = 'RECEIVE_BOOKMARK';
export const DESTROY_BOOKMARK = 'DESTROY_BOOKMARK';
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';
export const REQUEST_BOOKMARKS = 'REQUEST_BOOKMARKS';
export const RECEIVE_BOOKMARKS = 'RECEIVE_BOOKMARKS';
export const RECEIVE_BOOKMARK_ERRORS = 'RECEIVE_BOOKMARK_ERRORS';

export const createBookmark = bookmark => {
  return {
    type: CREATE_BOOKMARK,
    bookmark
  };
};

export const receiveBookmark = bookmark => {
  return {
    type: RECEIVE_BOOKMARK,
    bookmark
  };
};

export const destroyBookmark = id => {
  return {
    type: DESTROY_BOOKMARK,
    id
  };
};

export const removeBookmark = bookmark => {
  return {
    type: REMOVE_BOOKMARK,
    bookmark
  };
};

export const requestBookmarks = (currentUser) => {
  return {
    type: REQUEST_BOOKMARKS,
    currentUser
  };
};

export const receiveBookmarks = bookmarks => {
  return {
    type: RECEIVE_BOOKMARKS,
    bookmarks
  };
};

export const receiveBookmarkErrors =  errors => ({
  type: RECEIVE_BOOKMARK_ERRORS,
  errors
});

export const createEventBookmark = bookmark => dispatch => {
 return APIUtil.createEventBookmark(bookmark).then(bookmarkCreated => {
    dispatch(receiveBookmark(bookmarkCreated));
    return bookmarkCreated;
  }).fail(err => dispatch(receiveBookmarkErrors(err.responseJSON)));
};

export const destroyEventBookmark = bookmark => dispatch => {
 return APIUtil.deleteEventBookmark(bookmark).then(bookmarkDeleted => {
    dispatch(receiveBookmark(bookmarkDeleted));
    return bookmarkDeleted;
  }).fail(err => dispatch(receiveBookmarkErrors(err.responseJSON)));
};
