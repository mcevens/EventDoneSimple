import React from 'react';
import { Link } from 'react-router-dom';
import { merge } from 'lodash';


class TicketTableItem extends React.Component{
  constructor(props){
    super(props);

    this.update = this.update.bind(this);
    this.state = {
      name: '',
      quantity: 0
    };
  }

  componentDidMount(){
    const ticket = this.props.ticket;
    this.setState({
      name: ticket.name,
      quantity: ticket.quantity,
      type: ticket.type
    });
  }


  update(property) {
    let pos = this.props.pos;
    let ticketsData = this.props.event.tickets_list;
    let ticketItem = ticketsData[pos];
    let event = this.props.event;
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
              <label>{this.state.type}</label>
            </li>
            <li>
              <button>Delete</button>
            </li>
          </ul>
      </div>
    );
  }
}

export default TicketTableItem;
