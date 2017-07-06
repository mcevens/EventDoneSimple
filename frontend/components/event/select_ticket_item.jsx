import React from 'react';
import { Link } from 'react-router-dom';

class SelectTicketItem extends React.Component{
  constructor(props){
    super(props);
    this.ticket_quantity_change = this.ticket_quantity_change.bind(this);
  }

  ticketQuantityChange(){
    
  }

  render(){
    const ticket = this.props.ticket;
    return(
      <div className="select-ticket-item">
        <div className="select-ticket-info">
            <h2>{ticket.name}</h2>
            <div>
              <span>{ `$ ${ticket.price}` }</span>
            </div>
        </div>
        <div className="select-ticket-quantity">
          <select onChange={this.ticketQuantityChange()}>
               <option value="0">0</option>
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
          </select>
        </div>
      </div>
    );
  }
}

export default SelectTicketItem;
