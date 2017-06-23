import * as APIUtil from '../util/event_util.js';
export const RECEIVE_ALL_EVENT = 'RECEIVE_ALL_EVENT';
export const RECEIVE_SINGLE_EVENT = 'RECEIVE_SINGLE_EVENT';
export const RECEIVE_NEW_EVENT = 'RECEIVE_NEW_EVENT';
export const RECEIVE_EDITED_EVENT = 'RECEIVE_NEW_EVENT';
export const RECEIVE_EVENT_ERRORS = 'RECEIVE_EVENT_ERRORS';
export const DELETE_EVENT = 'DELETE_EVENT';

export const receiveAllEvent = (events) => ({
  type: RECEIVE_ALL_EVENT,
  events
});

export const requestAllEvent = () => (dispatch) => {
  return APIUtil.fetchAllEvent().then(events => dispatch(receiveAllEvent(events)));
};

export const receiveSingleEvent = (event) => ({
  type: RECEIVE_SINGLE_EVENT,
  event
});

export const requestSingleEvent = (id) => (dispatch) => {
  return APIUtil.fetchSingleEvent(id).then(event => {
      dispatch(receiveSingleEvent(event));
      return event;
    }
  );
};

export const deleteEvent = id => dispatch => {
 return APIUtil.deleteEvent(id).then((deletedEvent) => {
     dispatch(deleteEventAction({}));
     return deleteEvent;
  });
};

export const createEvent = event => dispatch => {
 return APIUtil.createEvent(event).then(eventCreated => {
    dispatch(receiveNewEvent(eventCreated));
    return event;
  }).fail(err => dispatch(receiveEventErrors(err.responseJSON)));
};

export const editEvent = event => dispatch => {
 return APIUtil.editEvent(event).then(eventEdited => {
    dispatch(receiveEditedEvent(eventEdited));
    return event;
  }).fail(err => dispatch(receiveEventErrors(err.responseJSON)));
};

export const receiveNewEvent = event => ({
  type: RECEIVE_NEW_EVENT,
  event
});

export const receiveEditedEvent = event => ({
  type: RECEIVE_EDITED_EVENT,
  event
});

export const receiveEventErrors =  errors => ({
  type: RECEIVE_EVENT_ERRORS,
  errors
});

export const deleteEventAction = () => ({
  type: DELETE_EVENT
});
