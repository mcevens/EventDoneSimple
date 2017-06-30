import React from 'react';
import { Link } from 'react-router-dom';

class EventHomeItem extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    debugger;
    const event = this.props.event;
    e.preventDefault();
      this.props.createBookmark(event.id)
        .then(data => this.props.history.push(`/`));
  }

  render(){
    const event = this.props.event;
    const currentUser = this.props.current_user;
    let bookmarked = 'event-not-bookmarked';
    let tooltip = 'Save';
    let displaybookmark = 'none';
    debugger
    if (event.bookmarked === true){
      bookmarked = 'event-bookmarked' ;
      tooltip = 'Save';
    }

    if (currentUser){
      displaybookmark = 'block';
    }



    return(
      <div className="event-home-item">
         <div className="event-home-item-header">
            <Link to={`/events/${event.id}`}>
              <span>
                 <div className="event-home-item-header-image">
                   <img src={event.image_url} height="165" width="330"></img>
                     <div className="event-home-item-footer-image">
                         <label>FREE</label>
                     </div>
                   </div>
                 <div className="event-home-item-header-text">
                   <div>
                     {  event.start_date_full_date }
                   </div>
                   <div>
                     {  event.title }
                   </div>
                 </div>
               </span>
             </Link>
         </div>
         <div className="event-home-item-footer">

           <div className="event-home-item-footer-text">
             <div className="event-home-item-footer-text-label">
               <label>{ `#${event.topic_name}` } </label>
             </div>
             <div className="event-home-item-footer-actions">
               <div>
                 <form onSubmit={this.handleSubmit}>
                 <button style={{display:'none'}}>
                    Share
                 </button>
               </form>
               </div>
               <div>
                 <form onSubmit={this.handleSubmit}>
                 <button title={tooltip}>
                   <span style={{display:displaybookmark}}
                     className={bookmarked} id="rock">

                   </span>
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
