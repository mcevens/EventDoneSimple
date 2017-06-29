import React from 'react';
import { connect} from 'react-redux';
import GlobalHeader from '../global_header';
import {
  Route,
  Redirect,
  Switch,
  Link,
} from 'react-router-dom';
class EventShow extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestSingleEvent(this.props.eventId);
  }

  componentWillreceiveProps(nextProps){
    if (this.props.eventId !== nextProps.match.params.eventId) {
      this.props.requestSingleEvent(nextProps.match.params.eventId);
    }
  }

  render(){
    const event = this.props.event;
    return(
      <div>
        <GlobalHeader />
        <section className="app">
        <div className="event-show">
            <div className="event-show-header">
              <div event-show-header-image>

              </div>
              <div className="event-show-header-left-pane">
                <div className="event-show-header-date">
                  <div>{event.start_date}</div>
                  <div>{event.start_date}</div>
                </div>
                <div className="event-show-header-title">
                    <h1>{event.title}</h1>
                </div>
                <div className="event-show-header-organizer">
                    <p> {`by ${ event.title }`} </p>
                </div>
              </div>
              <div className="event-show-header-right-pane">
                 <div className="event-show-header-type-ticket" >
                    <label>FREE</label>
                 </div>
              </div>

            </div>
             <div className="event-show-action">
               <div className="event-show-action-share-bookmark">
                 <div>
                   <form onSubmit={this.handleSubmit}>
                   <button>
                      Share
                   </button>
                 </form>
                 </div>
                 <div>
                   <form onSubmit={this.handleSubmit}>
                   <button>
                      Bookmark
                   </button>
                 </form>
                 </div>
               </div>
               <div className="event-show-action-share-register">
                   <Link to="/register">Register</Link>
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
