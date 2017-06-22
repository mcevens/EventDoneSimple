export const fetchAllTopic = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/topics'
  });
};
