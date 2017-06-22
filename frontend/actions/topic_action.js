export const RECEIVE_TOPICS = 'RECEIVE_TOPICS';

export const receiveTopics = topics => {
  return {
    type: RECEIVE_TOPICS,
    topics
  };
};
