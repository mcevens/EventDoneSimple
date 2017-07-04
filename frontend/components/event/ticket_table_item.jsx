import React from 'react';
import { Link } from 'react-router-dom';
import { merge } from 'lodash';


class TicketTableItem extends React.Component{
  constructor(props){
    super(props);

    this.update = this.update.bind(this);
    this.deleteClick = this.deleteClick.bind(this);
    this.state = {
      name: '',
      quantity: 0,
      showLabel: 'block',
      showPrice: 'none',
    };
  }

  componentDidMount(){
    const ticket = this.props.ticket;
    let showLabel ='block';
    let showPrice = 'none';
    if (ticket.type === 'PAID') {
      showLabel = 'none';
      showPrice = 'block';
    }else{
      showLabel = 'block';
      showPrice = 'none';
    }

    this.setState({
      name: ticket.name,
      quantity: ticket.quantity,
      type: ticket.type,
      showLabel: showLabel,
      showPrice: showPrice,
    });
  }

  deleteClick(e){
    e.preventDefault();
    let pos = this.props.pos;
    let ticketsData = this.props.event.tickets_list;
    let event = {};
    Object.assign(event, this.props.event);
    delete ticketsData[pos] ;
    event.tickets_list = ticketsData;
    let index = event.tickets_array.indexOf(pos);
    event.tickets.splice(index, 1);
    event.tickets_array.splice(index, 1);
    this.props.updateEventState(event);
  }

  update(property) {
    let pos = this.props.pos;
    let ticketsData = this.props.event.tickets_list;
    let ticketItem = ticketsData[pos];
    let event = {};
    Object.assign(event, this.props.event);
    return (
        e => {
          this.setState({ [property]: e.target.value });
          ticketItem[property] = e.target.value;
          ticketsData[pos] = ticketItem ;
          event.tickets_list = ticketsData;
          this.props.updateEventState(event);
        }
    );

  }

  render(){

    return(
      <div className="ticket_table-item">
          <ul>
            <li>
              <input type="text"
                placeholder="Early Bird, RSVP..."
                value={this.state.name}
                onChange={this.update('name')}
                 />
            </li>
            <li>
              <input type="text"
                placeholder="100"
                value={this.state.quantity}
                onChange={this.update('quantity')}
                 />
            </li>
            <li>
              <div className="ticket_type">
                  <label style={{display:this.state.showLabel}}>{this.state.type}</label>
                  <input
                    style={{display:this.state.showPrice}}
                    type="text"
                    placeholder="15.00"
                    value={this.state.price}
                    onChange={this.update('price')}
                    />
              </div>
            </li>
            <li>
              <button onClick={this.deleteClick}>Delete</button>
            </li>
          </ul>
      </div>
    );
  }
}

export default TicketTableItem;
