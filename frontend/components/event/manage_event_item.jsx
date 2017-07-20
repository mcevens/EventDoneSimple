import React from 'react';
import { Link } from 'react-router-dom';

class EventHomeItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let event = this.props.event;

    return(
      <div className="manage-event-item">
         <div className="info">
           <div>
             <label className="event-title">
               {  event.title }
             </label>
           </div>
           <div>
             <label className="event-date">
               {  event.start_date_full_date }
             </label>
           </div>
           <div className="action">
            <Link to={`/events/${event.id}`}>
              Manage
            </Link>
            <Link to={`/events/${event.id}`}>
              Edit
            </Link>
            <Link to={`/events/${event.id}`}>
              View
            </Link>
           </div>
         </div>
         <div className="tickets">
         </div>
      </div>
    );
  }
}

export default EventHomeItem;
