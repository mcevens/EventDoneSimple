export const fetchAllEventBookmark = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/event_bookmarks'
  });
};

export const createEventBookmark = (eventBookmark) => {
  return $.ajax({
    method: 'POST',
    url: 'api/event_bookmarks/',
    data : { eventBookmark }
  });
};

export const deleteEventBookmark = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/event_bookmarks/${id}`
  });
};
