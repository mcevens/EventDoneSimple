import * as APIUtil from '../util/ticket_order_util.js';
export const RECEIVE_NEW_TICKET_ORDER = 'RECEIVE_NEW_TICKET_ORDER';
export const RECEIVE_TICKET_ORDER_ERRORS = 'RECEIVE_TICKET_ORDER_ERRORS';

export const createTicketOrder = ticketOrder => dispatch => {
 return APIUtil.createTicketOrder(ticketOrder).then(ticketOrderCreated => {
    dispatch(receiveNewTicketOrder(ticketOrderCreated));
    return ticketOrder;
  }).fail(err => dispatch(receiveTicketOrderErrors(err.responseJSON)));
};

export const receiveNewTicketOrder = ticketOrder => {
  return ({
    type: RECEIVE_NEW_TICKET_ORDER,
    ticketOrder
  });
};

export const receiveTicketOrderErrors =  errors => ({
  type: RECEIVE_TICKET_ORDER_ERRORS,
  errors
});
