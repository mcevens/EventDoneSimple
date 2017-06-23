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

    return(
      <div className="event-index-item">
         <div className="event-index-item-image-group">
           <div>
             <img></img>
           </div>
           <div>
             <label>FREE</label>
           </div>
         </div>
         <div className="event-index-item-text-group">
            <div>
              <div>
                {  event.start_date }
              </div>
              <div>
                {  event.title }
              </div>
            </div>
            <div className="event-index-item-text-group-footer">
              <div className="event-index-item-text-group-footer-text">

              </div>
              <div className="event-index-item-text-group-footer-actions">
                <Link to={`/events/${event.id}/edit`}>
                  {"Edit"}
                </Link>
                <div>
                  <form onSubmit={this.handleSubmit}>
                  <button>
                     Delete
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
