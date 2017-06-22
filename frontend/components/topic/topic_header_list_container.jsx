import React from 'react';
import { connect } from 'react-redux';
import TopicHeaderList from './topic_header_list';
import { requestAllTopic } from '../../actions/topic_action';
import { selectallTopics } from '../../reducers/topic_selectors';

const mapStateToProps = (state) => {
  //debugger
  return ( {
  topics: selectallTopics(state)
});
};

const mapDispatchToProps = (dispatch) => {
  return ({
  requestAllTopic: () => dispatch(requestAllTopic())
});
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicHeaderList);
