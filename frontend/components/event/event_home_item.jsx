import React from 'react';
import { Link } from 'react-router-dom';

class EventHomeItem extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    const event = this.props.event;
    e.preventDefault();
      this.props.deleteEvent(event.id)
        .then(data => this.props.history.push(`/`));
  }

  render(){
    const event = this.props.event;

    return(
      <div className="event-home-item">
         <div className="event-home-item-header">
            <Link to={`/events/${event.id}`}>
              <span>
                 <div className="event-home-item-header-image">
                   <img src="assets/img_test" height="165" width="330"></img>
                 </div>
                 <div className="event-home-item-header-text">
                   <div>
                     {  event.start_date }
                   </div>
                   <div>
                     {  event.title }
                   </div>
                 </div>
               </span>
             </Link>
         </div>
         <div className="event-home-item-footer">
           <div className="event-home-item-footer-image">
               <label>FREE</label>
           </div>
           <div className="event-home-item-footer-text">
             <div className="event-home-item-footer-text-label">
               <label>{ `#${event.topic_name}` } </label>
             </div>
             <div className="event-home-item-footer-actions">
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
           </div>
         </div>
      </div>
    );
  }
}

export default EventHomeItem;
