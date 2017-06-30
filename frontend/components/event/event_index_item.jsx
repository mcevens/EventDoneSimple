import React from 'react';
import { Link } from 'react-router-dom';

class EventIndexItem extends React.Component{
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
    let bookmarked = 'event-not-bookmarked';
    if (event.bookmarked){
      bookmarked = 'event-bookmarked' ;
    }
    return(
      <div className="event-index-item">
         <div className="event-index-item-header">
            <Link to={`/events/${event.id}`}>
              <span>
                 <div className="event-index-item-header-image">
                   <img src="{event.image_url}"></img>
                 </div>
                 <div className="event-index-item-header-text">
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
         <div className="event-index-item-footer">
           <div className="event-index-item-footer-image">
               <label>FREE</label>
           </div>
           <div className="event-index-item-footer-text">
             <div className="event-index-item-footer-text-label">
               <label>{ `#${event.topic_name}` } </label>
             </div>
             <div className="event-index-item-footer-actions">
               <div>
                 <form onSubmit={this.handleSubmit}>
                   <button style={{display:'none'}}>
                      Share
                   </button>
               </form>
               </div>
               <div>
                 <form onSubmit={this.handleSubmit}>
                   <button className={bookmarked}>
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

export default EventIndexItem;
