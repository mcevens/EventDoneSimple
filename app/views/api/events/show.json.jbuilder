json.event do
  json.extract! @event, :id, :title, :start_date, :start_time, :end_date, :end_time,:description, :adresse_line1, :image_url, :topic_id, :subtopic_id, :topic_name
end

json.tickets do
  json.array! @event.tickets, partial: 'api/tickets/ticket', as: :ticket
end
