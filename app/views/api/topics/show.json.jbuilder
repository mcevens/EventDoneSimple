json.topic do
  json.extract! @topic, :id, :name
end

json.events do
  json.array! @topic.events, partial: 'api/events/event', as: :event
end
