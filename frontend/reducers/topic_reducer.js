import RECEIVE_TOPICS from '../actions/topic_action';
const defaultState = {};

const TopicReducer = (state = defaultState, action ) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_TOPICS:
        action.topics.forEach(topic =>{
          newState[topic.id] = topic;
        });
      return Object.assign({}, state, newState);
    default:
      return state;
  }
};

export default TopicReducer;
