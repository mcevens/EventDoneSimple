import React from 'react';
import { Link } from 'react-router-dom';

class TopicListItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const topic = this.props.topic;
    return(
          <li>
            <Link to={`/topics/${topic.id}`} >
              {topic.name}
            </Link>
          </li>
    );
  }
}

export default TopicListItem;
