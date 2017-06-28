import React from 'react';
import ReactDOM from 'react-dom';
import GlobalHeader from '../global_header';
import { connect } from 'react-redux';
import TopicHeaderListContainer
from '../topic_filter/topic_header_list_container';
import EventIndexItem from './event_index_item';


class EventIndex  extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestAllEvent();
    this.props.requestAllEventBookMark();
  }

  render(){
    const eventsData = this.props.events;
    const eventBookmarksData = this.props.events;


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
                         <li>
                            <TopicHeaderListContainer />
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
                    event => <EventIndexItem key={event.id} event={event}/>
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
