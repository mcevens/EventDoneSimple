import React from 'react';
import ReactDOM from 'react-dom';
import TicketTableItem from './ticket_table_item';

class TicketTable extends React.Component {

  constructor(props){
    super(props);
  }



  render(){
    debugger
    const ticketsData = this.props.tickets;
    const ticketArray = this.props.ticket_array;
    if (ticketsData){
      return (<div className="ticket_table">
          <header>
            <ul>
              <li>
                Ticket name
              </li>
              <li>
                Quantity available
              </li>
              <li>
                Price
              </li>
              <li>
                Actions
              </li>
            </ul>
          </header>
          <div>
            {ticketArray.map(
              ticketId => <TicketTableItem
              updateEventState={this.props.updateEventState}
              event={this.props.event}
              key={ticketId}
              pos={ticketId}
              ticket={ticketsData[ticketId]}/>
            )}
          </div>
        </div>);
    }else{
        return (<div className="ticket_table">
      </div>);

    }

  }
}

// {ticketsData.map(
//   ticket => <TicketTableItem  ticket={ticket}/>
// )}

export default TicketTable;
