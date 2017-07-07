import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS
} from '../actions/session_actions';

import {
  RECEIVE_TICKET_ORDER,
  RECEIVE_NEW_TICKET_ORDER
} from '../actions/ticket_order_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors:[],
  ticket_orders:[]
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, nullUser, {
        currentUser
      });
    case RECEIVE_TICKET_ORDER:
       let ticketOrders = action.ticketOrders;
       return merge({}, state, {
         ticketOrders
       });
   case RECEIVE_NEW_TICKET_ORDER:
        let ticketOrder = action.ticketOrder;
        let currentTicketOrders = state.ticketOrders;
        ticketOrders.push(ticketOrder);
        return merge({},state, {
          ticketOrders
        });
    case RECEIVE_ERRORS:
       const errors = action.errors;
       return merge({}, nullUser, {
         errors
       });
    default:
      return state;
  }
};

export default SessionReducer;
