import React from 'react';
import values from 'lodash/values';

import EventIndexItem from '../event/event_index_item';
import EventIndexContainer from '../event/event_index_container';

class CategoryEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchSingleTopic(this.props.match.params.topicId);
  }

  componentWillReceiveProps(newProps){
    if(newProps.match.params.name !== this.props.match.params.name){
      this.props.fetchSingleTopic(newProps.match.params.name);
    }
  }

  render() {
    const topic = this.props.topic;
    let events = topic.events;
    return (
      <div className="category-show">
        <EventIndexContainer topic={topic} eventsCategory={events} />
      </div>
  );

  }
}

export default CategoryEvents;
