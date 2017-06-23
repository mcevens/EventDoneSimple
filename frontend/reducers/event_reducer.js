import {
  RECEIVE_ALL_EVENT,
  RECEIVE_NEW_EVENT,
  RECEIVE_EDITED_EVENT,
  DELETE_EVENT
} from '../actions/event_actions';
import { merge } from 'lodash';

const _defaultState = {};

const eventReducer  = (state = _defaultState, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_ALL_EVENT:
       nextState = {};
       merge(nextState, state, action.events);
       return nextState;
    case RECEIVE_NEW_EVENT:
       nextState = {};
       merge(nextState, state, {[action.event.id]: action.event});
       return nextState;
    case RECEIVE_EDITED_EVENT:
        nextState = {};
        merge(nextState, state, {[action.event.id]: action.event});
        return nextState;
    case DELETE_EVENT:
        return {};
    default:
      return state;
  }
};

export default eventReducer;
