export const fetchAllEvent = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/events'
  });
};

export const fetchSingleEvent = (id) =>{
  return $.ajax({
    method: 'GET',
    url: `api/events/${id}`
  });
};

export const createEvent = (post) => {
  return $.ajax({
    method: 'POST',
    url: 'api/events/',
    data : { post }
  });
};

export const editEvent = (post) => {
  const id = post["id"];
  return $.ajax({
    method: 'PATCH',
    url: `api/events/${id}`,
    data : { post }
  });
};

export const deleteEvent = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/events/${id}`
  });
};
