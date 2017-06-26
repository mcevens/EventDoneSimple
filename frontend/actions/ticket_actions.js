export const RECEIVE_NEW_TICKET = 'RECEIVE_NEW_TICKET';

export const receiveNewTicket = (event, ticket) => ({
  type: RECEIVE_NEW_TICKET,
  ticket
});
