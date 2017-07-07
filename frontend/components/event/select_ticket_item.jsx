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
    let value = e.currentTarget.value;
    let ticketOrder = null;
    if (value > 0 ){
      this.setState({
        itemBorderLeftWidth: '1px solid #0093D7'
      });
    }else{
      this.setState({
        itemBorderLeftWidth: 'none'
      });
    }
    debugger
    this.props.updateTicketOrderState(ticketOrder);
  }

  render(){
    debugger
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
