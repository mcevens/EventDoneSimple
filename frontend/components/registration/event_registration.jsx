import React from 'react';
import { withRouter } from 'react-router-dom';
import GlobalHeader from '../global_header';


class EventRegistration extends React.Component{

  constructor(props){
    debugger
    super(props);
    this.state = {
      title: 'MidDAY MINGLE - Daughters day Party',
      adresse_line1: '587 MEACHAM AVE ELMONT',
      start_date: '2012-12-12',
      start_time: '08-08',
      end_date: '08-12',
      end_time: '08-23',
      description: 'ALELUYA',
      image_url: '',
      topic_id: 20,
      subtopic_id: 20,
      organizer_name: 'Alexandre',
      full_date: 'Saturday, July 15, 2017 from 11:00 AM to 2:00 PM (EDT)'
    };
  }

  componentWillreceiveProps(nextProps){
    if (this.props.eventId !== nextProps.match.params.eventId) {
      this.props.requestSingleEvent(nextProps.match.params.eventId);
    }
  }

  render(){

    return(
      <div className="event-registration">
        <GlobalHeader headerOrigin="event_index" />
        <section className="wrapper">
           <section className="order-info">
              <header>
                <h1>{this.state.title}</h1>
                <h2>{this.state.organizer_name}</h2>
                <h2>{this.state.full_date}</h2>
                <h2>{this.state.adresse_line1}</h2>
              </header>
               <div className="order-container">
                 <h3>Order Summary</h3>
                 <section>

                 </section>
               </div>
               <div className="order-container">
                 <h3>Registration Information</h3>
                 <form>
                   <fieldset>
                     <div></div>
                     <div className="row">
                       <label>First Name:</label>
                       <input type="text"></input>
                     </div>
                     <div className="row">
                       <label>Last Name:</label>
                       <input type="text"></input>
                     </div>
                     <div className="row">
                       <label>Email address:</label>
                       <input type="text"></input>
                     </div>
                     <div className="row">
                       <label>Confirm Email address:</label>
                       <input type="text"></input>
                     </div>
                   </fieldset>
                   <div>
                     <a>Confirm Registration</a>
                   </div>
                 </form>
               </div>
           </section>

           <section className="event-info">
              <div className="event-image">
                <img></img>
              </div>
              <div className="order-container">
                   <h3>When & Where</h3>
                <section>
                  <label>Adresse</label>
                   <label>Date & Time</label>
                </section>
              </div>
              <div>

                <h3>Organizer</h3>

                <section>
                    <div>Info Organizer</div>
                </section>
                <footer>
                  upcoming event on EventMadeSimple
                </footer>
              </div>
           </section>
        </section>
      </div>
    );

  }
}

export default EventRegistration;
