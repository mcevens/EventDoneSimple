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
    this.state = {

    };
  }

  render(){
    let event = this.props.event;
    let ticketsData = event.tickets;

    return(
      <div>
        <div className="select-ticket-container">
          <div className="select-ticket-header">
              <h1>Register</h1>
          </div>
           <div className="select-ticket-content">
              <div className="select-ticket-items">
                 {ticketsData.map(
                   ticket => <SelectTicketItem key={ticket.id} ticket={ticket}/>
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
                    1
                  </label>
                </div>
                <div>
                  <label>
                    USD
                  </label>
                  <label>
                    {"$22.09"}
                  </label>
                </div>
              </div>
              <div className="select-ticket-action">
                 <button>
                    CHECKOUT
                 </button>
              </div>
           </div>
        </div>
      </div>
    );
  }

}

export default SelectTicket;
