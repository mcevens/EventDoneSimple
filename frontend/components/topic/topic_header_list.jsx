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

    const topicsData = this.props.topics;

    return(
          <div className="topic-list-nav">
            <ul>
            {topicsData.map(
              topic => <TopicListItem key={topic.id} topic={topic}/>
            )}
            </ul>
        </div>
    );
  }
}

export default TopicHeaderList;
