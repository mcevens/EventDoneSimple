import React from 'react';
import ReactDOM from 'react-dom';
import GlobalHeader from '../global_header';
import { connect } from 'react-redux';
import TopicHeaderListContainer
from '../topic_filter/topic_header_list_container';
import EventHomeItem from './event_home_item';
import EventHomeItemContainer from './event_home_item_container';
import DemoCarousel from './carrousel';
import HomeSearch from '../search/home_search';
import HomeSearchContainer from '../search/home_search_container';


class EventHome  extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestAllEvent();
  }

  render(){

    const eventsData = this.props.events;

    return(
      <div className="event-home">
        <GlobalHeader headerOrigin="event_index" />
        <section className="event-home-body">
          <div className="carousel">
            <DemoCarousel />
          </div>

          <div className="event-list">
            <HomeSearchContainer />
            <div className="event-list-item-container">
              <div className="event-for-you">
                 <h2>Events for you in</h2>
                 <input type="text"></input>
              </div>
              <div >
                {eventsData.map(
                  event => <EventHomeItemContainer
                  key={event.id}
                  current_user={this.props.currentUser}
                  event={event}/>
                )}
              </div>
            </div>
            <div className="event-category-list">
            </div>
          </div>
        </section>
      </div>
    );
  }

}
export default EventHome;
