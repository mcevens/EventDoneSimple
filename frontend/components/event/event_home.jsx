import React from 'react';
import ReactDOM from 'react-dom';
import GlobalHeader from '../global_header';
import { connect } from 'react-redux';
import TopicHeaderListContainer
from '../topic_filter/topic_header_list_container';
import EventHomeItem from './event_home_item';
import DemoCarousel from './carrousel';


class EventHome  extends React.Component {

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
      <div className="event-home">
        <GlobalHeader headerOrigin="event_index" />
        <section className="event-home-body">
          <div className="carousel">
            <DemoCarousel />
          </div>

          <div className="event-list">
            <div className="event-list-search-holder">
              <div className="search-div">
                <h1>Find your next experience</h1>
                <div className="filter-box">
                  <input type="text"
                    placeholder="Search events or categories"
                    ></input>
                  <input type="text"
                    placeholder="City or location"
                    ></input>
                  <select>
                    <option value="All Dates">
                      All Dates
                    </option>assets
                    <option value="Today">
                      Today
                    </option>
                    <option value="Tomorrow">
                      Tomorrow
                    </option>
                    <option value="This week">
                      This week
                    </option>
                    <option value="This Weekend">
                      This Weekend
                    </option>
                    <option value="Next Week">
                      Next Week
                    </option>
                    <option value="Next Month">
                      Next Month
                    </option>
                  </select>
                  <button >
                     Search
                  </button>
                </div>
              </div>
            </div>

            <div className="event-list-item-container">
              <div className="event-for-you">
                 <h2>Events for you in</h2>
                 <input type="text"></input>
              </div>
              <div >
                {eventsData.map(
                  event => <EventHomeItem
                  createBookmark={this.props.createBookmark}
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
