import React from 'react';
import ReactDOM from 'react-dom';
import GlobalHeader from '../global_header';
import { connect } from 'react-redux';
import TopicHeaderListContainer
from '../topic_filter/topic_header_list_container';
import EventIndexItem from './event_index_item';
import EventIndexItemContainer from './event_index_item_container';
import { Link } from 'react-router-dom';

class EventIndex  extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestAllEvent();
  }

  render(){

    let eventsData = this.props.events;
    let topic = {};
    if (this.props.topic) {
      eventsData = this.props.eventsCategory;
      topic = this.props.topic;
    }

    return(
      <div className="event-index">
        <GlobalHeader headerOrigin="event_index" />
        <section className="event-index-body">
          <div className="event-index-wrapper">
            <section className="event-index-search">
              <div className="map-placeholder">

              </div>
              <div className="filter-placeholder">
                 <div className="filter-location-search">
                    <input type="text" placeholder="Enter location" />
                 </div>
                 <div className="filter-list">
                   <ul>
                     <li>CATEGORY</li>
                      <ul>
                        <li><Link to="/events">All Categories</Link></li>
                         <li>
                            <TopicHeaderListContainer topic={topic}  />
                         </li>
                      </ul>
                     <li>EVENT TYPE</li>
                     <li>DATE</li>
                     <li>PRICE</li>
                   </ul>
                 </div>

              </div>
            </section>
            <section className="event-index-content">
              <h1>Events</h1>
                <div >
                  {eventsData.map(
                    event => <EventIndexItemContainer
                    key={event.id} event={event}/>
                  )}
              </div>
            </section>
          </div>
        </section>
      </div>
    );
  }

}
export default EventIndex;
