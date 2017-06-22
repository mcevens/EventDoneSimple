export const selectallTopics = (state) => {
  const topics = state.topics;
  return Object.keys(topics).map(id => topics[id]);
};
