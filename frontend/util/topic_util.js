export const fetchAllTopic = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/topics'
  });
};

export const fetchSingleTopic= (topicName) => (
  $.ajax({
    method: 'GET',
    url: `api/topics/${topicName}`
  })
);
