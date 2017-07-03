import {RECEIVE_TOPICS, RECEIVE_TOPIC_EVENT, RECEIVE_SINGLE_TOPIC}
  from '../actions/topic_action.js';

import { merge } from 'lodash';
const defaultState = {
  events: []
};

const TopicReducer = (state = defaultState, action ) => {
  Object.freeze(state);

  let newState;
  switch (action.type) {
    case RECEIVE_TOPICS:
        newState = {};
        merge(newState, state, action.topics);
        return action.topics;
    case RECEIVE_TOPIC_EVENT:
      newState = Object.assign({}, state);
      newState.events = newState.events.map(event => {
        if (action.event.id === event.id) {
          return action.event;
        } else {
          return event;
        }
      });
      return newState;
    // case RECEIVE_SINGLE_TOPIC:
    // debugger
    //   return action.topic;
    default:
      return state;
  }
};

export default TopicReducer;
