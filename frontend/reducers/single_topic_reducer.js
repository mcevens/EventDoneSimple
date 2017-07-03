import { RECEIVE_SINGLE_TOPIC}
  from '../actions/topic_action.js';

import { merge } from 'lodash';
const defaultState = {
  events: []
};

const singleTopicReducer = (state = defaultState, action ) => {
  Object.freeze(state);

  let newState;
  switch (action.type) {
    case RECEIVE_SINGLE_TOPIC:
      return action.topic;
    default:
      return state;
  }
};

export default singleTopicReducer;
