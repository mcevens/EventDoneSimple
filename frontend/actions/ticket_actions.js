export const RECEIVE_NEW_TICKET = 'RECEIVE_NEW_TICKET';
export const REQUEST_TICKETS = 'REQUEST_TICKETS';

export const receiveNewTicket = (event, ticket) => ({
  type: RECEIVE_NEW_TICKET,
  ticket
});

export const requestTickets = (currentUser) => {
  return {
    type: REQUEST_TICKETS,
    currentUser
  };
};
