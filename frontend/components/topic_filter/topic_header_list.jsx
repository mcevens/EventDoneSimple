import React from 'react';
import TopicListItem from './topic_list_item';
import { Route } from 'react-router-dom';

class TopicHeaderList extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
      this.props.requestAllTopic();
  }

  render(){
    let topicsData = this.props.topics;
    let topicsToShow = [];
    if (this.props.topic.topic) {
      topicsData = [];
      topicsData.push(this.props.topic.topic);
    }

    return(
          <div className="topic-filter">
            <ul >
            {topicsData.map(
              topic => <TopicListItem key={topic.id} topic={topic}/>
            )}
            </ul>
        </div>
    );
  }
}

export default TopicHeaderList;
