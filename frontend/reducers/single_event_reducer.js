import {
  RECEIVE_ALL_EVENT,
  RECEIVE_NEW_EVENT,
  RECEIVE_EDITED_EVENT,
  DELETE_EVENT,
  RECEIVE_NEW_TICKET,
} from '../actions/event_actions';
import { merge } from 'lodash';

const _defaultState = {};

const singleEventReducer  = (state = _defaultState, action) => {
  Object.freeze(state);
  let nextState;
  
  switch (action.type) {
    case RECEIVE_NEW_EVENT:
       nextState = {};
       merge(nextState, state,  action.event);
       let test = nextState;
      return action.event;
    default:
      return state;
  }
};

export default singleEventReducer;
