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

export const createEvent = (event) => {
  return $.ajax({
    method: 'POST',
    url: 'api/events/',
    dataType: "json",
    contentType:false,
    processData: false,
    data: event
  });
};

export const editEvent = (event) => {
  const id = event["id"];
  return $.ajax({
    method: 'PATCH',
    url: `api/events/${id}`,
    data : { event }
  });
};

export const deleteEvent = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/events/${id}`
  });
};
