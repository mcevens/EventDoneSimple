import * as TopicUtil from '../util/topic_util.js';
export const RECEIVE_TOPICS = 'RECEIVE_TOPICS';

export const receiveTopics = topics => {
  return ({
    type: RECEIVE_TOPICS,
    topics
  });
};

export const requestAllTopic = () => (dispatch) => {
  //debugger
  return TopicUtil.fetchAllTopic()
  .then(topics => dispatch(receiveTopics(topics)));
};
