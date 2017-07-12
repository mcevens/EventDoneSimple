import {
  RECEIVE_NEW_TICKET_ORDER,
  RECEIVE_TICKET_ORDER_ERRORS
} from '../actions/event_actions';
import { merge } from 'lodash';

const _defaultState = {};

const ticketOrderReducer  = (state = _defaultState, action) => {
  Object.freeze(state);
  let nextState;
  switch (action.type) {
    case RECEIVE_NEW_TICKET_ORDER:
      nextState = {};
      merge(nextState, state, action.ticketOrder);
      return nextState;
    default:
      return state;
  }
};

export default ticketOrderReducer;
