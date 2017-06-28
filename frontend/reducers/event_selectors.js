import { values } from 'lodash';

export const selectallEvents = (state) => {
  const events = state.events;
  return Object.keys(events).map(id => events[id]);
};

export const selectEvent = (state, id) => {
  const event = state.events[id] || {};
  return event;
};
