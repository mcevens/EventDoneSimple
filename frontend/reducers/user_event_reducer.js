import {
  RECEIVE_USER_EVENT,
} from '../actions/event_actions';
import { merge } from 'lodash';

const _defaultState = {};

const userEventReducer  = (state = _defaultState, action) => {
  Object.freeze(state);
  let nextState;
  switch (action.type) {
    case RECEIVE_USER_EVENT:
      nextState = {};
      merge(nextState, state, action.events);
      return action.events;
    default:
      return state;
  }
};

export default userEventReducer;
