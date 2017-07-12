// export const createTicketOrder = (ticketOrders) => {
//   return $.ajax({
//     method: 'POST',
//     url: 'api/ticket_orders/',
//     data : { ticketOrders }
//   });
// };
export const createTicketOrder = (ticketOrders) => {
  return $.ajax({
    method: 'POST',
    url: 'api/ticket_orders/',
    data: JSON.stringify(ticketOrders),
    dataType: "json",
    contentType: 'application/json'
  });
};
// $.ajax(
// {
//   type: "POST",
//   url: url,
//   data: JSON.stringify(data),
//   dataType: "json",
//   contentType: 'application/json'
// }
// );
