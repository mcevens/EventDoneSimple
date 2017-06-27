export const selectallEventBookMarks = (state) => {
  const eventBookmarks = state.eventBookmarks;
  return Object.keys(eventBookmarks).map(id => eventBookmarks[id]);
};
