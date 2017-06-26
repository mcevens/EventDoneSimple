import React from 'react';

class TicketTable extends React.Component{
  constructor(props){
    super(props);
    this.initialFreeTicketClick = this.initialFreeTicketClick.bind(this);
    this.initialPaidTicketClick = this.initialPaidTicketClick.bind(this);
    this.initialDonationTicketClick = this.initialDonationTicketClick.bind(this);

  }

  initialFreeTicketClick(){
    
  }

  initialPaidTicketClick(){

  }

  initialDonationTicketClick(){

  }

  render(){

  return (<div>
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
      <section>

      </section>
      <footer>
        <button onClick={this.initialFreeTicketClick}>
          FREE TICKET
        </button>
        <button onClick={this.initialPaidTicketClick}>
          PAID TICKET
        </button>
        <button onClick={this.initialDonationTicketClick}>
          DONATION
        </button>
      </footer>
    </div>);
  }
}


export default TicketTable;
