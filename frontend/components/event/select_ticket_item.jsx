import React from 'react';
import { Link } from 'react-router-dom';

class SelectTicketItem extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      quantity: 0,
      itemBorderLeftWidth: 'none'
    };

    this.ticketQuantityChange = this.ticketQuantityChange.bind(this);
  }

  ticketQuantityChange(e){
    let event = this.props.event;
    let pos = this.props.pos;
    let value = e.currentTarget.value;
    let ticketOrder = {};
    let ticket = {};
    Object.assign(ticket, this.props.ticket);

    if (value > 0 ){
      this.setState({
        itemBorderLeftWidth: '1px solid #0093D7'
      });
      ticketOrder["quantity"] = value;
      ticketOrder["ticket_id"] = ticket.id;
      ticket["ticketOrder"] = ticketOrder ;
    }else{
      this.setState({
        itemBorderLeftWidth: 'none'
      });
      ticket.ticketOrder = {};
      delete ticket.ticketOrder;
    }
    event.tickets[pos] = ticket;
    this.props.updateEventState(event);
  }

  render(){

    const ticket = this.props.ticket;
    return(
    <div className="select-ticket-item-decoration">
      <div style={{ border:this.state.itemBorderLeftWidth}}
          className="select-ticket-item">
        <div className="select-ticket-info">
            <h2>{ticket.name}</h2>
            <div>
              <span>{ `$ ${ticket.price}` }</span>
            </div>
        </div>
        <div className="select-ticket-quantity">
          <select onChange={this.ticketQuantityChange}>
               <option value="0">0</option>
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
          </select>
        </div>
      </div>
      </div>
    );
  }
}

export default SelectTicketItem;
