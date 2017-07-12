import React from 'react';
import { connect} from 'react-redux';
import GlobalHeader from '../global_header';

import {
  Route,
  Redirect,
  Switch,
  Link,
} from 'react-router-dom';

class HomeSearch extends React.Component {
    constructor() {
    super();
    this.state = { searchTerm: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // this.props.fetchSearchGiphys('golden+retriever');
  }

  handleChange(e) {
    this.setState({ searchTerm: e.currentTarget.value });
    this.props.fetchSearchEvents(e.currentTarget.value);
  }


  handleSubmit(e) {
    e.preventDefault();
    let searchTerm = this.state.searchTerm.split(' ').join('+');
    this.props.fetchSearchEvents(searchTerm);
  }

  render(){
    return(
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
              <button  type="submit" onClick={this.handleSubmit}>
                 Search
              </button>
            </div>
          </div>
            </div>
  );
  }
}

export default HomeSearch;
