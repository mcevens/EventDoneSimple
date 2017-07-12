import React from 'react';
import { connect} from 'react-redux';
import GlobalHeader from '../global_header';
import SelectTicketItem from './select_ticket_item';
import {
  Route,
  Redirect,
  Switch,
  Link,
} from 'react-router-dom';

class SelectTicket extends React.Component{
  constructor(props){
    super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let event = this.props.event;
    let ticketOrders = [];
    let ticketsData = event.tickets;

    ticketsData.forEach( ticketData =>{
        if (ticketData.ticketOrder) {
          ticketOrders.push(ticketData.ticketOrder);
        }
      });
     this.props.createTicketOrder(ticketOrders);
  }


  render(){
    let event = this.props.event;
    let ticketsData = event.tickets;
    let quantity = 0 ;
    let totalPrice = 0 ;
    let ticketOrders = [];

    ticketsData.forEach( ticketData =>{
      if (ticketData.ticketOrder) {
        quantity += Number(ticketData.ticketOrder.quantity);
        totalPrice += ticketData.price * Number(ticketData.ticketOrder.quantity);
        ticketOrders.push(ticketData.ticketOrder);
      }
     }
    );

    return(
      <div>
        <div className="select-ticket-container">
          <div className="select-ticket-header">
              <h1>Register</h1>
          </div>
           <div className="select-ticket-content">
              <div className="select-ticket-items">
                 {ticketsData.map(
                   (ticket,pos) => <SelectTicketItem key={ticket.id}
                              createTicketOrder = {this.props.createTicketOrder}
                              updateEventState = {this.props.updateEventState}
                              ticket={ticket}
                              event ={event}
                              pos = {pos}
                              />
                 )}
              </div>
           </div>
           <div className="select-ticket-footer">
              <div className="select-ticket-other-info">
                <div>
                  <label>
                    QTY :
                  </label>
                  <label>
                    {quantity}
                  </label>
                </div>
                <div>
                  <label>
                    USD
                  </label>
                  <label>
                    {totalPrice}
                  </label>
                </div>
              </div>
              <div className="select-ticket-action">
                <form onSubmit={this.handleSubmit}>
                 <button >
                    CHECKOUT
                 </button>
               </form>
              </div>
           </div>
        </div>
      </div>
    );
  }

}

export default SelectTicket;
