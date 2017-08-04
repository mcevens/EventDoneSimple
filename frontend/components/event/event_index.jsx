import React from 'react';
import ReactDOM from 'react-dom';
import GlobalHeader from '../global_header';
import { connect } from 'react-redux';
import TopicHeaderListContainer
from '../topic_filter/topic_header_list_container';
import EventIndexItem from './event_index_item';
import EventIndexItemContainer from './event_index_item_container';
import { Link } from 'react-router-dom';
import EventMap from './event_map';
import LocationPicker from '../search/location_picker';

class EventIndex  extends React.Component {

  constructor(props){
    super(props);
    this.state = { searchTerm: '' };
    this.state = { searchLocation: '' };
    this.state = { searchDate: 'All Dates' };
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  componentDidMount(){
    let searchTerm = this.state.searchTerm;
    let searchLocation = this.state.searchLocation;
    let searchDate = this.state.searchDate;
    let values =[];
    values.push(searchTerm);
    values.push(searchLocation);
    values.push(searchDate);
    this.props.requestAllEvent(values);
  }

  handleLocationChange(loc) {
    this.setState({
        searchLocation: loc.location
      });
      let searchTerm = this.state.searchTerm;
      let searchLocation = this.state.searchLocation;
      let searchDate = this.state.searchDate;
      let values =[];
      values.push(searchTerm);
      values.push(searchLocation);
      values.push(searchDate);
      this.props.requestAllEvent(values);
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
                <EventMap events={eventsData}/>
              </div>
              <div className="filter-placeholder">
                 <div className="filter-location-search">
                   <LocationPicker
                     placeholder="City or location"
                     errors={this.props.errors}
                       location={this.state.searchLocation}
                       handler={this.handleLocationChange}
                      />
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
