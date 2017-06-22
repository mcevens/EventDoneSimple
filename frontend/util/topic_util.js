export const fetchTopics = success => {
  $.ajax({
    method: 'GET',
    url: 'api/topics',
    success
  });
};
