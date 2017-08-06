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
    this.state = {
      bookmarked : null
    };
    this.registerClick = this.registerClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.requestSingleEvent(this.props.eventId);
  }

  componentWillreceiveProps(nextProps){
    if (this.props.eventId !== nextProps.match.params.eventId) {
      this.props.requestSingleEvent(nextProps.match.params.eventId);
    }

  }

  handleSubmit(e){
    let event = this.props.event;
    if (event.was_bookmarked === true) {
      this.props.destroyEventBookmark(event.id).then((data) => {
        this.setState({
          bookmarked:false
        });
      });
    } else {
      this.props.createEventBookmark(event.id).then((data) => {
        this.setState({
          bookmarked:true
        });
      });
    }
  }

  registerClick(e){
    e.preventDefault();
    this.props.openModal(<SelectTicketContainer
                          updateEventState={this.props.updateEventState}
                          event={this.props.event}/>);
  }

  render(){
    let event = this.props.event;
    if (this.state.bookmarked !== null) {
      event.was_bookmarked = this.state.bookmarked;
    }
    let currentUser = this.props.session.currentUser;
    let bookmarked = 'event-not-bookmarked';
    let tooltip = 'Save';
    let displaybookmark = 'block';
    if (event.was_bookmarked === true){
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
            <div className="event-show-background">

            </div>
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
                   <label>{event.price_range}</label>
                </div>
              </div>

            </div>
             <div className="event-show-action">
               <div className="event-show-action-bookmark">
                   <form onSubmit={this.handleSubmit}>
                     <button title={tooltip}>
                       <span style={{display:displaybookmark}}
                         className={bookmarked} id="rock">
                       </span>
                      </button>
                 </form>

               </div>
               <div className="event-show-action-share-register">
                    <button onClick={this.registerClick}>
                        Register
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
                         <p>{event.start_date_full_date}</p>
                       </div>
                       <div>
                         <p>{event.start_time_short }</p>
                       </div>
                   </div>
                   <div>
                        <h3>Location</h3>
                          <div>
                            <p>{event.adresse_line1}</p>
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
