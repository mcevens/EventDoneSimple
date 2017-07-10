import React from 'react';
import { connect} from 'react-redux';
import GlobalHeader from '../global_header';
import SelectTicket from './select_ticket';
import SelectTicketContainer from './select_ticket_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
} from 'react-router-dom';
class EventShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        ticket_or_register : 'Register'
    };
    this.registerClick = this.registerClick.bind(this);
  }

  componentDidMount(){
    this.props.requestSingleEvent(this.props.eventId);
  }

  componentWillreceiveProps(nextProps){
    if (this.props.eventId !== nextProps.match.params.eventId) {
      this.props.requestSingleEvent(nextProps.match.params.eventId);
    }

  }

  registerClick(e){
    e.preventDefault();
    this.props.openModal(<SelectTicketContainer  event={this.props.event}/>);
  }

  render(){
    const event = this.props.event;
    const currentUser = this.props.current_user;
    let bookmarked = 'event-not-bookmarked';
    let tooltip = 'Save';
    let displaybookmark = 'none';
    if (event.bookmarked === true){
      bookmarked = 'event-bookmarked' ;
      tooltip = 'Save';
    }

    if (currentUser){
      displaybookmark = 'block';
    }

    return(
      <div>
        <GlobalHeader />
        <section className="app">
          <img className="event-show-background-image" src="" />

        <div className="event-show">

            <div className="event-show-header">
              <div className="event-show-header-image">
                <img src={event.image_url}></img>
              </div>
              <div className="event-show-header-left-pane">
                <div className="event-show-header-date">
                  <div>{event.start_date_month}</div>
                  <div>{event.start_date_day}</div>
                </div>
                <div className="event-show-header-title">
                    <h1>{event.title}</h1>
                </div>
                <div className="event-show-header-organizer">
                    <p> {`by ${ event.title }`} </p>
                </div>
                <div className="event-show-header-type-ticket" >
                   <label>FREE</label>
                </div>
              </div>

            </div>
             <div className="event-show-action">
               <div className="event-show-action-bookmark">

                   <form onSubmit={this.handleSubmit}>
                     <div className="icon-selected">
                        <i id="icon" className="fa fa-bookmark" aria-hidden="true"></i>
                      </div>
                 </form>

               </div>
               <div className="event-show-action-share-register">
                    <button onClick={this.registerClick}>
                        {this.state.ticket_or_register}
                    </button>
               </div>
             </div>
             <div className="event-show-detail">
                 <div className="event-show-detail-description">
                   <div>
                     <h3>DESCRIPTION</h3>
                     <div>
                       <p>{event.description}</p>
                     </div>
                   </div>
                 </div>
                 <div className="event-show-detail-other-info">
                   <div>
                     <h3>DATE AND TIME</h3>
                       <div>
                         <p>{event.start_date}</p>
                       </div>
                       <div>
                         <p>{event.start_time}</p>
                       </div>
                   </div>
                   <div>
                        <h3>Location</h3>
                          <div>
                            <p>{event.addresse_line1}</p>
                          </div>
                          <div>
                            <p>{event.start_time}</p>
                          </div>
                   </div>
                 </div>
             </div>
             <div className="event-show-organizer-wrapper">
               <div className="event-show-organizer-content">

               </div>
             </div>
        </div>
      </section>
      </div>
    );
  }
}

export default EventShow;
