import * as TopicUtil from '../util/topic_util.js';
export const RECEIVE_TOPICS = 'RECEIVE_TOPICS';
export const RECEIVE_TOPIC_EVENT = 'RECEIVE_TOPIC_EVENT';
export const RECEIVE_SINGLE_TOPIC = 'RECEIVE_SINGLE_TOPIC';

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

export const receiveTopicEvent = (event) => ({
  type: RECEIVE_TOPIC_EVENT,
  event
});

export const receiveSingleTopic = (topic) => ({
  type: RECEIVE_SINGLE_TOPIC,
  topic
});


export const fetchSingleTopic = (id) => (dispatch) => (
  TopicUtil.fetchSingleTopic(id)
    .then(
      topic => dispatch(receiveSingleTopic(topic))
    )
);
