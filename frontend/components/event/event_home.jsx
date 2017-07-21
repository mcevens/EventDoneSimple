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
    this.state = { searchTerm: '' };
    this.state = { searchLocation: '' };
    this.state = { searchDate: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.handleDate = this.handleDate.bind(this);
  }

  componentDidMount(){
    // this.props.requestAllEvent();
    // let searchTerm = this.state.searchTerm.split(' ').join('+');
    let searchTerm = this.state.searchTerm;
    let searchLocation = this.state.searchLocation;
    let searchDate = this.state.searchDate;
    let values =[];
    values.push(searchTerm);
    values.push(searchLocation);
    values.push(searchDate);
    this.props.requestAllEvent(values);
  }

  handleSubmit(e) {
    e.preventDefault();
    let searchTerm = this.state.searchTerm;
    let searchLocation = this.state.searchLocation;
    let searchDate = this.state.searchDate;

    let values =[];
    values.push(searchTerm);
    values.push(searchLocation);
    values.push(searchDate);
    this.props.requestAllEvent(values);
  }

  handleLocation(e) {
    e.preventDefault();
    this.setState({ searchLocation: e.currentTarget.value });
  }

  handleDate(e){
    e.preventDefault();
    this.setState({ searchDate: e.currentTarget.value });
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ searchTerm: e.currentTarget.value });
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
            <div className="event-list-search-holder">
                <div className="search-div">
                  <h1>Find your next experience</h1>
                  <div className="filter-box">
                    <input type="text"
                      placeholder="Search events or categories"
                      onChange={this.handleChange}
                      value={this.state.searchTerm}
                      ></input>
                    <input type="text"
                      placeholder="City or location"
                      onChange={this.handleLocation}
                      value={this.state.searchLocation}
                      ></input>
                    <select onChange={this.handleDate}>
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
                    <button  type="submit" onClick={this.handleSubmit}>
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
