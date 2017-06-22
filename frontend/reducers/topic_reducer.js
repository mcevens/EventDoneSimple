import {RECEIVE_TOPICS} from '../actions/topic_action.js';

import { merge } from 'lodash';
const defaultState = {};

const TopicReducer = (state = defaultState, action ) => {
  Object.freeze(state);
  console.log(RECEIVE_TOPICS);

  let newState;
  switch (action.type) {
    case RECEIVE_TOPICS:
        newState = {};
        merge(newState, state, action.topics);
        return action.topics;
    default:
      return state;
  }
};

export default TopicReducer;
