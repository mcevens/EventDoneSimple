export const createTicketOrder = (ticketOrder) => {
  return $.ajax({
    method: 'POST',
    url: 'api/ticket_orders/',
    data : { ticketOrder }
  });
};
